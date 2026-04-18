document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
    <header>
      <div class="navbar">
        <div class="nav-left">
          <img src="images/sugar-skull-iv.jpg" alt="Logo">
          <span>Jennifer Williams</span>
        </div>
        <div class="nav-links">
          <a href="index.html">Home</a>
          <a href="gallery.html">Gallery</a>
          <a href="events.html">Events</a>
          <a href="blog.html">Blog</a>
          <a href="about.html">About</a>
        </div>
      </div>
    </header>
  `;
});
