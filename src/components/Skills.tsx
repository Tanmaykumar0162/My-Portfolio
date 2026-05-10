"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Technologies",
    accent: "from-cyan-500 to-blue-500",
    borderAccent: "border-cyan-500/20",
    dotColor: "bg-cyan-400",
    skills: ["Python", "SQL", "C", "FastAPI", "Streamlit", "Git", "Jupyter Notebook"],
  },
  {
    title: "Frameworks & Libraries",
    accent: "from-violet-500 to-purple-500",
    borderAccent: "border-violet-500/20",
    dotColor: "bg-violet-400",
    skills: [
      "PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "Librosa",
      "LangChain", "Hugging Face", "Gemini API", "Pandas", "NumPy",
      "Matplotlib", "Seaborn", "SciPy", "FAISS", "ChromaDB",
    ],
  },
  {
    title: "Competencies",
    accent: "from-amber-500 to-orange-500",
    borderAccent: "border-amber-500/20",
    dotColor: "bg-amber-400",
    skills: [
      "RAG", "Vector Databases", "Prompt Engineering", "Data Analysis",
      "Machine Learning", "Foundation Models", "Multi-agent Systems",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#121212] py-28 px-6 md:px-20 text-white z-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4 font-medium">
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
              className={`rounded-2xl border border-white/10 ${category.borderAccent} bg-white/[0.03] backdrop-blur-sm p-8 hover:bg-white/[0.06] transition-all duration-500`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2.5 h-2.5 rounded-full ${category.dotColor}`} />
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
