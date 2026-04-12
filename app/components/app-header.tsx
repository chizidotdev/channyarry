import { Link, href } from "react-router";

import { AppLogo } from "./app-logo";
import { AnimatedLink } from "./ui/link-animated";

export function AppHeader() {
  return (
    <header className="text-background fixed inset-x-0 top-0 z-50 flex w-full items-center justify-between px-4 py-6 mix-blend-difference md:px-0">
      <div className="flex w-full max-w-90 flex-col justify-between px-0 md:flex-row md:pr-20 md:pl-10">
        {navItemsLeft.map(({ name, href }) => (
          <AnimatedLink key={name} to={href}>
            {name}
          </AnimatedLink>
        ))}
      </div>

      <div className="">
        <Link to={href("/")} reloadDocument>
          <AppLogo className="w-50" />
        </Link>
      </div>

      <div className="flex w-full max-w-90 flex-col items-end justify-between px-0 md:flex-row md:items-start md:pr-10 md:pl-20">
        {navItemsRight.map(({ name, href }) => (
          <AnimatedLink key={name} to={href}>
            {name}
          </AnimatedLink>
        ))}
      </div>
    </header>
  );
}

export const navItemsLeft = [
  {
    name: "Work",
    href: href("/"),
  },
  {
    name: "Studio",
    href: "#",
  },
];

export const navItemsRight = [
  {
    name: "About",
    href: href("/about"),
  },
  {
    name: "Contact",
    href: href("/contact"),
  },
];
