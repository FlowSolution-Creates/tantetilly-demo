# Gastopvolging · Concept voor Tante Tilly

Interactieve demo/voorstel voor Tante Tilly (Brasserie, Roermond — The Big Family Group),
gebouwd door FlowSolution. Laat zien hoe AI-gedreven gastopvolging (WhatsApp-nazorg,
recensiebeheer, herkenning van terugkerende gasten) er in de praktijk uit zou zien.

## Structuur

```
index.html          structuur van de pagina, laadt onderstaande css/js
css/
  base.css           huisstijlvariabelen, reset, typografie
  layout.css         topbar, hero, tabnavigatie
  components.css     callout, cta, kaarten, stappenplan, voor/nadeel-tabel, footer
  sections.css       rekenmodule, chatmockup, gastprofiel, ochtendoverzicht, opties
  responsive.css     media queries
js/
  chat.js            animatie van het WhatsApp-gesprek (paneel "De nazorg")
  calc.js             de omzet-rekenmodule (paneel "De vraag")
  tabs.js            tabnavigatie tussen de zes secties
```

Geen build-stap, geen dependencies. Gewoon `index.html` openen, of statisch hosten
(Vercel/Netlify/GitHub Pages).

## Huisstijl aanpassen

Alle kleuren en lettertypes zitten in het `:root{}`-blok bovenaan `css/base.css`
(`--primary`, `--text`, `--bg`, `--card`, `--border`, `--font`, `--font-head`).
Pas alleen dat blok aan om de stijl te wijzigen.

## Let op

- Verzonnen namen, cijfers en berichten — puur ter illustratie.
- `<meta name="robots" content="noindex, nofollow">` staat erin: niet bedoeld om
  geïndexeerd te worden.
- De rekenmodule gebruikt uitsluitend de waarden die de gebruiker zelf invult.
