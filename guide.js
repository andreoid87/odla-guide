(function () {
  const STORAGE_KEY = "odla-guide-hotspot-overrides-v1";

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
  const editorResetHotspot = document.getElementById("editor-reset-hotspot");
  const editorResetAll = document.getElementById("editor-reset-all");
  const editorCopy = document.getElementById("editor-copy");
  const editorExport = document.getElementById("editor-export");
  const editorImport = document.getElementById("editor-import");
  const editorJson = document.getElementById("editor-json");
  const editorOutput = document.getElementById("editor-output");
  const editorOverlay = document.getElementById("editor-overlay");
  const editorBox = document.getElementById("editor-box");
  const editorCrosshair = document.getElementById("editor-crosshair");

  let currentScreenId = null;
  let currentHotspotId = null;
  let editorEnabled = false;
  let editorPoints = [];
  let overrides = loadOverrides();

  function loadOverrides() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  function persistOverrides() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides, null, 2));
  }

  function getCurrentScreen() {
    return data.screens.find((item) => item.id === currentScreenId) || null;
  }

  function getCurrentHotspot() {
    const screen = getCurrentScreen();
    return screen ? screen.hotspots.find((item) => item.id === currentHotspotId) || null : null;
  }

  function getHotspotGeometry(screenId, hotspot) {
    const screenOverrides = overrides[screenId] || {};
    const override = screenOverrides[hotspot.id];
    return override ? { ...hotspot, ...override } : hotspot;
  }

  function isHotspotOverridden(screenId, hotspotId) {
    return !!(overrides[screenId] && overrides[screenId][hotspotId]);
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
      const geometry = getHotspotGeometry(screen.id, hotspot);

      const spotButton = document.createElement("button");
      spotButton.className = "hotspot";
      if (isHotspotOverridden(screen.id, hotspot.id))
        spotButton.classList.add("is-overridden");
      spotButton.style.left = `${geometry.x}%`;
      spotButton.style.top = `${geometry.y}%`;
      spotButton.style.width = `${geometry.width}%`;
      spotButton.style.height = `${geometry.height}%`;
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
      if (isHotspotOverridden(screen.id, hotspot.id))
        chip.classList.add("is-overridden");
      chip.dataset.hotspotId = hotspot.id;
      chip.textContent = `${index + 1}. ${hotspot.title}`;
      chip.addEventListener("click", () => selectHotspot(screen, hotspot.id));
      hotspotList.appendChild(chip);

      const option = document.createElement("option");
      option.value = hotspot.id;
      option.textContent = hotspot.title + (isHotspotOverridden(screen.id, hotspot.id) ? " *" : "");
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
    updateEditorUI();
  }

  function resetEditorPoints() {
    editorPoints = [];
    updateEditorUI();
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

  function applyCurrentMeasurement() {
    const hotspot = getCurrentHotspot();
    if (!hotspot || editorPoints.length !== 2)
      return null;

    const rect = normalizePoints(editorPoints[0], editorPoints[1]);
    if (!overrides[currentScreenId])
      overrides[currentScreenId] = {};
    overrides[currentScreenId][hotspot.id] = {
      x: Number(rect.x.toFixed(1)),
      y: Number(rect.y.toFixed(1)),
      width: Number(rect.width.toFixed(1)),
      height: Number(rect.height.toFixed(1))
    };
    persistOverrides();
    return overrides[currentScreenId][hotspot.id];
  }

  function exportOverrides() {
    editorJson.value = JSON.stringify(overrides, null, 2);
    editorHelp.textContent = "Modifiche locali esportate nel riquadro JSON.";
  }

  function importOverrides() {
    try {
      const parsed = JSON.parse(editorJson.value || "{}");
      overrides = parsed && typeof parsed === "object" ? parsed : {};
      persistOverrides();
      resetEditorPoints();
      renderScreen(currentScreenId);
      editorHelp.textContent = "Modifiche importate correttamente.";
    } catch {
      editorHelp.textContent = "JSON non valido. Correggilo e riprova.";
    }
  }

  function resetCurrentHotspotOverride() {
    const hotspot = getCurrentHotspot();
    if (!hotspot || !overrides[currentScreenId])
      return;
    delete overrides[currentScreenId][hotspot.id];
    if (Object.keys(overrides[currentScreenId]).length === 0)
      delete overrides[currentScreenId];
    persistOverrides();
    resetEditorPoints();
    renderScreen(currentScreenId);
    editorHelp.textContent = "Override del hotspot rimosso.";
  }

  function resetAllOverrides() {
    overrides = {};
    persistOverrides();
    resetEditorPoints();
    renderScreen(currentScreenId);
    editorJson.value = "";
    editorHelp.textContent = "Tutte le modifiche locali sono state rimosse.";
  }

  function updateEditorUI() {
    const hotspot = getCurrentHotspot();
    const hasScreen = !!getCurrentScreen();
    const overridden = hotspot ? isHotspotOverridden(currentScreenId, hotspot.id) : false;

    editorToggle.disabled = !hasScreen;
    editorReset.disabled = !editorEnabled;
    editorResetHotspot.disabled = !(editorEnabled && hotspot && overridden);
    editorResetAll.disabled = !(editorEnabled && Object.keys(overrides).length > 0);
    editorCopy.disabled = !(editorEnabled && hotspot);
    editorExport.disabled = !editorEnabled;
    editorImport.disabled = !editorEnabled;

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
      editorOutput.textContent = overridden
        ? `Override attivo:\n${JSON.stringify(overrides[currentScreenId][hotspot.id], null, 2)}`
        : "In attesa del primo punto.";
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

    const rect = normalizePoints(editorPoints[0], editorPoints[1]);
    editorHelp.textContent = `Hotspot: ${hotspot.title}. Coordinate pronte. Usa "Copia coordinate" o passa a un altro hotspot per salvarle.`;
    editorOutput.textContent =
`{
  "screenId": "${currentScreenId}",
  "hotspotId": "${hotspot.id}",
  "x": ${rect.x.toFixed(1)},
  "y": ${rect.y.toFixed(1)},
  "width": ${rect.width.toFixed(1)},
  "height": ${rect.height.toFixed(1)}
}`;
    positionEditorBox(rect);
    editorCrosshair.style.display = "none";
  }

  function onEditorOverlayClick(event) {
    if (!editorEnabled || !image.complete)
      return;
    const wrapRect = editorOverlay.getBoundingClientRect();
    const x = ((event.clientX - wrapRect.left) / wrapRect.width) * 100;
    const y = ((event.clientY - wrapRect.top) / wrapRect.height) * 100;
    if (editorPoints.length >= 2)
      editorPoints = [];
    editorPoints.push({ x, y });
    updateEditorUI();
  }

  async function copyEditorOutput() {
    const hotspot = getCurrentHotspot();
    if (!hotspot)
      return;

    let payload = editorOutput.textContent.trim();
    if (editorPoints.length === 2) {
      const saved = applyCurrentMeasurement();
      renderScreen(currentScreenId);
      selectHotspot(getCurrentScreen(), hotspot.id);
      payload = JSON.stringify({
        screenId: currentScreenId,
        hotspotId: hotspot.id,
        ...saved
      }, null, 2);
      editorOutput.textContent = payload;
    }

    if (!payload)
      return;

    try {
      await navigator.clipboard.writeText(payload);
      editorHelp.textContent = "Coordinate copiate negli appunti e salvate in locale.";
    } catch {
      editorHelp.textContent = "Copia non riuscita. Copia il blocco manualmente.";
    }
  }

  editorToggle.addEventListener("click", () => setEditorEnabled(!editorEnabled));
  editorHotspotSelect.addEventListener("change", () => {
    const screen = getCurrentScreen();
    if (!screen)
      return;
    if (editorPoints.length === 2)
      applyCurrentMeasurement();
    resetEditorPoints();
    renderScreen(currentScreenId);
    selectHotspot(screen, editorHotspotSelect.value);
  });
  editorReset.addEventListener("click", resetEditorPoints);
  editorResetHotspot.addEventListener("click", resetCurrentHotspotOverride);
  editorResetAll.addEventListener("click", resetAllOverrides);
  editorCopy.addEventListener("click", copyEditorOutput);
  editorExport.addEventListener("click", exportOverrides);
  editorImport.addEventListener("click", importOverrides);
  editorOverlay.addEventListener("click", onEditorOverlayClick);

  document.addEventListener("keydown", (event) => {
    const screens = data.screens;
    const currentIndex = screens.findIndex((item) => item.id === currentScreenId);
    if (currentIndex < 0)
      return;

    if (event.key === "ArrowDown" && currentIndex < screens.length - 1)
      renderScreen(screens[currentIndex + 1].id);
    if (event.key === "ArrowUp" && currentIndex > 0)
      renderScreen(screens[currentIndex - 1].id);
    if (event.key === "Escape" && editorEnabled)
      resetEditorPoints();
  });

  renderList();
  if (data.screens.length > 0)
    renderScreen(data.screens[0].id);
})();
