"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "GATE Data Science & AI (DA) and CSIT",
    badge: "Qualified",
    date: "Mar 2026",
    description: "Proficiency in mathematics, probability, statistics, and Machine Learning through a national-level competitive exam.",
    icon: "🏆",
  },
  {
    title: "AWS AI Practitioner Challenge",
    badge: "Completed",
    date: "Apr 2026",
    description: "Covers GenAI, LLMs, foundation models, prompt engineering, RAG, Amazon Bedrock, and responsible AI on AWS.",
    icon: "☁️",
  },
  {
    title: "Hindustani Classical Sangeet Diploma",
    badge: "Multiple Distinctions",
    date: "Jul 2019",
    description: "Completed six years of Hindustani Classical Sangeet Diploma in Singing with multiple Distinctions.",
    icon: "🎵",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative bg-transparent py-32 px-6 md:px-20 text-zinc-50 z-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[400px] bg-zinc-900/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-medium">
            Recognition
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 tracking-tight text-zinc-100">
            Achievements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
              className="group rounded-2xl border border-zinc-800/60 bg-zinc-900/20 backdrop-blur-sm p-8 hover:bg-zinc-900/40 hover:border-zinc-700/50 transition-all duration-500"
            >
              {/* Icon */}
              <div className="text-4xl mb-6 opacity-80">{item.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-zinc-100 mb-2 leading-snug tracking-tight">
                {item.title}
              </h3>

              {/* Badge + Date */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs px-2.5 py-1 rounded-md bg-zinc-900/50 text-zinc-400 border border-zinc-800/80 font-medium tracking-wide">
                  {item.badge}
                </span>
                <span className="text-xs text-zinc-500 font-mono">{item.date}</span>
              </div>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
