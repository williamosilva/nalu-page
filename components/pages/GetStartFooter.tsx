import { Poppins } from "@next/font/google";

import { cn } from "@/lib/utils";

const poppinsFont = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function GetStartFooter() {
  const openLinkInNewTab = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      console.error("URL inválida ou não fornecida.");
    }
  };

  return (
    <div className="w-full gap-8 flex flex-col justify-center items-center h-96 bg-gradient-to-t from-[#a131e21a] to-[#c16df107]">
      <p
        className={cn(
          "text-4xl font-semibold text-[#3b3b3b] sm:w-[500px] w-[250px]  text-center  ",
          poppinsFont.className
        )}
      >
        Organize and Manipulate, Together
      </p>
      <p
        onClick={() =>
          openLinkInNewTab("https://www.npmjs.com/package/nalu-table")
        }
        className="py-2 px-3 bg-[#cb72ff] text-sm text-white font-medium rounded-lg shadow hover:bg-[#bb65ec] transition-all duration-300 ease-in-out cursor-pointer"
      >
        Get started with Nalu Table
      </p>
    </div>
  );
}
