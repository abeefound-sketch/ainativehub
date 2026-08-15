// ==========================================================================
// AI NATIVE HUB — INTERACTIVE LOGIC & ANIMATIONS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Progress Bar
  const progressBar = document.getElementById('progress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    if (progressBar) {
      progressBar.style.width = progress + '%';
    }
  });

  // 2. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-q');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    }
  });

  // 3. Package Selection to Pre-fill Form
  const pkgButtons = document.querySelectorAll('.pkg-card .btn');
  const concernTextarea = document.getElementById('parentConcern');
  
  pkgButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const pkgNames = [
        "Quan tâm Gói 1 Khởi Động (1 Tháng)",
        "Quan tâm Gói 2 Kiến Tạo - Vibe Coding (2 Tháng)",
        "Quan tâm Gói 3 Bứt Phá - Luyện thi & Toàn diện (3 Tháng)"
      ];
      if (concernTextarea) {
        concernTextarea.value = `[${pkgNames[index]}] - Mong muốn của gia đình: `;
      }
    });
  });

  // 4. Form Submission & Lead LocalStorage Record
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

      // Transition to success message
      discoveryForm.style.display = 'none';
      if (formSuccess) {
        formSuccess.classList.remove('hidden');
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
});
