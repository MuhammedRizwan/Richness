import Image from "next/image";

const services = [
    {
        title: "Business Events",
        description:
            "We plan and execute high-impact business events that align with your brand strategy, foster meaningful connections, and drive measurable results.",
        image: "/business-event-banner.avif",
    },
    {
        title: "Entrepreneur Rejuvention Course",
        description:
            "A transformative course crafted to revitalize your entrepreneurial mindset, align your vision, and reignite growth with purpose-driven strategies.",
        image: "/erc-logo.avif",
        className: "md:col-span-2",

    },
    {
        title: "Training & Consulting",
        description:
            "Our expert-led training programs and tailored consulting services empower teams to adopt industry best practices and accelerate results.",
        image: "/training-AL.avif",
        className: "md:col-span-2",
    },
    {
        title: "Richness Gurukulam",
        description:
            "An immersive mentorship program designed to cultivate financial intelligence, wealth consciousness, and long-term prosperity through ancient and modern principles.",
        image: "/gurukulam.avif",
    },
    {
        title: "Brand Uplift",
        description:
            "We help revitalize your brand identity, align messaging with market positioning, and implement strategies that elevate recognition and trust.",
        image: "/brand-uplift.avif",

    },
    {
        title: "Job Bank",
        description:
            "A dedicated platform to connect skilled professionals with meaningful opportunities across industries, fostering workforce empowerment.",
        image: "/jobbank.avif",
    },
    {
        title: "Digi Buds",
        description:
            "A digital learning initiative designed to nurture early tech talent through gamified education and community-driven growth.",
        image: "/digibuds.avif",
    },
];

export default function OurService() {
    return (
        <section className="bg-orange-50 py-16 px-4 md:px-12 font-serif">
            <div className="max-w-7xl mx-auto">
                <span className="bg-white px-3 py-2 text-sm text-yellow-400 font-semibold uppercase mb-2 inline-block">
                    Latest Services
                </span>
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Our Solutions For A Better Business
                    </h2>
                    <p className="text-gray-600 mt-4 md:mt-0 max-w-xl text-sm">
                        Our commitment is to empower organizations with strategic planning and data-driven insights that fuel sustainable growth. Through tailored business strategies and actionable roadmaps, we help you navigate complexity, unlock opportunities, and position your brand for long-term success. Partner with us to transform vision into value and build a resilient, future-ready enterprise.
                    </p>
                </div>

                <div className="md:grid md:grid-cols-3 auto-rows-[minmax(200px,_auto)] gap-4 flex md:flex-none overflow-x-auto space-x-4 md:space-x-0 snap-x snap-mandatory scroll-smooth scrollbar-hide px-2">
                    {services.map((item, idx) => (
                        <div
                            key={idx}
                            className={`bg-white rounded-xl shadow hover:shadow-lg transition p-4 relative 
                            flex-shrink-0 w-[100%] snap-start md:w-auto ${item.className ?? ""}`}
                        >
                            <div className="relative h-64 md:h-48 w-full mb-4 overflow-hidden rounded-md">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                            <button className="text-sm mt-4 text-primary hover:underline">
                                Read More →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
