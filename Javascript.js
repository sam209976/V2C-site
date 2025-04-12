
gsap.registerPlugin(ScrollTrigger);

// Stacking Animation for Subheadings
document.querySelectorAll('h3').forEach(heading => {
  const text = heading.textContent;
  heading.innerHTML = text
    .split('')
    .map(char => `<span class="stack-char">${char}</span>`)
    .join('');

  gsap.from(heading.querySelectorAll('.stack-char'), {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.05,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: heading,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });
});

// Animations
gsap.utils.toArray('.section').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 100,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });
});

gsap.utils.toArray('.feature-card, .audience-card, .step-card, .benefit-card, .service-card').forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    scale: 0.95,
    duration: 0.8,
    delay: index * 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });
});

gsap.from('.hero h1', {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.2,
  ease: 'power3.out'
});

gsap.from('.hero p', {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.4,
  ease: 'power3.out'
});

gsap.from('.hero-buttons', {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.6,
  ease: 'power3.out'
});
