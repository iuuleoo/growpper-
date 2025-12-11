"use client";

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

        {/* Economia Real */}
        <div className="flex flex-col items-center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-6"
          >
            <path d="M4 8l4 4 3-3 5 5" />
            <path d="M16 14h3v-3" />
          </svg>
          <h3 className="font-semibold text-lg">Economia Real</h3>
          <p className="text-sm mt-2">
            Reduza suas parcelas em até 70% com nossa análise especializada.
          </p>
        </div>

        {/* Segurança Jurídica */}
        <div className="flex flex-col items-center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-6"
          >
            <path d="M12 2l8 4v5c0 5-3.5 10-8 11C7.5 21 4 16 4 11V6l8-4z" />
          </svg>
          <h3 className="font-semibold text-lg">Segurança Jurídica</h3>
          <p className="text-sm mt-2">
            Todo processo com respaldo legal e proteção dos seus direitos.
          </p>
        </div>

        {/* Processo Rápido */}
        <div className="flex flex-col items-center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-6"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l4 2" />
          </svg>
          <h3 className="font-semibold text-lg">Processo Rápido</h3>
          <p className="text-sm mt-2">
            Análise em até 48h e conclusão em média de 30 a 60 dias.
          </p>
        </div>

        {/* Taxa de Sucesso */}
        <div className="flex flex-col items-center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-6"
          >
            <circle cx="12" cy="12" r="9" />
            <polyline points="8 12 11 15 16 9" />
          </svg>
          <h3 className="font-semibold text-lg">Taxa de Sucesso</h3>
          <p className="text-sm mt-2">
            Mais de 85% dos casos conseguem redução significativa.
          </p>
        </div>

      </div>
    </section>
  );
}
