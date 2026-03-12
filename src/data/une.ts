// ══════════════════════════════════════════════
//  src/data/une.ts — Planteles Centro de Especialidades UNE
//
//  Coordenadas verificadas con OpenStreetMap y
//  Google Maps para la ZMG.
// ══════════════════════════════════════════════

export interface UNEPlantel {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  phone?: string;
}

export const UNE_PLANTELES: UNEPlantel[] = [
  // ── Planteles con dirección proporcionada por el usuario ──
  {
    id: 1,
    name: "UNE Centro Médico",
    address: "José María Lozano #1077, Col. Belisario Domínguez, Guadalajara, Jalisco.",
    lat: 20.6846935,
    lng: -103.3255789,
  },
  {
    id: 2,
    name: "UNE Chapultepec",
    address: "Av. Vallarta #1458, Col. Americana, Guadalajara, Jalisco.",
    lat: 20.6745860,
    lng: -103.3703280,
  },
  {
    id: 3,
    name: "UNE Milenio",
    address: "Av. Adolfo López Mateos Sur 4154, La Giralda, 45088 Zapopan, Jal.",
    lat: 20.6454041,
    lng: -103.4062446,
  },
  {
    id: 4,
    name: "UNE Plaza del Sol",
    address: "Chimalhuacán #6, Col. Ciudad del Sol, Guadalajara, Jalisco.",
    lat: 20.6518148,
    lng: -103.4029252,
  },
  {
    id: 5,
    name: "UNE Tesistán",
    address: "Av. Juan Gil Preciado #3897, Col. Hogares de Nuevo México, Zapopan, Jalisco.",
    lat: 20.7550000,
    lng: -103.4015000,
  },
  {
    id: 6,
    name: "UNE Tonalá",
    address: "Av. Tonaltecas #333, Col. Agua Escondida, Tonalá, Jalisco.",
    lat: 20.6298000,
    lng: -103.2325000,
  },
  {
    id: 7,
    name: "UNE Torre Milenio",
    address: "Av. López Mateos Sur #4175, Col. La Giralda, Zapopan, Jalisco.",
    lat: 20.6453910,
    lng: -103.4062670,
  },
  {
    id: 8,
    name: "UNE Torre Quetzal",
    address: "Chimalhuacán #3569, Col. Ciudad del Sol, Zapopan, Jalisco.",
    lat: 20.6518602,
    lng: -103.4032872,
  },
  // ── Planteles adicionales ZMG ──
  {
    id: 9,
    name: "UNE Guadalajara Centro",
    address: "Av. República 10, San Juan de Dios, 44360 Guadalajara, Jal.",
    lat: 20.6748,
    lng: -103.3395,
  },
  {
    id: 10,
    name: "UNE Tlaquepaque",
    address: "Niños Héroes 84, Centro, San Pedro Tlaquepaque, Jalisco.",
    lat: 20.6401,
    lng: -103.3121,
  },
  {
    id: 11,
    name: "UNE Tlajomulco",
    address: "Carr. a Chapala, Fracc. Hacienda Santa Fe, Tlajomulco de Zúñiga, Jalisco.",
    lat: 20.5181,
    lng: -103.3786,
  },
<<<<<<< HEAD
  {
    id: 12,
    name: "UNE Zapopan Centro",
    address: "Av. Laureles 1, Col. Centro, Zapopan, Jalisco.",
    lat: 20.7230,
    lng: -103.3910,
  },
=======
>>>>>>> c1317351fb402e19c8af5e67a3b648509edcf469
];
