import Reveal from "./Reveal";

const achievements = [
  {
    icon: "Trophy",
    title: "GATE DA & CS 2026",
    description: "Top national exam in data science and computer science. Qualified in both streams through self-study.",
  },
  {
    icon: "Cloud",
    title: "AWS AI Practitioner",
    description: "GenAI, LLMs, RAG, Amazon Bedrock, Responsible AI.",
  },
  {
    icon: "Music",
    title: "Hindustani Classical Diploma",
    description: "Six years, multiple distinctions.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative z-20 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="theme-eyebrow mb-5 text-sm font-semibold uppercase">Achievements</p>
          <h2 className="theme-heading font-heading text-4xl font-semibold leading-tight md:text-6xl">
            Proof points from exams, cloud AI, and classical training.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {achievements.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} className="glass-panel p-7">
              <div className="theme-pill mb-8 inline-flex px-3 py-2 font-heading text-sm font-semibold">
                {item.icon}
              </div>
              <h3 className="theme-heading font-heading text-2xl font-semibold">{item.title}</h3>
              <p className="theme-body mt-4 text-base leading-7">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
