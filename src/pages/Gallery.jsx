import GalleryMasonry from '../components/GalleryMasonry'
import { gallery } from '../data/mock'

export default function Gallery() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl">Gallery</h1>
        <p className="mt-2 muted">Explore moments from past trips and destinations.</p>
        <div className="mt-6">
          <GalleryMasonry images={gallery} />
        </div>
      </div>
    </section>
  )
}
