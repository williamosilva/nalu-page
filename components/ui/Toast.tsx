import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ToastProps {
  message: string;
  duration?: number;
  counter?: number;
}

interface Toast {
  id: number;
  message: string;
  duration: number;
}

interface ToastItemProps extends Toast {
  index: number;
  onRemove: (id: number) => void;
  id: number;
}

// Componente individual do Toast
const ToastItem: React.FC<ToastItemProps> = ({
  message,
  duration,
  index,
  onRemove,
  id,
}) => {
  const [show, setShow] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Trigger enter animation
    requestAnimationFrame(() => {
      setShow(true);
    });

    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        setShouldRender(false);
        onRemove(id);
      }, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, id, onRemove]);

  if (!shouldRender) return null;

  return (
    <div
      className={cn(
        "fixed p-4 rounded-md text-neutral-700 z-50 w-[290px] text-sm  font-normal",
        "transform transition-all duration-300 ease-in-out",
        // Initial state: start from the right and invisible
        !show && "translate-x-full opacity-0 scale-95",
        // Final state: centered and visible
        show && "translate-x-0 opacity-100 scale-100",
        "bg-white shadow-md border overflow-hidden "
      )}
      style={{
        bottom: `${index * 4 + 1}rem`,
        right: "1rem",
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <span className="h-full bg-[#9F30E1] w-1 left-0 top-1/2 -translate-y-[50%] text-transparent absolute">
        .
      </span>
      {message}
    </div>
  );
};

// Componente principal que gerencia os Toasts
const Toast: React.FC<ToastProps> = ({
  message,
  duration = 3000,
  counter = 0,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    if (counter > 0) {
      setToasts((prev) => [...prev, { id: counter, message, duration }]);
    }
  }, [counter, message, duration]);

  const removeToast = (id: number): void => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <>
      {toasts.map((toast, index) => (
        <ToastItem
          key={toast.id}
          id={toast.id}
          index={index}
          message={toast.message}
          duration={toast.duration}
          onRemove={removeToast}
        />
      ))}
    </>
  );
};

export default Toast;
