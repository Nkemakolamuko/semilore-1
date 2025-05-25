import React, { useState } from "react";
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
  Loader2,
} from "lucide-react";

// Mock toast function since we can't import react-hot-toast in this environment
// In your actual project, replace this with: import toast from 'react-hot-toast';
const toast = {
  success: (message) => {
    // Create a temporary toast notification
    const toastEl = document.createElement("div");
    toastEl.className =
      "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300";
    toastEl.textContent = message;
    document.body.appendChild(toastEl);
    setTimeout(() => {
      toastEl.style.opacity = "0";
      setTimeout(() => document.body.removeChild(toastEl), 300);
    }, 3000);
  },
  error: (message) => {
    const toastEl = document.createElement("div");
    toastEl.className =
      "fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300";
    toastEl.textContent = message;
    document.body.appendChild(toastEl);
    setTimeout(() => {
      toastEl.style.opacity = "0";
      setTimeout(() => document.body.removeChild(toastEl), 300);
    }, 3000);
  },
};

export default function ContactFooterSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xanogdyg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success(
          "🎉 Message sent successfully! I'll get back to you soon."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("❌ Failed to send message. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Contact Form Section */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Let's Work
                <span className="block text-yellow-400">Together</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Ready to bring your ideas to life? I'm here to help you create
                exceptional digital experiences. Let's discuss your project and
                make something amazing together.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Rwanda</p>
                    <p className="text-white font-semibold">(+250) 791703799</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Nigeria</p>
                    <p className="text-white font-semibold">
                      (+234) 9152349692
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">
                      s.nwachukwu@alustudent.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-4 md:p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      disabled={isLoading}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      disabled={isLoading}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    disabled={isLoading}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="5"
                    required
                    disabled={isLoading}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-yellow-400"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                Semilore <span className="text-yellow-400">Nwachukwu</span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A passionate college student who provides services for digital
                programming and design content needs. I have been working on
                product management for more than 2 years of experience.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-yellow-400 hover:text-gray-900 p-3 rounded-lg transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nwachukwu-oluwasemilore-72a9b7256"
                  className="bg-gray-700 hover:bg-yellow-400 hover:text-gray-900 p-3 rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-yellow-400 hover:text-gray-900 p-3 rounded-lg transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/semii_loree/profilecard/?igsh=cXA5Y3JqdmxwMmp3"
                  className="bg-gray-700 hover:bg-yellow-400 hover:text-gray-900 p-3 rounded-lg transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Product Management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Product Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Communication
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Business Analyst
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} Nwachukwu Semilore. <br /> All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
