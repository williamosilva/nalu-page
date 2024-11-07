import GridPattern from "../../components/ui/animated-grid-pattern";
import MainTopBar from "../../components/ui/MainTopBar";
import GradualSpacing from "../../components/ui/gradual-spacing";

export default function HeroSection() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <MainTopBar />
      <GradualSpacing
        text="Manage and manipulate"
        className="text-8xl font-extrabold h-28 text-wrap bg-gradient-to-b from-[#AC28ED] to-[#B24DF8]  text-transparent bg-clip-text animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto] bg-[position:0%_center]"
      />

      <GradualSpacing
        text="your items easily"
        className="text-8xl font-extrabold h-28 text-wrap bg-gradient-to-b from-[#AC28ED] to-[#B24DF8]  text-transparent bg-clip-text animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto] bg-[position:0%_center]"
      />
      <GradualSpacing
        duration={0.1}
        className="text-lg mt-3 text-[#6b7280]"
        text="A modern, customizable React table with theming, pagination, and
        advanced features for an intuitive table."
      />

      <div className="opacity-30">
        <GridPattern maxOpacity={0.1} numSquares={10} />
      </div>
    </div>
  );
}
