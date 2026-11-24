const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

const filters = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll("[data-kind]");
const empty = document.querySelector(".empty");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const kind = button.dataset.filter;
    filters.forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });

    let visible = 0;
    cards.forEach((card) => {
      const show = kind === "all" || card.dataset.kind === kind;
      card.hidden = !show;
      if (show) visible += 1;
    });

    empty.hidden = visible > 0;
  });
});
