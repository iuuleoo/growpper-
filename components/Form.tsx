"use client";

import { CheckCircle, Clock, Shield, AlertTriangle, Lock } from "lucide-react";

export default function Form() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <p className="font-medium text-sm flex items-center gap-1 text-neutral-900">
            <span>⚡</span> Últimas vagas disponíveis
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold text-neutral-900 leading-tight mt-4 tracking-tight">
            Pare de pagar caro no seu financiamento
          </h1>

          <p className="text-neutral-500 mt-4 text-lg leading-relaxed">
            Mais de <span className="font-semibold text-neutral-800">2.847 pessoas</span> já reduziram suas parcelas em até 70%.  
            Garanta sua análise gratuita antes que as vagas acabem.
          </p>

          {/* INFO CARDS — ultra clean */}
          <div className="mt-8 flex flex-col gap-4">

            <div className="flex items-center gap-3 bg-white border border-neutral-100 rounded-xl px-5 py-4">
              <CheckCircle className="text-green-600" size={22} />
              <p className="text-neutral-600 text-sm">
                <span className="font-medium">Economia comprovada:</span> Média de R$ 850/mês de redução
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white border border-neutral-100 rounded-xl px-5 py-4">
              <Clock size={22} className="text-neutral-500" />
              <p className="text-neutral-600 text-sm">
                <span className="font-medium">Análise rápida:</span> Resposta em até 48 horas úteis
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white border border-neutral-100 rounded-xl px-5 py-4">
              <Shield size={22} className="text-neutral-500" />
              <p className="text-neutral-600 text-sm">
                <span className="font-medium">100% seguro:</span> Processo com segurança jurídica
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white border border-neutral-100 rounded-xl px-5 py-4">
              <AlertTriangle size={22} className="text-neutral-500" />
              <p className="text-neutral-600 text-sm">
                <span className="font-medium">Atenção:</span> Limitamos 12 análises gratuitas por semana.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT FORM — inputs totalmente brancos */}
        <div className="bg-white rounded-3xl border border-neutral-100 p-10 flex flex-col gap-6">

          <h2 className="text-2xl font-semibold text-neutral-900 tracking-tight">
            Garanta sua análise gratuita
          </h2>

          <p className="text-sm text-neutral-500">
            Preencha o formulário abaixo em 30 segundos
          </p>

          <p className="text-sm text-neutral-400 -mt-2">
            👥 <span className="font-medium text-neutral-600">47 pessoas</span> se cadastraram nas últimas 24h
          </p>

          {/* FORM — inputs e checkbox com fundo branco puro */}
          <div className="flex flex-col gap-5 mt-2">

            <input
              placeholder="Nome completo"
              className="
                w-full bg-white 
                border border-neutral-200 
                rounded-xl px-4 py-3 text-sm
                focus:outline-none focus:ring-2 focus:ring-neutral-300
                transition
              "
            />

            <input
              placeholder="(11) 99999-9999"
              className="
                w-full bg-white 
                border border-neutral-200 
                rounded-xl px-4 py-3 text-sm
                focus:outline-none focus:ring-2 focus:ring-neutral-300
                transition
              "
            />

            <input
              placeholder="seu@email.com"
              className="
                w-full bg-white 
                border border-neutral-200 
                rounded-xl px-4 py-3 text-sm
                focus:outline-none focus:ring-2 focus:ring-neutral-300
                transition
              "
            />

            <label className="text-sm text-neutral-500 flex gap-2 cursor-pointer select-none">
              <input type="checkbox" className="accent-neutral-900 bg-white border border-neutral-200 rounded-sm" />
              Aceito a Política de Privacidade
            </label>
          </div>

          {/* SECURITY */}
          <p className="text-sm text-neutral-400 flex items-center gap-1 mt-1">
            <Lock size={16} /> Seus dados estão seguros e protegidos
          </p>
        </div>

      </div>
    </section>
  );
}
