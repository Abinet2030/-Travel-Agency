import { Link } from 'react-router-dom'
import { blogs } from '../data/mock'

export default function Blog() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl">Travel Blog</h1>
        <p className="mt-2 muted">Latest travel tips and destination guides.</p>
        <div className="mt-6 grid">
          {blogs.map((b) => (
            <article key={b.id} className="card">
              <img
                src={b.img}
                alt={b.title}
                loading="lazy"
                onError={(e)=>{ e.currentTarget.src = 'https://placehold.co/800x500?text=Blog+Image'; }}
                style={{height:200, width:'100%', objectFit:'cover'}}
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
    </section>
  )
}
