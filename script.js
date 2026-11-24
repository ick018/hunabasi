const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".spot-card");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");

    const selected = filter.dataset.filter;
    cards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.classList.toggle(
        "hidden",
        selected !== "all" && !categories.includes(selected),
      );
    });
  });
});
