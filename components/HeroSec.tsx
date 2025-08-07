"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const heroLeftX = useTransform(scrollY, [0, 500], [0, -100]);
  const heroRightX = useTransform(scrollY, [0, 500], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 300, 500], [1, 0.7, 0.3]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Left Hero Image */}
      <motion.div
        style={{ x: heroLeftX, opacity: heroOpacity, scale: heroScale }}
        className="absolute left-0 top-0 w-1/2 h-full z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 z-10" />
        <img
          src="/gymmain.png"
          alt="Strength Training"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right Hero Image */}
      <motion.div
        style={{ x: heroRightX, opacity: heroOpacity, scale: heroScale }}
        className="absolute right-0 top-0 w-1/2 h-full z-0 "
      >
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/80 z-10" />
        <img
          src="/hero1.jpg"
          alt="Cardio Training"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Center Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/80 to-black/60 z-10" />

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <span className="px-4 py-1  bg-transparent text-white border border-white rounded-xl  text-sm font-bold tracking-wider uppercase">
            Premium Fitness Experience
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tighter"
        >
          PUSH <span className="text-purple-500">LIMITS</span>
          <br />
          STAY <span className="text-red-500">ENGROSSED</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          "The only impossible journey is the one you never begin"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={() => scrollToSection("registration")}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-6 text-lg rounded-md border-2 border-purple-600 hover:border-purple-700 transition-all duration-300 "
          >
            START YOUR JOURNEY
          </Button>
          <Button
            onClick={() => scrollToSection("interior")}
            variant="outline"
            className="bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500/10 font-bold px-8 py-6 text-lg rounded-md transition-all duration-300"
          >
            EXPLORE GYM
          </Button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          onClick={() => scrollToSection("interior")}
          className="cursor-pointer"
        >
          <ArrowRight size={30} className="text-purple-500 rotate-90" />
        </motion.div>
      </div>
    </section>
  );
}
