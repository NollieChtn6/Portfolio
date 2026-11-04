import clsx from "clsx";
import type React from "react";
import { Link } from "react-router-dom";

export interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit";
  variant?: "primary" | "ghost";
  href?: string;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  external?: boolean;
}

export function Button({
  children,
  type = "button",
  variant = "primary",
  href,
  className,
  disabled,
  icon,
  onClick,
  ariaLabel,
  external,
}: ButtonProps) {
  const classes = clsx("btn", variant === "ghost" && "btn-ghost", className);

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {icon}
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href} className={classes} aria-label={ariaLabel}>
        {icon}
        {children}
      </Link>
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
      {icon}
      {children}
    </button>
  );
}
