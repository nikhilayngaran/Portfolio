"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: visible 0-0.08, fades out by 0.14
  const opacity1 = useTransform(progress, [0, 0.08, 0.14], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.14], [0, -80]);

  // Section 2: fades in 0.28-0.36, visible 0.36-0.46, fades out by 0.54
  const opacity2 = useTransform(progress, [0.28, 0.36, 0.46, 0.54], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.28, 0.54], [80, -120]);

  // Section 3: fades in 0.62-0.70, visible 0.70-0.80, fades out by 0.88
  const opacity3 = useTransform(progress, [0.62, 0.70, 0.80, 0.88], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.62, 0.88], [80, -120]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <div className="h-full w-full flex flex-col justify-center items-center relative">
        
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute text-center flex flex-col items-center justify-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Nikil Ayngaran Pandian
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 mt-4 tracking-wide font-light">
            Creative Marketer.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute w-full px-8 md:px-24 flex justify-start items-center"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight max-w-lg">
            I give brands <br />
            <span className="text-gray-400">something worth talking about</span>.
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute w-full px-8 md:px-24 flex justify-end items-center text-right"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight max-w-lg">
            Bridging <br />
            <span className="text-gray-400">strategy and storytelling</span>.
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
