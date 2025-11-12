// Coming Soon functionality for Sign Up and Log In buttons
(function() {
  'use strict';

  const translations = {
    fr: 'Bientôt disponible',
    en: 'Coming soon',
    es: 'Próximamente'
  };

  function getCurrentLanguage() {
    return localStorage.getItem('behype_language') || 'fr';
  }

  function createTooltip() {
    const tooltip = document.createElement('div');
    tooltip.className = 'behype-coming-soon-tooltip';
    tooltip.style.cssText = `
      position: absolute;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      pointer-events: none;
      opacity: 0;
      transform: translateY(-10px);
      transition: opacity 0.2s ease, transform 0.2s ease;
      white-space: nowrap;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    tooltip.textContent = translations[getCurrentLanguage()];
    document.body.appendChild(tooltip);
    return tooltip;
  }

  function positionTooltip(tooltip, button) {
    const rect = button.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.bottom + 8 + window.scrollY + 'px';
  }

  function disableButton(button) {
    const tooltip = createTooltip();

    // Prevent default click behavior
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }, true);

    // Show tooltip on hover
    button.addEventListener('mouseenter', function() {
      positionTooltip(tooltip, button);
      tooltip.style.opacity = '1';
      tooltip.style.transform = 'translateY(0)';
    });

    button.addEventListener('mouseleave', function() {
      tooltip.style.opacity = '0';
      tooltip.style.transform = 'translateY(-10px)';
    });

    // Update button styling to show it's disabled
    button.style.cursor = 'not-allowed';
    button.style.opacity = '0.8';
    button.style.transition = 'all 0.2s ease';

    // Add hover effect
    button.addEventListener('mouseenter', function() {
      button.style.opacity = '0.9';
      button.style.transform = 'scale(1.02)';
    });

    button.addEventListener('mouseleave', function() {
      button.style.opacity = '0.8';
      button.style.transform = 'scale(1)';
    });

    // Update tooltip text when language changes
    window.addEventListener('languageChange', function(e) {
      tooltip.textContent = translations[e.detail];
    });
  }

  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Use setTimeout to ensure DOM is fully loaded
    setTimeout(function() {
      // Find all buttons with nav.signup data-i18n attribute
      // EXCLUDE pricing/offer buttons (they need to work to scroll to form)
      const signUpButtons = document.querySelectorAll('[data-i18n="nav.signup"]');
      console.log('🔍 Found', signUpButtons.length, 'buttons with data-i18n="nav.signup"');
      signUpButtons.forEach(button => {
        const parentLink = button.closest('a');
        if (parentLink) {
          // Skip if this is a pricing/offer button
          const isPricingButton = parentLink.classList.contains('mobile_pricing-cta') ||
                                   parentLink.classList.contains('mobile_pricing-white-cta') ||
                                   parentLink.classList.contains('offre-cta');
          console.log('🔘 Button:', button.textContent.trim(),
                      '| Classes:', parentLink.className,
                      '| Is pricing?', isPricingButton);
          if (!isPricingButton) {
            console.log('🚫 Disabling button:', button.textContent.trim());
            disableButton(parentLink);
          } else {
            console.log('✅ Skipping pricing button:', button.textContent.trim());
          }
        }
      });

      // Find all buttons with nav.login data-i18n attribute
      const logInButtons = document.querySelectorAll('[data-i18n="nav.login"]');
      logInButtons.forEach(button => {
        const parentLink = button.closest('a');
        if (parentLink) {
          disableButton(parentLink);
        }
      });

      // Also handle mobile menu buttons if they exist
      const mobileButtons = document.querySelectorAll('.bh-navbar-mobile__btn');
      mobileButtons.forEach(button => {
        const text = button.textContent.toLowerCase();
        if (text.includes('inscrire') || text.includes('connecter') ||
            text.includes('sign up') || text.includes('log in') ||
            text.includes('registrarse') || text.includes('iniciar')) {
          disableButton(button);
        }
      });

      // Also check for direct links
      const navLinks = document.querySelectorAll('.navbar_button, .navbar_button-alternate');
      navLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        if (text.includes('inscrire') || text.includes('connecter') ||
            text.includes('sign up') || text.includes('log in') ||
            text.includes('registrarse') || text.includes('iniciar')) {
          disableButton(link);
        }
      });
    }, 100);
  }

  // Initialize
  init();

  // Also try on window load as a fallback
  window.addEventListener('load', function() {
    setTimeout(init, 100);
  });
})();
