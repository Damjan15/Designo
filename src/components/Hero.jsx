import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero bg-peach rounded-lg flex flex-col justify-center items-center lg:flex-row">
      <div className="max-w-xs text-center pt-12 md:max-w-xl lg:text-left lg:pl-20">
        <h1 className="text-white font-medium text-3xl mb-5 md:text-4xl lg:text-5xl">Award-winning custom designs and digital branding solutions</h1>
        <p className="text-sm text-white md:text-lg lg:my-8">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>

        <div className="mt-8">
          <Link to="/about">
            <button className="bg-white text-darkGrey uppercase font-medium leading-6 tracker-wider py-4 px-6 rounded-md outline-none hover:bg-lightPeach hover:text-white">Learn More</button>
          </Link>
        </div>
      </div>

      <div className="hero-bg">
      </div>
    </div>
  );
};

export default Hero;
