import Image from "next/image";
import Linkedin from "../../assets/logotipo-do-linkedin.png";
import Github from "../../assets/github-logo.png";
import { Globe } from "lucide-react";
import { Poppins } from "@next/font/google";

import { cn } from "@/lib/utils";

const poppinsFont = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const links = [
  { id: "docs", label: "Docs" },
  { id: "example", label: "Example" },
];

export default function Footer({ onLinkClick }) {
  return (
    <footer className="  border-gray-100 bg-white flex flex-col items-center">
      <div className="w-full   px-4  sm:px-6 lg:px-14 py-14 flex justify-between md:flex-row flex-col md:gap-0 gap-12 items-center">
        {/* Nome da página e logo */}
        <div className="flex items-center md:items-start w-full  flex-col gap-2">
          <div
            className={cn(
              "text-lg select-none font-medium text-[#3b3b3b]",
              poppinsFont.className
            )}
          >
            Nalu table
          </div>
          {/* <p className="opacity-75 text-base">
            Versatile table for your analytical data
          </p> */}
          {/* <span className="text-gray-700 font-semibold text-lg">
            Minha Página
          </span> */}
        </div>
        {/* Links */}
        <div className="flex gap-16 flex-row w-full justify-center mr-0">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`} // Fallback para navegadores sem JS
              onClick={(e) => {
                e.preventDefault();
                onLinkClick(link.id);
              }}
              className="text-gray-600 hover:text-gray-900 text-base font-medium"
            >
              {link.label}
            </a>
          ))}

          {/* <a
            href="/about"
            className="text-gray-600 hover:text-gray-900 text-base font-medium"
          >
            Example
          </a>
          <a
            href="/services"
            className="text-gray-600 hover:text-gray-900 text-base font-medium"
          >
            Docs
          </a> */}
          <a
            href="https://github.com/WilliamSilvaOliveiraa/nalu-table-component"
            target="_blank"
            className="text-gray-600 hover:text-gray-900 text-base font-medium"
          >
            Contact
          </a>
        </div>
        {/* Redes sociais */}

        <div className="flex gap-6 w-full  justify-center md:justify-end">
          <a
            href="
             https://williamsilva.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="border opacity-70 p-[10px] transition-all duration-300 ease-in-out rounded-full text-[#b8b8b8] border-[#b8b8b8] hover:bg-[#ececec] "
          >
            <Globe width={14} height={14} color="#000000" />
          </a>
          <a
            href="
             https://github.com/williamosilva"
            target="_blank"
            rel="noopener noreferrer"
            className="border opacity-70 p-[10px] transition-all duration-300 ease-in-out rounded-full text-[#b8b8b8] border-[#b8b8b8] hover:bg-[#ececec] "
          >
            <Image src={Github} alt="Logo" width={14} layout="intrinsic" />
          </a>
          <a
            href="
              https://www.linkedin.com/in/williamsilva2005"
            target="_blank"
            rel="noopener noreferrer"
            className="border opacity-70 p-[10px] transition-all duration-300 ease-in-out rounded-full text-[#b8b8b8] border-[#b8b8b8] hover:bg-[#ececec] "
          >
            <Image src={Linkedin} alt="Logo" width={14} layout="intrinsic" />
          </a>
        </div>
      </div>
      <div className="border-t w-full flex m pt-8 md:pt-2 pb-4 justify-center items-center text-sm text-[#aaa] gap-8  md:gap-32 md:flex-row flex-col">
        <span className="">
          Brought to you by{" "}
          <a
            href="https://williamoliveirasilva.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#aaa] underline leading-6"
          >
            william.
          </a>
        </span>
        <p>© 2024 Nalu Table. All rights reserved.</p>
      </div>
    </footer>
  );
}
