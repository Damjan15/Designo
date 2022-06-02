const Banner = ({ title, description }) => {
  return (
    <div className="banner bg-peach rounded-lg h-64 flex flex-col items-center justify-center">
      <div className="max-w-md text-center text-white">
        <h1 className="text-3xl font-medium mb-4 md:text-5xl">{title}</h1>
        <p className="text-sm lg:text-base">
          { description }
        </p>
      </div>
    </div>
  );
};

export default Banner;
