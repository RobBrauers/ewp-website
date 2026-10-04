# assets/img — Benodigde bestanden

Plaats de volgende bestanden in deze map voordat de site live gaat.

## Logo

| Bestand           | Gebruik                                      | Formaat |
|-------------------|----------------------------------------------|---------|
| `logo.svg`        | Navigatie op lichte achtergrond (paper/mist) | SVG     |
| `logo-white.svg`  | Footer op donkere achtergrond (ink)          | SVG     |

Aanbevolen hoogte in de navigatie: **32 px**. De breedte schaalt automatisch mee.

Om het logo te activeren, verwijder de commentaar-tags (`<!-- ... -->`) rondom de
`<img>`-regels in elke pagina. De tekst-fallback verdwijnt dan automatisch.

## Favicons

| Bestand               | Grootte   |
|-----------------------|-----------|
| `favicon.ico`         | 16×16 + 32×32 multi-size ICO |
| `favicon-32x32.png`   | 32×32 px  |
| `favicon-16x16.png`   | 16×16 px  |
| `apple-touch-icon.png`| 180×180 px|

Genereer deze bestanden vanuit het primaire logo via realfavicongenerator.net
of een vergelijkbare tool. Alle `<link>`-tags zijn al aanwezig in elke pagina.

## Eventuele afbeeldingen

Overige afbeeldingen (foto's, spiraal-illustraties) kunnen hier worden geplaatst
en via `assets/img/bestandsnaam.ext` worden aangesproken vanuit elke pagina.
