import React from 'react';
import { Shield, Award, Users, CheckCircle } from 'lucide-react';

const Trust = () => {
  const stats = [
    { number: '50,000+', label: 'Pets Analyzed', icon: Users },
    { number: '95%', label: 'Accuracy Rate', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Shield },
    { number: '100%', label: 'Privacy Protected', icon: CheckCircle }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Pet Owners Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of pet parents who trust FurSaver to help keep their furry family members healthy and happy.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Medical Grade Security & Accuracy
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              FurSaver meets the highest standards for medical data processing and privacy protection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">HIPAA Compliant</h4>
              <p className="text-sm text-gray-600">Medical-grade data protection</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Vet Approved</h4>
              <p className="text-sm text-gray-600">Endorsed by veterinarians</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">FDA Guidelines</h4>
              <p className="text-sm text-gray-600">Follows medical device standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;