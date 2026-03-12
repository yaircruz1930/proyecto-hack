<<<<<<< HEAD
# 🛡️ EDUNEX
=======
# 🛡️ SafeMap GDL
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469

Mapa interactivo de seguridad para la Zona Metropolitana de Guadalajara.

## 🏗️ Stack Tecnológico

| Capa          | Tecnología                     |
|---------------|--------------------------------|
| Framework     | Next.js 14 (App Router)        |
| Lenguaje      | TypeScript                     |
| Estilos       | Tailwind CSS                   |
| Mapas         | Leaflet.js + React-Leaflet     |
| Auth/DB       | Supabase (preparado)           |
| Iconos        | Lucide React                   |
| Datos geo     | GeoJSON (mock data)            |

## 📁 Estructura del Proyecto

```
<<<<<<< HEAD
edunex/
=======
safemap-gdl/
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
├── src/
│   ├── app/                    # Pages (App Router)
│   │   ├── layout.tsx          # Layout raíz + providers
│   │   ├── page.tsx            # Página principal (mapa)
│   │   ├── globals.css         # Tailwind + overrides Leaflet
│   │   ├── login/page.tsx      # Página de login
│   │   └── profile/page.tsx    # Página de perfil
│   │
│   ├── components/             # Componentes React
│   │   ├── map/                # Todo lo del mapa
│   │   │   ├── MapRender.tsx   # Componente principal
│   │   │   ├── TileUpdater.tsx # Cambia tiles dark/light
│   │   │   ├── ZoneLayers.tsx  # Polígonos GeoJSON
│   │   │   ├── POIMarkers.tsx  # Marcadores de POI
<<<<<<< HEAD
│   │   │   ├── UNEMarkers.tsx  # Marcadores de planteles UNE
│   │   │   ├── MapControls.tsx # Botones (centrar, tema)
│   │   │   ├── MapInvalidator.tsx # Fix de renderizado
│   │   │   ├── SearchBar.tsx   # Barra de búsqueda
│   │   │   ├── ShareSafeLocationButton.tsx # Compartir ubicación
=======
│   │   │   ├── MapControls.tsx # Botones (centrar, tema)
│   │   │   ├── MapInvalidator.tsx # Fix de renderizado
│   │   │   ├── SearchBar.tsx   # Barra de búsqueda
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
│   │   │   └── InfoBadge.tsx   # Badge inferior
│   │   ├── sidebar/
│   │   │   └── Sidebar.tsx     # Sidebar completo
│   │   ├── auth/
│   │   │   └── AuthCard.tsx    # Login/logout card
│   │   ├── filters/
│   │   │   ├── ZoneLegend.tsx  # Leyenda zonas
<<<<<<< HEAD
│   │   │   ├── POIFilters.tsx  # Checkboxes filtros
│   │   │   └── RoutePlanner.tsx# Navegación segura
│   │   ├── stats/
│   │   │   ├── StatsGrid.tsx   # Grid de estadísticas
│   │   │   └── JudgesKPIBar.tsx# KPI superior del mapa
=======
│   │   │   └── POIFilters.tsx  # Checkboxes filtros
│   │   ├── stats/
│   │   │   └── StatsGrid.tsx   # Grid de estadísticas
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
│   │   └── ui/
│   │       ├── LiveDot.tsx     # Indicador animado
│   │       └── SectionTitle.tsx# Título de sección
│   │
│   ├── contexts/               # Estado global (React Context)
│   │   ├── AuthContext.tsx      # Usuario / sesión
│   │   └── MapContext.tsx       # Filtros / zonas / búsqueda
│   │
│   ├── hooks/                  # Custom hooks
│   │   ├── useFilteredPOIs.ts  # POI filtrados (reactivo)
│   │   └── useDashboardStats.ts# Stats del dashboard
│   │
│   ├── lib/                    # Utilidades / servicios
│   │   ├── filtering.ts        # ⭐ LÓGICA DE FILTRADO
│   │   └── supabase/
│   │       ├── client.ts       # Cliente browser
│   │       └── server.ts       # Cliente server
│   │
│   ├── data/                   # Datos mock
│   │   ├── zones.geojson.ts    # Polígonos de zonas
<<<<<<< HEAD
│   │   ├── poi.ts              # Puntos de interés
│   │   └── une.ts              # Planteles UNE
=======
│   │   └── poi.ts              # Puntos de interés
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
│   │
│   ├── types/                  # TypeScript types
│   │   └── index.ts            # Todos los tipos
│   │
│   └── constants/              # Valores inmutables
│       ├── map.ts              # Centro, zoom, estilos
│       └── filters.ts          # Config de filtros
│
├── public/                     # Assets estáticos
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
├── package.json
├── .env.local                  # ⚠️ Configurar con tus keys
└── .gitignore
```

## 🚀 Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar Supabase (opcional — funciona sin él con mock auth)
#    Edita .env.local con tus keys de Supabase

# 3. Arrancar en desarrollo
npm run dev

# 4. Abrir en el navegador
#    http://localhost:3000
```

## ⭐ Dónde programar TU lógica

El archivo clave es **`src/lib/filtering.ts`**. Ahí está la función
`filterPOIs()` que decide qué marcadores se muestran según:

1. Los checkboxes activos
2. El perfil del usuario (edad, género)
3. El texto de búsqueda

Busca el bloque marcado con `AGREGA TU LÓGICA PERSONALIZADA AQUÍ`.

## 🔌 Conectar Supabase Auth

1. Crea un proyecto en [supabase.com](https://supabase.com)
2. Ve a **Settings → API** y copia URL + anon key
3. Pégalos en `.env.local`
4. En el Dashboard, activa **Authentication → Google** (o Email)
5. Descomenta las funciones de `signInWith*` en `src/app/login/page.tsx`

## 📍 POI incluidos

- 🏥 Hospitales (Civil, General de Occidente, Ángeles, Cruz Roja)
- 🚔 Comisarías (Zapopan, GDL Centro)
- ⚖️ Centro de Justicia para Mujeres
- 🟣 Puntos Púrpura (Tren Ligero, Ávila Camacho)
- 🎓 Módulos Universitarios (CUCEI, CUAAD)
- 🆘 Tótems C5 (Chapultepec, Vallarta)
- 🛤️ Senderos Seguros (Chapultepec, Paseo Alcalde)

<<<<<<< HEAD
## 🏫 Planteles UNE incluidos

- Dataset activo en `src/data/une.ts`
- Total actual: **12 planteles**
- Incluye **UNE Zapopan Centro**

## 🎨 Identidad visual

- Nombre visible del producto: **EDUNEX**
- Paleta base aplicada: **#0F172A** + escalas semánticas (`surface1`, `surface2`, `surface3`)
- Tipografía display selectiva para títulos: **EngraversGothicBT**

=======
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
## 📘 Documentación técnica formal

Para documentación técnica integral y detallada de arquitectura, tecnologías, flujo de ejecución y descripción archivo por archivo, consulta:

- DOCUMENTACION_TECNICA.md
