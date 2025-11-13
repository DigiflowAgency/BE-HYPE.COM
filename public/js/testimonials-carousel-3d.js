// Testimonials 3D Carousel for Home Page
(function() {
  'use strict';

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
  ];

  let currentIndex = 0;

  function createCarousel() {
    const container = document.getElementById('testimonials-carousel-3d');
    if (!container) return;

    // Create carousel HTML
    container.innerHTML = `
      <div class="carousel-3d-container">
        <div class="carousel-3d">
          ${videoTestimonials.map((video, index) => `
            <div class="carousel-3d-card" data-index="${index}">
              <video class="video-player-3d" id="video-3d-${video.id}" controls>
                <source src="${video.videoUrl}" type="video/mp4" />
              </video>
              <div class="card-video-wrapper-3d">
                <div class="video-container-3d">
                  <img src="${video.thumbnail}" alt="${video.name}" class="video-thumbnail-3d" id="thumb-3d-${video.id}" />
                  <button class="play-button-3d" onclick="playVideo3D(${video.id})">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="card-content-3d">
                <div class="card-header-3d">
                  <img src="${video.logo}" alt="${video.name}" class="card-logo-3d" />
                  <div class="card-info-3d">
                    <h3>${video.name}</h3>
                    <p>${video.role}</p>
                  </div>
                </div>
                <blockquote>"${video.quote}"</blockquote>
              </div>
            </div>
          `).join('')}
        </div>

        <button class="carousel-3d-btn prev-btn-3d" onclick="prevSlide3D()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button class="carousel-3d-btn next-btn-3d" onclick="nextSlide3D()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        <div class="carousel-3d-dots">
          ${videoTestimonials.map((_, index) => `
            <button class="dot-3d ${index === 0 ? 'active' : ''}" onclick="goToSlide3D(${index})"></button>
          `).join('')}
        </div>
      </div>
    `;

    updateCarousel();
    setupVideoPauseHandlers();
  }

  function setupVideoPauseHandlers() {
    // Get all video elements
    const videos = videoTestimonials.map(v => document.getElementById(`video-3d-${v.id}`)).filter(Boolean);

    // Add play event listener to each video
    videos.forEach(video => {
      video.addEventListener('play', function(e) {
        const playingVideo = e.target;
        // Pause all other videos
        videos.forEach(v => {
          if (v !== playingVideo && !v.paused) {
            v.pause();
          }
        });
      });
    });
  }

  function updateCarousel() {
    const cards = document.querySelectorAll('.carousel-3d-card');
    const dots = document.querySelectorAll('.dot-3d');
    const totalCards = cards.length;

    cards.forEach((card, index) => {
      // Remove all classes
      card.classList.remove('active', 'prev', 'next');

      // Add appropriate class
      if (index === currentIndex) {
        card.classList.add('active');
      } else if (index === (currentIndex - 1 + totalCards) % totalCards) {
        card.classList.add('prev');
      } else if (index === (currentIndex + 1) % totalCards) {
        card.classList.add('next');
      }

      // Update click handler
      card.onclick = function() {
        if (index !== currentIndex) {
          currentIndex = index;
          updateCarousel();
        }
      };
    });

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  window.goToSlide3D = function(index) {
    currentIndex = index;
    updateCarousel();
  };

  window.nextSlide3D = function() {
    currentIndex = (currentIndex + 1) % videoTestimonials.length;
    updateCarousel();
  };

  window.prevSlide3D = function() {
    currentIndex = (currentIndex - 1 + videoTestimonials.length) % videoTestimonials.length;
    updateCarousel();
  };

  window.playVideo3D = function(videoId) {
    const videoEl = document.getElementById(`video-3d-${videoId}`);
    const thumbnail = document.getElementById(`thumb-3d-${videoId}`);

    if (videoEl && thumbnail) {
      // Pause all other videos first
      const allVideos = videoTestimonials.map(v => document.getElementById(`video-3d-${v.id}`)).filter(Boolean);
      allVideos.forEach(v => {
        if (v !== videoEl && !v.paused) {
          v.pause();
        }
      });

      videoEl.style.display = 'block';
      videoEl.play();
    }
  };

  // Add swipe gesture support
  function initSwipeGestures() {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50; // Minimum distance for swipe
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next slide
          nextSlide3D();
        } else {
          // Swipe right - previous slide
          prevSlide3D();
        }
      }
    };

    const carouselElement = document.querySelector('.carousel-3d-container');
    if (carouselElement) {
      carouselElement.addEventListener('touchstart', handleTouchStart, { passive: true });
      carouselElement.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      createCarousel();
      initSwipeGestures();
    });
  } else {
    createCarousel();
    initSwipeGestures();
  }
})();
