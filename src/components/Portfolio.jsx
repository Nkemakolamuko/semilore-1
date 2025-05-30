import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import mastercardLogo from "../assets/mastercard-logo.svg";
import googleLogo from "../assets/google-logo.svg";
import { TbBulb } from "react-icons/tb";
import { LuBookOpenCheck } from "react-icons/lu";
import { GiStairsGoal } from "react-icons/gi";
import {
  Phone,
  Mail,
  Send,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import semi from "../assets/semi.jpeg";
import WorkLinks from "./WorkLinks";

const Portfolio = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      title: "Mission",
      subtitle: "What is my mission?",
      image: <TbBulb />,
      details: [
        "Semilore’s mission is to promote good governance and economic empowerment by ensuring communities have access to transparent leadership and meaningful employment. She strives to design solutions that are sustainable, inclusive, and aligned with Africa’s development goals. Through intentional learning, service, and leadership, she aims to be a changemaker, shaping a better future for all.",
      ],
    },
    {
      title: "Interest",
      subtitle: "Find what I am interested in",
      image: <LuBookOpenCheck />,
      details: [
        "Beyond her professional pursuits, Semilore enjoys exploring new ideas, reflecting through writing, and engaging in community conversations. She's passionate about leadership, innovation, food, and cultural discovery. Whether diving into strategy or simply connecting with peers, she thrives on meaningful interaction and purposeful work. Her curiosity drives her to continuously grow, adapt, and contribute positively wherever she finds herself.",
      ],
    },
    {
      title: "Goal",
      subtitle: "Know my goal",
      image: <GiStairsGoal />,
      details: [
        "To design impactful digital products that solve real-world problems in Africa, empower communities, and bridge the gap between technology and meaningful user experiences. I aim to combine design thinking with entrepreneurial leadership to drive innovation and inclusive growth across the continent.",
      ],
    },
  ];

  const skills = [
    {
      name: "Product Design",
      description:
        "Crafting user-centered digital experiences that align with both business goals and customer needs. Skilled in wireframing, prototyping, and using tools like Figma to bring ideas to life.",
      icon: "🎨",
    },
    {
      name: "Entrepreneurial Strategy",
      description:
        "Equipped with entrepreneurial thinking to identify market gaps, validate ideas, and build scalable solutions that solve real-world problems.",
      icon: "🚀",
    },
    {
      name: "User Research & Testing",
      description:
        "Proficient in conducting interviews, usability tests, and gathering insights to drive data-informed design decisions that improve user satisfaction.",
      icon: "🔍",
    },
    {
      name: "Leadership & Collaboration",
      description:
        "Experienced in leading multidisciplinary teams, facilitating design sprints, and working cross-functionally to deliver high-impact digital products.",
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white px-0 md:px-24 relative">
      {/* Navigation */}
      <nav className="flex items-center justify-between pb-4 pt-6 px-4 md:px-8 md:py-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">S</span>
          </div>
          <span className="font-semibold">Semilore</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white hover:text-yellow-500 transition-colors"
          >
            Home
          </a>
          <a href="#achi" className="hover:text-yellow-500 transition-colors">
            Artefacts
          </a>
          <a
            href="#mission"
            className="hover:text-yellow-500 transition-colors"
          >
            Mission
          </a>
          <a
            href="#timeline"
            className="hover:text-yellow-500 transition-colors"
          >
            Timeline
          </a>
          <a href="#skills" className="hover:text-yellow-500 transition-colors">
            Skills
          </a>
        </div>

        {/* Social Links & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <a
              href="https://docs.google.com/document/d/1BOAKGK6SpTtIuFByQGyZoF2an6NicbsnB8SZq_uvY20/edit?usp=sharing"
              target="_blank"
              className="text-gray-400 hover:text-yellow-500 transition-colors"
            >
              <div className="rounded-xl bg-yellow-400 text-gray-800 hover:text-white hover:bg-yellow-600 transition-all font-semibold flex items-center justify-center px-4 md:px-16 py-2 md:py-2">
                MY RESUME 💼
              </div>
            </a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0 }}
            className="fixed top-0 right-0 w-full h-full bg-gray-900/50 z-10 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 h-full bg-gray-900 z-50 shadow-lg md:hidden"
            >
              <div className="flex flex-col px-6 py-8 space-y-6 text-lg">
                <button
                  className="self-end mb-4 text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={28} />
                </button>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Home
                </a>
                <a
                  href="#achi"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Artefacts
                </a>
                <a
                  href="#mission"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Mission
                </a>
                <a
                  href="#timeline"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Timeline
                </a>
                <a
                  href="#skills"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Skills
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="p-4 md:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center py-0 md:py-12">
          <div className="space-y-6">
            <div>
              <p className="text-gray-400 text-xl md:text-3xl mb-2">Hello👋</p>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                I'm Nwachukwu Semilore
              </h1>
              <div className="h-1 w-24 bg-yellow-500 mb-6"></div>
            </div>

            <p className="text-gray-300 text-base leading-relaxed max-w-3xl">
              Nwachukwu Semilore (she/her) is a driven and purpose-led
              final-year student at the African Leadership University, pursuing
              a Bachelor's in Entrepreneurial Leadership. With a passion for
              product management, strategic thinking, and community development,
              Semilore is dedicated to solving real-world problems that impact
              people's lives. She has engaged in impactful roles and projects
              that strengthened her leadership, problem-solving, and
              communication skills. Her journey is rooted in the belief that
              youth are powerful catalysts for change, and she is committed to
              creating systems that uplift others and build long-term
              opportunities.
            </p>

            <div className="space-y-4" id="service">
              {/* <div>
                <h3 className="text-white font-semibold mb-2">Services</h3>
                <p className="text-gray-400">
                  Let's build quality products in programming and design with my
                  services
                </p>
              </div> */}

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-yellow-500 md:bg-gray-700 md:hover:bg-yellow-400 text-gray-900 md:text-white md:hover:text-gray-900 p-3 rounded-lg transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nwachukwu-oluwasemilore-72a9b7256"
                  className="bg-yellow-500 md:bg-gray-700 md:hover:bg-yellow-400 text-gray-900 md:text-white md:hover:text-gray-900 p-3 rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-yellow-500 md:bg-gray-700 md:hover:bg-yellow-400 text-gray-900 md:text-white md:hover:text-gray-900 p-3 rounded-lg transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/semii_loree/profilecard/?igsh=cXA5Y3JqdmxwMmp3"
                  className="bg-yellow-500 md:bg-gray-700 md:hover:bg-yellow-400 text-gray-900 md:text-white md:hover:text-gray-900 p-3 rounded-lg transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end md:mr-12">
            <div className="relative">
              <div className="w-90 h-110 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-end justify-center overflow-hidden">
                <div className="w-full h-full flex items-end justify-center">
                  <div className="w-[90%] h-[95%] bg-blue-800 rounded-t-full flex overflow-hidden justify-center">
                    {/* <div className="text-6xl mb-4">👨‍💻</div> */}
                    <img
                      src={semi}
                      alt="Semilore"
                      className="w-full h-full hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Artefacts Logos */}

        <WorkLinks />

        {/* Services Section */}
        <div className="py-8 md:py-16" id="achi">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Achievements</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                It is very important to celebrate our wins occationally.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-yellow-500 text-4xl font-bold mb-2">
                    5+
                  </div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-yellow-500 text-4xl font-bold mb-2">
                    3+
                  </div>
                  <div className="text-gray-400">Awards</div>
                </div>
                <div>
                  <div className="text-yellow-500 text-4xl font-bold mb-2">
                    2+
                  </div>
                  <div className="text-gray-400">Years in college</div>
                </div>
                <div>
                  <div className="text-yellow-500 text-4xl font-bold mb-2">
                    6+
                  </div>
                  <div className="text-gray-400">Years in business</div>
                </div>
              </div>
            </div>

            {/* Service Cards */}
            <div className="space-y-4" id="mission">
              {services.map((service, index) => {
                const isExpanded = expandedService === index;

                return (
                  <div
                    key={index}
                    onClick={() =>
                      setExpandedService(isExpanded ? null : index)
                    }
                    className="bg-gray-800 p-6 rounded-lg transition-colors group cursor-pointer hover:bg-gray-700"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                          <div className="w-12 h-8 bg-gray-600 rounded flex items-center justify-center">
                            <div className="w-fit h-fit rounded text-center text-yellow-500">
                              {service.image}
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-white">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                      <ArrowRight
                        className={`text-yellow-500 transform transition-transform ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                        size={20}
                      />
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="mt-4 text-gray-300 text-sm space-y-2 pl-20 pr-4">
                        <p>{service.details[0]}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="py-8 md:py-16" id="skills">
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-lg mb-6 flex items-center justify-center text-black text-xl font-bold">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {skill.name}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {skill.description}
                </p>
                {/* <button className="text-yellow-500 hover:text-yellow-400 transition-colors flex items-center space-x-2 group-hover:translate-x-1">
                  <span>View Work</span>
                  <ArrowRight size={16} />
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
