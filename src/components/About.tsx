"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-transparent py-32 px-6 md:px-20 text-zinc-50 z-20 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-900/50 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-medium">
            Who I Am
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-10 tracking-tight text-zinc-100">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Left: Bio */}
          <div>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-light">
              I am a final-year Information Technology student at{" "}
              <span className="text-zinc-200 font-normal">Guru Ghasidas Vishwavidyalaya</span>,
              deeply focused on Artificial Intelligence and Machine Learning. My academic
              journey is driven by a desire to apply computational models to complex,
              multidisciplinary challenges.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              GATE-qualified with hands-on experience building{" "}
              <span className="text-zinc-200 font-normal">LLM-powered applications</span>,
              end-to-end ML pipelines, and{" "}
              <span className="text-zinc-200 font-normal">RAG architectures</span> using
              LangChain, Hugging Face, and vector databases. Proficient in Python, REST
              APIs (FastAPI), and deploying AI solutions as production-ready systems.
            </p>
          </div>

          {/* Right: Quick facts */}
          <div className="space-y-6">
            {[
              { label: "Name", value: "Tanmay Kumar Sahu" },
              { label: "Degree", value: "B.Tech in Information Technology" },
              { label: "University", value: "Guru Ghasidas Vishwavidyalaya, Bilaspur" },
              { label: "CGPA", value: "7.81" },
              { label: "Focus", value: "AI / ML / Deep Learning / RAG" },
              { label: "Location", value: "Bilaspur, Chhattisgarh, India" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 border-b border-zinc-800/50 pb-4">
                <span className="text-zinc-500 text-sm uppercase tracking-wider w-28 shrink-0 pt-0.5 font-medium">
                  {item.label}
                </span>
                <span className="text-zinc-300 text-base font-light">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
