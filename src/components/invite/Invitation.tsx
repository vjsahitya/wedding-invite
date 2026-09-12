import { useEffect, useRef, useState, type ReactNode } from "react";
import { couple, program, story } from "@/data/wedding";
import { ProgramGlyph } from "./ProgramIcons";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => el.classList.add("is-in"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.16 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  );
}

function GaneshMark() {
  return (
    <div className="ganesh-mark" aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="32" cy="32" r="21" />
        <path d="M24 28c2-8 16-8 18 0 1 6-4 10-9 14-5-4-10-8-9-14z" />
        <path d="M32 18v6M22 34h20" />
      </svg>
    </div>
  );
}

function PhotoGallery() {
  return (
    <div className="gallery" aria-label="A few photos from our journey">
      <div className="gallery-frame">
        <div className="gallery-fallback is-on">Tina & Sahitya</div>
      </div>
    </div>
  );
}

export function Invitation() {
  return (
    <article className="invite-scroll">
      <header className="hero">
        <img
          className="hero-art"
          src="/images/garden-hero.jpg"
          alt="Painted garden of palms, flowers and terracotta urns"
        />
        <div className="hero-veil" />
        <div className="hero-copy">
          <GaneshMark />
          <p className="hero-kicker">{couple.kicker}</p>
          <h1 className="hero-names">
            {couple.one} <span className="hero-amp">&</span> {couple.two}
          </h1>
          <p className="hero-date">{couple.dateLine}</p>
          <p className="hero-place">{couple.venue}</p>
        </div>
      </header>

      <section className="chapter" id="story">
        <Reveal>
          <span className="kicker">Our Journey</span>
          <h2 className="script-title">Our Love Story</h2>
          <span className="heart-mark" aria-hidden="true" />
        </Reveal>
        <div className="timeline">
          {story.map((beat, i) => (
            <Reveal key={beat.title} delay={i * 80}>
              <div className="beat">
                <span className="beat-year">{beat.year}</span>
                <h3 className="beat-title">{beat.title}</h3>
                <p className="beat-body">{beat.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <PhotoGallery />
        </Reveal>
      </section>

      <section className="chapter chapter-tight" id="program">
        <Reveal>
          <img
            className="doves"
            src="/images/doves.jpg"
            alt="Two doves on a flowering branch"
          />
        </Reveal>
        <Reveal delay={80}>
          <h2 className="script-title">Day Program</h2>
          <p className="lede" style={{ marginTop: 8 }}>
            What we have prepared for you
          </p>
        </Reveal>
        <div className="program-list">
          {program.map((day) => (
            <div key={day.date}>
              <p className="day-label">
                {day.label} · {day.date}
              </p>
              {day.items.map((item) => (
                <Reveal key={item.title}>
                  <div className="program-item">
                    <div className="program-icon">
                      <ProgramGlyph name={item.icon} />
                    </div>
                    <div>
                      <span className="program-when">{item.when}</span>
                      <h3 className="program-title">{item.title}</h3>
                      <p className="program-detail">{item.detail}</p>
                      <p className="program-attire">Attire · {item.attire}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="chapter" id="gifts">
        <Reveal>
          <h2 className="script-title">Gifts</h2>
          <p className="gifts-copy">
            Your presence is what matters most to us. If you wish to give us a
            gift, you can do so in the way that suits you best — and peek at
            what we will be wearing, chapter by chapter.
          </p>
          <a
            className="rose-btn"
            href={couple.plannerUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Wardrobe planner
          </a>
        </Reveal>
      </section>

      <section className="chapter chapter-tight" id="details">
        <Reveal>
          <span className="kicker">Join us</span>
          <h2 className="script-title">Event Details</h2>
          <p className="gifts-copy">
            We cannot wait to celebrate this special day with you. Here is
            everything you need to know.
          </p>
          <div className="meta-card">
            <p className="meta-kicker">The venue</p>
            <p className="meta-title">{couple.venue}</p>
            <p className="meta-line">{couple.dateLine}</p>
            <a
              className="map-link"
              href={couple.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View venue on Google Maps
            </a>
          </div>
          <p className="closing-names">
            {couple.one} <span className="hero-amp">&</span> {couple.two}
          </p>
        </Reveal>
      </section>

      <footer className="site-foot">
        {couple.one} & {couple.two} · {couple.dateLine} · {couple.place}
      </footer>
    </article>
  );
}
