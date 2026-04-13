import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { Paragraph } from "@/components/ui/text";

export function WorkSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const slides = gsap.utils.toArray(".slide") as HTMLElement[];

      // Create a master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${slides.length * 100}%`,
          scrub: true, // 1, // Smoothly link animation to scroll
          pin: true,
          // snap: 1 / (slides.length - 1), // Snap to each slide
          anticipatePin: 1,
        },
      });

      // Initial setup for slides
      slides.forEach((slide, i) => {
        if (i === 0) return; // Skip the first slide, visible from the start

        const image = slide.querySelector(".slide-img");

        // Initial state: hide slides except the first one
        gsap.set(slide, { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" });
        gsap.set(image, { scale: 2, top: "4em" });

        tl.to(image, {
          scale: 1,
          top: "0%",
          duration: 1,
          ease: "power3.inOut",
        })
          .to(
            slide,
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1,
              ease: "power4.inOut",
            },
            "<"
          )
          .to(
            ".prefix, .names, .years",
            {
              y: `-=28px`,
              ease: "power4.inOut",
              duration: 1,
            },
            "<"
          );
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="bg-accent text-accent-foreground">
      <div className="slider-content">
        <div className="slide-number">
          <div className="prefix">
            {workItems.map((_, index) => (
              <Paragraph key={index}>{index + 1}</Paragraph>
            ))}
          </div>
          <Paragraph className="postfix">
            <span>/</span>
            <span>{workItems.length}</span>
          </Paragraph>
        </div>

        <div className="slide-name">
          <div className="names">
            {workItems.map((item, index) => (
              <Paragraph key={index}>{item.title}</Paragraph>
            ))}
          </div>
        </div>

        <div className="slide-year">
          <div className="years">
            {workItems.map((item, index) => (
              <Paragraph key={index}>{item.role}</Paragraph>
            ))}
          </div>
        </div>
      </div>

      <div className="slider">
        {workItems.map((item, index) => (
          <div key={index} id={`slide-${index + 1}`} className="slide">
            <img src={item.url} alt={item.title} className="slide-img size-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

const workItems = [
  {
    role: "Producer",
    title: "The Quiet Details",
    description:
      "A collection of stories that explore the subtle, often overlooked moments that shape our lives. From the pauses in conversation to the choices we make, these stories delve into the quiet details that reveal the complexity of human behavior.",
    url: "https://images.unsplash.com/photo-1619473667737-b3abeb860aa1?q=80&w=4484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    role: "Writer",
    title: "The Unseen Choices",
    description:
      "A series of narratives that delve into the unseen choices people make in their daily lives. These stories explore the motivations and consequences of decisions that often go unnoticed, shedding light on the intricate web of factors that influence our actions.",
    url: "https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?q=80&w=2792&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    role: "Filmmaker",
    title: "The Subtle Moments",
    description:
      "A cinematic exploration of the subtle moments that define our lives. This film captures the quiet interactions, fleeting glances, and unspoken emotions that often go unnoticed but hold profound significance in shaping our experiences and relationships.",
    url: "https://images.unsplash.com/photo-1580746353748-e7b3febae39a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
