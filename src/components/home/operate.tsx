import {
  ArrowRight,
  BookOpen,
  CheckCheck,
  HandHeart,
  Handshake,
  IndianRupee,
  Lightbulb,
} from "lucide-react";

export default function Operate() {
  const steps = [
    {
      label: "Richness",
      description:
        "We embrace financial abundance with purpose, believing wealth is a tool to uplift and empower.",
      icon: <IndianRupee className="w-6 h-6 text-orange-500" />,
    },
    {
      label: "Gratitude",
      description:
        "We cultivate appreciation and humility, recognizing the value in every experience and relationship.",
      icon: <HandHeart className="w-6 h-6 text-orange-500" />,
    },
    {
      label: "Creativity",
      description:
        "We foster innovation and originality, transforming challenges into opportunities with bold ideas.",
      icon: <Lightbulb className="w-6 h-6 text-orange-500" />,
    },
    {
      label: "Integrity",
      description:
        "We uphold transparency and trust, doing the right thing even when no one is watching.",
      icon: <Handshake className="w-6 h-6 text-orange-500" />,
    },
    {
      label: "Quest to learn",
      description:
        "We are lifelong learners, continuously evolving through curiosity, education, and feedback.",
      icon: <BookOpen className="w-6 h-6 text-orange-500" />,
    },
    {
      label: "Result",
      description:
        "We are outcome-driven, delivering measurable success through disciplined execution.",
      icon: <CheckCheck className="w-6 h-6 text-orange-500" />,
    },
  ];

  return (
    <section className="bg-white py-14 px-4 md:px-20 font-serif">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-xs md:text-sm text-orange-600 font-medium uppercase mb-2 block">
          DNA Values
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-10">
          Our Core Principles
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="bg-orange-100 rounded-full p-3 mb-3">
                  {step.icon}
                </div>
                <h3 className="text-sm md:text-md font-semibold text-gray-700">
                  {step.label}
                </h3>
                <p className="text-xs md:text-xs text-gray-600 mt-2">{step.description}</p>
              </div>

              {index !== steps.length - 1 && (
                <>
                <ArrowRight className="hidden md:block ms-4 text-yellow-400 w-20 h-20" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
