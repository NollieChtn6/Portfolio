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
  title?: string;
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
  title,
}: ButtonProps) {
  const baseStyles =
    "inline-flex w-auto font-light font-mono rounded-lg transition-all duration-300 flex items-center justify-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cornflower-blue-400 disabled:cursor-not-allowed cursor-pointer";

  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-navy-blue-800 text-iron-50 hover:bg-navy-blue-500 enabled:hover:scale-105 disabled:bg-navy-blue-500 disabled:text-iron-50",
    secondary:
      "bg-cornflower-blue-600 hover:bg-cornflower-blue-400 enabled:hover:scale-105 disabled:bg-cornflower-blue-300 disabled:text-iron-50",
    outline:
      "border text-iron-50 border-navy-blue-800 enabled:hover:scale-105 hover:bg-navy-blue-500",
    ghost: "text-iron-50 hover:scale-105",
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
        title={title}
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
      title={title}
    >
      {icon} {children}
    </button>
  );
}
