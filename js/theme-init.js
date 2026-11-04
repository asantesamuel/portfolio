(() => {
  const root = document.documentElement;
  let theme = "light";
  try {
    const savedTheme = localStorage.getItem("samuel-portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") theme = savedTheme;
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) theme = "dark";
  } catch {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) theme = "dark";
  }
  root.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    "content",
    theme === "dark" ? "#151a16" : "#f5f4ef",
  );
})();
