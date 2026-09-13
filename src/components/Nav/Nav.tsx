import { useState } from "react";
import logoText from "../../assets/logo-text.png"; 

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>

        {/* Logo image */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src= {logoText}
            alt="DevStack"
            className="h-8 w-auto object-contain sm:h-9"
          />
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`text-sm font-medium transition hover:text-pink-600 ${
                  index === 0 ? "text-pink-600" : "text-slate-600"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Sign-in and Sign-up buttons */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          <a
            href="#signin"
            className="rounded-full px-2 py-2 text-xs font-semibold text-slate-700 transition hover:bg-gray-100 hover:text-pink-600 sm:px-4 sm:text-sm"
          >
            Sign In
          </a>

          <a
            href="#signup"
            className="whitespace-nowrap rounded-full bg-pink-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-pink-700 sm:px-5 sm:text-sm"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-96 border-t border-gray-100 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-4 py-4">
          {navItems.map((item, index) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={closeMenu}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-pink-50 hover:text-pink-600 ${
                  index === 0
                    ? "bg-pink-50 text-pink-600"
                    : "text-slate-700"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;