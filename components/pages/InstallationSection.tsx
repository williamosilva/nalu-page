/* eslint-disable */
/* tslint:disable */
import { Lexend } from "@next/font/google";
import { cn } from "@/lib/utils";

const lexendFont = Lexend({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const configExample = `/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/nalu-table/**/*.{js,jsx}" // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`;

export default function InstallationSection() {
  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <div className="w-full h-full flex flex-col gap-1">
        <p
          className={cn(
            "text-lg font-medium text-[#320E48]",
            lexendFont.className
          )}
        >
          1. Install the package
        </p>
        <div className="bg-[#F7F7F7] p-4 rounded-lg text-black text-sm flex flex-col gap-2">
          <p>npm install nalu-table</p>
          <p className="opacity-50"># or</p>
          <p>yarn add nalu-table</p>
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-1">
        <p
          className={cn(
            "text-lg font-medium  text-[#320E48]",
            lexendFont.className
          )}
        >
          2. Tailwind CSS Requirement
        </p>
        <p className="opacity-70 text-sm">
          This component requires Tailwind CSS to be installed and configured in
          your project. If you haven't already set up Tailwind CSS, follow these
          steps:
        </p>
        <p className="opacity-70 text-sm m-5">1. Install Tailwind CSS</p>
        <div className="bg-[#F7F7F7] p-4 rounded-lg text-black text-sm flex flex-col gap-2">
          <p>npm install -D tailwindcss postcss autoprefixer</p>
          <p className="opacity-50"># or</p>
          <p>yarn add -D tailwindcss postcss autoprefixer</p>
        </div>
        <p className="opacity-70 text-sm m-5">2. Initialize Tailwind CSS</p>
        <div className="bg-[#F7F7F7] p-4 rounded-lg text-black text-sm flex flex-col gap-2">
          <p>npx tailwindcss init -p</p>
        </div>
        <span className="opacity-70 text-sm m-5 flex gap-1">
          3. Configure your
          <p className="text-[#7523bd] font-medium bg-[#F7F7F7] px-1 rounded-sm">
            tailwind.config.js
          </p>
        </span>
        <div className="bg-[#F7F7F7] p-4 rounded-lg text-black text-sm flex flex-col gap-2">
          <pre>
            <code>{configExample}</code>
          </pre>
        </div>
        <p className="opacity-70 text-sm m-5">
          4. Add Tailwind's directives to your CSS
        </p>
        <div className="bg-[#F7F7F7] p-4 rounded-lg text-black text-sm flex flex-col gap-2">
          <p className="opacity-50">/* In your main CSS file */</p>
          <div className="flex flex-col gap-1">
            <span className="flex gap-1">
              {" "}
              <p className="text-[#d53042]"> @tailwind</p>base;
            </span>
            <span className="flex gap-1">
              {" "}
              <p className="text-[#d53042]"> @tailwind</p>components;
            </span>
            <span className="flex gap-1">
              {" "}
              <p className="text-[#d53042]"> @tailwind</p>utilities;
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-1">
        <p
          className={cn(
            "text-lg font-medium text-[#320E48]",
            lexendFont.className
          )}
        >
          3. Start using the component
        </p>
        <div className="bg-[#F7F7F7] p-4 rounded-lg text-black text-sm flex flex-col gap-2">
          <p>import NaluTable from "nalu-table";</p>

          <span className="flex gap-1">
            import "nalu-table/dist/style.css";{" "}
            <p className="opacity-50">
              //Recommended for best visual experience
            </p>{" "}
          </span>
          <p className="opacity-50">// Your component code</p>
        </div>
      </div>
      <div className="bg-[#F7F7F7] p-4 rounded-lg text-black text-sm flex flex-col gap-2">
        <p>
          <strong>Important: </strong> The table component will not be styled
          correctly if Tailwind CSS is not properly installed and configured in
          your project.
        </p>
      </div>
    </div>
  );
}
