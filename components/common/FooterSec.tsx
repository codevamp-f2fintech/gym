"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter } from "lucide-react";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export function FooterLast({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-black border-t border-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-3xl font-black mb-6">
              <span className="text-white">ENGROSS</span>
              <span className="text-purple-500 ml-1">FITNESS</span>
            </div>
            <p className="text-gray-400 mb-6">Push Limits. Stay Engrossed.</p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/engross_fitness?igsh=ZjkxZmp6OTZvazE4"
                className="bg-gray-900 hover:bg-purple-500 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/19QpqmbFLW/?mibextid=wwXIfr"
                className="bg-gray-900 hover:bg-purple-500 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-900 hover:bg-purple-500 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Equipment", "Testimonials", "Gallery", "Packages"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new classes and promotions.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-900 border border-gray-700 text-white placeholder-gray-400 
               rounded-tl-xl rounded-bl-xl rounded-tr-none rounded-br-none 
               outline-none focus:outline-none focus:ring-0 focus:border-transparent"
              />
              <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-tr-xl rounded-br-xl  rounded-tl-none rounded-bl-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Engross Fitness. All rights reserved. |
            Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
