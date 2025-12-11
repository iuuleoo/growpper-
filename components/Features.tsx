"use client";

import { CheckCircle, ShieldCheck, Timer, TrendingUp } from "lucide-react";

export default function Features() {
  return (
    <section
      id="beneficios"
      className="w-full max-w-6xl mx-auto py-28 px-6 text-center"
    >
      <h2 className="text-3xl font-semibold mb-14">
        Por que escolher a Growper?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-neutral-700">

        <div className="flex flex-col items-center">
          <CheckCircle size={32} className="mb-4" />
          <h3 className="font-semibold text-lg">Economia Real</h3>
          <p className="text-sm mt-2">
            Reduza suas parcelas em até 70% com nossa análise especializada.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <ShieldCheck size={32} className="mb-4" />
          <h3 className="font-semibold text-lg">Segurança Jurídica</h3>
          <p className="text-sm mt-2">
            Todo processo com respaldo legal e proteção dos seus direitos.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Timer size={32} className="mb-4" />
          <h3 className="font-semibold text-lg">Processo Rápido</h3>
          <p className="text-sm mt-2">
            Análise em até 48h e conclusão em média de 30 a 60 dias.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <TrendingUp size={32} className="mb-4" />
          <h3 className="font-semibold text-lg">Taxa de Sucesso</h3>
          <p className="text-sm mt-2">
            Mais de 85% dos casos conseguem redução significativa.
          </p>
        </div>
      </div>
    </section>
  );
}
