import { Step } from "../components"
import passionate from "../assets/home/desktop/illustration-passionate.svg"
import friendly from "../assets/home/desktop/illustration-friendly.svg"
import resourceful from "../assets/home/desktop/illustration-resourceful.svg"

const Steps = () => {
  return (
    <div className="flex flex-col space-y-9 py-14 lg:flex-row lg:space-y-0">
        <Step cover={passionate} title="Passionate" description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions." />
        <Step cover={resourceful} title="Resourceful" description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs." />
        <Step cover={friendly} title="Friendly" description="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide." />
    </div>
  )
}

export default Steps