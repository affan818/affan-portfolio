"use client";

import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiShopify,
  SiMongodb,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiGreensock,
} from "react-icons/si";

import { FaSearch } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: FaSearch }, // ✅ ADDED
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "GSAP", icon: SiGreensock },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "REST API", icon: SiNodedotjs },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Shopify", icon: SiShopify },
    ],
  },
  {
    title: "SEO",
    skills: [
      { name: "SEO Optimization", icon: FaSearch },
      { name: "Technical SEO", icon: BsGraphUp },
    ],
  },
];

export default function SkillsGrid() {
  return (
    <section className="relative py-32 px-6 bg-[#0f172a] overflow-hidden">
      {/* grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-100">
            Skills & Expertise
          </h2>

          <p className="text-slate-400 mt-4">My complete developer toolkit</p>
        </div>

        {/* skill groups */}
        <div className="space-y-16">
          {skillGroups.map((group, i) => (
            <div key={i}>
              {/* category title */}
              <h3 className="text-xl font-semibold text-blue-400 mb-6">
                {group.title}
              </h3>

              {/* grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {group.skills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={index}
                      className="group relative rounded-xl border border-slate-700 bg-[#020617] p-6 flex flex-col items-center justify-center text-center transition duration-300 hover:-translate-y-1 hover:border-blue-400"
                    >
                      {/* icon */}
                      <Icon className="text-3xl text-blue-400 mb-3 transition group-hover:scale-110" />

                      {/* name */}
                      <p className="text-slate-200 text-sm">{skill.name}</p>

                      {/* subtle glow */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-blue-500/5 blur-xl transition"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
