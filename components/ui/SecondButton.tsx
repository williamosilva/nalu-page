import { ChevronRight } from "lucide-react";

export default function SecondButton() {
  const openLinkInNewTab = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      console.error("URL inválida ou não fornecida.");
    }
  };

  return (
    <button
      onClick={() =>
        openLinkInNewTab(
          "https://github.com/williamosilva/nalu-table-component"
        )
      }
      className="flex relative items-center group text-[#6b6a6a] hover:text-[#4e4c4e] transition-all duration-300 cursor-pointer"
    >
      <p className="whitespace-nowrap text-lg">See project</p>
      <ChevronRight
        className="transition-all duration-300 sm:group-hover:left-[120%] group-hover:left-[100%] absolute sm:left-[114%] left-[88%] top-1/2 transform -translate-y-1/2"
        size={20}
      />
      <span className="absolute -bottom-[10%] left-[63%] -translate-x-1/2 w-0 h-[2px] bg-[#6b6a6a] group-hover:w-[120%] transition-all duration-300"></span>
    </button>
  );
}
