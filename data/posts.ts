import { StaticImageData } from "next/image";
import letter from "../public/letter.jpg";

interface PostProps {
  title: string;
  image: StaticImageData;
  username: string;
  slug: string;
}

export const posts: PostProps[] = [
  {
    title: "Feature Creative Works",
    image: letter,
    username: "Graziela Caringal",
    slug: "featured-creatives-1",
  },
  {
    title: "Feature Creative Works",
    image: letter,
    username: "Graziela Caringal",
    slug: "featured-creatives-2",
  },
  {
    title: "Feature Creative Works",
    image: letter,
    username: "Graziela Caringal",
    slug: "featured-creatives-3",
  },
  {
    title: "Feature Creative Works",
    image: letter,
    username: "Graziela Caringal",
    slug: "featured-creatives-4",
  },
  {
    title: "Feature Creative Works",
    image: letter,
    username: "Graziela Caringal",
    slug: "featured-creatives-5",
  },
  {
    title: "Feature Creative Works",
    image: letter,
    username: "Graziela Caringal",
    slug: "featured-creatives-6",
  },
  {
    title: "Feature Creative Works",
    image: letter,
    username: "Graziela Caringal",
    slug: "featured-creatives-7",
  },
  {
    title: "Feature Creative Works",
    image: letter,
    username: "Graziela Caringal",
    slug: "featured-creatives-8",
  },
];
