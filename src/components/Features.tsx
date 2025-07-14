import React from 'react';
import { Brain, Shield, Clock, Heart, Users, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms trained on thousands of pet skin conditions for accurate detection.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Instant Results',
      description: 'Get comprehensive analysis results within seconds of uploading your pet\'s photo.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your pet\'s photos are processed securely and never stored or shared with third parties.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      title: 'Veterinarian Approved',
      description: 'Developed in collaboration with licensed veterinarians to ensure medical accuracy.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Easy to Use',
      description: 'Simple interface designed for pet owners of all technical backgrounds.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Award,
      title: 'Proven Accuracy',
      description: '95% accuracy rate in detecting common skin conditions in cats and dogs.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose FurSaver?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced AI technology makes pet health monitoring accessible, accurate, and stress-free for both you and your furry companions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pet Images Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Pet Parents Everywhere
            </h3>
            <p className="text-gray-600">
              Helping keep cats and dogs healthy with AI-powered early detection
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Golden Retriever" 
                className="w-full h-48 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Tabby Cat" 
                className="w-full h-48 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Husky Dog" 
                className="w-full h-48 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Persian Cat" 
                className="w-full h-48 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;