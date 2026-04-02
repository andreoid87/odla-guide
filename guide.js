(function () {
  const data = window.GUI_GUIDE_DATA;
  const screenList = document.getElementById("screen-list");
  const screenCounter = document.getElementById("screen-counter");
  const image = document.getElementById("screen-image");
  const title = document.getElementById("screen-title");
  const description = document.getElementById("screen-description");
  const hotspotLayer = document.getElementById("hotspot-layer");
  const hotspotList = document.getElementById("hotspot-list");
  const detailTitle = document.getElementById("detail-title");
  const detailText = document.getElementById("detail-text");

  let currentScreenId = null;
  let currentHotspotId = null;

  function renderList() {
    screenList.innerHTML = "";
    data.screens.forEach((screen, index) => {
      const button = document.createElement("button");
      button.className = "screen-link";
      button.dataset.screenId = screen.id;
      button.innerHTML = `
        <span class="screen-link-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="screen-link-copy">
          <strong>${screen.title}</strong>
          <span>${screen.description}</span>
        </span>
      `;
      button.addEventListener("click", () => renderScreen(screen.id));
      screenList.appendChild(button);
    });
  }

  function renderScreen(screenId) {
    const screen = data.screens.find((item) => item.id === screenId);
    if (!screen) return;

    currentScreenId = screen.id;
    currentHotspotId = null;
    title.textContent = screen.title;
    description.textContent = screen.description;
    image.src = screen.image;
    image.alt = screen.title;
    detailTitle.textContent = "Seleziona un'area";
    detailText.textContent = "Clicca su una zona evidenziata dello screenshot oppure usa l'elenco aree qui sotto.";
    screenCounter.textContent = `${data.screens.length} schermate documentate`;

    [...screenList.querySelectorAll(".screen-link")].forEach((node) => {
      node.classList.toggle("is-active", node.dataset.screenId === screen.id);
    });

    hotspotLayer.innerHTML = "";
    hotspotList.innerHTML = "";

    screen.hotspots.forEach((hotspot, index) => {
      const spotButton = document.createElement("button");
      spotButton.className = "hotspot";
      spotButton.style.left = `${hotspot.x}%`;
      spotButton.style.top = `${hotspot.y}%`;
      spotButton.style.width = `${hotspot.width}%`;
      spotButton.style.height = `${hotspot.height}%`;
      spotButton.title = hotspot.title;
      spotButton.setAttribute("aria-label", hotspot.title);
      spotButton.dataset.hotspotId = hotspot.id;

      const badge = document.createElement("span");
      badge.className = "hotspot-badge";
      badge.textContent = String(index + 1);
      spotButton.appendChild(badge);
      spotButton.addEventListener("click", () => selectHotspot(screen, hotspot.id));
      hotspotLayer.appendChild(spotButton);

      const chip = document.createElement("button");
      chip.className = "hotspot-chip";
      chip.dataset.hotspotId = hotspot.id;
      chip.textContent = `${index + 1}. ${hotspot.title}`;
      chip.addEventListener("click", () => selectHotspot(screen, hotspot.id));
      hotspotList.appendChild(chip);
    });

    if (screen.hotspots.length > 0)
      selectHotspot(screen, screen.hotspots[0].id);
  }

  function selectHotspot(screen, hotspotId) {
    const hotspot = screen.hotspots.find((item) => item.id === hotspotId);
    if (!hotspot) return;

    currentHotspotId = hotspot.id;
    detailTitle.textContent = hotspot.title;
    detailText.textContent = hotspot.text;

    [...hotspotLayer.querySelectorAll(".hotspot")].forEach((node) => {
      node.classList.toggle("is-active", node.dataset.hotspotId === hotspot.id);
    });
    [...hotspotList.querySelectorAll(".hotspot-chip")].forEach((node) => {
      node.classList.toggle("is-active", node.dataset.hotspotId === hotspot.id);
    });
  }

  document.addEventListener("keydown", (event) => {
    const screens = data.screens;
    const currentIndex = screens.findIndex((item) => item.id === currentScreenId);
    if (currentIndex < 0) return;

    if (event.key === "ArrowDown" && currentIndex < screens.length - 1) {
      renderScreen(screens[currentIndex + 1].id);
    }
    if (event.key === "ArrowUp" && currentIndex > 0) {
      renderScreen(screens[currentIndex - 1].id);
    }
  });

  renderList();
  if (data.screens.length > 0)
    renderScreen(data.screens[0].id);
})();
