(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-navigation");

  function updateThemeControl() {
    if (!themeToggle) return;
    const isDark = root.dataset.theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
    const label = themeToggle.querySelector(".theme-toggle-label");
    if (label) label.textContent = isDark ? "Dark" : "Light";
  }

  updateThemeControl();
  themeToggle?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    try {
      localStorage.setItem("samuel-portfolio-theme", nextTheme);
    } catch {
      // Keep the current choice for this visit when storage is unavailable.
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      nextTheme === "dark" ? "#151a16" : "#f5f4ef",
    );
    updateThemeControl();
  });

  function closeMenu({ returnFocus = false } = {}) {
    if (!menuToggle || !navigation) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    navigation.dataset.open = "false";
    if (returnFocus) menuToggle.focus();
  }

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      navigation.dataset.open = String(!isOpen);
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("click", (event) => {
      if (menuToggle.getAttribute("aria-expanded") !== "true") return;
      if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        closeMenu({ returnFocus: true });
      }
    });

    const desktopQuery = window.matchMedia("(min-width: 1081px)");
    const resetMenuForDesktop = (event) => {
      if (event.matches) closeMenu();
    };
    if (desktopQuery.addEventListener) desktopQuery.addEventListener("change", resetMenuForDesktop);
    else desktopQuery.addListener(resetMenuForDesktop);
  }

  const year = document.querySelector("[data-current-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
