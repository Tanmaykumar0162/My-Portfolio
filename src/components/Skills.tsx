import Reveal from "./Reveal";

const groups = [
  {
    title: "Languages & Tools",
    items: ["Python", "SQL", "C", "FastAPI", "Streamlit", "Git", "Jupyter"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "Librosa",
      "LangChain",
      "Hugging Face",
      "Gemini API",
      "Pandas",
      "NumPy",
      "FAISS",
      "ChromaDB",
    ],
  },
  {
    title: "Competencies",
    items: [
      "RAG",
      "Vector Databases",
      "Prompt Engineering",
      "Data Analysis",
      "Machine Learning",
      "Foundation Models",
      "Multi-agent Systems",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-20 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="theme-eyebrow mb-5 text-sm font-semibold uppercase">Skills</p>
          <h2 className="theme-heading font-heading text-4xl font-semibold leading-tight md:text-6xl">
            A practical stack for building intelligent products.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.75fr_1.25fr_0.9fr]">
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 90} className="glass-panel p-6 md:p-8">
              <h3 className="theme-heading font-heading text-2xl font-semibold">{group.title}</h3>
              <div className="mt-7 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="theme-chip px-3 py-2 text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
