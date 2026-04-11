import { Link, href } from "react-router";

import { AppLogo } from "@/components/app-logo";
import { Heading, Paragraph } from "@/components/ui/text";

export function AppFooter() {
  return (
    <>
      <section className="flex flex-wrap items-end justify-between gap-x-12 gap-y-2 p-6">
        <div>
          <Heading variant="h2">Have a story to tell?</Heading>
          <Heading className="font-serif italic" variant="h2">
            Let&apos;s make it happen.
          </Heading>
        </div>

        <div className="">
          <Link to={href("/contact")}>Get in touch</Link>
        </div>
      </section>

      <footer className="bg-accent text-accent-foreground relative w-full">
        <div className="flex flex-col-reverse justify-between gap-3 p-6 sm:flex-row">
          <div className="flex flex-col gap-1">
            <Paragraph className="text-muted-foreground text-base">Stalk me</Paragraph>
            {socialLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-base">
                {link.name}
              </Link>
            ))}
          </div>

          <AppLogo className="w-full sm:max-w-sm" />
        </div>

        <div className="text-muted-foreground flex flex-wrap justify-between gap-12 p-6">
          <div className="flex flex-col gap-x-8 gap-y-2 sm:flex-row">
            {legalLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-muted-foreground text-base">
                {link.name}
              </Link>
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
