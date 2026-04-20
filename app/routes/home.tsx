import { useRef } from "react";

import { motion, useScroll, useTransform } from "motion/react";

import { AppHeader } from "@/components/app-header";
import { WorkSection } from "@/components/home-work-section";
import { Label } from "@/components/ui/label";
import { Heading } from "@/components/ui/text";

export default function Home() {
  return (
    <>
      <AppHeader />
      <Hero />

      <section className="layout-grid my-[25svh] gap-6">
        <Label className="layout-grid-item col-span-full md:col-span-1">About</Label>
        <Heading
          variant="h2"
          className="layout-grid-item col-span-full md:col-start-2 md:max-w-2/3"
        >
          Hi, I'm Channy. Gender equitable storyteller of people, their choices, and the quiet
          reasons behind everything.
          <br />
          <br />I am drawn to the quiet details often overlooked; the pauses, the choices made. My
          stories begin softly, but they are never just about what is seen or said. I am fascinated
          by why people do what they do, and how it quietly shapes what comes after.
        </Heading>
      </section>

      <Work />

      <section className="container flex h-dvh items-center"></section>
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
    <section ref={container} className="relative">
      <div className="mt-2 ml-2 h-[calc(100dvh-1rem)] w-[calc(100vw-1rem)] overflow-hidden rounded">
        <motion.div
          transition={{ delay: 0.3, ease: "circInOut" }}
          style={{ y }}
          className="relative flex h-full items-center justify-center"
        >
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

      <div className="layout-grid text-background absolute inset-x-0 bottom-[5vh]">
        <Heading className="col-span-7 lg:col-start-3 lg:w-2/3">
          Gender equitable storyteller of people, their choices, and the quiet reasons behind
          everything.
        </Heading>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="bg-accent text-accent-foreground space-y-6 py-[20svh]">
      <hgroup className="layout-grid gap-6">
        <Label className="layout-grid-item col-span-full md:col-span-3">Work</Label>
        <Heading className="layout-grid-item col-span-full md:col-start-4">
          Selected Stories
        </Heading>
      </hgroup>

      <div className="layout-grid-item col-span-full">
        <WorkSection />
      </div>
    </section>
  );
}

export const workItems = [
  {
    role: "Producer",
    title: "The Quiet Details",
    description:
      "A collection of stories that explore the subtle, often overlooked moments that shape our lives.",
    url: "https://images.unsplash.com/photo-1619473667737-b3abeb860aa1?q=80&w=4484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    role: "Writer",
    title: "The Unseen Choices",
    description:
      "A series of narratives that delve into the unseen choices people make in their daily lives.",
    url: "https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?q=80&w=2792&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    role: "Filmmaker",
    title: "The Subtle Moments",
    description: "A cinematic exploration of the subtle moments that define our lives.",
    url: "https://images.unsplash.com/photo-1580746353748-e7b3febae39a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
