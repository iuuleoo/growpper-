import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  full?: boolean;
  isLoading?: boolean;
}

export function Button({
  children,
  variant = "primary",
  full = false,
  isLoading = false,
  ...rest
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-all active:scale-[.97] disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], full && "w-full")}
      disabled={isLoading || rest.disabled}
      {...rest}
    >
      {isLoading ? "Carregando..." : children}
    </button>
  );
}
