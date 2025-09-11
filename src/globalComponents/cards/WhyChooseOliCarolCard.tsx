import React from "react";
import Image from "next/image";
import {WhyChooseOliCarolCardProps} from "@/types/product"

const WhyChooseOliCarolCard = ({ title, description, img }: WhyChooseOliCarolCardProps) => {
  return (
    <div className=" flex flex-col gap-3">
      <Image src={img} alt={title}  />
      <h2 className="md:text-[18px]  text-[15px]  font-urbane-rounded ">{title}</h2>
      <p className="md:text-[14px] text-[12px] font-light">{description}</p>
    </div>
  );
};

export default WhyChooseOliCarolCard;
