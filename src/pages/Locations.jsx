import { Location } from "../components"

const Locations = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-6">
      <Location title="Canada" address1="3886 Wellington Street" address2="Toronto, Ontario M9C 3J5" contactPhone="+1 253-863-8967" contactEmail="contact@designo.co" cover="canada"/>
      <Location reverse title="Australia" address1="19 Balonne Street" address2="New South Wales 2443" contactPhone="(02) 6720 9092" contactEmail="contact@designo.au" cover="australia" />
      <Location title="United Kingdom" address1="13  Colorado Way" address2="Rhyd-y-fro SA8 9GA" contactPhone="078 3115 1400" contactEmail="contact@designo.uk" cover="uk" />
    </div>
  )
}

export default Locations