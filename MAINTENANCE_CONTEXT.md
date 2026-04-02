# ODLA Guide Maintenance Context

Questo file serve a mantenere continuita tra una sessione e l'altra quando la guida HTML viene aggiornata.

## Repository

- Repo pubblico: `andreoid87/odla-guide`
- URL GitHub Pages: `https://andreoid87.github.io/odla-guide/`
- Publishing: GitHub Pages da branch `main`, path `/`

## Struttura Importante

- `index.html`
  Viewer, layout principale, controlli zoom e pannello dettagli.
- `style.css`
  Layout, comportamento responsive, stile hotspot, viewer e pannelli.
- `guide.js`
  Navigazione schermate, hotspot, zoom, editor locale degli hotspot.
- `guide-data.js`
  Dataset delle schermate e hotspot. E il file principale da aggiornare quando cambiano le coordinate o i testi.
- `assets/`
  Screenshot PNG usati dalla guida.
- `odla-hotspot-overrides.json`
  File locale temporaneo esportato dal browser per trasferire le misure hotspot. Non va versionato.

## Stato Attuale Del Sito

- La guida documenta 16 schermate dell'AppConfigurator.
- Include due viste principali:
  - `Vista Principale - Tasti fisici`
  - `Vista Principale - Menu GUI`
- Include hotspot per:
  - aree principali del configuratore
  - dialog di creazione/modifica app
  - dialog di binding QWERTY, MIDI e Menu GUI
  - dialog di comando bottone QWERTY, MIDI e Menu GUI
  - import/export configurazione
- Sono presenti:
  - zoom con `+`, `-`, slider e `Adatta`
  - scroll interno del viewer quando lo screenshot supera lo spazio disponibile
  - branch di lavoro `hotspot-editor` per rifiniture prima della pubblicazione

## Workflow Consigliato Per Modifiche Future

1. Parti sempre da `hotspot-editor` se devi fare prove su hotspot, viewer o nuove schermate.
2. Se il contenuto e stabile, porta le modifiche su `main`.
3. Se l'utente corregge hotspot:
   - usa l'editor nella pagina
   - conferma le misure
   - scarica `odla-hotspot-overrides.json`
   - applica i valori a `guide-data.js`
4. Se arrivano nuovi screenshot:
   - salvali in `assets/`
   - aggiungi o aggiorna la schermata in `guide-data.js`
5. Se cambia il viewer:
   - tocca `index.html`, `style.css`, `guide.js`
6. Dopo il push su `main`, verifica GitHub Pages con:
   - `gh api repos/andreoid87/odla-guide/pages`

## Regole Pratiche

- Non lasciare strumenti di editing sul sito pubblico se servono solo alla lavorazione.
- Mantieni `main` come versione pubblicabile.
- Usa `hotspot-editor` per misure, test e UI temporanee.
- Aggiorna il cache-buster in `index.html` quando cambi file statici caricati dal browser.
- Se l'utente consegna un nuovo `odla-hotspot-overrides.json`, applica solo gli hotspot presenti nel file senza toccare gli altri.

## Cosa Incollare A Codex Nella Prossima Sessione

Quando torni per nuove modifiche, incolla qualcosa di questo tipo:

```md
Repository: D:\KemoniaRiver\odla-guide
Branch di lavoro desiderato: hotspot-editor

Richieste utente:
- ...
- ...
- ...

Eventuali file nuovi:
- assets/nome-file.png
- odla-hotspot-overrides.json

Obiettivo:
- aggiornare la guida e pubblicare su main solo dopo verifica
```

## Prompt Breve Riutilizzabile

Puoi anche incollare direttamente questo prompt:

```md
Lavora nel repo D:\KemoniaRiver\odla-guide.
Leggi prima MAINTENANCE_CONTEXT.md.
Applica queste richieste alla guida HTML:
- ...
- ...

Se ci sono modifiche sperimentali, falle su hotspot-editor.
Pubblica su main solo quando tutto e verificato.
```
