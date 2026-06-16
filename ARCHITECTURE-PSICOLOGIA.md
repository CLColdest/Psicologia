# Arquitectura: Sitio Web de Consulta Psicologica
Ultima actualizacion: 2026-06-14

---

## Resumen del sistema

Este proyecto es una web profesional para una consulta psicologica con foco inicial
en presencia digital, confianza y captacion de consultas. La v1 es principalmente
informativa: presenta a la profesional, sus servicios, modalidades de atencion,
testimonios, preguntas frecuentes, ubicacion, articulos de blog y canales de contacto.

El sitio debe ser visualmente moderno, premium y minimalista, con animaciones de alta
calidad, pero manteniendo tiempos de carga razonables y una operacion low cost.

La clienta debe poder autogestionar el contenido sin depender del desarrollador:
- textos de secciones
- colores de marca
- imagenes
- testimonios
- servicios
- FAQ
- ubicacion y datos de contacto
- articulos del blog

La arquitectura se diseña para una sola profesional en v1, pero con una base que
permita evolucionar a un centro con multiples terapeutas en una fase futura, sin
rehacer completamente frontend, CMS ni modelo de contenido.

La reserva de horas no se implementa de forma nativa en la v1. Se prioriza:
- contacto directo por WhatsApp
- formulario de contacto
- integracion futura con Setmore como servicio externo de agenda

Adicionalmente, el sitio debe quedar preparado desde la v1 para poder anunciarse
sin fricciones en el futuro mediante canales pagos como Google Ads, Meta Ads u
otras campañas de adquisicion. Esto implica priorizar conversion, medicion base,
rendimiento y estructura flexible para futuras landing pages de campaña.

---

## Objetivos del proyecto

### Objetivos de negocio

- Dar a conocer a la profesional y su enfoque terapeutico
- Transmitir confianza, calidez y posicionamiento premium
- Facilitar el contacto inmediato por WhatsApp
- Capturar consultas por formulario
- Permitir publicar contenido de valor mediante blog
- Dejar la base lista para incorporar reservas online mas adelante
- Dejar el sitio preparado para futuras campañas de pago y adquisicion

### Objetivos tecnicos

- Mantener costos bajos en la v1
- Permitir autogestion completa del contenido
- Tener buen SEO tecnico y de contenido
- Ser bilingue desde la arquitectura base (espanol e ingles)
- Escalar sin bloqueo si el proyecto crece en trafico o complejidad
- Preparar medicion y estructura para futuras campañas y landing pages

---

## Stack recomendado

| Capa | Tecnologia | Motivo |
|------|-----------|--------|
| Framework web | Next.js App Router | Base moderna full-stack, SEO, RSC, buen fit con Vercel |
| Lenguaje | TypeScript | Seguridad de tipos y mantenibilidad |
| UI | React | Ecosistema maduro y compatible con CMS, animaciones y librerias visuales |
| Estilos | Tailwind CSS | Rapidez de desarrollo y sistema visual flexible |
| Animaciones | Motion | Animaciones premium con buen rendimiento |
| CMS | Sanity | Autogestion potente, modelos flexibles, blog y settings editables |
| Imagenes CMS | Sanity Assets o Cloudinary | Empezar simple; migrar a Cloudinary si la carga visual crece |
| Formularios / email | Route Handler de Next.js + Resend | Bajo costo, simple, sin montar SMTP propio |
| Hosting | Vercel | Despliegue simple, CDN global, plan inicial low cost |
| Analytics | Vercel Analytics o Plausible | Medicion sencilla y liviana |
| Reserva futura | Setmore | Agenda externa embebible o enlazable |
| Testing | Vitest + Playwright | Cobertura de logica y flujo critico |

---

## Justificacion del stack

### 1. Next.js como base principal

Se recomienda Next.js porque permite:
- SSR y SSG para buen SEO
- App Router moderno
- Route Handlers para formulario y webhooks futuros
- integracion natural con Vercel
- posibilidad de crecer a funcionalidades mas complejas sin migrar de stack

