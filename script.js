// Subtle parallax for hero
window.addEventListener("scroll",()=>{
  const hero = document.querySelector(".hero");
  hero.style.backgroundPositionY = `${window.scrollY * 0.25}px`;
});
