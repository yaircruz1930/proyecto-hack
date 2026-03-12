# Documentación Técnica Integral - EDUNEX

## 1. Objetivo del sistema

EDUNEX es una aplicación web de cartografía interactiva orientada a visualización de zonas de seguridad, localización de puntos de interés y cálculo de rutas rápidas dentro de la Zona Metropolitana de Guadalajara.

La solución integra:

- Visualización geoespacial sobre Leaflet.
- Filtrado inteligente por tipo de punto de interés y criterios de perfil.
- Geolocalización del usuario en tiempo real.
- Cálculo de distancias, tiempos estimados y ruta óptima.
- Interfaz de operación para escritorio y móvil.

## 2. Tecnologías utilizadas

### 2.1 Frontend y framework

- Next.js 14 (App Router)
- React 18
- TypeScript 5

### 2.2 Cartografía y geolocalización

- Leaflet
- React-Leaflet
- API de geolocalización del navegador
- OSRM público para estimación y trazado de rutas

### 2.3 Estilos e interfaz

- Tailwind CSS
- PostCSS
- Autoprefixer
- Lucide React para iconografía
- Paleta semántica basada en `#0F172A` (tokens `brand.*`)
- Tipografía display selectiva con `EngraversGothicBT` para encabezados

### 2.4 Autenticación y datos (preparado)

- Supabase SDK y helpers para cliente y servidor
- Datos mock locales para funcionamiento inmediato

## 3. Arquitectura de la aplicación

La aplicación está organizada por capas funcionales:

- Capa de presentación: componentes de UI y mapa.
- Capa de estado global: contextos de autenticación y mapa.
- Capa de lógica reactiva: hooks para filtrado y métricas.
- Capa de utilidades: funciones puras de filtrado y ruteo.
- Capa de datos: conjuntos de POI y zonas GeoJSON.
- Capa de configuración: constantes de mapa/filtros y archivos de build.

### 3.1 Contextos globales

- AuthContext: controla sesión local del usuario y estado de autenticación.
- MapContext: concentra filtros, tema de mapa, geolocalización y flujo completo de ruteo.

### 3.2 Flujo operativo principal

1. El layout raíz monta proveedores globales.
2. La página principal renderiza sidebar y mapa.
3. El mapa carga dinámicamente en cliente para compatibilidad con Leaflet.
4. Los marcadores y capas se recalculan según filtros, búsqueda y estado.
5. El ruteo se activa por selección directa de POI o por búsqueda del más cercano por tipo.
6. La ruta óptima se dibuja y se reportan distancia y tiempo estimado.

## 4. Flujo de navegación y ruteo

### 4.1 Caso A: ruta a un punto seleccionado

1. El usuario abre el popup de un marcador.
2. Ejecuta la acción de ruta rápida.
3. Se asegura la ubicación actual del usuario.
4. Se calcula ruta con OSRM y se dibuja en el mapa.
5. Se muestran distancia y tiempo estimado.

### 4.2 Caso B: ruta al destino más cercano por tipo

1. El usuario selecciona tipo de destino en el panel de navegación.
2. Se consultan todos los destinos de ese tipo.
3. Se calculan estimaciones para cada candidato.
4. Se elige el menor tiempo estimado.
5. Se traza la mejor ruta y se muestran candidatos prioritarios.

### 4.3 Estrategia de tolerancia a fallos

Si el servicio de ruteo no responde, se utiliza estimación local basada en distancia geodésica y velocidad promedio configurada.

## 5. Configuración y ejecución

### 5.1 Scripts

- dev: inicia entorno de desarrollo.
- build: compila para producción y valida tipos.
- start: ejecuta build en modo producción.
- lint: ejecuta análisis estático.

### 5.2 Requisitos de entorno

- Node.js compatible con Next.js 14.
- NPM.
- Navegador con soporte de geolocalización.

### 5.3 Variables de entorno

La aplicación puede funcionar sin credenciales de Supabase en modo local/mocked. Si se habilita Supabase, requiere variables públicas y privadas correspondientes.

## 6. Inventario y funcionamiento de cada archivo

## 6.1 Raíz del proyecto

### next-env.d.ts
Definiciones de tipo generadas por Next.js para integración TypeScript. Archivo gestionado por framework.

### next.config.js
Configura opciones globales de Next.js. Actualmente habilita modo estricto de React.

### package.json
Declara scripts de ejecución y dependencias de runtime y desarrollo.

### postcss.config.js
Define la cadena PostCSS para procesar Tailwind CSS y prefijos de compatibilidad.

### README.md
Documento general de proyecto orientado a incorporación inicial y visión de alto nivel.

### tailwind.config.ts
Configura tema visual, tokens de color, tipografía y animaciones utilitarias de Tailwind.

### tsconfig.json
Configura compilación TypeScript, modo estricto, alias de importación y reglas del compilador.

## 6.2 Capa App Router

### src/app/globals.css
Estilos globales y ajustes de integración con Leaflet, además de utilidades visuales base.

### src/app/layout.tsx
Layout raíz de la aplicación. Inyecta metadatos, fuentes y proveedores globales AuthProvider y MapProvider.

### src/app/page.tsx
Composición principal de la home: sidebar, overlay móvil y carga dinámica del mapa con SSR desactivado.

### src/app/login/page.tsx
Pantalla de inicio de sesión. Maneja captura de datos de usuario y preparación de integración con Supabase.

### src/app/profile/page.tsx
Pantalla de perfil del usuario autenticado para edición de datos personales y control de navegación segura.

## 6.3 Componentes de autenticación

### src/components/auth/AuthCard.tsx
Tarjeta de estado de sesión en sidebar. Presenta acceso rápido a login, perfil y cierre de sesión.

