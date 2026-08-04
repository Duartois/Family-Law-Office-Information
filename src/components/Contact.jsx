import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { scrollToSection } from '../utils/scrollTo';

// CONFIGURAÇÃO DO FORMULÁRIO
const FORM_EMAIL = "matheusdugoncalves@gmail.com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  // Estados para feedback e erros
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'
  const [errors, setErrors] = useState({}); // Armazena erros de validação

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Limpa o erro do campo assim que o usuário começa a digitar novamente
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // Função de Validação
  const validate = () => {
    const newErrors = {};
    
    // 1. Validação de E-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Por favor, insira um e-mail válido.";
    }

    // 2. Validação de Celular (Formato brasileiro com DDD: 11999999999)
    const phoneRegex = /^(?:\+?55)?[\s.-]?(\(?\d{2}\)?[\s.-]?)?9?\d{4}[\s.-]?\d{4}$/;
    // Vamos remover caracteres não numéricos para facilitar a validação estrita
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      newErrors.phone = "Por favor, insira um número de celular válido (com DDD).";
    }

    // 3. Validação de Texto (Mínimo 2 palavras completas)
    const wordsArray = formData.message.trim().split(/\s+/);
    if (wordsArray.length < 2) {
      newErrors.message = "A mensagem deve conter pelo menos 2 palavras completas.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true se não houver erros
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // IMPEDIR a página de recarregar

    // Executa a validação. Se falhar, para aqui.
    if (!validate()) return;

    setStatus('sending');

    try {
      // Envia para o FormSubmit via AJAX
      const response = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: "Novo contato do site - Coppí & Duarte"
        } )
      });

      const data = await response.json();

      if (data.success === "true") {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Limpa o formulário
        
        setTimeout(() => {
          setStatus(null);
        }, 6000); // Esconde a mensagem de sucesso após 6 segundos
      } else {
        setStatus('error');
        setTimeout(() => setStatus(null), 6000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <section id="contato" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Informações de Contato */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#b89b5d] mb-6">Entre em Contato</h2>
          <p className="text-gray-300 mb-10 leading-relaxed">
            Oferecemos atendimento online (via vídeo conferência) ou presencial em nosso escritório na Av. Paulista. O acompanhamento do seu caso é feito mensalmente via WhatsApp para maior comodidade e sigilo.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start group">
              <Phone className="text-[#b89b5d] mt-1 mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-white font-medium text-sm uppercase tracking-wide mb-1">Telefone</h4>
                <p className="text-gray-300">(11) 3164-3810</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <MessageCircle className="text-[#b89b5d] mt-1 mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-white font-medium text-sm uppercase tracking-wide mb-1">WhatsApp</h4>
                <a href="https://wa.me/5511987679957" className="text-gray-300 hover:text-[#b89b5d] transition-colors">
                  (11 ) 98767-9957
                </a>
              </div>
            </div>
            
            <div className="flex items-start group">
              <Mail className="text-[#b89b5d] mt-1 mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-white font-medium text-sm uppercase tracking-wide mb-1">E-mail</h4>
                <p className="text-gray-300">{FORM_EMAIL}</p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <MapPin className="text-[#b89b5d] mt-1 mr-4 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-white font-medium text-sm uppercase tracking-wide mb-1">Endereço</h4>
                <p className="text-gray-300">Av. Paulista, nº 1.439, 1º andar, Cj. 12  
Bela Vista - CEP 01311-200, São Paulo/SP</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Formulário de Contato Integrado */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/50 backdrop-blur p-8 md:p-10 border border-gray-700"
        >
          <h3 className="text-2xl font-serif text-white mb-6">Envie uma mensagem</h3>
          
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label className="block text-xs text-[#b89b5d] uppercase tracking-wider mb-2">Nome Completo</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className={`w-full bg-gray-900 text-white p-3 border focus:outline-none transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-700 focus:border-[#b89b5d]'
                }`} 
              />
              {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-[#b89b5d] uppercase tracking-wider mb-2">E-mail</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className={`w-full bg-gray-900 text-white p-3 border focus:outline-none transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-700 focus:border-[#b89b5d]'
                  }`} 
                />
                {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
              </div>
              <div>
                <label className="block text-xs text-[#b89b5d] uppercase tracking-wider mb-2">Telefone / WhatsApp</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                  className={`w-full bg-gray-900 text-white p-3 border focus:outline-none transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-gray-700 focus:border-[#b89b5d]'
                  }`} 
                />
                {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>}
              </div>
            </div>

            <div>
              <label className="block text-xs text-[#b89b5d] uppercase tracking-wider mb-2">Como podemos ajudar?</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4" 
                placeholder="Descreva brevemente seu caso..."
                className={`w-full bg-gray-900 text-white p-3 border focus:outline-none transition-colors ${
                  errors.message ? 'border-red-500' : 'border-gray-700 focus:border-[#b89b5d]'
                }`}
              ></textarea>
              {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message}</span>}
            </div>

            {/* Botão de Enviar (Proteção contra duplo clique) */}
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className={`w-full flex justify-center items-center py-4 uppercase text-sm tracking-widest transition-all duration-300 mt-2 font-medium ${
                status === 'sending' 
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                  : 'bg-[#b89b5d] hover:bg-[#9c8348] text-white'
              }`}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
              {status !== 'sending' && <Send size={16} className="ml-2" />}
            </button>

            {/* Mensagens de Feedback (Sucesso ou Erro) */}
            <div className="min-h-[24px]">
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center text-green-400 mt-2"
                >
                  <CheckCircle size={18} className="mr-2" />
                  <span className="text-sm">Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center text-red-400 mt-2"
                >
                  <AlertCircle size={18} className="mr-2" />
                  <span className="text-sm">Ocorreu um erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.</span>
                </motion.div>
              )}
            </div>
            
          </form>
        </motion.div>
        
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 tracking-wide">
        <p>&copy; {new Date().getFullYear()} COPPI & DUARTE ADVOGADAS ASSOCIADAS. Todos os direitos reservados.</p>
      </div>
    </section>
  );
}