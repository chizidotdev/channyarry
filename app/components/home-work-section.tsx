import { Heading, Paragraph } from "@/components/ui/text";

import { cn } from "@/lib/utils";

export function WorkSection() {
  return (
    <>
      {workItems.map((item, index) => (
        <div key={item.title} className={cn("group relative h-svh", `z-${index + 1}`)}>
          <div className="absolute inset-0 flex-1">
            <img
              src={item.url}
              alt=""
              className="size-full object-cover grayscale-90 saturate-50 transition-all duration-300 group-hover:grayscale-0 group-hover:saturate-100"
            />
          </div>
          <div className="absolute bottom-0 left-0 container max-w-2xl flex-1 space-y-2 pb-[5svh] md:px-[5svh]">
            <Heading variant="h2" className="text-primary font-serif italic">
              {item.role}
            </Heading>
            <Heading variant="h2">{item.title}</Heading>
            <Paragraph>{item.description}</Paragraph>
          </div>
        </div>
      ))}
    </>
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
    role: "Storyteller",
    title: "The Quiet Reasons",
    description:
      "An exploration of the quiet reasons behind human behavior. This collection of stories delves into the underlying motivations and emotions that drive our actions, revealing the often hidden factors that shape our choices and interactions.",
    url: "https://images.unsplash.com/photo-1512025316832-8658f04f8a83?q=80&w=4771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    role: "Filmmaker",
    title: "The Subtle Moments",
    description:
      "A cinematic exploration of the subtle moments that define our lives. This film captures the quiet interactions, fleeting glances, and unspoken emotions that often go unnoticed but hold profound significance in shaping our experiences and relationships.",
    url: "https://images.unsplash.com/photo-1580746353748-e7b3febae39a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
