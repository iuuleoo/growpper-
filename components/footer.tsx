export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-sm font-semibold text-gray-900">Growper</h3>
          <p className="text-xs text-gray-500 mt-2">
            Especialistas em redução de parcelas de financiamento imobiliário.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900">Links</h3>
          <ul className="text-xs text-gray-500 mt-2 space-y-1">
            <li>
              <a href="#" className="hover:underline">Política de Privacidade</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Termos de Uso</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900">Contato</h3>
          <ul className="text-xs text-gray-500 mt-2 space-y-1">
            <li>CNPJ: 00.000.000/0001-00</li>
            <li>contato@growper.com.br</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-200 py-4">
        <p className="text-center text-xs text-gray-500">
          © 2025 Growper. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
