import { useRef } from "react";
import { Link } from "react-router";

import gsap from "gsap";

export function AnimatedLink(props: React.ComponentProps<typeof Link>) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  function scramble() {
    if (!linkRef.current || gsap.isTweening(linkRef.current)) return;

    gsap.to(linkRef.current, {
      duration: 0.6,
      scrambleText: {
        text: linkRef.current.textContent || "",
        chars: "arry",
        revealDelay: 0.1,
      },
      // ease: "power2.inOut",
    });
  }

  function slideInOut() {
    if (!linkRef.current) return;

    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0.2, transform: "translateY(-35%)" },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  return (
    <Link
      viewTransition
      onTransitionStart={slideInOut}
      reloadDocument
      onMouseEnter={scramble}
      ref={linkRef}
      {...props}
    />
  );
}
