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
import { SiNextdotjs } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
const skillGroups = [
  {
    id: 1,
    title: "Frontend",
    skills: [
      { id: 1, name: "HTML5", icon: SiHtml5 },
      { id: 2, name: "CSS", icon: SiCss },
      { id: 3, name: "JavaScript", icon: SiJavascript },
      { id: 4, name: "React", icon: SiReact },
      { id: 5, name: "Next.js", icon: SiNextdotjs },
      { id: 6, name: "Tailwind", icon: SiTailwindcss },
      { id: 7, name: "Bootstrap", icon: SiBootstrap },
      { id: 8, name: "GSAP", icon: SiGreensock },
    ],
  },
  {
    id: 2,
    title: "Backend",
    skills: [
      { id: 1, name: "Node.js", icon: SiNodedotjs },
      { id: 2, name: "Express", icon: SiNodedotjs },
      { id: 3, name: "MongoDB", icon: SiMongodb },
      { id: 4, name: "REST API", icon: SiNodedotjs },
    ],
  },
  {
    id: 3,
    title: "Tools & Platforms",
    skills: [
      { id: 1, name: "Git", icon: SiGit },
      { id: 2, name: "GitHub", icon: SiGithub },
      { id: 3, name: "Shopify", icon: SiShopify },
    ],
  },
  {
    id: 4,
    title: "SEO",
    skills: [
      { id: 1, name: "SEO Optimization", icon: FaSearch },
      { id: 2, name: "Technical SEO", icon: BsGraphUp },
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
          {skillGroups.map((group) => (
            <div key={group.id}>
              {/* category title */}
              <h3 className="text-xl font-semibold text-blue-400 mb-6">
                {group.title}
              </h3>

              {/* grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.id}
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
