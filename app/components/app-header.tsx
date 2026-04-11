import { Link } from "react-router";

import { AppLogo } from "./app-logo";

export function AppHeader() {
  return (
    <header className="text-background fixed inset-x-0 top-0 z-50 flex w-full items-start justify-between py-6 mix-blend-difference">
      <div className="flex w-full max-w-90 justify-between pr-20 pl-10">
        {navItemsLeft.map(({ name, href }) => (
          <a key={name} href={href}>
            {name}
          </a>
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link to="/">
          <AppLogo className="w-40" />
        </Link>
      </div>

      <div className="flex w-full max-w-90 justify-between pr-10 pl-20">
        {navItemsRight.map(({ name, href }) => (
          <a key={name} href={href}>
            {name}
          </a>
        ))}
      </div>
    </header>
  );
}

export const navItemsLeft = [
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Studio",
    href: "/studio",
  },
];

export const navItemsRight = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
