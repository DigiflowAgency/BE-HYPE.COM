'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="footer" style={{ background: '#0f172a', color: 'white', padding: '80px 0 40px' }}>
        <div className="footer-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px', marginBottom: '60px' }}>
            <div className="footer-brand" style={{ maxWidth: '320px' }}>
              <img src="/images/LOGO-BEHYPE-WHITE_1.webp" alt="BEHYPE Logo" style={{ width: '140px', marginBottom: '16px' }} />
              <p className="footer-tagline" style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '24px', fontSize: '15px' }}>
                La plateforme N°1 qui connecte restaurants et influenceurs food
              </p>
              <div className="footer-social" style={{ display: 'flex', gap: '12px' }}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', transition: 'all 0.2s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', transition: 'all 0.2s' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '20px', color: 'white' }}>Plateforme</h4>
              <Link href="/offres" style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', marginBottom: '12px', fontSize: '15px', transition: 'color 0.2s' }}>Tarifs</Link>
              <Link href="/testimonials" style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', marginBottom: '12px', fontSize: '15px', transition: 'color 0.2s' }}>Témoignages</Link>
              <Link href="/influencer" style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', marginBottom: '12px', fontSize: '15px', transition: 'color 0.2s' }}>Pour les influenceurs</Link>
              <Link href="/calendly" style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', marginBottom: '12px', fontSize: '15px', transition: 'color 0.2s' }}>Demander une démo</Link>
            </div>

            <div className="footer-links">
              <h4 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '20px', color: 'white' }}>Entreprise</h4>
              <Link href="/about" prefetch={false} style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', marginBottom: '12px', fontSize: '15px', transition: 'color 0.2s' }}>À propos</Link>
              <Link href="/contact" prefetch={false} style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', marginBottom: '12px', fontSize: '15px', transition: 'color 0.2s' }}>Contact</Link>
              <Link href="/careers" prefetch={false} style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', marginBottom: '12px', fontSize: '15px', transition: 'color 0.2s' }}>Carrières</Link>
              <Link href="/blog" prefetch={false} style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', marginBottom: '12px', fontSize: '15px', transition: 'color 0.2s' }}>Blog</Link>
            </div>

            <div className="footer-links">
              <h4 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '20px', color: 'white' }}>Légal</h4>
              <Link href="/privacy" prefetch={false} style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', marginBottom: '12px', fontSize: '15px', transition: 'color 0.2s' }}>Confidentialité</Link>
              <Link href="/terms" prefetch={false} style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', marginBottom: '12px', fontSize: '15px', transition: 'color 0.2s' }}>Conditions</Link>
              <Link href="/cookies" prefetch={false} style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', marginBottom: '12px', fontSize: '15px', transition: 'color 0.2s' }}>Cookies</Link>
            </div>
          </div>

          <div className="footer-bottom" style={{ paddingTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
            <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>&copy; 2025 BE HYPE Tous droits réservés</p>
            <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
              Site web réalisé par <a href="https://digiflow-agency.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 600 }}>DIGIFLOW AGENCY</a> (digiflow-agency.fr)
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background: #0f172a;
          color: white;
          padding: 80px 0 40px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-brand {
          max-width: 320px;
        }

        .footer-brand img {
          width: 140px;
          margin-bottom: 16px;
        }

        .footer-tagline {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 24px;
          font-size: 15px;
        }

        .footer-social {
          display: flex;
          gap: 12px;
        }

        .footer-social a {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          transition: all 0.2s;
        }

        .footer-social a:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          transform: translateY(-2px);
        }

        .footer-links h4 {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 20px;
          color: white;
        }

        .footer-links a {
          display: block;
          color: #94a3b8;
          text-decoration: none;
          margin-bottom: 12px;
          font-size: 15px;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: #3b82f6;
        }

        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
        }

        .footer-bottom p {
          color: #64748b;
          font-size: 14px;
          margin: 0;
        }

        .footer-bottom a {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 600;
        }

        .footer-bottom a:hover {
          text-decoration: underline;
        }

        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .footer {
            padding: 60px 0 30px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}