Es una mejor base que una landing estatica pura porque el proyecto ya nace con:
- blog
- CMS
- settings editables
- posible agenda externa
- soporte bilingue

### 2. Sanity como CMS editable por la clienta

Sanity encaja especialmente bien aqui porque:
- permite modelar contenido editable sin panel admin custom complejo
- soporta blog de forma natural
- permite schemas para settings globales
- soporta vistas previas y flujos editoriales
- es suficientemente flexible para pasar de una terapeuta a varias

En v1, la clienta deberia poder editar desde Sanity:
- hero
- sobre mi
- servicios
- modalidades de atencion
- testimonios
- FAQ
- ubicacion
- botones y links de contacto
- blog
- colores base del sitio
- imagenes principales

### 3. Resend para formulario de contacto

No es necesario montar un servidor SMTP propio.

Para la v1, la opcion mas simple es:
- formulario HTML/React
- POST a `app/api/contact/route.ts`
- validacion con Zod
- envio de email con Resend

Esto reduce complejidad y evita depender de infraestructura de correo tradicional.
Si el formulario crece mas adelante, se puede agregar:
- anti-spam
- almacenamiento en base de datos
- CRM
- automatizaciones

### 4. Setmore para agenda futura

No conviene construir una agenda propia en la primera fase.

La mejor estrategia es:
- v1: WhatsApp + formulario
- v2: boton o embed de Setmore
- v3 si el negocio lo exige: evaluar agenda propia o integracion mas profunda

Asi se evita sobrediseñar una parte que hoy aun no es la prioridad del negocio.

---

## Decisiones de producto

### Alcance v1

Incluye:
- pagina de inicio
- pagina sobre la profesional
- pagina de servicios
- modalidades de atencion: presencial y online
- seccion de testimonios
- FAQ
- contacto
- ubicacion/mapa
- integracion de WhatsApp
- blog
- CMS editable por la clienta
- soporte base para espanol e ingles
- base de conversion lista para anuncios futuros

No incluye en v1:
- reserva de horas nativa
- login para pacientes
- pagos online
- area privada
- dashboard analitico custom

Pero si debe incluir en v1:
- CTAs claros y consistentes
- estructura de pagina orientada a conversion
- base de analytics/eventos para contacto
- rendimiento mobile-first apto para trafico pago

### Escalabilidad futura considerada desde ya

La arquitectura debe dejar preparado:
- multiples profesionales
- multiples ubicaciones
- multiples tipos de servicio
- traducciones por contenido
- reserva de hora externa
- posible formulario con persistencia en DB

---

## Arquitectura de alto nivel

```text
┌──────────────────────────────────────────────────────────────┐
│                     Vercel / Next.js                        │
│                                                              │
│  App Router                                                  │
│  - Paginas publicas                                          │
│  - Blog                                                      │
│  - API contact form                                          │
│  - Draft/preview opcional                                    │
│                                                              │
│  UI moderna con Tailwind + Motion                            │
└──────────────────────────────┬───────────────────────────────┘
                               │
                 ┌─────────────┴─────────────┐
                 │                           │
                 ▼                           ▼
        ┌──────────────────┐       ┌──────────────────┐
        │      Sanity      │       │      Resend      │
        │ CMS / contenido  │       │ Formulario email │
        │ blog / settings  │       │ transactional    │
        └──────────────────┘       └──────────────────┘
                 │
                 ▼
        ┌──────────────────┐
        │ Setmore (futuro) │
        │ agenda externa   │
        └──────────────────┘
```

---

## Modelo de contenido recomendado

### Singleton documents

- `siteSettings`
  - nombre del sitio
  - logo
  - colores de marca
  - botones y links de contacto
  - datos SEO globales
  - redes sociales
  - texto del footer
  - configuracion de idioma

