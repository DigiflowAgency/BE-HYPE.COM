// Language Selector for Static HTML Pages
(function() {
  'use strict';

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  let currentLang = localStorage.getItem('behype_language') || 'fr';
  let isOpen = false;

  function getCurrentLanguage() {
    return languages.find(lang => lang.code === currentLang) || languages[0];
  }

  function createLanguageSelector() {
    const container = document.createElement('div');
    container.className = 'language-selector-html';
    container.innerHTML = `
      <button class="language-selector-button-html" aria-label="Select language">
        <span class="language-flag-html">${getCurrentLanguage().flag}</span>
        <span class="language-code-html">${currentLang.toUpperCase()}</span>
        <svg class="language-arrow-html" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="language-dropdown-html" style="display: none;">
        ${languages.map(lang => `
          <button class="language-option-html ${currentLang === lang.code ? 'active' : ''}" data-lang="${lang.code}">
            <span class="language-flag-html">${lang.flag}</span>
            <span class="language-name-html">${lang.name}</span>
            ${currentLang === lang.code ? `
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            ` : ''}
          </button>
        `).join('')}
      </div>
    `;

    return container;
  }

  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .language-selector-html {
        position: relative;
        display: inline-flex;
        margin-left: 12px;
      }

      .language-selector-button-html {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 12px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        color: white;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      }

      .language-selector-button-html:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
      }

      .language-flag-html {
        font-size: 18px;
        line-height: 1;
      }

      .language-code-html {
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.5px;
      }

      .language-arrow-html {
        transition: transform 0.2s ease;
        color: rgba(255, 255, 255, 0.6);
      }

      .language-arrow-html.open {
        transform: rotate(180deg);
      }

      .language-dropdown-html {
        position: absolute;
        top: calc(100% + 8px);
        right: 0;
        min-width: 180px;
        background: #1a1a1a;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        padding: 8px;
        z-index: 1000;
        animation: fadeInLang 0.2s ease;
      }

      @keyframes fadeInLang {
        from {
          opacity: 0;
          transform: translateY(-8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .language-option-html {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 12px;
        background: transparent;
        border: none;
        border-radius: 8px;
        color: white;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-family: -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      }

      .language-option-html:hover {
        background: rgba(255, 255, 255, 0.05);
      }

      .language-option-html.active {
        background: rgba(59, 130, 246, 0.1);
        color: #3b82f6;
      }

      .language-name-html {
        flex: 1;
        text-align: left;
        font-weight: 500;
      }

      @media (max-width: 768px) {
        .language-selector-html {
          margin-left: 0;
          margin-top: 12px;
        }

        .language-selector-button-html {
          width: 100%;
          justify-content: center;
        }

        .language-dropdown-html {
          right: auto;
          left: 0;
          width: 100%;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function handleLanguageChange(langCode) {
    currentLang = langCode;
    localStorage.setItem('behype_language', langCode);

    // Update button
    const button = document.querySelector('.language-selector-button-html');
    const lang = getCurrentLanguage();
    button.querySelector('.language-flag-html').textContent = lang.flag;
    button.querySelector('.language-code-html').textContent = langCode.toUpperCase();

    // Update dropdown
    document.querySelectorAll('.language-option-html').forEach(option => {
      option.classList.toggle('active', option.dataset.lang === langCode);
    });

    // Close dropdown
    closeDropdown();

    // Dispatch custom event for translation
    window.dispatchEvent(new CustomEvent('languageChange', { detail: langCode }));
  }

  function toggleDropdown() {
    const dropdown = document.querySelector('.language-dropdown-html');
    const arrow = document.querySelector('.language-arrow-html');
    isOpen = !isOpen;
    dropdown.style.display = isOpen ? 'block' : 'none';
    arrow.classList.toggle('open', isOpen);
  }

  function closeDropdown() {
    const dropdown = document.querySelector('.language-dropdown-html');
    const arrow = document.querySelector('.language-arrow-html');
    isOpen = false;
    dropdown.style.display = 'none';
    arrow.classList.remove('open');
  }

  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Inject styles
    injectStyles();

    // Find navbar CTA container
    const navCta = document.querySelector('.behype_nav-cta');
    if (!navCta) return;

    // Check if React language selector already exists (avoid duplicates on React pages)
    if (navCta.querySelector('.language-selector')) {
      return;
    }

    // Create and insert language selector
    const selector = createLanguageSelector();

    // Insert before the menu button
    const menuButton = navCta.querySelector('.f-navigation-menu-button');
    if (menuButton) {
      navCta.insertBefore(selector, menuButton);
    } else {
      navCta.appendChild(selector);
    }

    // Add event listeners
    const button = selector.querySelector('.language-selector-button-html');
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown();
    });

    // Language options
    selector.querySelectorAll('.language-option-html').forEach(option => {
      option.addEventListener('click', () => {
        handleLanguageChange(option.dataset.lang);
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!selector.contains(e.target)) {
        closeDropdown();
      }
    });
  }

  // Initialize
  init();
})();
