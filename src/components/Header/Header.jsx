// src/components/SportsHeader.jsx
import React, { useEffect, useState } from "react";

import crest from "../../assets/logo.jpg"
import { Close, Menu } from "@mui/icons-material";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Sports", href: "/sports" },
  { label: "Events", href: "/events" },
  { label: "Teams", href: "/teams" },
  { label: "Scores", href: "/scores" },
  { label: "Tickets", href: "/tickets" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-100">
      {/* Brand row */}
      <div className="backdrop-blur shadow-md bg-slate-900/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="/" className="flex items-center gap-3">
            <img src={crest} alt="College Sports logo" className="h-10 w-10 rounded-full" />
            <div className="leading-tight">
              <div className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Mahatma Jyotiba Phule Rohilkhand University
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Official Sports Portal
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV.map((item) => {
              const isActive = active === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  className={`relative rounded px-3 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    isActive
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded bg-amber-400"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href="/tickets"
              className="hidden rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400 md:inline-block"
            >
              Sign In
            </a>
            
            <button
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center rounded md:hidden focus:outline-none focus:ring-2 focus:ring-amber-400"
              onClick={() => setOpen((v) => !v)}
            >
              {
                !open? <Menu className="text-white"/>: <Close className="text-white" />

              }
            </button>
          </div>
        </div>
      </div>

      {/* Sticky shadow when scrolled */}
      <div className={`h-px w-full ${scrolled ? "shadow" : ""}`} />

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900 md:hidden">
          <nav className="grid gap-1" aria-label="Mobile">
            {NAV.map((item) => {
              const isActive = active === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActive(item.label);
                    setOpen(false);
                  }}
                  className={`rounded px-2 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                    isActive
                      ? "bg-amber-50 text-slate-900 dark:bg-amber-400/10 dark:text-white"
                      : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="/tickets"
              className="mt-1 rounded-md bg-slate-900 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              Sign In
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
