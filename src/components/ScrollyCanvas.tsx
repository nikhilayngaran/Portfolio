"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValue, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120;

function currentFrame(index: number) {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
}

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Manual MotionValue for scroll progress — avoids Framer Motion's useScroll
  // target-based tracking which mis-fires on Safari/iOS and causes sections
  // to show incorrect opacity values (sections overlapping each other).
  const heroProgress = useMotionValue(0);

  // Native scroll listener → update heroProgress directly
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function update() {
      const totalScrollable = container!.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;
      const raw = (window.scrollY - container!.offsetTop) / totalScrollable;
      heroProgress.set(Math.min(Math.max(raw, 0), 1));
    }

    update(); // Set initial value on mount
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [heroProgress]);

  // Preload all frames; render frame 0 immediately
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          renderFrame(Math.min(FRAME_COUNT - 1, Math.floor(heroProgress.get() * FRAME_COUNT)));
        } else if (i === 0) {
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

  // Drive canvas frames from heroProgress changes
  useMotionValueEvent(heroProgress, "change", (latest) => {
    const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(latest * FRAME_COUNT));
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  // Handle resize — redraw at correct frame
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const currentIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(heroProgress.get() * FRAME_COUNT)
        );
        renderFrame(currentIndex);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-[#121212]">
      {/* overflow-hidden on the inner wrapper only — not on the sticky div.
          overflow-hidden on a sticky element breaks position:sticky on Safari. */}
      <div className="sticky top-0 h-screen w-full">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
        <Overlay progress={heroProgress} />
      </div>
    </section>
  );
}
