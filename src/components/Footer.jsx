import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaLinkedinIn, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="site-footer" style={{borderTop: '1px solid var(--border)'}}>
      <div className="container" style={{padding: '24px 16px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12}}>
        {/* Copyright */}
        <p className="text-sm muted">© {new Date().getFullYear()} Travel Agency. All rights reserved.</p>

        {/* Social Links */}
        <nav className="footer-group social">
          <a className="social-link facebook" href="#" aria-label="Facebook" title="Facebook"><FaFacebookF /></a>
          <a className="social-link instagram" href="#" aria-label="Instagram" title="Instagram"><FaInstagram /></a>
          <a className="social-link youtube" href="#" aria-label="YouTube" title="YouTube"><FaYoutube /></a>
          <a className="social-link tiktok" href="#" aria-label="TikTok" title="TikTok"><FaTiktok /></a>
          <a className="social-link linkedin" href="#" aria-label="LinkedIn" title="LinkedIn"><FaLinkedinIn /></a>
        </nav>

        {/* Payments + Email */}
        <div className="footer-group" style={{gap: 8}}>
          <div className="payments" aria-label="Accepted payment methods">
            <span title="Visa"><FaCcVisa /></span>
            <span title="MasterCard"><FaCcMastercard /></span>
            <span title="PayPal"><FaCcPaypal /></span>
          </div>
          <a className="text-sm" href="mailto:info@travelagency.com">info@travelagency.com</a>
        </div>
      </div>
    </footer>
  )
}
