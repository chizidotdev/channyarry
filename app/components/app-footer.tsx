import { href } from "react-router";

import { AppLogo } from "@/components/app-logo";
import { AnimatedLink } from "@/components/ui/link-animated";
import { Heading, Paragraph } from "@/components/ui/text";

export function AppFooter() {
  return (
    <>
      <section className="layout-grid items-end gap-y-4 py-6">
        <div className="layout-grid-item col-span-full lg:col-span-2">
          <Heading variant="h2">Have a story to tell?</Heading>
          <Heading className="font-serif italic" variant="h2">
            Let&apos;s make it happen.
          </Heading>
        </div>

        <div className="layout-grid-item col-span-full lg:col-span-2 lg:col-start-6">
          <div className="group relative inline-flex w-fit items-center gap-1.5">
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
        </div>
      </section>

      <div className="pointer-events-none relative">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-primary h-4" style={{ opacity: 0.1 + i * 0.3 }} />
        ))}
      </div>

      <footer className="bg-accent text-accent-foreground relative z-1 w-full pb-6">
        <div className="layout-grid gap-y-3 py-6">
          <div className="layout-grid-item order-1 col-span-full flex flex-col gap-1 lg:order-0 lg:col-span-2">
            <Paragraph className="text-muted-foreground text-base">Stalk me</Paragraph>
            {socialLinks.map((link) => (
              <AnimatedLink key={link.name} to={link.href} className="w-fit text-base">
                {link.name}
              </AnimatedLink>
            ))}
          </div>

          <div className="layout-grid-item order-0 col-span-full lg:col-span-2 lg:col-start-6">
            <AppLogo className="w-full sm:max-w-sm" />
          </div>
        </div>

        <div className="text-muted-foreground layout-grid gap-y-12 py-6">
          <div className="layout-grid-item col-span-full flex flex-col gap-2 gap-x-8 sm:flex-row lg:col-span-2">
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

          <div className="layout-grid-item col-span-full flex flex-wrap justify-end gap-2 lg:col-start-5">
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
