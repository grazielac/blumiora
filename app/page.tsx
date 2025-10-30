// import NavBar from "@/components/NavBar";
import { ClerkLoading, SignedIn, SignedOut } from "@clerk/nextjs";
import Hero from "../components/Hero";
import FeaturedCreativesCard from "@/components/FeaturedCreatorsCard";
import { posts } from "@/data/posts";
import { events } from "@/data/events";
import UpcomingEvents from "../components/UpcomingEvents";
import SwiperComponent from "@/components/Swiper";
import NavBar from "@/components/NavBar";
import { ClerkLoaded } from "@clerk/nextjs";
import DashboardNav from "@/components/DashboardNav";

export default function Home() {
  return (
    <>
      <ClerkLoading>
        <p className="text-xl">Loading</p>
      </ClerkLoading>

      {/* content for logged-in users */}
      <ClerkLoaded>
        <SignedIn>
          <DashboardNav />
        </SignedIn>
      </ClerkLoaded>

      {/* content for logged-out users */}
      <SignedOut>
        <NavBar />
        <Hero />

        {/* section title */}
        <section className="px-4 py-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold mb-8">Featured Creatives</h2>
            <div className="mr-12 px-3 py-1 font-bold rounded-3xl hover:bg-accentGray">
              <h3 className="text-xl font-light">More creatives</h3>
            </div>
          </div>

          {/* mobile view */}
          <div className="block sm:hidden">
            <SwiperComponent />
          </div>

          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 p-5">
            {posts.map((post) => (
              <FeaturedCreativesCard
                key={post.slug}
                title={post.title}
                image={post.image}
                username={post.username}
                slug={post.slug}
              />
            ))}
          </div>
        </section>

        {/* upcoming events */}
        <section className="px-4 py-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
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
    </>
  );
}
