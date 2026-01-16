document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      const rotateX = ((y / rect.height) - 0.5) * 8;
      const rotateY = ((x / rect.width) - 0.5) * -8;
  
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
  
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
  