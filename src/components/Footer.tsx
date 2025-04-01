
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Check, Award, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Selos de confiança */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex flex-col items-center">
            <Shield className="text-blue-600 mb-2" size={32} />
            <p className="font-semibold text-sm">Pagamento 100% Seguro</p>
          </div>
          <div className="flex flex-col items-center">
            <Check className="text-green-600 mb-2" size={32} />
            <p className="font-semibold text-sm">Satisfação Garantida</p>
          </div>
          <div className="flex flex-col items-center">
            <Award className="text-yellow-600 mb-2" size={32} />
            <p className="font-semibold text-sm">Produto Premiado</p>
          </div>
          <div className="flex flex-col items-center">
            <MessageCircle className="text-purple-600 mb-2" size={32} />
            <p className="font-semibold text-sm">Suporte 24/7</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">NomeProduto</h2>
            <p className="text-gray-600 mt-2">Transforme seu negócio hoje</p>
          </div>
          
          <div className="flex flex-wrap gap-8">
            <div>
              <h3 className="font-semibold mb-3">Empresa</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Sobre Nós</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Contato</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Recursos</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Casos de Sucesso</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Privacidade</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Termos</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Informações de contato */}
        <div className="border-t border-gray-200 pt-8 pb-6">
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-gray-600">
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-blue-500" />
              <span>Av. Paulista, 1000 - São Paulo, SP</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2 text-blue-500" />
              <span>contato@nomeproduto.com.br</span>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-2 text-blue-500" />
              <span>(11) 98765-4321</span>
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} NomeProduto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
