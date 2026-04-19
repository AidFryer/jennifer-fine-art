document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".shop-filter");
  const cards   = document.querySelectorAll(".shop-card");
  const labels  = document.querySelectorAll(".shop-section-label");

  filters.forEach(btn => {
    btn.addEventListener("click", () => {
      // Update active button
      filters.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const selected = btn.dataset.filter;

      // Show/hide cards
      cards.forEach(card => {
        const match = selected === "all" || card.dataset.type === selected;
        card.style.display = match ? "flex" : "none";
      });

      // Show/hide section labels and their grids
      labels.forEach(label => {
        const section = label.dataset.section;
        const visible = selected === "all" || section === selected;
        label.style.display = visible ? "block" : "none";

        // Hide the grid that follows if its section is filtered out
        let next = label.nextElementSibling;
        while (next && next.classList.contains("shop-grid")) {
          next.style.display = visible ? "grid" : "none";
          next = next.nextElementSibling;
        }
      });
    });
  });
});
