import type React from "react";
import clsx from "clsx";

export interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit";
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick: () => void;
}

export function Button({
  children,
  type,
  size = "md",
  variant = "primary",
  href,
  className,
  disabled,
  icon,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "font-light font-mono rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-iron-50";

  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-wine-berry-950 hover:bg-wine-berry-800 enabled:hover:scale-105 disabled:bg-wine-berry-500 disabled:text-iron-50",
    secondary:
      "bg-firefly-600 hover:bg-firefly-400 enabled:hover:scale-105 disabled:bg-firefly-300 disabled:text-iron-50",
    outline:
      "border border-wine-berry-800 text-iron-50 enabled:hover:scale-105 hover:bg-wine-berry-300",
    ghost: "text-blue-500",
  };

  // About the clsx function: https://antondevtips.com/blog/conditional-class-rendering-in-react-using-clsx
  const classes = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className,
    disabled && "opacity-50 cursor-not-allowed",
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {icon} {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {icon} {children}
    </button>
  );
}
