import type { ReactNode } from "react";
import type { ProgramIcon } from "@/data/wedding";

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ProgramGlyph({ name }: { name: ProgramIcon }) {
  switch (name) {
    case "welcome":
      return (
        <Svg>
          <circle cx="9" cy="8" r="2.2" />
          <circle cx="15" cy="8" r="2.2" />
          <path d="M5.5 18c.4-3 2.2-4.6 4.5-4.6S14.1 15 14.5 18" />
          <path d="M12.5 13.6c.7-.4 1.6-.6 2.5-.6 2.3 0 4.1 1.6 4.5 4.6" />
        </Svg>
      );
    case "sparkle":
      return (
        <Svg>
          <path d="M12 3.5l1.1 4.2L17 8.8l-3.9 1.2L12 14l-1.1-4L7 8.8l3.9-1.1z" />
          <path d="M18.5 13.5l.5 1.8 1.8.5-1.8.5-.5 1.8-.5-1.8-1.8-.5 1.8-.5z" />
        </Svg>
      );
    case "music":
      return (
        <Svg>
          <path d="M9 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM20 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
          <path d="M9 18V7l11-2v11" />
        </Svg>
      );
    case "citrus":
      return (
        <Svg>
          <circle cx="12" cy="12" r="7" />
          <path d="M12 5v14M6.2 8.5l11.6 7M6.2 15.5l11.6-7" />
        </Svg>
      );
    case "ceremony":
      return (
        <Svg>
          <path d="M12 20s-6-3.8-6-8.2A3.8 3.8 0 0 1 12 9a3.8 3.8 0 0 1 6 2.8C18 16.2 12 20 12 20z" />
        </Svg>
      );
  }
}
