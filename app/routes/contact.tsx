import { motion } from "motion/react";

import { AppHeader } from "@/components/app-header";
import { Heading } from "@/components/ui/text";

export default function About() {
  return (
    <>
      <AppHeader />

      <section className="mb-[20dvh] grid items-end gap-6 md:grid-cols-[3fr_2fr]">
        <div className="h-full min-h-[50dvh] flex-1 overflow-hidden md:h-svh">
          <motion.img
            src="https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=1740&auto=format&fit=crop"
            alt=""
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "circInOut" }}
            className="size-full object-cover"
          />
        </div>
        <div className="container flex flex-col gap-10 pb-6">
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
    </>
  );
}

const contactLinks = [
  { name: "Instagram", label: "@channyarry", href: "https://www.instagram.com/channyarry" },
  { name: "Email", label: "hello@channyarry.com", href: "mailto:hello@channyarry.com" },
  { name: "Phone", label: "+234 123 456 7890", href: "tel:+1234567890" },
];
