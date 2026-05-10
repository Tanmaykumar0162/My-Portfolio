"use client";

import { motion } from "framer-motion";

const education = [
  {
    institution: "Guru Ghasidas Vishwavidyalaya, Bilaspur",
    degree: "Bachelor of Technology in Information Technology",
    score: "CGPA: 7.81",
    period: "Dec 2022 – May 2026",
    location: "Bilaspur, Chhattisgarh",
  },
  {
    institution: "J.L.M. Gayatri Vidya Peeth, Rajnandgaon",
    degree: "CBSE Class 12th – PCM",
    score: "88.6%",
    period: "Jun 2021",
    location: "Rajnandgaon, Chhattisgarh",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative bg-[#0e0e0e] py-28 px-6 md:px-20 text-white z-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-4 font-medium">
            Academic Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
            Education
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/60 via-purple-500/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[23px] h-[23px] rounded-full border-2 border-purple-500/60 bg-[#0e0e0e] hidden md:flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-purple-500/30 transition-colors duration-500">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      {edu.institution}
                    </h3>
                    <span className="text-sm text-gray-500 shrink-0 md:pt-1">{edu.period}</span>
                  </div>
                  <p className="text-gray-300 text-base mb-2">{edu.degree}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {edu.score}
                    </span>
                    <span className="text-sm text-gray-500">{edu.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
