import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export type propsNavSidebar = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
};
export type CounterProps = {
  count: number;              
  onIncrement: () => void;     
  onDecrement: () => void;       
};

export type cartSummary = {
  className?: string;
}
export type WhyChooseOliCarolCardProps = {
  title: string;
  description: string;
  img: string | StaticImport;
};

export type AddToCartCardProps = {
  img: string | StaticImport;
  title: string;
  price: string;
  qty?: number;
  onRemove: () => void;
  onUpdateQty: (newQty: number) => void;
};

export type Slide = {
    title: string;
    description: string;
  };
  
export type ShopByCategoryCardProps = {
    img: StaticImageData;
    text: string;
  };

export type ShopByAgeCardProps = {
  img: StaticImageData;
  text: string;
};

export type HeroSliderCardProps = {
  id: string | number;
  image: string | StaticImageData;
  hoverImage: string | StaticImageData;
  title: string;
  price: number;
  tag?: string;
  age?: string;
  category?: string;
  className?:string;
};


export type ProductDetailColor = {
  name: string;
  images: StaticImageData[];
};

export type Product = {
  id: string;
  title: string;
  price: number;
  colorOptions: ProductDetailColor[];
};
