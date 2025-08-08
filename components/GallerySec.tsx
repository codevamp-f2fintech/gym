"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface GallerySectionProps {
  galleryImages: string[];
}

export function GallerySection({ galleryImages }: GallerySectionProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="py-32 bg-gradient-to-b from-[#121212] to-[#0a0a0a]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="px-4 py-1 bg-transparent text-white  text-sm font-bold tracking-wider uppercase rounded-xl border border-white mb-6 inline-block">
            Visual Inspiration
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            WORKOUT <span className="text-purple-400">GALLERY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Witness the intensity, dedication, and transformation happening
            every day at Engross Fitness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setActiveImage(image)}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Workout ${index + 1}`}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-lg">
                    Intense Training Session
                  </p>
                  <p className="text-gray-300 text-sm">
                    Push beyond your limits
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[80vh]"
            >
              <img
                src={activeImage || "/placeholder.svg"}
                alt="Gallery Preview"
                className="max-w-full max-h-[80vh] object-contain"
              />
              <button
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full"
                onClick={() => setActiveImage(null)}
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
