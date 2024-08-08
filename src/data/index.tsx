// components
import { BioCard } from "@/components/sections/showcase/cards/bioCard";
import { JourneyCard } from "@/components/sections/showcase/cards/journeyCard";

import { ContactCard } from "@/components/sections/showcase/cards/contactCard";
import { LinkedinCard } from "@/components/sections/showcase/cards/linkedinCard";

import { ReadingCard } from "@/components/sections/showcase/cards/readingCard";
import { SpotifyCard } from "@/components/sections/showcase/cards/spotifyCard";
import { WatchingCard } from "@/components/sections/showcase/cards/watchingCard";

import { DecoderCard } from "@/components/sections/showcase/cards/decoderCard";
import { SummaraiCard } from "@/components/sections/showcase/cards/summaraiCard";
import { QuizmedicsCard } from "@/components/sections/showcase/cards/quizmedicsCard";

import { ListReorderCard } from "@/components/sections/showcase/cards/listReorderCard";
import { NotificationCard } from "@/components/sections/showcase/cards/notificationCard";
import { LayoutCard } from "@/components/sections/showcase/cards/layoutCard";

import { HeroCard } from "@/components/sections/showcase/cards/heroCard";
import { FeatureCard } from "@/components/sections/showcase/cards/featureCard";
import { ActionCard } from "@/components/sections/showcase/cards/actionCard";
import { DashboardCard } from "@/components/sections/showcase/cards/dashboardCard";

import { UseBoundedScrollCard } from "@/components/sections/showcase/cards/useBoundedScrollCard";
import { UseIntroCard } from "@/components/sections/showcase/cards/useIntroCard";
import { PresetCard } from "@/components/sections/showcase/cards/presetCard";

//* - Types

type Card = {
  id: string;
  category: string;
  subcategory: string;
  row: string;
  col: string;
  content: JSX.Element;
};

//* - Data

// decodeLetter animation
export const KEYS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  "|",
  "\\",
  ";",
  ":",
  "'",
  '"',
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
  "`",
  "~",
];

// showcaseGrid data
export const CARDS: Card[] = [
  {
    id: "bio-section",
    category: "about",
    subcategory: "portfolio",
    row: " row-span-2",
    col: "col-span-2 sm:col-span-4 md:col-span-2 lg:col-span-4",
    content: <BioCard />,
  },
  {
    id: "spotify-section",
    category: "media",
    subcategory: "portfolio",
    row: " row-span-1 sm:row-span-2 md:row-span-1 lg:row-span-2",
    col: "col-span-1 sm:col-span-2",
    content: <SpotifyCard />,
  },
  {
    id: "projects-section",
    category: "projects",
    subcategory: "portfolio",
    row: " row-span-2 sm:row-span-1 md:row-span-2 lg:row-span-4",
    col: " col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2",
    content: <QuizmedicsCard />,
  },
  {
    id: "projects-section-2",
    category: "projects",
    subcategory: "portfolio",
    row: "row-span-2 sm:row-span-1 md:row-span-2 lg:row-span-4",
    col: " col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2",
    content: <SummaraiCard />,
  },
  {
    id: "projects-section-3",
    category: "projects",
    subcategory: "portfolio",
    row: " row-span-1 md:row-span-2 lg:row-span-2",
    col: "col-span-2 lg:col-span-4",
    content: <DecoderCard />,
  },
  {
    id: "watching-section",
    category: "media",
    subcategory: "portfolio",
    row: "row-span-1 sm:row-span-2 md:row-span-1 lg:row-span-2",
    col: "col-span-1 sm:col-span-2",
    content: <WatchingCard />,
  },
  {
    id: "journey-section-1",
    category: "about",
    subcategory: "portfolio",
    row: " row-span-2",
    col: "col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-4",
    content: <JourneyCard />,
  },
  {
    id: "reading-section",
    category: "media",
    subcategory: "portfolio",
    row: "row-span-1 sm:row-span-2 md:row-span-1 lg:row-span-2",
    col: "col-span-1 sm:col-span-2",
    content: <ReadingCard />,
  },
  {
    id: "contact-section",
    category: "contact",
    subcategory: "portfolio",
    row: "row-span-1 sm:row-span-2 md:row-span-1 lg:row-span-2",
    col: " col-span-2  sm:col-span-4  lg:col-span-4",
    content: <ContactCard />,
  },
  {
    id: "linkedin-section",
    category: "contact",
    subcategory: "portfolio",
    col: "row-span-1 md:row-span-1 lg:row-span-2",
    row: "col-span-1 sm:col-span-2 lg:col-span-2",
    content: <LinkedinCard />,
  },

  // code cards
  {
    id: "list-reorder-section",
    category: "components",
    subcategory: "code",
    col: "row-span-1 lg:row-span-4",
    row: "col-span-2 sm:col-span-4 md:col-span-2 lg:col-span-2",
    content: <ListReorderCard />,
  },
  {
    id: "notification-section",
    category: "components",
    subcategory: "code",
    col: "row-span-1 md:row-span-2",
    row: "col-span-1 sm:col-span-2 lg:col-span-4",
    content: <NotificationCard />,
  },
  {
    id: "hero-section",
    category: "templates",
    subcategory: "code",
    col: "row-span-2 md:row-span-2",
    row: "col-span-1 sm:col-span-2 lg:col-span-2",
    content: <HeroCard />,
  },
  {
    id: "use-bounded-scroll-section",
    category: "utils",
    subcategory: "code",
    col: "row-span-2 md:row-span-1 lg:row-span-4",
    row: "col-span-1 sm:col-span-2 lg:col-span-2",
    content: <UseBoundedScrollCard />,
  },
  {
    id: "layout-section",
    category: "components",
    subcategory: "code",
    col: "row-span-1 md:row-span-1 lg:row-span-2",
    row: "col-span-1 sm:col-span-4",
    content: <LayoutCard />,
  },
  {
    id: "feature-section",
    category: "templates",
    subcategory: "code",
    col: "row-span-1 md:row-span-2",
    row: "col-span-2 sm:col-span-4 md:col-span-2 lg:col-span-2",
    content: <FeatureCard />,
  },
  {
    id: "action-section",
    category: "templates",
    subcategory: "code",
    col: "row-span-2 md:row-span-1 lg:row-span-2",
    row: "col-span-1 sm:col-span-2 lg:col-span-2",
    content: <ActionCard />,
  },
  {
    id: "preset-section",
    category: "utils",
    subcategory: "code",
    col: "row-span-1 md:row-span-2 lg:row-span-4",
    row: "col-span-1 sm:col-span-2 lg:col-span-2",
    content: <PresetCard />,
  },
  {
    id: "dashboard-section",
    category: "templates",
    subcategory: "code",
    col: "row-span-2 md:row-span-1 lg:row-span-2",
    row: "col-span-1 sm:col-span-2 lg:col-span-4",
    content: <DashboardCard />,
  },
  {
    id: "use-intro-section",
    category: "utils",
    subcategory: "code",
    col: "row-span-1 md:row-span-1 lg:row-span-2",
    row: "col-span-1 sm:col-span-4 lg:col-span-2",
    content: <UseIntroCard />,
  },
];
