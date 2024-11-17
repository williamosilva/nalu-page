export default function Footer() {
  return (
    <footer className=" border-t border-gray-300 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        {/* Links */}
        <div className="flex space-x-6">
          <a
            href="/about"
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            Sobre
          </a>
          <a
            href="/services"
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            Serviços
          </a>
          <a
            href="/contact"
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            Contato
          </a>
        </div>
        {/* Nome da página e logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-gray-700 font-semibold text-lg">
            Minha Página
          </span>
        </div>
      </div>
    </footer>
  );
}
