import { createFileRoute } from "@tanstack/react-router";
import { Clocks } from "@/components/love/clocks";
import { Gallery } from "@/components/love/gallery";
import { SiteFooter } from "@/components/love/footer";
import { Hero } from "@/components/love/hero";
import { Letter } from "@/components/love/letter";
import { SiteNav } from "@/components/love/nav";
import { Notes } from "@/components/love/notes";
import { Petals } from "@/components/love/petals";
import { Reasons } from "@/components/love/reasons";
import { Story } from "@/components/love/story";
import { Surprise } from "@/components/love/surprise";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="relative min-h-svh bg-ivory text-ink">
      <div className="grain" aria-hidden="true" />
      <Petals />
      <SiteNav />
      <Hero />
      <Clocks />
      <Letter />
      <Story />
      <Gallery />
      <Reasons />
      <Notes />
      <Surprise />
      <SiteFooter />
    </main>
  );
}
