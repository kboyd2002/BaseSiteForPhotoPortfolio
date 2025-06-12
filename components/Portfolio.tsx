"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Camera, Video, Play } from "lucide-react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "sports", label: "Sports" },
    { id: "music", label: "Music" },
    { id: "events", label: "Events" },
  ];

  // Placeholder portfolio items - in a real app, these would be actual images
  const portfolioItems = [
    {
      id: 1,
      title: "Dez Bryant Training Session",
      category: "sports",
      type: "photo",
      client: "Dez Bryant",
      description: "Exclusive training session photography",
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      title: "BigXthaPlug Studio Session",
      category: "music",
      type: "video",
      client: "BigXthaPlug",
      description: "Behind-the-scenes studio recording",
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "Kevin Gates Concert",
      category: "music",
      type: "photo",
      client: "Kevin Gates",
      description: "Live performance photography",
      image: "/api/placeholder/400/300",
    },
    {
      id: 4,
      title: "Dallas Cowboys Practice",
      category: "sports",
      type: "photo",
      client: "Dallas Cowboys",
      description: "Team practice session coverage",
      image: "/api/placeholder/400/300",
    },
    {
      id: 5,
      title: "Music Video Production",
      category: "music",
      type: "video",
      client: "Independent Artist",
      description: "Full music video production",
      image: "/api/placeholder/400/300",
    },
    {
      id: 6,
      title: "Corporate Event",
      category: "events",
      type: "photo",
      client: "Fortune 500 Company",
      description: "Annual company celebration",
      image: "/api/placeholder/400/300",
    },
  ];

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of professional work spanning sports photography, music industry content, 
            and event coverage for high-profile clients.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-4 glass-effect p-2 rounded-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-white text-black"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-lg glass-effect hover-lift"
            >
              {/* Placeholder for image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.type === "video" ? (
                    <Video className="w-16 h-16 text-gray-600" />
                  ) : (
                    <Camera className="w-16 h-16 text-gray-600" />
                  )}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {item.type === "video" ? (
                    <Play className="w-12 h-12 text-white" />
                  ) : (
                    <Camera className="w-12 h-12 text-white" />
                  )}
                </div>

                {/* Type indicator */}
                <div className="absolute top-4 right-4">
                  <div className="glass-effect px-3 py-1 rounded-full text-sm">
                    {item.type === "video" ? (
                      <div className="flex items-center gap-1">
                        <Video size={14} />
                        Video
                      </div>
                    ) : (
                      <div className="flex items-center gap-1">
                        <Camera size={14} />
                        Photo
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-2">{item.client}</p>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-8">
            Ready to create something amazing together?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover-lift"
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
