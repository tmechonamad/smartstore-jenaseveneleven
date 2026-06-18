/* ============================================================
   INHALTE.JS – Hier stehen ALLE Texte und Zahlen der Seite.
   ------------------------------------------------------------
   Wenn du etwas korrigieren oder ändern willst (Produktname,
   Beschreibung, Preis, Chatbot-Antworten ...), änderst du es
   NUR hier. Den Code in index.html musst du dafür nicht
   anfassen.

   Wichtig: Texte stehen in Anführungszeichen "..." – die
   Anführungszeichen selbst bitte nicht löschen, sonst
   funktioniert die Seite nicht mehr.
   ============================================================ */

const inhalte = {

  // ---- Kopfbereich / Eyebrow-Text über dem Produktnamen ----
  eyebrow: "SMARTSTORE JenaSvenEleven · PRODUKTINFO",

  // ---- Produktname und Untertitel ----
  produktname: "L'Oréal Men Expert Barber Club",
  produkttyp: "Duschgel für Körper, Haare & Bart",

  // ---- Kurzer Satz direkt unter dem Produktnamen ----
  kurzbeschreibung: "Drei Wirkungen in einer Formel – die schnelle Pflege für danach.",

  // ---- Preis-Tag (hängendes Schild am Produktfoto) ----
  preis: "2,00 €",
  menge: "250 ml",

  // ---- Die drei "X3"-Wirkungen ----
  wirkungen: [
    {
      titel: "Reinigung",
      text: "Befreit Haut, Haare und Bart gründlich von Schmutz und Talg."
    },
    {
      titel: "Feuchtigkeit",
      text: "Versorgt die Haut mit Feuchtigkeit, ohne sie auszutrocknen."
    },
    {
      titel: "Geschmeidigkeit",
      text: "Macht Haare und Bart geschmeidig und leicht kämmbar."
    }
  ],

  // ---- Ausführlichere Beschreibung ----
  beschreibung: "Das Barber Club Duschgel ist auf die tägliche Pflege von Haut, Haaren und Bart abgestimmt. Ätherisches Zedernholzöl gibt eine warme, holzige Duftnote, wie man sie aus dem klassischen Barbershop kennt. Der Flaschenkörper besteht zu 100 % aus recyceltem Plastik.",

  // ---- Anwendungshinweis ----
  anwendung: "Anwendung: Auf feuchte Haut, Haare oder Bart auftragen, sanft einmassieren und gründlich mit Wasser ausspülen.",

  // ---- Hinweis-Text über dem simulierten PayPal-Button ----
  zahlungshinweis: "Dieser Prototyp simuliert den Bezahlvorgang. Es findet keine echte Zahlung statt.",

  // ---- Texte für den simulierten Bezahlvorgang (Modal) ----
  zahlung: {
    buttonText: "Mit PayPal bezahlen (Demo)",
    schritt1: "Verbindung zu PayPal wird simuliert …",
    schritt2: "Zahlung wird simuliert …",
    erfolgTitel: "Zahlung erfolgreich (Demo)",
    erfolgText: "Dies ist eine Simulation für den Prototyp. Es wurde keine echte Zahlung ausgeführt und kein echtes Geld bewegt.",
    schliessenButton: "Schließen"
  },

  // ---- Chatbot: Begrüßung, die zuerst erscheint ----
  chatbotBegruessung: "Hallo! Ich bin der digitale Assistent des Kundencenters. Frag mich gern nach Preis, Anwendung, Inhaltsstoffen oder Nachhaltigkeit.",

  // ---- Chatbot: Schlüsselwörter und passende Antworten ----
  // Du kannst hier weitere Einträge ergänzen: einfach eine neue
  // Zeile nach dem Muster { schluesselwoerter: [...], antwort: "..." } hinzufügen.
  chatbotAntworten: [
    {
      schluesselwoerter: ["preis", "kosten", "wie viel", "kostet"],
      antwort: "Das Duschgel kostet 2,00 € pro 250-ml-Flasche."
    },
    {
      schluesselwoerter: ["ml", "menge", "größe", "inhalt", "wie viel ist drin"],
      antwort: "Die Flasche enthält 250 ml."
    },
    {
      schluesselwoerter: ["zedernholz", "duft", "riecht", "geruch"],
      antwort: "Das Duschgel enthält ätherisches Zedernholzöl und hat einen warmen, holzigen Duft."
    },
    {
      schluesselwoerter: ["nachhaltig", "umwelt", "plastik", "recycelt", "recycling"],
      antwort: "Der Flaschenkörper besteht zu 100 % aus recyceltem Plastik."
    },
    {
      schluesselwoerter: ["anwendung", "benutzen", "verwenden", "auftragen"],
      antwort: "Einfach auf feuchte Haut, Haare oder Bart auftragen, einmassieren und gründlich ausspülen."
    },
    {
      schluesselwoerter: ["bart", "haare", "körper"],
      antwort: "Das Duschgel ist für Körper, Haare und Bart geeignet – daher die X3-Wirkung."
    },
    {
      schluesselwoerter: ["rückgabe", "zurückgeben", "umtausch", "retoure"],
      antwort: "Bitte wende dich für Rückgaben an unser Kundencenter vor Ort, du erhältst dort weitere Informationen."
    },
    {
      schluesselwoerter: ["zahlung", "bezahlen", "paypal"],
      antwort: "Du kannst die Zahlung oben auf der Seite simulieren – im echten Markt zahlst du direkt an der Kasse oder per App."
    },
    {
      schluesselwoerter: ["hallo", "hi", "hey", "guten tag"],
      antwort: "Hallo! Wie kann ich dir zu diesem Produkt weiterhelfen?"
    },
    {
      schluesselwoerter: ["danke", "dankeschön", "merci"],
      antwort: "Gerne! Wenn du noch Fragen hast, frag einfach weiter."
    }
  ],

  // ---- Chatbot: Antwort, falls kein Schlüsselwort passt ----
  chatbotStandardantwort: "Das habe ich leider nicht verstanden. Frag mich gern nach Preis, Anwendung, Inhaltsstoffen oder Nachhaltigkeit.",

  // ---- Inhaltsstoffe mit kurzer Erklärung ----
  // Beim Antippen/Anklicken eines Inhaltsstoffs erscheint die
  // jeweilige "beschreibung" in einem kleinen Fenster.
  inhaltsstoffe: [
    { name: "Aqua / Water", beschreibung: "Wasser – die Basis fast aller Kosmetikprodukte und Lösungsmittel für die übrigen Inhaltsstoffe." },
    { name: "Sodium Laureth Sulfate", beschreibung: "Ein mildes Tensid, das für die reinigende, schäumende Wirkung des Duschgels sorgt." },
    { name: "Glycerin", beschreibung: "Ein feuchtigkeitsbindender Stoff, der die Haut vor dem Austrocknen schützt." },
    { name: "Sodium Chloride", beschreibung: "Gewöhnliches Speisesalz, hier eingesetzt, um die Konsistenz des Gels einzustellen." },
    { name: "Coco-Betaine", beschreibung: "Ein aus Kokosöl gewonnenes, mildes Reinigungsmittel, das zusätzlich die Schaumbildung unterstützt." },
    { name: "Parfum / Fragrance", beschreibung: "Sammelbegriff für die Duftstoffmischung, die dem Produkt seinen charakteristischen Geruch gibt." },
    { name: "Pentylene Glycol", beschreibung: "Ein Feuchthaltemittel, das die Formel zusätzlich leicht konservierend unterstützt." },
    { name: "Butylene Glycol", beschreibung: "Ein Lösungsmittel, das die übrigen Inhaltsstoffe in der Formel verteilt und die Textur verbessert." },
    { name: "Mentha Piperita Extract / Peppermint Extract", beschreibung: "Pfefferminzextrakt, der für ein kühlendes, erfrischendes Hautgefühl sorgt." },
    { name: "Theobroma Cacao Extract / Cocoa Extract", beschreibung: "Kakaoextrakt mit pflegenden Eigenschaften, der zusätzlich einen warmen Duftakzent setzt." },
    { name: "Citric Acid", beschreibung: "Citronensäure, die den pH-Wert des Produkts auf ein hautfreundliches Niveau einstellt." },
    { name: "Sodium Hydroxide", beschreibung: "Wird in sehr kleinen Mengen genutzt, um den pH-Wert der Formel auszubalancieren." },
    { name: "Citronellol", beschreibung: "Ein natürlich in ätherischen Ölen vorkommender Duftstoff mit zitrusartiger Note." },
    { name: "Coumarin", beschreibung: "Ein Duftstoff, der häufig natürlich in ätherischen Ölen vorkommt und den Geruch abrundet." },
    { name: "Geraniol", beschreibung: "Ein blumig-süßlich duftender Inhaltsstoff, der z. B. natürlich in Rosenöl vorkommt." },
    { name: "Limonene", beschreibung: "Ein Duftstoff aus der Schale von Zitrusfrüchten, der eine frische, zitronige Note verleiht." },
    { name: "Linalool", beschreibung: "Ein blumiger Duftstoff, der natürlich zum Beispiel in Lavendel vorkommt." },
    { name: "Sodium Benzoate", beschreibung: "Ein Konservierungsstoff, der das Produkt vor Keimen und Verderb schützt." }
  ],

  // ---- Fußzeile ----
  fusszeile: "Prototyp · Digitale Produktinfo im Smartstore"

};
