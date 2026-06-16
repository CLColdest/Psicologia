# Context

Ultima actualizacion: 2026-06-16

## Objetivo del archivo

Este archivo mantiene el contexto operativo actual del proyecto: en que punto
quedamos, que se hizo ultimo, que sigue ahora y que decisiones temporales estan
vigentes.

No reemplaza:
- [`ARCHITECTURE-PSICOLOGIA.md`](C:/Proyectos/Psicologia/ARCHITECTURE-PSICOLOGIA.md), que define la arquitectura y directriz base del proyecto.
- [`history.md`](C:/Proyectos/Psicologia/history.md), que registra el historial cronologico de cambios y decisiones.

Regla de trabajo acordada:
- Cada cambio relevante debe actualizar `history.md`.
- Cada cambio relevante debe actualizar `context.md`.
- `ARCHITECTURE-PSICOLOGIA.md` solo se actualiza si cambia la directriz base, la arquitectura o una decision estructural.

Directriz adicional vigente:
- El sitio debe quedar preparado desde `v1` para poder anunciarse sin problemas en el futuro.

---

## Estado actual

- Existe un scaffold inicial de `Next.js` con `App Router`.
- Existe base de rutas por locale para `es/en`.
- Existe una home inicial ya orientada a conversion.
- Existen paginas internas iniciales para `sobre-mi`, `servicios` y `contacto`.
- Existe una capa inicial de i18n interna.
- Existe directriz explicita de conversion y preparacion para trafico pago futuro.
- Las dependencias ya estan instaladas.
- `typecheck` y `build` ya pasan.
- El header usa un unico CTA de contacto sin duplicar el link textual.
- Los CTAs primarios ya usan una variante visual consistente en color acento.
- El copy placeholder de home y contacto quedo mas simple.
- La home ya no repite bloques de metricas/diferenciales redundantes.
- `servicios` y `contacto` ya no tienen botones finales innecesarios.
- El header agrega `Inicio` solo fuera de la home.
- El hero de la home ya usa una foto real temporal desde `public/images/`.
- El panel editorial base ya esta montado con `Sanity Studio`.
- Falta conectar credenciales reales de `Sanity`.
- `home`, `sobre-mi`, `servicios`, `contacto` y `siteSettings` ya leen desde Sanity con fallback local.
- Aun no existe `POST /api/contact`.
- Ya existe CTA flotante de WhatsApp, stack flotante de redes y boton volver arriba.
- `contacto` ya tiene base visual de mapa y datos visibles de consulta.
- `testimonial` ya existe en Studio y ahora debe renderizarse en `sobre-mi`.
- El bootstrap de Studio ahora crea tambien un testimonio de muestra por idioma.
- La paleta de colores base ya es editable desde `siteSettings` en Sanity.
- Los textos del sitio ya usan `Nunito`.
- Header, footer, flotantes y pagina de servicios ahora tienen textos modelados en `Sanity`.
- `Sobre mi`, `Contacto` y `Home` ampliaron cobertura de campos para reducir texto hardcodeado.
- Existe base funcional de `columnas` con listado, detalle por slug y preview en home.
- `author`, `post` y `postsPage` ya forman parte del Studio y del bootstrap.
- Existe `POST /api/contact` con validacion simple y formulario visible en `contacto`.
- Se simplifico `contactPage` para dejar solo campos realmente usados y las opciones de modalidad ahora viven como lista editable en `Sanity`.
- Se limpiaron campos muertos de CMS como `shortLabel` en redes y `authorSectionLabel` en columnas.
- La base editorial y los fallbacks visibles ahora quedaron reescritos con tono real de sitio para Angela Carvajal.
- `Inicio` queda fijo en el header para soportar una futura animacion de secciones sin esconder el item.
- `columnas` ya tiene una identidad mas editorial y el hero de home se ajusto para reducir aire excesivo en el titulo.
- Se ajustaron espaciados de tarjetas, contacto e inputs para mejorar legibilidad visual.
- El detalle de `columnas` ahora ordena mejor titulo, resumen, autora e imagen.
- `post` ya soporta `galleryImages` y el detalle muestra carrusel con imagen completa sin recorte.
- Existe [SETUP-PORTABLE.md](C:/Proyectos/Psicologia/SETUP-PORTABLE.md) para retomar el proyecto desde otro PC.

---

## Ultimo trabajo realizado

