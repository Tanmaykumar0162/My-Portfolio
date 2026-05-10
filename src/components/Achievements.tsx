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
    <section id="achievements" className="relative bg-[#121212] py-28 px-6 md:px-20 text-white z-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400 mb-4 font-medium">
            Recognition
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
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
              className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:bg-white/[0.06] hover:border-amber-500/20 transition-all duration-500"
            >
              {/* Icon */}
              <div className="text-4xl mb-5">{item.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                {item.title}
              </h3>

              {/* Badge + Date */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
                  {item.badge}
                </span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
