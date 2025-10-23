import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onSearch?.(q)
  }

  return (
    <form onSubmit={submit} className="searchbar">
      <FiSearch style={{ color: 'var(--muted)', marginLeft: 4 }} />
      <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search destinations, packages..." />
      <button className="btn btn-primary text-sm">Search</button>
    </form>
  )
}
