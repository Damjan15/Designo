import { Country } from "../components"
import canada from "../assets/shared/desktop/illustration-canada.svg"
import unitedKingdom from "../assets/shared/desktop/illustration-united-kingdom.svg"
import australia from "../assets/shared/desktop/illustration-australia.svg"

const Locations = () => {
  return (
    <div className="flex flex-col space-y-10 mt-10 py-20 lg:flex-row lg:space-y-0">
        <Country cover={canada} title="Canada" />
        <Country cover={australia} title="Australia" />
        <Country cover={unitedKingdom} title="United Kingdom" />
    </div>
  )
}

export default Locations