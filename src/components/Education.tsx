import Reveal from "./Reveal";

const milestones = [
  ["2019", "Hindustani Classical Sangeet Diploma, multiple Distinctions"],
  ["2021", "Class 12 PCM, 88.6%, CBSE"],
  ["2022", "Joined B.Tech IT at GGV"],
  ["2025 Feb", "Joined UDAAN University Magazine as Graphic Designer"],
  ["2025 Mar", "Cultural Coordinator, EQUILIBRIO Techfest (2,000+ attendees)"],
  ["2025 Jul-Dec", "Built Emotion Recognition AI"],
  ["2026 Jan-Apr", "Built Audio-to-MIDI Transcription system (flagship project)"],
  ["2026 Mar", "GATE Qualified, DA and CS both"],
  ["2026 Apr", "Built Enterprise Document Chatbot"],
];

export default function Education() {
  return (
    <section id="journey" className="relative z-20 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <p className="theme-eyebrow mb-5 text-sm font-semibold uppercase">Education & Journey</p>
          <h2 className="theme-heading font-heading text-4xl font-semibold leading-tight md:text-6xl">
            A timeline of sound, systems, and self-study.
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute bottom-4 left-3 top-4 w-px bg-gradient-to-b from-amber-300 via-indigo-400 to-transparent" />
          <div className="space-y-7">
            {milestones.map(([year, event], index) => (
              <Reveal key={`${year}-${event}`} delay={index * 45} className="relative pl-11">
                <span className="theme-surface absolute left-0 top-2 grid h-7 w-7 place-items-center ring-1 ring-amber-300/50">
                  <span className="h-2.5 w-2.5 bg-amber-300" />
                </span>
                <div className="theme-surface p-5">
                  <p className="theme-eyebrow font-heading text-lg font-semibold">{year}</p>
                  <p className="theme-body mt-2 text-base leading-7">{event}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
