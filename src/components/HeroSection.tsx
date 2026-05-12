"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 120;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const STORY_SECTIONS = [
  {
    title: "Tanmay Kumar Sahu",
    align: "left",
    titleClassName: "text-3xl md:text-5xl font-medium uppercase tracking-[0.25em]",
  },
  {
    title: "Bridging AI and real-world scientific applications.",
    align: "right",
    titleClassName: "text-4xl md:text-6xl",
  },
  {
    title: "Building LLM applications and end-to-end ML pipelines.",
    align: "left",
    titleClassName: "text-4xl md:text-6xl",
  },
  {
    title: "Scaling robust RAG architectures for enterprise solutions.",
    align: "right",
    titleClassName: "text-4xl md:text-6xl",
  },
  {
    title: "Scroll down to explore my projects and skills.",
    align: "left",
    titleClassName: "text-4xl md:text-6xl",
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
      className={`absolute inset-0 flex flex-col justify-center px-6 md:px-20 ${alignmentClasses[section.align]}`}
    >
      <div className={`w-full max-w-4xl ${cardPositionClasses[section.align]}`}>
        {index === 0 && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-sm md:text-base uppercase tracking-widest text-zinc-400 font-medium mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
          >
            Meet
          </motion.p>
        )}
        <TitleTag
          className={`${section.titleClassName} font-bold tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]`}
        >
          {index === 0 ? (
            <span className="inline-block" style={{ fontFamily: "'Azonix', sans-serif" }}>
              {section.title.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.4, delay: i * 0.06 + 0.3, ease: "easeOut" }}
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          ) : (
            section.title
          )}
        </TitleTag>
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
      ref={containerRef}
      className="relative w-full bg-[#121212]"
      style={{ height: `${STORY_SECTIONS.length * 120}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.05),_rgba(0,0,0,0.68)_68%)]" />

        <div className="absolute inset-0 z-10 pointer-events-none">
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
