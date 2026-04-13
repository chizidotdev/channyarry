import { AppHeader } from "@/components/app-header";
import { Heading, Paragraph } from "@/components/ui/text";

export default function About() {
  return (
    <>
      <AppHeader />

      <section className="mb-[20dvh] grid items-end gap-6 md:grid-cols-2">
        <div className="h-full min-h-[50dvh] flex-1 md:h-svh">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=922&auto=format&fit=crop"
            alt=""
            className="size-full object-cover"
          />
        </div>
        <div className="container flex flex-col gap-3 pb-6">
          <Heading variant="h2">
            Channy is a storyteller who finds magic in the overlooked moments of life. A writer and
            emerging filmmaker, she explores love, desire, and human complexity with honesty and
            boldness. Her work blends warmth, subtle humor, and a hint of mischief, inviting readers
            and viewers into worlds that feel intimate yet expansive.
            <br />
            <br />
            Always curious, Channy is driven by a fascination with why people do what they do, and
            how those choices ripple through the stories we tell.
          </Heading>
        </div>
      </section>

      <section className="mb-[10dvh] grid gap-10 px-4 md:grid-cols-[3fr_2fr]">
        <div>
          <Heading className="max-w-3xl">
            Bringing Creative Vision to Life Through Cinematic Storytelling.
          </Heading>
        </div>

        <div className="grid gap-10 py-4 md:grid-cols-2">
          {personas.map((persona) => (
            <div key={persona.name} className="space-y-3">
              <Heading variant="h2">{persona.name}</Heading>
              <ul>
                {persona.services.map((service) => (
                  <Paragraph className="text-xl md:text-2xl" key={service}>
                    {service}
                  </Paragraph>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4">
        {personas.map((persona) => (
          <div key={persona.name} className="relative h-[50vw] md:h-[40dvh]">
            <img src={persona.image} alt="" className="size-full object-cover grayscale-50" />
          </div>
        ))}
      </section>
    </>
  );
}

const personas = [
  {
    name: "Writer",
    services: [
      "Screenplays",
      "Short stories",
      "Contemporary romance",
      "Character development",
      "Narrative structure",
    ],
    image:
      "https://images.unsplash.com/photo-1580746353748-e7b3febae39a?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Director",
    services: [
      "Vision development",
      "Scene blocking",
      "Actor direction",
      "On-set leadership",
      "Creative oversight",
    ],
    image:
      "https://images.unsplash.com/photo-1619473667737-b3abeb860aa1?q=80&w=4484&auto=format&fit=crop",
  },
  {
    name: "Producer",
    services: [
      "Project management",
      "Budgeting",
      "Scheduling",
      "Production logistics",
      "Post-production supervision",
    ],
    image:
      "https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?q=80&w=2792&auto=format&fit=crop",
  },
  {
    name: "Casting Director",
    services: [
      "Talent scouting",
      "Auditions",
      "Role matching",
      "Ensemble Building",
      "Collaborative casting decisions",
    ],
    image:
      "https://images.unsplash.com/photo-1512025316832-8658f04f8a83?q=80&w=4771&auto=format&fit=crop",
  },
];
