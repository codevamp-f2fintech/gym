"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PackagePricing {
  price: number;
  period: string;
  discount?: number; // Percentage discount
  features: string[];
}

interface Package {
  name: string;
  popular: boolean;
  pricing: {
    monthly: PackagePricing;
    quarterly: PackagePricing;
    halfYearly: PackagePricing;
    yearly: PackagePricing;
  };
}

interface PackagesSectionProps {
  packages: Package[];
  scrollToSection: (sectionId: string) => void;
}

export function PackagesSection({
  packages,
  scrollToSection,
}: PackagesSectionProps) {
  const [activePeriod, setActivePeriod] =
    useState<keyof Package["pricing"]>("monthly");

  const periodOptions: { key: keyof Package["pricing"]; label: string }[] = [
    { key: "monthly", label: "Monthly" },
    { key: "quarterly", label: "Quarterly" },
    { key: "halfYearly", label: "Half-Yearly" },
    { key: "yearly", label: "Yearly" },
  ];

  return (
    <section
      id="packages"
      className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#121212]"
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
            Join Us
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            MEMBERSHIP <span className="text-purple-400">PACKAGES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan to match your fitness goals and lifestyle.
            Every package includes access to our world-class facilities.
          </p>
        </motion.div>

        {/* Period Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex bg-gray-900 border border-gray-700 rounded-full p-1 shadow-lg">
            {periodOptions.map((option) => (
              <Button
                key={option.key}
                onClick={() => setActivePeriod(option.key)}
                className={cn(
                  "px-6 py-3 rounded-full text-lg font-medium transition-all duration-300",
                  activePeriod === option.key
                    ? "bg-purple-600 text-white hover:bg-purple-600   shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                    : "bg-transparent text-gray-300 hover:bg-gray-800"
                )}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const currentPricing = pkg.pricing[activePeriod];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {pkg.popular && (
                  <Badge className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white font-bold px-6 py-1 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    MOST POPULAR
                  </Badge>
                )}
                {currentPricing.discount && (
                  <Badge className="absolute top-10 right-4 bg-cyan-500 text-black font-bold px-4 py-1 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                    SAVE {currentPricing.discount}%
                  </Badge>
                )}
                <Card
                  className={`h-full ${
                    pkg.popular
                      ? "border-purple-500 bg-gradient-to-b from-purple-900/20 to-transparent"
                      : "border-gray-800 bg-[#0c0c0c]"
                  } backdrop-blur-md hover:border-purple-400 transition-all duration-500 rounded-xl overflow-hidden`}
                >
                  <CardHeader className="text-center pt-10 pb-6">
                    <CardTitle className="text-3xl font-bold text-white">
                      {pkg.name}
                    </CardTitle>
                    <div className="text-5xl font-black text-purple-400 mt-4">
                      ₹{currentPricing.price}
                      <span className="text-lg text-gray-400">
                        {currentPricing.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5 px-8">
                    {currentPricing.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-purple-400" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter className="px-8 pb-8 pt-4">
                    <Button
                      className={`w-full ${
                        pkg.popular
                          ? "bg-purple-500 hover:bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                          : "bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10"
                      } font-bold py-6 rounded-lg transition-all duration-300 text-lg`}
                      onClick={() => scrollToSection("registration")}
                    >
                      JOIN NOW
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
