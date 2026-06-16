# History

Ultima actualizacion: 2026-06-16

## Objetivo del archivo

Este documento centraliza el contexto del proyecto, las decisiones tomadas y el
historial de trabajo. La idea es que podamos retomar rapidamente el estado real
del sitio sin depender de la memoria de la conversacion.

Regla de trabajo acordada:
- Cada avance relevante debe quedar registrado aqui.
- Cada decision tecnica o de producto debe quedar anotada aqui.
- Si se cambia una direccion previamente definida, el cambio debe explicarse aqui.

---

## Contexto general del proyecto

Proyecto para una consulta psicologica con foco inicial en:
- presencia digital
- confianza
- captacion de consultas

La `v1` es principalmente informativa y comercial. Debe presentar:
- a la profesional
- servicios
- modalidades de atencion
- testimonios
- preguntas frecuentes
- ubicacion
- blog
- canales de contacto

La direccion visual definida es:
- moderna
- premium
- minimalista
- con animaciones sobrias
- mobile-first

Restricciones y lineamientos principales:
- costos bajos en `v1`
- contenido autogestionable por la clienta
- SEO bien resuelto desde el inicio
- base bilingue `es/en`
- arquitectura preparada para crecer sin rehacer el proyecto

Documento fuente principal:
- [`ARCHITECTURE-PSICOLOGIA.md`](C:/Proyectos/Psicologia/ARCHITECTURE-PSICOLOGIA.md)

---

## Decisiones principales vigentes

### Producto

- La `v1` no implementa reserva nativa de horas.
- El canal prioritario de conversion es `WhatsApp`.
- El formulario de contacto sera el segundo canal principal.
- La integracion futura de agenda se piensa con `Setmore`.

### Stack tecnico

- `Next.js App Router` como base full-stack.
- `TypeScript` para tipado y mantenibilidad.
- `Tailwind CSS` para el sistema visual.
- `Motion` para animaciones.
- `Sanity` como CMS.
- `Resend` para el formulario de contacto.
- `Vercel` como hosting recomendado.

### Arquitectura

- El proyecto nace para una sola profesional, pero la base debe soportar una futura evolucion a multiples terapeutas.
- La internacionalizacion se prepara desde el inicio con rutas por locale.
- La gestion editorial debe incluir paginas, servicios, FAQ, testimonios, datos de contacto, imagenes y blog.

---

## Estado real del repositorio al iniciar

Cuando se reviso el repositorio por primera vez, el contenido real era:
- solo existia el archivo [`ARCHITECTURE-PSICOLOGIA.md`](C:/Proyectos/Psicologia/ARCHITECTURE-PSICOLOGIA.md)

Conclusion inicial:
- no habia una app montada todavia
- era mejor partir con un scaffold limpio alineado a la arquitectura definida

---

## Trabajo realizado

### 2026-06-14 - Lectura de arquitectura y bootstrap inicial

Se leyo completo el documento de arquitectura y se sintetizo el marco tecnico y de producto.

Se decidio arrancar con una base inicial del frontend antes de integrar el CMS, porque:
- el repo estaba vacio
- la arquitectura ya definia claramente stack y direccion
- convenia dejar lista la estructura del proyecto para iterar despues sobre contenido real

Se creo un scaffold inicial con:
- [`package.json`](C:/Proyectos/Psicologia/package.json)
- [`tsconfig.json`](C:/Proyectos/Psicologia/tsconfig.json)
- [`next.config.ts`](C:/Proyectos/Psicologia/next.config.ts)
- [`postcss.config.mjs`](C:/Proyectos/Psicologia/postcss.config.mjs)
- [`next-env.d.ts`](C:/Proyectos/Psicologia/next-env.d.ts)
- [`src/app/layout.tsx`](C:/Proyectos/Psicologia/src/app/layout.tsx)
- [`src/app/globals.css`](C:/Proyectos/Psicologia/src/app/globals.css)
- [`src/app/page.tsx`](C:/Proyectos/Psicologia/src/app/page.tsx)

Se dejo montada una base bilingue con rutas por locale:
- [`src/app/[locale]/layout.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/layout.tsx)
- [`src/app/[locale]/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/page.tsx)

