const leftPanel = document.getElementById("popupLeft");
const rightPanel = document.getElementById("popupRight");
const entries = document.querySelectorAll("[data-popup]");
const isMobile = () => window.matchMedia("(max-width: 900px)").matches;

let activePanel = null;
let hideTimer = null;

function buildPanelContent(data) {
  const imgHtml = data.image
    ? `<img src="${data.image}" alt="${data.title}" onerror="this.parentElement.classList.add('no-image')">`
    : "";
  const linksHtml = data.links && data.links.length
    ? `<div class="popup-links">${data.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join("")}</div>`
    : "";
  const imgClass = data.logo ? "popup-image logo" : "popup-image";
  return `
    <div class="${imgClass}">${imgHtml}</div>
    <h3>${data.title}</h3>
    <p>${data.text}</p>
    ${linksHtml}
  `;
}

function showPopup(entry, index) {
  const key = entry.dataset.popup;
  const data = POPUP_DATA[key];
  if (!data) return;

  clearTimeout(hideTimer);

  const useRight = index % 2 === 0;
  const panel = useRight ? rightPanel : leftPanel;
  const other = useRight ? leftPanel : rightPanel;

  other.classList.remove("visible");
  panel.innerHTML = buildPanelContent(data);
  panel.classList.add("visible");

  const rect = entry.getBoundingClientRect();
  const panelHeight = 320;
  let top = rect.top + window.scrollY - 40;
  top = Math.max(20 + window.scrollY, Math.min(top, document.body.scrollHeight - panelHeight));
  panel.style.top = `${top}px`;

  activePanel = panel;
}

function hidePopup() {
  hideTimer = setTimeout(() => {
    leftPanel.classList.remove("visible");
    rightPanel.classList.remove("visible");
    activePanel = null;
  }, 120);
}

entries.forEach((entry, index) => {
  if (isMobile()) {
    entry.addEventListener("click", (e) => {
      e.stopPropagation();
      const wasOpen = entry.classList.contains("mobile-open");
      document.querySelectorAll(".entry.mobile-open").forEach(el => el.classList.remove("mobile-open"));
      document.querySelectorAll(".mobile-popup").forEach(el => el.remove());
      if (wasOpen) return;

      entry.classList.add("mobile-open");
      const key = entry.dataset.popup;
      const data = POPUP_DATA[key];
      if (!data) return;
      const div = document.createElement("div");
      div.className = "mobile-popup";
      div.innerHTML = buildPanelContent(data);
      entry.after(div);
    });
  } else {
    entry.addEventListener("mouseenter", () => showPopup(entry, index));
    entry.addEventListener("mouseleave", hidePopup);
  }
});

[leftPanel, rightPanel].forEach(panel => {
  panel.addEventListener("mouseenter", () => clearTimeout(hideTimer));
  panel.addEventListener("mouseleave", hidePopup);
});
