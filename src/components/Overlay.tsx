"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 25% to 45%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // Section 3: 55% to 75%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center">
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white drop-shadow-lg">
            Tanmay Kumar Sahu.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 drop-shadow-md">
            GATE-Qualified AI & ML Engineer.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-32"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-lg max-w-2xl">
            Bridging AI and real-world applications.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg drop-shadow-md">
            Building LLM-powered applications, end-to-end ML pipelines, and robust RAG architectures.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center px-6 md:px-32 text-right"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-lg">
            Deep Learning <br /> Architectures.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg drop-shadow-md ml-auto">
            From semantic search using LangChain to PyTorch audio classification and TensorFlow vision models.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
