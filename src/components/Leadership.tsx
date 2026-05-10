"use client";

import { motion } from "framer-motion";

const activities = [
  {
    org: "UDAAN – University Student Magazine",
    role: "Graphic Designer",
    location: "Guru Ghasidas Vishwavidyalaya",
    period: "Feb 2025 – Present",
    description: "Created 30+ digital assets using Adobe Suite and Canva to maintain brand consistency across channels.",
    accentColor: "text-pink-400",
    dotColor: "bg-pink-400",
    borderHover: "hover:border-pink-500/30",
  },
  {
    org: "EQUILIBRIO – Techfest",
    role: "Cultural Coordinator",
    location: "Guru Ghasidas Vishwavidyalaya",
    period: "Mar 2025 – Apr 2025",
    description: "Directed a 50+ member team to execute 10+ flagship events for a 2,000+ attendee university techfest.",
    accentColor: "text-teal-400",
    dotColor: "bg-teal-400",
    borderHover: "hover:border-teal-500/30",
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
    <section id="leadership" className="relative bg-[#0e0e0e] py-28 px-6 md:px-20 text-white z-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-pink-400 mb-4 font-medium">
            Beyond Code
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
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
              className={`group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10 transition-all duration-500 ${activity.borderHover}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{activity.org}</h3>
                  <p className={`text-sm font-medium mt-1 ${activity.accentColor}`}>{activity.role} · {activity.location}</p>
                </div>
                <span className="text-sm text-gray-500 shrink-0 md:pt-1">{activity.period}</span>
              </div>

              <div className="flex items-start gap-3 mt-4 text-gray-300 text-[15px] leading-relaxed">
                <div className={`w-1.5 h-1.5 rounded-full ${activity.dotColor} mt-2 shrink-0`} />
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
          <h3 className="text-2xl font-bold mb-8 text-white">Arts & Interests</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interests.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-500"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="text-base font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
