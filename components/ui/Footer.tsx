import Image from "next/image";
import NaluDark from "../../assets/NaluDark.png";
import { Github, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" border-t border-gray-100 bg-white flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex justify-between items-center">
        {/* Nome da página e logo */}
        <div className="flex items-start  flex-col gap-2">
          <div className="flex items-center mr-8 lg:mr-16 gap-2">
            <Image src={NaluDark} alt="Logo" width={32} layout="intrinsic" />
            <span className="text-lg font-medium">Nalu table</span>
          </div>
          <p className="opacity-75 text-base">
            Versatile table for your analytical data
          </p>
          {/* <span className="text-gray-700 font-semibold text-lg">
            Minha Página
          </span> */}
        </div>
        {/* Links */}
        <div className="flex md:space-x-12 md:flex-row flex-col space-x-0 mr-12 md:mr-0">
          <a
            href="/about"
            className="text-gray-600 hover:text-gray-900 text-base font-medium"
          >
            Sobre
          </a>
          <a
            href="/services"
            className="text-gray-600 hover:text-gray-900 text-base font-medium"
          >
            Serviços
          </a>
          <a
            href="/contact"
            className="text-gray-600 hover:text-gray-900 text-base font-medium"
          >
            Contato
          </a>
        </div>
      </div>
      <div className="border-t w-1/2 flex">
        <Github size={20} />
        <Globe size={20} />
      </div>
    </footer>
  );
}
