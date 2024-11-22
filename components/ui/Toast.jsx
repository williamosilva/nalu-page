import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Componente individual do Toast
const ToastItem = ({ message, type, duration, index, onRemove, id }) => {
  const [show, setShow] = useState(true);

  const color = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        onRemove(id);
      }, 300);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, id, onRemove]);

  return (
    <div
      className={cn(
        "fixed p-4 rounded-md text-white z-50",
        "transform transition-all duration-300 ease-in-out",
        show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
        color[type]
      )}
      style={{
        bottom: `${index * 4 + 1}rem`,
        right: "1rem",
        transition: "all 300ms ease-in-out, bottom 300ms ease-in-out",
      }}
    >
      {message}
    </div>
  );
};

// Componente principal que gerencia os Toasts
export default function Toast({
  message,
  type = "success",
  duration = 3000,
  counter = 0,
}) {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (counter > 0) {
      setToasts((prev) => [...prev, { id: counter, message, type, duration }]);
    }
  }, [counter, message, type, duration]);

  const removeToast = (id) => {
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
}
