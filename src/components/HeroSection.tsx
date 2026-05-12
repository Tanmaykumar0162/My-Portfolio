"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 120;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const STORY_SECTIONS = [
  {
    title: "Tanmay Kumar Sahu",
    align: "left",
    subtitle: "AI / ML engineer in formation, trained in Hindustani classical vocals.",
    titleClassName: "text-4xl sm:text-5xl md:text-6xl lg:text-[5.4rem]",
  },
  {
    title: "Tabla rhythms become spectrograms, then MIDI.",
    subtitle: "A flagship audio ML system built from percussion, signal processing, and deep learning.",
    align: "right",
    titleClassName: "text-4xl md:text-[4.9rem]",
  },
  {
    title: "Documents become grounded answers.",
    subtitle: "RAG pipelines, vector stores, and prompt-engineered systems for enterprise Q&A.",
    align: "left",
    titleClassName: "text-4xl md:text-[4.9rem]",
  },
  {
    title: "Faces become real-time emotion signals.",
    subtitle: "Computer vision experiments with deployed Streamlit interfaces.",
    align: "right",
    titleClassName: "text-4xl md:text-[4.9rem]",
  },
  {
    title: "The story starts where disciplines collide.",
    subtitle: "GATE qualified in DA and CS. Building AI systems with a musician's ear for patterns.",
    align: "left",
    titleClassName: "text-4xl md:text-[4.9rem]",
  },
] as const;

type StorySection = (typeof STORY_SECTIONS)[number];
type StoryAlignment = "left" | "right" | "center";

type StoryCardProps = {
  index: number;
  progress: MotionValue<number>;
  section: StorySection;
};

function getFramePath(index: number) {
  return `${basePath}/sequence/frame_${index.toString().padStart(3, "0")}_delay-0.066s.png`;
}

