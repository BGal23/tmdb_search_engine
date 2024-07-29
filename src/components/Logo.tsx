const Logo = () => {
  return (
    <div className="flex flex-row gap-1 items-center font-bold">
      <div className="text-4xl">TMDB</div>
      <div className="text-xs flex flex-col items-center">
        <div>SEARCH</div>
        <div className="block w-full h-[2px] bg-red-900"></div>
        <div>ENGINE</div>
      </div>
    </div>
  );
};

export default Logo;
