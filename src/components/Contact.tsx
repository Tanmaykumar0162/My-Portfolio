import Reveal from "./Reveal";

const links = [
  { icon: "@", label: "Email", value: "tanmayrjn003@gmail.com", href: "mailto:tanmayrjn003@gmail.com" },
  { icon: "in", label: "LinkedIn", value: "linkedin.com/in/tanmayksahu62", href: "https://www.linkedin.com/in/tanmayksahu62/" },
  { icon: "GH", label: "GitHub", value: "github.com/Tanmaykumar0162", href: "https://github.com/Tanmaykumar0162" },
  { icon: "tel", label: "Phone", value: "+91-7693043174", href: "tel:+917693043174" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-20 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-4xl">
          <p className="theme-eyebrow mb-5 text-sm font-semibold uppercase">Contact</p>
          <h2 className="theme-heading font-heading text-5xl font-semibold leading-tight md:text-7xl">
            Let&apos;s build something meaningful.
          </h2>
          <p className="theme-body mt-8 max-w-2xl text-lg leading-8">
            Open to Data Science and ML roles, research internships, and AI/ML R&D opportunities.
          </p>
        </Reveal>

        <div className="theme-grid-frame mt-14 grid gap-px overflow-hidden md:grid-cols-2">
          {links.map((link, index) => (
            <Reveal key={link.label} delay={index * 60} className="theme-surface p-6">
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-5"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="theme-pill grid h-11 w-11 shrink-0 place-items-center font-heading text-sm font-semibold">
                    {link.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="theme-muted block text-xs font-semibold uppercase">{link.label}</span>
                    <span className="theme-heading mt-2 block break-words text-base font-medium group-hover:text-[color:var(--accent-text)]">{link.value}</span>
                  </span>
                </span>
                <span className="theme-eyebrow text-2xl">-&gt;</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180} className="mt-12">
          <a
            href="mailto:tanmayrjn003@gmail.com"
            className="button-primary inline-flex px-8 py-4 font-heading text-lg font-semibold transition"
          >
            Say Hello -&gt;
          </a>
        </Reveal>

        <div className="theme-muted mt-24 border-t border-[color:var(--line)] pt-8 text-sm">
          <p>2026 Tanmay Kumar Sahu. Built with Next.js, exported for GitHub Pages.</p>
        </div>
      </div>
    </section>
  );
}
