"use client";

import { HiOutlineHomeModern } from "react-icons/hi2";
import { MdApartment } from "react-icons/md";
import { MdOutlineOtherHouses } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiPeaceDove } from "react-icons/gi";
import { TbParking } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";

import Container from "../Container";
import CategoryBox from "../CategoryBox";

export const categories = [
  {
    label: "Modern",
    icon: HiOutlineHomeModern,
    description: "Modern House",
  },
  {
    label: "Apartment",
    icon: MdApartment,
    description: "This is a Apartment",
  },
  {
    label: "Minimal",
    icon: MdOutlineOtherHouses,
    description: "Minimal House!",
  },
  {
    label: "With Food",
    icon: IoFastFoodOutline,
    description: "Bodim House With Food",
  },
  {
    label: "Peaceful",
    icon: GiPeaceDove,
    description: "This Bodim House is peaceful",
  },
  {
    label: "With Guardian",
    icon: MdOutlineSecurity,
    description: "With Guardian",
  },
  {
    label: "With Parking",
    icon: TbParking,
    description: "Parking Available",
  },
];
const Categories = () => {
  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
