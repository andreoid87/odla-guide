window.GUI_GUIDE_DATA = {
  "screens": [
    {
      "id": "main-keys",
      "title": "AppConfigurator: Vista Principale - Tasti fisici",
      "description": "Panoramica del configuratore in modalita Tasti fisici, con barra app, tabella associazioni, tastiera ODLA e area informativa dell'ultima combinazione.",
      "image": "./assets/appconfigurator-main-keys.png",
      "hotspots": [
        {
          "id": "apps-tabs",
          "title": "Barra App",
          "text": "Qui selezioni l'app che stai configurando. Il pulsante + crea una nuova app, mentre le icone a destra servono per esportare o importare configurazioni.",
          "x": 1.1,
          "y": 4.1,
          "width": 98.3,
          "height": 3
        },
        {
          "id": "keys-mode",
          "title": "Area Tasti fisici",
          "text": "Questa e la modalita dedicata alle associazioni del dispositivo ODLA. Le combinazioni fisiche vengono collegate a comandi QWERTY, MIDI o Menu GUI.",
          "x": 1.3,
          "y": 7.9,
          "width": 48.4,
          "height": 4.3
        },
        {
          "id": "gui-mode",
          "title": "Area Menu GUI",
          "text": "Questa area porta alla configurazione dei menu e dei bottoni a schermo. Serve quando vuoi costruire o modificare l'interfaccia guidata visualizzata da ODLA.",
          "x": 50.5,
          "y": 7.7,
          "width": 48,
          "height": 4.9
        },
        {
          "id": "bindings-table",
          "title": "Tabella associazioni",
          "text": "Mostra tutte le combinazioni di tasti fisici gia configurate, il comando collegato e le note. Da qui selezioni una riga da modificare, scambiare o eliminare.",
          "x": 1.5,
          "y": 14.1,
          "width": 49.6,
          "height": 79.2
        },
        {
          "id": "keyboard-preview",
          "title": "Anteprima tastiera ODLA",
          "text": "La tastiera a destra aiuta a capire visivamente i tasti coinvolti. E utile durante la cattura delle combinazioni o per orientarsi nella disposizione dei controlli.",
          "x": 52,
          "y": 14.1,
          "width": 46,
          "height": 79
        },
        {
          "id": "last-combination-info",
          "title": "Ultima combinazione rilevata",
          "text": "Questa fascia sotto al widget mostra l'ultima combinazione di tasti fisici rilevata da ODLA. E utile per verificare rapidamente che il gesto premuto sia stato interpretato correttamente.",
          "x": 71,
          "y": 93.2,
          "width": 8.2,
          "height": 4.4
        }
      ]
    },
    {
      "id": "main-menu",
      "title": "AppConfigurator: Vista Principale - Menu GUI",
      "description": "Vista principale del configuratore in modalita Menu GUI, con elenco menu a sinistra e bottoni del menu selezionato a destra.",
      "image": "./assets/appconfigurator-main-menu.png",
      "hotspots": [
        {
          "id": "apps-tabs",
          "title": "Barra App",
          "text": "Qui selezioni l'app che stai configurando. Il pulsante + crea una nuova app, mentre le icone a destra servono per esportare o importare configurazioni.",
          "x": 1.1,
          "y": 4.1,
          "width": 98.3,
          "height": 3
        },
        {
          "id": "keys-mode",
          "title": "Area Tasti fisici",
          "text": "Questa linguetta riporta alla configurazione dei binding fisici del dispositivo ODLA.",
          "x": 1.3,
          "y": 7.9,
          "width": 48.4,
          "height": 4.3
        },
        {
          "id": "gui-mode",
          "title": "Area Menu GUI",
          "text": "Questa e la modalita dedicata alla struttura dei menu e dei bottoni visualizzati nella GUI ODLA.",
          "x": 50.4,
          "y": 7.9,
          "width": 48.4,
          "height": 4.3
        },
        {
          "id": "menu-actions",
          "title": "Azioni Menu",
          "text": "Da qui puoi creare o rimuovere i menu disponibili per l'app corrente. L'elenco sottostante mostra tutti i menu gia definiti.",
          "x": 2.3,
          "y": 14.2,
          "width": 46.9,
          "height": 6
        },
        {
          "id": "menu-list",
          "title": "Elenco Menu",
          "text": "La tabella di sinistra contiene tutti i menu configurati. Selezionando una riga aggiorni il pannello dei bottoni relativo a quel menu.",
          "x": 2.3,
          "y": 20.2,
          "width": 46.9,
          "height": 76.2
        },
        {
          "id": "button-actions",
          "title": "Azioni Bottoni",
          "text": "I pulsanti Nuovo bottone, Comando bottone ed Elimina servono a creare, modificare o rimuovere i bottoni del menu selezionato.",
          "x": 50.7,
          "y": 14.2,
          "width": 46.9,
          "height": 6
        },
        {
          "id": "button-list",
          "title": "Tabella Bottoni",
          "text": "Questa tabella mostra nome del bottone, comando associato e note. E il punto centrale per costruire il contenuto del menu GUI.",
          "x": 50.7,
          "y": 20.2,
          "width": 46.9,
          "height": 76.2
        }
      ]
    },
    {
      "id": "physical-keys",
      "title": "Tasti Fisici: Tabella",
      "description": "Dettaglio della zona sinistra del configuratore, focalizzato su tabella, filtri e pulsanti operativi dei Tasti fisici.",
      "image": "./assets/appconfigurator-physical-keys.png",
      "hotspots": [
        {
          "id": "binding-actions",
          "title": "Azioni sulle associazioni",
          "text": "I pulsanti Nuova associazione, Modifica, Scambia ed Elimina sono il punto di ingresso per creare o gestire un binding fisico.",
          "x": 0.8,
          "y": 0.9,
          "width": 37.3,
          "height": 4.2
        },
        {
          "id": "binding-filters",
          "title": "Filtri della tabella",
          "text": "I tre filtri permettono di restringere l'elenco per combinazione, comando o note. Sono utili quando la lista delle associazioni diventa lunga.",
          "x": 0.7,
          "y": 5.2,
          "width": 98.9,
          "height": 3.8
        },
        {
          "id": "binding-columns",
          "title": "Colonne informative",
          "text": "La prima colonna mostra la combinazione di tasti, la seconda il comando associato, la terza eventuali note tecniche o descrittive.",
          "x": 1.1,
          "y": 10.1,
          "width": 97.1,
          "height": 3.3
        },
        {
          "id": "binding-list",
          "title": "Elenco associazioni",
          "text": "Ogni riga rappresenta un'associazione tra tasto fisico e azione. Selezionando una riga abiliti le operazioni di modifica o scambio.",
          "x": 0.8,
          "y": 14.1,
          "width": 97.5,
          "height": 84.3
        }
      ]
    },
    {
      "id": "new-app",
      "title": "Nuova App",
      "description": "Dialog per creare una nuova app configurabile dentro ODLA.",
      "image": "./assets/appconfigurator-new-app.png",
      "hotspots": [
        {
          "id": "duplicate-source",
          "title": "Duplica da",
          "text": "Permette di partire da una configurazione esistente. E il modo piu rapido per creare una nuova app mantenendo menu, bottoni o binding come base.",
          "x": 1.4,
          "y": 10.9,
          "width": 97.8,
          "height": 11
        },
        {
          "id": "app-name",
          "title": "Nome app",
          "text": "Campo obbligatorio per il nome visualizzato della nuova app. Se resta vuoto, il dialog mostra un messaggio di validazione e il salvataggio non va a buon fine.",
          "x": 1.3,
          "y": 23.7,
          "width": 97.8,
          "height": 9.9
        },
        {
          "id": "app-icon",
          "title": "Icona app",
          "text": "Qui indichi il file da usare come icona o riferimento grafico. Sfoglia apre la selezione file, Pulisci rimuove il percorso corrente.",
          "x": 1.3,
          "y": 34.4,
          "width": 98.1,
          "height": 11.2
        },
        {
          "id": "app-save-actions",
          "title": "Conferma",
          "text": "OK salva la nuova app, Cancel chiude il dialog senza applicare modifiche.",
          "x": 83.7,
          "y": 86.2,
          "width": 15.5,
          "height": 11.9
        }
      ]
    },
    {
      "id": "edit-app",
      "title": "Modifica App",
      "description": "Versione compatta del dialog usata per rinominare o aggiornare i dati essenziali dell'app selezionata.",
      "image": "./assets/appconfigurator-edit-app.png",
      "hotspots": [
        {
          "id": "edit-app-name",
          "title": "Nome app",
          "text": "Campo principale per rinominare l'app corrente. Il nome viene riflesso nella tab dell'AppConfigurator.",
          "x": 1,
          "y": 18,
          "width": 98,
          "height": 28
        },
        {
          "id": "edit-app-icon",
          "title": "Icona app",
          "text": "Consente di cambiare o ripulire il file icona associato all'app.",
          "x": 1,
          "y": 45,
          "width": 98,
          "height": 28
        },
        {
          "id": "edit-app-actions",
          "title": "Salvataggio",
          "text": "OK conferma le modifiche dell'app. Cancel annulla le variazioni.",
          "x": 67,
          "y": 73,
          "width": 30,
          "height": 20
        }
      ]
    },
    {
      "id": "new-binding-qwerty",
      "title": "Nuova Associazione: QWERTY",
      "description": "Dialog per creare un binding fisico che invia una combinazione QWERTY.",
      "image": "./assets/appconfigurator-new-binding-qwerty.png",
      "hotspots": [
        {
          "id": "physical-key-capture",
          "title": "Tasto ODLA",
          "text": "Qui acquisisci la combinazione fisica del dispositivo ODLA. Ascolta avvia la cattura, Reimposta pulisce la selezione corrente.",
          "x": 0.8,
          "y": 6.5,
          "width": 98.2,
          "height": 20.1
        },
        {
          "id": "command-type",
          "title": "Tipo comando",
          "text": "Questa riga sceglie il tipo di azione associata al tasto fisico. In questa schermata e selezionato QWERTY.",
          "x": 1.7,
          "y": 31.5,
          "width": 30.7,
          "height": 4.1
        },
        {
          "id": "existing-command",
          "title": "Usa comando esistente",
          "text": "Se attivi questa opzione, puoi riusare un comando gia definito invece di crearne uno nuovo da zero. Il menu subito sotto serve a scegliere quale comando esistente collegare.",
          "x": 1.4,
          "y": 35.5,
          "width": 97,
          "height": 13.5
        },
        {
          "id": "qwerty-capture",
          "title": "Cattura combinazione QWERTY",
          "text": "Questa area registra i tasti della tastiera QWERTY da inviare quando premi la combinazione fisica ODLA.",
          "x": 3.6,
          "y": 49,
          "width": 93.2,
          "height": 18.8
        },
        {
          "id": "binding-notes",
          "title": "Note",
          "text": "Campo facoltativo per annotazioni tecniche, promemoria o descrizioni d'uso del binding.",
          "x": 1.3,
          "y": 74,
          "width": 97.2,
          "height": 18.5
        }
      ]
    },
    {
      "id": "new-binding-midi",
      "title": "Nuova Associazione: MIDI",
      "description": "Dialog per creare un binding fisico che invia eventi MIDI.",
      "image": "./assets/appconfigurator-new-binding-midi.png",
      "hotspots": [
        {
          "id": "physical-key-midi",
          "title": "Tasto ODLA",
          "text": "Come per il binding QWERTY, qui scegli il gesto fisico ODLA che attivera l'evento MIDI.",
          "x": 1.1,
          "y": 5.7,
          "width": 97.9,
          "height": 16.4
        },
        {
          "id": "midi-type",
          "title": "Tipo MIDI",
          "text": "La modalita MIDI e selezionata. Serve quando il tasto fisico deve inviare note o sequenze MIDI a un software esterno.",
          "x": 15.2,
          "y": 26.9,
          "width": 7.3,
          "height": 3.3
        },
        {
          "id": "existing-midi-command",
          "title": "Usa comando esistente",
          "text": "Questa opzione permette di riutilizzare un comando MIDI gia definito. Il menu a discesa sottostante ti fa scegliere il comando gia presente da collegare al binding.",
          "x": 1.8,
          "y": 30,
          "width": 97.1,
          "height": 10.2
        },
        {
          "id": "midi-row",
          "title": "Riga nota MIDI",
          "text": "Ogni riga definisce canale, velocity, modalita Staff e nota o pitch da inviare. Puoi costruire sequenze con piu righe.",
          "x": 2.2,
          "y": 48.2,
          "width": 95,
          "height": 16.2
        },
        {
          "id": "midi-staff-toggle",
          "title": "Flag Staff",
          "text": "Quando attivi Staff, il valore finale non viene interpretato come nota MIDI assoluta ma come posizione sul pentagramma. Questo e utile nei flussi che lavorano per gradi o posizioni musicali invece che per pitch numerico.",
          "x": 62.2,
          "y": 48.8,
          "width": 10,
          "height": 8
        },
        {
          "id": "midi-add-note",
          "title": "Aggiungi nota",
          "text": "Questo pulsante aggiunge una nuova riga MIDI, utile per accordi o sequenze articolate.",
          "x": 84.6,
          "y": 51.2,
          "width": 12.6,
          "height": 7.2
        },
        {
          "id": "midi-note-box",
          "title": "Note descrittive",
          "text": "Qui puoi inserire note di supporto per spiegare il senso musicale o tecnico dell'associazione.",
          "x": 1.3,
          "y": 63,
          "width": 97.2,
          "height": 29.8
        }
      ]
    },
    {
      "id": "new-binding-menu",
      "title": "Nuova Associazione: Menu GUI",
      "description": "Dialog per aprire un menu GUI quando viene premuta una combinazione fisica ODLA.",
      "image": "./assets/appconfigurator-new-binding-menu.png",
      "hotspots": [
        {
          "id": "physical-key-menu",
          "title": "Tasto ODLA",
          "text": "Definisce quale combinazione fisica aprira il menu selezionato.",
          "x": 1.3,
          "y": 5,
          "width": 97.3,
          "height": 19
        },
        {
          "id": "menu-type",
          "title": "Tipo Menu GUI",
          "text": "Con Menu GUI selezionato, il binding non invia tasti o MIDI: apre un menu dell'interfaccia ODLA.",
          "x": 22.2,
          "y": 26.7,
          "width": 10.3,
          "height": 3.7
        },
        {
          "id": "existing-menu-command",
          "title": "Usa comando esistente",
          "text": "Anche per i menu puoi riutilizzare un comando gia definito. Il campo sotto il checkbox mostra l'elenco dei comandi compatibili gia presenti nell'app.",
          "x": 1.7,
          "y": 30,
          "width": 96.8,
          "height": 10.2
        },
        {
          "id": "menu-selector",
          "title": "Selettore menu",
          "text": "Qui scegli quale menu GUI deve essere aperto quando si attiva la combinazione fisica.",
          "x": 2.4,
          "y": 40.7,
          "width": 94.9,
          "height": 5
        },
        {
          "id": "menu-hint",
          "title": "Indicazione comportamento",
          "text": "Questa nota ricorda che il menu si apre sull'evento di pressione del tasto fisico.",
          "x": 6.7,
          "y": 46,
          "width": 36.8,
          "height": 4.1
        },
        {
          "id": "menu-binding-notes",
          "title": "Note",
          "text": "Area facoltativa per annotare perche il menu viene aperto o come si integra nel flusso dell'app.",
          "x": 1.3,
          "y": 63.2,
          "width": 97.2,
          "height": 29.6
        }
      ]
    },
    {
      "id": "edit-binding",
      "title": "Modifica Associazione",
      "description": "Dialog di modifica di un binding gia esistente. In questo screenshot la parte comando e in modalita MIDI.",
      "image": "./assets/appconfigurator-edit-binding.png",
      "hotspots": [
        {
          "id": "edit-physical-key",
          "title": "Combinazione fisica acquisita",
          "text": "Mostra il tasto ODLA gia associato. Puoi ascoltare di nuovo o reimpostare la selezione per cambiarla.",
          "x": 0.8,
          "y": 7,
          "width": 98.1,
          "height": 19.2
        },
        {
          "id": "edit-type-midi",
          "title": "Tipo comando selezionato",
          "text": "Qui vedi il tipo attualmente associato. In questa schermata e selezionato MIDI, ma puoi cambiare il tipo se necessario.",
          "x": 1.9,
          "y": 31.8,
          "width": 30.6,
          "height": 4.1
        },
        {
          "id": "edit-existing-command",
          "title": "Usa comando esistente",
          "text": "Se lo attivi, il binding viene riallineato a un comando gia presente invece di mantenere o modificare i parametri manualmente. Il menu sotto il checkbox contiene l'elenco dei comandi disponibili.",
          "x": 1.4,
          "y": 35,
          "width": 97,
          "height": 13
        },
        {
          "id": "edit-midi-config",
          "title": "Configurazione MIDI",
          "text": "La sezione centrale contiene i parametri della nota o sequenza MIDI gia collegata al tasto.",
          "x": 2.6,
          "y": 46.1,
          "width": 95.3,
          "height": 14.6
        },
        {
          "id": "edit-midi-staff",
          "title": "Flag Staff",
          "text": "La flag Staff cambia il significato del valore finale: da nota MIDI numerica a posizione di pentagramma. Serve quando il comando deve seguire una logica musicale a staff anziche un pitch assoluto.",
          "x": 62,
          "y": 48.4,
          "width": 10,
          "height": 8
        },
        {
          "id": "edit-binding-notes",
          "title": "Note del binding",
          "text": "Consente di aggiornare le note senza toccare il comando associato.",
          "x": 1.1,
          "y": 72.4,
          "width": 98.1,
          "height": 19.9
        }
      ]
    },
    {
      "id": "swap-binding",
      "title": "Scambia Associazione",
      "description": "Dialog semplice per scegliere una seconda combinazione con cui scambiare la binding corrente.",
      "image": "./assets/appconfigurator-swap-binding.png",
      "hotspots": [
        {
          "id": "swap-combo",
          "title": "Combinazione di destinazione",
          "text": "Questo menu a discesa elenca i binding disponibili con cui scambiare la combinazione selezionata.",
          "x": 3,
          "y": 43.2,
          "width": 94.3,
          "height": 24.1
        },
        {
          "id": "swap-actions",
          "title": "Conferma scambio",
          "text": "OK esegue lo scambio tra le due associazioni. Cancel annulla l'operazione.",
          "x": 64,
          "y": 68,
          "width": 33,
          "height": 25
        }
      ]
    },
    {
      "id": "command-button-qwerty",
      "title": "Comando Bottone: QWERTY",
      "description": "Dialog per creare un bottone GUI che invia una combinazione QWERTY.",
      "image": "./assets/appconfigurator-command-button-qwerty.png",
      "hotspots": [
        {
          "id": "button-name",
          "title": "Nome bottone",
          "text": "Questo nome viene mostrato nella GUI di ODLA. E il testo con cui l'utente riconosce il bottone nel menu.",
          "x": 2.2,
          "y": 8.8,
          "width": 95.3,
          "height": 5.9
        },
        {
          "id": "button-qwerty-type",
          "title": "Tipo QWERTY",
          "text": "Il bottone e configurato per inviare una sequenza QWERTY invece di un evento MIDI o l'apertura di un menu.",
          "x": 6,
          "y": 20.6,
          "width": 9.4,
          "height": 3.3
        },
        {
          "id": "button-existing-command",
          "title": "Usa comando esistente",
          "text": "Questa opzione permette di collegare al bottone un comando gia definito invece di crearne uno nuovo. Il menu sottostante mostra i comandi riutilizzabili.",
          "x": 1.4,
          "y": 31.8,
          "width": 97,
          "height": 13.2
        },
        {
          "id": "button-qwerty-capture",
          "title": "Cattura combinazione",
          "text": "Area usata per registrare i tasti QWERTY da inviare quando l'utente attiva il bottone GUI.",
          "x": 1.6,
          "y": 55.3,
          "width": 97.3,
          "height": 38.3
        },
        {
          "id": "button-notes",
          "title": "Note del bottone",
          "text": "Campo utile per documentare il significato del bottone o il contesto in cui va usato.",
          "x": 1.3,
          "y": 57.2,
          "width": 97.2,
          "height": 35.8
        }
      ]
    },
    {
      "id": "command-button-midi",
      "title": "Comando Bottone: MIDI",
      "description": "Dialog per creare un bottone GUI che invia una o piu note MIDI.",
      "image": "./assets/appconfigurator-command-button-midi.png",
      "hotspots": [
        {
          "id": "button-midi-name",
          "title": "Nome bottone",
          "text": "Nome visualizzato del bottone dentro il menu GUI.",
          "x": 2.4,
          "y": 8.8,
          "width": 95.5,
          "height": 6
        },
        {
          "id": "button-midi-type",
          "title": "Tipo MIDI",
          "text": "La modalita MIDI e attiva. Il bottone puo inviare singole note, accordi o piccole sequenze.",
          "x": 15.4,
          "y": 20.5,
          "width": 6.9,
          "height": 3.3
        },
        {
          "id": "button-midi-existing",
          "title": "Usa comando esistente",
          "text": "Permette di riutilizzare un comando MIDI gia presente nell'app. Il menu sotto il checkbox serve a scegliere il comando da riagganciare al bottone.",
          "x": 1.4,
          "y": 31.8,
          "width": 97,
          "height": 13.2
        },
        {
          "id": "button-midi-rows",
          "title": "Righe note MIDI",
          "text": "Ogni riga rappresenta un evento MIDI con canale, velocity e pitch. Qui si costruiscono i contenuti musicali del bottone.",
          "x": 3.1,
          "y": 33.5,
          "width": 94.2,
          "height": 11.3
        },
        {
          "id": "button-midi-staff",
          "title": "Flag Staff",
          "text": "La flag Staff fa leggere il valore finale come posizione sul pentagramma invece che come nota MIDI assoluta. E utile quando il comando deve seguire una mappatura musicale piu astratta.",
          "x": 62,
          "y": 44.6,
          "width": 10,
          "height": 10.8
        },
        {
          "id": "button-midi-add",
          "title": "Aggiungi nota",
          "text": "Aggiunge una nuova nota alla sequenza MIDI del bottone.",
          "x": 84.3,
          "y": 39.1,
          "width": 12.5,
          "height": 5.2
        },
        {
          "id": "button-midi-notes",
          "title": "Note del bottone",
          "text": "Spazio per annotazioni di supporto, ad esempio il contesto musicale o l'effetto desiderato.",
          "x": 1.3,
          "y": 57.2,
          "width": 97.2,
          "height": 35.8
        }
      ]
    },
    {
      "id": "command-button-menu",
      "title": "Comando Bottone: Menu GUI",
      "description": "Dialog per creare un bottone che apre un menu GUI specifico.",
      "image": "./assets/appconfigurator-command-button-menu.png",
      "hotspots": [
        {
          "id": "button-menu-name",
          "title": "Nome bottone",
          "text": "Definisce l'etichetta visualizzata del bottone nella GUI.",
          "x": 2.3,
          "y": 9,
          "width": 95.2,
          "height": 5.6
        },
        {
          "id": "button-menu-type",
          "title": "Tipo Menu GUI",
          "text": "Con questa modalita il bottone non invia tasti o MIDI, ma porta l'utente verso un altro menu configurato.",
          "x": 22.5,
          "y": 20.4,
          "width": 9.9,
          "height": 3.2
        },
        {
          "id": "button-menu-existing",
          "title": "Usa comando esistente",
          "text": "Permette di riutilizzare un comando menu gia configurato. Il menu sotto il checkbox mostra i comandi disponibili che puoi collegare al bottone corrente.",
          "x": 1.6,
          "y": 23.3,
          "width": 96.7,
          "height": 10.1
        },
        {
          "id": "button-menu-selector",
          "title": "Menu da aprire",
          "text": "Il menu selezionato qui e quello che verra aperto quando il bottone GUI viene premuto.",
          "x": 2.7,
          "y": 33.8,
          "width": 94.7,
          "height": 6.1
        },
        {
          "id": "button-menu-notes",
          "title": "Note del bottone",
          "text": "Puoi usare questa sezione per spiegare il ruolo del bottone all'interno del flusso dell'interfaccia.",
          "x": 1.3,
          "y": 57.2,
          "width": 97.2,
          "height": 35.8
        }
      ]
    },
    {
      "id": "edit-button",
      "title": "Modifica Bottone",
      "description": "Dialog di modifica di un bottone esistente. In questo screenshot la parte comando e in modalita MIDI con piu note.",
      "image": "./assets/appconfigurator-edit-button.png",
      "hotspots": [
        {
          "id": "edit-button-name",
          "title": "Nome del bottone",
          "text": "Permette di rinominare il bottone gia esistente senza ricrearlo.",
          "x": 2.4,
          "y": 10.9,
          "width": 95.2,
          "height": 6.3
        },
        {
          "id": "edit-button-existing",
          "title": "Usa comando esistente",
          "text": "Se attivi questa opzione, il bottone viene riallineato a un comando gia presente. Il campo subito sotto ti permette di sceglierlo dall'elenco disponibile.",
          "x": 1.4,
          "y": 24,
          "width": 97,
          "height": 13.2
        },
        {
          "id": "edit-button-midi",
          "title": "Contenuto MIDI",
          "text": "Qui vedi e modifichi tutte le note MIDI attualmente associate al bottone selezionato.",
          "x": 2.8,
          "y": 40,
          "width": 94.7,
          "height": 24.9
        },
        {
          "id": "edit-button-midi-staff",
          "title": "Flag Staff",
          "text": "Ogni riga puo usare la flag Staff per trattare il valore finale come posizione sul pentagramma invece che come nota MIDI assoluta.",
          "x": 61.7,
          "y": 41.8,
          "width": 9.2,
          "height": 16.2
        },
        {
          "id": "edit-button-notes",
          "title": "Note del bottone",
          "text": "Area per aggiornare promemoria o commenti sul bottone.",
          "x": 1.3,
          "y": 72.1,
          "width": 97.7,
          "height": 19.8
        }
      ]
    },
    {
      "id": "export-config",
      "title": "Esporta Configurazione",
      "description": "Dialog per scegliere una o piu app da esportare.",
      "image": "./assets/appconfigurator-export-config.png",
      "hotspots": [
        {
          "id": "export-selection",
          "title": "Selezione app",
          "text": "Ogni checkbox decide quali app includere nel file di esportazione. Puoi esportarne una sola o piu di una insieme.",
          "x": 4.8,
          "y": 20.4,
          "width": 33.8,
          "height": 32.1
        },
        {
          "id": "export-actions",
          "title": "Conferma esportazione",
          "text": "OK prosegue verso il salvataggio del file esportato. Cancel chiude il dialog.",
          "x": 59.3,
          "y": 86.2,
          "width": 37.3,
          "height": 10.6
        }
      ]
    },
    {
      "id": "import-config",
      "title": "Importa Configurazione",
      "description": "Dialog per scegliere quali app importare dalla configurazione sorgente.",
      "image": "./assets/appconfigurator-import-config.png",
      "hotspots": [
        {
          "id": "import-selection",
          "title": "Selezione app da importare",
          "text": "Le checkbox indicano quali app disponibili nel file sorgente verranno importate nel database locale.",
          "x": 5.8,
          "y": 21.5,
          "width": 26.2,
          "height": 22.1
        },
        {
          "id": "import-actions",
          "title": "Conferma importazione",
          "text": "OK applica l'importazione delle app selezionate. Cancel interrompe l'operazione.",
          "x": 59.5,
          "y": 86,
          "width": 36.7,
          "height": 10.6
        }
      ]
    }
  ]
};
