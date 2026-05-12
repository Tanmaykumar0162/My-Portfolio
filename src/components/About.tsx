import Reveal from "./Reveal";

const facts = [
  ["Name", "Tanmay Kumar Sahu"],
  ["Degree", "B.Tech in Information Technology"],
  ["University", "Guru Ghasidas Vishwavidyalaya, Bilaspur"],
  ["CGPA", "7.81"],
  ["Focus", "AI / ML / Deep Learning / RAG"],
  ["Location", "Bilaspur, Chhattisgarh, India"],
];

export default function About() {
  return (
    <section id="about" className="relative z-20 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal>
          <p className="theme-eyebrow mb-5 text-sm font-semibold uppercase">About</p>
          <h2 className="theme-heading font-heading text-4xl font-semibold leading-tight md:text-6xl">
            Where classical music meets machine learning.
          </h2>
        </Reveal>

        <div>
          <Reveal delay={90}>
            <p className="theme-body max-w-3xl text-lg leading-8 md:text-xl md:leading-9">
              I&apos;m a final-year IT student at GGV who combines a six-year background in Hindustani classical vocals
              with deep learning engineering. I built a CNN+BiLSTM pipeline that transcribes tabla audio into
              DAW-compatible MIDI because I believe the most interesting problems live at the intersection of
              disciplines. GATE qualified in both Data Analytics and Computer Science. Proficient in PyTorch,
              LangChain, FastAPI, and RAG architectures.
            </p>
          </Reveal>

          <div className="theme-grid-frame mt-12 grid gap-px overflow-hidden sm:grid-cols-2">
            {facts.map(([label, value], index) => (
              <Reveal key={label} delay={index * 45} className="theme-surface p-5 md:p-6">
                <p className="theme-muted text-xs font-semibold uppercase">{label}</p>
                <p className="theme-heading mt-2 text-base font-medium">{value}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
