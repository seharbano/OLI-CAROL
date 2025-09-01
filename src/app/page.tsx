"use client"
import KidsCarousel from "@/globalComponents/carousel/KidsCarousel";
import HeroSection from "@/globalComponents/heroSections/HeroSection";
export default function Home() {
  return (
    <div className="flex flex-col gap-12 bg-white text-black">
      <HeroSection />
      <div className="">
        <h1 className="px-16 lg:px-8 sm:px-6 xs:px-4 text-[35px] font-extrabold">Our Favorites</h1>
        <KidsCarousel />
      </div>

    </div>
  );
}
