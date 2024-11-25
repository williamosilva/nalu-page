import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ToastType = "success" | "error" | "warning";

interface ToastItemProps {
  message: string;
  type: ToastType;
  duration: number;
  index: number;
  onRemove: (id: number) => void;
  id: number;
}

interface Toast {
  id: number;
  message: string;
  type: ToastType;
  duration: number;
}

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  counter?: number;
}

// Componente individual do Toast
const ToastItem: React.FC<ToastItemProps> = ({
  message,
  type,
  duration,
  index,
  onRemove,
  id,
}) => {
  const [show, setShow] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  const color: Record<ToastType, string> = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
  };

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
        "fixed p-4 rounded-md text-white z-50",
        "transform transition-all duration-300 ease-in-out",
        // Initial state: start from the right and invisible
        !show && "translate-x-full opacity-0 scale-95",
        // Final state: centered and visible
        show && "translate-x-0 opacity-100 scale-100",
        color[type]
      )}
      style={{
        bottom: `${index * 4 + 1}rem`,
        right: "1rem",
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {message}
    </div>
  );
};

// Componente principal que gerencia os Toasts
const Toast: React.FC<ToastProps> = ({
  message,
  type = "success",
  duration = 3000,
  counter = 0,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    if (counter > 0) {
      setToasts((prev) => [...prev, { id: counter, message, type, duration }]);
    }
  }, [counter, message, type, duration]);

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
          type={toast.type}
          duration={toast.duration}
          onRemove={removeToast}
        />
      ))}
    </>
  );
};

export default Toast;
