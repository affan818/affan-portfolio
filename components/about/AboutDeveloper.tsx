"use client";

import Image from "next/image";

export default function AboutDeveloper() {
  return (
    <section className="relative py-32 px-6 bg-[#0f172a] overflow-hidden">
      {/* grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white">About Me</h2>

          <p className="text-slate-400 mt-4">A quick introduction about me</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* 🔥 IMAGE SECTION */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72">
              {/* glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-slate-800 blur-2xl opacity-30"></div>

              {/* border */}
              <div className="relative w-full h-full rounded-full border border-slate-700 p-[4px] bg-[#020617]">
                {/* image */}
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/affan.jpeg"
                    alt="Frontend developer nagpur"
                    title="web developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* badge */}
              {/* <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs bg-blue-500 text-white rounded-full shadow-md">
                Frontend Developer
              </div> */}
            </div>
          </div>

          {/* TEXT SECTION */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Hi, I'm Affan Ahmad
            </h3>

            <p className="text-slate-400 leading-relaxed">
              I'm a passionate Frontend Developer based in Nagpur, India
              specializing in creating high-performance web experiences using{" "}
              <span className="text-blue-400">
                React.js, Next.js, Tailwind CSS, and GSAP
              </span>
              .
              <br />
              <br />
              I transform UI/UX designs into pixel-perfect, responsive
              applications that are fast, smooth, and user-friendly across all
              devices.
              <br />
              <br />
              From e-commerce platforms to creative landing pages, I build
              scalable and SEO-optimized solutions that focus on performance,
              usability, and conversion.
              <br />
              <br />
              Web Developer Based in Nagpur, India - available for freelance and
              full-time opportunities.
            </p>

            {/* info cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 border border-slate-700 rounded-lg hover:border-blue-400 transition">
                <p className="text-slate-400 text-sm">Location</p>
                <p className="text-white">Nagpur, India</p>
              </div>

              <div className="p-4 border border-slate-700 rounded-lg hover:border-blue-400 transition">
                <p className="text-slate-400 text-sm">Availability</p>
                <p className="text-white">Open for projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { number: "3+", label: "Years Experience" },
            { number: "15+", label: "Projects Built" },
            { number: "12+", label: "Technologies" },
            { number: "101%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#020617] border border-slate-700 p-6 rounded-xl text-center hover:border-blue-400 transition"
            >
              <h4 className="text-3xl font-bold text-blue-400">
                {stat.number}
              </h4>

              <p className="text-slate-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
