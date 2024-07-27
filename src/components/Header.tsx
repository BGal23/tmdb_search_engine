import Image from "next/image";
import SearchingInput from "./SearchingInput";

const Header = () => {
  return (
    <div className="mt-12 md:mt-14 lg:mt-16 flex flex-col items-center">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/images/background-desktop.jpg"
        />
        <source media="(min-width: 768px)" srcSet="/images/bg-desktop.jpg" />

        <Image
          className="w-full h-48 md:h-64 lg:h-96 object-cover"
          src="/images/background-desktop.jpg"
          width={100}
          height={100}
          alt={""}
          priority
        />
      </picture>

      <SearchingInput />
    </div>
  );
};

export default Header;
