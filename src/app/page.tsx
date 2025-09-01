"use client"
import ShopByAgeCard from "@/globalComponents/cards/ShopByAgeCard";
import ShopByCategoryCard from "@/globalComponents/cards/ShopByCategoryCard";
import SustailableToys from "@/globalComponents/cards/SustailableToys";
import CaraouselAlongAnimation from "@/globalComponents/carousel/CaraouselAlongAnimation";
import KidsCarousel from "@/globalComponents/carousel/KidsCarousel";
import HeroSection from "@/globalComponents/heroSections/HeroSection";
import ToysGifSection from "@/globalComponents/section/ToysGifSection";
import { ageCards, categoryCards } from "@/utilis/MockData";
export default function Home() {
  return (
    <div className="flex flex-col bg-white text-black">
      <HeroSection />

      <div className="mt-12">
        <h1 className="px-16 lg:px-8 sm:px-6 xs:px-4 text-[35px] font-urbane-rounded font-bold">Our Favorites</h1>
        <KidsCarousel />
      </div>
      <div className="mt-12">
        <SustailableToys />
      </div>

      <div className="bg-[#cf9f78] py-6 px-16 lg:px-8 sm:px-6 xs:px-4 mt-12">
        <h2 className="text-[35px] font-urbane-rounded font-bold mb-6">Shop by Age</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {ageCards.map((card) => (
            <ShopByAgeCard key={card.id} img={card.img} text={card.text} />
          ))}
        </div>
        <h2 className="text-[35px] font-urbane-rounded font-bold my-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {categoryCards.map((card) => (
            <ShopByCategoryCard key={card.id} img={card.img} text={card.text} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12 mb-12">
        <ToysGifSection />
        <CaraouselAlongAnimation />
      </div>

    </div>
  );
}
