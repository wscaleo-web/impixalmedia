"use client";

import * as React from "react";
import { GlassPrismHero, type GlassPrismHeroHandle } from "@/components/ui/glass-prism-hero";

/* Geist for the headline, loaded once for the demo */
function useGeist() {
  React.useEffect(() => {
    const id = "geist-font";
    if (document.getElementById(id)) return;
    const l = document.createElement("link");
    l.id = id;
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap";
    document.head.appendChild(l);
  }, []);
}

const pill =
  "inline-flex h-11 items-center rounded-full px-5 text-[15px] font-medium tracking-[-0.02em] outline-none transition-transform active:scale-[.97] focus-visible:ring-2 focus-visible:ring-ring";

export default function GlassPrismHeroDemo() {
  useGeist();
  const hero = React.useRef<GlassPrismHeroHandle>(null);

  return (
    <div className="w-full bg-background text-foreground">
      <GlassPrismHero
        ref={hero}
        headline="Design in a new light."
        eyebrow="Product design studio"
        description="Interfaces with Apple-level detail, from the first sketch to shipped code."
        actions={
          <>
            <a href="#work" className={`${pill} bg-foreground text-background`}>
              View work
            </a>
            <a href="#contact" className={`${pill} border border-border bg-muted/60 text-foreground backdrop-blur-md`}>
              Book a call
            </a>
          </>
        }
      />

      <section id="work" className="grid min-h-[60vh] place-items-center px-5 text-center text-[15px] tracking-[-0.02em] text-muted-foreground">
        Scroll back up and the light comes back.
      </section>

      <button
        type="button"
        onClick={() => hero.current?.replay()}
        className="fixed bottom-4 right-4 z-10 h-8 rounded-full bg-muted px-3.5 text-[13px] font-medium tracking-[-0.01em] text-foreground outline-none backdrop-blur-md focus-visible:ring-2 focus-visible:ring-ring"
        style={{ fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif" }}
      >
        Replay
      </button>
    </div>
  );
}

