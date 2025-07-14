import React from 'react';
import { Upload, Scan, FileText } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Upload Photo',
      description: 'Take a clear photo of the affected area on your pet\'s skin or upload an existing image.',
      step: '01'
    },
    {
      icon: Scan,
      title: 'AI Analysis',
      description: 'Our advanced AI algorithms analyze the image and compare it against our extensive database.',
      step: '02'
    },
    {
      icon: FileText,
      title: 'Get Results',
      description: 'Receive detailed insights, potential conditions, and recommendations for next steps.',
      step: '03'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get professional-grade pet skin analysis in three simple steps. No veterinary knowledge required.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step number */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mb-6 relative">
                <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-full top-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-green-200 transform -translate-y-1/2 ml-8"></div>
                )}
              </div>

              {/* Icon */}
              <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl">
            Start Free Analysis
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;