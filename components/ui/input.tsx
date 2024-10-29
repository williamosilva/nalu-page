import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder = "Pesquisar...", ...props }, ref) => {
    return (
      <div className="relative w-full ">
        <input
          type={type}
          className={cn(
            "flex  w-full h-auto rounded-xl border border-input px-3 py-2 text-sm transition-colors",
            "bg-white pl-3 pr-10", // Adicionando background e padding para o ícone
            "file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "file:text-foreground placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          placeholder={placeholder}
          {...props}
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
