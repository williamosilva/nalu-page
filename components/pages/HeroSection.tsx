import GridPattern from "../../components/ui/animated-grid-pattern";

export default function HeroSection() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">Welcome to Next.js</h1>
      <p className="text-lg mt-3">
        Get started by editing{" "}
        <code className="bg-gray-100 p-1 rounded-md">pages/index.js</code>
      </p>
      <GridPattern maxOpacity={0.1} numSquares={10} />
    </div>
  );
}
