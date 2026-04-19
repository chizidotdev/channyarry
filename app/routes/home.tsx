import { useRef } from "react";

import { motion, useScroll, useTransform } from "motion/react";

import { AppHeader } from "@/components/app-header";
import { WorkSection } from "@/components/home-work-section";
import { Heading } from "@/components/ui/text";

export default function Home() {
  return (
    <>
      <AppHeader />
      <Hero />

      <section className="container my-[25svh] space-y-6">
        <Heading className="md:w-2/3">
          Gender equitable storyteller of people, their choices, and the quiet reasons behind
          everything.
        </Heading>
      </section>

      <WorkSection />

      <section className="container flex h-dvh items-center">
        <Heading variant="h2" className="md:w-2/3">
          I am drawn to the quiet details often overlooked—the pauses, the choices made. My stories
          begin softly, but they are never just about what is seen or said. I am fascinated by why
          people do what they do, and how it quietly shapes what comes after.
        </Heading>
      </section>
    </>
  );
}

function Hero() {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "300dvh"]);

  return (
    <section ref={container}>
      <div className="h-dvh overflow-hidden">
        <motion.div style={{ y }} className="relative flex h-full items-center justify-center">
          <motion.video
            src="https://www.pexels.com/download/video/30031456"
            poster="https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=1740&auto=format&fit=crop"
            className="size-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="https://www.pexels.com/download/video/30031456" type="video/mp4" />
          </motion.video>
        </motion.div>
      </div>
    </section>
  );
}
