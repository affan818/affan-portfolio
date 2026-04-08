"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "for GutSake",
    image: "/projects/gutsake.png",
    size: "large",
    live: "https://www.forgutsake.in/",
  },
  {
    id: 3,
    title: "Atlantis by The Mittal Group",
    image: "/projects/atlantis.png",
    size: "small",
    live: "https://atlantisbymittalgroup.com/",
  },
  {
    id: 2,
    title: "Elisa Home Saloon",
    image: "/projects/elisa.png",
    size: "small",
    live: "https://elisahomesalon.com/",
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
    title: "Browns Hotel",
    image: "/projects/browns-hotel.png",
    size: "small",
    live: "https://thebrowns.in/",
  },
  {
    id: 6,
    title: "Infradeals",
    image: "/projects/infradeals.png",
    size: "small",
    live: "https://infradeals.in/",
  },
  {
    id: 7,
    title: "The Jaadu",
    image: "/projects/jaadu.png",
    size: "small",
    live: "https://thejaadu.com/",
  },
  {
    id: 8,
    title: "Pl Mediaforum Digital",
    image: "/projects/mediaforum.png",
    size: "small",
    live: "https://mediaforumdigital.com/",
  },
  {
    id: 9,
    title: "Power Storm",
    image: "/projects/powerstorm.png",
    size: "small",
    live: "https://powerstorm.in/",
  },
  {
    id: 10,
    title: "SG Realty",
    image: "/projects/sg-realty.png",
    size: "small",
    live: "https://sgrealty.in/",
  },
  {
    id: 11,
    title: "MKAT Brandworks",
    image: "/projects/mkat.png",
    size: "small",
    live: "https://mkatbrandworks.com/",
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="relative py-32 px-6 bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      <div className="max-w-6xl mx-auto">
        {/* heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-100">Projects</h2>

          <p className="text-slate-400 mt-4">Selected work & case studies</p>
        </div>

        {/* grid */}
        <div className="grid md:grid-cols-3 auto-rows-[250px] gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative rounded-xl overflow-hidden border border-slate-700 bg-[#020617] transition ${
                project.size === "large" ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-80"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-slate-100 text-xl font-semibold mb-4">
                  {project.title}
                </h3>

                {/* button */}
                {project.live === "#" ? (
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
          ))}
        </div>
      </div>
    </section>
  );
}
