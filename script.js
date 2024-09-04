//para seccion de integrantes de la banda
 // Add hover effect to member cards
 const memberCards = document.querySelectorAll('.member-card');
 memberCards.forEach(card => {
     card.addEventListener('mouseenter', () => {
         card.style.transform = 'scale(1.05) translateY(-10px)';
     });
     card.addEventListener('mouseleave', () => {
         card.style.transform = 'scale(1) translateY(0)';
     });
 });

 // Add glitch effect to member names
 const memberNames = document.querySelectorAll('.member-name');
 memberNames.forEach(name => {
     name.addEventListener('mouseover', () => {
         const glitchAnimation = setInterval(() => {
             name.style.textShadow = `
                 ${Math.random() * 10}px ${Math.random() * 10}px ${Math.random() * 10}px rgba(0, 255, 0, 0.7),
                 ${Math.random() * -10}px ${Math.random() * -10}px ${Math.random() * 10}px rgba(255, 0, 255, 0.7)
             `;
         }, 50);
         
         name.addEventListener('mouseout', () => {
             clearInterval(glitchAnimation);
             name.style.textShadow = '0 0 10px rgba(0, 255, 0, 0.5)';
         });
     });
 });

 // Add audio clips to fun facts
 const funFacts = document.querySelectorAll('.fun-fact');
 funFacts.forEach(fact => {
     fact.addEventListener('click', () => {
         // In a real implementation, you would have actual audio files for each member
         const audio = new Audio('https://rockhackerband.com/audio/member_clip.mp3');
         audio.play();
     });
     fact.style.cursor = 'pointer';
     fact.title = 'Click to hear a sound clip!';
 });

//menu

document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show'); /* Alterna la clase 'show' al hacer clic */
});

