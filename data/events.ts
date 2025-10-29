import { StaticImageData } from "next/image";
import travel from "../public/travel.jpg";

interface EventsProps {
  title: string;
  image: StaticImageData;
  username: string;
  slug: string;
  date: string;
}

export const events: EventsProps[] = [
  {
    title: "Feature Creative Works",
    image: travel,
    username: "Graziela Caringal",
    slug: "featured-events-1",
    date: "Wed, Oct 29 7:00 PM GMT",
  },
  {
    title: "Feature Creative Works",
    image: travel,
    username: "Graziela Caringal",
    slug: "featured-events-2",
    date: "Wed, Oct 30 7:00 PM GMT",
  },
  {
    title: "Feature Creative Works",
    image: travel,
    username: "Graziela Caringal",
    slug: "featured-events-3",
    date: "Wed, Oct 31 7:00 PM GMT",
  },
];
