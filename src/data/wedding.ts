export const couple = {
  one: "Tina",
  two: "Sahitya",
  kicker: "We're getting married",
  dateLine: "26 — 27 January 2027",
  place: "Mandu",
  venue: "JMD Resort, Mandu",
  mapsUrl: "https://maps.app.goo.gl/cfcyjEuMEsYsoM736",
  plannerUrl: "Planner Sahitya.pdf",
};

export const ganeshCandidates = [
  "Ganesh%20Logo.png",
  "Ganesh Logo.png",
  "GaneshLogo.png",
  "ganesh-logo.png",
];

export const galleryFiles = [
  "Photo0.jpg",
  "Photo1.HEIC",
  "Photo2.HEIC",
  "Photo3.JPG",
  "Photo4.jpg",
];

export type StoryBeat = {
  year: string;
  title: string;
  body: string;
};

export const story: StoryBeat[] = [
  {
    year: "Hyderabad",
    title: "How We Met",
    body: "We met during our first job in Hyderabad. What started as two people working in the same city slowly became a six-year story.",
  },
  {
    year: "2020",
    title: "Across Distance",
    body: "Then COVID happened. For two years, we learnt how to love across distance, through screens, calls, waiting and countless little moments.",
  },
  {
    year: "The Hills",
    title: "The Proposal",
    body: "Sahitya proposed while we were trekking to Tungnath, surrounded by the hills, with our closest people secretly involved in the surprise. The proposal happened close to Shiva — a moment that felt incredibly meant to be.",
  },
  {
    year: "2027",
    title: "Our Forever",
    body: "Now, after six years together, we're beginning our next chapter. Join us as we celebrate love, family and the beginning of our forever in Mandu.",
  },
];

export type ProgramIcon =
  | "welcome"
  | "sparkle"
  | "music"
  | "citrus"
  | "ceremony";

export type ProgramItem = {
  when: string;
  title: string;
  detail: string;
  attire: string;
  icon: ProgramIcon;
};

export type ProgramDay = {
  label: string;
  date: string;
  items: ProgramItem[];
};

export const program: ProgramDay[] = [
  {
    label: "Day One",
    date: "26 January 2027",
    items: [
      {
        when: "Afternoon",
        title: "Welcome Lunch",
        detail: "Tina's Oli · Sahitya's Tilak",
        attire: "Indian Casual",
        icon: "welcome",
      },
      {
        when: "Sundown",
        title: "Van Cleef's Fairytale",
        detail: "Sundowner Engagement",
        attire: "Western Pastels",
        icon: "sparkle",
      },
      {
        when: "Night",
        title: "Cartier's Love Affair",
        detail: "Sangeet · Crazy After-Party",
        attire: "Anything Bling",
        icon: "music",
      },
    ],
  },
  {
    label: "Day Two",
    date: "27 January 2027",
    items: [
      {
        when: "Morning",
        title: "Hermès: Sunny Citrus",
        detail: "Haldi Celebration",
        attire: "Anything Purple",
        icon: "citrus",
      },
      {
        when: "Midnight",
        title: "The Sabyasachi Varmala",
        detail: "Varmala · Midnight Pheras",
        attire: "Royal Indian Wear",
        icon: "ceremony",
      },
    ],
  },
];
