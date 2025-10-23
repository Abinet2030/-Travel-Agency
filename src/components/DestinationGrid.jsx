import { useMemo, useState } from 'react'

export default function DestinationGrid({ data = [] }) {
  const [type, setType] = useState('All')
  const [maxPrice, setMaxPrice] = useState('')
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    return data.filter(d => (
      (type === 'All' || d.type === type) &&
      (!maxPrice || d.price <= Number(maxPrice)) &&
      (d.name.toLowerCase().includes(q.toLowerCase()))
    ))
  }, [data, type, maxPrice, q])

  const types = useMemo(() => ['All', ...Array.from(new Set(data.map(d => d.type)))], [data])

  return (
    <div className="mt-6">
      <div style={{display:'flex', flexWrap:'wrap', alignItems:'end', gap:12}}>
        <div className="field" style={{minWidth: 150}}>
          <label className="label">Type</label>
          <select value={type} onChange={(e)=>setType(e.target.value)} className="select">
            {types.map(t=> <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="field" style={{minWidth: 150}}>
          <label className="label">Max Price</label>
          <input value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)} type="number" placeholder="e.g. 1600" className="input" />
        </div>
        <div className="field" style={{flex:1, minWidth: 200}}>
          <label className="label">Search</label>
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Destination name" className="input" />
        </div>
      </div>

      <div className="mt-6 grid">
        {filtered.map((d)=> (
          <article key={d.id} className="card">
            <img
              src={d.img}
              alt={d.name}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e)=>{ e.currentTarget.src = 'https://placehold.co/800x500?text=Destination'; }}
              style={{height:176, width:'100%', objectFit:'cover'}}
            />
            <div className="card-body">
              <h3 className="fw-bold">{d.name}</h3>
              <p className="text-sm muted">{d.type} • ${d.price}</p>
              <button className="btn btn-primary text-sm" style={{marginTop:12}}>View</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
