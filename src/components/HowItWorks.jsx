import React from 'react';
import { motion } from 'framer-motion';
import { Video, FileUp, MessageCircle, Shield, Monitor, Users } from 'lucide-react';
import { scrollToSection } from '../utils/scrollTo';

export default function HowItWorks() {

  const features = [
    {
      icon: <Monitor size={36} />,
      title: "Contrate sem sair de casa",
      description: "Advocacia on-line, mais dinâmica, moderna e acessível. Atualmente, todo o procedimento judicial está digital, inclusive as audiências. Nosso escritório aderiu a essa prática e oferece a possibilidade de consultas e reuniões por videoconferência — agendamos uma data e um horário e você será atendido sem ter que se deslocar."
    },
    {
      icon: <FileUp size={36} />,
      title: "Envio de documentos online",
      description: "O envio de documentos também pode ser feito de forma digital, de maneira segura e prática. Todo o fluxo é conduzido por vias eletrônicas, preservando o sigilo das suas informações."
    },
    {
      icon: <Shield size={36} />,
      title: "Tudo prático, rápido e sigiloso",
      description: "Seja em demanda extrajudicial ou judicial, o acompanhamento do seu caso é feito com discrição e agilidade. Protegemos seus dados e sua privacidade em cada etapa do processo."
    },
    {
      icon: <MessageCircle size={36} />,
      title: "Acompanhamento via WhatsApp",
      description: "Para maior comodidade, mensalmente você recebe no seu WhatsApp informações atualizadas sobre o andamento do seu caso. Acompanhe cada etapa sem burocracia."
    },
    {
      icon: <Users size={36} />,
      title: "Atendimentos presenciais",
      description: "Possuímos convênio com vários coworkings espalhados pelo Brasil, de forma que, caso prefira que o atendimento seja no formato tradicional, iremos até você. Mas, se preferir vir ao nosso encontro, nosso escritório base fica na cidade de São Paulo/SP — teremos grande prazer em lhe receber."
    },
    {
      icon: <Video size={36} />,
      title: "Atendimento remoto",
      description: "Todo o processo pode ser conduzido à distância, desde a primeira consulta até o acompanhamento processual. Ideal para quem valoriza praticidade e tempo."
    }
  ];

  return (
    <section id="como-funciona" className="bg-[#7c7471] py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#b89b5d] text-sm uppercase tracking-[0.2em] font-semibold mb-2 block">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Contrate sem sair de casa
          </h2>
          <div className="w-24 h-1 bg-[#b89b5d] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-200 text-lg leading-relaxed">
            Advocacia on-line, mais dinâmica, moderna e acessível. Atualmente todo o procedimento judicial está digital, até mesmo as audiências. Nosso escritório aderiu a essa prática para oferecer um atendimento mais prático, rápido e sigiloso.
          </p>
        </motion.div>

        {/* Grid de funcionalidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 border-t-2 border-[#b89b5d] text-center hover:bg-white/10 transition-colors duration-300"
            >
              <div className="text-[#b89b5d] flex justify-center mb-5">
                {feat.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-3">{feat.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Chamada para ação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-200 mb-6 text-lg">
            Entre em contato agora e converse com um advogado.
          </p>
          <button
            onClick={() => scrollToSection('contato')}
            className="bg-[#b89b5d] hover:bg-[#9c8348] text-white px-10 py-3 uppercase text-sm tracking-wider transition-all duration-300 shadow-lg hover:shadow-[#b89b5d]/30 cursor-pointer border-none"
          >
            Fale Conosco
          </button>
        </motion.div>

      </div>
    </section>
  );
}