- `homePage`
  - hero
  - mensaje principal
  - secciones destacadas
  - CTA principal
  - imagenes destacadas

- `aboutPage`
  - biografia
  - enfoque terapeutico
  - experiencia
  - certificaciones

- `contactPage`
  - texto introductorio
  - ubicacion
  - mapa o referencia
  - horarios
  - WhatsApp
  - email de contacto

### Collection documents

- `service`
  - titulo
  - slug
  - resumen
  - descripcion
  - modalidad: presencial / online / ambas
  - destacado
  - orden

- `testimonial`
  - nombre o alias
  - texto
  - destacado
  - orden

- `faq`
  - pregunta
  - respuesta
  - categoria
  - orden

- `post`
  - titulo
  - slug
  - excerpt
  - contenido rich text
  - imagen destacada
  - categorias
  - seo
  - idioma
  - fecha de publicacion

- `author`
  - nombre
  - bio
  - foto

### Preparacion para futuro centro

Aunque v1 sea para una sola profesional, conviene dejar previsto un schema futuro:

- `practitioner`
  - nombre
  - slug
  - bio
  - especialidades
  - modalidades
  - foto
  - orden

En v1 este schema puede existir pero no necesariamente exponerse en la UI publica.

---

## Internacionalizacion

Se recomienda preparar el proyecto desde el inicio para `es` y `en`.

### Estrategia sugerida

- rutas por locale: `/es/...` y `/en/...`
- idioma por documento o por campos traducibles en Sanity
- slug por idioma para blog y paginas si hace falta
- metadata por idioma
- sitemap preparado para variantes de idioma

### Decision recomendada

Para mantener simple la v1:
- contenido estructurado con campo `language`
- duplicado editorial controlado para posts y paginas clave

Esto es mas simple de operar que una traduccion campo a campo demasiado compleja
desde el dia uno.

---

## Experiencia visual

### Direccion de diseno

El sitio debe transmitir:
- confianza clinica
- sensibilidad humana
- calidad premium
- limpieza visual

### Principios UI

- composicion editorial
- fondos con textura o degradados sutiles
- fotografia cuidada
- tipografia con personalidad
- animaciones sobrias pero ricas
- bloques con aire y ritmo visual
- mobile-first real

### Animaciones sugeridas

- reveal por scroll
- transiciones suaves entre bloques
- carruseles o sliders de testimonios
- microinteracciones en CTA
- hover states expresivos
- parallax o depth muy sutil, nunca invasivo

### Criterio de calidad

La animacion debe apoyar la experiencia y no volverla pesada. El objetivo no es
llenar de efectos, sino elevar percepcion de marca y claridad narrativa.

---

## Estructura de carpetas sugerida

```text
project-root/
├── sanity/
│   ├── schemaTypes/
│   │   ├── documents/
│   │   ├── objects/
│   │   └── index.ts
│   ├── lib/
│   └── sanity.config.ts
│
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── page.tsx                # Home
│   │   │   ├── sobre-mi/
│   │   │   ├── servicios/
│   │   │   ├── blog/
│   │   │   │   └── [slug]/
│   │   │   ├── contacto/
│   │   │   └── layout.tsx
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   └── studio/
│   │       └── [[...tool]]/
│   │
│   ├── components/
│   │   ├── blocks/
│   │   ├── blog/
│   │   ├── layout/
│   │   ├── marketing/
│   │   └── ui/
│   │
│   ├── lib/
│   │   ├── cms/
│   │   ├── email/
│   │   ├── i18n/
│   │   ├── seo/
│   │   └── utils/
│   │
│   ├── styles/
│   ├── types/
│   └── actions/
│
├── public/
├── tests/
├── e2e/
├── package.json
├── .env.example
└── ARCHITECTURE.md
```

---

## Estrategia de formularios

### Recomendacion v1

Formulario simple con campos:
- nombre
- email
- telefono opcional
- motivo de consulta o mensaje
- preferencia de modalidad
- idioma opcional

