import Reveal from "./Reveal";

const roles = [
  {
    title: "UDAAN Magazine",
    subtitle: "Graphic Designer, GGV",
    description: "Created 30+ digital assets using Adobe Suite and Canva.",
  },
  {
    title: "EQUILIBRIO Techfest",
    subtitle: "Cultural Coordinator",
    description: "Directed 50+ member team for 10+ events, 2,000+ attendees.",
  },
];

const interests = ["Performing Arts", "Graphic Design", "Classical Music"];

export default function Leadership() {
  return (
    <section id="leadership" className="relative z-20 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="theme-eyebrow mb-5 text-sm font-semibold uppercase">Leadership & Beyond Code</p>
          <h2 className="theme-heading font-heading text-4xl font-semibold leading-tight md:text-6xl">
            Visual storytelling, performance, and large-team execution.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {roles.map((role, index) => (
            <Reveal key={role.title} delay={index * 90} className="theme-surface p-7 md:p-8">
              <p className="theme-eyebrow text-sm font-semibold uppercase">{role.subtitle}</p>
              <h3 className="theme-heading mt-4 font-heading text-3xl font-semibold">{role.title}</h3>
              <p className="theme-body mt-5 text-base leading-7">{role.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="mt-8 flex flex-wrap gap-3">
          {interests.map((interest) => (
            <span key={interest} className="theme-pill px-4 py-2 text-sm font-semibold">
              {interest}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
