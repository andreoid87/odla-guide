window.GUI_GUIDE_DATA = {
  screens: [
    {
      id: "main-keys",
      title: "AppConfigurator: Vista Principale",
      description: "Panoramica completa del configuratore in modalità Tasti fisici, con tab app, comandi rapidi e anteprima della tastiera ODLA.",
      image: "./assets/appconfigurator-main-keys.png",
      hotspots: [
        {
          id: "apps-tabs",
          title: "Barra App",
          text: "Qui selezioni l'app che stai configurando. Il pulsante + crea una nuova app, mentre le icone a destra servono per esportare o importare configurazioni.",
          x: 1.0,
          y: 3.0,
          width: 98.0,
          height: 5.0
        },
        {
          id: "keys-mode",
          title: "Area Tasti fisici",
          text: "Questa è la modalità dedicata alle associazioni del dispositivo ODLA. Le combinazioni fisiche vengono collegate a comandi QWERTY, MIDI o Menu GUI.",
          x: 1.3,
          y: 7.8,
          width: 48.7,
          height: 5.2
        },
        {
          id: "gui-mode",
          title: "Area Menu GUI",
          text: "Questa area porta alla configurazione dei menu e dei bottoni a schermo. Serve quando vuoi costruire o modificare l'interfaccia guidata visualizzata da ODLA.",
          x: 50.5,
          y: 7.8,
          width: 47.9,
          height: 5.2
        },
        {
          id: "bindings-table",
          title: "Tabella associazioni",
          text: "Mostra tutte le combinazioni di tasti fisici già configurate, il comando collegato e le note. Da qui selezioni una riga da modificare, scambiare o eliminare.",
          x: 1.5,
          y: 14.1,
          width: 49.6,
          height: 79.2
        },
        {
          id: "keyboard-preview",
          title: "Anteprima tastiera ODLA",
          text: "La tastiera a destra aiuta a capire visivamente i tasti coinvolti. È utile durante la cattura delle combinazioni o per orientarsi nella disposizione dei controlli.",
          x: 52.0,
          y: 14.1,
          width: 46.0,
          height: 79.0
        }
      ]
    },
    {
      id: "physical-keys",
      title: "Tasti Fisici: Tabella",
      description: "Dettaglio della zona sinistra del configuratore, focalizzato su tabella, filtri e pulsanti operativi dei Tasti fisici.",
      image: "./assets/appconfigurator-physical-keys.png",
      hotspots: [
        {
          id: "binding-actions",
          title: "Azioni sulle associazioni",
          text: "I pulsanti Nuova associazione, Modifica, Scambia ed Elimina sono il punto di ingresso per creare o gestire un binding fisico.",
          x: 0.6,
          y: 0.4,
          width: 41.8,
          height: 6.3
        },
        {
          id: "binding-filters",
          title: "Filtri della tabella",
          text: "I tre filtri permettono di restringere l'elenco per combinazione, comando o note. Sono utili quando la lista delle associazioni diventa lunga.",
          x: 0.7,
          y: 7.2,
          width: 98.2,
          height: 5.8
        },
        {
          id: "binding-columns",
          title: "Colonne informative",
          text: "La prima colonna mostra la combinazione di tasti, la seconda il comando associato, la terza eventuali note tecniche o descrittive.",
          x: 0.8,
          y: 13.0,
          width: 98.1,
          height: 7.3
        },
        {
          id: "binding-list",
          title: "Elenco associazioni",
          text: "Ogni riga rappresenta un'associazione tra tasto fisico e azione. Selezionando una riga abiliti le operazioni di modifica o scambio.",
          x: 0.8,
          y: 20.0,
          width: 98.1,
          height: 79.3
        }
      ]
    },
    {
      id: "new-app",
      title: "Nuova App",
      description: "Dialog per creare una nuova app configurabile dentro ODLA.",
      image: "./assets/appconfigurator-new-app.png",
      hotspots: [
        {
          id: "duplicate-source",
          title: "Duplica da",
          text: "Permette di partire da una configurazione esistente. È il modo più rapido per creare una nuova app mantenendo menu, bottoni o binding come base.",
          x: 1.0,
          y: 14.5,
          width: 98.0,
          height: 15.0
        },
        {
          id: "app-name",
          title: "Nome app",
          text: "Campo obbligatorio per il nome visualizzato della nuova app. Se resta vuoto, il dialog mostra un messaggio di validazione e il salvataggio non va a buon fine.",
          x: 1.0,
          y: 29.5,
          width: 98.0,
          height: 16.0
        },
        {
          id: "app-icon",
          title: "Icona app",
          text: "Qui indichi il file da usare come icona o riferimento grafico. Sfoglia apre la selezione file, Pulisci rimuove il percorso corrente.",
          x: 1.0,
          y: 45.5,
          width: 98.0,
          height: 19.0
        },
        {
          id: "app-save-actions",
          title: "Conferma",
          text: "OK salva la nuova app, Cancel chiude il dialog senza applicare modifiche.",
          x: 72.0,
          y: 76.5,
          width: 27.0,
          height: 17.0
        }
      ]
    },
    {
      id: "edit-app",
      title: "Modifica App",
      description: "Versione compatta del dialog usata per rinominare o aggiornare i dati essenziali dell'app selezionata.",
      image: "./assets/appconfigurator-edit-app.png",
      hotspots: [
        {
          id: "edit-app-name",
          title: "Nome app",
          text: "Campo principale per rinominare l'app corrente. Il nome viene riflesso nella tab dell'AppConfigurator.",
          x: 1.0,
          y: 18.0,
          width: 98.0,
          height: 28.0
        },
        {
          id: "edit-app-icon",
          title: "Icona app",
          text: "Consente di cambiare o ripulire il file icona associato all'app.",
          x: 1.0,
          y: 45.0,
          width: 98.0,
          height: 28.0
        },
        {
          id: "edit-app-actions",
          title: "Salvataggio",
          text: "OK conferma le modifiche dell'app. Cancel annulla le variazioni.",
          x: 67.0,
          y: 73.0,
          width: 30.0,
          height: 20.0
        }
      ]
    },
    {
      id: "new-binding-qwerty",
      title: "Nuova Associazione: QWERTY",
      description: "Dialog per creare un binding fisico che invia una combinazione QWERTY.",
      image: "./assets/appconfigurator-new-binding-qwerty.png",
      hotspots: [
        {
          id: "physical-key-capture",
          title: "Tasto ODLA",
          text: "Qui acquisisci la combinazione fisica del dispositivo ODLA. Ascolta avvia la cattura, Reimposta pulisce la selezione corrente.",
          x: 1.3,
          y: 5.0,
          width: 97.3,
          height: 19.0
        },
        {
          id: "command-type",
          title: "Tipo comando",
          text: "Questa riga sceglie il tipo di azione associata al tasto fisico. In questa schermata è selezionato QWERTY.",
          x: 1.4,
          y: 28.0,
          width: 40.0,
          height: 9.0
        },
        {
          id: "existing-command",
          title: "Usa comando esistente",
          text: "Se attivi questa opzione, puoi riusare un comando già definito invece di crearne uno nuovo da zero.",
          x: 1.4,
          y: 36.0,
          width: 97.0,
          height: 11.0
        },
        {
          id: "qwerty-capture",
          title: "Cattura combinazione QWERTY",
          text: "Questa area registra i tasti della tastiera QWERTY da inviare quando premi la combinazione fisica ODLA.",
          x: 3.6,
          y: 48.0,
          width: 93.2,
          height: 19.8
        },
        {
          id: "binding-notes",
          title: "Note",
          text: "Campo facoltativo per annotazioni tecniche, promemoria o descrizioni d'uso del binding.",
          x: 1.3,
          y: 74.0,
          width: 97.2,
          height: 18.5
        }
      ]
    },
    {
      id: "new-binding-midi",
      title: "Nuova Associazione: MIDI",
      description: "Dialog per creare un binding fisico che invia eventi MIDI.",
      image: "./assets/appconfigurator-new-binding-midi.png",
      hotspots: [
        {
          id: "physical-key-midi",
          title: "Tasto ODLA",
          text: "Come per il binding QWERTY, qui scegli il gesto fisico ODLA che attiverà l'evento MIDI.",
          x: 1.3,
          y: 5.0,
          width: 97.3,
          height: 19.0
        },
        {
          id: "midi-type",
          title: "Tipo MIDI",
          text: "La modalità MIDI è selezionata. Serve quando il tasto fisico deve inviare note o sequenze MIDI a un software esterno.",
          x: 1.4,
          y: 28.0,
          width: 40.0,
          height: 9.0
        },
        {
          id: "midi-row",
          title: "Riga nota MIDI",
          text: "Ogni riga definisce canale, velocity, modalità Staff e nota/pitch da inviare. Puoi costruire sequenze con più righe.",
          x: 2.2,
          y: 40.3,
          width: 95.0,
          height: 17.2
        },
        {
          id: "midi-add-note",
          title: "Aggiungi nota",
          text: "Questo pulsante aggiunge una nuova riga MIDI, utile per accordi o sequenze articolate.",
          x: 84.6,
          y: 45.0,
          width: 12.6,
          height: 7.0
        },
        {
          id: "midi-note-box",
          title: "Note descrittive",
          text: "Qui puoi inserire note di supporto per spiegare il senso musicale o tecnico dell'associazione.",
          x: 1.3,
          y: 63.0,
          width: 97.2,
          height: 29.8
        }
      ]
    },
    {
      id: "new-binding-menu",
      title: "Nuova Associazione: Menu GUI",
      description: "Dialog per aprire un menu GUI quando viene premuta una combinazione fisica ODLA.",
      image: "./assets/appconfigurator-new-binding-menu.png",
      hotspots: [
        {
          id: "physical-key-menu",
          title: "Tasto ODLA",
          text: "Definisce quale combinazione fisica aprirà il menu selezionato.",
          x: 1.3,
          y: 5.0,
          width: 97.3,
          height: 19.0
        },
        {
          id: "menu-type",
          title: "Tipo Menu GUI",
          text: "Con Menu GUI selezionato, il binding non invia tasti o MIDI: apre un menu dell'interfaccia ODLA.",
          x: 1.4,
          y: 28.0,
          width: 43.0,
          height: 9.0
        },
        {
          id: "menu-selector",
          title: "Selettore menu",
          text: "Qui scegli quale menu GUI deve essere aperto quando si attiva la combinazione fisica.",
          x: 2.4,
          y: 45.6,
          width: 95.2,
          height: 10.2
        },
        {
          id: "menu-hint",
          title: "Indicazione comportamento",
          text: "Questa nota ricorda che il menu si apre sull'evento di pressione del tasto fisico.",
          x: 7.2,
          y: 57.2,
          width: 55.5,
          height: 6.2
        },
        {
          id: "menu-binding-notes",
          title: "Note",
          text: "Area facoltativa per annotare perché il menu viene aperto o come si integra nel flusso dell'app.",
          x: 1.3,
          y: 62.8,
          width: 97.2,
          height: 30.0
        }
      ]
    },
    {
      id: "edit-binding",
      title: "Modifica Associazione",
      description: "Dialog di modifica di un binding già esistente. In questo screenshot la parte comando è in modalità MIDI.",
      image: "./assets/appconfigurator-edit-binding.png",
      hotspots: [
        {
          id: "edit-physical-key",
          title: "Combinazione fisica acquisita",
          text: "Mostra il tasto ODLA già associato. Puoi ascoltare di nuovo o reimpostare la selezione per cambiarla.",
          x: 1.3,
          y: 5.0,
          width: 97.3,
          height: 19.0
        },
        {
          id: "edit-type-midi",
          title: "Tipo comando selezionato",
          text: "Qui vedi il tipo attualmente associato. In questa schermata è selezionato MIDI, ma puoi cambiare il tipo se necessario.",
          x: 1.4,
          y: 28.0,
          width: 42.0,
          height: 9.0
        },
        {
          id: "edit-midi-config",
          title: "Configurazione MIDI",
          text: "La sezione centrale contiene i parametri della nota o sequenza MIDI già collegata al tasto.",
          x: 2.0,
          y: 38.6,
          width: 95.2,
          height: 22.5
        },
        {
          id: "edit-binding-notes",
          title: "Note del binding",
          text: "Consente di aggiornare le note senza toccare il comando associato.",
          x: 1.3,
          y: 63.0,
          width: 97.2,
          height: 29.6
        }
      ]
    },
    {
      id: "swap-binding",
      title: "Scambia Associazione",
      description: "Dialog semplice per scegliere una seconda combinazione con cui scambiare la binding corrente.",
      image: "./assets/appconfigurator-swap-binding.png",
      hotspots: [
        {
          id: "swap-combo",
          title: "Combinazione di destinazione",
          text: "Questo menu a discesa elenca i binding disponibili con cui scambiare la combinazione selezionata.",
          x: 3.0,
          y: 36.0,
          width: 93.0,
          height: 28.0
        },
        {
          id: "swap-actions",
          title: "Conferma scambio",
          text: "OK esegue lo scambio tra le due associazioni. Cancel annulla l'operazione.",
          x: 64.0,
          y: 68.0,
          width: 33.0,
          height: 25.0
        }
      ]
    },
    {
      id: "command-button-qwerty",
      title: "Comando Bottone: QWERTY",
      description: "Dialog per creare un bottone GUI che invia una combinazione QWERTY.",
      image: "./assets/appconfigurator-command-button-qwerty.png",
      hotspots: [
        {
          id: "button-name",
          title: "Nome bottone",
          text: "Questo nome viene mostrato nella GUI di ODLA. È il testo con cui l'utente riconosce il bottone nel menu.",
          x: 1.4,
          y: 7.0,
          width: 97.0,
          height: 13.0
        },
        {
          id: "button-qwerty-type",
          title: "Tipo QWERTY",
          text: "Il bottone è configurato per inviare una sequenza QWERTY invece di un evento MIDI o l'apertura di un menu.",
          x: 1.4,
          y: 23.0,
          width: 42.0,
          height: 10.0
        },
        {
          id: "button-qwerty-capture",
          title: "Cattura combinazione",
          text: "Area usata per registrare i tasti QWERTY da inviare quando l'utente attiva il bottone GUI.",
          x: 3.6,
          y: 41.5,
          width: 93.4,
          height: 20.8
        },
        {
          id: "button-notes",
          title: "Note del bottone",
          text: "Campo utile per documentare il significato del bottone o il contesto in cui va usato.",
          x: 1.3,
          y: 57.2,
          width: 97.2,
          height: 35.8
        }
      ]
    },
    {
      id: "command-button-midi",
      title: "Comando Bottone: MIDI",
      description: "Dialog per creare un bottone GUI che invia una o più note MIDI.",
      image: "./assets/appconfigurator-command-button-midi.png",
      hotspots: [
        {
          id: "button-midi-name",
          title: "Nome bottone",
          text: "Nome visualizzato del bottone dentro il menu GUI.",
          x: 1.4,
          y: 7.0,
          width: 97.0,
          height: 13.0
        },
        {
          id: "button-midi-type",
          title: "Tipo MIDI",
          text: "La modalità MIDI è attiva. Il bottone può inviare singole note, accordi o piccole sequenze.",
          x: 1.4,
          y: 23.0,
          width: 42.0,
          height: 10.0
        },
        {
          id: "button-midi-rows",
          title: "Righe note MIDI",
          text: "Ogni riga rappresenta un evento MIDI con canale, velocity e pitch. Qui si costruiscono i contenuti musicali del bottone.",
          x: 2.0,
          y: 37.5,
          width: 95.2,
          height: 20.2
        },
        {
          id: "button-midi-add",
          title: "Aggiungi nota",
          text: "Aggiunge una nuova nota alla sequenza MIDI del bottone.",
          x: 85.6,
          y: 43.4,
          width: 11.6,
          height: 7.0
        },
        {
          id: "button-midi-notes",
          title: "Note del bottone",
          text: "Spazio per annotazioni di supporto, ad esempio il contesto musicale o l'effetto desiderato.",
          x: 1.3,
          y: 57.2,
          width: 97.2,
          height: 35.8
        }
      ]
    },
    {
      id: "command-button-menu",
      title: "Comando Bottone: Menu GUI",
      description: "Dialog per creare un bottone che apre un menu GUI specifico.",
      image: "./assets/appconfigurator-command-button-menu.png",
      hotspots: [
        {
          id: "button-menu-name",
          title: "Nome bottone",
          text: "Definisce l'etichetta visualizzata del bottone nella GUI.",
          x: 1.4,
          y: 7.0,
          width: 97.0,
          height: 13.0
        },
        {
          id: "button-menu-type",
          title: "Tipo Menu GUI",
          text: "Con questa modalità il bottone non invia tasti o MIDI, ma porta l'utente verso un altro menu configurato.",
          x: 1.4,
          y: 23.0,
          width: 45.0,
          height: 10.0
        },
        {
          id: "button-menu-selector",
          title: "Menu da aprire",
          text: "Il menu selezionato qui è quello che verrà aperto quando il bottone GUI viene premuto.",
          x: 2.6,
          y: 44.0,
          width: 95.0,
          height: 11.0
        },
        {
          id: "button-menu-notes",
          title: "Note del bottone",
          text: "Puoi usare questa sezione per spiegare il ruolo del bottone all'interno del flusso dell'interfaccia.",
          x: 1.3,
          y: 57.2,
          width: 97.2,
          height: 35.8
        }
      ]
    },
    {
      id: "edit-button",
      title: "Modifica Bottone",
      description: "Dialog di modifica di un bottone esistente. In questo screenshot la parte comando è in modalità MIDI con più note.",
      image: "./assets/appconfigurator-edit-button.png",
      hotspots: [
        {
          id: "edit-button-name",
          title: "Nome del bottone",
          text: "Permette di rinominare il bottone già esistente senza ricrearlo.",
          x: 1.4,
          y: 7.0,
          width: 97.0,
          height: 13.0
        },
        {
          id: "edit-button-midi",
          title: "Contenuto MIDI",
          text: "Qui vedi e modifichi tutte le note MIDI attualmente associate al bottone selezionato.",
          x: 2.0,
          y: 37.5,
          width: 95.2,
          height: 25.0
        },
        {
          id: "edit-button-notes",
          title: "Note del bottone",
          text: "Area per aggiornare promemoria o commenti sul bottone.",
          x: 1.3,
          y: 57.0,
          width: 97.2,
          height: 35.8
        }
      ]
    },
    {
      id: "export-config",
      title: "Esporta Configurazione",
      description: "Dialog per scegliere una o più app da esportare.",
      image: "./assets/appconfigurator-export-config.png",
      hotspots: [
        {
          id: "export-selection",
          title: "Selezione app",
          text: "Ogni checkbox decide quali app includere nel file di esportazione. Puoi esportarne una sola o più di una insieme.",
          x: 6.0,
          y: 20.0,
          width: 88.0,
          height: 63.0
        },
        {
          id: "export-actions",
          title: "Conferma esportazione",
          text: "OK prosegue verso il salvataggio del file esportato. Cancel chiude il dialog.",
          x: 59.0,
          y: 83.0,
          width: 34.0,
          height: 14.0
        }
      ]
    },
    {
      id: "import-config",
      title: "Importa Configurazione",
      description: "Dialog per scegliere quali app importare dalla configurazione sorgente.",
      image: "./assets/appconfigurator-import-config.png",
      hotspots: [
        {
          id: "import-selection",
          title: "Selezione app da importare",
          text: "Le checkbox indicano quali app disponibili nel file sorgente verranno importate nel database locale.",
          x: 6.0,
          y: 20.0,
          width: 88.0,
          height: 63.0
        },
        {
          id: "import-actions",
          title: "Conferma importazione",
          text: "OK applica l'importazione delle app selezionate. Cancel interrompe l'operazione.",
          x: 59.0,
          y: 83.0,
          width: 34.0,
          height: 14.0
        }
      ]
    }
  ]
};
