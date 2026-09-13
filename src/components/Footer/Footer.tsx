type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const footerSections: FooterSection[] = [
  {
    title: "PRODUCT",
    links: [
      { label: "Home", href: "#home" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },
];

const socialLinks: FooterLink[] = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "Twitter", href: "https://twitter.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-[1160px] px-6 pb-8 pt-12 sm:px-8 lg:px-10 lg:pt-14">
        {/* Upper footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16">
          {/* Brand section */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center"
              aria-label="Go to homepage"
            >
              <img
                src="/logo-text.png"
                alt="DevStack"
                className="h-7 w-auto object-contain"
              />
            </a>

            <p className="mt-4 max-w-[365px] text-[12px] leading-[1.7] text-[#75829a]">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social links */}
            <div className="mt-6 flex flex-wrap items-center gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[12px] font-semibold text-[#536078] transition hover:text-pink-500"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Footer navigation */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[12px] font-bold tracking-wide text-[#182033]">
                {section.title}
              </h3>

              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[12px] text-[#78859d] transition hover:text-pink-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-[#edf0f4] lg:mt-14" />

        {/* Bottom footer */}
        <div className="flex flex-col gap-4 pt-7 text-[11px] text-[#9aa7bd] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-7">
            <a
              href="#privacy"
              className="transition hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="transition hover:text-pink-500"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;