Se agregaron placeholders iniciales para secciones clave:
- [`src/app/[locale]/sobre-mi/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/sobre-mi/page.tsx)
- [`src/app/[locale]/servicios/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/servicios/page.tsx)
- [`src/app/[locale]/contacto/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/contacto/page.tsx)

Se agrego una primera capa de i18n interna:
- [`src/lib/i18n/config.ts`](C:/Proyectos/Psicologia/src/lib/i18n/config.ts)
- [`src/lib/i18n/dictionaries.ts`](C:/Proyectos/Psicologia/src/lib/i18n/dictionaries.ts)

Se agregaron componentes iniciales de layout y home:
- [`src/components/layout/site-header.tsx`](C:/Proyectos/Psicologia/src/components/layout/site-header.tsx)
- [`src/components/layout/site-footer.tsx`](C:/Proyectos/Psicologia/src/components/layout/site-footer.tsx)
- [`src/components/marketing/home-shell.tsx`](C:/Proyectos/Psicologia/src/components/marketing/home-shell.tsx)
- [`src/components/ui/reveal.tsx`](C:/Proyectos/Psicologia/src/components/ui/reveal.tsx)

Se dejo preparado el espacio para CMS:
- [`sanity/README.md`](C:/Proyectos/Psicologia/sanity/README.md)

Se agrego tambien:
- [`.env.example`](C:/Proyectos/Psicologia/.env.example)
- [`.gitignore`](C:/Proyectos/Psicologia/.gitignore)

### Decision puntual tomada durante el scaffold

Se detecto una inconsistencia inicial entre:
- rutas del diccionario en ingles
- rutas fisicas existentes del proyecto

Decision:
- mantener una estructura de rutas fisicas unica por ahora
- usar labels traducidos en navegacion
- dejar la localizacion profunda de slugs como una decision futura

Motivo:
- simplifica el arranque
- evita duplicar arbol de paginas demasiado pronto
- mantiene el soporte `es/en` funcional desde la base

### 2026-06-14 - Formalizacion de contexto operativo y foco en anuncios futuros

Se creo [`context.md`](C:/Proyectos/Psicologia/context.md) para mantener un
resumen operativo del estado actual del proyecto, separado de la arquitectura y
del historial cronologico.

Se acuerdo la siguiente convencion documental:
- `ARCHITECTURE-PSICOLOGIA.md` define la directriz base
- `history.md` registra cambios y decisiones cronologicas
- `context.md` mantiene el punto actual de trabajo

Ademas, se agrego una nueva directriz de producto:
- la web debe quedar preparada desde `v1` para poder anunciarse sin problemas en el futuro

Esto implica que, ademas de presencia digital y confianza, el sitio debe quedar
listo para adquisicion y conversion mediante trafico pago.

Decisiones derivadas:
- la home debe funcionar tambien como landing de conversion
- se deben priorizar CTAs consistentes
- el rendimiento mobile-first pasa a ser requisito fuerte
- debe existir base de medicion para clics de contacto y formulario
- la arquitectura debe permitir futuras landing pages de campaña

### 2026-06-14 - Primera iteracion de home orientada a conversion

Se reemplazo la home inicial de placeholder tecnico por una estructura mas util
para conversion y anuncios futuros.

Cambios realizados:
- se rehizo [`src/components/marketing/home-shell.tsx`](C:/Proyectos/Psicologia/src/components/marketing/home-shell.tsx)
- se amplio el contenido bilingue en [`src/lib/i18n/dictionaries.ts`](C:/Proyectos/Psicologia/src/lib/i18n/dictionaries.ts)
- se ajusto [`src/components/layout/site-header.tsx`](C:/Proyectos/Psicologia/src/components/layout/site-header.tsx)
- se ajusto [`src/components/layout/site-footer.tsx`](C:/Proyectos/Psicologia/src/components/layout/site-footer.tsx)
- se refino la paleta base en [`src/app/globals.css`](C:/Proyectos/Psicologia/src/app/globals.css)

La nueva home ahora incluye:
- hero con propuesta de valor mas clara
- CTAs mas visibles
- bloques de confianza
- seccion de enfoque
- seccion de servicios
- seccion de proceso inicial
- preview de FAQ
- cierre de contacto mas fuerte

Decision puntual:
- se mantuvo contenido placeholder, pero ya con estructura de conversion real

Motivo:
- convenia definir primero la jerarquia de pagina y el esqueleto de marketing
- esto deja una base mucho mejor para integrar luego contenido real desde CMS

Nota tecnica:
- se normalizaron clases visuales para evitar opacidades no seguras que podian
  generar problemas al compilar estilos con Tailwind

### 2026-06-14 - Aterrizaje inicial de paginas internas principales

Se reemplazaron los placeholders basicos de paginas internas por estructuras mas
coherentes con la home y con la directriz de conversion del proyecto.

Archivos trabajados:
- [`src/app/[locale]/sobre-mi/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/sobre-mi/page.tsx)
- [`src/app/[locale]/servicios/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/servicios/page.tsx)
- [`src/app/[locale]/contacto/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/contacto/page.tsx)

