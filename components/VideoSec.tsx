"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";

interface VideosSectionProps {}

export function VideosSection({}: VideosSectionProps) {
  const [playing, setPlaying] = useState<string | null>(null); // store active video id

  const videos = [
    {
      id: "1",
      thumb: "/videothumb1.jpg",
      title: "Strength Training Fundamentals",
      desc: "Master the basics with our expert trainers",
      url: "https://www.youtube.com/embed/lvk2PMsuS88?autoplay=1",
      shadow: "shadow-[0_0_25px_rgba(168,85,247,0.3)]",
      color: "bg-purple-500 hover:bg-purple-600 text-white",
      titleColor: "text-purple-400",
    },
    {
      id: "2",
      thumb: "/videothumb2.jpg",
      title: "Member Transformation Stories",
      desc: "Inspiring journeys of our community",
      url: "https://www.youtube.com/embed/yNLqtA69WvA?autoplay=1",
      shadow: "shadow-[0_0_25px_rgba(239,68,68,0.3)]",
      color: "bg-red-500 hover:bg-red-600 text-black",
      titleColor: "text-red-500",
    },
  ];
  return (
    <section id="videos" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/video-background.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="px-4 py-1  bg-transparent text-white border border-white rounded-xl  text-sm font-bold tracking-wider uppercase mb-6 inline-block">
            Video Content
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            GYM <span className="text-red-500">VLOGS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get an inside look at our training sessions, member stories, and
            fitness tips from our expert trainers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, x: video.id === "1" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div
                className={`relative overflow-hidden rounded-xl ${video.shadow} h-80`}
              >
                {playing === video.id ? (
                  <iframe
                    src={video.url}
                    className="w-full h-full rounded-xl"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={video.thumb}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        onClick={() => setPlaying(video.id)}
                        size="lg"
                        className={`${video.color} rounded-full p-6 shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-all duration-300`}
                      >
                        <Play className="w-8 h-8 fill-current" />
                      </Button>
                    </div>
                  </>
                )}
              </div>
              <h3 className={`text-xl font-bold mt-6 ${video.titleColor}`}>
                {video.title}
              </h3>
              <p className="text-gray-300 text-lg">{video.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
