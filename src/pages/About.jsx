import { FaGlobeAfrica, FaHandshake, FaShieldAlt, FaAward, FaUsers, FaClock } from 'react-icons/fa'

export default function About() {
  return (
    <section className="section">
      <div className="container">
        {/* Intro */}
        <h1 className="text-3xl">About Us</h1>
        <p className="mt-2 muted">We are a customer-first travel agency dedicated to designing safe, authentic, and value-driven journeys across Ethiopia and the world.</p>

        {/* Mission & Vision */}
        <div className="grid mt-12">
          <article className="card">
            <div className="card-body" style={{display:'flex', gap:12}}>
              <span style={{display:'inline-flex', width:44, height:44, borderRadius:'50%', background:'var(--elev)', alignItems:'center', justifyContent:'center'}}>
                <FaGlobeAfrica />
              </span>
              <div>
                <h2 className="text-xl">Our Mission</h2>
                <p className="text-sm muted">To connect travelers with meaningful experiences through responsible tourism, local expertise, and seamless service.</p>
              </div>
            </div>
          </article>
          <article className="card">
            <div className="card-body" style={{display:'flex', gap:12}}>
              <span style={{display:'inline-flex', width:44, height:44, borderRadius:'50%', background:'var(--elev)', alignItems:'center', justifyContent:'center'}}>
                <FaHandshake />
              </span>
              <div>
                <h2 className="text-xl">Our Promise</h2>
                <p className="text-sm muted">Transparent pricing, vetted partners, and 24/7 assistance—before, during, and after your trip.</p>
              </div>
            </div>
          </article>
        </div>

        {/* Values */}
        <h2 className="text-2xl mt-12">What We Stand For</h2>
        <div className="grid mt-6">
          <article className="card">
            <div className="card-body">
              <h3 className="text-lg fw-bold" style={{display:'flex', alignItems:'center', gap:8}}><FaShieldAlt /> Safety & Reliability</h3>
              <p className="text-sm muted">Certified guides and insured transport for every itinerary.</p>
            </div>
          </article>
          <article className="card">
            <div className="card-body">
              <h3 className="text-lg fw-bold" style={{display:'flex', alignItems:'center', gap:8}}><FaAward /> Quality & Value</h3>
              <p className="text-sm muted">Handpicked hotels and experiences that balance comfort and cost.</p>
            </div>
          </article>
          <article className="card">
            <div className="card-body">
              <h3 className="text-lg fw-bold" style={{display:'flex', alignItems:'center', gap:8}}><FaUsers /> Local Expertise</h3>
              <p className="text-sm muted">A passionate team with on-the-ground knowledge across regions.</p>
            </div>
          </article>
        </div>

        {/* Highlights / Stats */}
        <div className="grid mt-12 grid-4">
          <div className="card"><div className="card-body" style={{textAlign:'center'}}>
            <div className="text-2xl fw-bold">10K+</div>
            <div className="text-sm muted">Happy Travelers</div>
          </div></div>
          <div className="card"><div className="card-body" style={{textAlign:'center'}}>
            <div className="text-2xl fw-bold">120+</div>
            <div className="text-sm muted">Destinations</div>
          </div></div>
          <div className="card"><div className="card-body" style={{textAlign:'center'}}>
            <div className="text-2xl fw-bold">4.9/5</div>
            <div className="text-sm muted">Average Rating</div>
          </div></div>
          <div className="card"><div className="card-body" style={{textAlign:'center'}}>
            <div className="text-2xl fw-bold" style={{display:'inline-flex', alignItems:'center', gap:6}}><FaClock /> 24/7</div>
            <div className="text-sm muted">Customer Support</div>
          </div></div>
        </div>

        {/* Certifications & Partners */}
        <div className="card mt-12">
          <div className="card-body">
            <h2 className="text-xl">Accreditations & Trusted Partners</h2>
            <p className="text-sm muted" style={{marginTop:8}}>We collaborate with globally recognized airlines and hotel groups, and adhere to industry best practices for safety and sustainability.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <a className="btn btn-primary" href="/contact">Talk to a Travel Expert</a>
        </div>
      </div>
    </section>
  )
}
