import { HeroSection } from "@/components/home-hero-section";
import { WorkSection } from "@/components/home-work-section";
import { Heading } from "@/components/ui/text";
import { AnimatedText } from "@/components/ui/text-animated";

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

      <section className="container mt-[40svh] mb-[20svh] md:mt-[200svh]">
        <AnimatedText>
          <Heading className="md:w-2/3">
            Gender equitable storyteller of people, their choices, and the quiet reasons behind
            everything.
          </Heading>
        </AnimatedText>
      </section>

      <section className="bg-accent text-accent-foreground min-h-svh">
        <WorkSection />
      </section>

      <section className="container h-svh">
        <AnimatedText>
          <Heading variant="h2" className="md:w-2/3">
            I am drawn to the quiet details often overlooked—the pauses, the choices made. My
            stories begin softly, but they are never just about what is seen or said. I am
            fascinated by why people do what they do, and how it quietly shapes what comes after.
          </Heading>
        </AnimatedText>
      </section>
    </>
  );
}
