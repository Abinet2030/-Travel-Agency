import { FiStar } from 'react-icons/fi'

export default function PackageCard({ item }) {
  return (
    <article className="card">
      <img src={item.img} style={{height:176, width:'100%', objectFit:'cover'}} alt={item.title} />
      <div className="card-body">
        <h3 className="fw-bold">{item.title}</h3>
        <p className="text-sm muted">{item.duration} • ${item.price}</p>
        <div style={{marginTop:8, display:'flex', alignItems:'center', gap:6, color:'#f59e0b'}}>
          {Array.from({length:5}).map((_,i)=> (
            <FiStar key={i} style={{fill: i < Math.round(item.rating) ? '#f59e0b' : 'transparent'}} />
          ))}
          <span className="text-sm muted">{item.rating.toFixed(1)}</span>
        </div>
        <button className="btn btn-primary text-sm" style={{marginTop:12}}>Book Now</button>
      </div>
    </article>
  )
}
