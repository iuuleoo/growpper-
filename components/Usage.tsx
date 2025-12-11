"use client";

import { motion } from "framer-motion";

export default function Usage() {
  return (
    <section
      id="como-funciona"
      className="w-full py-20 px-6 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-neutral-900 tracking-tight"
        >
          Como funciona
        </motion.h2>

        {/* LISTA */}
        <div className="mt-10 flex flex-col gap-10 text-left">

          {/* ITEM 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-base font-semibold text-neutral-900">
              1. Simulação Gratuita
            </p>
            <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
              Preencha o formulário com os dados do seu financiamento e receba uma estimativa imediata de economia.
            </p>
          </motion.div>

          {/* ITEM 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="text-base font-semibold text-neutral-900">
              2. Análise Detalhada
            </p>
            <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
              Nossa equipe analisa seu contrato e identifica as melhores oportunidades de redução.
            </p>
          </motion.div>

          {/* ITEM 3 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="text-base font-semibold text-neutral-900">
              3. Negociação
            </p>
            <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
              Cuidamos de toda a negociação com o banco ou buscamos portabilidade para instituições com taxas menores.
            </p>
          </motion.div>

          {/* ITEM 4 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="text-base font-semibold text-neutral-900">
              4. Economia Garantida
            </p>
            <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
              Você assina o novo contrato e começa a pagar menos imediatamente.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
