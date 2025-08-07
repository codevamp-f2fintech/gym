"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  image: string;
  quote: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/testimonial-background.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="px-4 py-1 bg-transparent border border-white rounded-xl text-white text-sm font-bold tracking-wider uppercase mb-6 inline-block">
            Member Stories
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            SUCCESS <span className="text-red-500">STORIES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real people, real results. Hear from our members who have
            transformed their lives at Engross Fitness.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Card className="bg-black/50 border-gray-800 backdrop-blur-md rounded-xl ">
                <CardContent className="p-8 md:p-12">
                  <div className="w-20 h-20 rounded-full mx-auto mb-6 overflow-hidden border-2 border-purple-500 ">
                    <img
                      src={
                        testimonials[currentTestimonial].image ||
                        "/placeholder.svg"
                      }
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      )
                    )}
                  </div>
                  <p className="text-lg text-gray-100 mb-8  font-light">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <h4 className="text-xl font-semibold text-purple-400">
                    {testimonials[currentTestimonial].name}
                  </h4>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-10 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentTestimonial(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className="border-gray-700 text-gray-300 hover:bg-purple-500 hover:text-black rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev + 1) % testimonials.length
                )
              }
              className="border-gray-700 text-gray-300 hover:bg-purple-500 hover:text-black rounded-full w-12 h-12"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
