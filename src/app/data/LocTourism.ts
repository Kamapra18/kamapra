export interface TourismLocation {
  id: number;
  name: string;
  island: string;
  province: string;
  description: string;
  latitude: number;
  longitude: number;
}

export const TOURISM_LOCATIONS: TourismLocation[] = [
  // Sumatera
  {
    id: 1,
    name: "Danau Toba",
    island: "Sumatera",
    province: "Sumatera Utara",
    description:
      "Danau vulkanik terbesar di dunia dan salah satu keajaiban alam Indonesia.",
    latitude: 2.6147,
    longitude: 98.6534,
  },
  {
    id: 2,
    name: "Jam Gadang",
    island: "Sumatera",
    province: "Sumatera Barat",
    description:
      "Ikon kota Bukittinggi yang memiliki jam raksasa di empat sisi menaranya.",
    latitude: -0.3068,
    longitude: 100.3692,
  },

  // Jawa
  {
    id: 3,
    name: "Candi Borobudur",
    island: "Jawa",
    province: "Jawa Tengah",
    description:
      "Candi Buddha terbesar di dunia dan Situs Warisan Dunia UNESCO.",
    latitude: -7.6079,
    longitude: 110.2038,
  },
  {
    id: 4,
    name: "Gunung Bromo",
    island: "Jawa",
    province: "Jawa Timur",
    description:
      "Gunung berapi aktif yang terkenal dengan pemandangan matahari terbit yang spektakuler.",
    latitude: -7.9425,
    longitude: 112.953,
  },
  {
    id: 5,
    name: "Monumen Nasional (Monas)",
    island: "Jawa",
    province: "DKI Jakarta",
    description:
      "Monumen peringatan setinggi 132 meter yang terletak tepat di tengah Lapangan Medan Merdeka.",
    latitude: -6.1754,
    longitude: 106.8272,
  },

  // Bali
  {
    id: 6,
    name: "Pura Tanah Lot",
    island: "Bali",
    province: "Bali",
    description:
      "Pura laut yang ikonik di atas formasi batu karang, terkenal dengan pemandangan sunset.",
    latitude: -8.6212,
    longitude: 115.0868,
  },
  {
    id: 7,
    name: "Ubud Monkey Forest",
    island: "Bali",
    province: "Bali",
    description:
      "Cagar alam dan kompleks candi yang menjadi rumah bagi ratusan kera ekor panjang.",
    latitude: -8.5194,
    longitude: 115.2606,
  },

  // Nusa Tenggara
  {
    id: 8,
    name: "Taman Nasional Komodo",
    island: "Nusa Tenggara",
    province: "Nusa Tenggara Timur",
    description:
      "Habitat asli hewan purba Komodo dan memiliki keindahan bawah laut yang luar biasa.",
    latitude: -8.5768,
    longitude: 119.4674,
  },
  {
    id: 9,
    name: "Gunung Rinjani",
    island: "Nusa Tenggara",
    province: "Nusa Tenggara Barat",
    description:
      "Gunung berapi kedua tertinggi di Indonesia dengan Danau Segara Anak yang memukau.",
    latitude: -8.4113,
    longitude: 116.4573,
  },

  // Kalimantan
  {
    id: 10,
    name: "Taman Nasional Tanjung Puting",
    island: "Kalimantan",
    province: "Kalimantan Tengah",
    description: "Kawasan konservasi orangutan terbesar di dunia.",
    latitude: -2.9366,
    longitude: 111.9429,
  },
  {
    id: 11,
    name: "Kepulauan Derawan",
    island: "Kalimantan",
    province: "Kalimantan Timur",
    description:
      "Surga tropis dengan keanekaragaman hayati laut yang kaya, termasuk penyu dan ubur-ubur tak menyengat.",
    latitude: 2.2227,
    longitude: 118.2435,
  },

  // Sulawesi
  {
    id: 12,
    name: "Taman Nasional Bunaken",
    island: "Sulawesi",
    province: "Sulawesi Utara",
    description:
      "Taman laut yang terkenal dengan keanekaragaman terumbu karang dan biota lautnya.",
    latitude: 1.6258,
    longitude: 124.7641,
  },
  {
    id: 13,
    name: "Tana Toraja",
    island: "Sulawesi",
    province: "Sulawesi Selatan",
    description:
      "Kawasan dataran tinggi yang terkenal dengan budaya pemakaman unik dan rumah adat Tongkonan.",
    latitude: -2.9723,
    longitude: 119.8893,
  },

  // Maluku
  {
    id: 14,
    name: "Banda Neira",
    island: "Maluku",
    province: "Maluku",
    description:
      "Pulau bersejarah yang pernah menjadi pusat perdagangan pala dunia dengan benteng-benteng peninggalan kolonial.",
    latitude: -4.524,
    longitude: 129.9048,
  },

  // Papua
  {
    id: 15,
    name: "Raja Ampat",
    island: "Papua",
    province: "Papua Barat Daya",
    description:
      "Surga penyelam dengan keanekaragaman hayati laut tertinggi di dunia.",
    latitude: -0.2333,
    longitude: 130.5167,
  },
  {
    id: 16,
    name: "Danau Sentani",
    island: "Papua",
    province: "Papua",
    description:
      "Danau luas yang dikelilingi perbukitan hijau, dekat dengan Jayapura.",
    latitude: -2.6052,
    longitude: 140.5739,
  },
];
