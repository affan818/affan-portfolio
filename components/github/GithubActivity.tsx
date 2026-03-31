"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubActivity() {
  return (
    <section className="py-32 px-6 bg-[#0f172a]">
      <div className="max-w-5xl mx-auto">
        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-100">GitHub Activity</h2>

          <p className="text-slate-400 mt-3">
            My coding activity over the past year
          </p>
        </div>

        {/* graph */}
        <div className="bg-[#020617] border border-slate-700 rounded-xl p-6 flex justify-center overflow-x-auto">
          <GitHubCalendar
            username="your-github-username"
            blockSize={14}
            blockMargin={4}
            fontSize={14}
          />
        </div>
      </div>
    </section>
  );
}
