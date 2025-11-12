'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageSelector from './LanguageSelector'

export default function HomeNavbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [showTooltip, setShowTooltip] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isInfluencerPage = pathname === '/influencer'

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      if (scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Load Webflow script for navbar functionality
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js'
    script.integrity = 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0='
    script.crossOrigin = 'anonymous'
    document.body.appendChild(script)

    script.onload = () => {
      const webflowScript = document.createElement('script')
      webflowScript.src = '/js/behype.js'
      document.body.appendChild(webflowScript)
    }

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script)
    }
  }, [])

  const handleComingSoon = (e, type) => {
    e.preventDefault()
    setShowTooltip(type)
    setTimeout(() => setShowTooltip(''), 2000)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <link rel="stylesheet" href="/css/normalize.css" />
      <link rel="stylesheet" href="/css/components.css" />
      <link rel="stylesheet" href="/css/behype.css" />
      <link rel="stylesheet" href="/css/navbar-scroll.css" />
      <style jsx global>{`
        html, body {
          overflow-y: auto !important;
          overflow-x: hidden !important;
          height: auto !important;
          position: relative !important;
        }

        .coming-soon-tooltip {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          white-space: nowrap;
          z-index: 10000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          animation: fadeInUp 0.2s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        /* Force black navbar on influencer page */
        .behype_navbar.black-navbar {
          background: #000000 !important;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2) !important;
        }

        .behype_navbar.black-navbar .behype_nav-link {
          color: #FAFAF9 !important;
        }

        .behype_navbar.black-navbar .behype_nav-link:hover {
          color: #D4AF37 !important;
        }

        .behype_navbar.black-navbar .navbar_button {
          background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%) !important;
          color: #000000 !important;
          border: none !important;
        }

        .behype_navbar.black-navbar .navbar_button:hover {
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3) !important;
        }

        .behype_navbar.black-navbar .navbar_button-alternate {
          background: transparent !important;
          color: #D4AF37 !important;
          border: 1px solid rgba(212, 175, 55, 0.4) !important;
        }

        .behype_navbar.black-navbar .navbar_button-alternate:hover {
          background: rgba(212, 175, 55, 0.1) !important;
          border-color: #D4AF37 !important;
        }
      `}</style>

      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className={`behype_navbar w-nav ${isScrolled ? 'scrolled' : ''} ${isInfluencerPage ? 'black-navbar' : ''}`}>
        <div className="behype_navbar-container">
          <nav role="navigation" className="behype_nav w-nav-menu">
            <div className="links_container">
              <Link href="/offres" className="behype_nav-link w-nav-link">Tarifs</Link>
              <Link href="/testimonials" className="behype_nav-link w-nav-link">Témoignages</Link>
              <Link href="/influencer" className="behype_nav-link w-nav-link">Je suis influenceur</Link>
              <Link href="/calendly" className="behype_nav-link w-nav-link">Démo</Link>
            </div>
          </nav>
          <Link href="/" aria-current="page" className="behype_nav-logo w-inline-block w--current">
            <img src="/images/LOGO-BEHYPE-WHITE_1.webp" loading="lazy" width="124" sizes="(max-width: 479px) 100vw, 124px" alt="The white logo of Behype App" srcSet="/images/LOGO-BEHYPE-WHITE_1.webp 500w, /images/LOGO-BEHYPE-WHITE_1.webp 800w, /images/LOGO-BEHYPE-WHITE_1.webp 1080w, /images/LOGO-BEHYPE-WHITE_1.webp 2835w" className="behype_logo" />
          </Link>
          <div className="behype_nav-cta">
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <a
                href="#"
                className="navbar_button is-small w-inline-block"
                onClick={(e) => handleComingSoon(e, 'signup')}
                style={{ cursor: 'not-allowed', opacity: '0.9' }}
              >
                <div>S'inscrire</div>
              </a>
              {showTooltip === 'signup' && (
                <div className="coming-soon-tooltip">Bientôt disponible</div>
              )}
            </div>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <a
                href="#"
                className="navbar_button-alternate is-small w-inline-block"
                onClick={(e) => handleComingSoon(e, 'login')}
                style={{ cursor: 'not-allowed', opacity: '0.9' }}
              >
                <div>Se connecter</div>
              </a>
              {showTooltip === 'login' && (
                <div className="coming-soon-tooltip">Bientôt disponible</div>
              )}
            </div>
            <LanguageSelector />
            <div className="f-navigation-menu-button w-nav-button">
              <div className="icon w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
