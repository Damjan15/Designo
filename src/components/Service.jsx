import { Link } from "react-router-dom";
import arrowRight from "../assets/shared/desktop/icon-right-arrow.svg";

const Service = ({ bg, title, row, col, link }) => {
  return (
    <div
      className={`service w-full rounded-lg cursor-pointer ${bg} ${row ? row : ""} ${col ? col : ""} group`}
    >
      <div className="w-full h-full bg-black/80 rounded-lg group-hover:bg-peach/90">
        <div className="w-full h-full text-white flex flex-col justify-center space-y-4 items-center">
          <h2 className="text-3xl font-medium uppercase">{title}</h2>

          <div className="flex items-center justify-between">
            <Link
              to={`/category/${link}`}
              className="text-base font-medium uppercase tracking-widest mr-5"
            >
              View Project
            </Link>
            <img src={arrowRight} className="h-3" alt="Arrow Right Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
