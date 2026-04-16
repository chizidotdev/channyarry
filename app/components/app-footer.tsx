import { href } from "react-router";

import { AppLogo } from "@/components/app-logo";
import { AnimatedLink } from "@/components/ui/link-animated";
import { Heading, Paragraph } from "@/components/ui/text";

export function AppFooter() {
  return (
    <>
      <section className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4 p-6">
        <div>
          <Heading variant="h2">Have a story to tell?</Heading>
          <Heading className="font-serif italic" variant="h2">
            Let&apos;s make it happen.
          </Heading>
        </div>

        <div className="group relative inline-flex items-center gap-1.5">
          <AnimatedLink className="text-lg after:absolute after:inset-0" to={href("/contact")}>
            Get in touch
          </AnimatedLink>
          <svg
            data-v-460a21fd=""
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary pointer-events-none transition-transform group-hover:rotate-45"
          >
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </div>
      </section>

      <div className="pointer-events-none relative">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-primary h-4" style={{ opacity: 0.1 + i * 0.3 }} />
        ))}
      </div>
      <footer className="bg-accent text-accent-foreground relative z-1 w-full">
        <div className="flex flex-col-reverse justify-between gap-3 p-6 sm:flex-row">
          <div className="flex flex-col gap-1">
            <Paragraph className="text-muted-foreground text-base">Stalk me</Paragraph>
            {socialLinks.map((link) => (
              <AnimatedLink key={link.name} to={link.href} className="w-fit text-base">
                {link.name}
              </AnimatedLink>
            ))}
          </div>

          <AppLogo className="w-full sm:max-w-sm" />
        </div>

        <div className="text-muted-foreground flex flex-wrap justify-between gap-12 p-6">
          <div className="flex flex-col gap-x-8 gap-y-2 sm:flex-row">
            {legalLinks.map((link) => (
              <AnimatedLink
                key={link.name}
                to={link.href}
                className="text-muted-foreground w-fit text-base"
              >
                {link.name}
              </AnimatedLink>
            ))}
          </div>

          <div className="flex gap-8">
            <Paragraph className="text-base">
              All rights reserved &copy; {new Date().getFullYear()}.
            </Paragraph>
            <Paragraph className="text-base">
              Website by&nbsp;
              <a href="https://chizi.dev" target="_blank" className="text-accent-foreground">
                chizidotdev
              </a>
            </Paragraph>
          </div>
        </div>
      </footer>
    </>
  );
}

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/channyarry/" },
  { name: "X (Twitter)", href: "https://twitter.com/channyarry" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/legal/privacy" },
  { name: "Terms of Service", href: "/legal/terms" },
];
