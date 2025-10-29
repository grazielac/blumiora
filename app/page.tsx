// import NavBar from "@/components/NavBar";
import { SignedOut } from "@clerk/nextjs";
import Hero from "../components/Hero";
import FeaturedCreativesCard from "@/components/FeaturedCreatorsCard";
import { posts } from "@/data/posts";
import Footer from "@/components/Footer";
import { events } from "@/data/events";
import  UpcomingEvents from "../components/UpcomingEvents";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <SignedOut>
        <Hero />

        {/* section title */}
        <section className="px-4 py-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold mb-8">FEATURED CREATIVES</h2>
            <div className="mr-12 px-3 py-1 font-bold rounded-3xl hover:bg-accentGray">
              <h3 className="text-xl font-light">More creatives</h3>
            </div>
          </div>
          <main
            className="bg-primary grid grid-cols-1 sm:grid-cols-2
                       lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5
                       sm:grid-rows-2"
          >
            {posts.map((post) => (
              <FeaturedCreativesCard
                key={post.slug}
                title={post.title}
                image={post.image}
                username={post.username}
                slug={post.slug}
              />
            ))}
          </main>
        </section>

        {/* upcoming events */}
        <section className="px-4 py-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold mb-8">Upcoming events</h2>
            <div className="mr-12 px-3 py-1 font-bold rounded-3xl hover:bg-accentGray">
              <h3 className="text-xl font-light">More events</h3>
            </div>
          </div>
          <main
            className="bg-primary grid grid-cols-1 sm:grid-cols-2
                       lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5
                       "
          >
            {events.map((event) => (
              <UpcomingEvents
                key={event.slug}
                title={event.title}
                image={event.image}
                username={event.username}
                slug={event.slug}
                date={event.date}
              />
            ))}
          </main>
        </section>
      </SignedOut>
      <Footer />
    </>
  );
}
