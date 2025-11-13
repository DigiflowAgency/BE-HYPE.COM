'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import HomeNavbar from '../components/HomeNavbar'
import Footer from '../components/Footer'

export default function TestimonialsNew() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false)

  useEffect(() => {
    document.title = "Témoignages - BEHYPE | +500 Restaurants Satisfaits"
  }, [])

  const testimonials = [
    {
      id: 1,
      name: 'Le P\'tit Jardin',
      role: 'Restaurant Gastronomique · Paris',
      image: '/images/PTIT-JARDIN-BG_1.webp',
      logo: '/images/PTIT-JARDIN-BG_1.webp',
      quote: 'BEHYPE a complètement transformé notre approche marketing. En 2 mois, nous avons vu notre visibilité Instagram exploser et nos réservations augmenter de 45%. Les influenceurs créent un contenu authentique qui résonne vraiment avec notre clientèle.',
      rating: 5,
      metrics: [
        { value: '+150K', label: 'Impressions' },
        { value: '+45%', label: 'Réservations' },
        { value: '12', label: 'Collaborations' }
      ]
    },
    {
      id: 2,
      name: 'Sarbacane',
      role: 'Bar à Cocktails · Marseille',
      image: '/images/SARBACANE-BG_1.webp',
      logo: '/images/SARBACANE.avif',
      quote: 'La plateforme est intuitive et les résultats sont au rendez-vous. Nous recevons régulièrement des créateurs de qualité qui mettent en valeur notre établissement. Le ROI est 4x supérieur à nos campagnes Facebook Ads.',
      rating: 5,
      metrics: [
        { value: '+280K', label: 'Reach' },
        { value: '4.5x', label: 'ROI' },
        { value: '+67%', label: 'Engagement' }
      ]
    },
    {
      id: 3,
      name: 'Emma Aou',
      role: 'Food Influencer · 10.5K followers',
      image: '/images/emma-aou_1.avif',
      logo: '/images/EMMA-AOU-1.png',
      quote: 'BEHYPE facilite tellement les collaborations ! Je découvre des restaurants incroyables, les propriétaires sont accueillants et mes abonnés adorent mes recommandations. Ma communauté a grandi de 23% en 3 mois.',
      rating: 5,
      metrics: [
        { value: '15+', label: 'Collabs' },
        { value: '+23%', label: 'Croissance' },
        { value: '8.5%', label: 'Engagement' }
      ]
    },
    {
      id: 4,
      name: 'Bagelstein',
      role: 'Chaîne de Restauration · 12 emplacements',
      image: '/images/BAGELSTEIN.avif',
      logo: '/images/BAGELSTEIN.avif',
      quote: 'Nous utilisons BEHYPE pour tous nos nouveaux lancements. La plateforme nous permet de toucher une audience locale qualifiée de manière efficace. C\'est devenu un pilier de notre stratégie marketing.',
      rating: 5,
      metrics: [
        { value: '+500K', label: 'Impressions' },
        { value: '12', label: 'Restaurants' },
        { value: '40+', label: 'Influenceurs' }
      ]
    },
    {
      id: 5,
      name: 'Local Food Marseille',
      role: 'Food Influencer · 115K followers',
      image: '/images/LOCALFOOD.webp',
      logo: '/images/localfood.avif',
      quote: 'La meilleure plateforme pour connecter avec des établissements qui partagent les mêmes valeurs. Process simple, communication fluide et collaborations win-win. Je recommande à 100%.',
      rating: 5,
      metrics: [
        { value: '40+', label: 'Restaurants' },
        { value: '2M+', label: 'Reach mensuel' },
        { value: '9.2%', label: 'Taux d\'engagement' }
      ]
    },
    {
      id: 6,
      name: 'Tiger Milk',
      role: 'Restaurant Asiatique · Lyon',
      image: '/images/TIGERMILK.avif',
      logo: '/images/TIGERMILK.avif',
      quote: 'Des collaborations authentiques qui ont vraiment boosté notre fréquentation. Nous avons vu notre compte Instagram passer de 2K à 15K followers en 4 mois. Les influenceurs deviennent nos meilleurs ambassadeurs.',
      rating: 5,
      metrics: [
        { value: '+320K', label: 'Reach' },
        { value: '+550%', label: 'Followers' },
        { value: '18', label: 'Collabs' }
      ]
    }
  ]

  const videoTestimonials = [
    {
      id: 1,
      name: 'Valentin Marro',
      role: 'Fondateur des restaurants I VERI GNOCCHI',
      logo: '/images/iveri.png',
      thumbnail: 'https://cdn.prod.website-files.com/67e2502a88c26c95c4aa27d2/67e6de62686c5b2c764576de_Capture%20d%E2%80%99e%CC%81cran%202025-03-28%20a%CC%80%2018.28.31.webp',
      videoUrl: 'https://image-flow.fr/uploads/iveri-testimonial-pphoxw-d177f157-ed3f-478d-ac38-3aa84522ccdc.mp4',
      quote: "Tous les jours, j'ai des gens qui me disent qu'ils m'ont vu sur les réseaux sociaux, que je ne connais pas. C'est que c'est rentable !!"
    },
    {
      id: 2,
      name: 'Marta',
      role: 'Gérante du restaurant L\'AUTREFOIS',
      logo: '/images/284x140-2.png',
      thumbnail: 'https://image-flow.fr/uploads/l-expe-rience-fa4f8820-cb62-425f-800c-243dfcecda3f.webp',
      videoUrl: 'https://image-flow.fr/uploads/l-autrefois-testimonial-d6f7a100-c4b6-4f5d-9f6a-470f4be3633e.mp4',
      quote: "1 million de vue sur tiktok, 750k sur instagram, je suis ravie de travailler avec BE HYPE"
    },
    {
      id: 3,
      name: 'Alexandre',
      role: 'Gérant du restaurant COME PAPA',
      logo: '/images/SARBACANE.avif',
      thumbnail: 'https://image-flow.fr/uploads/l-expe-rience-fa4f8820-cb62-425f-800c-243dfcecda3f.webp',
      videoUrl: 'https://image-flow.fr/uploads/downloadgram-org-aqn7v7dsqcnp-gyzekbi-uniezwtneg5l-006827b3-55a7-4e78-9ba5-a330455a7f5a.mp4',
      quote: "On fait plus 60% de chiffre d'affaires grâce aux réseaux sociaux, la première action de communication j'ai vu un retour direct"
    },
    {
      id: 4,
      name: 'Johan',
      role: 'Gérant du restaurant SARBACANE - MARSEILLE',
      logo: '/images/SARBACANE.avif',
      thumbnail: 'https://cdn.prod.website-files.com/67e2502a88c26c95c4aa27d2/68274b03e5dcaee032a1579a_SARBACANE%20BG.webp',
      videoUrl: 'https://image-flow.fr/uploads/sarbacane-testimonial-xxw185-56c89b79-cf99-46c3-9cb9-11f1294e917c.mp4',
      quote: "On peut avoir un lieu incroyable, une décoration magnifique, un super service et force de constater que c'est super important et avec BEHYPE ça facilite le truc"
    },
    {
      id: 5,
      name: 'Esther Blanc',
      role: 'Gérante du restaurant LE MÔME - VENELLE',
      logo: '/images/284x140-2.png',
      thumbnail: 'https://cdn.prod.website-files.com/67e2502a88c26c95c4aa27d2/68274b03882b1b3bfab5cf94_LE%20MOME%20BG.webp',
      videoUrl: 'https://image-flow.fr/uploads/le-mome-testimonial-isqam2-7fbc14fb-4d18-42ba-b36a-d33fa712e99d.mp4',
      quote: "Le fait de travailler avec des influenceuses de façon vraiment encadré par l'appli, je trouve que c'est très professionnel"
    },
    {
      id: 6,
      name: 'Romain',
      role: 'Gérant du restaurant LE P\'TIT JARDIN - MARSEILLE',
      logo: '/images/284x140-3.avif',
      thumbnail: 'https://cdn.prod.website-files.com/67e2502a88c26c95c4aa27d2/68274b03a24ea241cc6d2be9_PTIT%20JARDIN%20BG.webp',
      videoUrl: 'https://image-flow.fr/uploads/ptit-jardin-testimonial-rzku6g-798744f5-8939-43f3-8c5f-179117e0d920.mp4',
      quote: "Ça a changé une bonne partie de la communication du restaurant"
    },
    {
      id: 7,
      name: 'Adrien',
      role: 'Gérant du restaurant L\'ITALIEN - AIX EN PROVENCE',
      logo: '/images/LITALIEN.avif',
      thumbnail: 'https://cdn.prod.website-files.com/67e2502a88c26c95c4aa27d2/68276813a963b0cc2f01ad2d_Capture%20d%E2%80%99e%CC%81cran%202025-05-16%20a%CC%80%2018.29.48.avif',
      videoUrl: 'https://image-flow.fr/uploads/litalien-testimonial-ang92l-98a12cc8-6a12-43c9-8eb0-ab9f73351ae7.mp4',
      quote: "La première année il y a eu un retour assez rapide, dès la rentrée"
    },
    {
      id: 8,
      name: 'Vincent',
      role: 'Gérant du restaurant EASY SUSHI',
      logo: '/images/iveri.png',
      thumbnail: 'https://image-flow.fr/uploads/l-expe-rience-fa4f8820-cb62-425f-800c-243dfcecda3f.webp',
      videoUrl: 'https://image-flow.fr/uploads/easy-sushis-testimonial-b1b75d05-9a0e-4eaa-baa1-180c1ac9ed58.mp4',
      quote: "Vous avez vraiment apportez une plus value, vous controlez vos influenceurs, votre app marche bien c'est top"
    },
    {
      id: 9,
      name: 'Bertrand',
      role: 'Gérant de la salle de réalité virtuelle EVA',
      logo: '/images/284x140-2.png',
      thumbnail: 'https://image-flow.fr/uploads/l-expe-rience-fa4f8820-cb62-425f-800c-243dfcecda3f.webp',
      videoUrl: 'https://image-flow.fr/uploads/eva-tesimonial-59334730-75f0-4afc-8c63-526844ef0b37.mp4',
      quote: "Ce qui est génial avec BE HYPE c'est qu'on a pu accueillir des influenceurs et des créateurs de contenu qui ont une communauté diverse"
    },
    {
      id: 10,
      name: 'Cyrielle',
      role: 'Gérante du centre de chute libre indoor iFLY',
      logo: '/images/SARBACANE.avif',
      thumbnail: 'https://image-flow.fr/uploads/l-expe-rience-fa4f8820-cb62-425f-800c-243dfcecda3f.webp',
      videoUrl: 'https://image-flow.fr/uploads/ifly-tesimonial-b8802ec8-4966-486a-8b4f-f56a054873c7.mp4',
      quote: "Avec BE HYPE on a plus de 60 Influenceurs qui sont venus tester l'activité et le truc c'est que ça humanise"
    },
    {
      id: 11,
      name: 'Fanny',
      role: 'Gérante du restaurant MAISON MONT GRAND',
      logo: '/images/284x140-3.avif',
      thumbnail: 'https://image-flow.fr/uploads/l-expe-rience-fa4f8820-cb62-425f-800c-243dfcecda3f.webp',
      videoUrl: 'https://image-flow.fr/uploads/maison-mont-grand-tesimonial-ef545765-99e3-48a0-8010-d070ec9d6bf7.mp4',
      quote: "BEHYPE nous a aidé à construire une vraie présence sur les réseaux sociaux"
    }
  ]

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoTestimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  // Auto-pause other videos when one starts playing
  useEffect(() => {
    const videos = videoTestimonials.map(v => document.getElementById(`video-${v.id}`)).filter(Boolean)

    const handlePlay = (e) => {
      const playingVideo = e.target
      videos.forEach(video => {
        if (video !== playingVideo && !video.paused) {
          video.pause()
        }
      })
    }

    videos.forEach(video => {
      video.addEventListener('play', handlePlay)
    })

    return () => {
      videos.forEach(video => {
        video.removeEventListener('play', handlePlay)
      })
    }
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videoTestimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length)
  }

  // Swipe gesture support for mobile
  useEffect(() => {
    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX
    }

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX
      handleSwipe()
    }

    const handleSwipe = () => {
      const swipeThreshold = 50 // Minimum distance for swipe
      const diff = touchStartX - touchEndX

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next slide
          nextSlide()
        } else {
          // Swipe right - previous slide
          prevSlide()
        }
      }
    }

    const carouselElement = document.querySelector('.carousel-container')
    if (carouselElement) {
      carouselElement.addEventListener('touchstart', handleTouchStart, { passive: true })
      carouselElement.addEventListener('touchend', handleTouchEnd, { passive: true })

      return () => {
        carouselElement.removeEventListener('touchstart', handleTouchStart)
        carouselElement.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [currentIndex])

  return (
    <div className="testimonials-page">
      <HomeNavbar />

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">
            <span className="badge-icon">❤️</span>
            <span>+500 établissements satisfaits</span>
          </div>
          <h1>Ils transforment leur visibilité<br/>avec <span className="gradient">BEHYPE</span></h1>
          <p>Découvrez les success stories de nos restaurants partenaires</p>
        </div>

        {/* Carrousel 3D Vidéos */}
        <div className="carousel-container">
          <div className="carousel">
            {videoTestimonials.map((video, index) => {
              const totalVideos = videoTestimonials.length
              let className = 'carousel-card'
              if (index === currentIndex) {
                className += ' active'
              } else if (index === (currentIndex - 1 + totalVideos) % totalVideos) {
                className += ' prev'
              } else if (index === (currentIndex + 1) % totalVideos) {
                className += ' next'
              }

              return (
                <div key={video.id} className={className} onClick={() => goToSlide(index)}>
                  <video id={`video-${video.id}`} className="video-player" controls>
                    <source src={video.videoUrl} type="video/mp4" />
                  </video>

                  <div className="card-video-wrapper">
                    <div className="video-container" id={`container-${video.id}`}>
                      <img src={video.thumbnail} alt={video.name} className="video-thumbnail" id={`thumb-${video.id}`} />
                      <button className="play-button" id={`play-${video.id}`} onClick={(e) => {
                        e.stopPropagation()

                        const videoEl = document.getElementById(`video-${video.id}`)
                        const thumbnail = document.getElementById(`thumb-${video.id}`)
                        const playBtn = document.getElementById(`play-${video.id}`)

                        // Affiche la vidéo en plein container de la carte
                        videoEl.style.display = 'block'
                        videoEl.play()
                      }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-header">
                      <img src={video.logo} alt={video.name} className="card-logo" />
                      <div className="card-info">
                        <h3>{video.name}</h3>
                        <p>{video.role}</p>
                      </div>
                    </div>
                    <blockquote>"{video.quote}"</blockquote>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Carousel Controls */}
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button className="carousel-btn next-btn" onClick={nextSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Carousel Dots */}
          <div className="carousel-dots">
            {videoTestimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">3000+</div>
            <div className="stat-label">Créateurs actifs</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">Restaurants partenaires</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Collaborations réussies</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">98%</div>
            <div className="stat-label">Taux de satisfaction</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Rejoignez-les dès aujourd'hui</h2>
        <p>Commencez à transformer votre visibilité avec BEHYPE</p>
        <div className="cta-buttons">
          <Link
            href="/offres"
            className="btn-cta-primary"
            style={{
              padding: '16px 40px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #2465f7 0%, #1d4ed8 100%)',
              color: 'white',
              boxShadow: '0 4px 20px rgba(36, 101, 247, 0.3)',
              border: '2px solid transparent',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            Voir les offres
          </Link>
          <Link
            href="/calendly"
            className="btn-cta-secondary"
            style={{
              padding: '16px 40px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'white',
              color: '#374151',
              border: '2px solid #e5e7eb',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            Réserver une démo
          </Link>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        /* Force Footer styles */
        .footer {
          background: #0f172a !important;
          color: white !important;
          padding: 80px 0 40px !important;
        }

        .footer a {
          color: #94a3b8 !important;
          text-decoration: none !important;
        }

        .footer a:hover {
          color: #3b82f6 !important;
        }
      `}</style>

      <style jsx>{`
        .testimonials-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #f8faffc 0%, #ffffff 100%);
          color: #1a1a1a;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Hero */
        .hero {
          padding: 160px 48px 140px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .hero-content {
          text-align: center;
          margin-bottom: 60px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: rgba(36, 101, 247, 0.08);
          border: 1px solid rgba(36, 101, 247, 0.2);
          border-radius: 100px;
          font-size: 14px;
          margin-bottom: 24px;
          color: #2465f7;
          font-weight: 600;
        }

        .hero h1 {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
          color: #1a1a1a;
        }

        .gradient {
          background: linear-gradient(135deg, #2465f7 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero p {
          font-size: 20px;
          color: #6b7280;
          margin: 0;
        }

        /* Carousel 3D */
        .carousel-container {
          position: relative;
          height: 750px;
          perspective: 2000px;
          margin: 0 auto;
        }

        .carousel {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .carousel-card {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 540px;
          height: 680px;
          transform-origin: center;
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          border-radius: 24px;
          overflow: hidden;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
        }

        .carousel-card > .video-player {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          z-index: 1000 !important;
          background: #000 !important;
          border-radius: 24px !important;
          object-fit: cover !important;
        }

        .carousel-card.active {
          transform: translate(-50%, -50%) scale(1) rotateY(0deg);
          opacity: 1;
          pointer-events: all;
          z-index: 10;
        }

        .carousel-card.prev {
          transform: translate(-140%, -50%) scale(0.85) rotateY(35deg);
          opacity: 0.5;
          filter: brightness(0.6);
          z-index: 5;
        }

        .carousel-card.next {
          transform: translate(40%, -50%) scale(0.85) rotateY(-35deg);
          opacity: 0.5;
          filter: brightness(0.6);
          z-index: 5;
        }

        .carousel-card:not(.active):not(.prev):not(.next) {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.7);
          pointer-events: none;
          z-index: 1;
        }

        .card-video-wrapper {
          width: 100%;
          height: 340px;
          overflow: hidden;
          position: relative;
        }

        .card-content {
          padding: 24px 30px 30px;
          display: flex;
          flex-direction: column;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .card-logo {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          object-fit: contain;
          background: white;
          padding: 4px;
        }

        .card-info h3 {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 4px 0;
          color: #1a1a1a;
        }

        .card-info p {
          font-size: 14px;
          color: #6b7280;
          margin: 0;
        }

        blockquote {
          font-size: 15px;
          line-height: 1.7;
          color: #374151;
          margin: 0;
          font-style: italic;
        }

        /* Carousel Controls */
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #1a1a1a;
          cursor: pointer;
          transition: all 0.3s;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .carousel-btn:hover {
          background: #2465f7;
          border-color: #2465f7;
          color: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 8px 20px rgba(36, 101, 247, 0.3);
        }

        .prev-btn {
          left: 20px;
        }

        .next-btn {
          right: 20px;
        }

        .carousel-dots {
          position: absolute;
          bottom: -60px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d1d5db;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          padding: 0;
        }

        .dot.active {
          width: 32px;
          border-radius: 4px;
          background: linear-gradient(90deg, #2465f7, #00d4ff);
        }

        /* Stats */
        .stats-section {
          padding: 100px 48px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        .stat-card {
          text-align: center;
          padding: 40px 20px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 20px;
          transition: all 0.3s;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .stat-card:hover {
          background: white;
          border-color: rgba(36, 101, 247, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(36, 101, 247, 0.12);
        }

        .stat-number {
          font-size: 48px;
          font-weight: 900;
          background: linear-gradient(135deg, #2465f7, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 12px;
          line-height: 1.2;
          padding: 8px 0;
        }

        .stat-label {
          font-size: 14px;
          color: #6b7280;
        }

        /* CTA */
        .cta {
          text-align: center;
          padding: 100px 48px;
          background: linear-gradient(135deg, rgba(36, 101, 247, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%);
        }

        .cta h2 {
          font-size: 48px;
          font-weight: 800;
          margin: 0 0 16px 0;
          color: #1a1a1a;
        }

        .cta p {
          font-size: 20px;
          color: #6b7280;
          margin: 0 0 40px 0;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .btn-cta-primary, .btn-cta-secondary {
          padding: 16px 40px !important;
          border-radius: 12px !important;
          text-decoration: none !important;
          font-weight: 700 !important;
          font-size: 16px !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
        }

        .btn-cta-primary {
          background: linear-gradient(135deg, #2465f7 0%, #1d4ed8 100%) !important;
          color: white !important;
          box-shadow: 0 4px 20px rgba(36, 101, 247, 0.3) !important;
          border: 2px solid transparent !important;
        }

        .btn-cta-primary:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 32px rgba(36, 101, 247, 0.5) !important;
        }

        .btn-cta-secondary {
          background: white !important;
          color: #374151 !important;
          border: 2px solid #e5e7eb !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04) !important;
        }

        .btn-cta-secondary:hover {
          background: #f9fafb !important;
          border-color: #2465f7 !important;
          color: #2465f7 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 16px rgba(36, 101, 247, 0.15) !important;
        }

        @media (max-width: 1024px) {
          .carousel-container {
            height: 600px;
          }

          .carousel-card {
            width: 440px;
            height: 540px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .nav {
            padding: 16px 24px;
            flex-wrap: wrap;
          }

          .nav-links {
            order: 3;
            width: 100%;
            justify-content: center;
            margin-top: 16px;
          }

          .hero h1 {
            font-size: 36px;
          }

          .carousel-container {
            height: 520px;
          }

          .carousel-card {
            width: 340px;
            height: 480px;
          }

          .carousel-card.prev,
          .carousel-card.next {
            display: none;
          }

          .carousel-btn {
            display: none;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .cta h2 {
            font-size: 32px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .carousel-container {
            height: 600px;
          }

          .carousel-card {
            width: 380px;
            height: 580px;
          }
        }

        .video-container {
          position: relative;
          width: 100%;
          height: 100%;
          background: #000;
          overflow: hidden;
        }

        .video-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(36, 101, 247, 0.95);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          box-shadow: 0 8px 32px rgba(36, 101, 247, 0.4);
          z-index: 10;
        }

        .play-button:hover {
          background: rgba(36, 101, 247, 1);
          transform: translate(-50%, -50%) scale(1.1);
          box-shadow: 0 12px 48px rgba(36, 101, 247, 0.6);
        }

        .video-player {
          display: none;
        }
      `}</style>
    </div>
  )
}
