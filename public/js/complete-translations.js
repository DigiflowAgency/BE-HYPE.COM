// Complete Translation System for BEHYPE - Version Complète
(function() {
  'use strict';

  const translations = {
    fr: {
      // Navigation
      'nav.pricing': 'Tarifs',
      'nav.testimonials': 'Témoignages',
      'nav.influencer': 'Je suis influenceur',
      'nav.signup': 'S\'inscrire',
      'nav.login': 'Se connecter',
      'nav.home': 'Accueil',
      'nav.demo': 'Demander une démo',

      // Hero Section
      'hero.partners': '❤️ +1000 établissements partenaires',
      'hero.title': 'Devenez l\'adresse incontournable grâce au pouvoir de l\'influence',
      'hero.subtitle': 'Recevez des influenceurs, boostez votre visibilité et faites de votre établissement une référence sur les réseaux sociaux.',
      'hero.followers': 'abonnés',

      // Partners Section
      'partners.title': 'Les plus grandes enseignes françaises nous font confiance ❤️',

      // Benefits Section
      'benefits.header': '+3 000 Créateurs de contenu & Influenceurs disponibles',
      'benefits.title': '<span class="text_span bg_gradient-behype">Explosez</span> votre visibilité grâce aux <span class="text_span bg_gradient-behype">influenceurs</span>',
      'benefits.subtitle': 'L\'influence est le format de publicité le plus rentable en 2025',
      'benefits.paragraph': 'BEHYPE vous connecte instantanément à des influenceurs prêts à découvrir et promouvoir votre établissement. En quelques clics, touchez une audience locale et engagée, gagnez en visibilité et attirez des clients au sein de votre restaurant.',
      'benefits.cta': 'Recevez vos premières demandes',

      // Features Section
      'features.undertitle': 'ce que vous allez gagner',
      'features.title': '<span class="text_span bg_gradient-behype">La plateforme</span> d\'influence qui détient les clefs de <span class="sheading_gradient-span">votre succès</span>',

      // Benefits Cards
      'benefits.card1.title': 'Augmentez votre CA',
      'benefits.card2.title': 'Multipliez vos réservations',
      'benefits.card3.title': 'Recevez des influenceurs à moindre coût',
      'benefits.card4.title': 'Propulsez votre visibilité',
      'benefits.card5.title': 'Gagnez un temps colossal',
      'benefits.card6.title': 'Réutilisez le contenu publié',
      'benefits.card4.mobile': 'Propulsez votre visiblité',

      // Tutorial Section
      'tutorial.undertitle': 'comment ça marche ?',
      'tutorial.title': '<span class="text_span bg_gradient-behype">BEHYPE</span> est la plateforme dont vous avez toujours rêvé',
      'tutorial.subtitle': '5 étapes pour démarrer l\'aventure',
      'tutorial.step1.title': 'Créez votre fiche établissement',
      'tutorial.step1.desc': 'Référencez votre établissement sur notre plateforme en ajoutant les informations essentielles.',
      'tutorial.step2.title': 'Recevez des demandes de réservations',
      'tutorial.step2.desc': 'Instantanément, vous recevez des demandes de collaborations des influenceurs.',
      'tutorial.step3.title': 'Sélectionnez vos profils',
      'tutorial.step3.desc': 'Acceptez ou refusez les collaborations en 2 clics sur votre calendrier de réservation.',
      'tutorial.step4.title': 'Collaborez avec les influenceurs',
      'tutorial.step4.desc': 'En échange d\'une expérience offerte, ils partagent du contenu sur leurs réseaux sociaux.',
      'tutorial.step5.title': 'Admirez la puissance de l\'influence',
      'tutorial.step5.desc': 'Votre établissement bénéficie d\'une visibilité locale, percutante et engageante',

      // Testimonials Section
      'testimonials.undertitle': 'témoignages',
      'testimonials.title': 'Ils utilisent <span class="text_span bg_gradient-behype">BeHype</span> et ça change tout !',
      'testimonials.subtitle': 'Des millions de vues à la croissance de leurs revenus, nos influenceurs et créateurs aident les établissements à obtenir un impact réel. Ce sont nos partenaires qui en parlent le mieux…',

      // CTA Section
      'cta.title': 'Démarrez l\'aventure aujourd\'hui',
      'cta.contact': 'Nous contacter',

      // Footer
      'footer.pages': 'Pages',
      'footer.home': 'Accueil',
      'footer.legal': 'Légal',
      'footer.mentions': 'Mentions légales',
      'footer.privacy': 'Privacy Policy',
      'footer.cookies': 'Cookies',
      'footer.terms': 'CGV & Utilisation',
      'footer.location': 'Aix en Provence',
      'footer.copyright': 'Copyright © | Made by',
    },

    en: {
      // Navigation
      'nav.pricing': 'Pricing',
      'nav.testimonials': 'Testimonials',
      'nav.influencer': 'I\'m an influencer',
      'nav.signup': 'Sign up',
      'nav.login': 'Log in',
      'nav.home': 'Home',
      'nav.demo': 'Request a demo',

      // Hero Section
      'hero.partners': '❤️ +1000 partner establishments',
      'hero.title': 'Become the go-to address through the power of influence',
      'hero.subtitle': 'Welcome influencers, boost your visibility and make your establishment a reference on social networks.',
      'hero.followers': 'followers',

      // Partners Section
      'partners.title': 'The biggest French brands trust us ❤️',

      // Benefits Section
      'benefits.header': '+3,000 Content Creators & Influencers available',
      'benefits.title': '<span class="text_span bg_gradient-behype">Explode</span> your visibility with <span class="text_span bg_gradient-behype">influencers</span>',
      'benefits.subtitle': 'Influencer marketing is the most profitable advertising format in 2025',
      'benefits.paragraph': 'BEHYPE instantly connects you with influencers ready to discover and promote your establishment. In just a few clicks, reach a local and engaged audience, gain visibility and attract customers to your restaurant.',
      'benefits.cta': 'Receive your first requests',

      // Features Section
      'features.undertitle': 'what you\'ll gain',
      'features.title': '<span class="text_span bg_gradient-behype">The influence platform</span> that holds the keys to <span class="sheading_gradient-span">your success</span>',

      // Benefits Cards
      'benefits.card1.title': 'Increase your revenue',
      'benefits.card2.title': 'Multiply your bookings',
      'benefits.card3.title': 'Host influencers at lower cost',
      'benefits.card4.title': 'Boost your visibility',
      'benefits.card5.title': 'Save tremendous time',
      'benefits.card6.title': 'Reuse published content',
      'benefits.card4.mobile': 'Boost your visibility',

      // Tutorial Section
      'tutorial.undertitle': 'how does it work?',
      'tutorial.title': '<span class="text_span bg_gradient-behype">BEHYPE</span> is the platform you\'ve always dreamed of',
      'tutorial.subtitle': '5 steps to start the adventure',
      'tutorial.step1.title': 'Create your establishment profile',
      'tutorial.step1.desc': 'List your establishment on our platform by adding essential information.',
      'tutorial.step2.title': 'Receive booking requests',
      'tutorial.step2.desc': 'Instantly, you receive collaboration requests from influencers.',
      'tutorial.step3.title': 'Select your profiles',
      'tutorial.step3.desc': 'Accept or decline collaborations in 2 clicks on your booking calendar.',
      'tutorial.step4.title': 'Collaborate with influencers',
      'tutorial.step4.desc': 'In exchange for an offered experience, they share content on their social networks.',
      'tutorial.step5.title': 'Admire the power of influence',
      'tutorial.step5.desc': 'Your establishment benefits from local, impactful and engaging visibility',

      // Testimonials Section
      'testimonials.undertitle': 'testimonials',
      'testimonials.title': 'They use <span class="text_span bg_gradient-behype">BeHype</span> and it changes everything!',
      'testimonials.subtitle': 'From millions of views to revenue growth, our influencers and creators help establishments achieve real impact. Our partners say it best…',

      // CTA Section
      'cta.title': 'Start the adventure today',
      'cta.contact': 'Contact us',

      // Footer
      'footer.pages': 'Pages',
      'footer.home': 'Home',
      'footer.legal': 'Legal',
      'footer.mentions': 'Legal mentions',
      'footer.privacy': 'Privacy Policy',
      'footer.cookies': 'Cookies',
      'footer.terms': 'Terms & Conditions',
      'footer.location': 'Aix en Provence',
      'footer.copyright': 'Copyright © | Made by',
    },

    es: {
      // Navigation
      'nav.pricing': 'Precios',
      'nav.testimonials': 'Testimonios',
      'nav.influencer': 'Soy influencer',
      'nav.signup': 'Registrarse',
      'nav.login': 'Iniciar sesión',
      'nav.home': 'Inicio',
      'nav.demo': 'Solicitar una demo',

      // Hero Section
      'hero.partners': '❤️ +1000 establecimientos asociados',
      'hero.title': 'Conviértete en la dirección imprescindible gracias al poder de la influencia',
      'hero.subtitle': 'Recibe influencers, aumenta tu visibilidad y haz de tu establecimiento una referencia en las redes sociales.',
      'hero.followers': 'seguidores',

      // Partners Section
      'partners.title': 'Las marcas francesas más grandes confían en nosotros ❤️',

      // Benefits Section
      'benefits.header': '+3.000 Creadores de contenido e Influencers disponibles',
      'benefits.title': '<span class="text_span bg_gradient-behype">Explota</span> tu visibilidad con <span class="text_span bg_gradient-behype">influencers</span>',
      'benefits.subtitle': 'El marketing de influencers es el formato publicitario más rentable en 2025',
      'benefits.paragraph': 'BEHYPE te conecta instantáneamente con influencers listos para descubrir y promocionar tu establecimiento. En pocos clics, alcanza una audiencia local y comprometida, gana visibilidad y atrae clientes a tu restaurante.',
      'benefits.cta': 'Recibe tus primeras solicitudes',

      // Features Section
      'features.undertitle': 'lo que vas a ganar',
      'features.title': '<span class="text_span bg_gradient-behype">La plataforma</span> de influencia que tiene las claves de <span class="sheading_gradient-span">tu éxito</span>',

      // Benefits Cards
      'benefits.card1.title': 'Aumenta tus ingresos',
      'benefits.card2.title': 'Multiplica tus reservas',
      'benefits.card3.title': 'Recibe influencers a menor coste',
      'benefits.card4.title': 'Impulsa tu visibilidad',
      'benefits.card5.title': 'Ahorra tiempo colosal',
      'benefits.card6.title': 'Reutiliza el contenido publicado',
      'benefits.card4.mobile': 'Impulsa tu visibilidad',

      // Tutorial Section
      'tutorial.undertitle': '¿cómo funciona?',
      'tutorial.title': '<span class="text_span bg_gradient-behype">BEHYPE</span> es la plataforma con la que siempre has soñado',
      'tutorial.subtitle': '5 pasos para comenzar la aventura',
      'tutorial.step1.title': 'Crea tu ficha de establecimiento',
      'tutorial.step1.desc': 'Registra tu establecimiento en nuestra plataforma añadiendo la información esencial.',
      'tutorial.step2.title': 'Recibe solicitudes de reserva',
      'tutorial.step2.desc': 'Instantáneamente, recibes solicitudes de colaboración de influencers.',
      'tutorial.step3.title': 'Selecciona tus perfiles',
      'tutorial.step3.desc': 'Acepta o rechaza colaboraciones en 2 clics en tu calendario de reservas.',
      'tutorial.step4.title': 'Colabora con influencers',
      'tutorial.step4.desc': 'A cambio de una experiencia ofrecida, comparten contenido en sus redes sociales.',
      'tutorial.step5.title': 'Admira el poder de la influencia',
      'tutorial.step5.desc': 'Tu establecimiento se beneficia de una visibilidad local, impactante y atractiva',

      // Testimonials Section
      'testimonials.undertitle': 'testimonios',
      'testimonials.title': '¡Usan <span class="text_span bg_gradient-behype">BeHype</span> y todo cambia!',
      'testimonials.subtitle': 'Desde millones de vistas hasta el crecimiento de ingresos, nuestros influencers y creadores ayudan a los establecimientos a lograr un impacto real. Nuestros socios lo cuentan mejor…',

      // CTA Section
      'cta.title': 'Comienza la aventura hoy',
      'cta.contact': 'Contáctanos',

      // Footer
      'footer.pages': 'Páginas',
      'footer.home': 'Inicio',
      'footer.legal': 'Legal',
      'footer.mentions': 'Menciones legales',
      'footer.privacy': 'Política de privacidad',
      'footer.cookies': 'Cookies',
      'footer.terms': 'Términos y condiciones',
      'footer.location': 'Aix en Provence',
      'footer.copyright': 'Copyright © | Hecho por',
    }
  };

  let currentLang = localStorage.getItem('behype_language') || 'fr';

  function translatePage() {
    const lang = currentLang;
    if (!translations[lang]) return;

    // Translate all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translations[lang][key];
        } else {
          element.innerHTML = translations[lang][key];
        }
      }
    });

    // Also translate data-i18n elements (backward compatibility)
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translations[lang][key];
        } else {
          element.textContent = translations[lang][key];
        }
      }
    });
  }

  // Listen for language changes
  window.addEventListener('languageChange', function(e) {
    currentLang = e.detail;
    translatePage();
  });

  // Initial translation on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', translatePage);
  } else {
    translatePage();
  }
})();
