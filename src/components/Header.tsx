import { InputProps } from "@/types/props";
import SearchingInput from "./SearchingInput";

const Header: React.FC<InputProps> = ({ setIsSearchedMenuOpen }) => {
  return (
    <div className="h-[17rem] md:h-[23rem] lg:h-[30rem] bg-bg-mobile md:bg-bg-tablet lg:bg-bg-desktop bg-bottom flex items-center justify-center">
      <SearchingInput setIsSearchedMenuOpen={setIsSearchedMenuOpen} />
    </div>
  );
};

export default Header;