Cambios realizados:
- se agrego manejo por `locale` en las tres paginas
- se definio contenido inicial bilingue por pagina
- se agregaron secciones de apoyo, notas y CTAs
- se alineo la UI con el lenguaje visual de la home

Motivo:
- evitar quiebres de calidad entre la landing principal y la navegacion interna
- dejar una base mas realista antes de integrar CMS y formulario

### 2026-06-14 - Instalacion local y correcciones para compilacion

Se instalaron las dependencias del proyecto con `npm install`.

Durante la validacion local aparecieron dos bloqueos tecnicos:
- `tsconfig.json` fallaba por una advertencia deprecada tratada como error
- `next/font/google` impedia compilar porque intentaba descargar fuentes externas

Cambios realizados:
- se actualizo [`tsconfig.json`](C:/Proyectos/Psicologia/tsconfig.json)
- se simplifico [`src/app/layout.tsx`](C:/Proyectos/Psicologia/src/app/layout.tsx)
- se ajustaron variables tipograficas en [`src/app/globals.css`](C:/Proyectos/Psicologia/src/app/globals.css)

Decision puntual:
- por ahora se usan fuentes de sistema en vez de `next/font/google`

Motivo:
- permite compilar y desarrollar localmente sin depender de acceso externo a Google Fonts

Resultado:
- `npm run typecheck` pasa
- `npm run build` pasa
- `npm run dev -- --hostname 127.0.0.1` arranca correctamente en `http://127.0.0.1:3000`

### 2026-06-14 - Ajuste de CTA de contacto en header y contraste de botones

Se corrigio la duplicacion de contacto en el header y se reforzo el contraste de
los botones oscuros.

Cambios realizados:
- en [`src/components/layout/site-header.tsx`](C:/Proyectos/Psicologia/src/components/layout/site-header.tsx) se elimino el link textual de `Contacto` dentro del nav y se mantuvo un unico CTA
- se hizo explicito el color del texto en botones oscuros en:
  - [`src/components/layout/site-header.tsx`](C:/Proyectos/Psicologia/src/components/layout/site-header.tsx)
  - [`src/components/marketing/home-shell.tsx`](C:/Proyectos/Psicologia/src/components/marketing/home-shell.tsx)
  - [`src/app/[locale]/sobre-mi/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/sobre-mi/page.tsx)
  - [`src/app/[locale]/servicios/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/servicios/page.tsx)
  - [`src/app/[locale]/contacto/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/contacto/page.tsx)

Motivo:
- evitar redundancia visual en la navegacion
- asegurar legibilidad consistente en CTAs de fondo oscuro

### 2026-06-14 - Simplificacion de copy y unificacion de CTAs

Se simplifico el contenido placeholder para que la estructura del sitio sea mas
facil de leer y entender durante esta etapa.

Cambios realizados:
- se redujo y simplifico copy principal en [`src/lib/i18n/dictionaries.ts`](C:/Proyectos/Psicologia/src/lib/i18n/dictionaries.ts)
- se ajusto el espaciado del hero en [`src/components/marketing/home-shell.tsx`](C:/Proyectos/Psicologia/src/components/marketing/home-shell.tsx)
- se cambio el CTA final de home y el CTA principal de [`src/app/[locale]/contacto/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/contacto/page.tsx) a la variante principal en color acento
- se alinearon los CTAs primarios de [`src/app/[locale]/sobre-mi/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/sobre-mi/page.tsx) y [`src/app/[locale]/servicios/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/servicios/page.tsx)
- se oculto el caret visual global fuera de campos editables en [`src/app/globals.css`](C:/Proyectos/Psicologia/src/app/globals.css)

Motivo:
- mejorar legibilidad de placeholders
- evitar botones negros inconsistentes
- eliminar el cursor visual errante observado en la portada

### 2026-06-14 - Limpieza de estructura en home, servicios y contacto

Se redujo repeticion visual y se eliminaron CTAs que no aportaban valor claro en
la navegacion actual.

Cambios realizados:
- en [`src/components/marketing/home-shell.tsx`](C:/Proyectos/Psicologia/src/components/marketing/home-shell.tsx) se quitaron bloques repetitivos de metricas y diferenciales, se elimino el segundo boton final de contacto y se simplifico la tarjeta visual del hero
- en [`src/app/[locale]/servicios/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/servicios/page.tsx) se eliminaron los botones finales y se dejo un cierre informativo centrado
- en [`src/app/[locale]/contacto/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/contacto/page.tsx) se eliminaron los botones de volver al inicio y ver servicios, dejando solo contenido informativo
- en [`src/components/layout/site-header.tsx`](C:/Proyectos/Psicologia/src/components/layout/site-header.tsx) se agrego `Inicio` solo cuando la pagina actual no es la home

