'use client'

import { useState, useEffect, useRef } from 'react'
import HomeNavbar from '../components/HomeNavbar'
import Footer from '../components/Footer'

export default function Influencer() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.title = "Expériences VIP pour Influenceurs - BEHYPE"
    setIsLoading(false)

    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Load translation scripts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = resolve
        script.onerror = reject
        document.body.appendChild(script)
      })
    }

    // Load all necessary scripts for translations and menu
    const loadScripts = async () => {
      try {
        await loadScript('/js/complete-translations.js')
        await loadScript('/js/language-selector.js')
      } catch (error) {
        console.error('Error loading scripts:', error)
      }
    }

    loadScripts()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const creators = [
    {
      name: 'Emma Aou',
      handle: '@emma_aou',
      followers: '14K',
      image: 'https://image-flow.fr/uploads/emma-aou-e3b8143b-be5f-4fd2-a590-f6349ab86a30.webp',
      views: '2M',
      collabs: '+50',
      location: 'Paris, France'
    },
    {
      name: 'Local Food',
      handle: '@localfoodmarseille',
      followers: '145K',
      image: 'https://image-flow.fr/uploads/localfood-logo-1ee83abb-961a-4dc2-a754-7460dbdbd146.webp',
      views: '10M',
      collabs: '+100',
      location: 'Marseille, France'
    },
    {
      name: 'La Mode Aixoise',
      handle: '@lamodeaixoise',
      followers: '148K',
      image: 'https://image-flow.fr/uploads/lamodeaixoise-1d06f5b6-b7f4-4807-8983-e46513c9d924.webp',
      views: '5M',
      collabs: '+50',
      location: 'Aix-en-Provence, France'
    },
    {
      name: 'Dounia',
      handle: '@dounia_kmr',
      followers: '15K',
      image: '/images/downloadgram.org_467456076_18259712422252491_8445036074561393020_n_1.avif',
      views: '5M',
      collabs: '+50',
      location: 'Lyon, France'
    }
  ]

  const privileges = [
    {
      title: 'Accès Prioritaire',
      description: 'Découvrez en avant-première les nouvelles collaborations avec les lieux les plus prestigieux et exclusifs.',
      icon: 'priority'
    },
    {
      title: 'Conciergerie Dédiée',
      description: 'Une équipe à votre écoute 7j/7 pour répondre à toutes vos demandes et faciliter vos expériences.',
      icon: 'concierge'
    },
    {
      title: 'Gifting Premium',
      description: 'Profitez d\'expériences offertes dans des établissements d\'exception pour créer du contenu authentique.',
      icon: 'negotiation'
    },
    {
      title: 'Visibilité Amplifiée',
      description: 'Boostez votre notoriété en collaborant avec les marques et lieux les plus prestigieux du monde.',
      icon: 'exclusive'
    }
  ]

  if (isLoading) {
    return (
      <div style={{ background: '#000000', minHeight: '100vh' }}>
        <style jsx global>{`
          body { background: #000000 !important; }
        `}</style>
      </div>
    )
  }

  return (
    <div className="page">
      <HomeNavbar />

      {/* Hero Luxueux */}
      <section className="hero">
        <div className="hero-gradient"></div>
        <div className="hero-shimmer"></div>

        <div className="hero-content">
          <div className="exclusive-badge">
            <span className="badge-icon">✦</span>
            <span>EXCLUSIVE ACCESS</span>
            <span className="badge-icon">✦</span>
          </div>

          <h1 className="hero-title">
            Où les influenceurs<br/>
            & <span className="gold-gradient">lieux d'exception</span> se connectent
          </h1>

          <p className="hero-subtitle">
            Accédez à des expériences de luxe exclusives et boostez votre visibilité<br/>
            auprès des établissements les plus prestigieux
          </p>

          <div className="hero-cta">
            <a
              href="https://onelink.to/qpqfep"
              className="btn-luxury"
            >
              <span className="btn-shine"></span>
              <span className="btn-text">Rejoindre la Communauté</span>
            </a>
            <p className="cta-subtitle">Expériences exclusives • Visibilité premium</p>
          </div>

          {/* Luxury Stats */}
          <div className="luxury-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Lieux d'Exception</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">3K+</div>
              <div className="stat-label">Créateurs Actifs</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Expériences Offertes</div>
            </div>
          </div>
        </div>

        {/* Floating Prestige Badges */}
        <div className="prestige-badges">
          <div className="prestige-badge" style={{ top: '20%', left: '10%', animationDelay: '0s' }}>
            <div className="badge-glow"></div>
            Luxury Venues
          </div>
          <div className="prestige-badge" style={{ top: '30%', right: '12%', animationDelay: '1s' }}>
            <div className="badge-glow"></div>
            Exclusive Access
          </div>
          <div className="prestige-badge" style={{ bottom: '25%', left: '8%', animationDelay: '2s' }}>
            <div className="badge-glow"></div>
            Premium Gifting
          </div>
        </div>
      </section>

      {/* Privilèges VIP */}
      <section className="privileges">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <span className="label-line"></span>
              <span>VOS PRIVILÈGES</span>
              <span className="label-line"></span>
            </div>
            <h2 className="section-title">
              Un service <span className="gold-text">d'exception</span><br/>
              pour des créateurs d'exception
            </h2>
            <p className="section-description">
              Nous traitons chaque collaboration comme une expérience unique,<br/>
              avec le niveau de service que vous méritez.
            </p>
          </div>

          <div className="privileges-grid">
            {privileges.map((privilege, i) => (
              <div key={i} className="privilege-card">
                <div className="privilege-number">{String(i + 1).padStart(2, '0')}</div>
                <div className="privilege-icon-wrapper">
                  <div className="privilege-icon-glow"></div>
                  {privilege.icon === 'priority' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {privilege.icon === 'concierge' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="18" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  )}
                  {privilege.icon === 'negotiation' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                  {privilege.icon === 'exclusive' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <h3 className="privilege-title">{privilege.title}</h3>
                <p className="privilege-description">{privilege.description}</p>
                <div className="privilege-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expérience Luxury */}
      <section className="luxury-experience">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              De l'inscription à la collaboration,<br/>
              une expérience <span className="gold-text">sans friction</span>
            </h2>
          </div>

          <div className="experience-flow">
            <div className="flow-item">
              <div className="flow-icon">
                <div className="icon-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3>Candidature Sélective</h3>
              <p>Votre profil est analysé avec soin. Nous privilégions la qualité à la quantité pour garantir les meilleures collaborations.</p>
            </div>

            <div className="flow-divider">
              <div className="divider-line"></div>
              <div className="divider-dot"></div>
            </div>

            <div className="flow-item">
              <div className="flow-icon">
                <div className="icon-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3>Mise en Relation Premium</h3>
              <p>Accédez à un catalogue exclusif d'établissements prestigieux, triés selon vos préférences et votre audience.</p>
            </div>

            <div className="flow-divider">
              <div className="divider-line"></div>
              <div className="divider-dot"></div>
            </div>

            <div className="flow-item">
              <div className="flow-icon">
                <div className="icon-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3>Création sur Mesure</h3>
              <p>Bénéficiez d'une expérience exceptionnelle et créez un contenu authentique qui résonne avec votre communauté.</p>
            </div>

            <div className="flow-divider">
              <div className="divider-line"></div>
              <div className="divider-dot"></div>
            </div>

            <div className="flow-item">
              <div className="flow-icon">
                <div className="icon-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                  </svg>
                </div>
              </div>
              <h3>Visibilité Maximale</h3>
              <p>Publiez votre contenu authentique et bénéficiez d'une exposition auprès d'une audience engagée. Croissance garantie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Creators */}
      <section className="elite-creators">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <span className="label-line"></span>
              <span>MEMBRES DE L'ÉLITE</span>
              <span className="label-line"></span>
            </div>
            <h2 className="section-title">
              Rejoignez les créateurs qui ont fait<br/>
              le choix de <span className="gold-text">l'excellence</span>
            </h2>
          </div>

          <div className="elite-grid">
            {creators.map((creator, i) => (
              <div key={i} className="elite-card">
                <div className="elite-card-inner">
                  <div className="elite-image">
                    <div className="image-overlay"></div>
                    <div className="image-border"></div>
                    <img src={creator.image} alt={creator.name} loading="lazy" decoding="async" />
                    <div className="elite-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="elite-content">
                    <div className="elite-header">
                      <div>
                        <h3 className="elite-name">{creator.name}</h3>
                        <p className="elite-handle">{creator.handle}</p>
                        <p className="elite-location">{creator.location}</p>
                      </div>
                    </div>
                    <div className="elite-stats">
                      <div className="elite-stat">
                        <div className="stat-number">{creator.followers}</div>
                        <div className="stat-text">Audience</div>
                      </div>
                      <div className="elite-stat">
                        <div className="stat-number">{creator.collabs}</div>
                        <div className="stat-text">Collaborations</div>
                      </div>
                      <div className="elite-stat highlight">
                        <div className="stat-number gold-text">{creator.views}</div>
                        <div className="stat-text">Vues cumulées</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Luxury */}
      <section className="final-cta-luxury">
        <div className="cta-background">
          <div className="cta-gradient"></div>
          <div className="cta-shimmer"></div>
        </div>
        <div className="container">
          <div className="cta-content-luxury">
            <div className="cta-ornament top">✦</div>
            <h2 className="cta-title">
              L'excellence vous attend
            </h2>
            <p className="cta-description">
              Franchissez les portes d'un monde où chaque collaboration<br/>
              est une expérience d'exception
            </p>
            <a
              href="https://onelink.to/qpqfep"
              className="btn-luxury large"
            >
              <span className="btn-shine"></span>
              <span className="btn-text">Commencer l'Aventure</span>
            </a>
            <p className="cta-legal">
              Accès sur sélection · Gratuit · Disponible mondialement
            </p>
            <div className="cta-ornament bottom">✦</div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        /* Ensure navbar is visible on all devices */
        .behype_navbar {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          z-index: 9999 !important;
          width: 100% !important;
        }

        /* Ensure navbar menu button is visible on mobile */
        .f-navigation-menu-button {
          display: block !important;
          z-index: 10000 !important;
        }

        /* Fix footer layout on mobile */
        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        @media (max-width: 640px) {
          .footer {
            padding: 60px 0 30px !important;
          }

          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .footer-bottom {
            flex-direction: column !important;
            gap: 12px !important;
            text-align: center !important;
          }
        }

        @media (max-width: 991px) {
          .behype_navbar {
            display: flex !important;
            visibility: visible !important;
          }

          .behype_navbar-container {
            width: 100% !important;
            display: flex !important;
          }
        }
      `}</style>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .page {
          background: #000000;
          color: #FAFAF9;
          font-family: 'Playfair Display', 'Georgia', serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .gold-gradient {
          background: linear-gradient(135deg, #2465f7 0%, #3b7bff 50%, #2465f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite;
        }

        .gold-text {
          color: #2465f7;
        }

        @keyframes shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* === HERO LUXURY === */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 160px 48px 120px;
          overflow: hidden;
          background: #000000;
        }

        .hero-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 80% 50% at 50% 0%,
            rgba(212, 175, 55, 0.15) 0%,
            rgba(212, 175, 55, 0.05) 30%,
            transparent 70%
          );
          pointer-events: none;
        }

        .hero-shimmer {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg,
              transparent 0%,
              rgba(212, 175, 55, 0.03) 45%,
              rgba(255, 215, 0, 0.05) 50%,
              rgba(212, 175, 55, 0.03) 55%,
              transparent 100%
            );
          animation: shimmer-move 8s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes shimmer-move {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 1000px;
        }

        .exclusive-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 24px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #2465f7;
          margin-bottom: 40px;
          backdrop-filter: blur(20px);
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }

        .badge-icon {
          font-size: 10px;
          animation: rotate-star 4s linear infinite;
        }

        @keyframes rotate-star {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-title {
          font-size: 82px;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 32px 0;
          color: #FAFAF9;
          font-family: 'Playfair Display', Georgia, serif;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
        }

        .hero-subtitle {
          font-size: 19px;
          line-height: 1.7;
          color: #A3A3A3;
          margin: 0 0 56px 0;
          font-weight: 400;
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }

        .hero-cta {
          margin-bottom: 80px;
        }

        .btn-luxury {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 18px 48px;
          background: linear-gradient(135deg, #2465f7 0%, #3b7bff 100%);
          color: #000000;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 40px rgba(212, 175, 55, 0.3);
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          letter-spacing: 0.5px;
        }

        .btn-luxury::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #3b7bff 0%, #2465f7 100%);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .btn-luxury:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 60px rgba(212, 175, 55, 0.4);
        }

        .btn-luxury:hover::before {
          opacity: 1;
        }

        .btn-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 45%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0.4) 55%,
            transparent 100%
          );
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0%, 100% { transform: translateX(-200%); }
          50%, 70% { transform: translateX(200%); }
        }

        .btn-text {
          position: relative;
          z-index: 1;
        }

        .btn-luxury.large {
          padding: 20px 56px;
          font-size: 18px;
        }

        .cta-subtitle {
          margin-top: 16px;
          font-size: 13px;
          color: #737373;
          font-style: italic;
          font-family: Georgia, serif;
        }

        .luxury-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 64px;
          padding: 40px 48px;
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.7) 0%, rgba(26, 26, 26, 0.5) 100%);
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: 16px;
          backdrop-filter: blur(30px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }

        .luxury-stats::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.05), transparent);
          transform: translateX(-100%);
          animation: stats-shimmer 4s ease-in-out infinite;
        }

        @keyframes stats-shimmer {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 36px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #FAFAF9;
          margin-bottom: 8px;
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }

        .stat-label {
          font-size: 13px;
          color: #A3A3A3;
          font-weight: 400;
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          letter-spacing: 0.5px;
        }

        .stat-divider {
          width: 1px;
          height: 50px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(212, 175, 55, 0.3),
            transparent
          );
        }

        /* Prestige Badges */
        .prestige-badges {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .prestige-badge {
          position: absolute;
          padding: 12px 20px;
          background: rgba(26, 26, 26, 0.8);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 8px;
          font-size: 14px;
          color: #2465f7;
          backdrop-filter: blur(20px);
          animation: float 6s ease-in-out infinite;
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .badge-glow {
          position: absolute;
          inset: -10px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%);
          border-radius: 12px;
          z-index: -1;
        }

        /* === SECTIONS HEADER === */
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          color: #2465f7;
          margin-bottom: 24px;
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }

        .label-line {
          width: 40px;
          height: 1px;
          background: linear-gradient(to right, transparent, #2465f7, transparent);
        }

        .section-title {
          font-size: 56px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: #FAFAF9;
          margin: 0 0 20px 0;
          font-family: 'Playfair Display', Georgia, serif;
        }

        .section-description {
          font-size: 18px;
          line-height: 1.7;
          color: #A3A3A3;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }

        /* === PRIVILEGES === */
        .privileges {
          padding: 140px 0;
          background: #000000;
        }

        .privileges-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .privilege-card {
          position: relative;
          padding: 48px;
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.7) 0%, rgba(26, 26, 26, 0.5) 100%);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 16px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(20px);
          overflow: hidden;
        }

        .privilege-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(212, 175, 55, 0.12),
            transparent 40%
          );
          border-radius: 16px;
          opacity: 0;
          transition: opacity 0.5s;
        }

        .privilege-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.3), transparent, rgba(212, 175, 55, 0.1));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s;
        }

        .privilege-card:hover::before {
          opacity: 1;
        }

        .privilege-card:hover::after {
          opacity: 1;
        }

        .privilege-card:hover {
          border-color: rgba(212, 175, 55, 0.4);
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(212, 175, 55, 0.2);
        }

        .privilege-number {
          position: absolute;
          top: 32px;
          right: 32px;
          font-size: 72px;
          font-weight: 700;
          color: rgba(212, 175, 55, 0.08);
          line-height: 1;
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }

        .privilege-icon-wrapper {
          position: relative;
          width: 64px;
          height: 64px;
          margin-bottom: 32px;
        }

        .privilege-icon-glow {
          position: absolute;
          inset: -12px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%);
          border-radius: 50%;
        }

        .privilege-icon-wrapper svg {
          position: relative;
          z-index: 1;
          color: #2465f7;
        }

        .privilege-title {
          font-size: 26px;
          font-weight: 600;
          color: #FAFAF9;
          margin: 0 0 16px 0;
          font-family: 'Playfair Display', Georgia, serif;
        }

        .privilege-description {
          font-size: 16px;
          line-height: 1.7;
          color: #A3A3A3;
          margin: 0 0 32px 0;
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }

        .privilege-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(to right, #2465f7, transparent);
        }

        /* === LUXURY EXPERIENCE === */
        .luxury-experience {
          padding: 140px 0;
          background: rgba(26, 26, 26, 0.3);
        }

        .experience-flow {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          max-width: 1400px;
          margin: 0 auto;
        }

        .flow-item {
          flex: 1;
          text-align: center;
          padding: 0 24px;
        }

        .flow-icon {
          margin-bottom: 28px;
        }

        .icon-circle {
          width: 80px;
          height: 80px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50%;
          color: #2465f7;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .flow-item:hover .icon-circle {
          background: rgba(212, 175, 55, 0.15);
          transform: scale(1.1);
          box-shadow: 0 0 40px rgba(212, 175, 55, 0.3);
        }

        .flow-item h3 {
          font-size: 22px;
          font-weight: 600;
          color: #FAFAF9;
          margin: 0 0 16px 0;
          font-family: 'Playfair Display', Georgia, serif;
        }

        .flow-item p {
          font-size: 15px;
          line-height: 1.7;
          color: #A3A3A3;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }

        .flow-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 40px;
          flex-shrink: 0;
        }

        .divider-line {
          width: 80px;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(212, 175, 55, 0.3), transparent);
        }

        .divider-dot {
          width: 6px;
          height: 6px;
          background: #2465f7;
          border-radius: 50%;
          margin-left: -3px;
        }

        /* === ELITE CREATORS === */
        .elite-creators {
          padding: 140px 0;
          background: #000000;
        }

        .elite-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 48px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .elite-card {
          position: relative;
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(26, 26, 26, 0.6) 100%);
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }

        .elite-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            800px circle at var(--mouse-x, 50%) var(--mouse-y, 0%),
            rgba(212, 175, 55, 0.12),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
        }

        .elite-card:hover::before {
          opacity: 1;
        }

        .elite-card:hover {
          border-color: rgba(212, 175, 55, 0.6);
          transform: translateY(-16px);
          box-shadow:
            0 24px 80px rgba(212, 175, 55, 0.3),
            0 0 0 1px rgba(212, 175, 55, 0.2) inset,
            0 4px 20px rgba(0, 0, 0, 0.6);
        }

        .elite-card-inner {
          position: relative;
        }

        .elite-image {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          background: #0a0a0a;
        }

        .elite-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          image-rendering: auto;
          -webkit-font-smoothing: antialiased;
          backface-visibility: hidden;
        }

        .elite-card:hover .elite-image img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.95) 0%,
            rgba(0, 0, 0, 0.7) 40%,
            rgba(0, 0, 0, 0.3) 70%,
            transparent 100%
          );
          z-index: 1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .elite-card:hover .image-overlay {
          height: 50%;
        }

        .image-border {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(212, 175, 55, 0.2);
          pointer-events: none;
          z-index: 2;
          transition: border-color 0.5s;
        }

        .elite-card:hover .image-border {
          border-color: rgba(212, 175, 55, 0.5);
          box-shadow: inset 0 0 20px rgba(212, 175, 55, 0.1);
        }

        .elite-badge {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #3b7bff 0%, #2465f7 50%, #2465f7 100%);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000000;
          z-index: 3;
          box-shadow:
            0 4px 20px rgba(212, 175, 55, 0.6),
            0 0 40px rgba(255, 215, 0, 0.3),
            inset 0 1px 2px rgba(255, 255, 255, 0.5);
          border: 2px solid rgba(255, 255, 255, 0.3);
          animation: badge-pulse 3s ease-in-out infinite;
        }

        @keyframes badge-pulse {
          0%, 100% {
            box-shadow:
              0 4px 20px rgba(212, 175, 55, 0.6),
              0 0 40px rgba(255, 215, 0, 0.3),
              inset 0 1px 2px rgba(255, 255, 255, 0.5);
            transform: scale(1);
          }
          50% {
            box-shadow:
              0 6px 30px rgba(212, 175, 55, 0.8),
              0 0 60px rgba(255, 215, 0, 0.5),
              inset 0 1px 2px rgba(255, 255, 255, 0.5);
            transform: scale(1.08);
          }
        }

        .elite-content {
          padding: 40px 32px 36px;
          background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.2));
        }

        .elite-header {
          margin-bottom: 32px;
        }

        .elite-name {
          font-size: 28px;
          font-weight: 600;
          color: #FAFAF9;
          margin: 0 0 8px 0;
          font-family: 'Playfair Display', Georgia, serif;
          letter-spacing: -0.01em;
          line-height: 1.2;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .elite-handle {
          font-size: 15px;
          color: #2465f7;
          margin: 0 0 8px 0;
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          font-weight: 500;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .elite-location {
          font-size: 13px;
          color: #8C8C8C;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          font-weight: 400;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .elite-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          padding-top: 28px;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
          position: relative;
        }

        .elite-stats::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 1px;
          background: linear-gradient(to right, transparent, #2465f7, transparent);
        }

        .elite-stat {
          text-align: center;
          padding: 12px 8px;
          border-radius: 8px;
          transition: all 0.3s;
          min-width: 0;
        }

        .elite-stat:hover {
          background: rgba(212, 175, 55, 0.05);
        }

        .elite-stat .stat-number {
          font-size: 26px;
          font-weight: 700;
          color: #FAFAF9;
          margin-bottom: 8px;
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          letter-spacing: -0.02em;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .elite-stat .stat-text {
          font-size: 10px;
          color: #8C8C8C;
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 500;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .elite-stat.highlight .stat-number {
          background: linear-gradient(135deg, #3b7bff 0%, #2465f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .elite-stat.highlight .stat-text {
          color: #2465f7;
        }

        /* === FINAL CTA LUXURY === */
        .final-cta-luxury {
          position: relative;
          padding: 160px 0;
          background: #000000;
          overflow: hidden;
        }

        .cta-background {
          position: absolute;
          inset: 0;
        }

        .cta-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 60% 40% at 50% 50%,
            rgba(212, 175, 55, 0.15) 0%,
            transparent 70%
          );
        }

        .cta-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(212, 175, 55, 0.05) 45%,
            rgba(255, 215, 0, 0.08) 50%,
            rgba(212, 175, 55, 0.05) 55%,
            transparent 100%
          );
          animation: shimmer-move 8s ease-in-out infinite;
        }

        .cta-content-luxury {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-ornament {
          font-size: 24px;
          color: #2465f7;
          animation: rotate-star 6s linear infinite;
        }

        .cta-ornament.top {
          margin-bottom: 32px;
        }

        .cta-ornament.bottom {
          margin-top: 32px;
        }

        .cta-title {
          font-size: 64px;
          font-weight: 700;
          color: #FAFAF9;
          margin: 0 0 24px 0;
          letter-spacing: -0.02em;
          font-family: 'Playfair Display', Georgia, serif;
        }

        .cta-description {
          font-size: 19px;
          line-height: 1.7;
          color: #A3A3A3;
          margin: 0 0 48px 0;
          font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }

        .cta-legal {
          margin-top: 20px;
          font-size: 13px;
          color: #737373;
          font-style: italic;
          font-family: Georgia, serif;
        }

        /* === RESPONSIVE === */
        @media (max-width: 1200px) {
          .prestige-badges {
            display: none;
          }

          .experience-flow {
            flex-wrap: wrap;
          }

          .flow-divider {
            display: none;
          }

          .flow-item {
            flex: 0 0 calc(50% - 24px);
            margin-bottom: 48px;
          }
        }

        @media (max-width: 968px) {
          .hero {
            padding: 120px 32px 80px;
          }

          .hero-title {
            font-size: 56px;
          }

          .section-title {
            font-size: 42px;
          }

          .privileges-grid {
            grid-template-columns: 1fr;
          }

          .elite-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .elite-image {
            height: 180px;
          }

          .luxury-stats {
            gap: 40px;
          }
        }

        /* === NAVBAR & FOOTER BLACK OVERRIDE === */
        :global(.behype_navbar) {
          background: #000000 !important;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }

        :global(.behype_nav-link) {
          color: #FAFAF9 !important;
        }

        :global(.behype_nav-link:hover) {
          color: #2465f7 !important;
        }

        :global(.navbar_button) {
          background: linear-gradient(135deg, #2465f7 0%, #3b7bff 100%) !important;
          color: #000000 !important;
          border: none !important;
        }

        :global(.navbar_button:hover) {
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3) !important;
        }

        :global(.navbar_button-alternate) {
          background: transparent !important;
          color: #2465f7 !important;
          border: 1px solid rgba(212, 175, 55, 0.4) !important;
        }

        :global(.navbar_button-alternate:hover) {
          background: rgba(212, 175, 55, 0.1) !important;
          border-color: #2465f7 !important;
        }

        :global(.footer) {
          background: #000000 !important;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
        }

        @media (max-width: 768px) {
          .hero {
            padding: 100px 24px 60px;
          }

          .hero-title {
            font-size: 44px;
          }

          .hero-subtitle {
            font-size: 17px;
          }

          .btn-luxury {
            padding: 16px 36px;
            font-size: 15px;
          }

          .btn-luxury.large {
            padding: 18px 44px;
            font-size: 16px;
          }

          .luxury-stats {
            flex-direction: column;
            gap: 32px;
            padding: 32px 24px;
          }

          .stat-divider {
            width: 100px;
            height: 1px;
            background: linear-gradient(to right, transparent, rgba(212, 175, 55, 0.3), transparent);
          }

          .section-title {
            font-size: 36px;
          }

          .section-description {
            font-size: 16px;
          }

          .privileges {
            padding: 100px 0;
          }

          .privilege-card {
            padding: 36px 28px;
          }

          .privilege-number {
            font-size: 56px;
            top: 24px;
            right: 24px;
          }

          .luxury-experience {
            padding: 100px 0;
          }

          .experience-flow {
            flex-direction: column;
          }

          .flow-item {
            flex: 1 1 100%;
            margin-bottom: 40px;
          }

          .elite-creators {
            padding: 100px 0;
          }

          .elite-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .final-cta-luxury {
            padding: 120px 0;
          }

          .cta-title {
            font-size: 44px;
          }

          .cta-description {
            font-size: 17px;
          }

          .container {
            padding: 0 24px;
          }
        }
      `}</style>
    </div>
  )
}
