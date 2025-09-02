
import sliderImg1 from "@/assets/pngs/slider-img-1.webp";
import sliderHoverImg1 from "@/assets/pngs/slider-hover-img-1.webp";

import BabyToys from "@/assets/pngs/zero-six-month-baby.webp";
import SixTwelve from "@/assets/pngs/six-one-year-baby.webp";
import TwelveEighteen from "@/assets/pngs/one-three-year-baby.webp";
import EighteenTwentyFour from "@/assets/pngs/three-plus-year-baby.webp";

import Teethers from "@/assets/pngs/teethers.webp";
import Cars from "@/assets/pngs/baby-toys-cars.webp";
import RattleToys from "@/assets/pngs/carol-rattle.webp";
import BathToys from "@/assets/pngs/carol-bath.webp";

export const Kidsproducts = [
  {
    id: 1,
    title: "Wally the Watermelon Baby Teether",
    price: 19.00,
    image: sliderImg1,
    discountBol:true,
    discount:"70%",
    hoverImage: sliderHoverImg1,
  },
  {
    id: 2,
    title: "Banana Toy",
    price: 15.50,
    image: sliderImg1,
    hoverImage: sliderHoverImg1,
  },
  {
    id: 3,
    title: "Strawberry Plush",
    price: 12.99,
    image: sliderImg1,
    hoverImage: sliderHoverImg1,
  },
  {
    id: 4,
    title: "Wally the Watermelon Baby Teether",
    price: 19.00,
    image: sliderImg1,
    discountBol:true,
    discount:"sale",
    hoverImage: sliderHoverImg1,
  },
  {
    id: 5,
    title: "Banana Toy",
    price: 15.50,
    image: sliderImg1,
    hoverImage: sliderHoverImg1,
  },
  {
    id: 6,
    title: "Strawberry Plush",
    price: 12.99,
    image: sliderImg1,
    hoverImage: sliderHoverImg1,
  },
  {
    id: 7,
    title: "Wally the Watermelon Baby Teether",
    price: 19.00,
    image: sliderImg1,
    hoverImage: sliderHoverImg1,
  },
  {
    id: 8,
    title: "Banana Toy",
    price: 15.50,
    image: sliderImg1,
    hoverImage: sliderHoverImg1,
  },
  {
    id: 9,
    title: "Strawberry Plush",
    price: 12.99,
    image: sliderImg1,
    hoverImage: sliderHoverImg1,
  },
];

export const ageCards = [
  {
    id: 1,
    img: BabyToys,
    text: "0 - 6 months",
  },
  {
    id: 2,
    img: SixTwelve,
    text: "6 - 12 months",
  },
  {
    id: 3,
    img: TwelveEighteen,
    text: "12 - 18 months",
  },
  {
    id: 4,
    img: EighteenTwentyFour,
    text: "18 - 24 months",
  },
];
export const categoryCards = [
  {
    id: 1,
    img: Teethers,
    text: "Baby Teethers",
  },
  {
    id: 2,
    img: Cars,
    text: "Cars",
  },
  {
    id: 3,
    img: RattleToys,
    text: "Rattle Toys",
  },
  {
    id: 4,
    img: BathToys,
    text: "Bath Toys",
  },
];



export const shopMenus = [
  { label: "ALL PRODUCTS", path: "/all-products" },
  { label: "BABY GIFT SETS 🎁", path: "/baby-gift-sets" },
  { label: "Baby Teethers", path: "/baby-teethers" },
  { label: "Mini Teethers for Newborns", path: "/mini-teethers" },
  { label: "Rattle Toys", path: "/rattle-toys" },
  { label: "Mini Doudou Teethers", path: "/mini-doudou" },
  { label: "Baby Bath Toys", path: "/bath-toys" },
  { label: "Sensory Balls", path: "/sensory-balls" },
  { label: "BABY STACKING TOYS", path: "/stacking-toys" },
  { label: "PRETEND PLAY TOYS", path: "/pretend-play" },
  { label: "BABY ACCESSORIES", path: "/accessories" },
  { label: "Textile Products", path: "/textile-products" },
];

export const moreThanToysMenus = [
  { label: "Young Entrepeneurs", path: "/young-entrepeneurs" },
  { label: "Why Choose Oli&Carol", path: "/why-choose" },
  { label: "We are Green", path: "/we-are-green" },
  { label: "Save the Corals", path: "/save-the-corals" },
  { label: "LATEST NEWS BLOG", path: "/blog" },
];