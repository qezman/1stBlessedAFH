import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  to?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  to,
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex w-full sm:w-auto items-center justify-center gap-2 font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer hover:-translate-y-[1px]";

  const variantStyles = {
    primary:
      "bg-navy-800 text-white hover:bg-navy-950 focus:ring-navy-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_4px_14px_rgba(11,22,40,0.08)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_20px_rgba(11,22,40,0.12)]",
    secondary: "bg-navy-600 text-white hover:bg-navy-800 focus:ring-navy-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
    gold: "bg-gold-500 text-white hover:bg-gold-600 focus:ring-gold-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_14px_rgba(217,168,53,0.15)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_6px_20px_rgba(217,168,53,0.2)] font-semibold",
    outline:
      "border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white focus:ring-navy-800",
    ghost: "text-navy-800 hover:bg-navy-800/10 focus:ring-navy-800",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const combinedClasses = twMerge(
    clsx(baseStyles, variantStyles[variant], sizeStyles[size], className),
  );

  if (to) {
    return (
      <Link href={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
