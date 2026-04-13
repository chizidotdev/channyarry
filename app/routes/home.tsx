import { HeroSection } from "@/components/home-hero-section";
import { WorkSection } from "@/components/home-work-section";
import { Heading } from "@/components/ui/text";
import { AnimatedText } from "@/components/ui/text-animated";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="container mt-[35dvh] mb-[10svh] space-y-6 md:mt-[200svh] md:mb-[20svh]">
        <AnimatedText>
          <Heading className="md:w-2/3">
            Gender equitable storyteller of people, their choices, and the quiet reasons behind
            everything.
          </Heading>
        </AnimatedText>
        <div className="md:hidden">
          <video
            src="https://www.pexels.com/download/video/30031456"
            poster="https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=1740&auto=format&fit=crop"
            className="size-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="https://www.pexels.com/download/video/30031456" type="video/mp4" />
          </video>
        </div>
      </section>

      <WorkSection />

      <section className="container flex h-dvh items-center">
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
