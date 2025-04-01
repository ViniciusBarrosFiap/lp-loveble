
import React from 'react';
import { CheckCircle, Zap, Clock, TrendingUp } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: 'Increase Conversion',
      description: 'Our proven system helps you convert more visitors into paying customers.',
      icon: <TrendingUp className="text-purple-500" size={24} />
    },
    {
      title: 'Save Time',
      description: 'Automate your processes and get more done with less effort.',
      icon: <Clock className="text-blue-500" size={24} />
    },
    {
      title: 'Grow Revenue',
      description: 'See measurable growth in your business revenue within 30 days.',
      icon: <Zap className="text-yellow-500" size={24} />
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Why Our Solution Works</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our system has been tested and perfected with thousands of businesses like yours.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-start mb-4">
                <div className="mr-3 flex-shrink-0">{benefit.icon}</div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
