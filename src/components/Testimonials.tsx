
import React from 'react';
import { Star, ThumbsUp, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sara Oliveira',
      company: 'Inovações Tecnológicas',
      text: "Este produto transformou nosso negócio. Vimos um aumento de 215% nas conversões já no primeiro mês.",
      stars: 5,
      image: "/placeholder.svg" // Usando o placeholder disponível
    },
    {
      name: 'Miguel Rodriguez',
      company: 'Especialistas em Crescimento',
      text: "Eu estava cético no início, mas os resultados falam por si mesmos. Nossa receita dobrou desde a implementação.",
      stars: 5,
      image: "/placeholder.svg"
    },
    {
      name: 'Jennifer Lima',
      company: 'Soluções Digitais',
      text: "O melhor investimento que fizemos este ano. Os custos de aquisição de clientes caíram 40% quase imediatamente.",
      stars: 4,
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
            <ThumbsUp size={16} className="text-yellow-600" /> 
            Clientes Satisfeitos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Não acredite apenas em nossa palavra. Veja o que nossos clientes experimentaram após usar nossa solução.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center mr-3">
                  {testimonial.image ? 
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" /> :
                    <User className="text-blue-500" size={24} />
                  }
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4 bg-gray-50 p-3 rounded-lg border-l-4 border-blue-400">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
