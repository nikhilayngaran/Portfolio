"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120;

function currentFrame(index: number) {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
}

import Overlay from "./Overlay";

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          // Render when everything is loaded
          renderFrame(Math.min(FRAME_COUNT - 1, Math.floor(scrollYProgress.get() * FRAME_COUNT)));
        } else if (i === 0) {
          // Render first frame immediately for fast initial paint
          renderFrame(0);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderFrame = (index: number) => {
    if (images.length === 0 || !images[index]) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];

    // Responsive Object-fit cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    // Use requestAnimationFrame for smooth drawing
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // re-render current frame on resize
        const currentIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(scrollYProgress.get() * FRAME_COUNT)
        );
        renderFrame(currentIndex);
      }
    };
    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]); // trigger again when images object is populated

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-[#121212]">
      {/* overflow-hidden is on the inner canvas wrapper, NOT on the sticky div.
          Putting overflow-hidden directly on a sticky element breaks position:sticky
          on iOS Safari, causing the overlay to appear fixed above all content. */}
      <div className="sticky top-0 h-screen w-full">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <canvas
            ref={canvasRef}
            className="block w-full h-full"
          />
        </div>
        {/* Parallax Overlay */}
        <Overlay progress={scrollYProgress} />
      </div>
    </section>
  );
}
