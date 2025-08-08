"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface EquipmentSectionProps {
  equipment: { name: string; image: string; description: string }[];
}

export function EquipmentSection({ equipment }: EquipmentSectionProps) {
  return (
    <section
      id="equipment"
      className=" bg-gradient-to-b from-[#0a0a0a] to-[#121212]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="px-4 py-1  bg-transparent text-white border border-white rounded-xl  text-sm font-bold tracking-wider uppercase mb-6 inline-block">
            Top-Tier Equipment
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            ELITE <span className="text-purple-400">EQUIPMENT</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Train with the best equipment money can buy. Every piece is
            carefully selected to help you achieve your fitness goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-[#0c0c0c] border-gray-800 hover:border-purple-500 transition-all duration-500 overflow-hidden rounded-xl h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                      {item.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-300 text-base">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
