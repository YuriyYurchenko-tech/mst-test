// Прилипающее меню с затемнением
const header = document.querySelector(".compact-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Обработка формы
const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(orderForm);
  const data = Object.fromEntries(formData.entries());

  console.log("Форма отправлена:", data);
  alert("Форма успешно отправлена!");
  orderForm.reset();
});

document.addEventListener("DOMContentLoaded", () => {
  const fadeElems = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElems.forEach((el) => observer.observe(el));
});
