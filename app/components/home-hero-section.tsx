import { useRef } from "react";
import { Link } from "react-router";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/all";

import { navItemsLeft, navItemsRight } from "./app-header";
import { AppLogo } from "./app-logo";
import { AnimatedLink } from "./ui/link-animated";

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  function initNavBarAnimations() {
    const bg = bgRef.current;
    const items = itemsRef.current;
    const navbarLinks = document.querySelectorAll(".navbar-links") as NodeListOf<HTMLElement>;
    const logo = logoRef.current;

    if (!bg || !items || !logo) return;

    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) {
      logo.classList.add("navbar-logo-pinned");
      gsap.set(logo, { width: 250 });
      gsap.set([bg, items], { width: "100%", height: "100vh" });
      return;
    }

    const vpWidth = window.innerWidth;
    const vpHeight = window.innerHeight;
    const initialWidth = bg.offsetWidth;
    const initialHeight = bg.offsetHeight;
    const initialLinksWidths = Array.from(navbarLinks).map((link) => link.offsetWidth);

    const state = Flip.getState(logo);
    logo.classList.add("navbar-logo-pinned");
    gsap.set(logo, { width: 250 });
    const flip = Flip.from(state, { duration: 1, ease: "none", paused: true });

    ScrollTrigger.create({
      trigger: ".navbar-backdrop",
      start: "top top",
      end: `+=${vpHeight}px`,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set([bg, items], {
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

  useGSAP(
    () => {
      window.scrollTo(0, 0);
      initNavBarAnimations();

      let timer: NodeJS.Timeout;
      window.addEventListener("resize", () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

          const bg = bgRef.current;
          const items = itemsRef.current;
          const navbarLinks = document.querySelectorAll(".navbar-links") as NodeListOf<HTMLElement>;
          const logo = logoRef.current;

          if (!bg || !items || !logo) return;

          gsap.set([bg, items, logo, ...navbarLinks], {
            clearProps: "all",
          });
          logo.classList.remove("navbar-logo-pinned");

          initNavBarAnimations();
        }, 250);
      });
    },
    { dependencies: [bgRef, itemsRef, logoRef] }
  );

  return (
    <>
      <div className="navbar-backdrop">
        <div className="navbar-img">
          <video
            src="https://www.pexels.com/download/video/30031456"
            poster="https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=1740&auto=format&fit=crop"
            className="size-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="https://www.pexels.com/download/video/30031456" type="video/mp4" />
          </video>
        </div>
        <div ref={bgRef} className="navbar-background" />
      </div>

      <div ref={itemsRef} className="navbar-items">
        <div className="navbar-links">
          {navItemsLeft.map(({ name, href }) => (
            <AnimatedLink key={name} to={href}>
              {name}
            </AnimatedLink>
          ))}
        </div>
        <div className="navbar-links">
          {navItemsRight.map(({ name, href }) => (
            <AnimatedLink key={name} to={href}>
              {name}
            </AnimatedLink>
          ))}
        </div>

        <div ref={logoRef} className="navbar-logo">
          <Link to="/" reloadDocument>
            {/* <img src="/assets/logo.svg" alt="" className="size-full object-contain invert" /> */}
            <AppLogo className="size-full" />
          </Link>
        </div>
      </div>
    </>
  );
}
