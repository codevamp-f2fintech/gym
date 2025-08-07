"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface InteriorSectionProps {}

export function InteriorSection({}: InteriorSectionProps) {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section
      id="interior"
      className="py-20 md:py-32 relative overflow-hidden h-auto"
    >
      {/* Background with parallax effect */}
      <motion.div style={{ y: y2 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
        <img
          src="/hero2.jpg"
          alt="Gym Interior"
          className="w-full h-full object-cover opacity-40"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span
            className="px-4 py-2  bg-transparent text-white border border-white rounded-xl  text-sm font-bold tracking-wider uppercase  mb-6 inline-block"
            whileHover={{ scale: 1.05 }}
          >
            World-Class Facility
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">
            OUR <span className="text-red-500">SPACE</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Step into a world-class facility designed to inspire greatness.
            Every corner of our gym is crafted to fuel your passion for fitness.
          </p>
        </motion.div>

        {/* Facility Grid - Staggered Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Strength Zone - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="border border-white overflow-hidden rounded-2xl  transition-all duration-500">
              <img
                src="/Strength.avif"
                alt="Weights Area"
                className="w-full h-64 sm:h-80 object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="mt-6 px-2">
              <h3 className="text-2xl font-bold text-purple-400 mb-3">
                Strength Zone
              </h3>
              <p className="text-gray-300 text-base md:text-lg">
                Premium strength training area with Olympic platforms, power
                racks, and specialized equipment for serious lifters.
              </p>
            </div>
          </motion.div>

          {/* Cardio Theater - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative mt-10 md:mt-20 lg:mt-32"
          >
            <div className="border border-white  overflow-hidden rounded-2xl   transition-all duration-500">
              <img
                src="/cardio.jpg"
                alt="Cardio Area"
                className="w-full h-64 sm:h-80 object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="mt-6 px-2">
              <h3 className="text-2xl font-bold text-red-500 mb-3">
                Cardio Theater
              </h3>
              <p className="text-gray-300 text-base md:text-lg">
                State-of-the-art cardio equipment with individual entertainment
                systems and climate control for optimal performance.
              </p>
            </div>
          </motion.div>

          {/* Zumba Studio - Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative mt-10 lg:mt-0 lg:-mt-10"
          >
            <div className="border border-white overflow-hidden rounded-2xl   transition-all duration-500">
              <img
                src="/zumba.avif"
                alt="Zumba Class"
                className="w-full h-64 sm:h-80 object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="mt-6 px-2">
              <h3 className="text-2xl font-bold text-purple-500 mb-3">
                Zumba & Group Fitness
              </h3>
              <p className="text-gray-300 text-base md:text-lg">
                High-energy group fitness studio with vibrant sessions led by
                certified instructors in a fully mirrored environment.
              </p>
            </div>
          </motion.div>

          {/* Recovery Zone - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative mt-10 md:mt-20"
          >
            <div className="overflow-hidden rounded-2xl border border-white transition-all duration-500">
              <img
                src="/wellness.jpg"
                alt="Recovery Area"
                className="w-full h-64 sm:h-80 object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="mt-6 px-2">
              <h3 className="text-2xl font-bold text-red-500 mb-3">
                Recovery & Wellness
              </h3>
              <p className="text-gray-300 text-base md:text-lg pb-10">
                Relax and recharge with infrared saunas, massage chairs, and
                stretching areas designed to enhance recovery.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
