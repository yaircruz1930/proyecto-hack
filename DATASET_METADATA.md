<<<<<<< HEAD
# DATASET_METADATA.md — EDUNEX

> Documento de proveniencia, metodología y clasificación del dataset geoespacial ampliado.  
> Fecha de creación: junio 2025 · Última actualización: marzo 2026 · Versión: 2.1
=======
# DATASET_METADATA.md — SafeMap GDL

> Documento de proveniencia, metodología y clasificación del dataset geoespacial ampliado.  
> Fecha de creación: junio 2025 · Versión: 2.0
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469

---

## 1. Resumen del Dataset

| Categoría | Cantidad | Archivo |
|-----------|----------|---------|
| Puntos de Interés (POI) | **264** | `src/data/poi.ts` |
| Zonas de Seguridad | **56** | `src/data/zones.geojson.ts` |
<<<<<<< HEAD
| Planteles UNE | **12** | `src/data/une.ts` |
=======
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
| Tipos de POI | **11** | `src/types/index.ts` |
| Municipios cubiertos | **9** | Toda la ZMG |

### Municipios de la ZMG cubiertos

1. **Guadalajara** — municipio central, mayor densidad de POI
2. **Zapopan** — segundo municipio, cobertura completa norte-poniente
3. **San Pedro Tlaquepaque** — zona centro, industrial y Santa Anita
4. **Tonalá** — centro, Coyula, Loma Dorada, Zalatitán, Puente Grande
5. **Tlajomulco de Zúñiga** — cabecera, Santa Fe, San Agustín, fraccionamientos
6. **El Salto** — centro y zona industrial Las Pintas
7. **Juanacatlán** — cobertura básica (centro)
8. **Ixtlahuacán de los Membrillos** — cobertura básica (centro)
9. **Zapotlanejo** — cobertura básica (centro)

---

## 2. Tipos de Punto de Interés

| Tipo | Icono | Cantidad | Descripción |
|------|-------|----------|-------------|
| `hospital` | 🏥 | 45 | Hospitales, clínicas IMSS/ISSSTE, Centros de Salud SSA, Cruz Roja |
| `comisaria` | 🚔 | 50 | Comisarías municipales, subcomisarías, Policía Estatal, Guardia Nacional |
| `justicia_mujer` | ⚖️ | 16 | Centros de Justicia para Mujeres, Módulos de Atención, Institutos municipales |
| `punto_purpura` | 🟣 | 32 | Módulos en estaciones de Tren Ligero L1/L2/L3, Macrobús, Peribús, paraderos |
| `modulo_uni` | 🎓 | 28 | Módulos de seguridad en campus UDG, ITESO, TEC, UAG, UNIVA, UP, CETI |
| `totem_c5` | 🆘 | 42 | Postes con botón de pánico y cámara del sistema C5 Jalisco |
| `sendero_seguro` | 🛤️ | 36 | Corredores peatonales iluminados, ciclovías, andadores, parques seguros |
| `refugio` | 🏠 | 12 | Refugios DIF, albergues, casas de medio camino, centros de asistencia |
| `cajero_seguro` | 🏧 | 18 | Cajeros ATM en plazas comerciales con CCTV y seguridad privada |
| `farmacia_24h` | 💊 | 20 | Farmacias con servicio nocturno/24h (Guadalajara, Benavides, Del Ahorro) |
| `estacionamiento_vigilado` | 🅿️ | 15 | Estacionamientos con CCTV, acceso controlado y seguridad privada |

---

<<<<<<< HEAD
## 2.1 Dataset UNE (Planteles)

| Campo | Tipo | Descripción |
|------|------|-------------|
| `id` | number | Identificador incremental del plantel |
| `name` | string | Nombre del plantel UNE |
| `address` | string | Dirección de referencia del plantel |
| `lat` | number | Latitud WGS84 |
| `lng` | number | Longitud WGS84 |
| `phone` | string (opcional) | Teléfono de contacto |

### Cobertura UNE actual

- Total de planteles: **12**
- Incluye: **UNE Zapopan Centro**
- Fuente de datos: `src/data/une.ts`

---

=======
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
## 3. Modelo de Riesgo para Zonas

### 3.1 Fórmula Compuesta

$$R = 0.35 \cdot I_{delictiva} + 0.25 \cdot I_{iluminacion} + 0.20 \cdot I_{densidad} + 0.15 \cdot I_{servicios} + 0.05 \cdot I_{movilidad}$$

Donde cada indicador $I$ se normaliza en el rango $[0, 1]$.

### 3.2 Indicadores

| Indicador | Peso | Descripción | Fuente referencial |
|-----------|------|-------------|-------------------|
| $I_{delictiva}$ | 0.35 | Incidencia delictiva (homicidios, robos, violencia familiar) | SESNSP / IIEG Jalisco |
| $I_{iluminacion}$ | 0.25 | Cobertura de alumbrado público (% de calles iluminadas) | Obras Públicas municipales |
| $I_{densidad}$ | 0.20 | Densidad poblacional vs. infraestructura de seguridad | INEGI Censo 2020 |
| $I_{servicios}$ | 0.15 | Proximidad a servicios de emergencia (hospitales, policía) | Calculado por distancia |
| $I_{movilidad}$ | 0.05 | Accesibilidad de transporte público seguro | SITEUR / SISTECOZOME |

