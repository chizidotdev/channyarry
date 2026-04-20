import { Link, href } from "react-router";

import { useScroll, useTransform } from "motion/react";

import { AppLogo } from "./app-logo";
import { AnimatedLink } from "./ui/link-animated";

export function AppHeader() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "start -20%"],
    trackContentSize: true,
  });
  const width = useTransform(scrollYProgress, [0, 1], ["50vw", "7vw"]);

  return (
    <header className="text-background fixed inset-x-0 top-0 z-50 py-6 mix-blend-difference md:px-0">
      <div className="layout-grid w-full">
        <Link to={href("/")} className="layout-grid-item col-span-6 lg:col-span-3">
          <AppLogo className="min-w-40" style={{ width }} />
        </Link>

        <button className="layout-grid-item lg:hidden">Menu</button>

        {navItemsRight.map(({ name, href }) => (
          <AnimatedLink key={name} to={href} className="layout-grid-item hidden size-fit lg:flex">
            {name}
          </AnimatedLink>
        ))}
      </div>
    </header>
  );
}

export const navItemsRight = [
  {
    name: "Work",
    href: href("/"),
  },
  {
    name: "About",
    href: href("/about"),
  },
  {
    name: "Contact",
    href: href("/contact"),
  },
];
