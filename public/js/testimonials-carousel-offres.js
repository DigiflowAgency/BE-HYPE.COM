// Testimonials Carousel for Offres Page - 3 selected testimonials
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
      logo: 'https://image-flow.fr/uploads/lautrefois-logo-e0db6433-d637-4514-9fb9-443580d14939.webp',
      thumbnail: 'https://image-flow.fr/uploads/capture-d-e-cran-2025-11-13-a-13-28-20-959e4dac-e517-47c0-893e-870e88423c01.webp',
      videoUrl: 'https://image-flow.fr/uploads/l-autrefois-testimonial-d6f7a100-c4b6-4f5d-9f6a-470f4be3633e.mp4',
      quote: "1 million de vue sur tiktok, 750k sur instagram, je suis ravie de travailler avec BE HYPE"
    },
    {
      id: 3,
      name: 'Alexandre',
      role: 'Gérant du restaurant COME PAPA',
      logo: 'https://image-flow.fr/uploads/come-papa-logo-9011bed7-0fae-4ce2-9fc8-7063a8fc3a30.webp',
      thumbnail: 'https://image-flow.fr/uploads/capture-d-e-cran-2025-11-13-a-13-26-54-731607b5-5d3d-46eb-ac37-e2e0bb32ae1e.webp',
      videoUrl: 'https://image-flow.fr/uploads/downloadgram-org-aqn7v7dsqcnp-gyzekbi-uniezwtneg5l-006827b3-55a7-4e78-9ba5-a330455a7f5a.mp4',
      quote: "On fait plus 60% de chiffre d'affaires grâce aux réseaux sociaux, la première action de communication j'ai vu un retour direct"
    }
  ];

  let currentIndex = 0;

  function createCarousel() {
    const container = document.getElementById('testimonials-carousel-offres');
    if (!container) return;

    // Create carousel HTML
    container.innerHTML = `
      <div class="carousel-3d-container">
        <div class="carousel-3d">
          ${videoTestimonials.map((video, index) => `
            <div class="carousel-3d-card" data-index="${index}">
              <video class="video-player-3d" id="video-offres-${video.id}" controls>
                <source src="${video.videoUrl}" type="video/mp4" />
              </video>
              <div class="card-video-wrapper-3d">
                <div class="video-container-3d">
                  <img src="${video.thumbnail}" alt="${video.name}" class="video-thumbnail-3d" id="thumb-offres-${video.id}" />
                  <button class="play-button-3d" onclick="playVideoOffres(${video.id})">
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

        <button class="carousel-3d-btn prev-btn-3d" onclick="prevSlideOffres()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button class="carousel-3d-btn next-btn-3d" onclick="nextSlideOffres()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        <div class="carousel-3d-dots">
          ${videoTestimonials.map((_, index) => `
            <button class="dot-3d ${index === 0 ? 'active' : ''}" onclick="goToSlideOffres(${index})"></button>
          `).join('')}
        </div>
      </div>
    `;

    updateCarousel();
    setupVideoPauseHandlers();
  }

  function setupVideoPauseHandlers() {
    const videos = videoTestimonials.map(v => document.getElementById(`video-offres-${v.id}`)).filter(Boolean);

    videos.forEach(video => {
      video.addEventListener('play', function(e) {
        const playingVideo = e.target;
        videos.forEach(v => {
          if (v !== playingVideo && !v.paused) {
            v.pause();
          }
        });
      });
    });
  }

  function updateCarousel() {
    const cards = document.querySelectorAll('#testimonials-carousel-offres .carousel-3d-card');
    const dots = document.querySelectorAll('#testimonials-carousel-offres .dot-3d');
    const totalCards = cards.length;

    cards.forEach((card, index) => {
      card.classList.remove('active', 'prev', 'next');

      if (index === currentIndex) {
        card.classList.add('active');
      } else if (index === (currentIndex - 1 + totalCards) % totalCards) {
        card.classList.add('prev');
      } else if (index === (currentIndex + 1) % totalCards) {
        card.classList.add('next');
      }

      card.onclick = function() {
        if (index !== currentIndex) {
          currentIndex = index;
          updateCarousel();
        }
      };
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  window.goToSlideOffres = function(index) {
    currentIndex = index;
    updateCarousel();
  };

  window.nextSlideOffres = function() {
    currentIndex = (currentIndex + 1) % videoTestimonials.length;
    updateCarousel();
  };

  window.prevSlideOffres = function() {
    currentIndex = (currentIndex - 1 + videoTestimonials.length) % videoTestimonials.length;
    updateCarousel();
  };

  window.playVideoOffres = function(videoId) {
    const videoEl = document.getElementById(`video-offres-${videoId}`);
    const thumbnail = document.getElementById(`thumb-offres-${videoId}`);

    if (videoEl && thumbnail) {
      const allVideos = videoTestimonials.map(v => document.getElementById(`video-offres-${v.id}`)).filter(Boolean);
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
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          nextSlideOffres();
        } else {
          prevSlideOffres();
        }
      }
    };

    const carouselElement = document.querySelector('#testimonials-carousel-offres .carousel-3d-container');
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
