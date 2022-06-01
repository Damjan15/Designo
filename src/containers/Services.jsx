import { Service } from "../components";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 lg:py-24" >
      <div className="w-full h-full py-8 px-8 flex flex-col gap-8 lg:flex-row lg:px-4 xl:px-0">
          <div className="w-full h-64 md:h-52 lg:h-[645px]">
              <Service title="Web Design" value="service-web-design" />
          </div>

          <div className="w-full h-64 md:h-52 lg:h-[308px]">
              <Service title="App Design" value="service-app-design mb-8" />
              <Service title="Graphic Design" value="service-graphic-design" />
          </div>
      </div>
    </div>
  );
};

export default Services;
