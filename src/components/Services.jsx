import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Scale, Heart, Baby, FileText, Briefcase } from 'lucide-react';
import { scrollToSection } from '../utils/scrollTo';


// Lista detalhada das áreas de atuação com os informativos
const areas = [
    {
        title: "Divórcio",
        icon: <Heart size={24} />,
        info: "Tratamos de divórcios consensuais e litigiosos, buscando sempre a melhor solução para a reorganização da estrutura familiar. Nosso foco é a resolução de conflitos com empatia, garantindo a partilha de bens justa e o cumprimento dos direitos de ambas as partes."
    },
    {
        title: "Guarda de Menores",
        icon: <Baby size={24} />,
        info: "Atuação focada no melhor interesse da criança ou adolescente. Atuamos na definição de guarda unilateral, compartilhada ou alternada, bem como na regulamentação de visitas, sempre priorizando a estabilidade emocional e o bem-estar dos menores."
    },
    {
        title: "Pensões Alimentícias",
        icon: <Scale size={24} />,
        info: "Acompanhamos todo o processo de fixação, revisão (para aumento ou diminuição) e execução de pensões alimentícias. Nosso objetivo é assegurar o sustento necessário com base na real capacidade financeira do alimentante e nas reais necessidades do alimentado."
    },
    {
        title: "Tutela e Curatela",
        icon: <FileText size={24} />,
        info: "Assessoria jurídica na nomeação e destituição de tutores (para menores) e curadores (para adultos com incapacidade civil). Guiamos a família em todo o processo legal exigido pelo Estatuto da Pessoa com Deficiência e pelo Código Civil."
    },
    {
        title: "Inventários e Partilhas",
        icon: <Briefcase size={24} />,
        info: "Realizamos inventários judiciais e extrajudiciais (em cartório), focando na agilidade e segurança jurídica da transferência de patrimônio. Minimizamos conflitos entre herdeiros e estruturamos a partilha de forma eficiente."
    },
    {
        title: "Planejamento Sucessório",
        icon: <FileText size={24} />,
        info: "Elaboração de testamentos, doações e estruturação de Holdings Patrimoniais. Essa prática antecipada evita litígios futuros, otimiza a tributação e garante que o seu patrimônio seja transmitido exatamente da forma que você deseja."
    },
    {
        title: "Liberação de FGTS (Doença)",
        icon: <Scale size={24} />,
        info: "Ações judiciais para a liberação imediata do saldo de FGTS em casos de doenças graves ou terminais, garantindo que o cliente tenha acesso rápido aos recursos necessários para o custeio de tratamentos médicos."
    }
];

export default function Services() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="areas" className="bg-gray-50 py-24">
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#b89b5d] text-sm uppercase tracking-widest font-semibold">Especialidades</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2 mb-4">Áreas de Atuação</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Clique em cada tema abaixo para saber como podemos proteger sua família e seu patrimônio.</p>
                </motion.div>

                {/* Lista estilo Acordeão (Accordion) */}
                <div className="space-y-4">
                    {areas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white border-l-4 border-[#b89b5d] shadow-sm rounded-r-lg overflow-hidden"
                        >
                            {/* Cabeçalho do Card (Clicável) */}
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="text-[#b89b5d]">
                                        {area.icon}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-serif text-gray-800 font-medium">
                                        {area.title}
                                    </h3>
                                </div>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-gray-400"
                                >
                                    <ChevronDown size={24} />
                                </motion.div>
                            </button>

                            {/* Conteúdo Expansível (O Informativo) */}
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-6 md:px-8 md:pb-8 border-t border-gray-100 bg-gray-50/50">
                                            <p className="text-gray-600 leading-relaxed py-4 md:py-6 max-w-3xl">
                                                {area.info}
                                            </p>
                                            <div className="flex justify-start">
                                                <button
                                                    onClick={() => scrollToSection('contato')}
                                                    className="inline-flex items-center text-[#b89b5d] text-sm font-semibold hover:text-[#9c8348] transition-colors bg-transparent border-none cursor-pointer"
                                                >
                                                    Falar sobre {area.title.toLowerCase()} com um advogado
                                                    <ChevronDown size={16} className="ml-1 rotate-[-90deg]" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center text-gray-500 mt-16 text-sm italic">
                    Consulte-nos sobre outros assuntos não destacados.
                </p>
            </div>
        </section>
    );
}