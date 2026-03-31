"use client";

import Image from "next/image";

const projects = [
  {
    title: "CargoJet",
    image: "/projects/cargojet.png",
    size: "large",
    live: "#",
  },
  {
    title: "Elisa Home Saloon",
    image: "/projects/elisa.png",
    size: "small",
    live: "https://elisahomesalon.com/",
  },
  {
    title: "Atlantis by Mittal Group",
    image: "/projects/atlantis.png",
    size: "small",
    live: "https://luminist.in/",
  },
  {
    title: "GutSake",
    image: "/projects/gutsake.png",
    size: "large",
    live: "https://www.forgutsake.in/",
  },
  {
    title: "Browns Hotel",
    image: "/projects/browns-hotel.png",
    size: "small",
    live: "https://thebrowns.in/",
  },
  {
    title: "Infradeals",
    image: "/projects/infradeals.png",
    size: "small",
    live: "https://infradeals.in/",
  },
  {
    title: "The Jaadu",
    image: "/projects/jaadu.png",
    size: "small",
    live: "https://thejaadu.com/",
  },
  {
    title: "Pl Mediaforum Digital",
    image: "/projects/mediaforum.png",
    size: "small",
    live: "https://mediaforumdigital.com/",
  },
  {
    title: "Power Storm",
    image: "/projects/powerstorm.png",
    size: "small",
    live: "https://powerstorm.in/",
  },
  {
    title: "SG Realty",
    image: "/projects/sg-realty.png",
    size: "small",
    live: "https://sgrealty.in/",
  },
  {
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
          {projects.map((project, index) => (
            <div
              key={index}
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
                <a
                  href={project.live}
                  target="_blank"
                  className="inline-flex items-center gap-2 w-fit px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 hover:bg-blue-400 text-white transition"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
