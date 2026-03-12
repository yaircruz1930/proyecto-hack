// ══════════════════════════════════════════════
//  src/data/poi.ts — Puntos de Interés ZMG
//
//  Dataset ampliado para la Zona Metropolitana
//  de Guadalajara. Fuentes: INEGI, OSM, sitios
//  municipales, directorios IMSS/ISSSTE públicos.
//  Fecha de referencia: marzo 2026.
//  Clasificación: datos verificables + estimados
//  (ver DATASET_METADATA.md para detalle).
// ══════════════════════════════════════════════

import type { PointOfInterest } from "@/types";

export const POI_DATA: PointOfInterest[] = [

  // ════════════════════════════════════════════
  //  HOSPITALES  (45 puntos)
  // ════════════════════════════════════════════

  // — Guadalajara —
  { id: 1, name: "Hospital Civil Fray Antonio Alcalde", type: "hospital", icon: "🏥", lat: 20.6773, lng: -103.3470, level: "safe", description: "Hospital público de tercer nivel — urgencias 24h" },
  { id: 2, name: "Hospital Civil Nuevo Juan I. Menchaca", type: "hospital", icon: "🏥", lat: 20.6330, lng: -103.3760, level: "safe", description: "Hospital público de alta especialidad" },
  { id: 3, name: "Hospital Ángeles del Carmen", type: "hospital", icon: "🏥", lat: 20.6840, lng: -103.3721, level: "safe", description: "Hospital privado — urgencias 24h (Tarascos 3435, Col. Monraz)" },
  { id: 4, name: "Cruz Roja Mexicana Guadalajara", type: "hospital", icon: "🏥", lat: 20.6779, lng: -103.3884, level: "safe", description: "Atención prehospitalaria y urgencias (Av. Ávila Camacho y Juan Palomar y Arias)" },
  { id: 5, name: "IMSS HGR No. 45", type: "hospital", icon: "🏥", lat: 20.6695, lng: -103.3615, level: "safe", description: "Hospital General Regional IMSS — Ayuntamiento" },
  { id: 6, name: "IMSS HGR No. 46", type: "hospital", icon: "🏥", lat: 20.7135, lng: -103.3628, level: "safe", description: "Hospital General Regional IMSS — Tabachines, Zapopan" },
  { id: 7, name: "IMSS HGZ No. 89", type: "hospital", icon: "🏥", lat: 20.6570, lng: -103.3350, level: "safe", description: "Hospital General de Zona IMSS — Guadalajara Sur" },
  { id: 8, name: "ISSSTE Hospital Valentín Gómez Farías", type: "hospital", icon: "🏥", lat: 20.6562, lng: -103.3783, level: "safe", description: "Hospital ISSSTE — urgencias y especialidades (Av. Soledad Orozco 203, Col. El Bajío)" },
  { id: 9, name: "Hospital Country 2000", type: "hospital", icon: "🏥", lat: 20.6860, lng: -103.3880, level: "safe", description: "Hospital privado — atención integral" },
  { id: 10, name: "Hospital San Javier", type: "hospital", icon: "🏥", lat: 20.6964, lng: -103.3882, level: "safe", description: "Hospital privado — cirugía y urgencias (Pablo Casals 640, Prados Providencia)" },
  { id: 11, name: "Hospital Arboledas", type: "hospital", icon: "🏥", lat: 20.6480, lng: -103.3480, level: "safe", description: "Hospital privado — zona sur GDL" },
  { id: 12, name: "Hospital México Americano", type: "hospital", icon: "🏥", lat: 20.6930, lng: -103.3730, level: "safe", description: "Hospital privado (Colomos 2110, Col. Ladron de Guevara)" },
  { id: 13, name: "Clínica IMSS UMF No. 3", type: "hospital", icon: "🏥", lat: 20.6660, lng: -103.3440, level: "safe", description: "Unidad de Medicina Familiar — Centro GDL" },
  { id: 14, name: "Clínica IMSS UMF No. 34", type: "hospital", icon: "🏥", lat: 20.6480, lng: -103.3680, level: "safe", description: "UMF sur Guadalajara — consulta externa" },
  { id: 15, name: "Hospital Real San José", type: "hospital", icon: "🏥", lat: 20.7130, lng: -103.4170, level: "safe", description: "Hospital privado — Valle Real Zapopan" },

  // — Zapopan —
  { id: 16, name: "Hospital General de Occidente (Zoquipan)", type: "hospital", icon: "🏥", lat: 20.6530, lng: -103.3960, level: "safe", description: "Hospital SSA — urgencias 24h" },
  { id: 17, name: "Hospital Puerta de Hierro", type: "hospital", icon: "🏥", lat: 20.7025, lng: -103.4205, level: "safe", description: "Hospital privado — alta especialidad" },
  { id: 18, name: "IMSS HGZ No. 110", type: "hospital", icon: "🏥", lat: 20.7200, lng: -103.3850, level: "safe", description: "Hospital General de Zona — Zapopan" },
  { id: 19, name: "Hospital Santa Margarita", type: "hospital", icon: "🏥", lat: 20.7300, lng: -103.4050, level: "safe", description: "Hospital privado — Atemajac" },
  { id: 20, name: "Clínica IMSS UMF No. 93", type: "hospital", icon: "🏥", lat: 20.7350, lng: -103.3950, level: "safe", description: "Clínica familiar — norte Zapopan" },
  { id: 21, name: "Hospital Bernardette", type: "hospital", icon: "🏥", lat: 20.6920, lng: -103.3920, level: "safe", description: "Hospital privado — Chapalita" },
  { id: 22, name: "Clínica IMSS UMF No. 52", type: "hospital", icon: "🏥", lat: 20.7100, lng: -103.3700, level: "safe", description: "UMF Zapopan centro — consulta" },
  { id: 23, name: "Hospital Terranova", type: "hospital", icon: "🏥", lat: 20.6760, lng: -103.4050, level: "safe", description: "Hospital privado — zona Minerva" },

  // — Tlaquepaque —
  { id: 24, name: "Hospital General de Tlaquepaque", type: "hospital", icon: "🏥", lat: 20.6390, lng: -103.3130, level: "caution", description: "Hospital SSA — segundo nivel" },
  { id: 25, name: "IMSS HGZ No. 14 — Tlaquepaque", type: "hospital", icon: "🏥", lat: 20.6350, lng: -103.3200, level: "caution", description: "Hospital General de Zona IMSS" },
  { id: 26, name: "Cruz Roja Tlaquepaque", type: "hospital", icon: "🏥", lat: 20.6410, lng: -103.3100, level: "caution", description: "Urgencias y atención prehospitalaria" },

  // — Tonalá —
  { id: 27, name: "Hospital General de Tonalá", type: "hospital", icon: "🏥", lat: 20.6250, lng: -103.2380, level: "caution", description: "Hospital SSA — urgencias" },
  { id: 28, name: "IMSS UMF No. 171 — Tonalá", type: "hospital", icon: "🏥", lat: 20.6200, lng: -103.2450, level: "caution", description: "Clínica familiar — oriente ZMG" },
  { id: 29, name: "Centro de Salud Tonalá Centro", type: "hospital", icon: "🏥", lat: 20.6270, lng: -103.2350, level: "caution", description: "Centro de atención primaria SSA" },

  // — Tlajomulco —
  { id: 30, name: "Hospital Comunitario de Tlajomulco", type: "hospital", icon: "🏥", lat: 20.4750, lng: -103.4430, level: "caution", description: "Hospital municipal — urgencias básicas" },
  { id: 31, name: "IMSS UMF No. 57 — Tlajomulco", type: "hospital", icon: "🏥", lat: 20.4710, lng: -103.4380, level: "caution", description: "Clínica familiar IMSS" },
  { id: 32, name: "Centro de Salud Hacienda Santa Fe", type: "hospital", icon: "🏥", lat: 20.5260, lng: -103.4100, level: "caution", description: "Centro SSA — fraccionamientos sur" },
  { id: 33, name: "Hospital Santa Fe Tlajomulco", type: "hospital", icon: "🏥", lat: 20.5300, lng: -103.4050, level: "safe", description: "Hospital privado — zona Santa Fe" },

  // — El Salto —
  { id: 34, name: "Hospital Comunitario El Salto", type: "hospital", icon: "🏥", lat: 20.5170, lng: -103.2750, level: "critical", description: "Hospital SSA — atención básica" },
  { id: 35, name: "Centro de Salud El Salto Centro", type: "hospital", icon: "🏥", lat: 20.5150, lng: -103.2780, level: "critical", description: "Consulta externa y urgencias menores" },

  // — Juanacatlán / Ixtlahuacán / Zapotlanejo —
  { id: 36, name: "Centro de Salud Juanacatlán", type: "hospital", icon: "🏥", lat: 20.5050, lng: -103.1670, level: "caution", description: "Atención primaria SSA" },
  { id: 37, name: "Centro de Salud Ixtlahuacán de los Membrillos", type: "hospital", icon: "🏥", lat: 20.3550, lng: -103.2060, level: "caution", description: "Unidad médica SSA rural" },
  { id: 38, name: "Hospital Comunitario Zapotlanejo", type: "hospital", icon: "🏥", lat: 20.6230, lng: -103.0690, level: "caution", description: "Hospital SSA — servicios básicos" },

  // — Hospitales adicionales periféricos —
  { id: 39, name: "Hospital Regional Psiquiátrico", type: "hospital", icon: "🏥", lat: 20.6470, lng: -103.3400, level: "safe", description: "Hospital especializado en salud mental" },
  { id: 40, name: "IMSS HGR No. 180 — Tlajomulco", type: "hospital", icon: "🏥", lat: 20.5200, lng: -103.4140, level: "safe", description: "Hospital regional IMSS sur ZMG" },
  { id: 41, name: "Hospital Voces — CMQ", type: "hospital", icon: "🏥", lat: 20.6800, lng: -103.3550, level: "safe", description: "Hospital privado — centro" },
  { id: 42, name: "Nuevo Hospital General de Zapopan", type: "hospital", icon: "🏥", lat: 20.7180, lng: -103.3980, level: "safe", description: "Hospital SSA — tercer nivel Zapopan" },
  { id: 43, name: "IMSS UMF No. 78 — Tesistán", type: "hospital", icon: "🏥", lat: 20.7500, lng: -103.4400, level: "caution", description: "Clínica familiar norte ZMG" },
  { id: 44, name: "Hospital Lomas de Providencia", type: "hospital", icon: "🏥", lat: 20.6950, lng: -103.3830, level: "safe", description: "Hospital privado — Providencia" },
  { id: 45, name: "Centro de Salud Toluquilla", type: "hospital", icon: "🏥", lat: 20.5800, lng: -103.2850, level: "caution", description: "Unidad SSA — zona rural oriente" },

  // ════════════════════════════════════════════
  //  COMISARIAS  (50 puntos)
  // ════════════════════════════════════════════

  // — Guadalajara —
  { id: 100, name: "Comisaría de Policía GDL Centro", type: "comisaria", icon: "🚔", lat: 20.6760, lng: -103.3475, level: "caution", description: "Policía Municipal de Guadalajara — sede central" },
  { id: 101, name: "Subcomisaría Zona Minerva", type: "comisaria", icon: "🚔", lat: 20.6745, lng: -103.3880, level: "safe", description: "Policía Municipal — sector Minerva" },
  { id: 102, name: "Subcomisaría Zona Oblatos", type: "comisaria", icon: "🚔", lat: 20.6900, lng: -103.3030, level: "critical", description: "Policía Municipal — sector oriente" },
  { id: 103, name: "Subcomisaría Zona Huentitán", type: "comisaria", icon: "🚔", lat: 20.7020, lng: -103.3400, level: "caution", description: "Policía Municipal — sector norte" },
  { id: 104, name: "Subcomisaría Zona Tetlán", type: "comisaria", icon: "🚔", lat: 20.6880, lng: -103.2980, level: "critical", description: "Policía Municipal — sector oriente-sur" },
  { id: 105, name: "Subcomisaría Zona Reforma", type: "comisaria", icon: "🚔", lat: 20.6620, lng: -103.3450, level: "caution", description: "Policía Municipal — sector sur GDL" },
  { id: 106, name: "Cuartel General de Policía GDL", type: "comisaria", icon: "🚔", lat: 20.6580, lng: -103.3520, level: "safe", description: "Base operativa central Guadalajara" },
  { id: 107, name: "Subcomisaría Zona Olímpica", type: "comisaria", icon: "🚔", lat: 20.6430, lng: -103.3590, level: "caution", description: "Policía Municipal — zona sur" },
  { id: 108, name: "Base Policía Estatal — López Mateos", type: "comisaria", icon: "🚔", lat: 20.6680, lng: -103.3900, level: "safe", description: "Policía del Estado de Jalisco" },
  { id: 109, name: "Guardia Nacional — GDL Norte", type: "comisaria", icon: "🚔", lat: 20.7100, lng: -103.3550, level: "safe", description: "Instalación federal — seguridad" },

  // — Zapopan —
  { id: 110, name: "Comisaría Zapopan Centro", type: "comisaria", icon: "🚔", lat: 20.7210, lng: -103.3920, level: "safe", description: "Policía Municipal de Zapopan" },
  { id: 111, name: "Subcomisaría Zapopan — Santa Margarita", type: "comisaria", icon: "🚔", lat: 20.7350, lng: -103.4100, level: "caution", description: "Policía Municipal sector norponiente" },
  { id: 112, name: "Subcomisaría Zapopan — Tabachines", type: "comisaria", icon: "🚔", lat: 20.7150, lng: -103.3550, level: "caution", description: "Policía Municipal sector centro-oriente" },
  { id: 113, name: "Subcomisaría Zapopan — Tesistán", type: "comisaria", icon: "🚔", lat: 20.7500, lng: -103.4350, level: "caution", description: "Policía Municipal — zona rural norte" },
  { id: 114, name: "Subcomisaría Zapopan — Nuevo México", type: "comisaria", icon: "🚔", lat: 20.7400, lng: -103.4000, level: "caution", description: "Policía Municipal — Nuevo México" },
  { id: 115, name: "Base Policía Estatal Zapopan", type: "comisaria", icon: "🚔", lat: 20.7050, lng: -103.4100, level: "safe", description: "Policía del Estado — Zapopan" },
  { id: 116, name: "Subcomisaría Zapopan — La Tuzanía", type: "comisaria", icon: "🚔", lat: 20.7250, lng: -103.4200, level: "caution", description: "Policía Municipal— La Tuzanía" },
  { id: 117, name: "Guardia Nacional — Zapopan", type: "comisaria", icon: "🚔", lat: 20.7300, lng: -103.3850, level: "safe", description: "Instalación de seguridad federal" },

  // — Tlaquepaque —
  { id: 118, name: "Comisaría Tlaquepaque Centro", type: "comisaria", icon: "🚔", lat: 20.6405, lng: -103.3120, level: "caution", description: "Policía Municipal de Tlaquepaque" },
  { id: 119, name: "Subcomisaría Tlaquepaque — Las Juntas", type: "comisaria", icon: "🚔", lat: 20.6200, lng: -103.3350, level: "caution", description: "Policía Municipal — Las Juntas zona industrial" },
  { id: 120, name: "Subcomisaría Tlaquepaque — Santa Anita", type: "comisaria", icon: "🚔", lat: 20.6100, lng: -103.3050, level: "caution", description: "Policía Municipal — sur Tlaquepaque" },
  { id: 121, name: "Base Policía Estatal — Tlaquepaque", type: "comisaria", icon: "🚔", lat: 20.6350, lng: -103.3180, level: "caution", description: "Policía Estatal — operaciones Tlaquepaque" },

  // — Tonalá —
  { id: 122, name: "Comisaría Tonalá Centro", type: "comisaria", icon: "🚔", lat: 20.6250, lng: -103.2350, level: "caution", description: "Policía Municipal de Tonalá" },
  { id: 123, name: "Subcomisaría Tonalá — Coyula", type: "comisaria", icon: "🚔", lat: 20.6100, lng: -103.2200, level: "critical", description: "Policía Municipal — zona sureste" },
  { id: 124, name: "Subcomisaría Tonalá — Loma Dorada", type: "comisaria", icon: "🚔", lat: 20.6350, lng: -103.2600, level: "caution", description: "Policía Municipal — zona norte" },
  { id: 125, name: "Módulo de Seguridad Tonalá — Zalatitán", type: "comisaria", icon: "🚔", lat: 20.6400, lng: -103.2450, level: "caution", description: "Módulo policial" },

  // — Tlajomulco —
  { id: 126, name: "Comisaría Tlajomulco Cabecera", type: "comisaria", icon: "🚔", lat: 20.4740, lng: -103.4430, level: "caution", description: "Policía Municipal — sede central" },
  { id: 127, name: "Subcomisaría Tlajomulco — Santa Fe", type: "comisaria", icon: "🚔", lat: 20.5280, lng: -103.4100, level: "caution", description: "Policía Municipal — zona fraccionamientos" },
  { id: 128, name: "Subcomisaría Tlajomulco — San Agustín", type: "comisaria", icon: "🚔", lat: 20.5050, lng: -103.4300, level: "caution", description: "Policía Municipal — zona rural" },
  { id: 129, name: "Subcomisaría Tlajomulco — López Mateos Sur", type: "comisaria", icon: "🚔", lat: 20.5500, lng: -103.4000, level: "safe", description: "Policía Municipal — corredor López Mateos" },
  { id: 130, name: "Base Policía Estatal — Tlajomulco", type: "comisaria", icon: "🚔", lat: 20.4800, lng: -103.4350, level: "caution", description: "Policía Estatal Tlajomulco" },

  // — El Salto —
  { id: 131, name: "Comisaría El Salto Centro", type: "comisaria", icon: "🚔", lat: 20.5170, lng: -103.2750, level: "critical", description: "Policía Municipal de El Salto" },
  { id: 132, name: "Subcomisaría El Salto — Las Pintas", type: "comisaria", icon: "🚔", lat: 20.5600, lng: -103.2900, level: "critical", description: "Policía Municipal — zona industrial" },

  // — Municipios periféricos —
  { id: 133, name: "Comisaría Juanacatlán", type: "comisaria", icon: "🚔", lat: 20.5050, lng: -103.1670, level: "caution", description: "Policía Municipal de Juanacatlán" },
  { id: 134, name: "Comisaría Ixtlahuacán", type: "comisaria", icon: "🚔", lat: 20.3550, lng: -103.2060, level: "caution", description: "Policía Municipal de Ixtlahuacán de los Membrillos" },
  { id: 135, name: "Comisaría Zapotlanejo", type: "comisaria", icon: "🚔", lat: 20.6235, lng: -103.0690, level: "caution", description: "Policía Municipal de Zapotlanejo" },

  // — Unidades federales distribuidas —
  { id: 136, name: "Guardia Nacional — Carretera a Chapala", type: "comisaria", icon: "🚔", lat: 20.5400, lng: -103.2600, level: "safe", description: "Punto de revisión federal" },
  { id: 137, name: "Guardia Nacional — Periférico Sur", type: "comisaria", icon: "🚔", lat: 20.5800, lng: -103.3600, level: "safe", description: "Base operativa periférico" },
  { id: 138, name: "Policía Vial Jalisco — GDL", type: "comisaria", icon: "🚔", lat: 20.6720, lng: -103.3680, level: "safe", description: "Policía Vial del Estado" },
  { id: 139, name: "Subcomisaría Zapopan — Colli", type: "comisaria", icon: "🚔", lat: 20.6850, lng: -103.4200, level: "caution", description: "Policía Municipal — Colli Urbano" },
  { id: 140, name: "Base Policía Federal — Periférico Norte", type: "comisaria", icon: "🚔", lat: 20.7350, lng: -103.3500, level: "safe", description: "Base federal — zona Periférico" },
  { id: 141, name: "Subcomisaría GDL — San Andrés", type: "comisaria", icon: "🚔", lat: 20.7060, lng: -103.3300, level: "caution", description: "Policía Municipal — San Andrés" },
  { id: 142, name: "Subcomisaría GDL — Miravalle", type: "comisaria", icon: "🚔", lat: 20.6400, lng: -103.3300, level: "critical", description: "Policía Municipal — zona sur oriente" },
  { id: 143, name: "Subcomisaría Zapopan — Real del Valle", type: "comisaria", icon: "🚔", lat: 20.7080, lng: -103.4300, level: "safe", description: "Policía Municipal — fraccionamientos poniente" },
  { id: 144, name: "Subcomisaría Tonalá — Puente Grande", type: "comisaria", icon: "🚔", lat: 20.6000, lng: -103.1900, level: "critical", description: "Policía Municipal — zona penal" },
  { id: 145, name: "Subcomisaría Tlaquepaque — Revolución", type: "comisaria", icon: "🚔", lat: 20.6300, lng: -103.3300, level: "caution", description: "Policía Municipal — zona Revolución" },
  { id: 146, name: "Puesto de Mando Policía de Proximidad — Zapopan", type: "comisaria", icon: "🚔", lat: 20.7150, lng: -103.4050, level: "safe", description: "Policía de proximidad — atención ciudadana" },
  { id: 147, name: "Módulo de Seguridad — Parque Morelos", type: "comisaria", icon: "🚔", lat: 20.6730, lng: -103.3350, level: "caution", description: "Módulo policial — zona centro GDL" },
  { id: 148, name: "Subcomisaría GDL — Colonias", type: "comisaria", icon: "🚔", lat: 20.6650, lng: -103.3700, level: "safe", description: "Policía Municipal — sector Americana" },
  { id: 149, name: "Subcomisaría GDL — Industrial", type: "comisaria", icon: "🚔", lat: 20.6500, lng: -103.3200, level: "caution", description: "Policía Municipal — zona industrial sur" },

  // ════════════════════════════════════════════
  //  CENTROS DE JUSTICIA PARA MUJERES  (16 puntos)
  // ════════════════════════════════════════════

  { id: 200, name: "Centro de Justicia para Mujeres Jalisco", type: "justicia_mujer", icon: "⚖️", lat: 20.6898, lng: -103.3468, level: "safe", description: "Sede principal — asesoría legal y psicológica gratuita (Av. Alcalde 1351)" },
  { id: 201, name: "Módulo de Atención a Mujeres — Tlaquepaque", type: "justicia_mujer", icon: "⚖️", lat: 20.6400, lng: -103.3120, level: "caution", description: "Módulo de denuncia y atención integral" },
  { id: 202, name: "Módulo de Atención a Mujeres — Tonalá", type: "justicia_mujer", icon: "⚖️", lat: 20.6240, lng: -103.2360, level: "caution", description: "Módulo de atención especializada" },
  { id: 203, name: "Módulo de Atención a Mujeres — Zapopan", type: "justicia_mujer", icon: "⚖️", lat: 20.7200, lng: -103.3900, level: "safe", description: "Módulo municipal de atención a la mujer" },
  { id: 204, name: "Módulo de Atención a Mujeres — Tlajomulco", type: "justicia_mujer", icon: "⚖️", lat: 20.4750, lng: -103.4420, level: "caution", description: "Módulo municipal — cabecera" },
  { id: 205, name: "Instituto Jalisciense de las Mujeres", type: "justicia_mujer", icon: "⚖️", lat: 20.6820, lng: -103.3480, level: "safe", description: "Órgano estatal de política de género" },
  { id: 206, name: "Módulo de Atención a Mujeres — El Salto", type: "justicia_mujer", icon: "⚖️", lat: 20.5165, lng: -103.2755, level: "critical", description: "Módulo municipal — atención violencia de género" },
  { id: 207, name: "Centro de Atención a Víctimas — CEAV Jalisco", type: "justicia_mujer", icon: "⚖️", lat: 20.6710, lng: -103.3630, level: "safe", description: "Comisión estatal de víctimas" },
  { id: 208, name: "Instituto Municipal de las Mujeres GDL", type: "justicia_mujer", icon: "⚖️", lat: 20.6680, lng: -103.3490, level: "safe", description: "Atención y canalización municipal" },
  { id: 209, name: "Instituto de la Mujer Zapopan", type: "justicia_mujer", icon: "⚖️", lat: 20.7190, lng: -103.3910, level: "safe", description: "Instituto municipal de la mujer" },
  { id: 210, name: "Módulo de Atención Violencia — CUCSH", type: "justicia_mujer", icon: "⚖️", lat: 20.6890, lng: -103.3510, level: "safe", description: "Módulo universitario contra la violencia" },
  { id: 211, name: "DIF Jalisco — Atención a Mujeres", type: "justicia_mujer", icon: "⚖️", lat: 20.6750, lng: -103.3410, level: "safe", description: "Programa DIF de atención a mujeres" },
  { id: 212, name: "Módulo Púrpura — Zapotlanejo", type: "justicia_mujer", icon: "⚖️", lat: 20.6225, lng: -103.0700, level: "caution", description: "Atención a mujeres — municipio Zapotlanejo" },
  { id: 213, name: "Módulo de Atención a Mujeres — Ixtlahuacán", type: "justicia_mujer", icon: "⚖️", lat: 20.3545, lng: -103.2065, level: "caution", description: "Módulo municipal periférico" },
  { id: 214, name: "Fiscalía Especializada Violencia contra Mujeres", type: "justicia_mujer", icon: "⚖️", lat: 20.6730, lng: -103.3510, level: "safe", description: "Fiscalía del Estado — delitos de género" },
  { id: 215, name: "Módulo de Atención a Mujeres — Juanacatlán", type: "justicia_mujer", icon: "⚖️", lat: 20.5040, lng: -103.1680, level: "caution", description: "Módulo municipal — atención básica" },

  // ════════════════════════════════════════════
  //  PUNTOS PURPURA  (32 puntos)
  // ════════════════════════════════════════════

  { id: 300, name: "Punto Púrpura — Est. Periférico Sur (L1)", type: "punto_purpura", icon: "🟣", lat: 20.6360, lng: -103.3660, level: "safe", description: "Módulo de transporte seguro — Tren Ligero L1" },
  { id: 301, name: "Punto Púrpura — Est. Unidad Deportiva (L1)", type: "punto_purpura", icon: "🟣", lat: 20.6580, lng: -103.3620, level: "safe", description: "Módulo seguro Tren Ligero L1" },
  { id: 302, name: "Punto Púrpura — Est. Juárez (L1)", type: "punto_purpura", icon: "🟣", lat: 20.6680, lng: -103.3620, level: "safe", description: "Transporte seguro — centro" },
  { id: 303, name: "Punto Púrpura — Est. Mexicaltzingo (L1)", type: "punto_purpura", icon: "🟣", lat: 20.6740, lng: -103.3590, level: "safe", description: "Módulo seguro L1" },
  { id: 304, name: "Punto Púrpura — Est. Ávila Camacho (L1)", type: "punto_purpura", icon: "🟣", lat: 20.6910, lng: -103.3510, level: "safe", description: "Zona de transporte seguro" },
  { id: 305, name: "Punto Púrpura — Est. Guadalupe (L2)", type: "punto_purpura", icon: "🟣", lat: 20.6770, lng: -103.3270, level: "caution", description: "Módulo seguro Tren Ligero L2" },
  { id: 306, name: "Punto Púrpura — Est. Tetlán (L2)", type: "punto_purpura", icon: "🟣", lat: 20.6830, lng: -103.3080, level: "critical", description: "Módulo seguro — zona oriente" },
  { id: 307, name: "Punto Púrpura — Est. Plaza Universidad (L2)", type: "punto_purpura", icon: "🟣", lat: 20.6770, lng: -103.3440, level: "safe", description: "Módulo seguro L2 — centro" },
  { id: 308, name: "Punto Púrpura — Est. Juárez (L2)", type: "punto_purpura", icon: "🟣", lat: 20.6770, lng: -103.3480, level: "safe", description: "Transbordo L1-L2 seguro" },
  { id: 309, name: "Punto Púrpura — Macrobús — Fray Antonio Alcalde", type: "punto_purpura", icon: "🟣", lat: 20.6790, lng: -103.3470, level: "safe", description: "Módulo seguro Macrobús" },
  { id: 310, name: "Punto Púrpura — Macrobús — San Juan de Dios", type: "punto_purpura", icon: "🟣", lat: 20.6750, lng: -103.3410, level: "caution", description: "Módulo Macrobús — mercado" },
  { id: 311, name: "Punto Púrpura — Macrobús — Independencia", type: "punto_purpura", icon: "🟣", lat: 20.6710, lng: -103.3370, level: "caution", description: "Módulo Macrobús" },
  { id: 312, name: "Punto Púrpura — Macrobús — CUCEI", type: "punto_purpura", icon: "🟣", lat: 20.6560, lng: -103.3250, level: "safe", description: "Módulo Macrobús zona universitaria" },
  { id: 313, name: "Punto Púrpura — L3 — Est. Arcos Vallarta", type: "punto_purpura", icon: "🟣", lat: 20.6750, lng: -103.3800, level: "safe", description: "L3 Mi Tren — estación segura" },
  { id: 314, name: "Punto Púrpura — L3 — Est. Plaza del Sol", type: "punto_purpura", icon: "🟣", lat: 20.6520, lng: -103.3970, level: "safe", description: "L3 Mi Tren — zona comercial" },
  { id: 315, name: "Punto Púrpura — L3 — Est. Ávila Camacho", type: "punto_purpura", icon: "🟣", lat: 20.6910, lng: -103.3500, level: "safe", description: "L3 Mi Tren — transbordo" },
  { id: 316, name: "Punto Púrpura — Parada SITREN Zapopan Centro", type: "punto_purpura", icon: "🟣", lat: 20.7190, lng: -103.3920, level: "safe", description: "Parada con módulo púrpura" },
  { id: 317, name: "Punto Púrpura — Paradero San Isidro", type: "punto_purpura", icon: "🟣", lat: 20.7050, lng: -103.3600, level: "safe", description: "Paradero con vigilancia" },
  { id: 318, name: "Punto Púrpura — Central Camionera Vieja", type: "punto_purpura", icon: "🟣", lat: 20.6700, lng: -103.3380, level: "caution", description: "Módulo seguro — terminal" },
  { id: 319, name: "Punto Púrpura — Central Camionera Nueva", type: "punto_purpura", icon: "🟣", lat: 20.6230, lng: -103.3460, level: "caution", description: "Terminal — módulo de seguridad" },
  { id: 320, name: "Punto Púrpura — Paradero Tlaquepaque Centro", type: "punto_purpura", icon: "🟣", lat: 20.6390, lng: -103.3140, level: "caution", description: "Módulo seguro transporte" },
  { id: 321, name: "Punto Púrpura — Base Tonalá", type: "punto_purpura", icon: "🟣", lat: 20.6260, lng: -103.2370, level: "caution", description: "Módulo púrpura municipal Tonalá" },
  { id: 322, name: "Punto Púrpura — Paradero López Mateos", type: "punto_purpura", icon: "🟣", lat: 20.6680, lng: -103.3970, level: "safe", description: "Paradero con vigilancia — López Mateos" },
  { id: 323, name: "Punto Púrpura — L3 Est. Guadalajara Centro", type: "punto_purpura", icon: "🟣", lat: 20.6780, lng: -103.3470, level: "safe", description: "L3 estación centro — módulo" },
  { id: 324, name: "Punto Púrpura — Macrobús — Huentitán", type: "punto_purpura", icon: "🟣", lat: 20.7030, lng: -103.3390, level: "caution", description: "Macrobús punta norte" },
  { id: 325, name: "Punto Púrpura — Macrobús — San Jacinto", type: "punto_purpura", icon: "🟣", lat: 20.6870, lng: -103.3450, level: "safe", description: "Macrobús — parada intermedia" },
  { id: 326, name: "Punto Púrpura — Corredor Federalismo", type: "punto_purpura", icon: "🟣", lat: 20.6850, lng: -103.3530, level: "safe", description: "Paradas seguras corredor" },
  { id: 327, name: "Punto Púrpura — Paradero Santa Fe Tlajomulco", type: "punto_purpura", icon: "🟣", lat: 20.5250, lng: -103.4100, level: "caution", description: "Módulo seguro zona sur ZMG" },
  { id: 328, name: "Punto Púrpura — Paradero El Salto", type: "punto_purpura", icon: "🟣", lat: 20.5180, lng: -103.2770, level: "critical", description: "Módulo seguro — zona industrial" },
  { id: 329, name: "Punto Púrpura — Est. L1 Periférico Norte", type: "punto_purpura", icon: "🟣", lat: 20.7100, lng: -103.3560, level: "safe", description: "L1 norte — módulo seguro" },
  { id: 330, name: "Punto Púrpura — L3 Est. La Normal", type: "punto_purpura", icon: "🟣", lat: 20.6880, lng: -103.3590, level: "safe", description: "L3 estación La Normal" },
  { id: 331, name: "Punto Púrpura — Peribús Periférico-Zapopan", type: "punto_purpura", icon: "🟣", lat: 20.7200, lng: -103.3700, level: "safe", description: "Peribús — parada segura norte" },

  // ════════════════════════════════════════════
  //  MODULOS UNIVERSITARIOS  (28 puntos)
  // ════════════════════════════════════════════

  { id: 400, name: "Módulo de Seguridad CUCEI", type: "modulo_uni", icon: "🎓", lat: 20.6555, lng: -103.3255, level: "safe", description: "Centro Universitario de Ciencias Exactas" },
  { id: 401, name: "Módulo de Seguridad CUAAD", type: "modulo_uni", icon: "🎓", lat: 20.6940, lng: -103.3810, level: "safe", description: "Centro Universitario de Arte, Arquitectura y Diseño" },
  { id: 402, name: "Módulo de Seguridad CUCSH — Belenes", type: "modulo_uni", icon: "🎓", lat: 20.7400, lng: -103.4050, level: "safe", description: "Ciencias Sociales y Humanidades — campus Belenes" },
  { id: 403, name: "Módulo de Seguridad CUCSH — La Normal", type: "modulo_uni", icon: "🎓", lat: 20.6890, lng: -103.3510, level: "safe", description: "CUCSH campus La Normal" },
  { id: 404, name: "Módulo de Seguridad CUCS", type: "modulo_uni", icon: "🎓", lat: 20.6830, lng: -103.3280, level: "safe", description: "Centro Universitario de Ciencias de la Salud" },
  { id: 405, name: "Módulo de Seguridad CUCBA", type: "modulo_uni", icon: "🎓", lat: 20.7450, lng: -103.5100, level: "caution", description: "Ciencias Biológicas y Agropecuarias — Las Agujas" },
  { id: 406, name: "Módulo de Seguridad CUCEA", type: "modulo_uni", icon: "🎓", lat: 20.7380, lng: -103.3820, level: "safe", description: "Ciencias Económico-Administrativas" },
  { id: 407, name: "Módulo de Seguridad CUTonalá", type: "modulo_uni", icon: "🎓", lat: 20.6050, lng: -103.2150, level: "caution", description: "Centro Universitario de Tonalá" },
  { id: 408, name: "Módulo de Seguridad CUTlajomulco", type: "modulo_uni", icon: "🎓", lat: 20.4700, lng: -103.4400, level: "caution", description: "Centro Universitario de Tlajomulco" },
  { id: 409, name: "ITESO — Vigilancia 24h", type: "modulo_uni", icon: "🎓", lat: 20.6094, lng: -103.4160, level: "safe", description: "Universidad ITESO — seguridad perimetral" },
  { id: 410, name: "TEC de Monterrey GDL — Vigilancia", type: "modulo_uni", icon: "🎓", lat: 20.6350, lng: -103.4020, level: "safe", description: "Campus GDL — seguridad 24h" },
  { id: 411, name: "UAG — Seguridad Campus", type: "modulo_uni", icon: "🎓", lat: 20.6630, lng: -103.3570, level: "safe", description: "Universidad Autónoma de Guadalajara" },
  { id: 412, name: "UNIVA — Módulo Campus GDL", type: "modulo_uni", icon: "🎓", lat: 20.6560, lng: -103.3960, level: "safe", description: "Universidad del Valle de Atemajac" },
  { id: 413, name: "UP — Seguridad Campus", type: "modulo_uni", icon: "🎓", lat: 20.6750, lng: -103.3970, level: "safe", description: "Universidad Panamericana Guadalajara" },
  { id: 414, name: "UVM — Campus Zapopan", type: "modulo_uni", icon: "🎓", lat: 20.7050, lng: -103.4100, level: "safe", description: "Universidad del Valle de México — Zapopan" },
  { id: 415, name: "Escuela Normal Superior Jalisco", type: "modulo_uni", icon: "🎓", lat: 20.6880, lng: -103.3600, level: "safe", description: "Normal Superior — vigilancia" },
  { id: 416, name: "UTEG — Campus GDL", type: "modulo_uni", icon: "🎓", lat: 20.6700, lng: -103.3380, level: "caution", description: "Universidad Tecnológica — seguridad" },
  { id: 417, name: "UNITEC — Campus GDL", type: "modulo_uni", icon: "🎓", lat: 20.6820, lng: -103.3650, level: "safe", description: "UNITEC Guadalajara — vigilancia" },
  { id: 418, name: "UDG CUCiénega Sede GDL", type: "modulo_uni", icon: "🎓", lat: 20.6600, lng: -103.3500, level: "safe", description: "Extensión metropolitana CUCiénega" },
  { id: 419, name: "CETI Colomos", type: "modulo_uni", icon: "🎓", lat: 20.7020, lng: -103.3800, level: "safe", description: "Centro de Enseñanza Técnica Industrial" },
  { id: 420, name: "CETI Tonalá", type: "modulo_uni", icon: "🎓", lat: 20.6200, lng: -103.2500, level: "caution", description: "CETI campus Tonalá — seguridad" },
  { id: 421, name: "Preparatoria No. 5 UDG", type: "modulo_uni", icon: "🎓", lat: 20.6580, lng: -103.3350, level: "safe", description: "Preparatoria UDG — zona CUCEI" },
  { id: 422, name: "Preparatoria No. 7 UDG", type: "modulo_uni", icon: "🎓", lat: 20.6980, lng: -103.3350, level: "caution", description: "Preparatoria UDG — Colonias" },
  { id: 423, name: "Preparatoria No. 12 UDG — Tonalá", type: "modulo_uni", icon: "🎓", lat: 20.6150, lng: -103.2400, level: "caution", description: "Preparatoria Tonalá — vigilancia" },
  { id: 424, name: "Politécnico de Guadalajara", type: "modulo_uni", icon: "🎓", lat: 20.6300, lng: -103.3620, level: "safe", description: "IPN campus GDL — seguridad" },
  { id: 425, name: "CULAGOS Extension Guadalajara", type: "modulo_uni", icon: "🎓", lat: 20.6720, lng: -103.3550, level: "safe", description: "UDG extensión metropolitana" },
  { id: 426, name: "UTJ — Universidad Tecnológica de Jalisco", type: "modulo_uni", icon: "🎓", lat: 20.6300, lng: -103.2800, level: "caution", description: "UT Jalisco — zona Tlaquepaque industrial" },
  { id: 427, name: "LAMAR Universidad — Campus Vallarta", type: "modulo_uni", icon: "🎓", lat: 20.6770, lng: -103.3850, level: "safe", description: "Universidad LAMAR — vigilancia" },

  // ════════════════════════════════════════════
  //  TOTEMS C5  (42 puntos)
  // ════════════════════════════════════════════

  { id: 500, name: "Tótem C5 — Av. Chapultepec y Américas", type: "totem_c5", icon: "🆘", lat: 20.6720, lng: -103.3710, level: "safe", description: "Poste con botón de pánico y cámara C5" },
  { id: 501, name: "Tótem C5 — Av. Vallarta y López Mateos", type: "totem_c5", icon: "🆘", lat: 20.6745, lng: -103.3980, level: "safe", description: "Poste de emergencia C5" },
  { id: 502, name: "Tótem C5 — Av. Patria y Periférico Norte", type: "totem_c5", icon: "🆘", lat: 20.7180, lng: -103.3700, level: "safe", description: "Cámara vigilancia y botón de pánico" },
  { id: 503, name: "Tótem C5 — Glorieta Minerva", type: "totem_c5", icon: "🆘", lat: 20.6740, lng: -103.3890, level: "safe", description: "Monitoreo C5 — Minerva" },
  { id: 504, name: "Tótem C5 — Av. 16 de Septiembre Centro", type: "totem_c5", icon: "🆘", lat: 20.6780, lng: -103.3450, level: "caution", description: "C5 zona centro" },
  { id: 505, name: "Tótem C5 — Calzada Independencia Norte", type: "totem_c5", icon: "🆘", lat: 20.6900, lng: -103.3400, level: "caution", description: "C5 zona norte" },
  { id: 506, name: "Tótem C5 — Calzada Independencia Sur", type: "totem_c5", icon: "🆘", lat: 20.6600, lng: -103.3400, level: "caution", description: "C5 zona sur" },
  { id: 507, name: "Tótem C5 — Av. Revolución y 8 de Julio", type: "totem_c5", icon: "🆘", lat: 20.6550, lng: -103.3530, level: "caution", description: "C5 zona industrial" },
  { id: 508, name: "Tótem C5 — Periférico — Estadio Akron", type: "totem_c5", icon: "🆘", lat: 20.6820, lng: -103.4620, level: "safe", description: "Monitoreo zona deportiva" },
  { id: 509, name: "Tótem C5 — Av. Federalismo y Circunvalación", type: "totem_c5", icon: "🆘", lat: 20.6720, lng: -103.3560, level: "safe", description: "C5 corredor Federalismo" },
  { id: 510, name: "Tótem C5 — Av. Enrique Díaz de León", type: "totem_c5", icon: "🆘", lat: 20.6850, lng: -103.3620, level: "safe", description: "C5 zona norte centro" },
  { id: 511, name: "Tótem C5 — López Mateos Sur y Mariano Otero", type: "totem_c5", icon: "🆘", lat: 20.6380, lng: -103.4020, level: "safe", description: "Monitoreo corredor sur" },
  { id: 512, name: "Tótem C5 — Zapopan — Av. Ávila Camacho", type: "totem_c5", icon: "🆘", lat: 20.7100, lng: -103.3920, level: "safe", description: "C5 Ávila Camacho norte" },
  { id: 513, name: "Tótem C5 — Zapopan — Av. Patria y Acueducto", type: "totem_c5", icon: "🆘", lat: 20.7050, lng: -103.4050, level: "safe", description: "C5 zona residencial poniente" },
  { id: 514, name: "Tótem C5 — Zapopan — Tabachines", type: "totem_c5", icon: "🆘", lat: 20.7150, lng: -103.3570, level: "caution", description: "C5 Tabachines" },
  { id: 515, name: "Tótem C5 — Zapopan — Tesistán", type: "totem_c5", icon: "🆘", lat: 20.7500, lng: -103.4380, level: "caution", description: "C5 zona suburbana norte" },
  { id: 516, name: "Tótem C5 — Tlaquepaque Centro", type: "totem_c5", icon: "🆘", lat: 20.6395, lng: -103.3130, level: "caution", description: "C5 centro Tlaquepaque" },
  { id: 517, name: "Tótem C5 — Tlaquepaque — Av. Revolución", type: "totem_c5", icon: "🆘", lat: 20.6320, lng: -103.3300, level: "caution", description: "C5 zona industrial" },
  { id: 518, name: "Tótem C5 — Tonalá Centro", type: "totem_c5", icon: "🆘", lat: 20.6260, lng: -103.2370, level: "caution", description: "C5 centro Tonalá" },
  { id: 519, name: "Tótem C5 — Tonalá — Loma Dorada", type: "totem_c5", icon: "🆘", lat: 20.6350, lng: -103.2600, level: "caution", description: "C5 fraccionamiento Loma Dorada" },
  { id: 520, name: "Tótem C5 — Tlajomulco — Santa Fe", type: "totem_c5", icon: "🆘", lat: 20.5260, lng: -103.4100, level: "caution", description: "C5 zona fraccionamientos sur" },
  { id: 521, name: "Tótem C5 — Tlajomulco — Cabecera", type: "totem_c5", icon: "🆘", lat: 20.4750, lng: -103.4420, level: "caution", description: "C5 cabecera Tlajomulco" },
  { id: 522, name: "Tótem C5 — El Salto Centro", type: "totem_c5", icon: "🆘", lat: 20.5170, lng: -103.2755, level: "critical", description: "C5 centro El Salto" },
  { id: 523, name: "Tótem C5 — Periférico Sur — Las Pintas", type: "totem_c5", icon: "🆘", lat: 20.5600, lng: -103.2900, level: "critical", description: "C5 zona industrial sur" },
  { id: 524, name: "Tótem C5 — Av. Niños Héroes y Chapultepec", type: "totem_c5", icon: "🆘", lat: 20.6690, lng: -103.3680, level: "safe", description: "C5 zona Americana" },
  { id: 525, name: "Tótem C5 — Av. México y Yaquis", type: "totem_c5", icon: "🆘", lat: 20.6800, lng: -103.3750, level: "safe", description: "C5 corredor México" },
  { id: 526, name: "Tótem C5 — Av. La Paz y Colonias", type: "totem_c5", icon: "🆘", lat: 20.6770, lng: -103.3670, level: "safe", description: "C5 sector Americana-Providencia" },
  { id: 527, name: "Tótem C5 — Huentitán — Barranca", type: "totem_c5", icon: "🆘", lat: 20.7050, lng: -103.3380, level: "caution", description: "C5 zona Barranca-Huentitán" },
  { id: 528, name: "Tótem C5 — San Juan de Dios", type: "totem_c5", icon: "🆘", lat: 20.6740, lng: -103.3400, level: "caution", description: "C5 zona mercados centro" },
  { id: 529, name: "Tótem C5 — Parque Metropolitano", type: "totem_c5", icon: "🆘", lat: 20.7100, lng: -103.4150, level: "safe", description: "Monitoreo zona recreativa" },
  { id: 530, name: "Tótem C5 — Periférico y Colón", type: "totem_c5", icon: "🆘", lat: 20.6600, lng: -103.3050, level: "caution", description: "C5 periférico oriente" },
  { id: 531, name: "Tótem C5 — Av. 8 de Julio y Periférico", type: "totem_c5", icon: "🆘", lat: 20.6200, lng: -103.3520, level: "caution", description: "C5 sur Guadalajara" },
  { id: 532, name: "Tótem C5 — Av. Circunvalación Oblatos", type: "totem_c5", icon: "🆘", lat: 20.6920, lng: -103.3100, level: "critical", description: "C5 zona Oblatos oriente" },
  { id: 533, name: "Tótem C5 — Av. Gobernador Curiel", type: "totem_c5", icon: "🆘", lat: 20.6600, lng: -103.3250, level: "caution", description: "C5 zona industrial centro" },
  { id: 534, name: "Tótem C5 — González Gallo — Central Camionera", type: "totem_c5", icon: "🆘", lat: 20.6230, lng: -103.3450, level: "caution", description: "Monitoreo terminal y zona" },
  { id: 535, name: "Tótem C5 — Zapopan — Av. Universidad", type: "totem_c5", icon: "🆘", lat: 20.7380, lng: -103.3830, level: "safe", description: "C5 corredor universitario" },
  { id: 536, name: "Tótem C5 — Zapopan — Santa Margarita", type: "totem_c5", icon: "🆘", lat: 20.7350, lng: -103.4100, level: "caution", description: "C5 zona Santa Margarita" },
  { id: 537, name: "Tótem C5 — Periférico y Lázaro Cárdenas", type: "totem_c5", icon: "🆘", lat: 20.7180, lng: -103.3450, level: "caution", description: "C5 cruce vial periférico" },
  { id: 538, name: "Tótem C5 — Zapotlanejo — Acceso Carretero", type: "totem_c5", icon: "🆘", lat: 20.6220, lng: -103.0700, level: "caution", description: "C5 acceso autopista" },
  { id: 539, name: "Tótem C5 — L3 Mi Tren — Basílica", type: "totem_c5", icon: "🆘", lat: 20.7200, lng: -103.3890, level: "safe", description: "C5 estación Basílica L3" },
  { id: 540, name: "Tótem C5 — Av. Mariano Otero Sur", type: "totem_c5", icon: "🆘", lat: 20.6250, lng: -103.4050, level: "safe", description: "C5 corredor Mariano Otero" },
  { id: 541, name: "Tótem C5 — Carretera a Chapala km 15", type: "totem_c5", icon: "🆘", lat: 20.5500, lng: -103.2650, level: "caution", description: "C5 corredor Chapala" },

  // ════════════════════════════════════════════
  //  SENDEROS SEGUROS  (36 puntos)
  // ════════════════════════════════════════════

  { id: 600, name: "Sendero Seguro — Av. Chapultepec", type: "sendero_seguro", icon: "🛤️", lat: 20.6700, lng: -103.3750, level: "safe", description: "Corredor iluminado Chapultepec — 2.8 km" },
  { id: 601, name: "Sendero Seguro — Paseo Alcalde", type: "sendero_seguro", icon: "🛤️", lat: 20.6800, lng: -103.3460, level: "caution", description: "Corredor peatonal con vigilancia" },
  { id: 602, name: "Sendero Seguro — Andador 20 de Noviembre", type: "sendero_seguro", icon: "🛤️", lat: 20.6770, lng: -103.3470, level: "safe", description: "Andador peatonal centro histórico" },
  { id: 603, name: "Sendero Seguro — Av. La Paz", type: "sendero_seguro", icon: "🛤️", lat: 20.6770, lng: -103.3680, level: "safe", description: "Banqueta ampliada e iluminada" },
  { id: 604, name: "Sendero Seguro — Vía RecreActiva tramo Américas", type: "sendero_seguro", icon: "🛤️", lat: 20.6770, lng: -103.3850, level: "safe", description: "Corredor de movilidad activa dominical" },
  { id: 605, name: "Sendero Seguro — Vía RecreActiva tramo Juárez", type: "sendero_seguro", icon: "🛤️", lat: 20.6690, lng: -103.3630, level: "safe", description: "Tramo ciclista-peatonal seguro" },
  { id: 606, name: "Sendero Seguro — Parque Revolución", type: "sendero_seguro", icon: "🛤️", lat: 20.6700, lng: -103.3650, level: "safe", description: "Parque iluminado con vigilancia" },
  { id: 607, name: "Sendero Seguro — Bosque Los Colomos", type: "sendero_seguro", icon: "🛤️", lat: 20.7060, lng: -103.3830, level: "safe", description: "Senderos internos con iluminación y caseta" },
  { id: 608, name: "Sendero Seguro — Parque Metropolitano", type: "sendero_seguro", icon: "🛤️", lat: 20.7080, lng: -103.4150, level: "safe", description: "Parque vigilado — Zapopan" },
  { id: 609, name: "Sendero Seguro — Paseo Hospicio Cabañas", type: "sendero_seguro", icon: "🛤️", lat: 20.6740, lng: -103.3420, level: "safe", description: "Paseo peatonal con iluminación LED" },
  { id: 610, name: "Sendero Seguro — Corredor Artes", type: "sendero_seguro", icon: "🛤️", lat: 20.6760, lng: -103.3570, level: "safe", description: "Corredor cultural iluminado" },
  { id: 611, name: "Sendero Seguro — Calzada del Ejército", type: "sendero_seguro", icon: "🛤️", lat: 20.6840, lng: -103.3300, level: "caution", description: "Calzada con luminarias y cámaras" },
  { id: 612, name: "Sendero Seguro — Andador Cruz del Sur", type: "sendero_seguro", icon: "🛤️", lat: 20.6500, lng: -103.3950, level: "safe", description: "Andador residencial iluminado" },
  { id: 613, name: "Sendero Seguro — Av. México tramo Las Rosas", type: "sendero_seguro", icon: "🛤️", lat: 20.6810, lng: -103.3750, level: "safe", description: "Banqueta ancha y iluminada" },
  { id: 614, name: "Sendero Seguro — Glorieta Chapalita", type: "sendero_seguro", icon: "🛤️", lat: 20.6570, lng: -103.3980, level: "safe", description: "Glorieta y entorno peatonal vigilado" },
  { id: 615, name: "Sendero Seguro — Parque de la Liberación", type: "sendero_seguro", icon: "🛤️", lat: 20.6730, lng: -103.3380, level: "caution", description: "Parque con senderos iluminados" },
  { id: 616, name: "Sendero Seguro — Andador López Cotilla", type: "sendero_seguro", icon: "🛤️", lat: 20.6750, lng: -103.3510, level: "safe", description: "Andador comercial peatonal" },
  { id: 617, name: "Sendero Seguro — Zapopan — Andares", type: "sendero_seguro", icon: "🛤️", lat: 20.7020, lng: -103.4240, level: "safe", description: "Banquetas y cruces mejorados" },
  { id: 618, name: "Sendero Seguro — Zapopan Centro", type: "sendero_seguro", icon: "🛤️", lat: 20.7210, lng: -103.3910, level: "safe", description: "Recorrido turístico peatonal" },
  { id: 619, name: "Sendero Seguro — Camino a CUCEA", type: "sendero_seguro", icon: "🛤️", lat: 20.7360, lng: -103.3830, level: "safe", description: "Corredor universitario iluminado" },
  { id: 620, name: "Sendero Seguro — Tlaquepaque Centro", type: "sendero_seguro", icon: "🛤️", lat: 20.6400, lng: -103.3110, level: "caution", description: "Andador turístico El Parián" },
  { id: 621, name: "Sendero Seguro — Tonalá — Calle de artesanos", type: "sendero_seguro", icon: "🛤️", lat: 20.6260, lng: -103.2360, level: "caution", description: "Corredor comercial iluminado jueves/domingo" },
  { id: 622, name: "Sendero Seguro — Providencia — Av. Terranova", type: "sendero_seguro", icon: "🛤️", lat: 20.6880, lng: -103.3850, level: "safe", description: "Banqueta ensanchada con vegetación" },
  { id: 623, name: "Sendero Seguro — Av. Patria tramo Arcos", type: "sendero_seguro", icon: "🛤️", lat: 20.6980, lng: -103.3860, level: "safe", description: "Corredor vehicular y peatonal iluminado" },
  { id: 624, name: "Sendero Seguro — Ciclovía Federalismo", type: "sendero_seguro", icon: "🛤️", lat: 20.6850, lng: -103.3530, level: "safe", description: "Ciclovía con iluminación y señalización" },
  { id: 625, name: "Sendero Seguro — Línea Verde GDL", type: "sendero_seguro", icon: "🛤️", lat: 20.6610, lng: -103.3640, level: "safe", description: "Parque lineal con senderos nocturnos" },
  { id: 626, name: "Sendero Seguro — Jardín del Santuario", type: "sendero_seguro", icon: "🛤️", lat: 20.6740, lng: -103.3400, level: "caution", description: "Jardín iluminado con bancas seguras" },
  { id: 627, name: "Sendero Seguro — Parque Agua Azul", type: "sendero_seguro", icon: "🛤️", lat: 20.6650, lng: -103.3510, level: "safe", description: "Parque con senderos perimetrales seguros" },
  { id: 628, name: "Sendero Seguro — Av. Hidalgo Centro", type: "sendero_seguro", icon: "🛤️", lat: 20.6780, lng: -103.3500, level: "safe", description: "Eje peatonal con luminarias LED" },
  { id: 629, name: "Sendero Seguro — Paseo Degollado", type: "sendero_seguro", icon: "🛤️", lat: 20.6750, lng: -103.3440, level: "safe", description: "Paseo cultural — Teatro Degollado" },
  { id: 630, name: "Sendero Seguro — Parque González Gallo", type: "sendero_seguro", icon: "🛤️", lat: 20.6450, lng: -103.3370, level: "caution", description: "Parque con vigilancia nocturna parcial" },
  { id: 631, name: "Sendero Seguro — Camellón Lázaro Cárdenas", type: "sendero_seguro", icon: "🛤️", lat: 20.7100, lng: -103.3400, level: "caution", description: "Camellón con cruces peatonales seguros" },
  { id: 632, name: "Sendero Seguro — Av. Acueducto Zapopan", type: "sendero_seguro", icon: "🛤️", lat: 20.7030, lng: -103.4050, level: "safe", description: "Corredor residencial — banquetas anchas" },
  { id: 633, name: "Sendero Seguro — Ciclovia Alcalde-Belisario", type: "sendero_seguro", icon: "🛤️", lat: 20.6900, lng: -103.3490, level: "safe", description: "Ciclovía con alumbrado LED" },
  { id: 634, name: "Sendero Seguro — Tlajomulco — Paseo Santa Fe", type: "sendero_seguro", icon: "🛤️", lat: 20.5270, lng: -103.4080, level: "caution", description: "Andador residencial zona sur" },
  { id: 635, name: "Sendero Seguro — Av. Normalistas", type: "sendero_seguro", icon: "🛤️", lat: 20.6870, lng: -103.3580, level: "safe", description: "Corredor con vigilancia universitaria" },

  // ════════════════════════════════════════════
  //  REFUGIOS / ALBERGUES  (12 puntos)
  // ════════════════════════════════════════════

  { id: 700, name: "Refugio DIF Jalisco para Mujeres", type: "refugio", icon: "🏠", lat: 20.6620, lng: -103.3650, level: "safe", description: "Refugio estatal para mujeres víctimas de violencia" },
  { id: 701, name: "Albergue Municipal GDL — Calle 28", type: "refugio", icon: "🏠", lat: 20.6730, lng: -103.3500, level: "caution", description: "Albergue temporal municipal" },
  { id: 702, name: "Casa Hogar CREA Jalisco", type: "refugio", icon: "🏠", lat: 20.6580, lng: -103.3530, level: "safe", description: "Centro de rehabilitación y albergue juvenil" },
  { id: 703, name: "Refugio para Migrantes — FM4 Paso Libre", type: "refugio", icon: "🏠", lat: 20.6650, lng: -103.3380, level: "caution", description: "Albergue para personas en tránsito" },
  { id: 704, name: "DIF Zapopan — Casa de Asistencia", type: "refugio", icon: "🏠", lat: 20.7200, lng: -103.3920, level: "safe", description: "Asistencia temporal — Zapopan" },
  { id: 705, name: "Refugio para Menores — DIF GDL", type: "refugio", icon: "🏠", lat: 20.6700, lng: -103.3430, level: "safe", description: "Albergue infantil DIF" },
  { id: 706, name: "Casa de Medio Camino — Violencia Familiar", type: "refugio", icon: "🏠", lat: 20.6750, lng: -103.3600, level: "safe", description: "Casa transitoria para víctimas" },
  { id: 707, name: "Albergue Ejército de Salvación GDL", type: "refugio", icon: "🏠", lat: 20.6680, lng: -103.3480, level: "caution", description: "Albergue nocturno y alimentación" },
  { id: 708, name: "Refugio CAVAC Tlaquepaque", type: "refugio", icon: "🏠", lat: 20.6380, lng: -103.3130, level: "caution", description: "Centro de atención a víctimas" },
  { id: 709, name: "DIF Tonalá — Casa de Día", type: "refugio", icon: "🏠", lat: 20.6240, lng: -103.2350, level: "caution", description: "Asistencia temporal diurna" },
  { id: 710, name: "Albergue Cruz Roja Emergencias", type: "refugio", icon: "🏠", lat: 20.6640, lng: -103.3580, level: "safe", description: "Albergue para situaciones de emergencia y desastres" },
  { id: 711, name: "DIF Tlajomulco — Refugio Temporal", type: "refugio", icon: "🏠", lat: 20.4740, lng: -103.4440, level: "caution", description: "Refugio temporal municipal sur ZMG" },

  // ════════════════════════════════════════════
  //  CAJEROS SEGUROS  (18 puntos)
  // ════════════════════════════════════════════

  { id: 800, name: "Cajero Seguro — Plaza Galerías", type: "cajero_seguro", icon: "🏧", lat: 20.6810, lng: -103.3970, level: "safe", description: "Zona ATM con vigilancia y CCTV en plaza comercial" },
  { id: 801, name: "Cajero Seguro — Plaza Andares", type: "cajero_seguro", icon: "🏧", lat: 20.7020, lng: -103.4240, level: "safe", description: "ATM vigilado en centro comercial" },
  { id: 802, name: "Cajero Seguro — Plaza del Sol", type: "cajero_seguro", icon: "🏧", lat: 20.6520, lng: -103.3970, level: "safe", description: "Cajeros en plaza con seguridad privada" },
  { id: 803, name: "Cajero Seguro — Plaza Patria", type: "cajero_seguro", icon: "🏧", lat: 20.7100, lng: -103.3750, level: "safe", description: "Zona ATM en centro comercial vigilado" },
  { id: 804, name: "Cajero Seguro — Centro Magno", type: "cajero_seguro", icon: "🏧", lat: 20.6750, lng: -103.3880, level: "safe", description: "Cajeros en zona comercial Minerva" },
  { id: 805, name: "Cajero Seguro — Plaza México", type: "cajero_seguro", icon: "🏧", lat: 20.6450, lng: -103.3990, level: "safe", description: "ATM plaza comercial sur" },
  { id: 806, name: "Cajero Seguro — Sucursal Bancaria Chapultepec 200", type: "cajero_seguro", icon: "🏧", lat: 20.6690, lng: -103.3700, level: "safe", description: "Sucursal bancaria con guardia 24h" },
  { id: 807, name: "Cajero Seguro — La Gran Plaza Guadalajara", type: "cajero_seguro", icon: "🏧", lat: 20.6100, lng: -103.4050, level: "safe", description: "ATM centro comercial Tlajomulco" },
  { id: 808, name: "Cajero Seguro — Plaza Ciudadela", type: "cajero_seguro", icon: "🏧", lat: 20.7350, lng: -103.3850, level: "safe", description: "Cajero ATM vigilado Zapopan norte" },
  { id: 809, name: "Cajero Seguro — Soriana Tlaquepaque", type: "cajero_seguro", icon: "🏧", lat: 20.6380, lng: -103.3150, level: "caution", description: "ATM en tienda con seguridad" },
  { id: 810, name: "Cajero Seguro — Plaza Universitaria", type: "cajero_seguro", icon: "🏧", lat: 20.6560, lng: -103.3260, level: "safe", description: "ATM zona CUCEI" },
  { id: 811, name: "Cajero Seguro — Sucursal Bancaria Av. Vallarta 1500", type: "cajero_seguro", icon: "🏧", lat: 20.6760, lng: -103.3800, level: "safe", description: "Sucursal con vigilancia y cámaras" },
  { id: 812, name: "Cajero Seguro — Walmart Periférico Sur", type: "cajero_seguro", icon: "🏧", lat: 20.6200, lng: -103.3500, level: "caution", description: "ATM en comercio con vigilancia" },
  { id: 813, name: "Cajero Seguro — Plaza Tepeyac Zapopan", type: "cajero_seguro", icon: "🏧", lat: 20.7200, lng: -103.4050, level: "safe", description: "ATM plaza vigilada" },
  { id: 814, name: "Cajero Seguro — Costco Vallarta", type: "cajero_seguro", icon: "🏧", lat: 20.6740, lng: -103.4000, level: "safe", description: "ATM en comercio con estacionamiento vigilado" },
  { id: 815, name: "Cajero Seguro — Walmart Mariano Otero", type: "cajero_seguro", icon: "🏧", lat: 20.6400, lng: -103.4030, level: "safe", description: "Cajero dentro de tienda vigilada" },
  { id: 816, name: "Cajero Seguro — Centro Comercial Tonalá", type: "cajero_seguro", icon: "🏧", lat: 20.6260, lng: -103.2400, level: "caution", description: "ATM en plaza comercial local" },
  { id: 817, name: "Cajero Seguro — HEB López Mateos", type: "cajero_seguro", icon: "🏧", lat: 20.6700, lng: -103.3960, level: "safe", description: "ATM en tienda con seguridad privada" },

  // ════════════════════════════════════════════
  //  FARMACIAS 24H  (20 puntos)
  // ════════════════════════════════════════════

  { id: 900, name: "Farmacia Guadalajara — Av. México 2200", type: "farmacia_24h", icon: "💊", lat: 20.6800, lng: -103.3780, level: "safe", description: "Farmacia 24 horas — zona Providencia" },
  { id: 901, name: "Farmacia Guadalajara — Chapultepec 300", type: "farmacia_24h", icon: "💊", lat: 20.6700, lng: -103.3710, level: "safe", description: "Farmacia 24 horas — Chapultepec" },
  { id: 902, name: "Farmacia Guadalajara — Av. Vallarta 2900", type: "farmacia_24h", icon: "💊", lat: 20.6750, lng: -103.3950, level: "safe", description: "Farmacia 24 horas — Vallarta poniente" },
  { id: 903, name: "Farmacia Benavides — Av. Américas 1500", type: "farmacia_24h", icon: "💊", lat: 20.6780, lng: -103.3870, level: "safe", description: "Farmacia nocturna — zona Américas" },
  { id: 904, name: "Farmacia Guadalajara — 16 de Septiembre Centro", type: "farmacia_24h", icon: "💊", lat: 20.6770, lng: -103.3450, level: "caution", description: "Farmacia 24h — centro histórico" },
  { id: 905, name: "Farmacia Guadalajara — Av. Patria y Periférico", type: "farmacia_24h", icon: "💊", lat: 20.7180, lng: -103.3700, level: "safe", description: "Farmacia 24h — Zapopan" },
  { id: 906, name: "Farmacia Guadalajara — Av. Ávila Camacho 1800", type: "farmacia_24h", icon: "💊", lat: 20.7100, lng: -103.3920, level: "safe", description: "Farmacia 24h — corredor Zapopan" },
  { id: 907, name: "Farmacia Guadalajara — Tlaquepaque Centro", type: "farmacia_24h", icon: "💊", lat: 20.6400, lng: -103.3130, level: "caution", description: "Farmacia 24h — Tlaquepaque" },
  { id: 908, name: "Farmacia Guadalajara — Tonalá Centro", type: "farmacia_24h", icon: "💊", lat: 20.6250, lng: -103.2370, level: "caution", description: "Farmacia 24h — Tonalá" },
  { id: 909, name: "Farmacia Guadalajara — López Mateos Sur 5000", type: "farmacia_24h", icon: "💊", lat: 20.6100, lng: -103.4060, level: "safe", description: "Farmacia 24h — corredor sur" },
  { id: 910, name: "Farmacia Guadalajara — Av. Federalismo Norte", type: "farmacia_24h", icon: "💊", lat: 20.6900, lng: -103.3540, level: "safe", description: "Farmacia 24h — corredor Federalismo" },
  { id: 911, name: "Farmacia Benavides — Periférico Sur", type: "farmacia_24h", icon: "💊", lat: 20.6300, lng: -103.3580, level: "caution", description: "Farmacia nocturna sur GDL" },
  { id: 912, name: "Farmacia Guadalajara — Santa Fe Tlajomulco", type: "farmacia_24h", icon: "💊", lat: 20.5250, lng: -103.4100, level: "caution", description: "Farmacia 24h — zona residencial sur" },
  { id: 913, name: "Farmacia Guadalajara — El Salto Centro", type: "farmacia_24h", icon: "💊", lat: 20.5170, lng: -103.2760, level: "critical", description: "Farmacia 24h — El Salto" },
  { id: 914, name: "Farmacia del Ahorro — Zapopan Atemajac", type: "farmacia_24h", icon: "💊", lat: 20.7280, lng: -103.4000, level: "safe", description: "Farmacia nocturna — norte ZMG" },
  { id: 915, name: "Farmacia Guadalajara — Mariano Otero 3000", type: "farmacia_24h", icon: "💊", lat: 20.6400, lng: -103.4020, level: "safe", description: "Farmacia 24h — corredor Otero" },
  { id: 916, name: "Farmacia Guadalajara — Periférico Oriente", type: "farmacia_24h", icon: "💊", lat: 20.6600, lng: -103.3050, level: "caution", description: "Farmacia 24h — zona oriente" },
  { id: 917, name: "Farmacia Benavides — Andares Zapopan", type: "farmacia_24h", icon: "💊", lat: 20.7010, lng: -103.4230, level: "safe", description: "Farmacia 24h — zona comercial poniente" },
  { id: 918, name: "Farmacia Guadalajara — Calzada Independencia 500", type: "farmacia_24h", icon: "💊", lat: 20.6700, lng: -103.3400, level: "caution", description: "Farmacia 24h — eje centro" },
  { id: 919, name: "Farmacia Guadalajara — Zapotlanejo Centro", type: "farmacia_24h", icon: "💊", lat: 20.6230, lng: -103.0690, level: "caution", description: "Farmacia 24h — municipio periférico" },

  // ════════════════════════════════════════════
  //  ESTACIONAMIENTOS VIGILADOS  (15 puntos)
  // ════════════════════════════════════════════

  { id: 1000, name: "Estacionamiento Plaza Galerías", type: "estacionamiento_vigilado", icon: "🅿️", lat: 20.6815, lng: -103.3960, level: "safe", description: "Estacionamiento con CCTV 24h y seguridad privada" },
  { id: 1001, name: "Estacionamiento Plaza Andares", type: "estacionamiento_vigilado", icon: "🅿️", lat: 20.7025, lng: -103.4230, level: "safe", description: "Estacionamiento vigilado — acceso controlado" },
  { id: 1002, name: "Estacionamiento Centro Histórico — Degollado", type: "estacionamiento_vigilado", icon: "🅿️", lat: 20.6755, lng: -103.3440, level: "caution", description: "Estacionamiento público con vigilancia" },
  { id: 1003, name: "Estacionamiento Plaza del Sol", type: "estacionamiento_vigilado", icon: "🅿️", lat: 20.6525, lng: -103.3960, level: "safe", description: "Estacionamiento con guardias y cámaras" },
  { id: 1004, name: "Estacionamiento Plaza Patria", type: "estacionamiento_vigilado", icon: "🅿️", lat: 20.7105, lng: -103.3740, level: "safe", description: "Estacionamiento controlado" },
  { id: 1005, name: "Estacionamiento Centro Magno", type: "estacionamiento_vigilado", icon: "🅿️", lat: 20.6755, lng: -103.3870, level: "safe", description: "Estacionamiento cubierto y vigilado" },
  { id: 1006, name: "Estacionamiento La Gran Plaza", type: "estacionamiento_vigilado", icon: "🅿️", lat: 20.6105, lng: -103.4040, level: "safe", description: "Estacionamiento con CCTV — zona sur" },
  { id: 1007, name: "Estacionamiento Expo Guadalajara", type: "estacionamiento_vigilado", icon: "🅿️", lat: 20.6590, lng: -103.4020, level: "safe", description: "Estacionamiento con vigilancia para eventos" },
  { id: 1008, name: "Estacionamiento Estadio Akron", type: "estacionamiento_vigilado", icon: "🅿️", lat: 20.6825, lng: -103.4610, level: "safe", description: "Estacionamiento vigilado zona deportiva" },
  { id: 1009, name: "Estacionamiento Mercado San Juan de Dios", type: "estacionamiento_vigilado", icon: "🅿️", lat: 20.6745, lng: -103.3400, level: "caution", description: "Estacionamiento público con cámaras" },
  { id: 1010, name: "Estacionamiento Plaza Ciudadela Zapopan", type: "estacionamiento_vigilado", icon: "🅿️", lat: 20.7350, lng: -103.3860, level: "safe", description: "Estacionamiento vigilado norte ZMG" },
  { id: 1011, name: "Estacionamiento Forum Tlaquepaque", type: "estacionamiento_vigilado", icon: "🅿️", lat: 20.6420, lng: -103.3090, level: "caution", description: "Estacionamiento con control y cámaras" },
  { id: 1012, name: "Estacionamiento Soriana Periférico", type: "estacionamiento_vigilado", icon: "🅿️", lat: 20.6600, lng: -103.3060, level: "caution", description: "Estacionamiento comercial vigilado" },
  { id: 1013, name: "Estacionamiento Aeropuerto GDL", type: "estacionamiento_vigilado", icon: "🅿️", lat: 20.5218, lng: -103.3110, level: "safe", description: "Estacionamiento con seguridad federal" },
  { id: 1014, name: "Estacionamiento Central Camionera Nueva", type: "estacionamiento_vigilado", icon: "🅿️", lat: 20.6235, lng: -103.3450, level: "caution", description: "Estacionamiento terminal con CCTV" },
];
