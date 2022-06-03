const Location = ({ reverse, title, address1, address2, contactPhone, contactEmail, cover }) => {
  return (
    <div className={`w-full flex flex-col lg:${reverse ? "flex-row-reverse" : "flex-row"}`}>
        <div className={`map map-${cover} w-full h-80 md:mb-4 md:rounded-md lg:basis-3/12`}>
        </div>
        <div className={`bg-[#FDF3F0] text-center p-6 md:rounded-md md:text-left md:h-80 lg:basis-3/4 lg:${reverse ? "ml-0 lg:mr-4" : "ml-4"}`}>
            <div className="max-w-md mx-auto w-full h-full flex flex-col md:justify-center lg:max-w-none lg:pl-12">
                <h2 className="text-peach font-medium text-4xl mb-4 md:text-5xl lg:mb-8">{title}</h2>
                <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:gap-8">
                    <ul className="text-darkGrey text-lg">
                        <li className="font-bold">Designo Central Office</li>
                        <li>{address1}</li>
                        <li>{address2}</li>
                    </ul>

                    <ul className="text-darkGrey">
                        <li className="font-bold">Contact</li>
                        <li>P : {contactPhone}</li>
                        <li>M : {contactEmail}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Location