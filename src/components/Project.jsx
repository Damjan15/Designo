const Project = ({ data }) => {
  return (
    <div className="w-80 min-h-[310px] flex flex-col cursor-pointer group md:flex-row md:w-full lg:w-80 lg:flex-col">
        <div className="w-full">
            <img src={data.image} className="rounded-t-3xl md:rounded-t-none md:rounded-l-3xl lg:rounded-l-none lg:rounded-t-3xl" alt="Project Thumbnail" />
        </div>
        <div className="bg-[#FDF3F0] w-full text-center p-8 flex flex-col items-center justify-center rounded-b-3xl md:rounded-b-none md:rounded-r-3xl lg:rounded-r-none lg:rounded-b-3xl group-hover:bg-peach">
            <div >
                <h3 className="text-peach text-lg mb-3 font-medium uppercase tracking-widest group-hover:text-white">{data.title}</h3>
                <p className="group-hover:text-white">{data.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Project