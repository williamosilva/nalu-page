import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  state?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      placeholder = "Pesquisar...",
      state = true,
      onChange,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            `flex w-full h-auto rounded-xl border border-input 
            ${state ? "px-3 py-4" : "px-0 py-3 user-select-none"}  
            text-sm cursor-pointer`,
            `bg-white ${
              state ? "pl-3 pr-10 text-black" : "pl-0 pr-0 text-white"
            } `,
            "file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "file:text-foreground placeholder:text-muted-foreground",
            "focus:outline-0 focus:outline-none",
            "focus-visible:outline-0 focus-visible:outline-none",
            "focus:ring-0 focus-visible:ring-0",
            "focus:shadow-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          style={{
            WebkitTapHighlightColor: "transparent",
            outline: "none",
          }}
          ref={ref}
          placeholder={state ? placeholder : ""}
          onChange={onChange}
          {...props}
        />
        <Search
          className={`absolute transform -translate-y-1/2 -translate-x-1/2 h-4 w-4 text-gray-400
            ${state ? "left-[88%] top-1/2" : "left-1/2 top-1/2"}`}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
