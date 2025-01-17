"use client";

import { INavMenuProps } from "@/types/props";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileBtn: React.FC<INavMenuProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  return (
    <button
      type="button"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="block md:hidden text-white"
    >
      {isMobileMenuOpen ? (
        <FaTimes className="w-6 h-6" />
      ) : (
        <FaBars className="w-6 h-6" />
      )}
    </button>
  );
};

export default MobileBtn;
