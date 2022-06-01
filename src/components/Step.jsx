const Step = ({ cover, title, description }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center md:flex-row lg:flex-col">
        <div className="step">
            <img src={cover} alt="Step Cover" />
        </div>
        <div className="text-center max-w-xs text-darkGrey md:text-left md:max-w-md md:ml-12 lg:text-center">
            <h4 className="text-xl uppercase leading-7 tracking-widest font-medium my-6 md:my-2 lg:my-5">{title}</h4>
            <p className="leading-7	">{description}</p>
        </div>
    </div>
  )
}

export default Step