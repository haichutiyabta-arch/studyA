// Simple animation on scroll for glass cards
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if(top < triggerBottom){
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
});

// Optional: Add a glowing animation class when hovered
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 25px rgba(0,255,255,0.5)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 8px 32px rgba(31,38,135,0.37)';
  });
});
/* ---------- REPLACE with your Firebase config ---------- */
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
