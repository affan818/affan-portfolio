"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    year: "2024 - 2026",
    title: "Web Developer • Mediaforum Digital",
    desc: "Developed responsive websites and full-stack applications using React, Tailwind, Node.js, and MongoDB. Built custom Shopify stores and optimized performance & SEO.",
    points: [
      "Delivered 10+ client websites across multiple industries",
      "Improved website performance and load speed by up to 40%",
      "Built reusable React components for scalable UI systems",
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Shopify", "SEO"],
  },
  {
    id: 2,
    year: "2024",
    title: "React.js Developer • Nass Technologies",
    desc: "Developed modern UI components and integrated APIs to build scalable web applications using React ecosystem.",
    points: [
      "Built reusable UI components for multiple projects",
      "Collaborated with backend teams for API integrations",
      "Improved frontend performance and user experience",
    ],
    tech: ["React", "JavaScript", "API", "UI Development"],
  },
  {
    id: 3,
    year: "2024",
    title: "Freelance & Client Projects",
    desc: "Worked on real-world client projects including real estate, hotel, and service platforms with performance optimization and SEO implementation.",
    points: [
      "Developed real estate and hotel websites",
      "Implemented SEO strategies for better rankings",
      "Delivered fully responsive and optimized websites",
    ],
    tech: ["HTML", "CSS", "React", "Tailwind", "SEO"],
  },
  {
    id: 4,
    year: "2023",
    title: "Full Stack Development Journey",
    desc: "Built MERN stack applications including inventory systems and e-commerce platforms with secure backend architecture.",
    points: [
      "Developed REST APIs and backend systems",
      "Implemented authentication and database logic",
      "Built full-stack applications from scratch",
    ],
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".exp-card");

    gsap.from(cards, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.2,
      ease: "power2.out",
    });

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <section className="py-32 px-6 bg-[#0f172a]">
      <div className="max-w-5xl mx-auto">
        {/* heading */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-slate-100">Experience</h2>

          <p className="text-slate-400 mt-3">My journey as a developer</p>
        </div>

        {/* timeline container */}
        <div ref={containerRef} className="relative">
          {/* animated progress line */}
          <div className="absolute left-[52px] top-0 w-[2px] h-full bg-slate-700 origin-top">
            <div
              ref={lineRef}
              className="w-full h-full bg-blue-500 origin-top"
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="exp-card grid md:grid-cols-[120px_1fr] gap-8 items-start"
              >
                {/* year */}
                <div className="relative flex items-center gap-4">
                  <span className="px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/30 rounded-md">
                    {exp.year}
                  </span>
                </div>

                {/* card */}
                <div className="bg-[#020617] border border-slate-700 rounded-xl p-6 hover:border-slate-500 transition">
                  <h3 className="text-lg font-semibold text-slate-100">
                    {exp.title}
                  </h3>

                  <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                    {exp.desc}
                  </p>

                  {/* tech badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-slate-800 border border-slate-700 rounded text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
