const AboutHero = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse h-[500px]">
        <div className="about w-full h-full rounded-t-2xl lg:rounded-t-none lg:rounded-r-2xl"></div>
        <div className="about-pattern bg-peach p-8 rounded-b-2xl flex flex-col justify-center lg:rounded-b-none lg:rounded-l-2xl">
          <div className="text-center lg:text-left">
            <h3 className="text-white text-3xl mb-6 md:text-5xl">About Us</h3>
            <p className="text-white">Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
          </div>
        </div>
    </div>
  )
}

export default AboutHero