import { Project } from "../components"

const Projects = ({ projects }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 my-6 lg:space-y-0 lg:flex-row lg:justify-between lg:flex-wrap lg:gap-6">
        { projects?.map((project) => <Project key={project.id} data={project} />)}
    </div>
  )
}

export default Projects