### Backend del formulario

- endpoint `POST /api/contact`
- validacion con Zod
- rate limiting basico
- envio mediante Resend
- respuesta simple de exito/error

### Comportamiento operativo

- el correo llega a la profesional
- opcionalmente se envia confirmacion automatica al usuario
- no hace falta base de datos en v1

### Evolucion futura

Si luego se necesita trazabilidad:
- persistir leads en DB
- conectar con CRM
- etiquetar origen del lead
- automatizar seguimiento

---

## Seguridad minima recomendada

- validacion server-side con Zod
- rate limiting para formulario de contacto
- sanitizacion de contenido renderizado si aplica
- CSP razonable
- reCAPTCHA o alternativa solo si aparece spam real
- proteccion de preview/draft mode
- roles claros en Sanity para que la clienta no rompa settings criticos

---

## SEO y descubribilidad

- metadata por pagina
- Open Graph y Twitter cards
- sitemap.xml
- robots.txt
- JSON-LD para ProfessionalService o MedicalBusiness segun corresponda
- blog optimizado para busquedas informacionales
- URLs limpias
- buen enlazado interno entre servicios y blog

## Preparacion para anuncios futuros

El proyecto debe quedar listo para anunciarse sin rehacer la base del sitio.

### Requisitos base

- home utilizable como landing de conversion
- CTAs persistentes y visibles hacia WhatsApp y formulario
- performance fuerte en mobile
- estructura apta para crear landing pages por servicio o campaña
- analytics base desde el inicio
- eventos medibles para clics de contacto y envios de formulario
- contenido y secciones pensados para reducir friccion y objeciones

### Implementacion esperada

- instrumentacion base para analytics
- eventos para `WhatsApp`, formulario y CTAs principales
- capacidad futura de integrar Google Ads, Meta Pixel u otras etiquetas
- bloques reutilizables para construir paginas de campaña sin rehacer la UI
- copy y jerarquia visual orientados a conversion, no solo presencia de marca

---

## ADRs iniciales

### ADR-001: Next.js full-stack como base del sitio
Fecha: 2026-06-14
Estado: Aceptado
Contexto: Se necesita un stack moderno, SEO-friendly, low cost y con capacidad
de crecer sin migracion completa.
Decision: Usar Next.js App Router como base del frontend y backend liviano.
Consecuencias: Excelente base para marketing site, blog, formularios y futuras
integraciones. Se evita separar frontend y backend demasiado pronto.

### ADR-002: CMS externo gestionado en lugar de panel admin custom
Fecha: 2026-06-14
Estado: Aceptado
Contexto: La clienta debe autogestionar contenido sin depender del desarrollador.
Decision: Usar Sanity como CMS principal en vez de construir un panel admin propio.
Consecuencias: Menor tiempo de desarrollo, mejor experiencia editorial, mas
flexibilidad para blog y settings. Se delega parte de la complejidad al CMS.

### ADR-003: Formulario con proveedor transaccional en vez de SMTP manual
Fecha: 2026-06-14
Estado: Aceptado
Contexto: Se requiere formulario de contacto funcional con bajo costo operativo.
Decision: Implementar el formulario mediante Route Handler y proveedor como Resend.
Consecuencias: No hace falta administrar SMTP propio. Menor complejidad y mejor
experiencia de integracion con Next.js.

### ADR-004: Reserva de horas fuera del core de la v1
Fecha: 2026-06-14
Estado: Aceptado
Contexto: El negocio aun esta priorizando presencia, confianza y captacion.
Decision: Postergar agenda propia y preparar integracion futura con Setmore.
Consecuencias: Se reduce el alcance inicial y se acelera la salida a produccion.

