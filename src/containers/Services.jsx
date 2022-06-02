import { Service } from "../components";

const Services = () => {
  return (
    <div className="h-screen my-16 grid grid-cols-1 gap-3 lg:grid-cols-2 lg:grid-rows-6">
      <Service title="Web Design" bg="service-web-design" row="lg:row-span-6" />
      <Service title="App Design" bg="service-app-design" col="lg:col-span-2 lg:col-start-2 lg:row-span-3" />
      <Service title="Graphic Design" bg="service-graphic-design" col="lg:col-span-2 lg:col-start-2 lg:row-span-3" />
    </div>
  );
};

export default Services;
