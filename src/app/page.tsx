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

      <div className="md:mt-8 sm:mt-6 mt-4 ">
        <h1 className="lg:px-16 md:6 px-4 md:text-[35px]  text-[25px]  font-urbane-rounded font-bold">Our Favorites</h1>
        <KidsCarousel />
      </div>
      <div className="md:mt-8 sm:mt-6 mt-4">
        <SustailableToys />
      </div>

      <div className="bg-[#cf9f78] py-6 lg:px-16 md:6 px-4 md:mt-8 sm:mt-6 mt-4">
        <h2 className="md:text-[35px]  text-[25px]  font-urbane-rounded font-bold mb-6">Shop by Age</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-12 gap-6 ">
          {ageCards.map((card) => (
            <ShopByAgeCard key={card.id} img={card.img} text={card.text} />
          ))}
        </div>
        <h2 className="md:text-[35px]  text-[25px]  font-urbane-rounded font-bold my-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-12 gap-6">
          {categoryCards.map((card) => (
            <ShopByCategoryCard key={card.id} img={card.img} text={card.text} />
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 grid-cols-1  gap-12 mb-12">
        <ToysGifSection />
        <CaraouselAlongAnimation />
      </div>

    </div>
  );
}
