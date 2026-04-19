document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const links = [
    { href: "index.html",   label: "Home" },
    { href: "gallery.html", label: "Gallery" },
    { href: "shop.html",    label: "Shop" },
    { href: "events.html",  label: "Events" },
    { href: "blog.html",    label: "Blog" },
    { href: "about.html",   label: "About" },
  ];

  const navLinksHTML = links
    .map(({ href, label }) => {
      const isActive = currentPage === href ? ' class="active"' : '';
      return `<a href="${href}"${isActive}>${label}</a>`;
    })
    .join("");

  navbar.innerHTML = `
    <header>
      <div class="navbar">
        <a class="nav-left" href="index.html" style="text-decoration:none;">
          <img src="images/butterfly.jpg" alt="Jennifer Williams Art Logo">
          <span>Jennifer Williams</span>
        </a>
        <nav class="nav-links">
          ${navLinksHTML}
        </nav>
      </div>
    </header>
  `;
});
