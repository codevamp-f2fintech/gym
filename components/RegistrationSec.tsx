"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface RegistrationFormProps {}

export function RegistrationForm({}: RegistrationFormProps) {
  return (
    <section id="registration" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/registration-background.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-cyan-900/30" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span
            className="px-4 py-1 bg-transparent
           text-white border border-white text-sm font-bold tracking-wider uppercase rounded-xl mb-6 inline-block"
          >
            Get Started
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            BECOME <span className="text-red-500">ENGROSSED</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your life? Fill out the form below and take the
            first step towards a stronger, healthier you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-black/70 border-gray-800 backdrop-blur-md rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.2)]">
            <CardContent className="p-8 md:p-12">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      className="bg-gray-900/80 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 rounded-lg h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Age
                    </label>
                    <Input
                      type="number"
                      placeholder="Your age"
                      className="bg-gray-900/80 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 rounded-lg h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Gender
                    </label>
                    <select className="w-full p-3 bg-gray-900/80 border border-gray-700 text-white rounded-lg focus:border-cyan-400 focus:outline-none h-12">
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Preferred Time
                    </label>
                    <select className="w-full p-3 bg-gray-900/80 border border-gray-700 text-white rounded-lg focus:border-cyan-400 focus:outline-none h-12">
                      <option value="">Select Time</option>
                      <option value="morning">Morning (6AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 6PM)</option>
                      <option value="evening">Evening (6PM - 10PM)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Fitness Goal
                  </label>
                  <select className="w-full p-3 bg-gray-900/80 border border-gray-700 text-white rounded-lg focus:border-cyan-400 focus:outline-none h-12">
                    <option value="">Select Your Goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="strength">Strength Training</option>
                    <option value="endurance">Endurance</option>
                    <option value="general">General Fitness</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-gray-900/80 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 rounded-lg h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      placeholder="(123) 456-7890"
                      className="bg-gray-900/80 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400 rounded-lg h-12"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-500 hover:bg-purle-600 text-white font-bold py-6 text-lg rounded-lg transition-all duration-300 "
                >
                  BECOME ENGROSSED TODAY
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
