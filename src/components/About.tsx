"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-[#121212] py-28 px-6 md:px-20 text-white z-20 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-4 font-medium">
            Who I Am
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">
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
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a final-year Information Technology student at{" "}
              <span className="text-white font-medium">Guru Ghasidas Vishwavidyalaya</span>,
              deeply focused on Artificial Intelligence and Machine Learning. My academic
              journey is driven by a desire to apply computational models to complex,
              multidisciplinary challenges.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              GATE-qualified with hands-on experience building{" "}
              <span className="text-white font-medium">LLM-powered applications</span>,
              end-to-end ML pipelines, and{" "}
              <span className="text-white font-medium">RAG architectures</span> using
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
              <div key={idx} className="flex gap-4 border-b border-white/10 pb-4">
                <span className="text-gray-500 text-sm uppercase tracking-wider w-28 shrink-0 pt-0.5">
                  {item.label}
                </span>
                <span className="text-gray-200 text-base">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
