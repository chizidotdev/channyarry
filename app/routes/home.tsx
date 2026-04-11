import { HeroSection } from "@/components/home-hero-section";
import { WorkSection } from "@/components/home-work-section";
import { Heading } from "@/components/ui/text";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Channyarry" },
    { name: "description", content: "Gender equitable storyteller" },
  ];
}

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="container mt-[50svh] mb-[10svh] md:mt-[200svh]">
        <Heading className="md:w-2/3">
          Gender equitable storyteller of people, their choices, and the quiet reasons behind
          everything.
        </Heading>
      </section>

      <section className="bg-accent text-accent-foreground min-h-svh">
        <WorkSection />
      </section>

      <section className="container h-svh">
        <Heading variant="h2" className="md:w-2/3">
          I am drawn to the quiet details often overlooked—the pauses, the choices made. My stories
          begin softly, but they are never just about what is seen or said. I am fascinated by why
          people do what they do, and how it quietly shapes what comes after.
        </Heading>
      </section>
    </>
  );
}
