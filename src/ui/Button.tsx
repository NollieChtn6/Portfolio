import type React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export interface ButtonProps {
  children?: React.ReactNode;
  type: "button" | "submit";
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "ghost" | "icon";
  href?: string;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  target?: "_blank" | "_self";
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
  ariaLabel,
  target,
}: ButtonProps) {
  const baseStyles =
    "inline-flex w-auto font-light font-mono rounded-lg transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine-berry-500";

  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-wine-berry-800 text-iron-50 hover:bg-wine-berry-700 enabled:hover:scale-105 disabled:bg-wine-berry-500 disabled:text-iron-50",
    secondary:
      "bg-firefly-600 hover:bg-firefly-400 enabled:hover:scale-105 disabled:bg-firefly-300 disabled:text-iron-50",
    outline:
      "border text-iron-50 border-wine-berry-800 enabled:hover:scale-105 hover:bg-wine-berry-300",
    ghost: "hover:scale-105",
    icon: "hover:scale-105",
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
      <NavLink
        to={href}
        target=""
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {icon} {children}
      </NavLink>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {icon} {children}
    </button>
  );
}
