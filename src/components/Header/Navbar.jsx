import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiSearchLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
  const navItems = [
    {
      name: "Swiggy Corporate",
      icon: HiOutlineShoppingBag,
    },
    {
      name: "Search",
      icon: RiSearchLine,
    },
    {
      name: "Offer",
      icon: BiSolidOffer,
    },
    {
      name: "Help",
      icon: IoHelpBuoyOutline,
    },
    {
      name: "Sign In",
      icon: FaRegUser,
    },
    {
      name: "Cart",
      icon: IoMdCart,
    },
  ];
  return (
    <ul className="flex gap-8">
      {navItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <li
            key={index}
            className="flex cursor-pointer items-center text-menu"
          >
            <div className="flex gap-1 items-center">
              <IconComponent size={20} />
              <span className="text-base font-medium">{item.name}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
