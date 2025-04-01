
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, ShoppingCart, Gift, Shield, Clock, CreditCard, Lock } from 'lucide-react';

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
            Oferta Especial por Tempo Limitado
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Comece Hoje Mesmo</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Aproveite nossa oferta exclusiva e transforme seu negócio agora.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform transition-all duration-500 hover:shadow-2xl relative">
          {/* Selo de confiança */}
          <div className="absolute -top-5 -right-5 bg-blue-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center z-10 rotate-12 animate-pulse">
            <Shield size={24} className="mr-1" />
            <span className="font-bold text-sm">100% Seguro</span>
          </div>
          
          <div className="p-8 md:p-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Pacote Premium</h3>
              <div>
                <span className="text-gray-500 line-through text-lg">R$997</span>
                <span className="text-3xl font-bold ml-2 text-blue-600">R$497</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                'Acesso completo ao nosso sistema comprovado',
                'Guia passo a passo de implementação',
                'Acesso à comunidade privada',
                'Chamadas semanais de coaching em grupo',
                'Garantia de devolução do dinheiro em 30 dias'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 flex items-start">
              <Gift size={20} className="text-blue-500 mr-2 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-blue-700 font-bold mb-1">
                  BÔNUS EXCLUSIVO:
                </p>
                <p className="text-sm text-blue-700">
                  Os primeiros 50 clientes recebem nosso guia exclusivo de segredos de conversão (valor de R$197) GRÁTIS!
                </p>
              </div>
            </div>
            
            <div className="mb-6 flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Lock size={16} className="mr-1 text-green-500" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center">
                <CreditCard size={16} className="mr-1 text-blue-500" />
                <span>Diversas Formas de Pagamento</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1 text-purple-500" />
                <span>Acesso Imediato</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur-sm opacity-70 animate-pulse"></div>
              <Button 
                className="relative w-full py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-md"
              >
                <ShoppingCart size={20} />
                Comprar Agora - 50% de Desconto
              </Button>
            </div>
            
            <p className="text-sm text-center text-gray-500 mt-4">
              Pagamento seguro • Acesso instantâneo • Garantia de devolução do dinheiro em 30 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
