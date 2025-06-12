"use client";

import { motion } from "framer-motion";
import { Camera, Video, Award, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Camera, label: "Photos Captured", value: "10,000+" },
    { icon: Video, label: "Videos Produced", value: "500+" },
    { icon: Award, label: "Years Experience", value: "8+" },
    { icon: Users, label: "Happy Clients", value: "200+" },
  ];

  const services = [
    {
      title: "Sports Photography",
      description: "Capturing the intensity and emotion of athletic moments with professional precision.",
      features: ["Game Day Coverage", "Player Portraits", "Action Shots", "Team Photography"]
    },
    {
      title: "Music Industry",
      description: "Creating visual stories for artists, from studio sessions to live performances.",
      features: ["Album Covers", "Music Videos", "Concert Photography", "Artist Portraits"]
    },
    {
      title: "Event Coverage",
      description: "Comprehensive documentation of special events and milestone moments.",
      features: ["Corporate Events", "Private Parties", "Award Ceremonies", "Behind-the-Scenes"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
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
            About <span className="gradient-text">OnlyKamz</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional photographer and videographer specializing in sports and music industry content. 
            With over 8 years of experience, I've had the privilege of working with high-profile clients 
            including Dallas Cowboys legend Dez Bryant and rising music stars like BigXthaPlug and Kevin Gates.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center glass-effect p-6 rounded-lg"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-white" />
              <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-effect p-6 rounded-lg hover-lift"
              >
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-white rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center glass-effect p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-6">My Philosophy</h3>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            "Every moment tells a story. Whether it's the split-second intensity of a game-winning play 
            or the raw emotion of an artist in the studio, my goal is to capture those authentic moments 
            that define careers and create lasting memories. I believe in building relationships with my 
            clients and understanding their vision to deliver content that exceeds expectations."
          </p>
          <div className="mt-6 text-right">
            <span className="text-xl font-bold gradient-text">- OnlyKamz</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
