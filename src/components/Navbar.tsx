"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Story", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Wins", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light") {
      setLightMode(true);
      return;
    }

    if (savedTheme === "dark") {
      setLightMode(false);
      return;
    }

    setLightMode(window.matchMedia("(prefers-color-scheme: light)").matches);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { threshold: [0.18, 0.35, 0.55], rootMargin: "-22% 0px -58% 0px" },
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.href.slice(1));
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", lightMode);
    window.localStorage.setItem("theme", lightMode ? "light" : "dark");
  }, [lightMode]);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition duration-500 ${
          scrolled ? "border-b border-[color:var(--line)] bg-[var(--nav-background)] shadow-2xl shadow-black/15 backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <a href="#hero" className="font-heading text-lg font-semibold theme-heading">
            Tanmay<span className="theme-eyebrow">.</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active === item.href.slice(1)
                    ? "bg-[var(--surface)] theme-heading"
                    : "theme-muted hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLightMode((current) => !current)}
              className="hidden min-w-[5.5rem] place-items-center rounded-full border border-[color:var(--line)] px-3 py-2 text-sm font-semibold theme-body transition hover:bg-[var(--surface)] hover:text-[var(--foreground)] md:grid"
              aria-label="Toggle light mode"
              title="Toggle theme"
            >
              {lightMode ? "Light" : "Dark"}
            </button>

            <a
              href="https://drive.google.com/file/d/1Ir24IqMGXWyxLZW6faV3ySj6Tw2032UW/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary hidden rounded-full px-4 py-2 text-sm font-semibold transition md:inline-flex"
            >
              Resume
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] theme-body transition hover:bg-[var(--surface)] hover:text-[var(--foreground)] lg:hidden"
              aria-label="Toggle menu"
            >
              <span className="text-xl leading-none">{mobileOpen ? "x" : "="}</span>
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-[var(--menu-background)] px-6 backdrop-blur-2xl lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`font-heading text-3xl font-semibold ${active === item.href.slice(1) ? "theme-eyebrow" : "theme-heading"}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1Ir24IqMGXWyxLZW6faV3ySj6Tw2032UW/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary mt-4 rounded-full px-6 py-3 font-semibold"
          >
            Download Resume
          </a>
        </div>
      )}
    </>
  );
}
