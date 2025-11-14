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
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false)
  const isInfluencerPage = pathname === '/influencer'

  const openCalendlyModal = () => {
    setIsCalendlyModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeCalendlyModal = () => {
    setIsCalendlyModalOpen(false)
    document.body.style.overflow = ''
  }

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

  // Mobile menu functionality
  useEffect(() => {
    const openMenu = () => {
      const menu = document.getElementById('bh-mobile-menu')
      const overlay = document.getElementById('bh-nav-overlay')
      const closeBtn = document.getElementById('bh-menu-close')
      const burgerBtn = document.getElementById('bh-burger-btn')
      const burgerLines = document.getElementById('bh-burger-lines')

      if (menu && overlay && closeBtn && burgerBtn && burgerLines) {
        menu.classList.add('open')
        overlay.classList.add('open')
        closeBtn.style.display = 'flex'
        burgerBtn.style.visibility = 'hidden'
        burgerLines.style.opacity = '0'
        document.body.style.overflow = 'hidden'
        setIsMobileMenuOpen(true)
      }
    }

    const closeMenu = () => {
      const menu = document.getElementById('bh-mobile-menu')
      const overlay = document.getElementById('bh-nav-overlay')
      const closeBtn = document.getElementById('bh-menu-close')
      const burgerBtn = document.getElementById('bh-burger-btn')
      const burgerLines = document.getElementById('bh-burger-lines')

      if (menu && overlay && closeBtn && burgerBtn && burgerLines) {
        menu.classList.remove('open')
        overlay.classList.remove('open')
        closeBtn.style.display = 'none'
        burgerBtn.style.visibility = 'visible'
        burgerLines.style.opacity = '1'
        document.body.style.overflow = ''
        setIsMobileMenuOpen(false)
      }
    }

    // Event listeners
    const burgerBtn = document.getElementById('bh-burger-btn')
    const closeBtn = document.getElementById('bh-menu-close')
    const overlay = document.getElementById('bh-nav-overlay')
    const logoMenu = document.getElementById('bh-logo-menu')
    const logoMain = document.getElementById('bh-logo-main')

    if (burgerBtn) burgerBtn.onclick = openMenu
    if (closeBtn) closeBtn.onclick = closeMenu
    if (overlay) overlay.onclick = closeMenu

    // Close menu after clicking links
    const links = document.querySelectorAll('.bh-navbar-mobile__link, .bh-navbar-mobile__btn')
    links.forEach(link => {
      link.onclick = closeMenu
    })

    if (logoMenu) logoMenu.onclick = () => { closeMenu() }
    if (logoMain) logoMain.onclick = () => { closeMenu() }

    // Swipe up gesture for mobile UX
    const menu = document.getElementById('bh-mobile-menu')
    let startY = null

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) startY = e.touches[0].clientY
    }

    const handleTouchEnd = (e) => {
      if (startY && e.changedTouches[0].clientY < startY - 80) {
        closeMenu()
      }
      startY = null
    }

    if (menu) {
      menu.addEventListener('touchstart', handleTouchStart)
      menu.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      if (burgerBtn) burgerBtn.onclick = null
      if (closeBtn) closeBtn.onclick = null
      if (overlay) overlay.onclick = null
      if (logoMenu) logoMenu.onclick = null
      if (logoMain) logoMain.onclick = null
      if (menu) {
        menu.removeEventListener('touchstart', handleTouchStart)
        menu.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [])

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

        /* Custom Mobile Menu Styles */
        .bh-navbar-mobile {
          width: 100%;
          background: #2465f7;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          position: relative;
          z-index: 120;
        }

        .bh-navbar-mobile__logo {
          height: 38px;
          width: auto;
          cursor: pointer;
          user-select: none;
        }

        .bh-navbar-mobile__burger {
          width: 48px;
          height: 48px;
          border: 2px solid #fff;
          background: transparent;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background .2s;
          z-index: 130;
          position: relative;
        }

        .bh-navbar-mobile__burger:active {
          background: #2d3691;
          border-color: #b1baf6;
        }

        .bh-navbar-mobile__burger-lines {
          display: flex;
          flex-direction: column;
          gap: 5px;
          transition: opacity .18s;
        }

        .bh-navbar-mobile__burger-line {
          width: 26px;
          height: 3px;
          background: #fff;
          border-radius: 3px;
          transition: all .24s cubic-bezier(.85,.09,.28,.98);
        }

        .bh-navbar-mobile__close {
          display: none;
          position: absolute;
          top: 10px;
          right: 10px;
          width: 38px;
          height: 38px;
          background: rgba(36,101,247, 0.12);
          border-radius: 10px;
          border: 2px solid #fff;
          align-items: center;
          justify-content: center;
          z-index: 200;
          cursor: pointer;
          transition: background .22s;
        }

        .bh-navbar-mobile__close svg {
          width: 22px;
          height: 22px;
          stroke: #fff;
          stroke-width: 2.6px;
        }

        .bh-navbar-mobile__close:active {
          background: #19215c;
          border-color: #b1baf6;
        }

        .bh-navbar-mobile__overlay {
          display: none;
          position: fixed;
          z-index: 120;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(28,36,76,0.20);
          backdrop-filter: blur(1.5px);
          opacity: 0;
          transition: opacity .26s cubic-bezier(.85,.09,.28,.98);
          pointer-events: none;
        }

        .bh-navbar-mobile__overlay.open {
          display: block;
          opacity: 1;
          pointer-events: all;
        }

        .bh-navbar-mobile__menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #2465f7;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 38px 0 30px 0;
          z-index: 150;
          box-shadow: 0 4px 34px 0 rgba(20,32,110,.13);
          transform: translateY(-70px) scale(.98);
          opacity: 0;
          pointer-events: none;
          transition: all .35s cubic-bezier(.83,.12,.18,1.05);
        }

        .bh-navbar-mobile__menu.open {
          transform: translateY(0) scale(1);
          opacity: 1;
          pointer-events: all;
        }

        .bh-navbar-mobile__links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 92vw;
          margin-top: 45px;
          margin-bottom: 38px;
        }

        .bh-navbar-mobile__link {
          color: #fff;
          font-size: 1.23rem;
          font-weight: 500;
          text-decoration: none;
          background: rgba(255,255,255,0.10);
          border-radius: 14px;
          padding: 15px 0;
          text-align: center;
          transition: background .15s, color .13s;
          letter-spacing: 0.01em;
        }

        .bh-navbar-mobile__link:active,
        .bh-navbar-mobile__link:hover {
          background: #163aa6;
          color: #b5cbfa;
        }

        .bh-navbar-mobile__btns {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 92vw;
        }

        .bh-navbar-mobile__btn {
          border: none;
          font-size: 1.15rem;
          font-weight: 600;
          border-radius: 14px;
          padding: 14px 0;
          text-align: center;
          cursor: pointer;
          transition: background .16s, color .14s;
          outline: none;
          text-decoration: none;
          display: block;
        }

        .bh-navbar-mobile__btn.subscribe {
          background: #fff;
          color: #2465f7;
        }

        .bh-navbar-mobile__btn.subscribe:hover {
          background: #b5cbfa;
          color: #1d2470;
        }

        .bh-navbar-mobile__btn.demo {
          background: #18123b;
          color: #fff;
          border: 2px solid #fff;
        }

        .bh-navbar-mobile__btn.demo:hover {
          background: #fff;
          color: #163aa6;
          border: 2px solid #163aa6;
        }

        .bh-navbar-mobile__logo-menu {
          height: 48px;
          width: auto;
          margin-bottom: 5px;
          margin-top: -6px;
          cursor: pointer;
          user-select: none;
          transition: opacity .15s;
        }

        @media (min-width: 900px) {
          .bh-navbar-mobile {
            display: none !important;
          }
        }

        @media (max-width: 899px) {
          .behype_navbar {
            display: none !important;
          }
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

        /* Active page indicator - PC only */
        @media (min-width: 900px) {
          .behype_nav-link.active-page {
            color: #3b82f6 !important;
            background: white;
            padding: 8px 16px;
            border-radius: 50px;
          }

          .behype_navbar.black-navbar .behype_nav-link.active-page {
            color: #3b82f6 !important;
            background: white;
          }
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

        /* Navbar Layout: Links left, Logo center, CTA right */
        @media (min-width: 900px) {
          .behype_navbar-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
          }

          .behype_nav {
            position: absolute;
            left: 32px;
          }

          .behype_nav-logo {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
          }

          .behype_nav-cta {
            position: absolute;
            right: 32px;
            display: flex;
            align-items: center;
            gap: 12px;
          }
        }

        /* Floating Demo Button - PC only */
        @media (min-width: 900px) {
          .floating-demo-button {
            position: fixed;
            bottom: 32px;
            right: 32px;
            z-index: 9999;
            background: linear-gradient(135deg, #2465f7 0%, #1d50d6 100%);
            color: white;
            padding: 16px 28px;
            border-radius: 50px;
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 8px 24px rgba(36, 101, 247, 0.4);
            transition: all 0.3s ease;
            animation: pulse 2s infinite;
            cursor: pointer;
          }

          .floating-demo-button:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 32px rgba(36, 101, 247, 0.5);
            animation: none;
          }

          .floating-demo-button svg {
            width: 20px;
            height: 20px;
          }

          @keyframes pulse {
            0%, 100% {
              box-shadow: 0 8px 24px rgba(36, 101, 247, 0.4);
            }
            50% {
              box-shadow: 0 8px 32px rgba(36, 101, 247, 0.7), 0 0 0 8px rgba(36, 101, 247, 0.1);
            }
          }
        }

        /* Hide floating button on mobile */
        @media (max-width: 899px) {
          .floating-demo-button {
            display: none !important;
          }
        }

        /* Hide burger menu on desktop */
        @media (min-width: 900px) {
          .f-navigation-menu-button {
            display: none !important;
          }
        }

        /* Calendly Popup Modal */
        .calendly-modal {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.7);
          z-index: 999999;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(5px);
        }

        .calendly-modal.active {
          display: flex;
        }

        .calendly-modal-content {
          position: relative;
          width: 90%;
          max-width: 1000px;
          height: 90vh;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .calendly-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 40px;
          height: 40px;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          border-radius: 50%;
          color: white;
          font-size: 24px;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .calendly-close:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: scale(1.1);
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
              <Link href="/offres" className={`behype_nav-link w-nav-link ${pathname === '/offres' ? 'active-page' : ''}`}>Tarifs</Link>
              <Link href="/testimonials" className={`behype_nav-link w-nav-link ${pathname === '/testimonials' ? 'active-page' : ''}`}>Témoignages</Link>
              <Link href="/influencer" className={`behype_nav-link w-nav-link ${pathname === '/influencer' ? 'active-page' : ''}`}>Je suis influenceur</Link>
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

      {/* Custom Mobile Menu */}
      <div className="bh-navbar-mobile">
        <Link href="/">
          <img
            src="/images/LOGO-BEHYPE-WHITE_1.webp"
            alt="BeHype Logo"
            className="bh-navbar-mobile__logo"
            id="bh-logo-main"
          />
        </Link>
        <button
          className="bh-navbar-mobile__burger"
          id="bh-burger-btn"
          aria-label="Ouvrir le menu"
        >
          <span className="bh-navbar-mobile__burger-lines" id="bh-burger-lines">
            <span className="bh-navbar-mobile__burger-line"></span>
            <span className="bh-navbar-mobile__burger-line"></span>
            <span className="bh-navbar-mobile__burger-line"></span>
          </span>
        </button>
      </div>

      <div className="bh-navbar-mobile__overlay" id="bh-nav-overlay"></div>

      <nav className="bh-navbar-mobile__menu" id="bh-mobile-menu" aria-label="Menu principal mobile">
        <button
          className="bh-navbar-mobile__close"
          id="bh-menu-close"
          aria-label="Fermer le menu"
        >
          <svg viewBox="0 0 24 24">
            <line x1="6" y1="6" x2="18" y2="18"></line>
            <line x1="6" y1="18" x2="18" y2="6"></line>
          </svg>
        </button>

        <Link href="/">
          <img
            src="/images/LOGO-BEHYPE-WHITE_1.webp"
            alt="BeHype Logo"
            className="bh-navbar-mobile__logo-menu"
            id="bh-logo-menu"
          />
        </Link>

        <div className="bh-navbar-mobile__links">
          <Link href="/" className="bh-navbar-mobile__link">Accueil</Link>
          <Link href="/offres" className="bh-navbar-mobile__link">Tarifs</Link>
          <Link href="/testimonials" className="bh-navbar-mobile__link">Témoignages</Link>
          <Link href="/influencer" className="bh-navbar-mobile__link">Je suis influenceur</Link>
        </div>

        <div className="bh-navbar-mobile__btns">
          <div style={{ position: 'relative', width: '100%' }}>
            <a
              href="#"
              className="bh-navbar-mobile__btn subscribe"
              onClick={(e) => handleComingSoon(e, 'signup-mobile')}
              style={{ cursor: 'not-allowed', opacity: '0.9' }}
            >
              S'inscrire
            </a>
            {showTooltip === 'signup-mobile' && (
              <div className="coming-soon-tooltip">Bientôt disponible</div>
            )}
          </div>
          <Link href="/calendly" className="bh-navbar-mobile__btn demo">Démo</Link>
        </div>
      </nav>

      {/* Floating Demo Button - PC Only */}
      <button onClick={openCalendlyModal} className="floating-demo-button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
          <polyline points="10 17 15 12 10 7" />
          <line x1="15" y1="12" x2="3" y2="12" />
        </svg>
        Demander une démo
      </button>

      {/* Calendly Popup Modal */}
      {isCalendlyModalOpen && (
        <div className={`calendly-modal ${isCalendlyModalOpen ? 'active' : ''}`} onClick={closeCalendlyModal}>
          <div className="calendly-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="calendly-close" onClick={closeCalendlyModal}>
              ×
            </button>
            <iframe
              src="https://calendly.com/contact-behype/15min"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      )}
    </>
  )
}
