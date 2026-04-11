import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/all";

import { AppLogo } from "./app-logo";

export function HeroSection() {
  function initNavBarAnimations() {
    const navbarBg = document.querySelector(".navbar-background") as HTMLElement;
    const navbarItems = document.querySelector(".navbar-items") as HTMLElement;
    const navbarLinks = document.querySelectorAll(".navbar-links") as NodeListOf<HTMLElement>;
    const navbarLogo = document.querySelector(".navbar-logo") as HTMLElement;

    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) {
      navbarLogo.classList.add("navbar-logo-pinned");
      gsap.set(navbarLogo, { width: 250 });
      gsap.set([navbarBg, navbarItems], { width: "100%", height: "100vh" });
      return;
    }

    const vpWidth = window.innerWidth;
    const vpHeight = window.innerHeight;
    const initialWidth = navbarBg.offsetWidth;
    const initialHeight = navbarBg.offsetHeight;
    const initialLinksWidths = Array.from(navbarLinks).map((link) => link.offsetWidth);

    const state = Flip.getState(navbarLogo);
    navbarLogo.classList.add("navbar-logo-pinned");
    gsap.set(navbarLogo, { width: 250 });
    const flip = Flip.from(state, { duration: 1, ease: "none", paused: true });

    ScrollTrigger.create({
      trigger: ".navbar-backdrop",
      start: "top top",
      end: `+=${vpHeight}px`,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set([navbarBg, navbarItems], {
          width: gsap.utils.interpolate(initialWidth, vpWidth, progress),
          height: gsap.utils.interpolate(initialHeight, vpHeight, progress),
        });

        navbarLinks.forEach((link, index) => {
          gsap.set(link, {
            width: gsap.utils.interpolate(link.scrollWidth, initialLinksWidths[index], progress),
          });
        });

        flip.progress(progress);
      },
    });
  }

  useGSAP(() => {
    window.scrollTo(0, 0);
    initNavBarAnimations();

    let timer: NodeJS.Timeout;
    window.addEventListener("resize", () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

        const navbarBackground = document.querySelector(".navbar-background") as HTMLElement;
        const navbarItems = document.querySelector(".navbar-items") as HTMLElement;
        const navbarLinks = document.querySelectorAll(".navbar-links") as NodeListOf<HTMLElement>;
        const navbarLogo = document.querySelector(".navbar-logo") as HTMLElement;

        gsap.set([navbarBackground, navbarItems, navbarLogo, ...navbarLinks], {
          clearProps: "all",
        });
        navbarLogo.classList.remove("navbar-logo-pinned");

        initNavBarAnimations();
      }, 250);
    });
  });

  return (
    <>
      <div className="navbar-backdrop">
        <div className="navbar-img">
          <img
            src="https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=1740&auto=format&fit=crop"
            alt=""
            className="size-full object-cover"
          />
        </div>
        <div className="navbar-background" />
      </div>

      <div className="navbar-items">
        <div className="navbar-links">
          {navItemsLeft.map(({ name, href }) => (
            <a key={name} href={href}>
              {name}
            </a>
          ))}
        </div>
        <div className="navbar-links">
          {navItemsRight.map(({ name, href }) => (
            <a key={name} href={href}>
              {name}
            </a>
          ))}
        </div>

        <div className="navbar-logo">
          <a href="/">
            {/* <img src="/assets/logo.svg" alt="" className="size-full object-contain invert" /> */}
            <AppLogo className="size-full" />
          </a>
        </div>
      </div>
    </>
  );
}

const navItemsLeft = [
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Studio",
    href: "/studio",
  },
];

const navItemsRight = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
