"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise Document Intelligence Chatbot",
    subtitle: "RAG Pipeline",
    period: "Mar 2026 – Apr 2026",
    techStack: ["LangChain", "ChromaDB", "Gemini API", "Streamlit", "Python"],
    bullets: [
      "Built a RAG pipeline using LangChain + ChromaDB vector store for semantic search over enterprise PDF knowledge bases.",
      "Integrated Gemini API with prompt engineering templates for grounded, citation-backed LLM responses.",
      "Deployed as a Streamlit app with document upload, chunk retrieval, and a conversational Q&A interface.",
    ],
    accentColor: "blue",
  },
  {
    title: "Audio-to-MIDI Transcription",
    subtitle: "Bridging Tabla & Digital DAWs",
    period: "Jan 2026 – Apr 2026",
    techStack: ["Audio ML", "PyTorch", "Librosa", "FastAPI"],
    bullets: [
      "Built a CNN + BiLSTM pipeline classifying 6+ Tabla stroke patterns into MIDI using Mel-spectrograms.",
      "Developed onset detection via Librosa's beat tracking API for time-aligned MIDI generation from raw audio.",
      "Deployed model as a REST API via FastAPI for real-time audio-to-MIDI inference in DAW workflows.",
    ],
    accentColor: "emerald",
  },
  {
    title: "Emotion Recognition AI",
    subtitle: "Computer Vision",
    period: "Jul 2025 – Dec 2025",
    techStack: ["TensorFlow", "Computer Vision", "Streamlit", "Python"],
    bullets: [
      "Trained a CNN with transfer learning on 35,000+ images with precision/recall analysis across 7 emotion classes.",
      "Improved model robustness by 15% via real-time data augmentation and Dropout regularization.",
      "Deployed as a Streamlit interface for real-time facial emotion classification from webcam or image input.",
    ],
    accentColor: "rose",
  },
];

const accentMap: Record<string, { tag: string; dot: string; border: string; glow: string }> = {
  blue: { tag: "text-zinc-300", dot: "bg-zinc-500", border: "group-hover:border-zinc-700/50", glow: "from-zinc-800/20" },
  emerald: { tag: "text-zinc-300", dot: "bg-zinc-500", border: "group-hover:border-zinc-700/50", glow: "from-zinc-800/20" },
  rose: { tag: "text-zinc-300", dot: "bg-zinc-500", border: "group-hover:border-zinc-700/50", glow: "from-zinc-800/20" },
};

export default function Projects() {
  return (
    <section id="projects" className="relative bg-transparent py-32 px-6 md:px-20 text-zinc-50 z-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-zinc-900/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-medium">
            What I&apos;ve Built
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 tracking-tight text-zinc-100">
            Projects
          </h2>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, idx) => {
            const accent = accentMap[project.accentColor];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className={`group relative rounded-2xl border border-zinc-800/60 bg-zinc-900/20 backdrop-blur-sm p-8 md:p-10 hover:bg-zinc-900/40 transition-all duration-500 overflow-hidden ${accent.border}`}
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${accent.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-1">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-zinc-100 mb-1 tracking-tight">
                        {project.title}
                      </h3>
                      <p className={`text-sm font-medium ${accent.tag}`}>{project.subtitle}</p>
                    </div>
                    <span className="text-sm text-zinc-500 shrink-0 md:pt-2 font-mono">{project.period}</span>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mt-4 mb-6">
                    {project.techStack.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1.5 text-xs font-medium tracking-wide rounded-md border border-zinc-800/80 text-zinc-400 bg-zinc-900/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-4 text-zinc-400 text-[15px] leading-relaxed font-light">
                        <div className={`w-1.5 h-1.5 rounded-full ${accent.dot} mt-2.5 shrink-0 opacity-50`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