### 3.3 Umbrales de Clasificación

| Nivel | Rango de R | Color | Significado |
|-------|-----------|-------|------------|
| `safe` | $R < 0.35$ | 🟢 Verde | Zona segura — buena iluminación, baja incidencia, servicios cercanos |
| `caution` | $0.35 \leq R < 0.70$ | 🟡 Amarillo | Precaución — incidencia moderada, iluminación variable |
| `critical` | $R \geq 0.70$ | 🔴 Rojo | Zona crítica — alta incidencia, déficit de iluminación y servicios |

### 3.4 Distribución por Nivel

| Nivel | Zonas | % |
|-------|-------|---|
| `safe` | 18 | 32.1% |
| `caution` | 28 | 50.0% |
| `critical` | 10 | 17.9% |
| **Total** | **56** | 100% |

---

## 4. Distribución de Zonas por Municipio

| Municipio | safe | caution | critical | Total |
|-----------|------|---------|----------|-------|
| Guadalajara | 5 | 10 | 5 | 20 |
| Zapopan | 8 | 7 | 0 | 15 |
| Tlaquepaque | 0 | 6 | 0 | 6 |
| Tonalá | 0 | 3 | 2 | 5 |
| Tlajomulco | 1 | 4 | 0 | 5 |
| El Salto | 0 | 0 | 2 | 2 |
| Zapotlanejo | 0 | 1 | 0 | 1 |
| Juanacatlán | 0 | 1 | 0 | 1 |
| Ixtlahuacán | 0 | 1 | 0 | 1 |

---

## 5. Fuentes de Datos y Proveniencia

### 5.1 Fuentes Institucionales (referencia)

| Fuente | Uso | Tipo |
|--------|-----|------|
| **INEGI** — Marco Geoestadístico 2020 | Límites municipales, densidad poblacional | Público |
| **SESNSP** — Incidencia Delictiva Municipal | Tasas delictivas por municipio | Público |
| **IIEG Jalisco** — Diagnóstico ZMG | Indicadores de seguridad | Público |
| **SITEUR** — Sistema de Tren Eléctrico Urbano | Ubicación de estaciones L1/L2/L3, Macrobús | Público |
| **C5 Jalisco** — Centro de Coordinación | Ubicación aproximada de tótems y cámaras | Público |
| **SSA Jalisco** — Directorio de Unidades | Hospitales y centros de salud públicos | Público |
| **IMSS** — Directorio de UMF/HGZ/HGR | Clínicas y hospitales del seguro social | Público |
| **OpenStreetMap** — Datos colaborativos | Validación cruzada de ubicaciones | ODbL |

### 5.2 Proceso de Generación

1. **Recopilación**: Ubicaciones conocidas de instituciones públicas verificables
2. **Geocodificación**: Coordenadas WGS84 con precisión de ±100m para la mayoría de puntos
3. **Clasificación de nivel**: Asignación de `safe`/`caution`/`critical` según el entorno de la zona donde se ubica el POI
4. **Validación**: Verificación contra mapas públicos y directorios institucionales
5. **Polígonos**: Aproximaciones rectangulares que cubren colonias/sectores reconocidos

### 5.3 Limitaciones

- Las coordenadas son **aproximadas** (±50-200m) y no sustituyen georreferenciación oficial
- Los polígonos son **rectángulos simplificados**, no límites catastrales reales
- El modelo de riesgo usa valores **estimados cualitativamente** a partir de datos públicos — no son cálculos estadísticos formales
- Los datos representan un **snapshot estático** y no se actualizan en tiempo real
- Municipios periféricos (Juanacatlán, Ixtlahuacán, Zapotlanejo) tienen **cobertura mínima**

---

## 6. Esquema de Coordenadas

- **Sistema**: WGS84 (EPSG:4326)
- **Formato**: Decimal degrees (lat, lng)
- **Bounding box ZMG**: Lat `20.34 — 20.76` · Lng `-103.51 — -103.06`
- **Centro de referencia**: `20.6767, -103.3475` (Catedral de Guadalajara)

---

## 7. Actualizaciones

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | mayo 2025 | Dataset inicial — 14 POI, 7 zonas |
| 2.0 | junio 2025 | Expansión masiva — 264 POI, 56 zonas, 4 nuevos tipos, modelo de riesgo |
<<<<<<< HEAD
| 2.1 | marzo 2026 | Actualización EDUNEX, integración y ajuste de dataset UNE (12 planteles, incluido Zapopan Centro) |
=======
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469

---

## 8. Licencia de Datos

Los datos de este dataset son una **compilación derivada** de fuentes públicas con fines educativos y de prototipo. No se incluyen datos personales ni datos clasificados. El uso es bajo responsabilidad del usuario y no sustituye información oficial de seguridad pública.

---

<<<<<<< HEAD
*Generado automáticamente como parte de la expansión masiva de datos de EDUNEX.*
=======
*Generado automáticamente como parte de la expansión masiva de datos de SafeMap GDL.*
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
