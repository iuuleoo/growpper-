"use client";

import { CheckCircle, Clock, Shield, AlertTriangle, Lock } from "lucide-react";

export default function Form() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}
        <div>
          <p className="font-medium text-sm flex items-center gap-1">
            <span>⚡</span> Últimas vagas disponíveis
          </p>

          <h1 className="text-2xl md:text-4xl font-bold text-neutral-900 leading-tight mt-4">
            Pare de pagar caro no seu financiamento
          </h1>

          <p className="text-neutral-600 mt-4 text-lg">
            Mais de <span className="font-semibold">2.847 pessoas</span> já reduziram suas parcelas em até 70%.  
            Garanta sua análise gratuita antes que as vagas acabem.
          </p>

          {/* BENEFITS */}
          <div className="mt-8 flex flex-col gap-4">

            <div className="flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-5 py-4 shadow-sm">
              <CheckCircle className="text-green-600" size={22} />
              <p className="text-neutral-700 text-sm">
                <span className="font-semibold">Economia comprovada:</span> Média de R$ 850/mês de redução
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-5 py-4 shadow-sm">
              <Clock size={22} className="text-neutral-700" />
              <p className="text-neutral-700 text-sm">
                <span className="font-semibold">Análise rápida:</span> Resposta em até 48 horas úteis
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-5 py-4 shadow-sm">
              <Shield size={22} className="text-neutral-700" />
              <p className="text-neutral-700 text-sm">
                <span className="font-semibold">100% seguro:</span> Processo com total segurança jurídica
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-5 py-4 shadow-sm">
              <AlertTriangle size={22} className="text-neutral-700" />
              <p className="text-neutral-700 text-sm">
                <span className="font-semibold">Atenção:</span> Devido à alta demanda, limitamos 12 análises gratuitas por semana.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT FORM - WHITE CARD */}
        <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 p-10 flex flex-col gap-6">

          <h2 className="text-2xl font-semibold text-neutral-900">
            Garanta sua análise gratuita
          </h2>

          <p className="text-sm text-neutral-500">
            Preencha o formulário abaixo em 30 segundos
          </p>

          <p className="text-sm text-neutral-500 -mt-3">
            👥 <span className="font-medium">47 pessoas</span> se cadastraram nas últimas 24h
          </p>

          {/* FORM */}
          <div className="flex flex-col gap-5 mt-2">

            <input
              placeholder="Nome completo"
              className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none"
            />

            <input
              placeholder="(11) 99999-9999"
              className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none"
            />

            <input
              placeholder="seu@email.com"
              className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none"
            />

            <label className="text-sm text-neutral-600 flex gap-2 mt-1">
              <input type="checkbox" />
              Aceito receber contato e concordo com o tratamento dos meus dados conforme a Política de Privacidade
            </label>
          </div>

          <p className="text-sm text-neutral-500 flex items-center gap-1 mt-2">
            <Lock size={16} /> Seus dados estão seguros e protegidos
          </p>
        </div>
      </div>
    </section>
  );
}
