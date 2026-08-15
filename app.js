// ==========================================================================
// AI NATIVE HUB — MULTILINGUAL, MOBILE-OPTIMIZED INTERACTIVE LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Multilingual Switcher (VI / EN / ZH)
  const langButtons = document.querySelectorAll('.lang-btn');
  const storedLang = localStorage.getItem('preferred_lang') || 'vi';
  
  function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('preferred_lang', lang);

    langButtons.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Initialize with stored or default language
  setLanguage(storedLang);

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang) {
        setLanguage(targetLang);
      }
    });
  });

  // 2. Mobile Drawer Toggle
  const drawerToggle = document.getElementById('drawerToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (drawerToggle && mobileDrawer) {
    drawerToggle.addEventListener('click', () => {
      drawerToggle.classList.toggle('open');
      mobileDrawer.classList.toggle('open');
      document.body.style.overflow = mobileDrawer.classList.contains('open') ? 'hidden' : '';
    });

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawerToggle.classList.remove('open');
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // 3. Scroll Progress Bar
  const progressBar = document.getElementById('progress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (scrollHeight > 0 && progressBar) {
      const progress = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = Math.min(progress, 100) + '%';
    }
  }, { passive: true });

  // 4. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-q');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });

        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    }
  });

  // 5. Package Selection to Pre-fill Form
  const pkgButtons = document.querySelectorAll('.pkg-card .btn');
  const concernTextarea = document.getElementById('parentConcern');
  
  pkgButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const currentLang = document.documentElement.getAttribute('lang') || 'vi';
      const pkgNames = {
        vi: [
          "Quan tâm Gói 1 Khởi Động (1 Tháng)",
          "Quan tâm Gói 2 Kiến Tạo - Vibe Coding (2 Tháng)",
          "Quan tâm Gói 3 Bứt Phá - Luyện thi & Toàn diện (3 Tháng)"
        ],
        en: [
          "Interested in Kickstarter Tier (1 Month)",
          "Interested in Builder Pro Tier (2 Months)",
          "Interested in Mastery Tier (3 Months)"
        ],
        zh: [
          "意向选择 启航方案 (1个月)",
          "意向选择 创客进阶方案 (2个月)",
          "意向选择 全能精通方案 (3个月)"
        ]
      };

      const selectedName = (pkgNames[currentLang] || pkgNames['vi'])[index];
      if (concernTextarea) {
        concernTextarea.value = `[${selectedName}] - `;
        concernTextarea.focus();
      }
    });
  });

  // 6. Form Submission & Lead LocalStorage Record
  const discoveryForm = document.getElementById('discoveryForm');
  const formSuccess = document.getElementById('formSuccess');

  if (discoveryForm) {
    discoveryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const parentName = document.getElementById('parentName').value.trim();
      const parentPhone = document.getElementById('parentPhone').value.trim();
      const studentGrade = document.getElementById('studentGrade').value;
      const parentConcern = document.getElementById('parentConcern').value.trim();

      const leadData = {
        timestamp: new Date().toISOString(),
        lang: document.documentElement.getAttribute('lang') || 'vi',
        parentName,
        parentPhone,
        studentGrade,
        parentConcern
      };

      try {
        const existingLeads = JSON.parse(localStorage.getItem('ainativehub_leads') || '[]');
        existingLeads.push(leadData);
        localStorage.setItem('ainativehub_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.warn('LocalStorage unavailable:', err);
      }

      discoveryForm.style.display = 'none';
      if (formSuccess) {
        formSuccess.classList.remove('hidden');
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
});
