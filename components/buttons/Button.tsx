import React from "react";
import Link from "next/link";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "primary-small"
  | "secondary-small"
  | "tertiary-small"
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
  variant,
  className = "",
}: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    "primary": "btn-primary",
    "secondary": "btn-secondary",
    "tertiary": "btn-tertiary",
    "primary-small": "btn-primary btn-small",
    "secondary-small": "btn-secondary btn-small",
    "tertiary-small": "btn-tertiary btn-small",
    "gradient-blue": "btn-primary",
    "rounded-blue": "btn-primary",
    "rounded-gray": "btn-tertiary",
    "rounded-white": "btn-secondary",
    "rounded-no-arrow": "btn-primary no-arrow",
    "btn-blue-rect": "btn-primary",
  };

  const variantClass = variant ? variants[variant] : "";
  const finalClassName = `${variantClass} ${className}`.trim();

  if (!href) {
    return (
      <button
        type="button"
        className={finalClassName}
      >
        <span>{children}</span>
      </button>
    );
  }

  return (
    <Link
      href={href}
      target={target}
      className={finalClassName}
    >
      <span>{children}</span>
    </Link>
  );
}
