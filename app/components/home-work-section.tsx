import { useRef, useState } from "react";

import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

import { Heading, Paragraph } from "@/components/ui/text";

export function WorkSection() {
  const container = useRef<HTMLDivElement>(null);
  const slideCount = workItems.length;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 48px", "end end"],
  });

  return (
    <div ref={container} style={{ height: `${slideCount * 100}dvh` }} className="relative">
      <div className="bg-accent text-accent-foreground sticky top-3 h-dvh overflow-hidden">
        <SliderContent scrollYProgress={scrollYProgress} slideCount={slideCount} />

        {/* Image slides */}
        <div className="slider">
          {workItems.map((item, index) => (
            <Slide
              key={index}
              item={item}
              index={index}
              slideCount={slideCount}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Slide({
  item,
  index,
  slideCount,
  scrollYProgress,
}: {
  item: WorkItem;
  index: number;
  slideCount: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  if (index === 0) {
    // First slide is always visible
    return (
      <div className="slide" id={`slide-${index + 1}`}>
        <img src={item.url} alt={item.title} className="slide-img size-full object-cover" />
      </div>
    );
  }

  // Each subsequent slide occupies a [start, end] window of scroll progress
  const start = (index - 1) / (slideCount - 1);
  const end = index / (slideCount - 1);

  // clip-path: y% goes from 100→0 (reveal from bottom)
  const clipY = useTransform(scrollYProgress, [start, end], [100, 0], {
    ease: (t) => easeInOut(t, 4), // approximates power4.inOut
  });
  const clipPath = useMotionTemplate`polygon(0% ${clipY}%, 100% ${clipY}%, 100% 100%, 0% 100%)`;

  // Image: scale 2→1, top 4em→0
  const scale = useTransform(scrollYProgress, [start, end], [2, 1], {
    ease: (t) => easeInOut(t, 3), // approximates power3.inOut
  });
  const top = useTransform(scrollYProgress, [start, end], ["4em", "0%"], {
    ease: (t) => easeInOut(t, 3),
  });

  return (
    <motion.div className="slide" style={{ clipPath }}>
      <motion.img
        src={item.url}
        alt={item.title}
        className="slide-img absolute size-full object-cover"
        style={{ scale, top }}
      />
    </motion.div>
  );
}

function SliderContent({
  scrollYProgress,
  slideCount,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  slideCount: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const index = Math.min(Math.floor(progress * slideCount), slideCount - 1);
    setActiveIndex(index);
  });

  return (
    <div className="slider-content">
      <AnimatePresence mode="wait">
        {workItems.map((item, i) =>
          i !== activeIndex ? null : (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="layout-grid -mx-3 items-end gap-3 lg:gap-0"
            >
              <motion.div className="role">
                <Heading variant="h3">{item.role}</Heading>
              </motion.div>
              <motion.div className="title">
                <Heading>{item.title}</Heading>
              </motion.div>

              <motion.div className="description">
                <Paragraph>{item.description}</Paragraph>
              </motion.div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}

function easeInOut(t: number, power: number): number {
  return t < 0.5 ? Math.pow(2 * t, power) / 2 : 1 - Math.pow(2 * (1 - t), power) / 2;
}

type WorkItem = {
  role: string;
  title: string;
  description: string;
  url: string;
};

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
