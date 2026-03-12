// ══════════════════════════════════════════════
//  src/data/zones.geojson.ts — Polígonos de seguridad ZMG
//
//  55 zonas de seguridad para la Zona Metropolitana
//  de Guadalajara. Clasificación basada en modelo
//  de riesgo compuesto:
//
//  Riesgo = 0.35×I_delictiva + 0.25×I_iluminacion
//         + 0.20×I_densidad  + 0.15×I_servicios
//         + 0.05×I_movilidad
//
//  Umbral:  < 0.35 → safe   |  0.35–0.70 → caution
//           ≥ 0.70 → critical
//
//  Ver DATASET_METADATA.md para detalle de cálculo.
// ══════════════════════════════════════════════

import type { ZoneProperties } from "@/types";

export interface ZoneFeature {
  type: "Feature";
  properties: ZoneProperties;
  geometry: {
    type: "Polygon";
    coordinates: number[][][];
  };
}

export interface ZonesGeoJSON {
  type: "FeatureCollection";
  features: ZoneFeature[];
}

export const ZONES_GEOJSON: ZonesGeoJSON = {
  type: "FeatureCollection",
  features: [

    // ════════════════════════════════════════
    //  GUADALAJARA  (20 zonas)
    // ════════════════════════════════════════

    // 1. Providencia / Americana — R=0.18 SAFE
    {
      type: "Feature",
      properties: { name: "Providencia / Americana", level: "safe", rationale: "Zona residencial consolidada de nivel medio-alto con baja incidencia delictiva, excelente iluminación, alta presencia de comercios y servicios, y buena cobertura de transporte público (L3 Mi Tren)." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.394, 20.688], [-103.372, 20.688],
        [-103.372, 20.674], [-103.394, 20.674],
        [-103.394, 20.688],
      ]] },
    },

    // 2. Zona Centro — R=0.52 CAUTION
    {
      type: "Feature",
      properties: { name: "Zona Centro Histórico", level: "caution", rationale: "Alta confluencia peatonal y actividad comercial genera robo a transeúnte. Presencia de ambulantaje reduce visibilidad policial. Iluminación aceptable en calles principales pero deficiente en callejones." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.355, 20.682], [-103.340, 20.682],
        [-103.340, 20.672], [-103.355, 20.672],
        [-103.355, 20.682],
      ]] },
    },

    // 3. Analco / San Juan de Dios — R=0.58 CAUTION
    {
      type: "Feature",
      properties: { name: "Analco / San Juan de Dios", level: "caution", rationale: "Zona de mercados con alta actividad diurna pero baja presencia peatonal nocturna. Reportes frecuentes de robo y carterismo asociados al mercado San Juan de Dios. Iluminación parcial." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.345, 20.678], [-103.335, 20.678],
        [-103.335, 20.670], [-103.345, 20.670],
        [-103.345, 20.678],
      ]] },
    },

    // 4. Col. Independencia — R=0.78 CRITICAL
    {
      type: "Feature",
      properties: { name: "Col. Independencia", level: "critical", rationale: "Colonia con alta incidencia de robo a transeúnte y a vehículo según estadísticas IIEG. Déficit de luminarias, calles angostas con baja visibilidad y escasa presencia de servicios de emergencia." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.337, 20.666], [-103.318, 20.666],
        [-103.318, 20.654], [-103.337, 20.654],
        [-103.337, 20.666],
      ]] },
    },

    // 5. Oblatos / Tetlán — R=0.75 CRITICAL
    {
      type: "Feature",
      properties: { name: "Oblatos / Tetlán", level: "critical", rationale: "Zona con reportes elevados de robo y asalto. Presencia de grupos delictivos en colonias populares. Iluminación deficiente en calles secundarias y baja densidad de servicios de seguridad." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.315, 20.695], [-103.290, 20.695],
        [-103.290, 20.678], [-103.315, 20.678],
        [-103.315, 20.695],
      ]] },
    },

    // 6. Huentitán El Alto — R=0.42 CAUTION
    {
      type: "Feature",
      properties: { name: "Huentitán El Alto", level: "caution", rationale: "Zona residencial popular con incidencia delictiva moderada. Proximidad a barranca limita vigilancia. Iluminación aceptable en avenidas principales pero deficiente en zonas periféricas." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.355, 20.715], [-103.330, 20.715],
        [-103.330, 20.700], [-103.355, 20.700],
        [-103.355, 20.715],
      ]] },
    },

    // 7. San Andrés / Rancho Nuevo — R=0.48 CAUTION
    {
      type: "Feature",
      properties: { name: "San Andrés / Rancho Nuevo", level: "caution", rationale: "Colonias populares con incidencia moderada de robo. Conectividad limitada y calles irregulares dificultan patrullaje. Iluminación intermedia." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.340, 20.710], [-103.320, 20.710],
        [-103.320, 20.695], [-103.340, 20.695],
        [-103.340, 20.710],
      ]] },
    },

    // 8. Zona Minerva — R=0.15 SAFE
    {
      type: "Feature",
      properties: { name: "Zona Minerva / Lafayette", level: "safe", rationale: "Corredor turístico y comercial de alto nivel con vigilancia permanente, cámaras C5, excelente iluminación y alta presencia de servicios de emergencia y transporte." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.400, 20.680], [-103.380, 20.680],
        [-103.380, 20.670], [-103.400, 20.670],
        [-103.400, 20.680],
      ]] },
    },

    // 9. Col. Reforma / Jardines Alcalde — R=0.40 CAUTION
    {
      type: "Feature",
      properties: { name: "Col. Reforma / Jardines Alcalde", level: "caution", rationale: "Zona residencial céntrica con incidencia moderada. Iluminación parcial y presencia limitada de patrullaje nocturno. Actividad comercial diurna genera flujo peatonal." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.365, 20.670], [-103.345, 20.670],
        [-103.345, 20.658], [-103.365, 20.658],
        [-103.365, 20.670],
      ]] },
    },

    // 10. Zona Olímpica / Miravalle — R=0.72 CRITICAL
    {
      type: "Feature",
      properties: { name: "Zona Olímpica / Miravalle", level: "critical", rationale: "Alta incidencia delictiva, particularmente robo a casa-habitación y vehículo. Zona con baja densidad de servicios, iluminación deficiente y acceso limitado a transporte público seguro." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.345, 20.650], [-103.318, 20.650],
        [-103.318, 20.635], [-103.345, 20.635],
        [-103.345, 20.650],
      ]] },
    },

    // 11. Zona Industrial 8 de Julio — R=0.65 CAUTION
    {
      type: "Feature",
      properties: { name: "Zona Industrial 8 de Julio", level: "caution", rationale: "Corredor industrial con baja presencia peatonal nocturna. Reportes de robo a vehículo y asalto. Iluminación funcional pero vigilancia insuficiente fuera de horario laboral." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.365, 20.658], [-103.345, 20.658],
        [-103.345, 20.640], [-103.365, 20.640],
        [-103.365, 20.658],
      ]] },
    },

    // 12. Agua Azul / Parque Revolución — R=0.30 SAFE
    {
      type: "Feature",
      properties: { name: "Agua Azul / Parque Revolución", level: "safe", rationale: "Zona con parques públicos vigilados, buena iluminación LED, presencia de tren ligero L1 y actividad cultural que mantiene flujo peatonal seguro." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.365, 20.670], [-103.350, 20.670],
        [-103.350, 20.662], [-103.365, 20.662],
        [-103.365, 20.670],
      ]] },
    },

    // 13. Col. Ferrocarril / Circunvalación Oblatos — R=0.73 CRITICAL
    {
      type: "Feature",
      properties: { name: "Col. Ferrocarril / Circunvalación", level: "critical", rationale: "Colonia con alta incidencia de robo y asalto según IIEG. Infraestructura urbana deteriorada, iluminación deficiente y baja cobertura de servicios de emergencia." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.330, 20.695], [-103.305, 20.695],
        [-103.305, 20.683], [-103.330, 20.683],
        [-103.330, 20.695],
      ]] },
    },

    // 14. Colinas de la Normal — R=0.25 SAFE
    {
      type: "Feature",
      properties: { name: "La Normal / Colinas de la Normal", level: "safe", rationale: "Zona universitaria con vigilancia institucional, buena iluminación y flujo constante de estudiantes. Presencia de la Escuela Normal Superior y CUCSH genera actividad diurna segura." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.370, 20.697], [-103.352, 20.697],
        [-103.352, 20.685], [-103.370, 20.685],
        [-103.370, 20.697],
      ]] },
    },

    // 15. Corredor Federalismo Norte — R=0.32 SAFE
    {
      type: "Feature",
      properties: { name: "Corredor Federalismo Norte", level: "safe", rationale: "Corredor vial con ciclovía iluminada LED, presencia de cámaras C5 y estaciones de transporte público. Actividad comercial mantiene presencia peatonal." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.362, 20.698], [-103.348, 20.698],
        [-103.348, 20.688], [-103.362, 20.688],
        [-103.362, 20.698],
      ]] },
    },

    // 16. Gobernador Curiel / Zona Industrial — R=0.62 CAUTION
    {
      type: "Feature",
      properties: { name: "Gobernador Curiel / Zona Industrial", level: "caution", rationale: "Corredor industrial con actividad principalmente diurna. Incidencia de robo a vehículo y asalto nocturno. Iluminación funcional en avenida principal pero deficiente en calles laterales." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.340, 20.668], [-103.315, 20.668],
        [-103.315, 20.655], [-103.340, 20.655],
        [-103.340, 20.668],
      ]] },
    },

    // 17. González Gallo / Zona Estadios — R=0.45 CAUTION
    {
      type: "Feature",
      properties: { name: "González Gallo / Zona Estadios", level: "caution", rationale: "Zona mixta residencial-deportiva. Incidencia moderada de robo. Iluminación variable; mejora en cercanía a estadios pero decrece en colonias adyacentes." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.360, 20.648], [-103.340, 20.648],
        [-103.340, 20.630], [-103.360, 20.630],
        [-103.360, 20.648],
      ]] },
    },

    // 18. Periférico Sur GDL — R=0.55 CAUTION
    {
      type: "Feature",
      properties: { name: "Periférico Sur GDL", level: "caution", rationale: "Vialidad rápida con comercios dispersos. Incidencia moderada de robo a vehículo. Iluminación concentrada en cruceros principales; áreas oscuras entre intersecciones." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.380, 20.640], [-103.350, 20.640],
        [-103.350, 20.625], [-103.380, 20.625],
        [-103.380, 20.640],
      ]] },
    },

    // 19. Lomas del Cuatro — R=0.55 CAUTION
    {
      type: "Feature",
      properties: { name: "Lomas del Cuatro", level: "caution", rationale: "Colonia popular con incidencia moderada a alta de robo. Terreno irregular dificulta patrullaje. Iluminación parcial y acceso limitado a servicios de emergencia." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.330, 20.645], [-103.310, 20.645],
        [-103.310, 20.632], [-103.330, 20.632],
        [-103.330, 20.645],
      ]] },
    },

    // 20. Santa Cecilia / Guadalupana — R=0.50 CAUTION
    {
      type: "Feature",
      properties: { name: "Santa Cecilia / Guadalupana", level: "caution", rationale: "Colonias residenciales populares con incidencia moderada. Cercanía a Huentitán genera flujo vehicular. Iluminación aceptable en avenidas, deficiente en interiores." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.380, 20.700], [-103.362, 20.700],
        [-103.362, 20.690], [-103.380, 20.690],
        [-103.380, 20.700],
      ]] },
    },

    // ════════════════════════════════════════
    //  ZAPOPAN  (15 zonas)
    // ════════════════════════════════════════

    // 21. Zapopan Centro — R=0.45 CAUTION
    {
      type: "Feature",
      properties: { name: "Zapopan Centro", level: "caution", rationale: "Centro urbano con actividad comercial intensa. Robo a transeúnte moderado en zona de mercados. Iluminación aceptable con vigilancia municipal reforzada." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.402, 20.726], [-103.382, 20.726],
        [-103.382, 20.714], [-103.402, 20.714],
        [-103.402, 20.726],
      ]] },
    },

    // 22. Andares / Puerta de Hierro — R=0.12 SAFE
    {
      type: "Feature",
      properties: { name: "Andares / Puerta de Hierro", level: "safe", rationale: "Fraccionamientos residenciales de alto nivel con seguridad privada, casetas de vigilancia, excelente iluminación y baja incidencia delictiva reportada." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.435, 20.710], [-103.410, 20.710],
        [-103.410, 20.696], [-103.435, 20.696],
        [-103.435, 20.710],
      ]] },
    },

    // 23. Chapalita / Ciudad del Sol — R=0.20 SAFE
    {
      type: "Feature",
      properties: { name: "Chapalita / Ciudad del Sol", level: "safe", rationale: "Zona residencial consolidada con buena iluminación, presencia comercial y baja incidencia delictiva. Proximidad a corredores viales vigilados." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.410, 20.665], [-103.390, 20.665],
        [-103.390, 20.650], [-103.410, 20.650],
        [-103.410, 20.665],
      ]] },
    },

    // 24. Tabachines — R=0.55 CAUTION
    {
      type: "Feature",
      properties: { name: "Tabachines", level: "caution", rationale: "Colonia popular con incidencia moderada de robo y asalto. Crecimiento urbano desordenado genera calles sin iluminación. Conectividad limitada al transporte masivo." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.370, 20.725], [-103.348, 20.725],
        [-103.348, 20.710], [-103.370, 20.710],
        [-103.370, 20.725],
      ]] },
    },

    // 25. Santa Margarita — R=0.50 CAUTION
    {
      type: "Feature",
      properties: { name: "Santa Margarita", level: "caution", rationale: "Fraccionamientos en expansión con incidencia moderada. Déficit de iluminación en nuevos desarrollos. Presencia policial en proceso de consolidación." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.425, 20.745], [-103.400, 20.745],
        [-103.400, 20.730], [-103.425, 20.730],
        [-103.425, 20.745],
      ]] },
    },

    // 26. Tesistán — R=0.55 CAUTION
    {
      type: "Feature",
      properties: { name: "Tesistán", level: "caution", rationale: "Zona suburbana en crecimiento con infraestructura de seguridad insuficiente. Incidencia moderada de robo. Iluminación parcial y distancia a servicios de emergencia." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.460, 20.760], [-103.430, 20.760],
        [-103.430, 20.740], [-103.460, 20.740],
        [-103.460, 20.760],
      ]] },
    },

    // 27. Arcos de Guadalupe — R=0.22 SAFE
    {
      type: "Feature",
      properties: { name: "Arcos de Guadalupe / Bosques de Santa Anita", level: "safe", rationale: "Fraccionamientos residenciales con seguridad privada y buena iluminación. Baja incidencia delictiva y acceso a vialidades principales." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.420, 20.700], [-103.400, 20.700],
        [-103.400, 20.686], [-103.420, 20.686],
        [-103.420, 20.700],
      ]] },
    },

    // 28. Colonia Seattle / La Tuzanía — R=0.48 CAUTION
    {
      type: "Feature",
      properties: { name: "Colonia Seattle / La Tuzanía", level: "caution", rationale: "Colonias populares con incidencia moderada de robo a casa-habitación. Iluminación parcial y calles irregulares. Patrullaje municipal intermitente." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.430, 20.735], [-103.410, 20.735],
        [-103.410, 20.720], [-103.430, 20.720],
        [-103.430, 20.735],
      ]] },
    },

    // 29. Nuevo México / Atemajac — R=0.42 CAUTION
    {
      type: "Feature",
      properties: { name: "Nuevo México / Atemajac", level: "caution", rationale: "Zona residencial mixta con incidencia moderada. Cercanía a centros comerciales mejora vigilancia. Iluminación aceptable en vialidades principales." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.410, 20.740], [-103.390, 20.740],
        [-103.390, 20.726], [-103.410, 20.726],
        [-103.410, 20.740],
      ]] },
    },

    // 30. Real del Valle / Santa Fe Zapopan — R=0.25 SAFE
    {
      type: "Feature",
      properties: { name: "Real del Valle / Santa Fe Zapopan", level: "safe", rationale: "Fraccionamientos recientes con infraestructura moderna, buena iluminación LED y baja incidencia delictiva. Presencia de seguridad privada en accesos." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.445, 20.718], [-103.420, 20.718],
        [-103.420, 20.705], [-103.445, 20.705],
        [-103.445, 20.718],
      ]] },
    },

    // 31. Parque Metropolitano / Los Colomos — R=0.14 SAFE
    {
      type: "Feature",
      properties: { name: "Parque Metropolitano / Los Colomos", level: "safe", rationale: "Zona verde protegida con vigilancia municipal, casetas de acceso, buena iluminación perimetral y alta afluencia recreativa que disuade actividad delictiva." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.420, 20.720], [-103.400, 20.720],
        [-103.400, 20.700], [-103.420, 20.700],
        [-103.420, 20.720],
      ]] },
    },

    // 32. Corredor Patria-Periférico — R=0.28 SAFE
    {
      type: "Feature",
      properties: { name: "Corredor Patria-Periférico", level: "safe", rationale: "Corredor vial principal con iluminación LED, cámaras C5 y acceso a transporte público. Zona comercial y residencial con baja incidencia." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.390, 20.720], [-103.370, 20.720],
        [-103.370, 20.705], [-103.390, 20.705],
        [-103.390, 20.720],
      ]] },
    },

    // 33. Colli Urbano — R=0.40 CAUTION
    {
      type: "Feature",
      properties: { name: "Colli Urbano", level: "caution", rationale: "Colonia popular en transición con incidencia moderada de robo. Mejoramiento progresivo de iluminación. Presencia de patrullaje municipal regular." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.435, 20.695], [-103.415, 20.695],
        [-103.415, 20.680], [-103.435, 20.680],
        [-103.435, 20.695],
      ]] },
    },

    // 34. Zona Estadio Akron — R=0.32 SAFE
    {
      type: "Feature",
      properties: { name: "Zona Estadio Akron", level: "safe", rationale: "Zona deportiva y de entretenimiento con vigilancia reforzada en eventos. Buena iluminación vial y accesos controlados. Baja incidencia fuera de eventos." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.475, 20.690], [-103.450, 20.690],
        [-103.450, 20.675], [-103.475, 20.675],
        [-103.475, 20.690],
      ]] },
    },

    // 35. Zona CUCEA / Valle de los Molinos — R=0.28 SAFE
    {
      type: "Feature",
      properties: { name: "Zona CUCEA / Valle de los Molinos", level: "safe", rationale: "Corredor universitario con vigilancia institucional, iluminación LED y presencia de servicios de seguridad. Flujo estudiantil genera actividad segura." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.395, 20.748], [-103.375, 20.748],
        [-103.375, 20.733], [-103.395, 20.733],
        [-103.395, 20.748],
      ]] },
    },

    // ════════════════════════════════════════
    //  TLAQUEPAQUE  (6 zonas)
    // ════════════════════════════════════════

    // 36. Tlaquepaque Centro — R=0.50 CAUTION
    {
      type: "Feature",
      properties: { name: "Tlaquepaque Centro / El Parián", level: "caution", rationale: "Centro turístico con actividad comercial intensa. Robo a transeúnte en inmediaciones de mercados. Iluminación mejorada en zona turística pero deficiente en periferias." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.322, 20.648], [-103.302, 20.648],
        [-103.302, 20.635], [-103.322, 20.635],
        [-103.322, 20.648],
      ]] },
    },

    // 37. Las Juntas / Zona Industrial — R=0.60 CAUTION
    {
      type: "Feature",
      properties: { name: "Las Juntas / Zona Industrial", level: "caution", rationale: "Corredor industrial con alta actividad vehicular y baja presencia peatonal nocturna. Incidencia de robo a vehículo. Iluminación industrial parcial." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.348, 20.630], [-103.322, 20.630],
        [-103.322, 20.615], [-103.348, 20.615],
        [-103.348, 20.630],
      ]] },
    },

    // 38. Santa Anita — R=0.45 CAUTION
    {
      type: "Feature",
      properties: { name: "Santa Anita Tlaquepaque", level: "caution", rationale: "Zona residencial popular con incidencia moderada. Crecimiento urbano progresivo mejora infraestructura. Iluminación parcial en calles secundarias." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.318, 20.620], [-103.295, 20.620],
        [-103.295, 20.605], [-103.318, 20.605],
        [-103.318, 20.620],
      ]] },
    },

    // 39. Revolución / Lázaro Cárdenas — R=0.58 CAUTION
    {
      type: "Feature",
      properties: { name: "Col. Revolución / Lázaro Cárdenas", level: "caution", rationale: "Colonia popular con incidencia moderada-alta de robo y asalto. Densidad poblacional alta con iluminación parcial. Patrullaje municipal limitado." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.345, 20.640], [-103.322, 20.640],
        [-103.322, 20.625], [-103.345, 20.625],
        [-103.345, 20.640],
      ]] },
    },

    // 40. Toluquilla — R=0.55 CAUTION
    {
      type: "Feature",
      properties: { name: "Toluquilla", level: "caution", rationale: "Zona periurbana con crecimiento habitacional acelerado. Infraestructura de seguridad insuficiente, iluminación parcial y distancia a servicios de emergencia." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.298, 20.590], [-103.275, 20.590],
        [-103.275, 20.575], [-103.298, 20.575],
        [-103.298, 20.590],
      ]] },
    },

    // 41. López Mateos Sur / Tlaquepaque nuevo — R=0.35 CAUTION
    {
      type: "Feature",
      properties: { name: "López Mateos Sur / Tlaquepaque Nuevo", level: "caution", rationale: "Corredor comercial con incidencia baja a moderada. Iluminación en vialidad principal pero deficiente en calles laterales. Presencia de comercios genera vigilancia natural." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.350, 20.618], [-103.330, 20.618],
        [-103.330, 20.605], [-103.350, 20.605],
        [-103.350, 20.618],
      ]] },
    },

    // ════════════════════════════════════════
    //  TONALÁ  (5 zonas)
    // ════════════════════════════════════════

    // 42. Tonalá Centro — R=0.50 CAUTION
    {
      type: "Feature",
      properties: { name: "Tonalá Centro", level: "caution", rationale: "Centro artesanal con actividad comercial intensa. Robo a transeúnte moderado. Iluminación mejorada en zona comercial pero deficiente en colonias adyacentes." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.248, 20.635], [-103.225, 20.635],
        [-103.225, 20.620], [-103.248, 20.620],
        [-103.248, 20.635],
      ]] },
    },

    // 43. Coyula — R=0.72 CRITICAL
    {
      type: "Feature",
      properties: { name: "Coyula", level: "critical", rationale: "Colonia con alta incidencia delictiva, reportes de robo y asalto frecuentes. Infraestructura urbana deficiente, escasa iluminación y baja presencia de servicios de emergencia." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.230, 20.618], [-103.205, 20.618],
        [-103.205, 20.600], [-103.230, 20.600],
        [-103.230, 20.618],
      ]] },
    },

    // 44. Loma Dorada — R=0.40 CAUTION
    {
      type: "Feature",
      properties: { name: "Loma Dorada", level: "caution", rationale: "Fraccionamiento popular con incidencia moderada. Iluminación parcial en áreas comunes. Presencia de vigilancia municipal intermitente." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.275, 20.645], [-103.250, 20.645],
        [-103.250, 20.630], [-103.275, 20.630],
        [-103.275, 20.645],
      ]] },
    },

    // 45. Zalatitán — R=0.48 CAUTION
    {
      type: "Feature",
      properties: { name: "Zalatitán", level: "caution", rationale: "Zona mixta residencial-industrial con incidencia moderada de robo. Iluminación aceptable en avenidas principales pero deficiente en zonas residenciales." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.258, 20.650], [-103.238, 20.650],
        [-103.238, 20.638], [-103.258, 20.638],
        [-103.258, 20.650],
      ]] },
    },

    // 46. Puente Grande — R=0.80 CRITICAL
    {
      type: "Feature",
      properties: { name: "Puente Grande", level: "critical", rationale: "Zona con presencia del complejo penitenciario que genera dinámicas de riesgo. Alta incidencia delictiva, iluminación deficiente y escasos servicios de emergencia." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.205, 20.610], [-103.175, 20.610],
        [-103.175, 20.590], [-103.205, 20.590],
        [-103.205, 20.610],
      ]] },
    },

    // ════════════════════════════════════════
    //  TLAJOMULCO  (5 zonas)
    // ════════════════════════════════════════

    // 47. Tlajomulco Cabecera — R=0.50 CAUTION
    {
      type: "Feature",
      properties: { name: "Tlajomulco de Zúñiga Cabecera", level: "caution", rationale: "Cabecera municipal con crecimiento acelerado. Infraestructura de seguridad en desarrollo. Incidencia moderada de robo e iluminación parcial." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.458, 20.485], [-103.430, 20.485],
        [-103.430, 20.465], [-103.458, 20.465],
        [-103.458, 20.485],
      ]] },
    },

    // 48. Hacienda Santa Fe / Chulavista — R=0.40 CAUTION
    {
      type: "Feature",
      properties: { name: "Hacienda Santa Fe / Chulavista", level: "caution", rationale: "Fraccionamientos de interés social con alta densidad poblacional. Iluminación parcial en áreas comunes. Servicios de seguridad en consolidación." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.425, 20.540], [-103.395, 20.540],
        [-103.395, 20.520], [-103.425, 20.520],
        [-103.425, 20.540],
      ]] },
    },

    // 49. Corredor López Mateos Sur / La Rioja — R=0.30 SAFE
    {
      type: "Feature",
      properties: { name: "Corredor López Mateos Sur / La Rioja", level: "safe", rationale: "Corredor comercial moderno con buena iluminación, plazas comerciales vigiladas y baja incidencia delictiva. Desarrollo urbano reciente con infraestructura adecuada." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.418, 20.565], [-103.390, 20.565],
        [-103.390, 20.545], [-103.418, 20.545],
        [-103.418, 20.565],
      ]] },
    },

    // 50. San Agustín — R=0.55 CAUTION
    {
      type: "Feature",
      properties: { name: "San Agustín Tlajomulco", level: "caution", rationale: "Zona rural en transición urbana con infraestructura de seguridad insuficiente. Iluminación deficiente y distancia significativa a servicios de emergencia." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.445, 20.520], [-103.420, 20.520],
        [-103.420, 20.500], [-103.445, 20.500],
        [-103.445, 20.520],
      ]] },
    },

    // 51. Fraccionamientos sur (Valle de los Naranjos) — R=0.42 CAUTION
    {
      type: "Feature",
      properties: { name: "Valle de los Naranjos / Fraccionamientos Sur", level: "caution", rationale: "Fraccionamientos de vivienda social con incidencia moderada. Iluminación parcial y servicios de emergencia distantes. Organización vecinal activa." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.415, 20.510], [-103.385, 20.510],
        [-103.385, 20.490], [-103.415, 20.490],
        [-103.415, 20.510],
      ]] },
    },

    // ════════════════════════════════════════
    //  EL SALTO  (2 zonas)
    // ════════════════════════════════════════

    // 52. El Salto Centro — R=0.78 CRITICAL
    {
      type: "Feature",
      properties: { name: "El Salto Centro", level: "critical", rationale: "Alta incidencia delictiva reportada por IIEG. Zona industrial con contaminación ambiental, deficiente iluminación, baja presencia policial y servicios de emergencia limitados." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.290, 20.528], [-103.262, 20.528],
        [-103.262, 20.508], [-103.290, 20.508],
        [-103.290, 20.528],
      ]] },
    },

    // 53. Las Pintas / Zona Industrial El Salto — R=0.82 CRITICAL
    {
      type: "Feature",
      properties: { name: "Las Pintas / Zona Industrial El Salto", level: "critical", rationale: "Zona industrial con alta incidencia delictiva en la ZMG. Robo a vehículo y asalto frecuentes. Iluminación mínima, nula presencia peatonal nocturna y servicios de emergencia distantes." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.305, 20.575], [-103.275, 20.575],
        [-103.275, 20.555], [-103.305, 20.555],
        [-103.305, 20.575],
      ]] },
    },

    // ════════════════════════════════════════
    //  MUNICIPIOS PERIFÉRICOS  (3 zonas)
    // ════════════════════════════════════════

    // 54. Zapotlanejo Centro — R=0.45 CAUTION
    {
      type: "Feature",
      properties: { name: "Zapotlanejo Centro", level: "caution", rationale: "Cabecera municipal periférica con incidencia moderada. Infraestructura de seguridad básica. Iluminación en zona central pero deficiente en periferia." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.082, 20.632], [-103.056, 20.632],
        [-103.056, 20.615], [-103.082, 20.615],
        [-103.082, 20.632],
      ]] },
    },

    // 55. Juanacatlán — R=0.38 CAUTION
    {
      type: "Feature",
      properties: { name: "Juanacatlán", level: "caution", rationale: "Municipio rural con baja densidad poblacional. Incidencia delictiva baja pero servicios de emergencia distantes. Iluminación limitada a zona central." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.180, 20.515], [-103.155, 20.515],
        [-103.155, 20.498], [-103.180, 20.498],
        [-103.180, 20.515],
      ]] },
    },

    // 56. Ixtlahuacán de los Membrillos — R=0.42 CAUTION
    {
      type: "Feature",
      properties: { name: "Ixtlahuacán de los Membrillos", level: "caution", rationale: "Municipio periférico con crecimiento habitacional reciente. Infraestructura de seguridad básica, iluminación parcial y dependencia de servicios de emergencia de municipios vecinos." },
      geometry: { type: "Polygon", coordinates: [[
        [-103.220, 20.365], [-103.192, 20.365],
        [-103.192, 20.345], [-103.220, 20.345],
        [-103.220, 20.365],
      ]] },
    },
  ],
};
