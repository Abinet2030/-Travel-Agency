import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPlane } from 'react-icons/fa'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-media">
        <img className="hero-img" src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1920&auto=format&fit=crop" alt="Travel hero" />
        <div className="hero-overlay" />
      </div>
      <div className="container hero-inner">
        <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="hero-title">Your journey begins here</motion.h1>
        <p className="hero-sub">Discover destinations, compare tours, and book in minutes with our modern platform.</p>
        <div className="hero-actions">
          <Link to="/packages" className="btn btn-primary">
            <FaPlane style={{marginRight:8}} /> Explore Packages
          </Link>
          <Link to="/destinations" className="btn btn-outline">Top Destinations</Link>
        </div>
      </div>
    </div>
  )
}
