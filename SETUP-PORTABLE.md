# Setup Portable

Ultima actualizacion: 2026-06-16

## Objetivo

Este documento deja el proyecto listo para retomarlo desde otro PC sin depender
de memoria de conversacion ni configuraciones locales invisibles.

## Que necesitas en otro PC

1. `git`
2. `Node.js 20` o superior
3. `npm`
4. acceso al repositorio en GitHub
5. el archivo `.env.local` correcto o sus valores

## Clonar y levantar

```bash
git clone https://github.com/CLColdest/Psicologia.git
cd Psicologia
npm install
```

Luego crea `.env.local` usando `.env.example` como base.

```bash
cp .env.example .env.local
```

En Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Despues completa los valores reales y arranca:

```bash
npm run dev
```

La app queda en:

```txt
http://localhost:3000
```

## Variables de entorno necesarias

Base:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_API_VERSION`

Si usas preview o lecturas privadas:

- `SANITY_API_READ_TOKEN`
- `SANITY_PREVIEW_SECRET`

Si vas a usar el formulario real:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`

Si quieres mantener un fallback operativo:

- `WHATSAPP_NUMBER`

Solo completa `SANITY_API_WRITE_TOKEN` si realmente vas a automatizar escrituras.

## Donde guardar secretos

No subas `.env.local` a GitHub.

Opciones recomendadas:

1. Gestor de passwords
   Guarda cada variable como nota segura.
2. Archivo privado fuera del repo
   Ejemplo: `C:\Users\tu-usuario\secrets\psicologia.env`
3. Vercel / hosting
   Replica las mismas variables en el panel de deploy.

## Como mantener contexto entre PCs

Este proyecto ya tiene tres archivos para eso:

- [ARCHITECTURE-PSICOLOGIA.md](/abs/path/C:/Proyectos/Psicologia/ARCHITECTURE-PSICOLOGIA.md)
- [context.md](/abs/path/C:/Proyectos/Psicologia/context.md)
- [history.md](/abs/path/C:/Proyectos/Psicologia/history.md)

Orden recomendado para retomar trabajo:

1. leer `context.md`
2. leer `history.md`
3. abrir `ARCHITECTURE-PSICOLOGIA.md` solo si hay dudas de direccion base

## Limite importante sobre la conversacion

La conversacion de Codex no se transporta automaticamente entre PCs.

Lo que si se puede transportar bien es:

- el codigo en GitHub
- las variables de entorno
- el contexto escrito en el repo
- las decisiones registradas

Si quieres retomar trabajo en otro PC, el prompt recomendado es:

```txt
Lee context.md, history.md y ARCHITECTURE-PSICOLOGIA.md.
Estamos continuando el proyecto Psicologia desde ese estado.
```

## Checklist rapido al cambiar de PC

1. Clonar repo.
2. Instalar dependencias con `npm install`.
3. Crear `.env.local` desde `.env.example`.
4. Verificar `npm run build`.
5. Ejecutar `npm run dev`.
6. Confirmar acceso a `/studio` si vas a editar contenido.

## Verificaciones utiles

```bash
npm run build
npm run dev
```

Si el build pasa, el proyecto esta funcional localmente.

## Si tambien quieres portar el panel de contenido

Necesitas:

- el `projectId` de Sanity
- el `dataset`
- los tokens si corresponde
- acceso a la cuenta/equipo de Sanity

Sin eso el frontend puede seguir levantando con fallbacks, pero no podras usar el
CMS real de forma completa.
