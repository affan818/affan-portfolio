"use client";

const education = [
  {
    title: "Bachelor of Computer Applications (BCCA)",
    subtitle: "RTMNU • 2023",
  },
  {
    title: "Higher Secondary (XII)",
    subtitle: "State Board • 2019",
  },
];
const certifications = [
  {
    title: "Digital IT Course",
    year: "2020",
  },
];
export default function Education() {
  return (
    <section className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-3xl mx-auto">
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-100">Education</h2>
        </div>

        {/* cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="group bg-[#020617] border border-slate-700 rounded-lg p-5 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.08)]"
            >
              <h3 className="text-slate-100 font-medium text-sm">
                {edu.title}
              </h3>

              <p className="text-slate-400 text-xs mt-1">{edu.subtitle}</p>

              {/* subtle bottom line */}
              <div className="mt-3 h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-slate-200 mb-4">
            Certifications
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="group bg-[#020617] border border-slate-700 rounded-lg p-5 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.08)]"
              >
                <h4 className="text-slate-100 text-sm font-medium">
                  {cert.title}
                </h4>

                <p className="text-slate-400 text-xs mt-1">{cert.year}</p>
                {/* subtle bottom line */}
                <div className="mt-3 h-[1px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
