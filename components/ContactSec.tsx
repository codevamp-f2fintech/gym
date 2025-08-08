"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Dumbbell } from "lucide-react";

interface ContactSectionProps {}

export function ContactSection({}: ContactSectionProps) {
  return (
    <section
      id="contact"
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
          <span className="px-4 py-1 bg-transparent text-white border border-white rounded-xl text-sm font-bold tracking-wider uppercase mb-6 inline-block">
            Contact Us
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            GET IN <span className="text-purple-400">TOUCH</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? Ready to start your fitness journey? We're here to
            help you every step of the way.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Side - Operating Hours */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-6">
              <div className="bg-red-500 p-4 rounded-xl">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Location</h3>
                <p className="text-gray-300 text-lg">
                  123 Fitness Street, Gym City, GC 12345
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="bg-red-500 p-4 rounded-xl">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Phone</h3>
                <p className="text-gray-300 text-lg">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="bg-red-500 p-4 rounded-xl">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Email</h3>
                <p className="text-gray-300 text-lg">info@engrossfitness.com</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/80 p-8 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Dumbbell className="w-6 h-6 text-purple-400 mr-2" /> Operating
                Hours
              </h3>
              <div className="space-y-4 text-gray-300 text-lg">
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span>Monday - Friday</span>
                  <span className="text-white font-medium">
                    5:00 AM - 11:00 PM
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span>Saturday</span>
                  <span className="text-white font-medium">
                    6:00 AM - 10:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white font-medium">
                    7:00 AM - 9:00 PM
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gray-900/80 p-4 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.3)] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.8157063283106!2d79.40401791196768!3d28.387267051881537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a007437897ef89%3A0xa971c4ef37077ed4!2sENGROSS%20FITNESS!5e0!3m2!1sen!2sin!4v1754486043016!5m2!1sen!2sin"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="400"
              style={{ border: 0, filter: "grayscale(1) invert(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
