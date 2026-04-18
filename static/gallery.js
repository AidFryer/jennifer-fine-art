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
        <p>$${art.price.toLocaleString()} &mdash; ${art.size}</p>
        <p style="opacity:0.75;font-size:0.8em;">${art.medium}</p>
        ${art.available
          ? `<a href="mailto:jennifer@example.com?subject=Inquiry: ${encodeURIComponent(art.title)}" class="btn btn-primary" style="margin-top:0.75em;display:inline-block;font-size:0.8em;padding:0.5em 1.2em;">Inquire</a>`
          : `<span class="badge-sold">Sold</span>`
        }
      </div>
    `;
    gallery.appendChild(card);
  });
});

  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  artworks.forEach(art => {
    const card = document.createElement("div");
    card.className = "art-card";
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${art.image}" alt="${art.title}" loading="lazy">
      </div>
      <div class="info">
        <h2>${art.title}</h2>
        <p>${art.price} &mdash; ${art.size}</p>
        <p style="opacity:0.75;font-size:0.8em;">${art.medium}</p>
        ${art.available
          ? `<a href="mailto:jennifer@example.com?subject=Inquiry: ${encodeURIComponent(art.title)}" class="btn btn-primary" style="margin-top:0.75em;display:inline-block;font-size:0.8em;padding:0.5em 1.2em;">Inquire</a>`
          : `<span class="badge-sold">Sold</span>`
        }
      </div>
    `;
    gallery.appendChild(card);
  });