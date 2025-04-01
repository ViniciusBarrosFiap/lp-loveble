
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, ShoppingCart, Gift } from 'lucide-react';

interface CheckoutSectionProps {
  isVisible: boolean;
}

const CheckoutSection = ({ isVisible }: CheckoutSectionProps) => {
  if (!isVisible) return null;

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-white" id="checkout">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-yellow-300 to-yellow-400 text-yellow-800 rounded-full text-sm font-bold mb-4 animate-pulse">
            Special Limited Time Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Get Started Today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take advantage of our exclusive offer and transform your business now.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform transition-all duration-500 hover:shadow-2xl">
          <div className="p-8 md:p-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Premium Package</h3>
              <div>
                <span className="text-gray-500 line-through text-lg">$997</span>
                <span className="text-3xl font-bold ml-2 text-blue-600">$497</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                'Full access to our proven system',
                'Step-by-step implementation guide',
                'Private community access',
                'Weekly group coaching calls',
                '30-day money-back guarantee'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 flex items-center">
              <Gift size={20} className="text-yellow-500 mr-2 flex-shrink-0" />
              <p className="text-sm text-yellow-700">
                <span className="font-bold">BONUS:</span> First 50 customers get our exclusive conversion secrets guide ($197 value) for FREE!
              </p>
            </div>
            
            <Button 
              className="w-full py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-md"
            >
              <ShoppingCart size={20} />
              Buy Now - 50% Off
            </Button>
            
            <p className="text-sm text-center text-gray-500 mt-4">
              Secure payment • Instant access • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
