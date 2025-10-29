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
        slug: "featured-creatives"
    },
     {
        title: "Feature Creative Works",
        image: letter,
        username: "Graziela Caringal",
        slug: "featured-creatives"
    },
     {
        title: "Feature Creative Works",
        image: letter,
        username: "Graziela Caringal",
        slug: "featured-creatives"
    },
     {
        title: "Feature Creative Works",
        image: letter,
        username: "Graziela Caringal",
        slug: "featured-creatives"
    },
      {
        title: "Feature Creative Works",
        image: letter,
        username: "Graziela Caringal",
        slug: "featured-creatives"
    },
     {
        title: "Feature Creative Works",
        image: letter,
        username: "Graziela Caringal",
        slug: "featured-creatives"
    },
     {
        title: "Feature Creative Works",
        image: letter,
        username: "Graziela Caringal",
        slug: "featured-creatives"
    },
     {
        title: "Feature Creative Works",
        image: letter,
        username: "Graziela Caringal",
        slug: "featured-creatives"
    },
];