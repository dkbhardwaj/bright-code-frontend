import React from "react";
import Link from "next/link";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "gradient-blue"
  | "rounded-blue"
  | "rounded-gray"
  | "rounded-white"
  | "rounded-no-arrow"
  | "btn-blue-rect";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  target?: "_self" | "_blank";
  variant?: ButtonVariant;
  className?: string;
};

export default function Button({
  children,
  href,
  target = "_self",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    "primary": "btn-primary",
    "secondary": "btn-secondary",
    "tertiary": "btn-tertiary",
    "gradient-blue": "btn-primary",
    "rounded-blue": "btn-primary",
    "rounded-gray": "btn-tertiary",
    "rounded-white": "btn-secondary",
    "rounded-no-arrow": "btn-primary no-arrow",
    "btn-blue-rect": "btn-primary",
  };

  return (
    <Link
      href={href}
      target={target}
      className={`${variants[variant]} ${className}`}
    >
      <span>{children}</span>
    </Link>
  );
}
