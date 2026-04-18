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

// Old hardcoded version below (kept for reference, not used)
function _unused() {
  const artworks = [
    {
      title: "Butterfly",
      price: "$400",
      size: '4" × 4"',
      medium: "Acrylic on Canvas",
      image: "images/butterfly.jpg",
      available: true,
    },
    {
      title: "Dancing Pony",
      price: "$450",
      size: '24" × 18"',
      medium: "Acrylic on Canvas",
      image: "images/dancing-pony.jpg",
      available: true,
    },
    {
      title: "Dog",
      price: "$500",
      size: '12" × 12"',
      medium: "Acrylic on Canvas",
      image: "images/dog.jpg",
      available: true,
    },
    {
      title: "Fish",
      price: "$500",
      size: '6" × 6"',
      medium: "Acrylic on Canvas",
      image: "images/fish.jpg",
      available: true,
    },
    {
      title: "Lion",
      price: "$500",
      size: '8" × 10"',
      medium: "Acrylic on Canvas",
      image: "images/lion.jpg",
      available: true,
    },
  ];

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
});
