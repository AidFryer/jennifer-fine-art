document.addEventListener("DOMContentLoaded", () => {
  const artworks = [
    {
      title: "Butterfly",
      price: "$400",
      image: "images/butterfly.jpg",
      size: '24" x 36"',
      link: "art/butterfly.html"
    },
    {
      title: "Dancing Pony",
      price: "$450",
      size: '24\" x 18\"',
      image: "images/dancing-pony.jpg",
      link: "art/sunset.html"
    },
    {
      title: "Dog",
      price: "$500",
      size: '24\" x 24\"',
      image: "images/dog.jpg",
      link: "art/sugar-skull.html"
    },
    {
      title: "Fish",
      price: "$500",
      size: '24\" x 24\"',
      image: "images/fish.jpg",
      link: "art/sugar-skull.html"
    },
    {
      title: "Lion",
      price: "$500",
      size: '24\" x 24\"',
      image: "images/lion.jpg",
      link: "art/sugar-skull.html"
    },
    {
      title: "Lizard in a Tree",
      price: "$500",
      size: '24\" x 24\"',
      image: "images/lizard-tree.jpg",
      link: "art/sugar-skull.html"
    },
    {
      title: "Big Horn",
      price: "$500",
      size: '24\" x 24\"',
      image: "images/big-horn.jpg",
      link: "art/sugar-skull.html"
    },
    {
      title: "Sugar Skull IV",
      price: "$500",
      size: '24\" x 24\"',
      image: "images/sugar-skull-iv.jpg",
      link: "art/sugar-skull.html"
    },
    {
      title: "Sugar Skull IV",
      price: "$500",
      size: '24\" x 24\"',
      image: "images/sugar-skull-iv.jpg",
      link: "art/sugar-skull.html"
    }
    
  ];

  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  artworks.forEach(art => {
    const card = document.createElement("div");
    card.className = "art-card";
    card.innerHTML = `
      <a href="${art.link}">
        <img src="${art.image}" alt="${art.title}">
        <div class="info">
          <h2>${art.title}</h2>
          <p>${art.price} — ${art.size}</p>
        </div>
      </a>
    `;
    gallery.appendChild(card);
  });
});