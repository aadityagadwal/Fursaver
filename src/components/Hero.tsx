import React, { useState } from 'react';
import { Upload, Camera, Sparkles, Heart } from 'lucide-react';
import ImageUpload from './ImageUpload';
import ChatbotFullscreen from './ChatbotFullscreen';

const Hero = () => {
  const [showUpload, setShowUpload] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatbotMessage, setChatbotMessage] = useState('');

  const handleChatbotOpen = (message: string) => {
    setChatbotMessage(message);
    setShowChatbot(true);
  };

  if (showChatbot) {
    return (
      <ChatbotFullscreen 
        onClose={() => setShowChatbot(false)} 
        initialMessage={chatbotMessage}
      />
    );
  }

  if (showUpload) {
    return <ImageUpload onChatbotOpen={handleChatbotOpen} />;
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Pet Health Detection</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Protect Your Pet's
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Health</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Upload a photo of your cat or dog and get instant AI-powered insights about potential 
              skin conditions. Early detection helps keep your furry friends healthy and happy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => setShowUpload(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
              >
                <Upload className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Upload Photo Now</span>
              </button>
              <button 
                onClick={() => setShowUpload(true)}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 group"
              >
                <Camera className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Take Photo</span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Veterinarian Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Privacy Protected</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Instant Results</span>
              </div>
            </div>
          </div>

          {/* Hero Image with Pet Photos */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                {/* Pet Images Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <img 
                    src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
                    alt="Happy dog" 
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <img 
                    src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
                    alt="Cute cat" 
                    className="w-full h-24 object-cover rounded-lg"
                  />
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI Detection</h3>
                <p className="text-gray-600 mb-4">Advanced machine learning analyzes your pet's skin condition in seconds</p>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Analyzing...</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
              <Sparkles className="h-6 w-6 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;