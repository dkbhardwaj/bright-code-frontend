import React from "react";
import Link from "next/link";

export type ButtonVariant =
  | "gradient-blue"
  | "rounded-blue"
  | "rounded-gray"
  | "rounded-white"
  | "rounded-no-arrow";

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
  variant = "gradient-blue",
  className = "",
}: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    "gradient-blue": "gradient-btn-blue",
    "rounded-blue": "rounded-btn blue",
    "rounded-gray": "rounded-btn gray",
    "rounded-white": "rounded-btn white",
    "rounded-no-arrow": "rounded-btn no-arrow",
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
