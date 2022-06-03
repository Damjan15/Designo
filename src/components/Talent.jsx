const Talent = ({ reverse, title, description }) => {
  const normal = "lg:rounded-r-2xl"
  const reversed = ""
  return (
    <div className={`w-full h-full flex flex-col lg:${reverse ? "flex-row-reverse" : "flex-row"} lg:h-[640px] my-16`}>
      <div className={`talent w-full h-80 rounded-t-2xl lg:rounded-t-none lg:h-full lg:${reverse ? "rounded-r-2xl" : "rounded-l-2xl"}`}></div>

      <div className={`flex flex-col justify-center  bg-[#FDF3F0] text-center p-8 rounded-b-2xl lg:text-left lg:w-[1111px] ${reverse ? "lg:rounded-b-none lg:rounded-r-none lg:rounded-l-2xl" : "rounded-b-none lg:rounded-r-2xl"}`}>
        <h2 className="text-peach font-medium text-4xl leading-9 mb-4 lg:text-5xl">{title}</h2>
        <p className="text-darkGrey leading-6 lg:text-lg">
          { description }
        </p>
      </div>
    </div>
  );
};

export default Talent;
