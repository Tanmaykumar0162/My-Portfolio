"use client";

import { motion } from "framer-motion";

const activities = [
  {
    org: "UDAAN – University Student Magazine",
    role: "Graphic Designer",
    location: "Guru Ghasidas Vishwavidyalaya",
    period: "Feb 2025 – Present",
    description: "Created 30+ digital assets using Adobe Suite and Canva to maintain brand consistency across channels.",
    accentColor: "text-zinc-400",
    dotColor: "bg-zinc-500",
    borderHover: "hover:border-zinc-700/50",
  },
  {
    org: "EQUILIBRIO – Techfest",
    role: "Cultural Coordinator",
    location: "Guru Ghasidas Vishwavidyalaya",
    period: "Mar 2025 – Apr 2025",
    description: "Directed a 50+ member team to execute 10+ flagship events for a 2,000+ attendee university techfest.",
    accentColor: "text-zinc-400",
    dotColor: "bg-zinc-500",
    borderHover: "hover:border-zinc-700/50",
  },
];

const interests = [
  {
    title: "Performing Arts",
    description: "Active performer within Tarang (music band) and Urchins (drama club).",
    icon: "🎭",
  },
  {
    title: "Graphic Design",
    description: "Experienced with Adobe Suite and Canva for digital design and visual storytelling.",
    icon: "🎨",
  },
  {
    title: "Classical Music",
    description: "Six-year Hindustani Classical Sangeet Diploma in Singing with multiple Distinctions.",
    icon: "🎶",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="relative bg-transparent py-32 px-6 md:px-20 text-zinc-50 z-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[500px] bg-zinc-900/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-medium">
            Beyond Code
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 tracking-tight text-zinc-100">
            Leadership & Extracurriculars
          </h2>
        </motion.div>

        {/* Leadership roles */}
        <div className="space-y-8 mb-20">
          {activities.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
              className={`group rounded-2xl border border-zinc-800/60 bg-zinc-900/20 backdrop-blur-sm p-8 md:p-10 hover:bg-zinc-900/40 transition-all duration-500 ${activity.borderHover}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-zinc-100 tracking-tight">{activity.org}</h3>
                  <p className={`text-sm font-medium mt-1 ${activity.accentColor}`}>{activity.role} · {activity.location}</p>
                </div>
                <span className="text-sm text-zinc-500 shrink-0 md:pt-1 font-mono">{activity.period}</span>
              </div>

              <div className="flex items-start gap-4 mt-5 text-zinc-400 text-[15px] leading-relaxed font-light">
                <div className={`w-1.5 h-1.5 rounded-full ${activity.dotColor} mt-2.5 shrink-0 opacity-50`} />
                <span>{activity.description}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interests / Arts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-zinc-100 tracking-tight">Arts & Interests</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interests.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6 hover:bg-zinc-900/40 hover:border-zinc-700/50 transition-all duration-500"
            >
              <div className="text-3xl mb-5 opacity-80">{item.icon}</div>
              <h4 className="text-base font-semibold text-zinc-100 mb-2 tracking-tight">{item.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
