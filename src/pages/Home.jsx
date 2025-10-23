import Hero from '../components/Hero'
import { FaCertificate, FaHeadset, FaDollarSign, FaUsers, FaPlane, FaHotel, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DestinationGrid from '../components/DestinationGrid'
import ImageCarousel from '../components/ImageCarousel'
import Testimonials from '../components/Testimonials'
import { destinations, packages, testimonials, blogs, partners } from '../data/mock'

export default function Home() {
  return (
    <section>
      <Hero />
      <div className="container">

        <div className="mt-40">
          <h2 className="text-xl text-center">Featured Destinations</h2>
          <DestinationGrid data={destinations} />
        </div>

        <div className="mt-12">
          <h2 className="text-xl text-center mb-4">Popular Packages</h2>
          <div className="grid">
            {packages.map(p => (
              <article key={p.id} className="card">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e)=>{ e.currentTarget.src = 'https://placehold.co/800x500?text=Package'; }}
                  style={{height:176, width:'100%', objectFit:'cover'}}
                />
                <div className="card-body">
                  <h3 className="fw-bold">{p.title}</h3>
                  <div className="text-sm muted" style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:6}}>
                    <span>{p.duration}</span>
                    <span style={{display:'inline-flex', alignItems:'center', gap:6}}>
                      <FaStar style={{color:'#f59e0b'}} /> {p.rating}
                    </span>
                  </div>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:10}}>
                    <div className="text-lg fw-bold">${p.price}</div>
                    <Link to="/packages" className="btn btn-outline text-sm">View Details</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl text-center">Why Choose Us</h2>
          <div className="mt-6 grid">
            <article className="card">
              <div className="card-body" style={{display:'flex', gap:12, alignItems:'flex-start'}}>
                <span style={{display:'inline-flex', width:44, height:44, borderRadius:'50%', background:'var(--elev)', alignItems:'center', justifyContent:'center'}}>
                  <FaCertificate />
                </span>
                <div>
                  <h3 className="text-lg fw-bold">Certified Guides</h3>
                  <p className="text-sm muted">Experienced, licensed guides for safe and insightful journeys.</p>
                </div>
              </div>
            </article>

            <article className="card">
              <div className="card-body" style={{display:'flex', gap:12, alignItems:'flex-start'}}>
                <span style={{display:'inline-flex', width:44, height:44, borderRadius:'50%', background:'var(--elev)', alignItems:'center', justifyContent:'center'}}>
                  <FaHeadset />
                </span>
                <div>
                  <h3 className="text-lg fw-bold">24/7 Support</h3>
                  <p className="text-sm muted">We’re here anytime before, during, and after your trip.</p>
                </div>
              </div>
            </article>

            <article className="card">
              <div className="card-body" style={{display:'flex', gap:12, alignItems:'flex-start'}}>
                <span style={{display:'inline-flex', width:44, height:44, borderRadius:'50%', background:'var(--elev)', alignItems:'center', justifyContent:'center'}}>
                  <FaDollarSign />
                </span>
                <div>
                  <h3 className="text-lg fw-bold">Affordable Prices</h3>
                  <p className="text-sm muted">Transparent pricing with excellent value and no hidden fees.</p>
                </div>
              </div>
            </article>

            <article className="card">
              <div className="card-body" style={{display:'flex', gap:12, alignItems:'flex-start'}}>
                <span style={{display:'inline-flex', width:44, height:44, borderRadius:'50%', background:'var(--elev)', alignItems:'center', justifyContent:'center'}}>
                  <FaUsers />
                </span>
                <div>
                  <h3 className="text-lg fw-bold">Trusted by Thousands</h3>
                  <p className="text-sm muted">Positive reviews and repeat travelers from around the world.</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Blog */}
        <div className="mt-12">
          <h2 className="text-xl text-center">Travel Blog</h2>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:8}}>
            <Link to="/blog" className="btn btn-outline text-sm">View All</Link>
          </div>
          <div className="mt-6 grid">
            {blogs.slice(0,3).map((b) => (
              <article key={b.id} className="card">
                <img
                  src={b.img}
                  alt={b.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e)=>{ e.currentTarget.src = 'https://placehold.co/800x500?text=Blog+Image'; }}
                  style={{height:176, width:'100%', objectFit:'cover'}}
                />
                <div className="card-body">
                  <h3 className="fw-bold">{b.title}</h3>
                  <p className="text-sm muted">{new Date(b.date).toLocaleDateString()}</p>
                  <p className="text-sm" style={{marginTop:6}}>{b.excerpt}</p>
                  <Link to={`/blog/${b.slug}`} className="btn btn-primary text-sm" style={{marginTop:12}}>Read More</Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <Testimonials data={testimonials} />

        {/* Partners / Airlines */}
        <div className="mt-12">
          <h2 className="text-xl text-center">Our Partners</h2>
          <div className="logo-grid logo-row" style={{marginTop:16}}>
            {partners.map(p => (
              <div key={p.id} className="logo">
                {/* Category Icon */}
                <span className="logo-icon" aria-hidden="true">
                  {p.type === 'airline' && <FaPlane />}
                  {p.type === 'hotel' && <FaHotel />}
                </span>
                <img src={p.logo} alt={p.name} loading="lazy" referrerPolicy="no-referrer" onError={(e)=>{ e.currentTarget.src = `https://placehold.co/140x40?text=${encodeURIComponent(p.name)}` }} />
                <div className="logo-name">{p.name}</div>
                {p.quote && <div className="logo-quote">“{p.quote}”</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 newsletter">
          <h2 className="text-xl text-center">Get our latest deals and updates</h2>
          <form onSubmit={(e)=>e.preventDefault()} style={{marginTop:12}}>
            <div className="news-sub">
              <input type="email" required placeholder="Enter your email" aria-label="Email" />
              <button className="btn btn-primary text-sm" type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