Motivo:
- evitar cajas que dicen variaciones de lo mismo
- dejar una sola llamada clara hacia contacto en la home
- apoyarse en el header y en la marca para volver a inicio desde paginas internas

### 2026-06-14 - Integracion temporal de foto real en el hero

Se movio una foto real de la terapeuta al directorio publico del proyecto para
usarla como imagen temporal del hero mientras aun no existe CMS conectado.

Cambios realizados:
- se movio la imagen a [`public/images/therapist-hero.jpg`](C:/Proyectos/Psicologia/public/images/therapist-hero.jpg)
- se actualizo [`src/components/marketing/home-shell.tsx`](C:/Proyectos/Psicologia/src/components/marketing/home-shell.tsx) para renderizarla con `next/image`

Decision puntual:
- esta imagen se usa solo como activo temporal local

Motivo:
- dejar el hero con una foto real desde ya
- mas adelante esta imagen se reemplazara por contenido administrado desde CMS

### 2026-06-14 - Bootstrap del panel editorial con Sanity Studio

Se avanzo el panel de admin como `Sanity Studio`, que es la forma coherente de
resolver CMS y administracion editorial en este proyecto.

Cambios realizados:
- se instalaron dependencias de Sanity en [`package.json`](C:/Proyectos/Psicologia/package.json)
- se agrego [`sanity.config.ts`](C:/Proyectos/Psicologia/sanity.config.ts)
- se agrego helper de entorno en [`sanity/env.ts`](C:/Proyectos/Psicologia/sanity/env.ts)
- se agregaron schemas base en [`sanity/schemaTypes`](C:/Proyectos/Psicologia/sanity/schemaTypes/index.ts)
- se monto la ruta del Studio en [`src/app/studio/[[...tool]]/page.tsx`](C:/Proyectos/Psicologia/src/app/studio/[[...tool]]/page.tsx)
- se agrego cliente base y helper de imagen en:
  - [`src/lib/cms/client.ts`](C:/Proyectos/Psicologia/src/lib/cms/client.ts)
  - [`src/lib/cms/image.ts`](C:/Proyectos/Psicologia/src/lib/cms/image.ts)
- se actualizo [`next.config.ts`](C:/Proyectos/Psicologia/next.config.ts) para transpilar paquetes del Studio

Resultado:
- el proyecto compila con Studio incluido
- existe base para editar `siteSettings`, `homePage`, `aboutPage`, `contactPage`, `service`, `testimonial`, `faq`, `author` y `post`
- la ruta `/studio` ya existe en la app

Pendiente:
- completar `SANITY_PROJECT_ID` real y confirmar `SANITY_DATASET`

### 2026-06-14 - Conexion de paginas principales al contenido de Sanity

Se conectaron `home`, `sobre-mi`, `servicios`, `contacto` y `siteSettings` a una
capa de lectura desde Sanity con fallback local.

Cambios realizados:
- se agregaron queries CMS en [`src/lib/cms/queries.ts`](C:/Proyectos/Psicologia/src/lib/cms/queries.ts)
- se agrego helper de portable text en [`src/lib/cms/portable-text.ts`](C:/Proyectos/Psicologia/src/lib/cms/portable-text.ts)
- se agrego capa de carga y mapeo en [`src/lib/cms/content.ts`](C:/Proyectos/Psicologia/src/lib/cms/content.ts)
- se actualizo el cliente CMS en [`src/lib/cms/client.ts`](C:/Proyectos/Psicologia/src/lib/cms/client.ts)
- se conecto la home en [`src/app/[locale]/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/page.tsx) y [`src/components/marketing/home-shell.tsx`](C:/Proyectos/Psicologia/src/components/marketing/home-shell.tsx)
- se conectaron paginas internas en:
  - [`src/app/[locale]/sobre-mi/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/sobre-mi/page.tsx)
  - [`src/app/[locale]/servicios/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/servicios/page.tsx)
  - [`src/app/[locale]/contacto/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/contacto/page.tsx)
