// Top banner

const banner = document.getElementById("topBanner");
const closeBtn = document.getElementById("closeBanner");

if (banner && closeBtn) {
  closeBtn.addEventListener("click", () => {
    banner.style.opacity = "0";
    banner.style.transition = "opacity 0.1s ease";
    setTimeout(() => (banner.style.display = "none"), 100);
  });
}
