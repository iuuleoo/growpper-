"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Como funciona o processo de redução de parcelas?",
    answer:
      "Analisamos seu contrato de financiamento imobiliário e identificamos oportunidades de renegociação com o banco ou portabilidade para instituições com taxas menores. Todo o processo é feito com segurança jurídica.",
  },
  {
    question: "Qual o prazo para conseguir a redução?",
    answer:
      "O processo completo leva em média de 30 a 60 dias, dependendo da complexidade do caso e da resposta do banco.",
  },
  {
    question: "Quais documentos são necessários?",
    answer:
      "Você precisará do contrato de financiamento, comprovantes de renda atualizados, documentos pessoais e comprovante de residência.",
  },
  {
    question: "Quem pode solicitar a redução?",
    answer:
      "Qualquer pessoa que tenha um financiamento imobiliário ativo pode solicitar. A viabilidade depende da análise do contrato e do perfil de crédito.",
  },
  {
    question: "Há algum custo para a simulação?",
    answer:
      "Não. A simulação e análise inicial são totalmente gratuitas. Você só paga se conseguirmos reduzir suas parcelas.",
  },
  {
    question: "Como meus dados são protegidos?",
    answer:
      "Seguimos rigorosamente a LGPD. Seus dados são criptografados e utilizados apenas para análise do seu financiamento.",
  },
  {
    question: "Posso cancelar o processo?",
    answer:
      "Sim, você pode cancelar a qualquer momento antes da assinatura do novo contrato, sem custos.",
  },
  {
    question: "A redução é garantida?",
    answer:
      "Trabalhamos com uma taxa de sucesso superior a 85%, mas a redução depende da análise individual de cada caso.",
  },
  {
    question: "Como entro em contato pelo WhatsApp?",
    answer:
      "Clique no botão de WhatsApp em qualquer parte do site e você será direcionado para nossa equipe de atendimento.",
  },
  {
    question: "Qual a economia média conseguida?",
    answer:
      "A economia varia entre 30% e 70% do valor da parcela, dependendo das condições atuais do contrato e do mercado.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full max-w-3xl mx-auto py-14 px-6">
      
      <h2 className="text-2xl font-semibold text-center text-neutral-900 tracking-tight mb-14">
        Perguntas Frequentes
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="text-sm font-medium">{faq.question}</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="p-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
