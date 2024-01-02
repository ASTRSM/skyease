export type Flight = {
  id: number
  airport: string
  airline: string
  departure_city: string
  arrival_city: string
  departure_time: string
  arrival_time: string
  price: string
}

export const flights: Flight[] = [
  {
    id: 1,
    airport: "MBJ",
    airline: "BHP Billiton Limited",
    departure_city: "JM",
    arrival_city: "US",
    departure_time: "1:19",
    arrival_time: "1:02",
    price: "Rp 1,778,298.01"
  },
  {
    id: 2,
    airport: "KDT",
    airline: "Western Asset",
    departure_city: "TH",
    arrival_city: "GY",
    departure_time: "18:02",
    arrival_time: "20:39",
    price: "Rp 1,847,628.77"
  },
  {
    id: 3,
    airport: "KJP",
    airline: "Arena Pharmaceuticals, Inc.",
    departure_city: "JP",
    arrival_city: "CN",
    departure_time: "22:31",
    arrival_time: "15:45",
    price: "Rp 1,220,209.08"
  },
  {
    id: 4,
    airport: "KYA",
    airline: "Diffusion Pharmaceuticals Inc.",
    departure_city: "TR",
    arrival_city: "US",
    departure_time: "14:15",
    arrival_time: "10:30",
    price: "Rp 1,329,627.99"
  },
  {
    id: 5,
    airport: "CTH",
    airline: "Honda Motor Company, Ltd.",
    departure_city: "US",
    arrival_city: "US",
    departure_time: "8:30",
    arrival_time: "11:45",
    price: "Rp 1,568,353.47"
  },
  {
    id: 6,
    airport: "FNE",
    airline: "Eclipse Resources Corporation",
    departure_city: "PG",
    arrival_city: "US",
    departure_time: "16:31",
    arrival_time: "13:46",
    price: "Rp 1,277,378.79"
  },
  {
    id: 7,
    airport: "DKS",
    airline: "Bank of America Corporation",
    departure_city: "RU",
    arrival_city: "BR",
    departure_time: "19:53",
    arrival_time: "14:55",
    price: "Rp 1,205,038.87"
  },
  {
    id: 8,
    airport: "DVK",
    airline: "IF Bancorp, Inc.",
    departure_city: "CA",
    arrival_city: "PG",
    departure_time: "8:07",
    arrival_time: "0:28",
    price: "Rp 1,401,822.70"
  },
  {
    id: 9,
    airport: "HIF",
    airline: "Greenlight Reinsurance, Ltd.",
    departure_city: "US",
    arrival_city: "US",
    departure_time: "0:20",
    arrival_time: "17:27",
    price: "Rp 1,215,823.66"
  },
  {
    id: 10,
    airport: "POX",
    airline: "MGIC Investment Corporation",
    departure_city: "FR",
    arrival_city: "VE",
    departure_time: "2:48",
    arrival_time: "8:27",
    price: "Rp 1,553,581.26"
  },
  {
    id: 11,
    airport: "AAP",
    airline: "Peoples Bancorp Inc.",
    departure_city: "US",
    arrival_city: "PG",
    departure_time: "4:19",
    arrival_time: "5:09",
    price: "Rp 1,108,603.57"
  },
  {
    id: 12,
    airport: "HUD",
    airline: "National Storage Affiliates Trust",
    departure_city: "US",
    arrival_city: "US",
    departure_time: "19:38",
    arrival_time: "16:45",
    price: "Rp 1,232,896.04"
  },
  {
    id: 13,
    airport: "TFB",
    airline: "NeuroMetrix, Inc.",
    departure_city: "PG",
    arrival_city: "BR",
    departure_time: "15:20",
    arrival_time: "18:07",
    price: "Rp 1,627,451.05"
  },
  {
    id: 14,
    airport: "DSN",
    airline: "Commerce Bancshares, Inc.",
    departure_city: "CN",
    arrival_city: "PT",
    departure_time: "4:23",
    arrival_time: "8:11",
    price: "Rp 1,530,552.36"
  },
  {
    id: 15,
    airport: "SNP",
    airline: "Essex Property Trust, Inc.",
    departure_city: "US",
    arrival_city: "US",
    departure_time: "3:09",
    arrival_time: "11:59",
    price: "Rp 1,554,758.00"
  }
]

export const metadata = {
  departure_cities: ['JM', 'TH', 'JP', 'TR', 'US', 'PG', 'RU', 'CA', 'FR', 'CN'],
  arrival_cities: ['US', 'GY', 'CN', 'PG', 'BR', 'VT', 'PE'],
  departure_times: ['1:19', '18:02', '22:31', '14:15', '8:30', '16:31', '19:53', '8:07', '0:20', '2:48', '4:19', '19:38', '15:20', '4:23', '3:09'],
  arrival_times: ['1:02', '20:39', '15:45', '10:30', '11:45', '13:46', '14:55', '0:28', '17:27', '8:27', '5:09', '16:45', '18:07', '8:11', '11:59'],
};

export function getFlights(filterObject: Partial<Flight>) {
  const cleanedFilterObject = Object.fromEntries(
    Object.entries(filterObject).filter(([_, value]) => value !== '')
  );

  return flights.filter((obj) =>
    Object.keys(cleanedFilterObject).every(
      (key) => obj[key as keyof Flight] === cleanedFilterObject[key as keyof Flight]
    )
  )
}

export function getAllFlights() {
  return flights
}

export function getMetadata() {
  return metadata
}
