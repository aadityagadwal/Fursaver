import React, { useState, useRef } from 'react';
import { Upload, Camera, X, AlertCircle, CheckCircle, Loader, MessageCircle } from 'lucide-react';
import axios from 'axios';

interface DetectionResult {
  class: string;
  confidence: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface AnalysisResult {
  predictions: DetectionResult[];
  image: {
    width: number;
    height: number;
  };
}

interface ImageUploadProps {
  onChatbotOpen?: (message: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChatbotOpen }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
    setAnalysisResult(null);
    setError(null);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        handleImageSelect(file);
      } else {
        setError('Please select a valid image file.');
      }
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    setError(null);

    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onloadend = async () => {
      const base64Image = (reader.result as string).split(",")[1];

      try {
        const response = await axios.post(
          "https://detect.roboflow.com/fursaver-v2/1",
          base64Image,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            params: {
              api_key: "0AeL1xr9iBFWEIAtmkkp",
            },
          }
        );

        setAnalysisResult(response.data);
      } catch (error) {
        console.error("Error analyzing image:", error);
        setError("Failed to analyze the image. Please try again.");
      } finally {
        setIsAnalyzing(false);
      }
    };
  };

  const resetUpload = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setAnalysisResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getConditionInfo = (className: string) => {
    const conditions: { [key: string]: { name: string; description: string; severity: 'low' | 'medium' | 'high' } } = {
      'dermatitis': {
        name: 'Dermatitis',
        description: 'Skin inflammation that may cause redness, itching, and discomfort.',
        severity: 'medium'
      },
      'hotspot': {
        name: 'Hot Spot',
        description: 'Acute moist dermatitis that requires immediate attention.',
        severity: 'high'
      },
      'fungal': {
        name: 'Fungal Infection',
        description: 'Fungal skin infection that may spread if left untreated.',
        severity: 'medium'
      },
      'bacterial': {
        name: 'Bacterial Infection',
        description: 'Bacterial skin infection requiring veterinary treatment.',
        severity: 'high'
      },
      'allergic': {
        name: 'Allergic Reaction',
        description: 'Allergic skin reaction that may require identifying triggers.',
        severity: 'medium'
      }
    };

    return conditions[className.toLowerCase()] || {
      name: className,
      description: 'Skin condition detected. Please consult with a veterinarian.',
      severity: 'medium' as const
    };
  };

  const getSeverityColor = (severity: 'low' | 'medium' | 'high') => {
    switch (severity) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
    }
  };

  const handleChatAboutResults = () => {
    if (!analysisResult || !onChatbotOpen) return;

    let chatMessage = "I just received my AI analysis results. ";
    
    if (analysisResult.predictions.length > 0) {
      const conditions = analysisResult.predictions.map(p => {
        const info = getConditionInfo(p.class);
        return `${info.name} (${Math.round(p.confidence * 100)}% confidence)`;
      }).join(', ');
      
      chatMessage += `The analysis detected: ${conditions}. Can you tell me more about these conditions, their causes, symptoms, and what I should do next?`;
    } else {
      chatMessage += "No specific conditions were detected, but I'd like to learn more about pet skin health and what to watch for.";
    }

    onChatbotOpen(chatMessage);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6">
          <h2 className="text-2xl font-bold mb-2">AI Skin Disease Detection</h2>
          <p className="opacity-90">Upload a clear photo of your pet's skin condition for instant AI analysis</p>
        </div>

        <div className="p-6">
          {!imagePreview ? (
            /* Upload Area */
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 transition-colors duration-200">
              <div className="space-y-4">
                <div className="flex justify-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Upload className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <Camera className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Pet Photo</h3>
                  <p className="text-gray-600 mb-4">
                    Take a clear, well-lit photo of the affected skin area
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    Choose Image
                  </button>
                </div>
                <div className="text-sm text-gray-500">
                  Supported formats: JPG, PNG, GIF (Max 10MB)
                </div>
              </div>
            </div>
          ) : (
            /* Image Preview and Analysis */
            <div className="space-y-6">
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Pet skin condition"
                  className="w-full max-w-md mx-auto rounded-lg shadow-md"
                />
                <button
                  onClick={resetUpload}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {!analysisResult && !isAnalyzing && (
                <div className="text-center">
                  <button
                    onClick={analyzeImage}
                    className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 font-semibold shadow-lg"
                  >
                    Analyze Image
                  </button>
                </div>
              )}

              {isAnalyzing && (
                <div className="text-center py-8">
                  <div className="inline-flex items-center space-x-3 text-blue-600">
                    <Loader className="h-6 w-6 animate-spin" />
                    <span className="text-lg font-medium">Analyzing image...</span>
                  </div>
                  <p className="text-gray-600 mt-2">Our AI is examining your pet's skin condition</p>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <span className="text-red-700">{error}</span>
                </div>
              )}

              {analysisResult && (
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-700 font-medium">Analysis Complete</span>
                  </div>

                  {analysisResult.predictions.length > 0 ? (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Detected Conditions:</h3>
                      {analysisResult.predictions.map((prediction, index) => {
                        const conditionInfo = getConditionInfo(prediction.class);
                        return (
                          <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{conditionInfo.name}</h4>
                              <div className="flex items-center space-x-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(conditionInfo.severity)}`}>
                                  {conditionInfo.severity.toUpperCase()}
                                </span>
                                <span className="text-sm text-gray-600">
                                  {Math.round(prediction.confidence * 100)}% confidence
                                </span>
                              </div>
                            </div>
                            <p className="text-gray-700 text-sm">{conditionInfo.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-700">
                        No specific skin conditions detected. If you have concerns about your pet's skin, 
                        consider consulting with a veterinarian for a professional examination.
                      </p>
                    </div>
                  )}

                  {/* Chat About Results Button */}
                  <div className="text-center">
                    <button
                      onClick={handleChatAboutResults}
                      className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 font-semibold shadow-lg flex items-center space-x-2 mx-auto"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>Chat About These Results</span>
                    </button>
                    <p className="text-sm text-gray-600 mt-2">
                      Get detailed information and advice about your analysis results
                    </p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-800 mb-1">Important Disclaimer</h4>
                        <p className="text-yellow-700 text-sm">
                          This AI analysis is for informational purposes only and should not replace professional 
                          veterinary diagnosis. Please consult with a licensed veterinarian for proper treatment 
                          and care recommendations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;