- Se definio y documento la arquitectura objetivo en `ARCHITECTURE-PSICOLOGIA.md`.
- Se creo el bootstrap inicial del frontend.
- Se creo `history.md` como registro cronologico del proyecto.
- Se acordo crear `context.md` como referencia corta del estado de trabajo actual.
- Se formalizo que la `v1` debe quedar lista para anuncios futuros y conversion.
- Se rehizo la home inicial con mejor jerarquia de conversion, CTAs y bloques de confianza.
- Se aterrizaron las paginas internas principales con contenido bilingue provisional y mejor estructura visual.
- Se instalaron dependencias y se corrigio la compilacion local quitando la dependencia de Google Fonts.
- Se corrigio la redundancia de `Contacto` en header y el contraste de botones oscuros.
- Se simplifico copy placeholder y se oculto el caret visual fuera de campos editables.
- Se limpio la estructura de home, servicios y contacto para reducir repeticion y CTA innecesario.
- Se integro una foto local temporal de la terapeuta en el hero principal.
- Se monto `Sanity Studio` con schemas base y ruta `/studio`.
- Se conectaron paginas principales y `siteSettings` a queries reales de Sanity.
- Se incorporaron referencias UX de sitio competitivo al baseline del proyecto.
- Se agregaron CTA flotante de WhatsApp, redes flotantes y boton volver arriba.
- Se reforzo header con acceso directo a WhatsApp.
- Se ajusto la home para enfatizar especialidades por tipo de paciente.
- Se rehizo la pagina `contacto` para mostrar mapa, direccion, email, horario y CTA directo.
- Se detecto que `testimonial` existia en Studio pero aun no estaba conectado al frontend.
- Se dejo preparado un testimonio semilla real para `es` y `en` desde el bootstrap de Studio.
- Se movio la paleta base a `siteSettings` para evitar cambios manuales en CSS.
- Se cambio la tipografia base de textos a `Nunito`.
- Se hizo una revision integral para mover al CMS los textos globales y de paginas que seguian fuera de `Sanity`.
- Se implemento el bloque editorial de columnas conectado a `Sanity` end-to-end.
- Se implemento formulario real de contacto y endpoint server-side.
- Se ordeno el modelo de contenido para reutilizar mejor `siteSettings` y reducir campos redundantes en `Sanity`.
- Se reemplazo gran parte del copy placeholder por contenido base mas realista para Angela Carvajal.
- Se hizo una segunda pasada visual para apretar tipografia, ajustar espaciados y reforzar el lenguaje editorial de columnas.
- Se ajustaron espaciados internos de cards y bloques de contacto.
- Se reorganizo el detalle de columnas para evitar duplicacion visual entre resumen y cuerpo.
- Se agrego soporte de galeria de imagenes en columnas con carrusel horizontal.
- Se documento el proceso de portabilidad del proyecto a otro PC en `SETUP-PORTABLE.md`.

---

## Siguiente paso recomendado

1. Configurar `RESEND_API_KEY` y `CONTACT_TO_EMAIL` para envio real.
2. Agregar base de medicion para contacto y CTAs.
3. Reemplazar datos operativos de contacto y redes por datos reales definitivos.
4. Ejecutar `Contenido inicial` para sembrar los nuevos campos compactados en `Sanity`.
5. Refinar SEO base de blog y metadatos por post.

---

## Pendientes vigentes

- Ajustar home y estructura visual para conversion.
- Dejar base de medicion para contacto y CTAs.
- Reemplazar enlaces sociales y datos de contacto placeholder por datos reales.
- Refinar SEO base de blog y metadatos por post.

---

## Decisiones temporales vigentes

- Se mantiene una estructura fisica unica de rutas por ahora.
- La traduccion profunda de slugs se deja como decision futura.
- Se prioriza primero dejar la base del frontend y CMS antes de agenda o integraciones avanzadas.
- La home debe servir tambien como landing de conversion para futuras campañas.
- Deben existir CTAs claros y base de tracking para contacto.
- Regla vigente: cada texto nuevo agregado al frontend debe agregarse tambien a `Sanity`.

---

## Convencion de mantenimiento

Cuando haya un cambio relevante:

- actualizar `history.md` con el registro cronologico
- actualizar `context.md` con el nuevo estado actual
- actualizar `ARCHITECTURE-PSICOLOGIA.md` solo si cambia una decision estructural
