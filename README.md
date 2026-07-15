# Kerala — Aprende Malayalam 🌴

App web gratuita para aprender malayalam desde cero hasta nivel A1, en español. Estilo Duolingo, funciona offline y es instalable como app en el móvil.

**Pruébala:** https://learn-malayalam.netlify.app

## Características
- 7 unidades con ~45 lecciones y examen de fin de unidad
- 250+ palabras y 40 frases con romanización y escritura malayalam
- 8 tipos de ejercicio: flashcards, elegir, escribir, banco de palabras bidireccional, completar huecos, emparejar, transformaciones gramaticales y contrarreloj
- Historias interactivas ambientadas en Kerala con comprensión lectora
- Alfabeto completo (60 letras + 35 ligaduras) con trazado a dedo y animación del orden de trazos real
- Lecciones de gramática: SOV, negación, preguntas, casos, plural y tiempos verbales
- Repaso inteligente de errores y repaso diario espaciado
- Misiones diarias, rachas con protectores, logros y notas culturales
- 100% offline tras la primera carga (service worker) · progreso local con copia de seguridad exportable

## Estructura
- `index.html` — aplicación completa (UI + lógica)
- `data.js` — vocabulario, frases, historias y notas culturales (editable sin tocar código)
- `strokes.js` — trazados vectoriales de letras y ligaduras
- `sw.js` — service worker para modo offline
- `manifest.json` + iconos — instalación como PWA

## Atribuciones
- Trazados de letras: [Malayalam Mash](https://github.com/santhoshtr/mlmash) © Santhosh Thottingal / [SMC](https://smc.org.in) — Licencia MIT
- Iconos basados en el estilo de [Tabler Icons](https://tabler.io/icons) — Licencia MIT

## Licencia
MIT — ver [LICENSE](LICENSE). Hecho con ❤️ para la comunidad hispanohablante que quiere aprender malayalam.
