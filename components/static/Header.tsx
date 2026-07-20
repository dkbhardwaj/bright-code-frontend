"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "../../styles/navigation.module.css";
import Button from "../buttons/Button";
import { MENU_LINKS, CTA_LINK } from "../../content/site";

interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMobileMenuOpen]);

  const HEADER_THEME: "light" | "dark" = "light";

  return (
    <header
      className={`${Style.header} ${Style[HEADER_THEME]} ${className ?? "absolute w-full top-0"} z-[99]`}
    >
      <div className="container relative">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className={Style.logoLink}>
            <Image
              src="/brightcode_logo_light.svg"
              width={220}
              height={50}
              alt="Bright Code"
              className={Style.logoLight}
              priority
            />
            <Image
              src="/brightcode_logo.svg"
              width={220}
              height={50}
              alt="Bright Code"
              className={Style.logoDark}
              priority
            />
          </Link>

          {/* NAV */}
          <ul
            className={`${Style.navList} ${isMobileMenuOpen ? Style.navOpen : ""}`}
          >
            {MENU_LINKS.map((item) => (
              <li key={item.label} className={Style.menuItem}>
                <Link
                  href={item.path}
                  className={Style.menuLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* CTA */}
            <li className={Style.btnWrap}>
              <Button
                href={CTA_LINK.path}
                className="my-[10px] no-arrow btn-primary"
                target="_self"
              >
                {CTA_LINK.label}
              </Button>
            </li>
          </ul>

          {/* HAMBURGER */}
          <button
            className={`${Style.hamburger} ${isMobileMenuOpen ? Style.active : ""}`}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
