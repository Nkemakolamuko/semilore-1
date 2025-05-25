import { FileText, BookOpen, Lightbulb, PenTool } from "lucide-react";

export default function WorkLinks() {
  const portfolioItems = [
    {
      title: "Artefact 1",
      icon: FileText,
      href: "https://docs.google.com/document/d/1tBABVUM0J3DmSPqoioOGNMNmi2p88LqWZObIpIUJJz8/edit?usp=sharing",
      description: "Project Documentation",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Artefact 2",
      icon: BookOpen,
      href: "https://docs.google.com/document/d/1XfFoTIujUm5q6Zz8NgPIpCR3Se1AF4MfmgJW0o8t4WA/edit?usp=sharing",
      description: "Research Study",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Artefact 3",
      icon: Lightbulb,
      href: "https://docs.google.com/document/d/1CBZ5HvZ8Jz_aXqJTC0vRtSvJDh9aCn717g1QTmM-4xs/edit?usp=sharing",
      description: "Innovation Project",
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Reflection Essay",
      icon: PenTool,
      href: "https://docs.google.com/document/d/1smCY-K3U7WfnZpubuZE23llQ7ZWMsw1vHTtMu7UAHno/edit?usp=sharing",
      description: "Personal Insights",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
          Portfolio Collection
        </h2>
        <p className="text-gray-400 text-lg">
          Explore my academic work and projects
        </p>
      </div>

      {/* Navigation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 md:hover:shadow-2xl shadow-2xl md:hover:shadow-blue-500/20 shadow-blue-500/20"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 md:group-hover:opacity-10 opacity-10 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col items-center text-center">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-full h-full text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2 md:group-hover:text-transparent text-transparent md:group-hover:bg-gradient-to-r bg-gradient-to-r md:group-hover:from-white from-white md:group-hover:to-gray-300 to-gray-300 md:group-hover:bg-clip-text bg-clip-text transition-all duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-4 opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Subtle border glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-20 md:group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}
              />
            </a>
          );
        })}
      </div>

      {/* Bottom accent */}
      <div className="mt-12 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-50" />
      </div>
    </div>
  );
}
