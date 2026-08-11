# Vochemer KG Ölligspiefe – Version 11 mit Zwiebel-Favicon

Responsive statische Website für GitHub Pages. Keine Installation erforderlich.

## Farbkonzept

Die Website verwendet ausschließlich die Vereinsfarben Grün, Gelb, Weiß und Schwarz. Die zentralen Farben lassen sich ganz oben in `style.css` anpassen.

## Änderungen in Version 03

- die doppelte Folge im Traditionsband wurde entfernt
- alle Unterseiten verwenden dieselbe Kopfzeile und Navigation wie die Startseite
- Abstände, Typografie, Karten, Schaltflächen und Seitenköpfe wurden vereinheitlicht
- jede Seite besitzt einen vollständigen Footer mit Sponsoren, Kontakt und Social Media
- Impressum und Datenschutz wurden ebenfalls an die gemeinsame Navigation angebunden

## Änderung in Version 04

Das Menüband ist auf allen Seiten „sticky“ und bleibt beim Scrollen am oberen Fensterrand sichtbar. Die Abstände der Titelbereiche und die Sprungziele innerhalb der Startseite wurden dafür angepasst.

## Änderung in Version 05

Die Website besteht aus zwei Hauptseiten:

- `index.html`: Startseite, Termine, aktive Gruppen und Kontakt
- `verein.html`: Verein, Tanzgarde, Burgwache, Vorstand und Sponsoren

Beide Seiten verwenden exakt dasselbe Sticky-Menü mit identischer Reihenfolge, Höhe und Ausrichtung. Innerhalb einer Seite wird weich zum gewählten Bereich gescrollt. Beim Wechsel zwischen Start- und Vereinsseite bleibt das Menü optisch an derselben Stelle, sodass kein sichtbares Umspringen der Navigation entsteht.

## Änderung in Version 06

- direkt unter „Verein“ stehen drei große Schnellzugriffe zu Tanzgarde, Burgwache und Vorstand
- die Menüfolge lautet: Startseite, Termine, Aktive Gruppe, Verein, Tanzgarde, Burgwache, Vorstand, Sponsoren, Kontakt
- der Menüpunkt des aktuell angezeigten Bereichs wird vollständig ausgeblendet
- die übrigen Menüpunkte rücken zusammen; es bleibt keine leere Lücke zurück
- die visuelle Menügestaltung entspricht wieder Version 03: Dunkelgrün, weiße Schrift, gelbe Akzente und kein Glas- oder Schlagschatteneffekt

## Änderung in Version 07

Die Hauptnavigation verwendet wieder die ursprüngliche Typografie aus Version 03: „DM Sans“, 13 Pixel und Schriftstärke 600. Auf kleineren Bildschirmen wird die Größe kontrolliert angepasst, damit alle Menüpunkte ohne Überlagerung Platz finden.

## Änderung in Version 08

Das Sticky-Menü verwendet denselben dunklen Grünverlauf mit dezentem gelbem Lichtakzent wie der obere Bereich der Startseite. Dadurch geht das Menü optisch nahtlos in das Titelmotiv über.

## Änderung in Version 09

Das Menüband verwendet einen sichtbar helleren Verlauf aus drei reinen Grüntönen. Der gelbe Lichtakzent wurde vollständig entfernt; Menüpunkte und Logo bleiben klar lesbar.

## Änderung in Version 10

Die Erkennung des aktuellen Bereichs richtet sich nun nach der tatsächlichen Position im Seitenaufbau und nicht nach der Reihenfolge im Menü. Beim Öffnen von „Termine“ wird deshalb korrekt „Termine“ ausgeblendet und nicht mehr „Aktive Gruppe“.

## Änderung in Version 11

Ein stilisiertes Zwiebel-Symbol in Vereinsgrün, Gelb und Weiß wurde als Favicon ergänzt. Es erscheint im Browser-Tab und wird von Browsern als Symbol für Lesezeichen verwendet. Das Web-App-Manifest enthält dasselbe Vereinssymbol.

Der Instagram-Link wurde anhand der bereitgestellten Designvorlage als `kg_oelligspiefe_1978` eingetragen. Da sich kein eindeutiger offizieller Facebook-Seitenlink ermitteln ließ, führt der Facebook-Knopf derzeit zur passenden Facebook-Suche. Dieser Link sollte vor Veröffentlichung durch die genaue Vereinsseite ersetzt werden.

## Enthaltene Seiten

- `index.html` – moderne Startseite mit Geschichte, Gruppen und Terminen
- `vorstand.html` – geschäftsführender und erweiterter Vorstand
- `burgwache.html` – Corps, Auftritte, Kontakt und Stammquartier
- `tanzgarde.html` – Minis, Kinder- und Tanzgarde sowie Team und Buchung
- `sponsoren.html` – Unterstützer und Sponsoringanfrage
- `kontakt.html` – zentrale Kontaktwege nach Anliegen
- `impressum.html` und `datenschutz.html` – rechtliche Seiten
- `style.css`, `pages.css` und `script.js` – Gestaltung und Funktionen
- `unified.css` und `footer.css` – gemeinsames Unterseitendesign und globaler Footer
- `sticky.css` – dauerhaft sichtbares Menüband und angepasste Scroll-Abstände
- `onepage.css` – Inhaltsbereiche der Vereinsseite und kompakte Hauptnavigation
- `navigation.css` – Schnellzugriffe und dynamisches Ausblenden des aktuellen Menüpunkts
- `menu-font.css` – ursprüngliche Menütypografie aus Version 03
- `menu-gradient.css` – Grünverlauf und gelber Lichtakzent des Menübandes
- `favicon.svg` – Zwiebel-Symbol für Browser-Tab und Lesezeichen
- `site.webmanifest` – Website-Metadaten und Icon-Zuordnung

## Vor der Veröffentlichung

1. Termine, Telefonnummern, E-Mail-Adressen und Impressumsangaben durch den Vorstand prüfen.
2. Den gekennzeichneten Bildplatzhalter in index.html durch ein eigenes Vereinsfoto ersetzen.
3. Die Datenschutzerklärung passend zum tatsächlichen Hosting fachlich vervollständigen.
4. Google Fonts lokal einbinden oder entfernen.

## Veröffentlichung

Alle Dateien direkt in die oberste Ebene des GitHub-Repositorys laden. Unter Settings → Pages anschließend Deploy from a branch, main und /(root) auswählen.

Stand der übernommenen Inhalte: August 2026. Die Inhalte stammen aus der bestehenden Vereinswebsite. Angaben zum Vorstand tragen dort teilweise den Stand 21. April 2024 und müssen vor Veröffentlichung geprüft werden. Die Zwiebelgrafik ist ein stilisierter Platzhalter und kann durch das offizielle Vereinswappen ersetzt werden.
