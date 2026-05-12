import Reveal from "./Reveal";

const projects = [
  {
    title: "TablatoDraw / Audio-to-MIDI Transcription",
    banner: "Audio ML",
    gradient: "from-amber-300 via-orange-400 to-rose-500",
    tagline: "Teaching machines to read Indian classical percussion.",
    details: [
      "CNN + BiLSTM pipeline classifying 6+ tabla stroke patterns from log-mel spectrograms with PCEN normalization.",
      "Onset detection via Librosa for time-aligned MIDI generation.",
      "Deployed as a FastAPI REST endpoint for real-time DAW integration.",
    ],
    tags: ["PyTorch", "Librosa", "FastAPI", "Audio ML", "BiLSTM"],
    primary: "GitHub ->",
    secondary: "Case Study ->",
  },
  {
    title: "Enterprise Document Intelligence Chatbot",
    banner: "RAG Systems",
    gradient: "from-indigo-500 via-sky-500 to-cyan-300",
    tagline: "RAG pipeline for grounded enterprise Q&A.",
    details: [
      "LangChain + ChromaDB vector store for semantic search over PDF knowledge bases.",
      "Gemini API with prompt-engineered templates for citation-backed responses.",
      "Streamlit interface with document upload and conversational Q&A.",
    ],
    tags: ["LangChain", "ChromaDB", "Gemini API", "Streamlit", "RAG"],
    primary: "GitHub ->",
    secondary: "Live Demo ->",
  },
  {
    title: "Emotion Recognition AI",
    banner: "Computer Vision",
    gradient: "from-fuchsia-500 via-indigo-500 to-emerald-300",
    tagline: "Real-time facial emotion classification at 7-class precision.",
    details: [
      "CNN with transfer learning trained on 35,000+ images.",
      "15% robustness improvement via data augmentation and Dropout.",
      "Live Streamlit interface for webcam and image input.",
    ],
    tags: ["TensorFlow", "OpenCV", "Transfer Learning", "Streamlit"],
    primary: "GitHub ->",
    secondary: "Live Demo ->",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-20 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="theme-eyebrow mb-5 text-sm font-semibold uppercase">Selected Work</p>
          <h2 className="theme-heading font-heading text-4xl font-semibold leading-tight md:text-6xl">
            Projects as systems, not just repositories.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 90}
              className="theme-surface group overflow-hidden transition duration-500 hover:-translate-y-1 hover:border-[color:var(--accent-line)]"
            >
              <div className={`bg-gradient-to-r ${project.gradient} px-6 py-4`}>
                <p className="font-heading text-sm font-semibold uppercase text-zinc-950">{project.banner}</p>
              </div>
              <div className="flex min-h-[520px] flex-col p-6 md:p-7">
                <h3 className="theme-heading font-heading text-2xl font-semibold leading-tight">{project.title}</h3>
                <p className="theme-eyebrow mt-3 text-base font-medium">{project.tagline}</p>

                <div className="theme-body mt-7 space-y-4 text-sm leading-7 md:text-[15px]">
                  {project.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="theme-chip px-3 py-1.5 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  <a
                    className="button-secondary px-4 py-2 text-sm font-semibold transition"
                    href="https://github.com/Tanmaykumar0162"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.primary}
                  </a>
                  <a className="button-primary px-4 py-2 text-sm font-semibold transition" href="#contact">
                    {project.secondary}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
