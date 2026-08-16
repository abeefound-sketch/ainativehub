/**
 * AI NATIVE HUB — FELLOWSHIP & BESPOKE MENTORSHIP
 * Script: Spatial Engine, Interactive Terminal & Application Dossier
 */

document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  initTerminalSimulator();
  initSpatialScroll();
  initDossierForm();
});

/* ==========================================================================
   1. AMBIENT PARTICLES & LIGHTING CANVAS
   ========================================================================== */

function initAmbientCanvas() {
  const canvas = document.getElementById('ambientCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Particle System
  const particleCount = 28;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.4 + 0.1,
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Subtle ambient radial glow in top center
    const grad = ctx.createRadialGradient(width / 2, height * 0.2, 0, width / 2, height * 0.2, width * 0.6);
    grad.addColorStop(0, 'rgba(255, 255, 255, 0.025)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Render particles
    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   2. INTERACTIVE TERMINAL SIMULATOR
   ========================================================================== */

function initTerminalSimulator() {
  const typedEl = document.getElementById('typedCommand');
  const logsEl = document.getElementById('terminalLogs');
  if (!typedEl || !logsEl) return;

  const command = 'anh-orchestrate --problem "Automate Enterprise Ops" --agents 3';
  let charIdx = 0;

  const logSequence = [
    { text: '[INIT] Spawning Autonomous Orchestrator Agent...', type: 'log-info', delay: 400 },
    { text: '[AGENT 1] Ingesting unstructured business data (200+ docs/day)...', type: 'log-info', delay: 800 },
    { text: '[AGENT 2] Synthesizing custom logic & schema parsing...', type: 'log-info', delay: 1200 },
    { text: '[AGENT 3] Vibe Coding internal web dashboard via Cursor Engine...', type: 'log-info', delay: 1700 },
    { text: '[SUCCESS] Artifact deployed at internal.workspace.local (Latency: 120ms)', type: 'log-success', delay: 2200 },
    { text: '[STATUS] Zero manual intervention required. 15 hrs/week saved.', type: 'log-warn', delay: 2700 }
  ];

  function typeChar() {
    if (charIdx < command.length) {
      typedEl.textContent += command.charAt(charIdx);
      charIdx++;
      setTimeout(typeChar, Math.random() * 35 + 25);
    } else {
      setTimeout(triggerLogs, 300);
    }
  }

  function triggerLogs() {
    logSequence.forEach((entry) => {
      setTimeout(() => {
        const line = document.createElement('div');
        line.className = `log-entry ${entry.type}`;
        line.textContent = `> ${entry.text}`;
        logsEl.appendChild(line);
      }, entry.delay);
    });
  }

  // Start typing after initial load
  setTimeout(typeChar, 800);
}

/* ==========================================================================
   3. SPATIAL SCROLL CONTROLLER (3D PERSPECTIVE PARALLAX)
   ========================================================================== */

function initSpatialScroll() {
  let isTicking = false;

  function handleScroll() {
    const scrollY = window.scrollY;
    const hero = document.getElementById('hero');
    const terminal = document.getElementById('terminalSimulator');

    if (hero && terminal) {
      const heroRect = hero.getBoundingClientRect();
      const progress = Math.min(Math.max(-heroRect.top / (heroRect.height || 1), 0), 1);

      // Subtle 3D perspective pitch on the terminal
      const rotateX = Math.max(0, 12 - progress * 12);
      const translateZ = progress * 120;
      terminal.style.transform = `perspective(1000px) rotateX(${rotateX}deg) translateZ(${translateZ}px)`;
    }

    isTicking = false;
  }

  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(handleScroll);
      isTicking = true;
    }
  }, { passive: true });
}

/* ==========================================================================
   4. APPLICATION DOSSIER FORM HANDLER
   ========================================================================== */

function initDossierForm() {
  const form = document.getElementById('dossierForm');
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');
  if (!form || !feedback || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Disable button & show progress state
    const originalText = submitBtn.querySelector('.btn-text').textContent;
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').textContent = 'ĐANG MÃ HÓA & GỬI HỒ SƠ...';

    // Simulate secure intake registration
    setTimeout(() => {
      form.reset();
      submitBtn.style.display = 'none';
      feedback.style.display = 'flex';
      feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 900);
  });
}