- se conecto `siteSettings` al layout en [`src/app/[locale]/layout.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/layout.tsx)

Resultado:
- el sitio ya puede leer contenido real desde Sanity
- si faltan documentos o campos, sigue mostrando fallback local
- build y typecheck pasan con la integracion activa

### 2026-06-15 - Primera capa de UX inspirada en referencia competitiva

Se aterrizo un primer paquete de cambios de conversion y navegacion tomando como
referencia elementos detectados en un sitio competitivo del mismo rubro.

Cambios realizados:
- se agrego configuracion base de contacto y redes en [`src/lib/site.ts`](C:/Proyectos/Psicologia/src/lib/site.ts)
- se reforzo el header con CTA directo a WhatsApp en [`src/components/layout/site-header.tsx`](C:/Proyectos/Psicologia/src/components/layout/site-header.tsx)
- se creo el componente flotante [`src/components/layout/floating-contact.tsx`](C:/Proyectos/Psicologia/src/components/layout/floating-contact.tsx)
- se monto el componente flotante a nivel de layout en [`src/app/[locale]/layout.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/layout.tsx)
- se ajusto la home para priorizar WhatsApp y especialidades por tipo de paciente en:
  - [`src/components/marketing/home-shell.tsx`](C:/Proyectos/Psicologia/src/components/marketing/home-shell.tsx)
  - [`src/lib/i18n/dictionaries.ts`](C:/Proyectos/Psicologia/src/lib/i18n/dictionaries.ts)
- se rehizo la pagina de contacto para incluir mapa, direccion, horario y canales visibles en [`src/app/[locale]/contacto/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/contacto/page.tsx)
- se actualizo contexto operativo en [`context.md`](C:/Proyectos/Psicologia/context.md)

Decisiones tomadas:
- se implementa desde ya `WhatsApp` como CTA prioritario en header, home y widget flotante
- se agrega boton volver arriba como parte de la experiencia larga de lectura
- se agregan iconos flotantes de redes como referencia visual y acceso rapido
- no se agrega aun un formulario funcional para no simular una capacidad que todavia no existe en backend

Pendientes detectados:
- todos los datos de contacto y redes siguen siendo placeholders tecnicos hasta recibir datos reales
- falta construir `POST /api/contact`
- falta convertir el futuro bloque editorial de columnas en un muro real conectado a `Sanity`

### 2026-06-15 - Conexion de testimonios de Sanity al frontend

Se detecto que el schema `testimonial` ya estaba disponible en `Sanity Studio`,
pero no existia ninguna query ni bloque visual en el frontend para mostrarlo.

Cambios realizados:
- se agrego la query `testimonialsQuery` en [`src/lib/cms/queries.ts`](C:/Proyectos/Psicologia/src/lib/cms/queries.ts)
- se amplio la carga de `aboutPage` para incluir testimonios en [`src/lib/cms/content.ts`](C:/Proyectos/Psicologia/src/lib/cms/content.ts)
- se agrego una seccion visible de testimonios en [`src/app/[locale]/sobre-mi/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/sobre-mi/page.tsx)
- se actualizo contexto operativo en [`context.md`](C:/Proyectos/Psicologia/context.md)

Decision tomada:
- los testimonios viven en `Sobre mi`, que es donde mejor refuerzan confianza y credenciales en la estructura actual

Resultado:
- lo que se cargue en `testimonial` dentro de `Sanity` ya puede verse en la pagina `sobre-mi`

### 2026-06-15 - Testimonio semilla real desde bootstrap de Studio

Se agrego un documento de muestra para `testimonial` dentro del bootstrap de
`Sanity Studio`, de modo que exista un testimonio real inicial por idioma y no
dependamos de fallback visual.

Cambios realizados:
- se agrego `baseTestimonials` en [`sanity/bootstrap-content-tool.tsx`](C:/Proyectos/Psicologia/sanity/bootstrap-content-tool.tsx)
- el flujo de sincronizacion ahora crea testimonios semilla si no existen

Resultado:
- al usar la herramienta `Contenido inicial` del Studio se crea un testimonio real en `es` y otro en `en`

### 2026-06-15 - Paleta editable desde Sanity y textos en Nunito

Se aplico la nueva paleta base solicitada y se dejo editable desde `Sanity`,
evitando depender de cambios manuales en `CSS` para ajustes futuros.

Cambios realizados:
- se agregaron campos de color a [`sanity/schemaTypes/documents/site-settings.ts`](C:/Proyectos/Psicologia/sanity/schemaTypes/documents/site-settings.ts)
- se sembraron defaults de paleta en [`sanity/bootstrap-content-tool.tsx`](C:/Proyectos/Psicologia/sanity/bootstrap-content-tool.tsx)
- se ampliaron queries y merges CMS en:
  - [`src/lib/cms/queries.ts`](C:/Proyectos/Psicologia/src/lib/cms/queries.ts)
  - [`src/lib/cms/content.ts`](C:/Proyectos/Psicologia/src/lib/cms/content.ts)