### ADR-005: Bilingue desde el inicio
Fecha: 2026-06-14
Estado: Aceptado
Contexto: Se quiere preparar el proyecto para espanol e ingles.
Decision: Estructurar rutas, metadata y contenido con soporte de locale desde v1.
Consecuencias: Algo mas de complejidad inicial, pero evita una migracion delicada
cuando el sitio ya este publicado.

### ADR-006: V1 single-practitioner con modelo extensible
Fecha: 2026-06-14
Estado: Aceptado
Contexto: El sitio parte para una sola profesional, pero podria evolucionar.
Decision: Diseñar content models y componentes con posible expansion a multiples
profesionales y servicios.
Consecuencias: La UI inicial sigue siendo simple, pero el modelo no queda cerrado.

### ADR-007: V1 preparada para anuncios y adquisicion futura
Fecha: 2026-06-14
Estado: Aceptado
Contexto: El sitio debe servir no solo como presencia digital, sino tambien como
base lista para futuras campañas pagas.
Decision: Diseñar la home, la medicion y la estructura de contenido con foco de
conversion y capacidad de crear futuras landing pages sin rehacer el proyecto.
Consecuencias: Se priorizan CTAs, performance mobile, tracking base y una
arquitectura de bloques reutilizable para marketing.

---

## Limitaciones conocidas

### 1. La agenda no vive dentro del producto

En la fase inicial la reserva depende de WhatsApp y, mas adelante, de Setmore.
Eso simplifica el proyecto, pero deja la experiencia de agendamiento fuera del
control total del producto.

### 2. La personalizacion visual tiene limites definidos por el sistema

Aunque la clienta pueda cambiar colores e imagenes, no deberia poder alterar
estructuras profundas del layout sin intervencion tecnica. La autogestion debe
estar contenida para no degradar la experiencia.

### 3. El soporte bilingue aumenta la carga editorial

Tener `es` y `en` desde el inicio implica duplicar o traducir contenido. Es una
decision correcta para la arquitectura, pero requiere disciplina editorial.

### 4. El CMS no reemplaza criterio de marca

La clienta podra editar mucho contenido, pero aun conviene definir limites
editoriales y visuales para mantener coherencia de marca y conversion.

---

## Variables de entorno sugeridas

| Variable | Uso |
|----------|-----|
| `NEXT_PUBLIC_SITE_URL` | URL publica del sitio |
| `SANITY_PROJECT_ID` | Project ID de Sanity |
| `SANITY_DATASET` | Dataset de Sanity |
| `SANITY_API_VERSION` | Version de API de Sanity |
| `SANITY_API_READ_TOKEN` | Token si se requiere lectura privada o preview |
| `SANITY_API_WRITE_TOKEN` | Solo si alguna automatizacion futura lo requiere |
| `SANITY_PREVIEW_SECRET` | Secreto para draft/preview mode |
| `RESEND_API_KEY` | API key de Resend |
| `CONTACT_TO_EMAIL` | Correo destino del formulario |
| `WHATSAPP_NUMBER` | Numero para CTA de WhatsApp |
| `NEXT_PUBLIC_GA_ID` o equivalente | Analytics si se usa |

---

## Fases recomendadas

### Fase 1

- arquitectura base
- integracion Sanity
- home + sobre mi + servicios + contacto
- testimonios + FAQ
- blog
- WhatsApp
- formulario de contacto
- soporte `es/en`

### Fase 2

- preview editorial
- mejoras SEO de contenidos
- embed o link a Setmore
- automatizaciones de email
- mejor analitica

### Fase 3

- multiples profesionales
- multiples ubicaciones
- agenda mas avanzada si el negocio lo exige
- posible CRM o persistencia de leads

---

## Recomendacion final

La mejor base para este proyecto es:

- Next.js + TypeScript
- Tailwind CSS
- Motion
- Sanity CMS
- Vercel
- Resend para formularios
- Setmore en fase posterior

Esta combinacion mantiene el proyecto:
- moderno
- visualmente competitivo
- low cost
- editable por la clienta
- listo para crecer sin rehacerlo todo