function StoryCard({ index, progress, section }: StoryCardProps) {
  // Hardcoded foolproof bounds for exactly 5 sections to ensure perfect transitions without floating point bugs
  // Increased fade-in and fade-out duration for a much smoother, premium "enhancing" effect
  const bounds = [
    [-0.01, 0, 0.10, 0.20],
    [0.20, 0.26, 0.34, 0.40],
    [0.40, 0.46, 0.54, 0.60],
    [0.60, 0.66, 0.74, 0.80],
    [0.80, 0.86, 0.999, 1],
  ];

  const [visibleStart, fullyVisibleStart, fullyVisibleEnd, hiddenEnd] = bounds[index] || bounds[0];

  // Bypass Framer Motion array interpolation completely to prevent freezing bugs
  const opacity = useTransform(progress, (v) => {
    if (v < visibleStart) return 0;
    if (v > hiddenEnd) return 0;
    if (v < fullyVisibleStart) return (v - visibleStart) / (fullyVisibleStart - visibleStart);
    if (v > fullyVisibleEnd) return 1 - (v - fullyVisibleEnd) / (hiddenEnd - fullyVisibleEnd);
    return 1;
  });

  // More dramatic scale effect (starts smaller)
  const scale = useTransform(progress, (v) => {
    if (v < visibleStart) return 0.85;
    if (v > hiddenEnd) return 0.85;
    if (v < fullyVisibleStart) return 0.85 + 0.15 * ((v - visibleStart) / (fullyVisibleStart - visibleStart));
    if (v > fullyVisibleEnd) return 1 - 0.15 * ((v - fullyVisibleEnd) / (hiddenEnd - fullyVisibleEnd));
    return 1;
  });

  // Premium blur effect for true scrollytelling feel
  const filter = useTransform(progress, (v) => {
    if (v < visibleStart) return "blur(12px)";
    if (v > hiddenEnd) return "blur(12px)";
    if (v < fullyVisibleStart) {
      const p = (v - visibleStart) / (fullyVisibleStart - visibleStart);
      return `blur(${12 - p * 12}px)`;
    }
    if (v > fullyVisibleEnd) {
      const p = (v - fullyVisibleEnd) / (hiddenEnd - fullyVisibleEnd);
      return `blur(${p * 12}px)`;
    }
    return "blur(0px)";
  });

  const TitleTag = index === 0 ? "h1" : "h2";

  const alignmentClasses: Record<StoryAlignment, string> = {
    left: "items-start text-left",
    right: "items-end text-right",
    center: "items-center text-center",
  };

  const cardPositionClasses: Record<StoryAlignment, string> = {
    left: "",
    right: "ml-auto",
    center: "mx-auto",
  };

  return (
    <motion.div
      style={{ opacity, scale, filter }}
      className={`absolute inset-0 flex items-center px-6 md:px-20 ${alignmentClasses[section.align]} ${index === 0 ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div className={`w-full ${index === 0 ? "max-w-[46rem]" : "max-w-[42rem]"} ${cardPositionClasses[section.align]}`}>
        <TitleTag
          className={`${section.titleClassName} text-balance font-heading font-semibold leading-[0.92] tracking-[-0.045em] theme-heading drop-shadow-[0_4px_30px_rgba(0,0,0,0.34)]`}
        >
          {section.title}
        </TitleTag>

        {index === 0 && (
          <div className="absolute bottom-10 left-6 inline-flex flex-col gap-3 rounded-[28px] border border-[color:var(--line)] bg-[var(--surface)] p-2 shadow-[0_20px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:flex-row md:bottom-16 md:left-20">
            <a
              href="#projects"
              className="button-primary group inline-flex min-w-[220px] items-center justify-between rounded-[20px] px-5 py-4 font-heading shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-line)]"
            >
              <span className="text-lg font-semibold">View Projects</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>

            <a
              href="mailto:tanmayrjn003@gmail.com"
              className="button-secondary group inline-flex min-w-[220px] items-center justify-between rounded-[20px] px-5 py-4 font-heading transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--line)]"
            >
              <span className="text-lg font-semibold">Contact</span>
              <span className="theme-chip flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const nextImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let index = 0; index < FRAME_COUNT; index += 1) {
      const image = new Image();
      image.src = getFramePath(index);
      image.onload = () => {
        loadedCount += 1;

        // Render the first frame immediately so background shows with zero delay
        if (index === 0 && canvasRef.current) {
          canvasRef.current.width = window.innerWidth;
          canvasRef.current.height = window.innerHeight;
          const ctx = canvasRef.current.getContext("2d");
          if (ctx) {
            const ratio = Math.max(canvasRef.current.width / image.width, canvasRef.current.height / image.height);
            const w = image.width * ratio;
            const h = image.height * ratio;
            ctx.drawImage(image, (canvasRef.current.width - w) / 2, (canvasRef.current.height - h) / 2, w, h);
          }
        }

        if (loadedCount === FRAME_COUNT) {
          setImages([...nextImages]);
        }
      };
      nextImages.push(image);
    }
  }, []);

  const renderFrame = useCallback((image: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imageWidth = image.width;
    const imageHeight = image.height;
    const ratio = Math.max(canvasWidth / imageWidth, canvasHeight / imageHeight);
    const renderWidth = imageWidth * ratio;
    const renderHeight = imageHeight * ratio;
    const offsetX = (canvasWidth - renderWidth) / 2;
    const offsetY = (canvasHeight - renderHeight) / 2;

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.drawImage(image, offsetX, offsetY, renderWidth, renderHeight);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) {
        return;
      }

      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;

      if (!images.length) {
        return;
      }

      const currentFrame = Math.round(frameIndex.get());
      if (images[currentFrame]?.complete) {
        renderFrame(images[currentFrame]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex, images, renderFrame]);

  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latestValue) => {
      const currentFrame = Math.round(latestValue);
      if (images[currentFrame]?.complete) {
        requestAnimationFrame(() => renderFrame(images[currentFrame]));
      }
    });

    if (images.length > 0 && images[0].complete) {
      renderFrame(images[Math.round(frameIndex.get())]);
    }

    return () => unsubscribe();
  }, [frameIndex, images, renderFrame]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full bg-[var(--background)]"
      style={{ height: `${STORY_SECTIONS.length * 120}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
        <div className="hero-scrim absolute inset-0" />
        <div className="theme-muted absolute bottom-6 left-5 z-20 text-xs font-semibold uppercase md:left-10">
          Scroll for stats
        </div>

        <div className="absolute inset-0 z-10">
          {STORY_SECTIONS.map((section, index) => (
            <StoryCard
              key={section.title}
              index={index}
              progress={scrollYProgress}
              section={section}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
