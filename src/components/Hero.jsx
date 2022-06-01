const Hero = () => {
  return (
    <div className="hero bg-peach rounded-lg flex flex-col md:justify-center md:items-center lg:flex-row">
      <div className="flex flex-col items-center justify-center space-y-5 p-6 md:max-w-2xl lg:justify-start lg:items-start lg:space-y-8">
        <div className="flex flex-col space-y-5 text-center lg:text-left lg:space-y-7">
          <h1 className="text-white text-4xl font-mediume leading-9 md:text-5xl">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-white text-base leading-6 md:text-lg">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
        </div>

        <div>
          <button className="bg-white text-darkGrey uppercase font-medium leading-6	tracking-wider py-4 px-6 rounded-md outline-none hover:bg-lightPeach hover:text-white">
            Learn More
          </button>
        </div>
      </div>
      <div className="hero-bg md:hidden lg:block"></div>
    </div>
  );
};

export default Hero;
