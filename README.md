# Pokédex

Grundgerüst für einen Pokédex mit HTML, CSS und JavaScript.
Pokémon-Daten werden über die PokéAPI geladen.

## Ordnerstruktur

- `index.html`: HTML-Grundgerüst mit eingebundenem CSS und JavaScript.
- `css/style.css`: Gestaltung der App.
- `js/app.js`: Einstiegspunkt und spätere Steuerung der App.
- `js/api.js`: API-Abfragen.
- `js/render.js`: Darstellung der Pokémon.
- `assets/images/`: Eigene Bilder und Platzhalter.
- `assets/icons/`: Icons und Logo.

Die `.gitkeep`-Dateien sorgen dafür, dass Git auch leere Asset-Ordner erfasst.

## Lokal starten

Öffne `index.html` über einen lokalen Webserver, zum Beispiel mit der
VS-Code-Erweiterung Live Server. JavaScript-Module benötigen einen Webserver.

Das Grundgerüst lädt noch keine Pokémon automatisch. In `js/app.js` steht ein
auskommentiertes Beispiel für die erste API-Abfrage und Darstellung.
