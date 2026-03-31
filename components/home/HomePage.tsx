"use client";

import TerminalHero from "../hero/TerminalHero";

import SkillsGrid from "../skills/SkillsGrid";
import HackerContact from "../contact/HackerContact";
import AboutDeveloper from "../about/AboutDeveloper";
import ProjectsShowcase from "../projects/ProjectsShowcase";
import Timeline from "../experience/Timeline";
import TerminalContact from "../contact/TerminalContact";
import Education from "../education/Education";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <TerminalHero />

      {/* About page  */}

      <AboutDeveloper />
      {/* Projects */}
      <ProjectsShowcase />

      {/* Skills */}
      <SkillsGrid />

      {/* time line  */}
      <Timeline />

      {/* education  */}
      <Education />
      {/* Contact */}
      <TerminalContact />
    </main>
  );
}
