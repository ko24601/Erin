/**
 * ============================================================================
 * ROMANTIC PROPOSAL EXPERIENCE (FOR KYLE & ERIN)
 * ============================================================================
 */

(function () {
  'use strict';

  // --- STATE MANAGEMENT ---
  const state = {
    currentStep: 1,
    soundEnabled: true,
    audioCtx: null
  };

  // --- DOM ELEMENTS ---
  const elements = {
    progressWrapper: document.getElementById('progress-wrapper'),
    progressText: document.getElementById('progress-text'),
    progressBarFill: document.getElementById('progress-bar-fill'),
    soundToggle: document.getElementById('sound-toggle'),
    soundIcon: document.getElementById('sound-icon'),
    
    // Step Cards
    step1: document.getElementById('step-1'),
    step2: document.getElementById('step-2'),
    step3: document.getElementById('step-3'),
    step4: document.getElementById('step-4'),
    stepSuccess: document.getElementById('step-success'),
    
    // Step 1 Controls
    nameForm: document.getElementById('name-form'),
    nameInput: document.getElementById('name-input'),
    nameFeedback: document.getElementById('step1-feedback'),
    nameSubmitBtn: document.getElementById('name-submit-btn'),

    // Step 2 Controls
    step2Feedback: document.getElementById('step2-feedback'),
    step2YesBtn: document.getElementById('step2-yes-btn'),
    step2NoBtn: document.getElementById('step2-no-btn'),

    // Step 3 Controls
    step3Feedback: document.getElementById('step3-feedback'),
    step3YesBtn: document.getElementById('step3-yes-btn'),
    step3NoBtn: document.getElementById('step3-no-btn'),

    // Proposal Controls
    proposalYes1: document.getElementById('proposal-yes-btn-1'),
    proposalYes2: document.getElementById('proposal-yes-btn-2'),

    // Celebration
    celebrationDate: document.getElementById('celebration-date'),
    replayBtn: document.getElementById('replay-btn'),

    // Canvases
    bgCanvas: document.getElementById('bg-canvas'),
    confettiCanvas: document.getElementById('confetti-canvas')
  };

  // ==========================================================================
  // 1. SOUND SYNTHESIZER (Web Audio API - Zero External Dependencies)
  // ==========================================================================

  function getAudioContext() {
    if (!state.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        state.audioCtx = new AudioContext();
      }
    }
    if (state.audioCtx && state.audioCtx.state === 'suspended') {
      state.audioCtx.resume();
    }
    return state.audioCtx;
  }

  function playTone(freq, type = 'sine', duration = 0.2, gainValue = 0.15, delay = 0) {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      setTimeout(() => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(gainValue, ctx.currentTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + duration);
      }, delay * 1000);
    } catch (e) {
      // Audio not supported or blocked
    }
  }

  function playSound(type) {
    if (!state.soundEnabled) return;

    if (type === 'click') {
      playTone(523.25, 'sine', 0.12, 0.1); // C5
    } else if (type === 'wrong') {
      playTone(330, 'triangle', 0.15, 0.15); // E4
      playTone(277.18, 'triangle', 0.25, 0.15, 0.12); // C#4
    } else if (type === 'success') {
      // Sweet harp chord (C-E-G-B-C)
      playTone(523.25, 'sine', 0.25, 0.12, 0.0);   // C5
      playTone(659.25, 'sine', 0.25, 0.12, 0.08);  // E5
      playTone(783.99, 'sine', 0.35, 0.14, 0.16);  // G5
      playTone(1046.50, 'sine', 0.5, 0.16, 0.24);  // C6
    } else if (type === 'celebration') {
      // Grand celebratory romantic melody
      const notes = [
        { f: 523.25, d: 0.0 },   // C5
        { f: 659.25, d: 0.09 },  // E5
        { f: 783.99, d: 0.18 },  // G5
        { f: 987.77, d: 0.27 },  // B5
        { f: 1046.50, d: 0.38 }, // C6
        { f: 1318.51, d: 0.52 }, // E6
        { f: 1567.98, d: 0.70 }  // G6
      ];
      notes.forEach(n => playTone(n.f, 'sine', 0.6, 0.18, n.d));
    }
  }

  // ==========================================================================
  // 2. AMBIENT FLOATING HEARTS BACKGROUND
  // ==========================================================================

  const bgHearts = [];
  const bgCtx = elements.bgCanvas.getContext('2d');
  let bgWidth = 0;
  let bgHeight = 0;

  function resizeBgCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    bgWidth = window.innerWidth;
    bgHeight = window.innerHeight;
    elements.bgCanvas.width = bgWidth * dpr;
    elements.bgCanvas.height = bgHeight * dpr;
    bgCtx.scale(dpr, dpr);
  }

  function drawHeartShape(ctx, x, y, size, color, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(x, y + topCurveHeight);
    // top left curve
    ctx.bezierCurveTo(
      x, y, 
      x - size / 2, y, 
      x - size / 2, y + topCurveHeight
    );
    // bottom left curve
    ctx.bezierCurveTo(
      x - size / 2, y + (size + topCurveHeight) / 2, 
      x, y + (size + topCurveHeight) / 1.2, 
      x, y + size
    );
    // bottom right curve
    ctx.bezierCurveTo(
      x, y + (size + topCurveHeight) / 1.2, 
      x + size / 2, y + (size + topCurveHeight) / 2, 
      x + size / 2, y + topCurveHeight
    );
    // top right curve
    ctx.bezierCurveTo(
      x + size / 2, y, 
      x, y, 
      x, y + topCurveHeight
    );
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function initBgHearts() {
    bgHearts.length = 0;
    const count = Math.min(Math.floor(bgWidth / 22), 28);
    const colors = ['#ff8fa3', '#ff758c', '#ff4d6d', '#ffb3c1', '#f72585'];

    for (let i = 0; i < count; i++) {
      bgHearts.push({
        x: Math.random() * bgWidth,
        y: Math.random() * bgHeight,
        size: 10 + Math.random() * 20,
        speed: 0.4 + Math.random() * 0.8,
        swaySpeed: 0.015 + Math.random() * 0.025,
        swayDist: 15 + Math.random() * 30,
        swayOffset: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0.15 + Math.random() * 0.35
      });
    }
  }

  let bgAnimationId;
  function animateBgHearts(timestamp) {
    bgCtx.clearRect(0, 0, bgWidth, bgHeight);

    for (let i = 0; i < bgHearts.length; i++) {
      const h = bgHearts[i];
      h.y -= h.speed;
      h.swayOffset += h.swaySpeed;
      const currentX = h.x + Math.sin(h.swayOffset) * h.swayDist;

      drawHeartShape(bgCtx, currentX, h.y, h.size, h.color, h.alpha);

      // Reset when scrolled past top
      if (h.y < -h.size * 2) {
        h.y = bgHeight + h.size;
        h.x = Math.random() * bgWidth;
      }
    }

    bgAnimationId = requestAnimationFrame(animateBgHearts);
  }

  // ==========================================================================
  // 3. CELEBRATORY CONFETTI & HEARTS EXPLOSION
  // ==========================================================================

  const confettiParticles = [];
  const confettiCtx = elements.confettiCanvas.getContext('2d');
  let confettiWidth = 0;
  let confettiHeight = 0;
  let isCelebrating = false;

  function resizeConfettiCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    confettiWidth = window.innerWidth;
    confettiHeight = window.innerHeight;
    elements.confettiCanvas.width = confettiWidth * dpr;
    elements.confettiCanvas.height = confettiHeight * dpr;
    confettiCtx.scale(dpr, dpr);
  }

  function launchCelebration() {
    isCelebrating = true;
    const colors = ['#ff2a5f', '#ff4d6d', '#ff758c', '#ffd166', '#ffb3c1', '#7209b7', '#ffeedd'];
    const heartColors = ['#ff3366', '#e11d48', '#ff4d79', '#ff758c'];

    // Burst 1: Central Explosion
    for (let i = 0; i < 140; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 4 + Math.random() * 12;
      const isHeart = Math.random() > 0.4;
      confettiParticles.push({
        x: confettiWidth / 2,
        y: confettiHeight / 2 + 50,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 4,
        size: isHeart ? 14 + Math.random() * 16 : 7 + Math.random() * 9,
        color: isHeart ? heartColors[Math.floor(Math.random() * heartColors.length)] : colors[Math.floor(Math.random() * colors.length)],
        isHeart: isHeart,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        gravity: 0.22,
        drag: 0.96,
        alpha: 1,
        life: 1
      });
    }

    // Burst 2: Side Showers
    const intervals = [300, 700, 1200, 1800, 2600];
    intervals.forEach(delay => {
      setTimeout(() => {
        if (!isCelebrating) return;
        for (let i = 0; i < 40; i++) {
          const spawnLeft = Math.random() > 0.5;
          confettiParticles.push({
            x: spawnLeft ? Math.random() * (confettiWidth * 0.3) : confettiWidth * 0.7 + Math.random() * (confettiWidth * 0.3),
            y: -20,
            vx: (Math.random() - 0.5) * 4,
            vy: 2 + Math.random() * 5,
            size: Math.random() > 0.5 ? 12 + Math.random() * 14 : 6 + Math.random() * 8,
            color: colors[Math.floor(Math.random() * colors.length)],
            isHeart: Math.random() > 0.45,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 8,
            gravity: 0.16,
            drag: 0.98,
            alpha: 1,
            life: 1
          });
        }
      }, delay);
    });

    animateConfetti();
  }

  function animateConfetti() {
    confettiCtx.clearRect(0, 0, confettiWidth, confettiHeight);

    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.rotation += p.rotationSpeed;

      if (p.y > confettiHeight - 100) {
        p.alpha -= 0.015;
      }

      if (p.alpha <= 0 || p.y > confettiHeight + 40) {
        confettiParticles.splice(i, 1);
        continue;
      }

      confettiCtx.save();
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate((p.rotation * Math.PI) / 180);

      if (p.isHeart) {
        drawHeartShape(confettiCtx, -p.size / 2, -p.size / 2, p.size, p.color, p.alpha);
      } else {
        confettiCtx.globalAlpha = p.alpha;
        confettiCtx.fillStyle = p.color;
        confettiCtx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      }
      confettiCtx.restore();
    }

    if (confettiParticles.length > 0) {
      requestAnimationFrame(animateConfetti);
    } else {
      isCelebrating = false;
    }
  }

  // ==========================================================================
  // 4. STEP TRANSITION LOGIC
  // ==========================================================================

  function getStepElement(stepNum) {
    switch (stepNum) {
      case 1: return elements.step1;
      case 2: return elements.step2;
      case 3: return elements.step3;
      case 4: return elements.step4;
      case 5: return elements.stepSuccess;
      default: return null;
    }
  }

  function updateProgress(stepNum) {
    if (stepNum <= 3) {
      elements.progressWrapper.classList.remove('hidden');
      elements.progressText.textContent = `Step ${stepNum} of 3`;
      const percentages = [0, 33.33, 66.66, 100];
      elements.progressBarFill.style.width = `${percentages[stepNum]}%`;
    } else {
      // Hide progress bar on proposal and celebration for maximum focus
      elements.progressWrapper.classList.add('hidden');
    }
  }

  function goToStep(nextStep, direction = 'forward') {
    const currentCard = getStepElement(state.currentStep);
    const nextCard = getStepElement(nextStep);
    if (!currentCard || !nextCard) return;

    // Exit animation on current
    currentCard.classList.remove('active');
    currentCard.classList.add(direction === 'forward' ? 'exit-left' : 'exit-right');

    setTimeout(() => {
      currentCard.classList.remove('exit-left', 'exit-right');
      
      // Enter animation on next
      nextCard.classList.add('active');
      state.currentStep = nextStep;
      updateProgress(nextStep);

      // Focus management
      if (nextStep === 1) {
        setTimeout(() => elements.nameInput.focus(), 300);
      } else if (nextStep === 2) {
        elements.step2YesBtn.focus();
      } else if (nextStep === 3) {
        elements.step3YesBtn.focus();
      } else if (nextStep === 4) {
        elements.proposalYes1.focus();
      }
    }, 280);
  }

  // Trigger playful shake
  function triggerShake(cardElement) {
    cardElement.classList.remove('shake-active');
    void cardElement.offsetWidth; // Force reflow
    cardElement.classList.add('shake-active');
    setTimeout(() => {
      cardElement.classList.remove('shake-active');
    }, 450);
  }

  // Trigger playful wiggle
  function triggerWiggle(buttonElement) {
    buttonElement.classList.remove('wiggle-active');
    void buttonElement.offsetWidth; // Force reflow
    buttonElement.classList.add('wiggle-active');
    setTimeout(() => {
      buttonElement.classList.remove('wiggle-active');
    }, 400);
  }

  // ==========================================================================
  // 5. EVENT HANDLERS & STEP VALIDATIONS
  // ==========================================================================

  // --- Step 1: Name Check ---
  function handleNameSubmit() {
    const rawVal = elements.nameInput.value;
    const cleanVal = rawVal.trim().toLowerCase();

    if (cleanVal === 'erin') {
      // Correct!
      playSound('success');
      elements.nameFeedback.textContent = "That's right ❤️";
      elements.nameFeedback.className = 'feedback-msg success';
      elements.nameInput.blur();

      setTimeout(() => {
        goToStep(2, 'forward');
      }, 700);
    } else {
      // Incorrect!
      playSound('wrong');
      elements.nameFeedback.textContent = "Nuh uh, wrong answer 😤❤️";
      elements.nameFeedback.className = 'feedback-msg error';
      triggerShake(elements.step1);
      elements.nameInput.focus();
      elements.nameInput.select();
    }
  }

  elements.nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleNameSubmit();
  });

  // --- Step 2: First Promise ---
  elements.step2YesBtn.addEventListener('click', () => {
    playSound('success');
    elements.step2Feedback.textContent = "Always & forever ❤️";
    elements.step2Feedback.className = 'feedback-msg success';
    setTimeout(() => {
      elements.step2Feedback.textContent = '';
      goToStep(3, 'forward');
    }, 600);
  });

  elements.step2NoBtn.addEventListener('click', () => {
    playSound('wrong');
    elements.step2Feedback.textContent = "Try again ❤️";
    elements.step2Feedback.className = 'feedback-msg error';
    triggerWiggle(elements.step2NoBtn);
  });

  // --- Step 3: Second Promise ---
  elements.step3YesBtn.addEventListener('click', () => {
    playSound('success');
    elements.step3Feedback.textContent = "You & me against the world 💫❤️";
    elements.step3Feedback.className = 'feedback-msg success';
    setTimeout(() => {
      elements.step3Feedback.textContent = '';
      goToStep(4, 'forward');
    }, 700);
  });

  elements.step3NoBtn.addEventListener('click', () => {
    playSound('wrong');
    elements.step3Feedback.textContent = "Try again ❤️";
    elements.step3Feedback.className = 'feedback-msg error';
    triggerWiggle(elements.step3NoBtn);
  });

  // --- Step 4: Final Proposal Acceptance ---
  function handleProposalAccept() {
    playSound('celebration');
    launchCelebration();
    
    // Format romantic date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    elements.celebrationDate.textContent = `Officially Together • ${today} 💕`;

    setTimeout(() => {
      goToStep(5, 'forward');
    }, 650);
  }

  elements.proposalYes1.addEventListener('click', handleProposalAccept);
  elements.proposalYes2.addEventListener('click', handleProposalAccept);

  // --- Step 5: Replay ---
  elements.replayBtn.addEventListener('click', () => {
    playSound('click');
    elements.nameInput.value = '';
    elements.nameFeedback.textContent = '';
    elements.step2Feedback.textContent = '';
    elements.step3Feedback.textContent = '';
    goToStep(1, 'backward');
  });

  // --- Sound Toggle ---
  elements.soundToggle.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    elements.soundIcon.textContent = state.soundEnabled ? '🔔' : '🔕';
    elements.soundToggle.querySelector('.sound-text').textContent = state.soundEnabled ? 'Sound' : 'Muted';
    if (state.soundEnabled) {
      playSound('click');
    }
  });

  // ==========================================================================
  // 6. INITIALIZATION & RESIZE
  // ==========================================================================

  function init() {
    resizeBgCanvas();
    resizeConfettiCanvas();
    initBgHearts();
    animateBgHearts();

    window.addEventListener('resize', () => {
      resizeBgCanvas();
      resizeConfettiCanvas();
      initBgHearts();
    });

    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        resizeBgCanvas();
        resizeConfettiCanvas();
        initBgHearts();
      }, 150);
    });

    // Auto-focus name input
    setTimeout(() => {
      elements.nameInput.focus();
    }, 400);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
