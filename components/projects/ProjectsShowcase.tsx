"use client";

import Image from "next/image";
import { memo } from "react";

/**
 * Projects Data (kept outside component to avoid re-creation on re-render)
 */
const projects = [
  {
    id: 1,
    title: "for GutSake",
    image: "/projects/gutsake.png",
    size: "large",
    live: "https://www.forgutsake.in/",
  },
  {
    id: 2,
    title: "Atlantis by The Mittal Group",
    image: "/projects/atlantis.png",
    size: "small",
    live: "https://atlantisbymittalgroup.com/",
  },
  {
    id: 3,
    title: "SG Realty",
    image: "/projects/sg-realty.png",
    size: "small",
    live: "https://sgrealty.in/",
  },
  {
    id: 4,
    title: "CargoJet",
    image: "/projects/cargojet.png",
    size: "large",
    live: "#",
  },

  {
    id: 5,
    title: "Nanik Group",
    image: "/projects/nanik.png",
    size: "small",
    live: "https://nanikgroup.co/",
  },
  {
    id: 6,
    title: "Ensaara Metropark",
    image: "/projects/ensaara.png",
    size: "small",
    live: "https://www.ensaara.co.in/ensaara-changes/",
  },
  {
    id: 7,
    title: "Infradeals",
    image: "/projects/infradeals.png",
    size: "small",
    live: "https://infradeals.in/",
  },
  {
    id: 8,
    title: "The Jaadu",
    image: "/projects/jaadu.png",
    size: "small",
    live: "https://thejaadu.com/",
  },
  {
    id: 9,
    title: "Bake House by Ishika",
    image: "/projects/bake-house.png",
    size: "small",
    live: "https://thebakehousebyishika.com/",
  },
  {
    id: 10,
    title: "Pl Mediaforum Digital",
    image: "/projects/mediaforum.png",
    size: "small",
    live: "https://mediaforumdigital.com/",
  },
  {
    id: 11,
    title: "Power Storm",
    image: "/projects/powerstorm.png",
    size: "small",
    live: "https://powerstorm.in/",
  },
  {
    id: 12,
    title: "MKAT Brandworks",
    image: "/projects/mkat.png",
    size: "small",
    live: "https://mkatbrandworks.com/",
  },
  {
    id: 13,
    title: "Elisa Home Saloon",
    image: "/projects/elisa.png",
    size: "small",
    live: "https://elisahomesalon.com/",
  },
  {
    id: 14,
    title: "Basera Hotel",
    image: "/projects/browns-hotel.png",
    size: "small",
    live: "https://thebrowns.in/",
  },
  {
    id: 15,
    title: "Potli Pickles",
    image: "/projects/pickle.png",
    size: "small",
    live: "#",
  },
  {
    id: 16,
    title: "Luminist Skin Care",
    image: "/projects/luminist.png",
    size: "small",
    live: "#",
  },
];

/**
 * Single Project Card (memoized for performance)
 */
const ProjectCard = memo(function ProjectCard({ project }: any) {
  const isLarge = project.size === "large";
  const isDisabled = project.live === "#";

  return (
    <div
      className={`relative rounded-xl overflow-hidden border border-slate-700 bg-[#020617] transition ${
        isLarge ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        priority={project.id <= 2} // only first few images priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover opacity-80"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-slate-100 text-xl font-semibold mb-4">
          {project.title}
        </h3>

        {isDisabled ? (
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-slate-700 text-slate-400 cursor-not-allowed">
            Can't Access Individually
          </span>
        ) : (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 w-fit px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 hover:bg-blue-400 text-white transition"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
});

export default function ProjectsShowcase() {
  return (
    <section className="relative py-32 px-6 bg-[#0f172a] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-100">Projects</h2>
          <p className="text-slate-400 mt-4">Selected work & case studies</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 auto-rows-[250px] gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
