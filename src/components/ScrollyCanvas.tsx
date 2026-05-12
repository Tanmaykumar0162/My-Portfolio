"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 120;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function getCurrentFramePath(index: number) {
  // Format index to 3 digits e.g., 000, 001, ..., 119
  const paddedIndex = index.toString().padStart(3, "0");
  return `${basePath}/sequence/frame_${paddedIndex}_delay-0.066s.png`;
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getCurrentFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages([...loadedImages]);
        }
      };
      loadedImages.push(img);
    }
    
    // Initial draw if image 0 is already loaded (from cache)
    if (loadedImages[0]?.complete) {
        setImages([...loadedImages]);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const renderFrame = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width: cWidth, height: cHeight } = canvas;
    const { width: iWidth, height: iHeight } = img;

    const ratio = Math.max(cWidth / iWidth, cHeight / iHeight);
    const renderWidth = iWidth * ratio;
    const renderHeight = iHeight * ratio;

    const offsetX = (cWidth - renderWidth) / 2;
    const offsetY = (cHeight - renderHeight) / 2;

    ctx.clearRect(0, 0, cWidth, cHeight);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  };

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        if (images.length > 0) {
          const currentFrame = Math.round(frameIndex.get());
          if (images[currentFrame]?.complete) {
            renderFrame(images[currentFrame]);
          }
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      const currentFrame = Math.round(latest);
      if (images[currentFrame] && images[currentFrame].complete) {
        requestAnimationFrame(() => renderFrame(images[currentFrame]));
      }
    });
    
    // Fallback: draw frame 0 if not scrolling initially
    if (images.length > 0 && images[0].complete) {
        const currentFrame = Math.round(frameIndex.get());
        renderFrame(images[currentFrame]);
    }

    return () => unsubscribe();
  }, [frameIndex, images]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>
    </div>
  );
}
