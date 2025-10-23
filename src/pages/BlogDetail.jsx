import { useParams, Link } from 'react-router-dom'
import { blogs } from '../data/mock'

export default function BlogDetail() {
  const { slug } = useParams()
  const post = blogs.find(b => b.slug === slug)

  if (!post) {
    return (
      <section className="section">
        <div className="container">
          <h1 className="text-3xl">Article not found</h1>
          <p className="mt-2 muted">The article you are looking for does not exist.</p>
          <Link to="/blog" className="btn btn-outline" style={{marginTop:12}}>Back to Blog</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container">
        <Link to="/blog" className="btn btn-outline text-sm">← Back</Link>
        <h1 className="text-3xl" style={{marginTop:12}}>{post.title}</h1>
        <p className="text-sm muted" style={{marginTop:4}}>{new Date(post.date).toLocaleDateString()}</p>
        <img
          src={post.img}
          alt={post.title}
          loading="lazy"
          onError={(e)=>{ e.currentTarget.src = 'https://placehold.co/1200x600?text=Blog+Image'; }}
          style={{marginTop:16, borderRadius:12, width:'100%', maxHeight:420, objectFit:'cover'}}
        />
        <p className="mt-6 text-lg" style={{lineHeight:1.7}}>{post.content}</p>
      </div>
    </section>
  )
}