## 6.4 Componentes de filtros y navegación

### src/components/filters/POIFilters.tsx
Panel de activación/desactivación por tipo de POI. Controla visibilidad de marcadores mediante estado global.

### src/components/filters/RoutePlanner.tsx
Módulo de planificación de ruta por tipo de destino. Ejecuta búsqueda del más cercano y muestra resumen de resultados.

### src/components/filters/ZoneLegend.tsx
Leyenda operativa de zonas de seguridad. Permite alternar la visualización por nivel de riesgo.

## 6.5 Componentes de mapa

### src/components/map/InfoBadge.tsx
Indicador flotante de estado del sistema y número de puntos visibles en el mapa.

### src/components/map/MapControls.tsx
Botonera de acciones cartográficas: centrar, localizar usuario y cambiar tema de mosaico.

### src/components/map/MapInvalidator.tsx
Componente técnico para forzar recálculo de dimensiones de Leaflet y evitar desalineaciones de render.

### src/components/map/MapRender.tsx
Orquestador del mapa. Crea MapContainer y monta todas las capas operativas.

### src/components/map/POIMarkers.tsx
Renderiza marcadores de puntos de interés filtrados, popup descriptivo y acción directa de cálculo de ruta.

### src/components/map/UNEMarkers.tsx
Renderiza marcadores para planteles UNE con popup de información institucional.

### src/components/map/RouteLayer.tsx
Renderiza la ruta óptima calculada como polilínea y marcador de destino con información de distancia y tiempo.

### src/components/map/SearchBar.tsx
Componente de búsqueda textual para filtrar POI por nombre o metadatos.

### src/components/map/ShareSafeLocationButton.tsx
Permite compartir ubicación actual mediante Web Share API con fallback a portapapeles.

### src/components/map/TileUpdater.tsx
Selecciona y actualiza la capa de mosaicos según el tema visual activo.

### src/components/map/UserLocationMarker.tsx
Representa visualmente la ubicación actual del usuario con marcador dual y popup informativo.

### src/components/map/ZoneLayers.tsx
Renderiza polígonos GeoJSON de zonas de seguridad con estilo por nivel y soporte de interacción.

## 6.6 Componentes de layout y métricas

### src/components/sidebar/Sidebar.tsx
Contenedor lateral principal de controles, autenticación, filtros, navegación y estadísticas.

### src/components/stats/StatsGrid.tsx
Tablero resumido de métricas de operación (zonas, alertas y POI visibles).

### src/components/stats/JudgesKPIBar.tsx
Barra de KPIs superior para presentación operativa (planteles UNE, puntos visibles y zonas analizadas).

## 6.7 Componentes UI reutilizables

### src/components/ui/LiveDot.tsx
Indicador visual de actividad en tiempo real para elementos de estado.

### src/components/ui/SectionTitle.tsx
Encabezado consistente para secciones funcionales en panel lateral.

## 6.8 Constantes

### src/constants/filters.ts
Define catálogo de filtros y estados iniciales de tipos de POI y niveles de zona.

### src/constants/map.ts
Define parámetros centrales del mapa, fuentes de mosaico y estilo por niveles de seguridad.

## 6.9 Contextos

### src/contexts/AuthContext.tsx
Gestión de identidad local del usuario, persistencia en estado y métodos de autenticación de interfaz.

### src/contexts/MapContext.tsx
Núcleo del estado del mapa y de la lógica de ruteo. Expone acciones para ubicación, filtros, tema, cálculo de rutas y limpieza de trazos.

## 6.10 Datos

### src/data/poi.ts
Dataset principal de puntos de interés con coordenadas, tipo, nivel y metadatos descriptivos.

### src/data/zones.geojson.ts
Colección geoespacial de polígonos de zonas urbanas con clasificación de seguridad.

### src/data/une.ts
Dataset tipado de planteles UNE para despliegue de marcadores institucionales en mapa.

## 6.11 Hooks

### src/hooks/useDashboardStats.ts
Calcula métricas derivadas para panel estadístico a partir del estado actual de filtros y capas.

### src/hooks/useFilteredPOIs.ts
Devuelve lista reactiva de POI filtrados combinando búsqueda, perfil y filtros activos.

## 6.12 Librerías internas

### src/lib/filtering.ts
Implementa filtrado determinístico de POI y reglas de negocio por perfil de usuario y términos de búsqueda.

### src/lib/routing.ts
Implementa cálculo de estimaciones y trazado de ruta. Integra OSRM y fallback local por Haversine.

### src/lib/supabase/client.ts
Inicializa cliente Supabase para ejecución en navegador.

### src/lib/supabase/server.ts
Inicializa cliente Supabase para entornos de servidor y manejo de sesión en SSR.

## 6.13 Tipos

### src/types/index.ts
Catálogo de tipos globales del dominio: usuario, POI, zonas, filtros, niveles y estructuras de soporte.

## 7. Consideraciones operativas

- La funcionalidad cartográfica depende de ejecución en cliente por uso de APIs del navegador.
- El cálculo de rutas utiliza un servicio público de terceros, por lo que la latencia puede variar.
- La aplicación mantiene operatividad aun cuando el proveedor de rutas no está disponible.
- El modelo de autenticación actual permite ejecución en modo local y es extensible a backend real.

## 8. Estado de validación técnica

La base del proyecto compila correctamente en modo producción mediante el comando de build y valida tipado sin errores.

## 9. Recomendaciones para evolución

- Incorporar caché de rutas para reducir llamadas repetidas a OSRM.
- Añadir estrategia de proveedor alterno de ruteo para alta disponibilidad.
- Persistir preferencias de filtros y último destino por usuario.
- Integrar telemetría de tiempos de respuesta para monitoreo operativo.
