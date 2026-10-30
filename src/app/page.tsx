import { Amenities } from "@/components/sections/amenities";
import { Cta } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { FeaturedStays } from "@/components/sections/featured-stays";
import { Hero } from "@/components/sections/hero";
import { ImageStrip } from "@/components/sections/image-strip";
import { InteriorGallery } from "@/components/sections/interior-gallery";
import { Intro } from "@/components/sections/intro";
import { Location } from "@/components/sections/location";
import { Included } from "@/components/sections/included";
import { Process } from "@/components/sections/process";
import { StayTypes } from "@/components/sections/stay-types";
import { Stats } from "@/components/sections/stats";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Intro />
        <InteriorGallery />
        <Included />
        <Features />
        <StayTypes />
        <FeaturedStays />
        <Amenities />
        <Location />
        <Process />
        <Cta />
        <ImageStrip />
      </main>
      <SiteFooter />
    </>
  );
}
