import { useParams } from "react-router-dom";
import { Banner } from "../components";
import { Projects } from "../containers";
import { web } from "../db/web"
import { app } from "../db/app"
import { graphic } from "../db/graphic";

const Category = () => {
  const params = useParams();
  

  return (
    <div>
      {params.categoryName === "web-design" && (
        <>
        <Banner
          title="Web Design"
          description="We build websites that serve as powerful marketing tools 
and bring memorable brand experiences."
        />
        <Projects projects={web} />
        </>
      )}

      {params.categoryName === "app-design" && (
        <>
        <Banner
          title="App Design"
          description="Our mobile designs bring intuitive digital solutions
          to your customers right at their fingertips.."
        />
        <Projects projects={app} />
        </>
      )}

      {params.categoryName === "graphic-design" && (
        <>
        <Banner
          title="Graphic Design"
          description="We deliver eye-catching branding materials that are 
          tailored to meet your business objectives."
        />
        <Projects projects={graphic} />
        </>
      )}
    </div>
  );
};

export default Category;
