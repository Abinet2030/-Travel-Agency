import DestinationGrid from '../components/DestinationGrid'
import { destinations } from '../data/mock'

export default function Destinations() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl">Destinations</h1>
        <p className="mt-2 muted">Filter and explore beautiful places around the world.</p>
        <DestinationGrid data={destinations} />
      </div>
    </section>
  )
}
