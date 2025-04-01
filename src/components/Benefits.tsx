
import React from 'react';
import { CheckCircle, Zap, Clock, TrendingUp, Shield, Award } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: 'Aumente Conversões',
      description: 'Nosso sistema comprovado ajuda você a converter mais visitantes em clientes pagantes.',
      icon: <TrendingUp className="text-purple-500" size={24} />
    },
    {
      title: 'Economize Tempo',
      description: 'Automatize seus processos e faça mais com menos esforço.',
      icon: <Clock className="text-blue-500" size={24} />
    },
    {
      title: 'Aumente Receita',
      description: 'Veja crescimento mensurável na receita do seu negócio em 30 dias.',
      icon: <Zap className="text-yellow-500" size={24} />
    },
    {
      title: 'Garantia de Qualidade',
      description: 'Produto testado e aprovado por especialistas do mercado.',
      icon: <Shield className="text-green-500" size={24} />
    },
    {
      title: 'Suporte Premium',
      description: 'Atendimento personalizado para resolver suas dúvidas a qualquer momento.',
      icon: <Award className="text-red-500" size={24} />
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Por Que Nossa Solução Funciona
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Nosso sistema foi testado e aperfeiçoado com milhares de empresas como a sua.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="mb-3 p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
