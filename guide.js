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
  const editorToggle = document.getElementById("editor-toggle");
  const editorPanel = document.getElementById("editor-panel");
  const editorHelp = document.getElementById("editor-help");
  const editorHotspotSelect = document.getElementById("editor-hotspot-select");
  const editorReset = document.getElementById("editor-reset");
  const editorCopy = document.getElementById("editor-copy");
  const editorOutput = document.getElementById("editor-output");
  const editorOverlay = document.getElementById("editor-overlay");
  const editorBox = document.getElementById("editor-box");
  const editorCrosshair = document.getElementById("editor-crosshair");

  let currentScreenId = null;
  let currentHotspotId = null;
  let editorEnabled = false;
  let editorPoints = [];

  function getCurrentScreen() {
    return data.screens.find((item) => item.id === currentScreenId) || null;
  }

  function getCurrentHotspot() {
    const screen = getCurrentScreen();
    return screen ? screen.hotspots.find((item) => item.id === currentHotspotId) || null : null;
  }

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
    editorPoints = [];
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
    editorHotspotSelect.innerHTML = "";

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

      const option = document.createElement("option");
      option.value = hotspot.id;
      option.textContent = hotspot.title;
      editorHotspotSelect.appendChild(option);
    });

    if (screen.hotspots.length > 0) {
      selectHotspot(screen, screen.hotspots[0].id);
      editorHotspotSelect.value = screen.hotspots[0].id;
    }
    updateEditorUI();
  }

  function selectHotspot(screen, hotspotId) {
    const hotspot = screen.hotspots.find((item) => item.id === hotspotId);
    if (!hotspot) return;

    currentHotspotId = hotspot.id;
    detailTitle.textContent = hotspot.title;
    detailText.textContent = hotspot.text;
    if (editorHotspotSelect.value !== hotspot.id)
      editorHotspotSelect.value = hotspot.id;

    [...hotspotLayer.querySelectorAll(".hotspot")].forEach((node) => {
      node.classList.toggle("is-active", node.dataset.hotspotId === hotspot.id);
    });
    [...hotspotList.querySelectorAll(".hotspot-chip")].forEach((node) => {
      node.classList.toggle("is-active", node.dataset.hotspotId === hotspot.id);
    });
    updateEditorUI();
  }

  function setEditorEnabled(enabled) {
    editorEnabled = enabled;
    editorPanel.hidden = !enabled;
    editorOverlay.hidden = !enabled;
    editorToggle.textContent = `Modalità editor: ${enabled ? "ON" : "OFF"}`;
    document.body.classList.toggle("is-editor-mode", enabled);
    updateEditorUI();
  }

  function resetEditorPoints() {
    editorPoints = [];
    updateEditorUI();
  }

  function updateEditorUI() {
    const hotspot = getCurrentHotspot();
    const hasScreen = !!getCurrentScreen();
    editorToggle.disabled = !hasScreen;
    editorReset.disabled = !editorEnabled;
    editorCopy.disabled = !(editorEnabled && editorPoints.length === 2 && hotspot);

    if (!editorEnabled) {
      editorOutput.textContent = "Attiva la modalità editor per misurare un hotspot.";
      editorHelp.textContent = "Attiva l'editor, scegli un hotspot e clicca il punto in alto a sinistra e poi quello in basso a destra.";
      editorBox.style.display = "none";
      editorCrosshair.style.display = "none";
      return;
    }

    if (!hotspot) {
      editorOutput.textContent = "Seleziona un hotspot per iniziare.";
      return;
    }

    if (editorPoints.length === 0) {
      editorHelp.textContent = `Hotspot: ${hotspot.title}. Clicca il punto in alto a sinistra.`;
      editorOutput.textContent = "In attesa del primo punto.";
      editorBox.style.display = "none";
      editorCrosshair.style.display = "none";
      return;
    }

    if (editorPoints.length === 1) {
      const p = editorPoints[0];
      editorHelp.textContent = `Hotspot: ${hotspot.title}. Ora clicca il punto in basso a destra.`;
      editorOutput.textContent = `Primo punto: x=${p.x.toFixed(2)} y=${p.y.toFixed(2)}`;
      positionCrosshair(p);
      editorBox.style.display = "none";
      return;
    }

    const [p1, p2] = editorPoints;
    const rect = normalizePoints(p1, p2);
    editorHelp.textContent = `Hotspot: ${hotspot.title}. Coordinate pronte.`;
    editorOutput.textContent =
`{
  "id": "${hotspot.id}",
  "x": ${rect.x.toFixed(1)},
  "y": ${rect.y.toFixed(1)},
  "width": ${rect.width.toFixed(1)},
  "height": ${rect.height.toFixed(1)}
}`;
    positionEditorBox(rect);
    editorCrosshair.style.display = "none";
  }

  function normalizePoints(a, b) {
    const x = Math.min(a.x, b.x);
    const y = Math.min(a.y, b.y);
    const right = Math.max(a.x, b.x);
    const bottom = Math.max(a.y, b.y);
    return { x, y, width: right - x, height: bottom - y };
  }

  function positionCrosshair(point) {
    editorCrosshair.style.display = "block";
    editorCrosshair.style.left = `${point.x}%`;
    editorCrosshair.style.top = `${point.y}%`;
  }

  function positionEditorBox(rect) {
    editorBox.style.display = "block";
    editorBox.style.left = `${rect.x}%`;
    editorBox.style.top = `${rect.y}%`;
    editorBox.style.width = `${rect.width}%`;
    editorBox.style.height = `${rect.height}%`;
  }

  function onEditorOverlayClick(event) {
    if (!editorEnabled || !image.complete) return;
    const wrapRect = editorOverlay.getBoundingClientRect();
    const x = ((event.clientX - wrapRect.left) / wrapRect.width) * 100;
    const y = ((event.clientY - wrapRect.top) / wrapRect.height) * 100;
    if (editorPoints.length >= 2)
      editorPoints = [];
    editorPoints.push({ x, y });
    updateEditorUI();
  }

  async function copyEditorOutput() {
    if (!editorOutput.textContent.trim())
      return;
    try {
      await navigator.clipboard.writeText(editorOutput.textContent);
      editorHelp.textContent = "Coordinate copiate negli appunti.";
    } catch {
      editorHelp.textContent = "Copia non riuscita. Copia il blocco manualmente.";
    }
  }

  editorToggle.addEventListener("click", () => setEditorEnabled(!editorEnabled));
  editorHotspotSelect.addEventListener("change", () => {
    const screen = getCurrentScreen();
    if (!screen) return;
    resetEditorPoints();
    selectHotspot(screen, editorHotspotSelect.value);
  });
  editorReset.addEventListener("click", resetEditorPoints);
  editorCopy.addEventListener("click", copyEditorOutput);
  editorOverlay.addEventListener("click", onEditorOverlayClick);

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
    if (event.key === "Escape" && editorEnabled)
      resetEditorPoints();
  });

  renderList();
  if (data.screens.length > 0)
    renderScreen(data.screens[0].id);
})();
