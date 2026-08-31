/**
 * ============================================================================
 * ROMANTIC PROPOSAL EXPERIENCE (FOR KYLE & ERIN)
 * ============================================================================
 */

(function () {
  'use strict';

  // --- KYLE'S 100 REASONS WHY I LOVE YOU ---
  const kyleReasons = [
    "I love your eyes",
    "I love the way you look at me",
    "I love how u make me smile",
    "I love the lil racist comments u make towards me (jk)",
    "I love your laugh",
    "I love sharing inside jokes we have (Gay Lil Monkey)",
    "I love how u do ur stupid lil dance",
    "I love the messages u give me",
    "I love the way u make me wanna be a better person for you",
    "I love hearing u waffle about goddknows what",
    "I love the way we lock eye contact",
    "I love the way u smile when I tell you I love you",
    "I love the way u can make the world seem quiet",
    "I love how caring you are",
    "I love you’re little vocal stims",
    "I love how u have a dirty mind when I tell the most simplest things",
    "I love how u can understand where im coming from in situations",
    "I love how I can smile at my phone when I see ur name",
    "I love the time we spend together regardless of in silence or not",
    "I love the way u look at me when u catch me looking at you",
    "I love how funny u can be SOMETIMES",
    "I love the comfort you give me even if its over the phone",
    "I love how small u are and the fact u can't reach anything",
    "I love the way u do your hair, whether messy or done",
    "I love the way u come to about situations",
    "I love how the deep talks we have",
    "I love the way we clicked in way",
    "I love the way I know I can come to you about anything and know u wont push me away",
    "I love the way u dress",
    "I love the attitude u have when I've done nothing wrong (SOMETIMES LOVE IT)",
    "I love the randomness about you",
    "I love the way you care",
    "I love you face, the way you look overall",
    "I love the way your nose scrunches up when you're trying not to laugh",
    "I love the way you tease me WHEN IM TRYNA FOCUS",
    "I love the sudden flash of realization in your eyes when u finally get a joke a minute later",
    "I love the way you look in sweatpants and a messy bun",
    "I love the way u look when ur deeply focused on TikTok or colouring",
    "I love the way u try to mimic me AND FAIL TERRIBLY",
    "I love the random snaps I get from you",
    "I love the way u give me a side eye when I make a comment abt something",
    "I love the way you look when you're on your tiptoes stretching to reach the top shelf",
    "I love the confusion on your face when ur tyna understand what im saying to you",
    "I love how u get lost in a conversation weve only had for 5 mins",
    "I love the way you look with no make up on (U DONT NEED IT)",
    "I love the un needed eye rolls u give me for no reason at all",
    "I love the face u make when ur trying to pretend ur not tired",
    "I love the way ur voice softens when ur tired",
    "I love the lil smile when I say that I love you",
    "I love the way u do some random ass emotes js randomly",
    "I love the way u think ur bigger than me even tho ur some 5ft 1\" midget",
    "I love the way u fake the innocence after doing something annoying :)",
    "I love the way u completely forget what ur abt say midsentence",
    "I love the way the voice notes I get from u randomly",
    "I love the way ur not afraid to love out loud in a sense",
    "I love the way I call you out and still deny it even though ive been right this entire time",
    "I love the judgemental look you give me when im raging at the game ( You'll never understand my pain )",
    "I love the way you laugh at my shitty jokes",
    "I love the tiktoks u spam me with on a daily basis",
    "I love the way u dress thinking its gonna be warm then turns out to be freezing cold",
    "I love the I love you more battles we have even though I do",
    "I love the way u try to be mad at me for something then ending up laughing abt it cause u cant hold a straight face",
    "I love the way u look perfect even when ur being a pain in my ass",
    "I love the way u look at me randomly when I catch you",
    "I love the blank stare you give when I try explain something to you",
    "I love how u thing ur right all the time when ur fucking not",
    "I love the way I get spammed",
    "I love the way u get distracted by ur own reflection when we're on call",
    "I love the way u say \"goodnight\" but keep texting me for another hour",
    "I love how u complain about being bored but refuse to do any of my suggestions",
    "I love how u act all bossy over the phone when u know u can't reach me",
    "I love the way u try to act intimidating but u just look adorable",
    "I love how u randomly tell me u love me out of nowhere",
    "I love the way u get shy when I compliment u randomly",
    "I love the way u complain about the weather where u are",
    "I love the way u can tell im upset just by how I text",
    "I love how u always want to be the last one to say \"I love you\"",
    "I love the way u get mad when I beat u to saying I love you",
    "I love how u get mad at my jokes but still laugh at them anyway",
    "I love how I can look at my lock screen and smile",
    "I love the way u send me snaps from the oddest angles and still look pretty",
    "I love the way u get distracted by ur own reflection on FaceTime for the 10th time today",
    "I love the way u try to do a serious face and immediately crack a smile",
    "I love how u just sit in silence with me and it never feels awkward",
    "I love the fact that hearing ur voice over the speaker is the best part of my entire day",
    "I love the way u listen to me waffle",
    "I love the way u laugh when im arguing at someone (Jayden)",
    "I love the way I can be the most strangest person and u still love me",
    "I love the way how peaceful ur face is when watching ur show",
    "I love the way u say u miss me and its only been 3 mins",
    "I love the way u always wanna talk",
    "I love the way u can be an absolute freak",
    "I love the way u choose me",
    "I love the way we look at eachother and laugh for no reason",
    "I love the way how shy u can be for no reason",
    "I love the u can be clingy in a sense",
    "I love the way we can be talking for hours",
    "I love the way u care about how I feel",
    "I love the attention u give me"
  ];

  const reasonEmojis = ["🐵❤️", "👀✨", "🥰💫", "🥺💕", "🤭🌹", "🤣💖", "💃✨", "💌🌸", "💫💍", "🐒❤️"];

  const runawayMessages = [
    "Nice try 5ft1 midget 😉",
    "Nu-uh, you're stuck with Kyle! 🏃‍♂️",
    "Button broke, only YES works! 💖",
    "U can't get rid of me that easily! 😏",
    "Wrong answer, try the other button ❤️",
    "Oops! You missed it! 🏃‍♀️💨"
  ];

  // --- STATE ---
  const state = {
    currentStep: 0,
    soundEnabled: true,
    audioCtx: null,
    currentReasonIndex: 5
  };

  function $(id) {
    return document.getElementById(id);
  }

  // ==========================================================================
  // 1. SOUND SYNTHESIZER
  // ==========================================================================

  function playTone(freq, type, duration, gainVal, delay) {
    if (!state.soundEnabled) return;
    try {
      if (!state.audioCtx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) state.audioCtx = new AudioCtx();
      }
      if (state.audioCtx && state.audioCtx.state === 'suspended') {
        state.audioCtx.resume();
      }
      if (!state.audioCtx) return;

      setTimeout(() => {
        try {
          const osc = state.audioCtx.createOscillator();
          const gain = state.audioCtx.createGain();
          osc.type = type || 'sine';
          osc.frequency.setValueAtTime(freq, state.audioCtx.currentTime);
          gain.gain.setValueAtTime(0.001, state.audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(gainVal || 0.15, state.audioCtx.currentTime + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, state.audioCtx.currentTime + (duration || 0.2));
          osc.connect(gain);
          gain.connect(state.audioCtx.destination);
          osc.start(state.audioCtx.currentTime);
          osc.stop(state.audioCtx.currentTime + (duration || 0.2));
        } catch (e) {}
      }, (delay || 0) * 1000);
    } catch (e) {}
  }

  function playSound(type) {
    if (!state.soundEnabled) return;
    try {
      if (type === 'click') {
        playTone(523.25, 'sine', 0.12, 0.1);
      } else if (type === 'dodge') {
        playTone(659.25, 'triangle', 0.1, 0.12);
        playTone(880, 'triangle', 0.12, 0.12, 0.06);
      } else if (type === 'wrong') {
        playTone(330, 'triangle', 0.15, 0.15);
        playTone(277.18, 'triangle', 0.25, 0.15, 0.12);
      } else if (type === 'unseal') {
        playTone(587.33, 'sine', 0.3, 0.12, 0.0);
        playTone(739.99, 'sine', 0.3, 0.12, 0.08);
        playTone(880.00, 'sine', 0.35, 0.14, 0.16);
        playTone(1174.66, 'sine', 0.5, 0.16, 0.24);
      } else if (type === 'success') {
        playTone(523.25, 'sine', 0.25, 0.12, 0.0);
        playTone(659.25, 'sine', 0.25, 0.12, 0.08);
        playTone(783.99, 'sine', 0.35, 0.14, 0.16);
        playTone(1046.50, 'sine', 0.5, 0.16, 0.24);
      } else if (type === 'celebration') {
        const notes = [
          { f: 523.25, d: 0.0 },
          { f: 659.25, d: 0.09 },
          { f: 783.99, d: 0.18 },
          { f: 987.77, d: 0.27 },
          { f: 1046.50, d: 0.38 },
          { f: 1318.51, d: 0.52 },
          { f: 1567.98, d: 0.70 }
        ];
        notes.forEach(n => playTone(n.f, 'sine', 0.6, 0.18, n.d));
      }
    } catch (e) {}
  }

  // ==========================================================================
  // 2. STEP TRANSITION LOGIC
  // ==========================================================================

  const stepCardIds = [
    'step-0',
    'step-1',
    'step-2',
    'step-3',
    'step-reasons',
    'step-proposal',
    'step-success'
  ];

  function goToStep(stepIndex) {
    if (stepIndex < 0 || stepIndex >= stepCardIds.length) return;
    state.currentStep = stepIndex;

    // Hide all step cards
    stepCardIds.forEach((id) => {
      const card = $(id);
      if (card) {
        card.classList.remove('active');
      }
    });

    // Show active step card
    const targetCard = $(stepCardIds[stepIndex]);
    if (targetCard) {
      targetCard.classList.add('active');
    }

    // Update Progress Bar
    const progressWrapper = $('progress-wrapper');
    const progressText = $('progress-text');
    const progressFill = $('progress-bar-fill');

    if (progressWrapper && progressText && progressFill) {
      if (stepIndex >= 1 && stepIndex <= 4) {
        progressWrapper.style.display = 'flex';
        progressText.textContent = `Step ${stepIndex} of 4`;
        const pct = [0, 25, 50, 75, 100];
        progressFill.style.width = `${pct[stepIndex]}%`;
      } else {
        progressWrapper.style.display = 'none';
      }
    }

    // Auto Focus
    if (stepIndex === 1) {
      const input = $('name-input');
      if (input) setTimeout(() => input.focus(), 200);
    }
  }

  window.goToStep = goToStep;

  // ==========================================================================
  // 3. REASONS & MODAL VAULT
  // ==========================================================================

  function updateReasonCard(index) {
    const badge = $('reason-num-badge');
    const emojiEl = $('reason-emoji');
    const textEl = $('reason-text');
    if (!badge || !emojiEl || !textEl) return;

    badge.textContent = `Reason #${index + 1} of ${kyleReasons.length}`;
    emojiEl.textContent = reasonEmojis[index % reasonEmojis.length];
    textEl.textContent = `"${kyleReasons[index]}"`;
  }

  function openVault() {
    playSound('click');
    const modal = $('vault-modal');
    if (modal) {
      modal.classList.add('open');
    }
  }

  function closeVault() {
    playSound('click');
    const modal = $('vault-modal');
    if (modal) {
      modal.classList.remove('open');
    }
  }

  window.openVault = openVault;
  window.closeVault = closeVault;

  function renderVaultList() {
    const container = $('vault-list-container');
    if (!container) return;
    container.innerHTML = '';
    kyleReasons.forEach((reason, i) => {
      const item = document.createElement('div');
      item.className = 'vault-item';
      item.innerHTML = `
        <span class="vault-item-num">${i + 1}</span>
        <span class="vault-item-text">${reason}</span>
      `;
      container.appendChild(item);
    });
  }

  // ==========================================================================
  // 4. RUNAWAY NO BUTTON
  // ==========================================================================

  function handleRunawayNo(btnEl, feedbackEl) {
    playSound('dodge');
    const msg = runawayMessages[Math.floor(Math.random() * runawayMessages.length)];
    if (feedbackEl) {
      feedbackEl.textContent = msg;
      feedbackEl.className = 'feedback-msg error';
    }
    if (btnEl) {
      const randomX = (Math.random() - 0.5) * 100;
      const randomY = (Math.random() - 0.5) * 60;
      btnEl.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.95)`;
      setTimeout(() => {
        btnEl.style.transform = 'translate(0, 0) scale(1)';
      }, 900);
    }
  }

  // ==========================================================================
  // 5. CERTIFICATE GENERATOR
  // ==========================================================================

  function generateAndDownloadCertificate() {
    playSound('celebration');
    const canvas = $('cert-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    canvas.width = 1200;
    canvas.height = 800;

    const bgGrad = ctx.createLinearGradient(0, 0, 1200, 800);
    bgGrad.addColorStop(0, '#fffbfb');
    bgGrad.addColorStop(0.5, '#fff0f3');
    bgGrad.addColorStop(1, '#ffe5ec');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1200, 800);

    ctx.strokeStyle = '#ff3366';
    ctx.lineWidth = 14;
    ctx.strokeRect(30, 30, 1140, 740);

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 4;
    ctx.setLineDash([12, 8]);
    ctx.strokeRect(48, 48, 1104, 704);
    ctx.setLineDash([]);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#b91c1c';
    ctx.font = 'bold 32px Georgia, serif';
    ctx.fillText('✨ OFFICIAL CERTIFICATE OF LOVE & HAPPINESS ✨', 600, 120);

    ctx.fillStyle = '#ff2a5f';
    ctx.font = 'bold 54px Georgia, serif';
    ctx.fillText('Officially Kyle\'s Girlfriend ❤️', 600, 200);

    ctx.fillStyle = '#2d0e17';
    ctx.font = '28px sans-serif';
    ctx.fillText('This document certifies and confirms that', 600, 280);

    ctx.fillStyle = '#e11d48';
    ctx.font = 'bold 58px Georgia, serif';
    ctx.fillText('Erin 💕 (Lil Monkey)', 600, 360);

    ctx.fillStyle = '#2d0e17';
    ctx.font = '26px sans-serif';
    ctx.fillText('has said YES to being with Kyle forever through all adventures, laughs & love.', 600, 430);

    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    ctx.fillStyle = '#6b4350';
    ctx.font = 'italic 24px Georgia, serif';
    ctx.fillText(`Issued with endless love on: ${today}`, 600, 500);

    ctx.fillStyle = '#ff2a5f';
    ctx.font = 'bold 34px sans-serif';
    ctx.fillText('Signed: Kyle ❤️', 380, 640);
    ctx.fillText('Accepted: Erin 💕', 820, 640);

    ctx.fillStyle = '#9b7280';
    ctx.font = '18px sans-serif';
    ctx.fillText('Non-refundable • Valid Forever • 100% Mine', 600, 710);

    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'Erin-and-Kyle-Official-Girlfriend-Certificate.png';
    link.href = dataUrl;
    link.click();
  }

  // ==========================================================================
  // 6. BACKGROUND HEARTS & CELEBRATION CONFETTI
  // ==========================================================================

  const bgHearts = [];
  let bgCanvas, bgCtx, bgWidth = 0, bgHeight = 0;

  function resizeBgCanvas() {
    bgCanvas = $('bg-canvas');
    if (!bgCanvas) return;
    bgCtx = bgCanvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    bgWidth = window.innerWidth;
    bgHeight = window.innerHeight;
    bgCanvas.width = bgWidth * dpr;
    bgCanvas.height = bgHeight * dpr;
    bgCtx.scale(dpr, dpr);
  }

  function drawHeartShape(ctx, x, y, size, color, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(x, y + topCurveHeight);
    ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
    ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + (size + topCurveHeight) / 1.2, x, y + size);
    ctx.bezierCurveTo(x, y + (size + topCurveHeight) / 1.2, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
    ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
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

  function animateBgHearts() {
    if (!bgCtx) return;
    bgCtx.clearRect(0, 0, bgWidth, bgHeight);

    for (let i = 0; i < bgHearts.length; i++) {
      const h = bgHearts[i];
      h.y -= h.speed;
      h.swayOffset += h.swaySpeed;
      const currentX = h.x + Math.sin(h.swayOffset) * h.swayDist;
      drawHeartShape(bgCtx, currentX, h.y, h.size, h.color, h.alpha);
      if (h.y < -h.size * 2) {
        h.y = bgHeight + h.size;
        h.x = Math.random() * bgWidth;
      }
    }
    requestAnimationFrame(animateBgHearts);
  }

  const confettiParticles = [];
  let confettiCanvas, confettiCtx, confettiWidth = 0, confettiHeight = 0, isCelebrating = false;

  function resizeConfettiCanvas() {
    confettiCanvas = $('confetti-canvas');
    if (!confettiCanvas) return;
    confettiCtx = confettiCanvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    confettiWidth = window.innerWidth;
    confettiHeight = window.innerHeight;
    confettiCanvas.width = confettiWidth * dpr;
    confettiCanvas.height = confettiHeight * dpr;
    confettiCtx.scale(dpr, dpr);
  }

  function launchCelebration() {
    isCelebrating = true;
    const colors = ['#ff2a5f', '#ff4d6d', '#ff758c', '#ffd166', '#ffb3c1', '#7209b7', '#ffeedd'];
    const heartColors = ['#ff3366', '#e11d48', '#ff4d79', '#ff758c'];

    for (let i = 0; i < 150; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 4 + Math.random() * 12;
      const isHeart = Math.random() > 0.35;
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
        alpha: 1
      });
    }

    [300, 700, 1200, 1800].forEach(delay => {
      setTimeout(() => {
        if (!isCelebrating) return;
        for (let i = 0; i < 35; i++) {
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
            alpha: 1
          });
        }
      }, delay);
    });

    animateConfetti();
  }

  function animateConfetti() {
    if (!confettiCtx) return;
    confettiCtx.clearRect(0, 0, confettiWidth, confettiHeight);

    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.rotation += p.rotationSpeed;

      if (p.y > confettiHeight - 100) p.alpha -= 0.015;

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
  // 7. EVENT BINDING
  // ==========================================================================

  function bindEvents() {
    // Step 0: Envelope
    const onOpenEnvelope = () => {
      playSound('unseal');
      goToStep(1);
    };

    const envBox = $('envelope-box');
    const envBtn = $('open-envelope-btn');
    if (envBox) envBox.onclick = onOpenEnvelope;
    if (envBtn) envBtn.onclick = onOpenEnvelope;

    // Step 1: Name Form
    const nameForm = $('name-form');
    const nameInput = $('name-input');
    const nameFeedback = $('step1-feedback');
    const step1Card = $('step-1');

    if (nameForm && nameInput) {
      nameForm.onsubmit = (e) => {
        e.preventDefault();
        const rawVal = nameInput.value || '';
        const cleanVal = rawVal.trim().toLowerCase();

        if (cleanVal === 'erin') {
          playSound('success');
          if (nameFeedback) {
            nameFeedback.textContent = "That's right ❤️";
            nameFeedback.className = 'feedback-msg success';
          }
          nameInput.blur();
          setTimeout(() => goToStep(2), 600);
        } else {
          playSound('wrong');
          if (nameFeedback) {
            nameFeedback.textContent = "Nuh uh, wrong answer 😤❤️";
            nameFeedback.className = 'feedback-msg error';
          }
          if (step1Card) {
            step1Card.classList.remove('shake-active');
            void step1Card.offsetWidth;
            step1Card.classList.add('shake-active');
            setTimeout(() => step1Card.classList.remove('shake-active'), 450);
          }
          nameInput.focus();
          nameInput.select();
        }
      };
    }

    // Step 2: First Promise
    const step2Yes = $('step2-yes-btn');
    const step2No = $('step2-no-btn');
    const step2Feedback = $('step2-feedback');

    if (step2Yes) {
      step2Yes.onclick = () => {
        playSound('success');
        if (step2Feedback) {
          step2Feedback.textContent = "Always & forever ❤️";
          step2Feedback.className = 'feedback-msg success';
        }
        setTimeout(() => {
          if (step2Feedback) step2Feedback.textContent = '';
          goToStep(3);
        }, 550);
      };
    }

    if (step2No) {
      step2No.onclick = () => {
        handleRunawayNo(step2No, step2Feedback);
      };
    }

    // Step 3: Second Promise
    const step3Yes = $('step3-yes-btn');
    const step3No = $('step3-no-btn');
    const step3Feedback = $('step3-feedback');

    if (step3Yes) {
      step3Yes.onclick = () => {
        playSound('success');
        if (step3Feedback) {
          step3Feedback.textContent = "You & me against the world 💫❤️";
          step3Feedback.className = 'feedback-msg success';
        }
        setTimeout(() => {
          if (step3Feedback) step3Feedback.textContent = '';
          goToStep(4);
        }, 550);
      };
    }

    if (step3No) {
      step3No.onclick = () => {
        handleRunawayNo(step3No, step3Feedback);
      };
    }

    // Step 4: Reasons
    const nextReason = $('next-reason-btn');
    const openVault1 = $('open-vault-btn');
    const openVault2 = $('open-vault-from-success-btn');
    const closeVault1 = $('close-vault-btn');
    const closeVault2 = $('modal-done-btn');
    const reasonsCont = $('reasons-continue-btn');
    const vaultModal = $('vault-modal');

    if (nextReason) {
      nextReason.onclick = () => {
        playSound('click');
        state.currentReasonIndex = (state.currentReasonIndex + 1) % kyleReasons.length;
        updateReasonCard(state.currentReasonIndex);
      };
    }

    if (openVault1) openVault1.onclick = openVault;
    if (openVault2) openVault2.onclick = openVault;
    if (closeVault1) closeVault1.onclick = closeVault;
    if (closeVault2) closeVault2.onclick = closeVault;

    if (vaultModal) {
      vaultModal.onclick = (e) => {
        if (e.target === vaultModal) closeVault();
      };
    }

    if (reasonsCont) {
      reasonsCont.onclick = () => {
        playSound('success');
        goToStep(5);
      };
    }

    // Step 5: Proposal
    const propYes1 = $('proposal-yes-btn-1');
    const propYes2 = $('proposal-yes-btn-2');
    const celebrationDate = $('celebration-date');

    const handleAccept = () => {
      playSound('celebration');
      launchCelebration();
      const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      if (celebrationDate) {
        celebrationDate.textContent = `Officially Together • ${today} 💕`;
      }
      setTimeout(() => goToStep(6), 600);
    };

    if (propYes1) propYes1.onclick = handleAccept;
    if (propYes2) propYes2.onclick = handleAccept;

    // Step 6: Certificate Download & Replay
    const certBtn = $('download-cert-btn');
    const replayBtn = $('replay-btn');

    if (certBtn) certBtn.onclick = generateAndDownloadCertificate;
    if (replayBtn) {
      replayBtn.onclick = () => {
        playSound('click');
        if (nameInput) nameInput.value = '';
        if (nameFeedback) nameFeedback.textContent = '';
        if (step2Feedback) step2Feedback.textContent = '';
        if (step3Feedback) step3Feedback.textContent = '';
        goToStep(0);
      };
    }

    // Sound Toggle
    const soundBtn = $('sound-toggle');
    const soundIcon = $('sound-icon');
    const soundText = $('sound-text');
    if (soundBtn) {
      soundBtn.onclick = () => {
        state.soundEnabled = !state.soundEnabled;
        if (soundIcon) soundIcon.textContent = state.soundEnabled ? '🔔' : '🔕';
        if (soundText) soundText.textContent = state.soundEnabled ? 'Sound' : 'Muted';
        if (state.soundEnabled) playSound('click');
      };
    }
  }

  // ==========================================================================
  // 8. INITIALIZATION
  // ==========================================================================

  function init() {
    resizeBgCanvas();
    resizeConfettiCanvas();
    initBgHearts();
    animateBgHearts();
    renderVaultList();
    updateReasonCard(5);
    bindEvents();
    goToStep(0);

    window.addEventListener('resize', () => {
      resizeBgCanvas();
      resizeConfettiCanvas();
      initBgHearts();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
