"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Technologies",
    accent: "from-zinc-500 to-zinc-600",
    borderAccent: "border-zinc-800/50",
    dotColor: "bg-zinc-500",
    skills: ["Python", "SQL", "C", "FastAPI", "Streamlit", "Git", "Jupyter Notebook"],
  },
  {
    title: "Frameworks & Libraries",
    accent: "from-zinc-500 to-zinc-600",
    borderAccent: "border-zinc-800/50",
    dotColor: "bg-zinc-500",
    skills: [
      "PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "Librosa",
      "LangChain", "Hugging Face", "Gemini API", "Pandas", "NumPy",
      "Matplotlib", "Seaborn", "SciPy", "FAISS", "ChromaDB",
    ],
  },
  {
    title: "Competencies",
    accent: "from-zinc-500 to-zinc-600",
    borderAccent: "border-zinc-800/50",
    dotColor: "bg-zinc-500",
    skills: [
      "RAG", "Vector Databases", "Prompt Engineering", "Data Analysis",
      "Machine Learning", "Foundation Models", "Multi-agent Systems",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-transparent py-32 px-6 md:px-20 text-zinc-50 z-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[500px] bg-zinc-900/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-medium">
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 tracking-tight text-zinc-100">
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
              className={`rounded-2xl border border-zinc-800/60 ${category.borderAccent} bg-zinc-900/20 backdrop-blur-sm p-8 hover:bg-zinc-900/40 transition-all duration-500`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-1.5 h-1.5 rounded-full ${category.dotColor} opacity-50`} />
                <h3 className="text-lg font-semibold text-zinc-100 tracking-tight">{category.title}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 text-sm font-medium tracking-wide rounded-md bg-zinc-900/50 border border-zinc-800/80 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-all duration-300 cursor-default"
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