- se agrego un merge de tema base en [`src/lib/site.ts`](C:/Proyectos/Psicologia/src/lib/site.ts)
- se aplicaron variables CSS dinamicas a nivel de layout en [`src/app/[locale]/layout.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/layout.tsx)
- se actualizo el shell global y la tipografia base en:
  - [`src/app/layout.tsx`](C:/Proyectos/Psicologia/src/app/layout.tsx)
  - [`src/app/globals.css`](C:/Proyectos/Psicologia/src/app/globals.css)

Decisiones tomadas:
- la paleta editable vive en `siteSettings`
- `Nunito` pasa a ser la fuente base para textos del sitio

Resultado:
- la app ya puede cambiar colores sin tocar codigo
- la base visual usa como defaults `#E6C9C9`, `#B9C8B1`, `#FAF7F2` y `#8B8580`

### 2026-06-15 - Auditoria completa de textos y ampliacion de Sanity

Se revisaron las paginas y componentes principales para identificar texto visible
que aun dependia de fallback local o hardcodeo fuera del CMS.

Cambios realizados:
- se ampliaron schemas de `siteSettings`, `homePage`, `aboutPage` y `contactPage`
- se creo [`sanity/schemaTypes/documents/services-page.ts`](C:/Proyectos/Psicologia/sanity/schemaTypes/documents/services-page.ts)
- se agrego `servicesPage` al Studio y a la estructura de contenido
- se ampliaron queries y mapeos en:
  - [`src/lib/cms/queries.ts`](C:/Proyectos/Psicologia/src/lib/cms/queries.ts)
  - [`src/lib/cms/content.ts`](C:/Proyectos/Psicologia/src/lib/cms/content.ts)
- se conectaron textos globales del header, footer y flotantes a `siteSettings`
- se conectaron textos faltantes de `home`, `sobre-mi`, `servicios` y `contacto` a `Sanity`
- se amplio el bootstrap para sembrar los nuevos campos y la nueva pagina de servicios

Decision tomada:
- desde ahora, cada texto nuevo que se agregue al frontend debe tener su campo correspondiente en `Sanity`

Resultado:
- el sitio reduce fuertemente texto fuera del CMS
- `Contenido inicial` puede sembrar tambien labels globales y contenido base adicional

### 2026-06-15 - Columnas con Sanity end-to-end

Se implemento el bloque editorial pendiente para que `post` deje de ser solo un
schema aislado y pase a formar parte real del sitio.

Cambios realizados:
- se integraron `author`, `post` y `postsPage` al Studio en:
  - [`sanity/schemaTypes/index.ts`](C:/Proyectos/Psicologia/sanity/schemaTypes/index.ts)
  - [`sanity/structure.ts`](C:/Proyectos/Psicologia/sanity/structure.ts)
  - [`sanity/schemaTypes/documents/posts-page.ts`](C:/Proyectos/Psicologia/sanity/schemaTypes/documents/posts-page.ts)
- se ampliaron queries y capa CMS para posts, slugs, preview y pagina editorial en:
  - [`src/lib/cms/queries.ts`](C:/Proyectos/Psicologia/src/lib/cms/queries.ts)
  - [`src/lib/cms/content.ts`](C:/Proyectos/Psicologia/src/lib/cms/content.ts)
- se agrego preview de columnas en la home en [`src/components/marketing/home-shell.tsx`](C:/Proyectos/Psicologia/src/components/marketing/home-shell.tsx)
- se crearon rutas editoriales:
  - [`src/app/[locale]/columnas/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/columnas/page.tsx)
  - [`src/app/[locale]/columnas/[slug]/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/columnas/[slug]/page.tsx)
- se ampliaron seeds del bootstrap con `author`, `post`, `postsPage` y labels adicionales en [`sanity/bootstrap-content-tool.tsx`](C:/Proyectos/Psicologia/sanity/bootstrap-content-tool.tsx)

Decisiones tomadas:
- la ruta editorial publica queda como `/[locale]/columnas`
- el preview de home muestra hasta 3 posts
- cada texto nuevo del bloque editorial tambien queda modelado en `Sanity`

Resultado:
- `columnas` ya funciona como listado
- cada `post` ya tiene detalle por `slug`
- la home ya puede mostrar preview editorial real desde `Sanity`

### 2026-06-15 - Formulario y endpoint de contacto

Se implemento el flujo real de contacto a nivel de app, manteniendo la regla de
que los textos visibles del frontend tambien vivan en `Sanity`.

Cambios realizados:
- se ampliaron campos del schema `contactPage` en [`sanity/schemaTypes/documents/contact-page.ts`](C:/Proyectos/Psicologia/sanity/schemaTypes/documents/contact-page.ts)
- se ampliaron query y mapeo de contacto en:
  - [`src/lib/cms/queries.ts`](C:/Proyectos/Psicologia/src/lib/cms/queries.ts)
  - [`src/lib/cms/content.ts`](C:/Proyectos/Psicologia/src/lib/cms/content.ts)
- se creo el formulario cliente en [`src/components/contact/contact-form.tsx`](C:/Proyectos/Psicologia/src/components/contact/contact-form.tsx)
- se creo el endpoint [`src/app/api/contact/route.ts`](C:/Proyectos/Psicologia/src/app/api/contact/route.ts)
- se integraron los nuevos labels y el formulario en [`src/app/[locale]/contacto/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/contacto/page.tsx)
- se ampliaron seeds del bootstrap en [`sanity/bootstrap-content-tool.tsx`](C:/Proyectos/Psicologia/sanity/bootstrap-content-tool.tsx)

Decision tomada:
- se evita dependencia extra y se usa `fetch` directo a la API de `Resend`
- si faltan `RESEND_API_KEY` o `CONTACT_TO_EMAIL`, el endpoint responde error de configuracion en vez de simular exito

Resultado:
- la pagina `contacto` ya tiene formulario funcional a nivel de app
- el envio real queda listo al completar variables de entorno

### 2026-06-15 - Limpieza del modelo CMS y copy base realista

Se hizo una pasada de orden sobre `Sanity` y los fallbacks locales para reducir
campos redundantes, mejorar la reutilizacion de `siteSettings` y dejar de usar
copy demasiado tecnico o de maqueta.

Cambios realizados:
- se simplifico el schema de [`sanity/schemaTypes/documents/contact-page.ts`](C:/Proyectos/Psicologia/sanity/schemaTypes/documents/contact-page.ts) eliminando campos no usados en frontend
- se reemplazaron las tres opciones fijas de modalidad por una lista editable `modalityOptions`
- se elimino `shortLabel` de redes en [`sanity/schemaTypes/documents/site-settings.ts`](C:/Proyectos/Psicologia/sanity/schemaTypes/documents/site-settings.ts) y en la capa de sitio
- se elimino `authorSectionLabel` de [`sanity/schemaTypes/documents/posts-page.ts`](C:/Proyectos/Psicologia/sanity/schemaTypes/documents/posts-page.ts) por no tener uso real
- se actualizaron queries y mapeos en:
  - [`src/lib/cms/queries.ts`](C:/Proyectos/Psicologia/src/lib/cms/queries.ts)
  - [`src/lib/cms/content.ts`](C:/Proyectos/Psicologia/src/lib/cms/content.ts)
- se adapto el formulario en [`src/components/contact/contact-form.tsx`](C:/Proyectos/Psicologia/src/components/contact/contact-form.tsx) para leer opciones de modalidad desde `Sanity`
- se reescribieron fallbacks y seeds en:
  - [`src/lib/site.ts`](C:/Proyectos/Psicologia/src/lib/site.ts)
  - [`src/lib/i18n/dictionaries.ts`](C:/Proyectos/Psicologia/src/lib/i18n/dictionaries.ts)
  - [`sanity/bootstrap-content-tool.tsx`](C:/Proyectos/Psicologia/sanity/bootstrap-content-tool.tsx)
  - [`src/app/[locale]/sobre-mi/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/sobre-mi/page.tsx)
  - [`src/app/[locale]/servicios/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/servicios/page.tsx)
  - [`src/app/[locale]/contacto/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/contacto/page.tsx)
  - [`src/app/[locale]/columnas/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/columnas/page.tsx)

Decisiones tomadas:
- los datos reutilizables de consulta siguen viviendo en `siteSettings` y no deben duplicarse por pagina
- los formularios no deben modelar opciones simples con un campo por opcion si una lista editable resuelve mejor el caso
- el proyecto deja de sembrar textos de maqueta genericos y pasa a una base editorial coherente con Angela Carvajal

Resultado:
- `typecheck` y `build` vuelven a pasar
- el Studio queda mas corto y entendible
- el contenido base visible ya no suena a placeholder tecnico

### 2026-06-15 - Segunda pasada visual de navegacion, home y columnas

Se hizo una pasada puntual de refinamiento visual para mejorar ritmo, legibilidad
y presencia editorial sin volver a expandir el modelo del CMS.

Cambios realizados:
- se dejo `Inicio` fijo en el nav del header en [`src/components/layout/site-header.tsx`](C:/Proyectos/Psicologia/src/components/layout/site-header.tsx)
- se ajusto el hero de home para reducir aire excesivo en titulo y subtitulo en [`src/components/marketing/home-shell.tsx`](C:/Proyectos/Psicologia/src/components/marketing/home-shell.tsx)
- se agregaron utilidades visuales editoriales en [`src/app/globals.css`](C:/Proyectos/Psicologia/src/app/globals.css)
- se reforzo la identidad de listado y detalle de columnas en:
  - [`src/app/[locale]/columnas/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/columnas/page.tsx)
  - [`src/app/[locale]/columnas/[slug]/page.tsx`](C:/Proyectos/Psicologia/src/app/[locale]/columnas/[slug]/page.tsx)

Decisiones tomadas:
- `Inicio` no se oculta aunque el usuario este en la home
- `columnas` debe sentirse mas bitacora/editorial que catalogo generico de cards
- el ajuste visual se mantiene mayoritariamente en frontend y estilos, sin agregar nuevos campos al CMS

Resultado:
- `typecheck` y `build` pasan
- la home tiene un arranque mas compacto
- `columnas` gana una presencia visual mas intencional y diferenciada

### 2026-06-16 - Ajustes visuales de espaciado, detalle editorial y portabilidad

Se hicieron tres mejoras operativas ligadas entre si: refinamiento visual de
cards y contacto, ajuste de lectura en detalle de columnas y documentacion para
continuar el proyecto desde otro PC sin perder contexto.

Cambios realizados:
- se ajustaron espaciados en cards de home, FAQ, sobre mi, servicios y contacto
- se alineo el fondo de `input`, `select` y `textarea` con la superficie del
  panel de contacto
- se reorganizo el detalle de columnas para dejar en el bloque principal:
  titulo, resumen, autora, imagen y luego cuerpo
- se elimino la caja aislada del primer parrafo del body en columnas
- la caja `Sobre la autora` ahora tambien muestra nombre
- se agrego `galleryImages` al schema `post` en `Sanity`
- se ampliaron query y tipos CMS para soportar varias imagenes por columna
- se creo [`src/components/posts/post-image-carousel.tsx`](C:/Proyectos/Psicologia/src/components/posts/post-image-carousel.tsx)
- el detalle de columnas ahora muestra la imagen completa sin recorte y soporta
  carrusel horizontal
- se creo [`SETUP-PORTABLE.md`](C:/Proyectos/Psicologia/SETUP-PORTABLE.md) con
  el flujo para clonar, instalar, recrear `.env.local` y retomar contexto en
  otro PC

Decisiones tomadas:
- la portabilidad del proyecto debe descansar en GitHub + `.env.local` +
  documentacion dentro del repo, no en memoria de conversacion
- el contexto operativo se sigue preservando en `context.md` e `history.md`
- las columnas deben soportar piezas visuales mas ricas sin recortar imagenes

Resultado:
- `build` pasa con el soporte de galeria
- el proyecto ya tiene una guia interna para retomarlo en cualquier otro equipo

---

## Estado actual

Actualmente el proyecto tiene:
- base de `Next.js` configurada a nivel de archivos
- estructura `App Router`
- estilos globales iniciales
- direccion visual inicial premium/editorial
- soporte base de locales `es/en`
- home inicial ya orientada a conversion
- paginas internas principales ya aterrizadas a nivel visual y estructural
- CTA flotante de WhatsApp, redes flotantes y boton volver arriba
- pagina de contacto con mapa y datos visibles
- convencion documental con `architecture`, `history` y `context`
- directriz explicita de preparacion para anuncios futuros

Actualmente el proyecto no tiene aun:
- formulario `POST /api/contact`
- contenido real de negocio
- datos reales de contacto, redes y ubicacion

---

## Siguientes pasos sugeridos

Orden recomendado actual:
1. Cargar datos reales de contacto, redes, ubicacion y copy principal.
2. Implementar `POST /api/contact` con validacion y estructura para `Resend`.
3. Construir muro editorial de columnas y blog base conectado a `Sanity`.
4. Agregar medicion inicial para clics de `WhatsApp`, CTA y formulario.
5. Reforzar SEO base y metadatos por pagina.

---

## Convenciones para futuras entradas

Cada nueva entrada deberia incluir:
- fecha
- que se hizo
- por que se hizo
- decisiones tomadas
- riesgos o pendientes detectados

Formato sugerido:

`YYYY-MM-DD - Titulo corto`

- Contexto
- Cambios realizados
- Decisiones
- Pendientes
