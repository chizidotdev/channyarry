import { Heading } from "@/components/ui/text";

export default function About() {
  return (
    <section className="mb-[20svh] flex flex-col gap-6 md:flex-row md:items-end">
      <div className="aspect-9/16 h-[70svh] md:w-2/3">
        <img
          src="https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=1740&auto=format&fit=crop"
          alt=""
          className="size-full object-cover"
        />
      </div>
      <div className="container flex flex-col gap-3">
        <Heading variant="h2">Open for collaborations.</Heading>
        <div className="flex flex-col gap-3">
          {contactLinks.map((link) => (
            <div className="flex flex-col font-semibold" key={link.name}>
              <Heading variant="h3">{link.name}:</Heading>
              <a href={link.href} className="w-fit">
                <Heading variant="h3">{link.label}</Heading>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const contactLinks = [
  { name: "Instagram", label: "@channyarry", href: "https://www.instagram.com/channyarry" },
  { name: "Email", label: "hello@channyarry.com", href: "mailto:hello@channyarry.com" },
  { name: "Phone", label: "+234 123 456 7890", href: "tel:+1234567890" },
];
