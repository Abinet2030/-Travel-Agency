import PackageCard from '../components/PackageCard'
import { packages } from '../data/mock'

export default function Packages() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl">Packages</h1>
        <p className="mt-2 muted">Browse curated tours with detailed itineraries.</p>
        <div className="mt-6 grid">
          {packages.map((p) => (
            <PackageCard key={p.id} item={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
