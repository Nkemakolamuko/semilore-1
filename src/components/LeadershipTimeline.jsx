import React from "react";
import {
  Calendar,
  Users,
  TrendingUp,
  Target,
  Award,
  Briefcase,
} from "lucide-react";

export default function LeadershipTimeline() {
  const timelineEvents = [
    {
      year: "2022",
      title: "African Leadership University",
      description:
        "My leadership journey began when I joined the African Leadership University committed to building a mission-driven life focused on job creation, innovation, and governance.",
      icon: Award,
      color: "from-blue-400 to-cyan-400",
      position: "left",
    },
    {
      year: "2023",
      title: "Stand Festival Leadership",
      description:
        "I co-led in the stand festival. This was a transformational moment where I applied project management and team coordination skills to successfully deliver a student-led event. I ensured smooth logistics and execution.",
      icon: Users,
      color: "from-purple-400 to-pink-400",
      position: "right",
    },
    {
      year: "2023",
      title: "Financial Planning Excellence",
      description:
        "I developed a revenue and expense projection assignment. I created a structured financial plan for a business concept. This helped strengthen my budgeting, planning, and justification skills crucial for any entrepreneurial leader.",
      icon: TrendingUp,
      color: "from-emerald-400 to-teal-400",
      position: "left",
    },
    {
      year: "2024",
      title: "First Business Launch",
      description:
        "I launched my first business, which is still ongoing. My first business venture taught me valuable lessons in market testing, customer service, and entrepreneurship. Though the venture ended, the experience sharpened my practical business acumen.",
      icon: Briefcase,
      color: "from-orange-400 to-red-400",
      position: "right",
    },
    {
      year: "2024",
      title: "Youth Unemployment Research",
      description:
        "Completed Theory of Change Assignment on Youth Unemployment in Nigeria. This was a major milestone in aligning my mission of economic development and good governance with real-world research and policy thinking. It deepened my systems-thinking and advocacy skills.",
      icon: Target,
      color: "from-amber-400 to-yellow-400",
      position: "left",
    },
  ];

  return (
    <section
      className="py-20 px-4 lg:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      id="timeline"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700 mb-6">
            <Calendar className="w-5 h-5 text-gray-300" />
            <span className="text-gray-300 font-medium">
              Leadership Journey
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Semilore's
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Leadership Timeline
            </span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl mx-auto px-2">
            A reflection of a journey grounded in growth, initiative, and
            purpose. Beginning in 2022 with enrollment at the African Leadership
            University, each milestone represents a deliberate step toward
            becoming a transformational leader committed to innovation,
            governance, and youth empowerment.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line - Hidden on mobile, visible on desktop */}
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow-400 via-orange-400 to-red-400 rounded-full"
            style={{ height: "calc(100% - 120px)", top: "60px" }}
          ></div>

          {/* Mobile Timeline Line */}
          <div
            className="md:hidden absolute left-6 w-0.5 bg-gradient-to-b from-yellow-400 via-orange-400 to-red-400 rounded-full"
            style={{ height: "calc(100% - 80px)", top: "40px" }}
          ></div>

          {/* Timeline Events */}
          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isLeft = event.position === "left";

              return (
                <div
                  key={index}
                  className={`flex items-start md:items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start w-full">
                    {/* Mobile Icon */}
                    <div className="flex-shrink-0 mr-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${event.color} shadow-lg flex items-center justify-center relative z-10`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                        <div
                          className={`absolute inset-0 rounded-full bg-gradient-to-br ${event.color} animate-ping opacity-20`}
                        ></div>
                      </div>
                    </div>

                    {/* Mobile Content */}
                    <div className="flex-1">
                      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                        <div className="flex items-center mb-3">
                          <h3 className="text-lg font-bold text-white mr-3">
                            {event.title}
                          </h3>
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${event.color} text-white`}
                          >
                            {event.year}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center w-full">
                    {/* Content Card */}
                    <div className={`w-5/12 ${isLeft ? "pr-8" : "pl-8"}`}>
                      <div
                        className={`bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 ${
                          isLeft ? "text-right" : "text-left"
                        }`}
                      >
                        <div
                          className={`flex items-center mb-4 ${
                            isLeft ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                              event.color
                            } p-2.5 ${isLeft ? "ml-3" : "mr-3"} ${
                              isLeft ? "order-2" : "order-1"
                            }`}
                          >
                            <IconComponent className="w-full h-full text-white" />
                          </div>
                          <div className={isLeft ? "order-1" : "order-2"}>
                            <h3 className="text-xl font-bold text-white">
                              {event.title}
                            </h3>
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${event.color} text-white mt-1`}
                            >
                              {event.year}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Point */}
                    <div className="w-2/12 flex justify-center">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} shadow-lg flex items-center justify-center relative z-10`}
                      >
                        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                          <div
                            className={`w-4 h-4 rounded-full bg-gradient-to-br ${event.color}`}
                          ></div>
                        </div>

                        {/* Pulse Animation */}
                        <div
                          className={`absolute inset-0 rounded-full bg-gradient-to-br ${event.color} animate-ping opacity-20`}
                        ></div>
                      </div>
                    </div>

                    {/* Empty Space */}
                    <div className="w-5/12"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              The Journey Continues
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-6">
              Every challenge and triumph has added depth to my leadership
              toolkit, shaping me into a transformational leader ready to drive
              innovation and positive change.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
              <div
                className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-3 h-3 bg-red-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
