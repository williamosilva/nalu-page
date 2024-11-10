import { ChevronRight } from "lucide-react";

export default function SecondButton() {
  return (
    <button className="flex relative items-center group text-[#6b6a6a] hover:text-[#4e4c4e] transition-all duration-300 cursor-pointer">
      <p className="whitespace-nowrap text-lg">See project</p>
      <ChevronRight
        className="transition-all duration-300 group-hover:left-[120%] absolute left-[114%] top-1/2 transform -translate-y-1/2"
        size={20}
      />
      <span className="absolute -bottom-[10%] left-[63%] -translate-x-1/2 w-0 h-[2px] bg-[#6b6a6a] group-hover:w-[120%] transition-all duration-300"></span>
    </button>
  );
}
