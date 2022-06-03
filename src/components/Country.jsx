import { Link } from "react-router-dom"

const Country = ({ cover, title }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-4">
        <div className="country">
            <img src={cover} alt="Country Cover" />
        </div>
        <div className="text-center">
            <h3 className="text-xl text-darkGrey font-medium tracking-widest uppercase mb-4">{title}</h3>
            <Link to="/locations">
              <button className="bg-peach uppercase text-white py-4 px-6 rounded-md hover:bg-lightPeach">See Location</button>
            </Link>
        </div>
    </div>
  )
}

export default Country