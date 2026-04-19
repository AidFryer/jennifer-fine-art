document.addEventListener("DOMContentLoaded", async () => {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  let artworks = [];
  try {
    const res = await fetch("artworks.json");
    artworks = await res.json();
  } catch (err) {
    gallery.innerHTML = `<p style="text-align:center;color:#888;padding:3rem;">Could not load artworks.</p>`;
    return;
  }

  artworks.forEach(art => {
    const card = document.createElement("div");
    card.className = "art-card";
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${art.image}" alt="${art.title}" loading="lazy">
      </div>
      <div class="info">
        <h2>${art.title}</h2>
        <p>${art.medium} &nbsp;&middot;&nbsp; ${art.size}</p>
        <p class="price">$${art.price.toLocaleString()}</p>
        ${art.available
          ? `<a href="mailto:jennifer@example.com?subject=Inquiry: ${encodeURIComponent(art.title)}" class="inquire-link">Inquire about this piece</a>`
          : `<span class="badge-sold">Sold</span>`
        }
      </div>
    `;
    gallery.appendChild(card);
  });
});
