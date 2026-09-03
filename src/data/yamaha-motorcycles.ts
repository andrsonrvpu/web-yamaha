export interface Motorcycle {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  gallery: string[];
  price: number;
  priceLabel: string;
  description: string;
  colors: { name: string; hex: string; image?: string }[];
  highlights: string[];
  specifications: Record<string, string>;
  isNew: boolean;
  featured: boolean;
  available: boolean;
  whatsappMessage: string;
  featureBanners?: { title: string; description: string; image: string }[];
}

export const CATEGORIES = [
  "URBANAS",
  "SUPER DEPORTIVAS",
  "HYPER NAKED",
  "COMPETICIÓN",
  "ADVENTURE TOURING",
  "SPORT TOURING",
  "SCOOTERS",
  "SPORT HERITAGE",
] as const;

export const motorcycles: Motorcycle[] = [
  {
    id: "crypton-finn",
    slug: "crypton-finn",
    name: "CRYPTON FINN",
    category: "URBANAS",
    image: "/images/motorcycles/crypton-finn.png",
    gallery: ["/images/motorcycles/crypton-finn.png"],
    price: 9100000,
    priceLabel: "Desde",
    description: "La CRYPTON FINN de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#d1db11",
            "image": "/images/motorcycles/colors/crypton-finn-color-0.png"
          },
      {
            "name": "Color 2",
            "hex": "#294935",
            "image": "/images/motorcycles/colors/crypton-finn-color-1.png"
          },
      {
            "name": "Color 3",
            "hex": "#6d6d6d",
            "image": "/images/motorcycles/colors/crypton-finn-color-2.png"
          },
      {
            "name": "Color 4",
            "hex": "#d3d3d3",
            "image": "/images/motorcycles/colors/crypton-finn-color-3.png"
          }
],    featureBanners: [
      {
            "title": "Inyección Electrónica (FI):",
            "description": "La inyección electrónica es un sistema que suministra de forma precisa el combustible que el motor necesita según sus condiciones de funcionamiento, lo que se traduce en un encendido fácil, una aceleración suave, menor necesidad de mantenimiento, óptimo aprovechamiento del combustible, menor impacto ambiental y un desempeño confiable en cualquier parte del país.",
            "image": "/images/motorcycles/features/crypton-finn-feature-0.jpg"
          },
      {
            "title": "Sistema UBS (Unified Brake System):",
            "description": "El UBS (Mecánico a través de una guaya), es un sistema de frenado vinculado entre el freno delantero y el trasero. Su propósito principal es mejorar la estabilidad y el control al frenar. Cuando el conductor acciona el freno trasero, el sistema distribuye automáticamente una parte de esa fuerza al freno delantero, logrando una frenada equilibrada y eficiente.",
            "image": "/images/motorcycles/features/crypton-finn-feature-1.jpg"
          },
      {
            "title": "Amigable con el medio ambiente",
            "description": "Las normas ambientales EURO son estándares internacionales que regulan los límites aceptables de emisiones contaminantes en vehículos, con el objetivo de reducir la contaminación del aire. Estas normas evalúan gases como óxidos de nitrógeno (NOx), hidrocarburos (HC), monóxido de carbono (CO) y partículas. En Colombia, desde el 1 de enero de 2021, se exige el cumplimiento de la norma Euro 3 para todas las motocicletas nuevas, garantizando una operación más limpia y responsable con el medio ambiente.",
            "image": "/images/motorcycles/features/crypton-finn-feature-2.jpg"
          },
      {
            "title": "Caja Rotativa:",
            "description": "La caja de velocidades, ahora rotativa, permite pasar de cuarta a neutra cuando la motocicleta está detenida, facilitando la espera y agilizando el arranque.",
            "image": "/images/motorcycles/features/crypton-finn-feature-3.jpg"
          },
      {
            "title": "Sistema AHO (Automatic Headlight On)",
            "description": "El sistema AHO (Automatic Headlight On) enciende automáticamente las luces al arrancar el motor, aumentando la visibilidad del motociclista en cualquier condición ambiental como noche, lluvia o neblina, lo que contribuye a reducir el riesgo de accidentes. Además, las luces de posición y las direccionales delanteras están integradas, complementando el estilo moderno de la Crypton Finn.",
            "image": "/images/motorcycles/features/crypton-finn-feature-4.jpg"
          },
      {
            "title": "Panel de instrumentos renovado:",
            "description": "El panel de instrumentos de la Crypton Finn incluye una completa gama de indicadores que facilitan la lectura y el control del vehículo: direccionales izquierda y derecha, indicador de marcha, de punto neutro, de fallo de motor, de voltaje bajo de batería, de luz alta, de nivel de combustible, además de odómetro y velocímetro, brindando al conductor información clara y precisa para una conducción segura y eficiente.",
            "image": "/images/motorcycles/features/crypton-finn-feature-5.jpg"
          },
      {
            "title": "Baúl de gran capacidad:",
            "description": "Con su baúl de mayor capacidad, la Crypton Finn permite llevar artículospersonales cómodamente.",
            "image": "/images/motorcycles/features/crypton-finn-feature-6.jpg"
          },
      {
            "title": "Protector de cadena Completo:",
            "description": "Protege del polvo y reduce el mantenimiento, prolongando la vida útil de la cadena.",
            "image": "/images/motorcycles/features/crypton-finn-feature-7.jpg"
          }
],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "114 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "100 kg",
      "Potencia Máxima": "8.85 Hp a 7000 rpm",
      "Torque máximo": "9.2 Nm a 5500 rpm",
      "Tipo de motor": "4 Tiempos SOHC, refrigerado por aire",
      "Largo total": "1940 mm",
      "Ancho total": "710 mm",
      "Altura total": "1095 mm",
      "Altura al asiento": "775 mm",
      "Distancia entre ejes": "1235 mm",
      "Distancia mínima del piso": "155 mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "100kg",
      "Disposición de los cilindros": "1 Cilindro inclinado hacia adelante",
      "Cilindraje:": "114 cc",
      "Diámetro por carrera": "50.0 mm x 57.9mm",
      "Relación de compresión:": "9.3:1",
      "Potencia Máxima:": "8.85 Hp a 7000 rpm",
      "Arranque:": "Eléctrico y a pedal",
      "Tipo de lubricación": "Cárter húmedo",
      "Sistema de alimentación": "Fuel injection",
      "Capacidad de combustible:": "3.9L (Aprox 1.05 gal)",
      "Encendido:": "TCI",
      "Capacidad batería": "12V, 3.0Ah (10HR)",
      "Batería": "GTZ4V , YTZ4V",
      "Sistema de reducción primaria": "Engranaje",
      "Relación de reducción primaria": "2.900 (58/20)",
      "Sistema de reducción secundaria": "Cadena",
      "Relación de reducción secundaria": "2.857 (40/14)",
      "Tipo de embrague": "Multidisco en aceite / Resorte en espiral",
      "Tipo de transmisión": "Transmisión constante de 4 velocidades",
      "Relación de transmisión en 1ra": "2.833 (34/12)",
      "Relación de transmisión en 2da": "1.875 (30/16)",
      "Relación de transmisión en 3ra": "1.353 (23/17)",
      "Relación de transmisión en 4ta": "1.045 (23/22)",
      "Relación de transmisión en 5ta": "—",
      "Relación de transmisión en 6ta": "—",
      "Tipo de chasis": "Armazón inferior",
      "Inclinación": "26°10′",
      "Avance": "73mm",
      "Rueda delantera:": "70/90-17 M/C 38P",
      "Rueda trasera:": "80/90-17 M/C 44P",
      "Freno delantero:": "Disco",
      "Freno trasero:": "Tambor (UBS)",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Basculante",
      "Luz principal": "12V 32W/32W X 1"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha CRYPTON FINN. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "fz-version-30",
    slug: "fz-version-30",
    name: "FZ VERSIÓN 3.0",
    category: "URBANAS",
    image: "/images/motorcycles/fz-version-30.png",
    gallery: ["/images/motorcycles/fz-version-30.png"],
    price: 11800000,
    priceLabel: "Desde",
    description: "La FZ VERSIÓN 3.0 de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#1f29c1",
            "image": "/images/motorcycles/colors/fz-version-30-color-0.png"
          },
      {
            "name": "Color 2",
            "hex": "#3d4c59",
            "image": "/images/motorcycles/colors/fz-version-30-color-1.png"
          },
      {
            "name": "Color 3",
            "hex": "#0a0a0a",
            "image": "/images/motorcycles/colors/fz-version-30-color-2.png"
          }
],    featureBanners: [],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "149 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "136 kg",
      "Potencia Máxima": "12.20 HP a 7250 rpm",
      "Torque máximo": "13.3 Nm a 5500 rpm",
      "Tipo de motor": "4 Tiempos SOHC, refrigerado por aire",
      "Largo total": "1990mm",
      "Ancho total": "780mm",
      "Altura total": "1080mm",
      "Altura al asiento": "790mm",
      "Distancia entre ejes": "1330mm",
      "Distancia mínima del piso": "165mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "136 kg *",
      "Disposición de los cilindros": "1 Cilindro inclinado hacia adelante",
      "Cilindraje:": "149 cc",
      "Diámetro por carrera": "57.3×57.9mm",
      "Relación de compresión:": "9.6:1",
      "Potencia Máxima:": "12.2 Hp a 7250 rpm *",
      "Torque máximo": "13.3 Nm a 5500 rpm *",
      "Arranque:": "Eléctrico",
      "Tipo de lubricación": "Cárter húmedo",
      "Sistema de alimentación": "Inyección de combustible",
      "Capacidad de combustible:": "13L (Aprox 3.43 gal)",
      "Encendido:": "TCI",
      "Capacidad batería": "12V, 5.0Ah (10HR)",
      "Batería": "GTZ6V",
      "Sistema de reducción primaria": "Engranaje recto",
      "Relación de reducción primaria": "3.409 (75/22)",
      "Sistema de reducción secundaria": "Cadena",
      "Relación de reducción secundaria": "2.929 (41/14)",
      "Tipo de embrague": "Multidisco en aceite / Resorte en espiral",
      "Tipo de transmisión": "Transmisión constante de 5 velocidades",
      "Relación de transmisión en 1ra": "2.714 (38/14)",
      "Relación de transmisión en 2da": "1.789 (34/19)",
      "Relación de transmisión en 3ra": "1.318 (29/22)",
      "Relación de transmisión en 4ta": "1.045 (23/22)",
      "Relación de transmisión en 5ta": "0.875 (21/24)",
      "Relación de transmisión en 6ta": "—",
      "Tipo de chasis": "Diamante",
      "Inclinación": "25° 00′",
      "Avance": "101mm",
      "Rueda delantera:": "100/80-17M/C 52P",
      "Rueda trasera:": "140/60R-17M/C 63P",
      "Freno delantero:": "Disco (ABS)",
      "Freno trasero:": "Disco",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Basculante",
      "Luz principal": "LED"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha FZ VERSIÓN 3.0. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "fz25-abs",
    slug: "fz25-abs",
    name: "FZ25 ABS",
    category: "URBANAS",
    image: "/images/motorcycles/fz25-abs.jpg",
    gallery: ["/images/motorcycles/fz25-abs.jpg"],
    price: 15300000,
    priceLabel: "Desde",
    description: "La FZ25 ABS de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#2234d8",
            "image": "/images/motorcycles/colors/fz25-abs-color-0.png"
          },
      {
            "name": "Color 2",
            "hex": "#004c01",
            "image": "/images/motorcycles/colors/fz25-abs-color-1.png"
          },
      {
            "name": "Color 3",
            "hex": "#0f0f0f",
            "image": "/images/motorcycles/colors/fz25-abs-color-2.png"
          }
],    featureBanners: [
      {
            "title": "TECNOLOGÍA",
            "description": "La Yamaha New FZ25 es una motocicleta llena de tecnología para que disfrutes en el día a día: motor liviano con recubrimiento de níquel, inyección electrónica, chasis tipo diamante, luces LED (principal y stop), doble freno de disco con ABS, tablero digital y suspensión mono cross para mayor estabilidad.",
            "image": "/images/motorcycles/features/fz25-abs-feature-0.jpg"
          },
      {
            "title": "FRENOS ABS",
            "description": "La  New FZ25  cuenta con sistema ABS en ambas ruedas, lo que evita el bloqueo durante frenadas bruscas o en superficies con baja adherencia, como en días de lluvia, garantizando un excelente control en cualquier situación.",
            "image": "/images/motorcycles/features/fz25-abs-feature-1.jpg"
          },
      {
            "title": "CONECTIVIDAD",
            "description": "La New FZ25  incorpora conectividad Bluetooth con la app Y-Connect, que permite monitorear el uso y el rendimiento, programar mantenimientos, ubicar la moto y compartir rutas en redes sociales.",
            "image": "/images/motorcycles/features/fz25-abs-feature-2.jpg"
          },
      {
            "title": "DIAGNOSTIC TOOL",
            "description": "La New FZ25 está preparada para trabajar con la herramienta de diagnóstico Yamaha. Con esta herramienta se puede diagnosticar el sistema de inyección de combustible, también se puede ver el funcionamiento en tiempo real de los sensores y actuadores.",
            "image": "/images/motorcycles/features/fz25-abs-feature-4.jpg"
          },
      {
            "title": "TABLERO",
            "description": "El nuevo tablero LCD, 59% más grande y 100% digital, muestra batería, llamadas y mensajes con Y-Connect. Además, incluye toma de 12V para recargar tu teléfono y mantenerte siempre conectado.",
            "image": "/images/motorcycles/features/fz25-abs-feature-5.jpg"
          }
],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "249 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "149 kg",
      "Potencia máxima": "20.6 Hp a 8000 rpm",
      "Torque máxima": "20.0 Nm a 6000 rpm",
      "Tipo de motor": "4 Tiempos SOHC, refrigerado por aire y aceite",
      "Largo total": "2015 mm",
      "Ancho total": "775 mm",
      "Altura total": "1075 mm",
      "Altura al asiento": "795 mm",
      "Distancia entre ejes": "1360 mm",
      "Distancia mínima del piso": "160 mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "149 kg",
      "Disposición de los cilindros": "1 Cilindro inclinado hacia adelante",
      "Cilindraje:": "249 cc",
      "Diámetro por carrera": "74.0×58.0 mm",
      "Relación de compresión:": "9.8:1",
      "Potencia Máxima:": "20.6 Hp a 8000 rpm",
      "Torque máximo": "20.0 Nm a 6000 rpm",
      "Arranque:": "Electrico",
      "Tipo de lubricación": "Cárter húmedo",
      "Sistema de alimentación": "Inyección de combustible",
      "Capacidad de combustible:": "14L",
      "Encendido:": "TCI",
      "Capacidad batería": "12V, 7 Ah",
      "Batería": "GTZ8V",
      "Sistema de reducción primaria": "Engranaje",
      "Relación de reducción primaria": "74/24 3.083",
      "Sistema de reducción secundaria": "Cadena",
      "Relación de reducción secundaria": "46/15 3.067",
      "Tipo de embrague": "Multidisco en aceite / Resorte en espiral",
      "Tipo de transmisión": "Transmisión constante de 5 velocidades",
      "Relación de transmisión en 1ra": "2.571 (36/14)",
      "Relación de transmisión en 2da": "1.684 (32/19)",
      "Relación de transmisión en 3ra": "1.273 (28/22)",
      "Relación de transmisión en 4ta": "1.040 (26/25)",
      "Relación de transmisión en 5ta": "0.852 (23/27)",
      "Relación de transmisión en 6ta": "–",
      "Tipo de chasis": "Diamante",
      "Inclinación": "24°30′",
      "Avance": "98 mm",
      "Rueda delantera:": "100/80-17M/C 52P",
      "Rueda trasera:": "140/70-17 MC 66S",
      "Freno delantero:": "Disco (ABS)",
      "Freno trasero:": "Disco (ABS)",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Brazo basculante"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha FZ25 ABS. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "r15v4",
    slug: "r15v4",
    name: "R15v4",
    category: "SUPER DEPORTIVAS",
    image: "/images/motorcycles/r15v4.jpg",
    gallery: ["/images/motorcycles/r15v4.jpg"],
    price: 16100000,
    priceLabel: "Desde",
    description: "La R15v4 de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#2039d8",
            "image": "/images/motorcycles/colors/r15v4-color-0.jpg"
          },
      {
            "name": "Color 2",
            "hex": "#232323",
            "image": "/images/motorcycles/colors/r15v4-color-1.png"
          }
],    featureBanners: [
      {
            "title": "NUEVO DISEÑO",
            "description": "El diseño de la Yamaha New R15 V4 es totalmente nuevo, con un frente renovado que incluye dos luces DRL y una luz LED  (bifocal) en su frontal, inspirada en la R7.",
            "image": "/images/motorcycles/features/r15v4-feature-0.jpg"
          },
      {
            "title": "FRENOS ABS DOBLE VÍA",
            "description": "New R15 V4 posee frenos con sistema ABS de doble canal  (delantero y trasero) que otorgan seguridad absoluta en todo momento, incluso cuando se conduce a alta velocidad.",
            "image": "/images/motorcycles/features/r15v4-feature-1.jpg"
          },
      {
            "title": "SISTEMA CONTROL DE TRACCIÓN",
            "description": "New R15 V4 incorpora un sistema electrónico de control de tracción (TCS) el cual tiene la habilidad de reducir la posibilidad que la rueda trasera patine a raíz de una pérdida de tracción.",
            "image": "/images/motorcycles/features/r15v4-feature-2.jpg"
          },
      {
            "title": "Horquilla  Delantera  Invertida",
            "description": "New R15 V4 viene equipada  con suspensión delantera invertida  que brinda la máxima estabilidad al realizar giros a alta velocidad o durante una frenada intensa.",
            "image": "/images/motorcycles/features/r15v4-feature-3.jpg"
          },
      {
            "title": "CUT-OFF SWITCH",
            "description": "Incluye Cut -Off Switch factor importante de seguridad para el piloto. El cual apaga el motor al momento de estar abajo.",
            "image": "/images/motorcycles/features/r15v4-feature-4.jpg"
          },
      {
            "title": "Sistema Y-Connect",
            "description": "New R15 V4 se conecta con tu teléfono Móvil gracias a la aplicación Y-Connect que te permite ver en tu panel de la moto las alertas de llamadas entrantes,  nivel  de aceite, consumos de combustible o última ubicación de estacionamiento, entre otras funciones.",
            "image": "/images/motorcycles/features/r15v4-feature-5.jpg"
          },
      {
            "title": "Nuevo Tablero LCD",
            "description": "Panel 100% digital con una completa información: velocidad y rendimiento, entre otras funciones.",
            "image": "/images/motorcycles/features/r15v4-feature-6.jpg"
          }
],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "155 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "140 kg",
      "Potencia máxima": "19.3 Hp a 10000 rpm",
      "Torque máximo": "14.7 Nm a 8500 rpm",
      "Tipo de motor": "4 Tiempos SOHC, refrigerado por liquido",
      "Largo total": "1990 mm",
      "Ancho total": "725mm",
      "Altura total": "1135 mm",
      "Altura al asiento": "815 mm",
      "Distancia entre ejes": "1325 mm",
      "Distancia mínima del piso": "170 mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "140 Kg",
      "Disposición de los cilindros": "1 Cilindro inclinado hacia adelante",
      "Cilindraje:": "155CC",
      "Diámetro por carrera": "58.0 x 58.7mm",
      "Relación de compresión:": "11.6 : 1",
      "Potencia Máxima:": "19.3 Hp a 10000 rpm",
      "Arranque:": "Electrico",
      "Tipo de lubricación": "Cárter húmedo",
      "Sistema de alimentación": "lnyección de combustible",
      "Capacidad de combustible:": "11L",
      "Encendido:": "TCI",
      "Capacidad batería": "12V, 5.0 Ah",
      "Batería": "GTZ6V",
      "Sistema de reducción primaria": "Engranaje",
      "Relación de reducción primaria": "3.042 (73/24)",
      "Sistema de reducción secundaria": "Cadena",
      "Relación de reducción secundaria": "3.429 (48/14)",
      "Tipo de embrague": "Multidisco en aceite / Resorte en espiral",
      "Tipo de transmisión": "Transmisión constante de 6 velocidades",
      "Relación de engranajes": "—",
      "Relación de transmisión en 1ra": "2.833 (34/12)",
      "Relación de transmisión en 2da": "1.875 (30/16)",
      "Relación de transmisión en 3ra": "1.364 (30/22)",
      "Relación de transmisión en 4ta": "1.143 (24/21)",
      "Relación de transmisión en 5ta": "0.957 (22/23)",
      "Relación de transmisión en 6ta": "0.840 (21/25)",
      "Tipo de chasis": "Diamante",
      "Inclinación": "25° 30′",
      "Avance": "88mm",
      "Rueda delantera:": "100/80 R17 M/C 52P",
      "Rueda trasera:": "140/70 R17 M/C 66H",
      "Freno delantero:": "Disco (ABS)",
      "Freno trasero:": "Disco (ABS)",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Basculante (Por bieletas)",
      "Luz principal": "LED"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha R15v4. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "r3",
    slug: "r3",
    name: "R3",
    category: "SUPER DEPORTIVAS",
    image: "/images/motorcycles/r3.png",
    gallery: ["/images/motorcycles/r3.png"],
    price: 33900000,
    priceLabel: "Desde",
    description: "La R3 de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#2039d8",
            "image": "/images/motorcycles/colors/r3-color-0.jpg"
          },
      {
            "name": "Color 2",
            "hex": "#232323",
            "image": "/images/motorcycles/colors/r3-color-1.jpg"
          },
      {
            "name": "Color 3",
            "hex": "#53c8b1",
            "image": "/images/motorcycles/colors/r3-color-2.png"
          }
],    featureBanners: [
      {
            "title": "NUEVA GENERACIÓN DE LA GAMA R",
            "description": "Con el estilo de la nueva generación R, inspirado en la R9 y los modelos de circuito R1GYTR y RACE, la nueva Yamaha R3 es la más radical y avanzada hasta ahora. Incorpora toma de aire central estilo M1, doble óptica LED, luces diurnas y alerones aerodinámicos",
            "image": "/images/motorcycles/features/r3-feature-0.jpg"
          },
      {
            "title": "ALERONES AERODINÁMICOS INTEGRADOS",
            "description": "La nueva R3 eleva la aerodinámica con alerones integrados bajo la toma de aire estilo M1, logrando un flujo de aire más eficiente. Este se canaliza alrededor del nuevo carenado completo y se dirige hacia el colín inspirado en la gama R, mejorando el rendimiento y la estabilidad a alta velocidad.",
            "image": "/images/motorcycles/features/r3-feature-1.jpg"
          },
      {
            "title": "DOBLE ÓPTICA DELANTERA Y LUCES DIURNAS",
            "description": "El diseño delantero de la R3 rebosa ADN de la gama R de la nueva generación. Con unos potentes faros tipo proyector y potentes luces diurnas LED integradas en el nuevo y atractivo carenado, la R3 destila estilo y sofisticación.",
            "image": "/images/motorcycles/features/r3-feature-2.jpg"
          },
      {
            "title": "PERFIL ERGONÓMICO ESTRECHO",
            "description": "El nuevo y estilizado perfil ergonómico de la R3 presenta una anchura total del asiento más estrecha y unos paneles laterales más delgados. Esto facilita que el piloto pueda apoyar mejor los pies en el suelo y tenga un control total de su moto en cada parada.",
            "image": "/images/motorcycles/features/r3-feature-3.jpg"
          },
      {
            "title": "NUEVO EMBRAGUE A&S",
            "description": "La R3 cuenta con un embrague antirrebotes asistido que mejora el control en desaceleraciones bruscas. Ayuda a evitar el sobre régimen del motor y reacciones en la rueda trasera, lo que se traduce en una conducción más estable, suave y predecible.",
            "image": "/images/motorcycles/features/r3-feature-4.jpg"
          },
      {
            "title": "MOTOR EURO5+ DE 321 CC",
            "description": "l motor bicilíndrico de 321 cc con relación de compresión 11,2:1, DOHC y culatas de 4 válvulas, está pensado para subir rápido de revoluciones y rendir al máximo en altas rpm. Con 42 CV a 10.750 rpm, el motor EU5+ de la R3 ofrece una aceleración potente, respuesta ágil y una entrega de potencia amplia y emocionante.",
            "image": "/images/motorcycles/features/r3-feature-5.jpg"
          },
      {
            "title": "SUSPENSIONES DE ALTO RENDIMIENTO",
            "description": "La R3 incorpora una horquilla invertida KYB de 37 mm que mejora la precisión y el control del tren delantero. Su equilibrada amortiguación ofrece gran estabilidad y confianza, tanto en carretera como en circuito.",
            "image": "/images/motorcycles/features/r3-feature-6.jpg"
          },
      {
            "title": "INSTRUMENTACIÓN LCD MULTIFUNCIÓN",
            "description": "La nueva R3 incorpora una nueva pantalla LCD con información clave de conducción y del vehículo. Al conectar un smartphone vía Bluetooth con la app MyRide, también muestra notificaciones de llamadas, mensajes y correos.",
            "image": "/images/motorcycles/features/r3-feature-7.jpg"
          },
      {
            "title": "POTENTE RENDIMIENTO DE FRENADO",
            "description": "La R3 cuenta con frenos de disco flotantes de 298 mm y 220 mm, junto a un sistema ABS que garantiza un frenado preciso y seguro, incluso en superficies mojadas o de poco agarre.",
            "image": "/images/motorcycles/features/r3-feature-8.jpg"
          }
],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "320 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "169 kg",
      "Potencia máxima": "41.4 hP a 10750 rpm",
      "Torque máximo": "29.5 Nm a 9000 rpm",
      "Tipo de motor": "4 Tiempos DOHC, 4  válvulas, refrigerado por líquido",
      "Largo total": "2090 mm",
      "Ancho total": "735 mm",
      "Altura total": "1140 mm",
      "Altura al asiento": "780 mm",
      "Distancia entre ejes": "1380 mm",
      "Distancia mínima del piso": "160 mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "169kg",
      "Disposición de los cilindros": "2 Cilindros en línea",
      "Cilindraje:": "320 cc",
      "Diámetro por carrera": "68.0×44.1mm",
      "Relación de compresión:": "11.2:1",
      "Potencia Máxima:": "41.4 hP a 10750 rpm",
      "Arranque:": "Electrico",
      "Tipo de lubricación": "Cárter húmedo",
      "Sistema de alimentación": "lnyección de combustible",
      "Capacidad de combustible:": "14L (Aprox 3.70 gal)",
      "Encendido:": "TCI",
      "Capacidad batería": "112V, 7.0Ah (10HR)",
      "Batería": "GTZ8V",
      "Sistema de reducción primaria": "Engranaje",
      "Relación de reducción primaria": "3.043 (70/23)",
      "Sistema de reducción secundaria": "Cadena",
      "Relación de reducción secundaria": "3.071 (43/14)",
      "Tipo de embrague": "Multidisco en aceite / Resorte en espiral",
      "Tipo de transmisión": "Transmisión constante de 6 velocidades",
      "Relación de engranajes": "—",
      "Relación de transmisión en 1ra": "2.500 (35/14)",
      "Relación de transmisión en 2da": "1.824 (31/17)",
      "Relación de transmisión en 3ra": "1.348 (31/23)",
      "Relación de transmisión en 4ta": "1.087 (25/23)",
      "Relación de transmisión en 5ta": "0.920 (23/25)",
      "Relación de transmisión en 6ta": "0.800 (24/30)",
      "Tipo de chasis": "Diamante",
      "Inclinación": "25° 00´",
      "Avance": "95 mm",
      "Rueda delantera:": "110/70R-17M/C (54H)",
      "Rueda trasera:": "140/70R-17M/C (66H)",
      "Freno delantero:": "Disco (ABS)",
      "Freno trasero:": "Disco (ABS)",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Basculante (Por bieletas)",
      "Luz principal": "LED"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha R3. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "r7",
    slug: "r7",
    name: "R7",
    category: "SUPER DEPORTIVAS",
    image: "/images/motorcycles/r7.jpg",
    gallery: ["/images/motorcycles/r7.jpg"],
    price: 59000000,
    priceLabel: "Desde",
    description: "La R7 de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
        { "name": "Icon Blue", "hex": "#0033cc" },
        { "name": "Midnight Black", "hex": "#0a0a0a" }
      ],    featureBanners: [],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Garantía": "1 año o 20.000 km",
      "Soporte": "Red nacional de centros técnicos",
    },
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha R7. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "yzfr9",
    slug: "yzfr9",
    name: "YZFR9",
    category: "SUPER DEPORTIVAS",
    image: "/images/motorcycles/yzfr9.jpg",
    gallery: ["/images/motorcycles/yzfr9.jpg"],
    price: 76000000,
    priceLabel: "Desde",
    description: "La YZFR9 de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#2039d8",
            "image": "/images/motorcycles/colors/yzfr9-color-0.jpg"
          },
      {
            "name": "Color 2",
            "hex": "#232323",
            "image": "/images/motorcycles/colors/yzfr9-color-1.jpg"
          }
],    featureBanners: [],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "890 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "195kg",
      "Potencia máxima": "117.3 Hp a 10000 rpm",
      "Torque máximo": "93.0Nm a 7000 rpm",
      "Tipo de motor": "4 Tiempos DOHC, 4 válvulas, refrigerado por líquido",
      "Largo total": "2070mm",
      "Ancho total": "705mm",
      "Altura total": "1180mm",
      "Altura al asiento": "830mm",
      "Distancia entre ejes": "1420mm",
      "Distancia mínima del piso": "140mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "195kg",
      "Disposición de los cilindros": "3 Cilindros en línea",
      "Cilindraje:": "890 cc",
      "Diámetro por carrera": "78.0 X 62.1 mm",
      "Relación de compresión:": "11.5:1",
      "Potencia Máxima:": "117.3 Hp a 10000 rpm",
      "Arranque:": "Electrico",
      "Tipo de lubricación": "Cárter húmedo",
      "Sistema de alimentación": "Inyección de combustible",
      "Capacidad de combustible:": "14L (Aprox 3.70 gal)",
      "Encendido:": "TCI",
      "Capacidad batería": "12V, 8.6Ah (10HR)",
      "Batería": "YTZ10S",
      "Sistema de reducción primaria": "Engranaje",
      "Relación de reducción primaria": "1.681 (79/47)",
      "Sistema de reducción secundaria": "Cadena",
      "Relación de reducción secundaria": "2.688 (43/16)",
      "Tipo de embrague": "Multidisco en aceite / Resorte en espiral",
      "Tipo de transmisión": "Transmisión constante de 6 velocidades",
      "Relación de engranajes": "—",
      "Relación de transmisión en 1ra": "2.571 (36/14)",
      "Relación de transmisión en 2da": "1.947 (37/19)",
      "Relación de transmisión en 3ra": "1.619 (34/21)",
      "Relación de transmisión en 4ta": "1.381 (29/21)",
      "Relación de transmisión en 5ta": "1.190 (25/21)",
      "Relación de transmisión en 6ta": "1.037 (28/27)",
      "Tipo de chasis": "Diamante",
      "Inclinación": "22° 35´",
      "Avance": "94 mm",
      "Rueda delantera:": "120/70ZR17 M/C 58W",
      "Rueda trasera:": "180/55ZR17 M/C 73W",
      "Freno delantero:": "Doble disco (ABS)",
      "Freno trasero:": "Disco (ABS)",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Basculante (Por bieletas)",
      "Luz principal": "LED"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha YZFR9. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "mt15",
    slug: "mt15",
    name: "MT15",
    category: "HYPER NAKED",
    image: "/images/motorcycles/mt15.png",
    gallery: ["/images/motorcycles/mt15.png"],
    price: 15500000,
    priceLabel: "Desde",
    description: "La MT15 de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#dbdbdb",
            "image": "/images/motorcycles/colors/mt15-color-0.png"
          },
      {
            "name": "Color 2",
            "hex": "#0a0a0a",
            "image": "/images/motorcycles/colors/mt15-color-1.png"
          },
      {
            "name": "Color 3",
            "hex": "#8224e3",
            "image": "/images/motorcycles/colors/mt15-color-2.png"
          }
],    featureBanners: [],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "155 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "134 kg",
      "Potencia máxima": "19 Hp a 10000 rpm",
      "Torque máximo": "14.7 Nm a 8500 rpm",
      "Tipo de motor": "4 Tiempos SOHC, refrigerado por líquido",
      "Largo total": "1960 mm",
      "Ancho total": "800 mm",
      "Altura total": "1070 mm",
      "Altura al asiento": "810 mm",
      "Distancia entre ejes": "1325 mm",
      "Distancia mínima del piso": "170 mm",
      "Disposición de los cilindros": "1 Cilindro inclinado hacia adelante",
      "Diámetro por carrera": "58.0×58.7mm",
      "Relación de compresión:": "11.6:1",
      "Arranque:": "Eléctrico",
      "Tipo de lubricación": "Cárter húmedo",
      "Sistema de alimentación": "Inyección de combustible",
      "Capacidad de combustible:": "10L",
      "Encendido:": "TCI",
      "Capacidad batería": "12V, 5.0Ah (10HR)",
      "Batería": "GTZ6V",
      "Sistema de reducción primaria": "Engranaje recto",
      "Relación de reducción primaria": "3.042 (73/24)",
      "Sistema de reducción secundaria": "Cadena",
      "Relación de reducción secundaria": "3.714 (52/14)",
      "Tipo de embrague": "Multidisco en aceite / Resorte en espiral",
      "Tipo de transmisión": "Transmisión constante de 6 velocidades",
      "Relación de transmisión en 1ra": "2.833 (34/12)",
      "Relación de transmisión en 2da": "1.875 (30/16)",
      "Relación de transmisión en 3ra": "1.364 (30/22)",
      "Relación de transmisión en 4ta": "1.143 (24/21)",
      "Relación de transmisión en 5ta": "0.957 (22/23)",
      "Relación de transmisión en 6ta": "0.840 (21/25)",
      "Tipo de chasis": "Diamante",
      "Inclinación": "25° 30′",
      "Avance": "87mm",
      "Rueda delantera:": "100/80-17M/C 52P",
      "Rueda trasera:": "140/70R17M/C 66H",
      "Freno delantero:": "Disco (ABS)",
      "Freno trasero:": "Disco",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Basculante (Por bieletas)",
      "Luz principal": "LED",
      "ABS": "Si",
      "AHO": "Si",
      "Regulación": "EURO3"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha MT15. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "mt03",
    slug: "mt03",
    name: "MT03",
    category: "HYPER NAKED",
    image: "/images/motorcycles/mt03.jpg",
    gallery: ["/images/motorcycles/mt03.jpg"],
    price: 31900000,
    priceLabel: "Desde",
    description: "La MT03 de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#c9c9c9",
            "image": "/images/motorcycles/colors/mt03-color-0.jpg"
          },
      {
            "name": "Color 2",
            "hex": "#1f1fc4",
            "image": "/images/motorcycles/colors/mt03-color-1.jpg"
          },
      {
            "name": "Color 3",
            "hex": "#282828",
            "image": "/images/motorcycles/colors/mt03-color-2.jpg"
          }
],    featureBanners: [],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "321 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "168 kg",
      "Potencia": "41.4 Hp a 10750 rpm",
      "Torque": "29.6 Nm / 9000 rpm",
      "Tipo de motor": "Refrigeración líquida, 4-tiempos, DOHC, 4 válvulas",
      "Largo total": "2090 mm",
      "Ancho total": "755 mm",
      "Altura total": "1,070 mm",
      "Altura al asiento": "780 mm",
      "Distancia entre ejes": "1380 mm",
      "Distancia mínima del piso": "160 mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "168 kg",
      "Disposición de los cilindros": "2 Cilindros en línea",
      "Cilindraje:": "321cm3",
      "Diámetro por carrera": "68.0×44.1 mm",
      "Relación de compresión:": "11.2 ： 1",
      "Potencia Máxima:": "41.4 Hp a 10750 rpm",
      "Torque máximo": "29.6 Nm / 9000 rpm",
      "Arranque:": "Eléctrico",
      "Tipo de lubricación": "Cárter húmedo",
      "Sistema de alimentación": "Inyección de combustible",
      "Capacidad de combustible:": "14L (3,70 Gls)",
      "Encendido:": "TCI",
      "Capacidad batería": "12V,7.0AH(10H)",
      "Batería": "GTZ8V",
      "Transmisión final": "Engranaje",
      "Relación de reducción primaria": "3.043 (70/23)",
      "Sistema de reducción secundaria": "Cadena",
      "Relación de reducción secundaria": "3.071 (43/14)",
      "Tipo de embrague": "Multidisco en aceite",
      "Tipo de transmisión": "Engranajes constantes de 6 velocidades",
      "Relación de transmisión en 1ra": "2.500(35/14)",
      "Relación de transmisión en 2da": "1.824(31/17)",
      "Relación de transmisión en 3ra": "1.348(31/23)",
      "Relación de transmisión en 4ta": "1.087(25/23",
      "Relación de transmisión en 5ta": "0.920(23/25)",
      "Relación de transmisión en 6ta": "0.800(24/30)",
      "Tipo de chasis": "Diamante",
      "Inclinación": "25° 00′",
      "Avance": "95 mm",
      "Rueda delantera:": "110/70-17M/C 54H",
      "Rueda trasera:": "140/70-17M/C 66H",
      "Freno delantero:": "Disco (ABS)",
      "Freno trasero:": "Disco (ABS)",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Brazo basculante",
      "Luz principal": "LED"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha MT03. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "mt07",
    slug: "mt07",
    name: "MT07",
    category: "HYPER NAKED",
    image: "/images/motorcycles/mt07.png",
    gallery: ["/images/motorcycles/mt07.png"],
    price: 57000000,
    priceLabel: "Desde",
    description: "La MT07 de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#cccccc",
            "image": "/images/motorcycles/colors/mt07-color-0.png"
          },
      {
            "name": "Color 2",
            "hex": "#2b2b2b",
            "image": "/images/motorcycles/colors/mt07-color-1.png"
          },
      {
            "name": "Color 3",
            "hex": "#2150d1",
            "image": "/images/motorcycles/colors/mt07-color-2.png"
          }
],    featureBanners: [
      {
            "title": "ESTILO MINIMALISTA TOTALMENTE NUEVO",
            "description": "MT-07 ofrece un nuevo look naked con la \"cara\" distintiva del minimalista faro LED, inspirado en el Lado Oscuro de Japón. Ingeniería y tecnología al máximo.",
            "image": "/images/motorcycles/features/mt07-feature-0.jpg"
          },
      {
            "title": "ACELERADOR ELECTRÓNICO",
            "description": "El YCC-T (acelerador controlado por chip Yamaha) facilita una nueva generación de ayudas electrónicas y contribuye a una entrega de potencia aún más lineal para crear una mayor conexión entre el piloto y la moto. El Control de Pilotaje (YRC) te permite elegir entre dos mapas de aceleración.",
            "image": "/images/motorcycles/features/mt07-feature-1.jpg"
          },
      {
            "title": "TECNOLOGÍA DE AMPLIFICACIÓN ACÚSTICA",
            "description": "Para contribuir a una unión visceral entre el piloto y la moto, la MT-07 incorpora un sistema de amplificación de sonido que aprovecha el rugido de admisión de la moto, lo mejora y lo canaliza hacia el piloto para aumentar el placer de conducción.",
            "image": "/images/motorcycles/features/mt07-feature-2.jpg"
          },
      {
            "title": "DOBLE DISCO DE FRENO DELANTERO",
            "description": "con una potencia de frenado nivel superior, la cuarta generación de MT-07 incorpora dos grandes discos de freno delanteros, combinados con unas pinzas de anclaje radial de 4 pistones. Facilitando una frenada fuerte y consistente gracias a una mayor rigidez.",
            "image": "/images/motorcycles/features/mt07-feature-3.jpg"
          },
      {
            "title": "SUSPENSIÓN AJUSTABLE",
            "description": "La nueva horquilla invertida de 41mm ofrece un alto nivel de control y de conexión intuitiva con el neumático delantero, a la vez aporta un aspecto moderno a la MT-07.",
            "image": "/images/motorcycles/features/mt07-feature-4.jpg"
          },
      {
            "title": "LLANTAS LIGERAS SPINFORGED",
            "description": "Contribuyendo a una MT-07 más ligera y ágil, las llantas están fabricadas utilizando la tecnología SpinForged patentada por Yamaha. Esto permite una fundición más fina y ligera, sin comprometer la resistencia.",
            "image": "/images/motorcycles/features/mt07-feature-5.jpg"
          },
      {
            "title": "INSTRUMENTACIÓN TFT DE 5\" A TODO COLOR",
            "description": "La instrumentación TFT de 5 pulgadas de la MT-07 está equipada con múltiples temas y conectividad para celulares a través de una aplicación, por lo que puedes escuchar música, ver notificaciones de llamadas,mensajes entrantes en pantalla y ver mapas de navegación.",
            "image": "/images/motorcycles/features/mt07-feature-6.jpg"
          },
      {
            "title": "MOTOR CP2 EU5 + DE ALTO PAR",
            "description": "El característico motor bicilíndrico en paralelo, se ha desarrollado utilizando la tecnología de cigüeñal tipo crossplane de Yamaha. Ofreciendo un rendimiento más accesible, un par mejorado, una banda sonora vibrante y cambio de marchas refinado.",
            "image": "/images/motorcycles/features/mt07-feature-7.jpg"
          },
      {
            "title": "NUEVOS INTERRUPTORES INTUITIVOS",
            "description": "Los nuevos conjuntos de interruptores integrados en el manillar permiten la ejecución de una gama más amplia de funciones en la MT-07, incluida la conectividad para celulares, la navegación y modos de pilotaje. Los nuevos intermitentes son ahora auto cancelables y ofrecen la función de \"tres destellos\" para cambiar de carril.",
            "image": "/images/motorcycles/features/mt07-feature-8.jpg"
          }
],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "689 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "183kg",
      "Potencia": "72.4 Hp a 8750 rpm",
      "Torque": "68.0Nm a 6500 rpm",
      "Tipo de motor": "4 Tiempos DOHC, 4  válvulas, refrigerado por líquido",
      "Largo total": "2065 mm",
      "Ancho total": "780 mm",
      "Altura total": "1110 mm",
      "Altura al asiento": "805 mm",
      "Distancia entre ejes": "1395 mm",
      "Distancia mínima del piso": "150mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "183kg",
      "Disposición de los cilindros": "2 Cilindros en línea",
      "Cilindraje:": "689 cc",
      "Diámetro por carrera": "80.0 X 68.6 mm",
      "Relación de compresión:": "11.5:1",
      "Potencia Máxima:": "72.4 Hp a 8750 rpm",
      "Torque máximo": "68.0Nm a 6500 rpm",
      "Arranque:": "Eléctrico",
      "Tipo de lubricación": "Cárter humedo",
      "Sistema de alimentación": "Inyección de combustible",
      "Capacidad de combustible:": "14L (Aprox 3.70 gal)",
      "Encendido:": "TCI",
      "Capacidad batería": "12V, 6.0Ah (10HR)",
      "Batería": "YTZ7S",
      "Sistema de reducción primaria": "Engranaje",
      "Relación de reducción primaria": "1.925 (77/40)",
      "Sistema de reducción secundaria": "Cadena",
      "Relación de reducción secundaria": "2.688 (43/16)",
      "Tipo de embrague": "Multidisco en aceite / Resorte en espiral",
      "Tipo de transmisión": "Transmisión constante de 6 velocidades",
      "Relación de transmisión en 1ra": "2.846(37/13)",
      "Relación de transmisión en 2da": "2.125(34/16)",
      "Relación de transmisión en 3ra": "1.632(31/19)",
      "Relación de transmisión en 4ta": "1.300(26/20)",
      "Relación de transmisión en 5ta": "1.091(24/22)",
      "Relación de transmisión en 6ta": "0.964(27/28)",
      "Tipo de chasis": "Diamante",
      "Inclinación": "24° 00′",
      "Avance": "93 mm",
      "Rueda delantera:": "120/70 ZR 17M/C(58W)",
      "Rueda trasera:": "180/55 ZR 17M/C(73W)",
      "Freno delantero:": "Doble disco (ABS)",
      "Freno trasero:": "Disco (ABS)",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Basculante (Por bieletas)",
      "Luz principal": "LED"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha MT07. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "mt09",
    slug: "mt09",
    name: "MT09",
    category: "HYPER NAKED",
    image: "/images/motorcycles/mt09.png",
    gallery: ["/images/motorcycles/mt09.png"],
    price: 63000000,
    priceLabel: "Desde",
    description: "La MT09 de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#d1d1d1",
            "image": "/images/motorcycles/colors/mt09-color-0.png"
          },
      {
            "name": "Color 2",
            "hex": "#000000",
            "image": "/images/motorcycles/colors/mt09-color-1.png"
          },
      {
            "name": "Color 3",
            "hex": "#1f22c4",
            "image": "/images/motorcycles/colors/mt09-color-2.png"
          }
],    featureBanners: [
      {
            "title": "Carrocería completamente nueva de aspecto agresivo",
            "description": "El vanguardista estilo Hyper Naked responde al concepto purista de «menos es más», llevando la MT-09 al siguiente nivel con una carrocería agresiva y minimalista. El nuevo faro LED bifuncional ahora está dentro de una cubierta, creando una relación más compacta y unificada con el depósito de combustible de nuevo diseño, que permite una posición de pilotaje más activa y ligeramente inclinada hacia adelante, manteniendo al mismo tiempo la estética de precisión y vanguardia que caracteriza a la gama MT.",
            "image": "/images/motorcycles/features/mt09-feature-0.jpg"
          },
      {
            "title": "Posición de pilotaje más activa",
            "description": "La MT-09 es famosa por su agilidad y estabilidad, que se ven reforzadas por una ergonomía sofisticada que permite al usuario sentirse más conectado a la máquina al ofrecerle una libertad de movimiento mayor con diferentes estilos de conducción. Para lograrlo, la posición del manillar ahora es más baja y cuenta con dos posiciones personalizables, mientras que las estriberas de nuevo diseño también son regulables. Un nuevo asiento dividido en dos partes aumenta aún más la sensación de libertad al conducir.",
            "image": "/images/motorcycles/features/mt09-feature-1.jpg"
          },
      {
            "title": "Instrumentación TFT",
            "description": "La instrumentación TFT de 5 pulgadas a todo color ofrece cuatro temas diferentes opcionales para adaptarse a tus necesidades específicas y a tu situación de conducción; accesibles mediante los nuevos interruptores del manillar. También puedes vincular tu smartphone a la nueva pantalla TFT a través de la aplicación gratuita YConnect para recibir notificaciones de mensajes o llamadas y escuchar música*. La navegación de mapa completo también está disponible a través de la aplicación gratuita Garmin StreetCross para facilitarte el trayecto. *Requiere el uso de auriculares conectados por Bluetooth y vinculados a la MT-09. Los auriculares no están incluidos.",
            "image": "/images/motorcycles/features/mt09-feature-2.jpg"
          },
      {
            "title": "Rejillas amplificadoras",
            "description": "El excitante rugido del motor CP3 es uno de los rasgos más característicos de la MT-09, evocando una sensación de pura adrenalina con cada giro del acelerador. La MT-09 cuenta con conductos de admisión de aire diseñados específicamente para acentuar los sonidos de alta frecuencia, que después se enfatizan, especialmente al conducir a alta velocidad, a través de una rejilla amplificadora acústica situada en la parte superior del depósito de combustible para que te llegue directamente la vibrante nota del motor CP3.",
            "image": "/images/motorcycles/features/mt09-feature-3.jpg"
          },
      {
            "title": "Modos de pilotaje personalizables",
            "description": "Personaliza tu experiencia de conducción con los ajustes del sistema Yamaha Ride Control (YRC), que te permiten seleccionar las características de potencia del motor y nivel de intervención electrónica que mejor de adapten a tus preferencias y a las condiciones de la carretera. Se han programado tres modos de pilotaje integrados con ajustes de fábrica para adaptarse a diferentes situaciones: SPORT, STREET y RAIN, aunque también puedes crear dos programas personalizados a la medida de tus preferencias. Puedes personalizar la configuración de YRC directamente en el menú de la instrumentación o en tu smartphone a través de la app MyRide.",
            "image": "/images/motorcycles/features/mt09-feature-4.jpg"
          },
      {
            "title": "Quickshift de tercera generación",
            "description": "La MT-09 está equipada con cambio rápido de tercera generación, que dispone de dos ajustes diferentes. El ajuste 1 permite cambios fluidos a marchas superiores al acelerar y a marchas inferiores al desacelerar. El ajuste 2 mejora tu conducción al permitir cambios sin embrague a marchas inferiores mientras aceleras y a marchas superiores mientras desaceleras para que puedas usarlo en situaciones muy variadas. Para mantener una sensación de conducción natural, el cambio rápido de tercera generación no funciona en determinadas situaciones en las que las revoluciones del motor son demasiado bajas o altas y tampoco si la máquina no está acelerando ni desacelerando.a.",
            "image": "/images/motorcycles/features/mt09-feature-5.jpg"
          },
      {
            "title": "IMU",
            "description": "IMU de seis ejes con nuevo sistema de regulación de deslizamiento trasero – Inspirada en la R1, la IMU compacta de seis ejes controla los sistemas de asistencia al pilotaje dealta tecnología de la MT-09, incluido un sistema de control de tracción (TCS) de tres modos sensible a la inclinación, un sistema de control de deslizamiento (SCS), un sistema de control de elevación de la rueda delantera (LIF) y un sistema de control de frenado. Esta tecnología líder en su clase, ahora cuenta con un regulador de deslizamiento trasero (BSR) que proporciona estabilidad cuando la rueda trasera se bloquea debido a una fuerza de frenado excesiva, al controlar el nivel de par que se produce.",
            "image": "/images/motorcycles/features/mt09-feature-6.jpg"
          }
],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "890 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "193 kg",
      "Potencia": "117.3 Hp a 10000 rpm",
      "Torque": "93.0 Nm a 7000 rpm",
      "Tipo de motor": "4 Tiempos DOHC, refrigerado por líquido",
      "Largo total": "2090 mm",
      "Ancho total": "820 mm",
      "Altura total": "1145 mm",
      "Altura al asiento": "825 mm",
      "Distancia entre ejes": "1430 mm",
      "Distancia mínima del piso": "140 mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "193 kg",
      "Disposición de los cilindros": "3 Cilindros en línea",
      "Cilindraje:": "890 cc",
      "Diámetro por carrera": "78.0 X 62.1 mm",
      "Relación de compresión:": "11.5:1",
      "Potencia Máxima:": "117,3 Hp a 10000 rpm",
      "Torque máximo": "93.0 Nm a 7000 rpm",
      "Arranque:": "Eléctrico",
      "Tipo de lubricación": "Cárter húmedo",
      "Sistema de alimentación": "Inyección de combustible",
      "Capacidad de combustible:": "14L",
      "Encendido:": "TCI",
      "Capacidad batería": "12V, 8.6 Ah",
      "Batería": "YTZ10S",
      "Sistema de reducción primaria": "Engranaje",
      "Relación de reducción primaria": "1.681 (79/47)",
      "Sistema de reducción secundaria": "Cadena",
      "Relación de reducción secundaria": "2.813 (45/16)",
      "Tipo de embrague": "Multidisco en aceite / Resorte en espiral",
      "Tipo de transmisión": "Transmisión constante de 6 velocidades",
      "Relación de transmisión en 1ra": "2.571 (36/14)",
      "Relación de transmisión en 2da": "1.947 (37/19)",
      "Relación de transmisión en 3ra": "1.619 (34/21)",
      "Relación de transmisión en 4ta": "1.381 (29/21)",
      "Relación de transmisión en 5ta": "1.190 (25/21)",
      "Relación de transmisión en 6ta": "1.037 (28/27)",
      "Tipo de chasis": "Diamante",
      "Inclinación": "24° 40´",
      "Avance": "108 mm",
      "Rueda delantera:": "120/70ZR17 M/C 58W",
      "Rueda trasera:": "180/55ZR17 M/C 73W",
      "Freno delantero:": "Doble disco (ABS)",
      "Freno trasero:": "Disco (ABS)",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Basculante (Por bieletas)",
      "Luz principal": "LED"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha MT09. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "mt09-sp",
    slug: "mt09-sp",
    name: "MT09 SP",
    category: "HYPER NAKED",
    image: "/images/motorcycles/mt09-sp.jpg",
    gallery: ["/images/motorcycles/mt09-sp.jpg"],
    price: 73000000,
    priceLabel: "Desde",
    description: "La MT09 SP de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#cecece",
            "image": "/images/motorcycles/colors/mt09-sp-color-0.png"
          }
],    featureBanners: [
      {
            "title": "ACABADO PREMIUM",
            "description": "El prestigio de la MT-09 SP se refleja en su diseño Icon Performance, inspirado en la R1M. Sus colores Supersport destacan su carácter deportivo y vínculo con la R1M, la Yamaha más avanzada. Detalles como el basculante de aluminio cepillado realzan su aspecto y calidad premium.",
            "image": "/images/motorcycles/features/mt09-sp-feature-0.jpg"
          },
      {
            "title": "YAMAHA RIDE CONTROL",
            "description": "La MT-09 SP incorpora, además de los modos SPORT, STREET y RAIN, modos TRACK exclusivos con hasta cuatro configuraciones personalizables para circuito. Permiten ajustar la gestión del freno motor, el control de frenos y desactivar el ABS trasero para un rendimiento superior en pista.",
            "image": "/images/motorcycles/features/mt09-sp-feature-1.jpg"
          },
      {
            "title": "SISTEMA SMART KEY",
            "description": "La MT-09 SP es la primera Hyper Naked con Smart Key de Yamaha. Permite arrancar el motor y bloquear o desbloquear el depósito con solo tener la llave cerca, ofreciendo una experiencia más práctica y moderna.",
            "image": "/images/motorcycles/features/mt09-sp-feature-3.jpg"
          },
      {
            "title": "SISTEMA SMART KEY",
            "description": "La MT-09 SP es la primera Hyper Naked con Smart Key de Yamaha. Permite arrancar el motor y bloquear o desbloquear el depósito con solo tener la llave cerca, ofreciendo una experiencia más práctica y moderna.",
            "image": "/images/motorcycles/features/mt09-sp-feature-4.jpg"
          },
      {
            "title": "IMU DE SEIS EJES",
            "description": "IMU de seis ejes con sistemas deasistencia al pilotaje sensibles al ángulo de inclinación. Inspirada en la R1, la IMU de seis ejes gestiona los sistemas de asistencia de la MT-09 SP, como TCS, SCS, LIF y control de frenado. Incorpora además un regulador de deslizamiento trasero (BSR) que mejora la estabilidad al frenar con fuerza.",
            "image": "/images/motorcycles/features/mt09-sp-feature-5.jpg"
          },
      {
            "title": "IMU DE SEIS EJES CON NUEVO",
            "description": "Inspirada en la R1, la IMU compacta de seis ejes controla los sistemas de asistencia al pilotaje de alta tecnología de la MT-09, incluido un sistema de control de tracción (TCS) de tres modos sensible a la inclinación, un sistema de control de deslizamiento (SCS), un sistema de control de elevación de la rueda delantera (LIF) y un sistema de control de frenado.",
            "image": "/images/motorcycles/features/mt09-sp-feature-6.jpg"
          },
      {
            "title": "REJILLAS AMPLIFICADORAS",
            "description": "El motor CP3 emite un rugido inconfundible que despierta pura adrenalina. La MT-09 SP incorpora conductos de admisión y una rejilla acústica que realzan su sonido, especialmente a alta velocidad, transmitiendo toda la energía del CP3.",
            "image": "/images/motorcycles/features/mt09-sp-feature-8.jpg"
          },
      {
            "title": "MANDOS INTUITIVOS",
            "description": "Los nuevos intermitentes ofrecen un uso más intuitivo: un toque breve activa tres destellos y uno completo, parpadeo continuo, cancelándose automáticamente tras 15 s o 150 m. El sistema ESS enciende las luces de emergencia ante frenadas bruscas.",
            "image": "/images/motorcycles/features/mt09-sp-feature-9.jpg"
          }
],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "890 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "194 kg",
      "Potencia": "117.3 Hp a 10000 rpm",
      "Torque": "93.0 Nm a 7000 rpm",
      "Tipo de motor": "4 Tiempos DOHC, 4  válvulas, refrigerado por líquido",
      "Largo total": "2.090 mm",
      "Ancho total": "820 mm",
      "Altura total": "1145 mm",
      "Altura al asiento": "825 mm",
      "Distancia entre ejes": "1.430 mm",
      "Distancia mínima del piso": "140 mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "194 kg",
      "Disposición de los cilindros": "3 Cilindros en línea",
      "Cilindraje:": "890 cc",
      "Diámetro por carrera": "78.0 X 62.1 mm",
      "Relación de compresión:": "11.5:1",
      "Potencia Máxima:": "117,3 Hp a 10000 rpm",
      "Torque máximo": "93.0 Nm a 7000 rpm",
      "Arranque:": "Eléctrico",
      "Tipo de lubricación": "Cárter húmedo",
      "Sistema de alimentación": "Inyección de combustible",
      "Capacidad de combustible:": "14L",
      "Encendido:": "TCI",
      "Capacidad batería": "12V, 8.6 Ah",
      "Batería": "YTZ10S",
      "Sistema de reducción primaria": "Engranaje",
      "Relación de reducción primaria": "1.681 (79/47)",
      "Sistema de reducción secundaria": "Cadena",
      "Relación de reducción secundaria": "2.813 (45/16)",
      "Tipo de embrague": "Multidisco en aceite / Resorte en espiral",
      "Tipo de transmisión": "Transmisión constante de 6 velocidades",
      "Relación de transmisión en 1ra": "2.571 (36/14)",
      "Relación de transmisión en 2da": "1.947 (37/19)",
      "Relación de transmisión en 3ra": "1.619 (34/21)",
      "Relación de transmisión en 4ta": "1.381 (29/21)",
      "Relación de transmisión en 5ta": "1.190 (25/21)",
      "Relación de transmisión en 6ta": "1.037 (28/27)",
      "Tipo de chasis": "Diamante",
      "Inclinación": "24° 40´",
      "Avance": "108 mm",
      "Rueda delantera:": "120/70ZR17 M/C 58W",
      "Rueda trasera:": "180/55ZR17 M/C 73W",
      "Freno delantero:": "Doble disco (ABS)",
      "Freno trasero:": "Disco (ABS)",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Basculante (Por bieletas)",
      "Luz principal": "LED"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha MT09 SP. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "yz65",
    slug: "yz65",
    name: "YZ65",
    category: "COMPETICIÓN",
    image: "/images/motorcycles/yz65.jpg",
    gallery: ["/images/motorcycles/yz65.jpg"],
    price: 24500000,
    priceLabel: "Desde",
    description: "La YZ65 de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#1d4ec1",
            "image": "/images/motorcycles/colors/yz65-color-0.jpg"
          }
],    featureBanners: [],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "65cc",
      "Peso (con aceite y tanque de gasolina lleno)": "61kg",
      "Potencia máxima": "–",
      "Torque máximo": "–",
      "Tipo de motor": "refrigerado por líquido, 2 cambios",
      "Largo total": "1615mm",
      "Ancho total": "760mm",
      "Altura total": "1000mm",
      "Altura al asiento": "755mm",
      "Distancia entre ejes": "1140mm",
      "Distancia mínima del piso": "265mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "61kg",
      "Disposición de los cilindros": "1 Cilindro inclinado hacia adelante",
      "Cilindraje:": "65cc",
      "Diámetro por carrera": "43.5×43.6mm",
      "Relación de compresión:": "8.1-9.6:1",
      "Arranque:": "Pedal",
      "Tipo de lubricación": "Premezcla",
      "Sistema de alimentación": "–",
      "Capacidad de combustible:": "3.5L/0.9usgal/0.8Imp.gal",
      "Encendido:": "CDI",
      "Capacidad batería": "–",
      "Batería": "–",
      "Sistema de reducción primaria": "Cadena",
      "Relación de reducción primaria": "3.611 (65/18)",
      "Relación de reducción secundaria": "3.357 (47/14)",
      "Tipo de embrague": "Multidisco en aceite",
      "Tipo de transmisión": "Transmisión constante de 6 velocidades",
      "Relación de transmisión en 1ra": "–",
      "Relación de transmisión en 2da": "–",
      "Relación de transmisión en 3ra": "–",
      "Relación de transmisión en 4ta": "–",
      "Relación de transmisión en 5ta": "–",
      "Relación de transmisión en 6ta": "–",
      "Tipo de chasis": "Semi double cradle",
      "Inclinación": "–",
      "Avance": "–",
      "Rueda delantera:": "60/100-14 30M con cámara",
      "Rueda trasera:": "80/100-12 41M con cámara",
      "Freno delantero:": "Disco hidráulico, Ø 198 mm",
      "Freno trasero:": "Disco hidráulico, Ø 190 mm",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Brazo basculante"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha YZ65. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "yz85lw",
    slug: "yz85lw",
    name: "YZ85LW",
    category: "COMPETICIÓN",
    image: "/images/motorcycles/yz85lw.jpg",
    gallery: ["/images/motorcycles/yz85lw.jpg"],
    price: 30400000,
    priceLabel: "Desde",
    description: "La YZ85LW de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#2139d3",
            "image": "/images/motorcycles/colors/yz85lw-color-0.png"
          }
],    featureBanners: [],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "85cm3",
      "Peso (con aceite y tanque de gasolina lleno)": "75kg",
      "Potencia máxima": "–",
      "Torque máximo": "–",
      "Tipo de motor": "refrigerado por líquido, 2 cambios",
      "Largo total": "1895mm",
      "Ancho total": "760mm",
      "Altura total": "1175mm",
      "Altura al asiento": "870mm",
      "Distancia entre ejes": "1285mm",
      "Distancia mínima del piso": "360mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "75kg",
      "Disposición de los cilindros": "1 Cilindro inclinado hacia adelante",
      "Cilindraje:": "85cm3",
      "Diámetro por carrera": "47.5×47.8mm",
      "Relación de compresión:": "8.2-9.6:1",
      "Arranque:": "Pedal",
      "Tipo de lubricación": "Premix lubrication",
      "Sistema de alimentación": "Carburador",
      "Capacidad de combustible:": "5.0L/1.3usgal/1.1Imp.gal",
      "Encendido:": "CDI",
      "Sistema de reducción primaria": "Cadena",
      "Relación de reducción primaria": "3.611 (65/18)",
      "Relación de reducción secundaria": "3.643 (51/14)",
      "Tipo de embrague": "Multidisco en aceite",
      "Tipo de transmisión": "Transmisión constante de 6 velocidades",
      "Relación de transmisión en 1ra": "2.455 (27/11)",
      "Relación de transmisión en 2da": "1.882 (32/17)",
      "Relación de transmisión en 3ra": "1.529 (26/17)",
      "Relación de transmisión en 4ta": "1.294 (22/17)",
      "Relación de transmisión en 5ta": "1.130 (26/23)",
      "Relación de transmisión en 6ta": "1.000 (25/25)",
      "Tipo de chasis": "Semi double cradle",
      "Inclinación": "26°00′",
      "Avance": "99mm",
      "Rueda delantera:": "70/100-19 42M Tube type",
      "Rueda trasera:": "90/100-16 52M Tube type",
      "Freno delantero:": "Hydraulic single disc brake",
      "Freno trasero:": "Hydraulic single disc brake",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Swingarm (link suspension)"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha YZ85LW. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "yz125",
    slug: "yz125",
    name: "YZ125",
    category: "COMPETICIÓN",
    image: "/images/motorcycles/yz125.png",
    gallery: ["/images/motorcycles/yz125.png"],
    price: 37000000,
    priceLabel: "Desde",
    description: "La YZ125 de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#153bd3",
            "image": "/images/motorcycles/colors/yz125-color-0.jpg"
          }
],    featureBanners: [],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "125 cc",
      "Peso con aceite y tanque lleno": "94kg",
      "Potencia máxima": "–",
      "Torque máximo": "–",
      "Tipo de motor": "2 Tiempos, refrigerado por liquido",
      "Largo Total": "2135mm",
      "Ancho Total": "825mm",
      "Altura Total": "1295mm",
      "Altura al Asiento": "975mm",
      "Distancia entre Ejes": "1445mm",
      "Distancia mínima del Piso": "365mm",
      "Peso sin aceite y gasolina": "–",
      "Tipo de Motor": "2 Tiempos, refrigerado por liquido",
      "Disposición Cilindros": "1 Cilindro",
      "Diámetro por Carrera": "54.0 X 54.5 mm",
      "Relación de Compresión": "8.6 – 10.7:1",
      "Potencia Máxima": "–",
      "Torque Máximo": "–",
      "Sistema de Encendido": "A Pedal",
      "Tipo de Lubricación": "Pre-Mezcla",
      "Capacidad de Combustible": "8 L",
      "Sistema de alimentación": "Carburador",
      "Encendido": "CDI",
      "Capacidad Batería": "n/a",
      "Relación Reducción Primaria": "64/19   3.368",
      "Sistema de Transmisión Final": "Cadena",
      "Relación Reducción Secundaria": "48/13   3.692",
      "Tipo de Embrague": "Multidisco, húmedo",
      "Tipo de Transmisión": "Transmisión constante de 6 velocidades",
      "Relación Transmisión 1ra": "31/13   2.385",
      "Relación Transmisión 2da": "29/15   1.933",
      "Relación Transmisión 3ra": "27/17   1.588",
      "Relación Transmisión 4ta": "23/17   1.353",
      "Relación Transmisión 5ta": "24/20   1.200",
      "Relación Transmisión 6ta": "23/21   1.095",
      "Rueda Delantera": "80/100-21 51M con neumático",
      "Rueda Trasera": "100/90-19 57M con neumático",
      "Freno Delantero": "Disco – 270mm",
      "Freno Trasero": "Disco – 245mm",
      "Tipo Suspensión Delantera": "Horquilla telescópica",
      "Recorrido Suspensión Delantera": "300mm",
      "Tipo Suspensión Trasera": "Basculante (por bieletas)",
      "Recorrido Suspensión Trasera": "315mm",
      "Luz Principal": "n/a"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha YZ125. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "yz250f",
    slug: "yz250f",
    name: "YZ250F",
    category: "COMPETICIÓN",
    image: "/images/motorcycles/yz250f.jpg",
    gallery: ["/images/motorcycles/yz250f.jpg"],
    price: 45000000,
    priceLabel: "Desde",
    description: "La YZ250F de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#000c7f",
            "image": "/images/motorcycles/colors/yz250f-color-0.png"
          }
],    featureBanners: [],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "250cc",
      "Peso (con aceite y tanque de gasolina lleno)": "106kg",
      "Potencia máxima": "–",
      "Torque máximo": "–",
      "Tipo de motor": "Refrigerado por líquido, un cilindro inclinado hacia atrás, 4 tiempos, 4 válvulas, DOHC",
      "Largo total": "2175mm",
      "Ancho total": "825mm",
      "Altura total": "1285mm",
      "Altura al asiento": "970mm",
      "Distancia entre ejes": "1475mm",
      "Distancia mínima del piso": "335mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "106kg",
      "Cilindraje:": "250cc",
      "Diámetro por carrera": "77,0 mm × 53,6 mm",
      "Relación de compresión:": "13.8:1",
      "Tipo de lubricación": "Cárter humedo",
      "Sistema de alimentación": "Inyección de combustible",
      "Capacidad de combustible:": "6,2 L",
      "Encendido:": "TCI",
      "Capacidad batería": "12V,2.4Ah(5HR)",
      "Rueda delantera:": "80/100-21 Dunlop® Geomax MX33F",
      "Rueda trasera:": "110/90-19 Dunlop® Geomax MX33",
      "Freno delantero:": "Disco hidráulico de 270 mm",
      "Freno trasero:": "Disco hidráulico de 240 mm",
      "Tipo de suspensión delantera": "Horquilla telescópica invertida, totalmente ajustable KYB® Speed-Sensitive System",
      "Tipo de suspensión trasera": "Basculante (por bieletas), totalmente ajustable KYB®"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha YZ250F. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "xtz150",
    slug: "xtz150",
    name: "XTZ150",
    category: "COMPETICIÓN",
    image: "/images/motorcycles/xtz150.png",
    gallery: ["/images/motorcycles/xtz150.png"],
    price: 14500000,
    priceLabel: "Desde",
    description: "La XTZ150 de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#0043e0",
            "image": "/images/motorcycles/colors/xtz150-color-0.png"
          },
      {
            "name": "Color 2",
            "hex": "#ffffff",
            "image": "/images/motorcycles/colors/xtz150-color-1.png"
          },
      {
            "name": "Color 3",
            "hex": "#0a0a0a",
            "image": "/images/motorcycles/colors/xtz150-color-2.png"
          },
      {
            "name": "Color 4",
            "hex": "#bf972b",
            "image": "/images/motorcycles/colors/xtz150-color-3.png"
          }
],    featureBanners: [
      {
            "title": "Freno ABS Monocanal",
            "description": "Sistema de frenos antibloqueo, Sistema que evita el bloqueo de la ruedad delantera al momento de una frenada de emergencia, esto permite tener mayorcontrol y estabilidad, lo que mejora laseguridad al detenerse rápidamente.",
            "image": "/images/motorcycles/features/xtz150-feature-0.png"
          },
      {
            "title": "Diseño y comodidad en función de la aventura",
            "description": "El modelo llega con un carácter utilitario-deportivo, cómodo y agresivo. El asiento biplaza está diseñado para garantizar una buena sensación para el piloto y una mayor comodidad para el pasajero, el asiento trasero es 95 mm más alto que el asiento del conductor para proporcionarle al pasajero una buena visibilidad hacia adelante.",
            "image": "/images/motorcycles/features/xtz150-feature-1.jpg"
          },
      {
            "title": "Motor de buen rendimiento",
            "description": "Posee un motor de 149 cc, 4 tiempos, un cilindro, SOHC y refrigerado por aire, alimentado con inyección electrónica y una relación de compresión de 9.6:1, el cual produce 12,3 HP a 7.500 rpm y 13,1 Nm de torque a 6.000 rpm.",
            "image": "/images/motorcycles/features/xtz150-feature-2.jpg"
          },
      {
            "title": "Freno de Disco trasero",
            "description": "El freno de disco es un sistema quegenera la fuerza de frenado por fricción para reducir la velocidad de la motocicleta hasta detenerla. En el caso de freno de disco el sistemaes accionado de forma hidráulica, usando la presión del líquido, para generar una buena sensación defrenado.",
            "image": "/images/motorcycles/features/xtz150-feature-3.jpg"
          },
      {
            "title": "Ilumina tu camino y rueda seguro",
            "description": "Cuenta con un sistema que enciende las luces al abrir el suiche principal. Dicho encendido automático de las luces mejora la seguridad, al hacer la motocicleta más visible en todo momento.",
            "image": "/images/motorcycles/features/xtz150-feature-4.jpg"
          },
      {
            "title": "Estabilidad y seguridad",
            "description": "La suspensión de la XTZ 150 ofrece un confort inigualable al absorber mejor los impactos generados por superficies irregulares. La suspensión delantera es con tubos interiores de 33 mm y una carrera de 180 mm, y la trasera es Mono-Cross por bieletas, con una carrera de 160 mm.",
            "image": "/images/motorcycles/features/xtz150-feature-5.jpg"
          },
      {
            "title": "Yamaha Diagnostic Tool (YDT)",
            "description": "Con la herramienta de diagnóstico Yamaha YDT, los Técnicos autorizados podrán realizar diagnósticos al sistema de inyección de combustible y podrán ver el funcionamiento en tiempo real de los sensores y actuadores de la motocicleta.",
            "image": "/images/motorcycles/features/xtz150-feature-6.jpg"
          },
      {
            "title": "Amigable con el medio ambiente",
            "description": "Este modelo está homologado con la norma medioambiental Euro3, al incorporar en su diseño dispositivos tecnológicos que ayudan a la reducción de emisiones, como son la inyeccción electrónica, el catalizador de 3 vías y el sensor de oxígeno.",
            "image": "/images/motorcycles/features/xtz150-feature-7.jpg"
          },
      {
            "title": "Tablero de instrumentos de fácil lectura",
            "description": "El tablero cuenta con indicadores de direccionales, revoluciones del motor, de marcha, neutra, luz alta, ECO, averías y de combustible. Incluye tanto un odómetro como un odómetro parcial (trip) y un velocímetro digital.",
            "image": "/images/motorcycles/features/xtz150-feature-8.jpg"
          }
],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "149 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "136 Kg",
      "Potencia máxima": "12.3 Hp a 7500 rpm",
      "Torque máximo": "13.1 Nm a 6000 rpm",
      "Tipo de motor": "4 Tiempos SOHC , refrigerado por aire",
      "Largo total": "2050mm",
      "Ancho total": "830mm",
      "Altura total": "1155mm",
      "Altura al asiento": "855mm",
      "Distancia entre ejes": "1350 mm",
      "Distancia mínima del piso": "235 mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "136 Kg",
      "Disposición de los cilindros": "1 Cilindro inclinado hacia adelante",
      "Cilindraje:": "149CC",
      "Diámetro por carrera": "57.3 x 57.9mm",
      "Relación de compresión:": "9.6 : 1",
      "Potencia Máxima:": "12.3 Hp a 7500 rpm",
      "Arranque:": "Electrico",
      "Tipo de lubricación": "Cárter húmedo",
      "Sistema de alimentación": "lnyección electrónica",
      "Capacidad de combustible:": "11L",
      "Encendido:": "TCI",
      "Capacidad batería": "12V, 4.0Ah (10HR)",
      "Batería": "MTX5 L-RS",
      "Sistema de reducción primaria": "Engranaje",
      "Relación de reducción primaria": "3.409 (75/22)",
      "Sistema de reducción secundaria": "Cadena",
      "Relación de reducción secundaria": "3.214 (45/14)",
      "Tipo de embrague": "Multidisco en aceite / Resorte en espiral",
      "Tipo de transmisión": "Transmisión constante de 5 velocidades",
      "Relación de engranajes": "—",
      "Relación de transmisión en 1ra": "2.714 (38/14)",
      "Relación de transmisión en 2da": "1.789 (34/19)",
      "Relación de transmisión en 3ra": "1.318 (29/22)",
      "Relación de transmisión en 4ta": "1.045 (23/22)",
      "Relación de transmisión en 5ta": "0.875 (21/24)",
      "Relación de transmisión en 6ta": "—",
      "Tipo de chasis": "Cuna semi doble",
      "Inclinación": "26° 00′",
      "Avance": "92mm",
      "Rueda delantera:": "90/90-19 M/C(52P) Tube type",
      "Rueda trasera:": "110/90-17M/C 60P",
      "Freno delantero:": "Disco (ABS)",
      "Freno trasero:": "Disco",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Basculante (Por bieletas)",
      "Luz principal": "Bombillo halógeno 12V 35W/35W X 1"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha XTZ150. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "xtz250",
    slug: "xtz250",
    name: "XTZ250",
    category: "COMPETICIÓN",
    image: "/images/motorcycles/xtz250.png",
    gallery: ["/images/motorcycles/xtz250.png"],
    price: 25900000,
    priceLabel: "Desde",
    description: "La XTZ250 de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#000000",
            "image": "/images/motorcycles/colors/xtz250-color-0.png"
          },
      {
            "name": "Color 2",
            "hex": "#f2f2f2",
            "image": "/images/motorcycles/colors/xtz250-color-1.png"
          },
      {
            "name": "Color 3",
            "hex": "#dd0b0b",
            "image": "/images/motorcycles/colors/xtz250-color-2.png"
          }
],    featureBanners: [
      {
            "title": "Motor de buen rendimiento",
            "description": "La XTZ 250 posee un motor de 249 cc, 4 tiempos, un cilindro, SOHC refrigerado por aire y aceite, el cual alcanza 20,4 HP a 8.000 rpm y 20,5 Nm de torque a 6.500 rpm. Adopta un pistón liviano de aluminio forjado y un cilindro con recubrimiento plateado que permite una óptima disipación de calor. Además, incorpora un balanceador para reducir las vibraciones percibidas por el conductor.",
            "image": "/images/motorcycles/features/xtz250-feature-0.jpg"
          },
      {
            "title": "Menos temperatura, buen aceite",
            "description": "Para garantizar un rendimiento estable del aceite del motor en sus diversas funciones, se adopta un enfriador (radiador) de aceite con un núcleo de 3 filas, el cual aporta a reducir los efectos de las altas temperaturas, inhibir la tendencia a la vaporización y a aumentar la vida útil del aceite.",
            "image": "/images/motorcycles/features/xtz250-feature-1.jpg"
          },
      {
            "title": "Frenos con ABS",
            "description": "El freno delantero utiliza una unidad ABS de un solo canal, que al momento de frenada de emergencia o súbita evita el bloqueo de la rueda delantera. Incorpora un freno de disco delantero de 245 mm con un caliper de doble pistón, y un freno de disco trasero de 203 mm con un caliper de un solo pistón.",
            "image": "/images/motorcycles/features/xtz250-feature-2.jpg"
          },
      {
            "title": "Manejo y agilidad",
            "description": "El diseño básico del chasis es igual que el de la Ténéré 250, pero la resistencia y rigidez se han ajustado para proporcionar un manejo ligero y ágil en el rango de velocidad baja a media. La suspensión delantera utiliza tubos internos de 41 mm y tiene 220 mm de recorrido y el amortiguador trasero permite que la llanta se desplace 205 mm, gracias a su articulación por bieletas.",
            "image": "/images/motorcycles/features/xtz250-feature-3.jpg"
          },
      {
            "title": "Amigable con el medio ambiente",
            "description": "Esta motocicleta está homologada con la regulación Euro3, al incorporar en su diseño dispositivos tecnológicos que ayudan a la reducción de emisiones contaminantes, como son el catalizador de 3 vías y el sensor de oxígeno del tubo de escape.",
            "image": "/images/motorcycles/features/xtz250-feature-4.jpg"
          },
      {
            "title": "Comodidad para la aventura",
            "description": "El asiento de la nueva XTZ250 es más ancho y más suave, en comparación a su anterior versión. El diseño de dos niveles del asiento proporciona al pasajero una buena vista hacia adelante y las manijas de apoyo facilitan el agarre del mismo.",
            "image": "/images/motorcycles/features/xtz250-feature-5.jpg"
          },
      {
            "title": "Tablero de instrumentos de fácil lectura",
            "description": "El panel de instrumentos es totalmente digital, lo cual permite visualizar las condiciones de funcionamiento de una forma clara, brindando información detallada como el consumo de combustible al instante y el consumo de combustible promedio durante el viaje.",
            "image": "/images/motorcycles/features/xtz250-feature-6.jpg"
          },
      {
            "title": "Iluminación",
            "description": "Posee luces LED, brillantes y energéticamente eficientes, tanto en el faro principal como en el stop. Además cuenta con el sistema AHO (Automatic Headlight On) que enciende las luces al momento de encender el motor.",
            "image": "/images/motorcycles/features/xtz250-feature-7.jpg"
          },
      {
            "title": "Yamaha Diagnostic Tool – YDT",
            "description": "La XTZ 250 es compatible con el Yamaha Diagnostic tool, el cual puede analizar y diagnosticar el sistema de inyección de combustible y el funcionamiento en tiempo real de los sensores y actuadores.",
            "image": "/images/motorcycles/features/xtz250-feature-8.jpg"
          }
],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "249 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "151 kg",
      "Potencia máxima": "20.4 Hp a 8000 rpm",
      "Torque máximo": "20.5 Nm a 6500 rpm",
      "Tipo de motor": "4 Tiempos SOHC,  refrigerado por aire y aceite",
      "Largo total": "2150mm",
      "Ancho total": "820mm",
      "Altura total": "1210mm",
      "Altura al asiento": "875mm",
      "Distancia entre ejes": "1385mm",
      "Distancia mínima del piso": "270mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "151kg",
      "Disposición de los cilindros": "1 Cilindro inclinado hacia adelante",
      "Cilindraje:": "249 cc",
      "Diámetro por carrera": "74.0×58.0mm",
      "Relación de compresión:": "9.8:1",
      "Potencia máxima": "20.4 Hp a 8000 rpm",
      "Arranque:": "Eléctrico",
      "Tipo de lubricación": "Cárter húmedo",
      "Sistema de alimentación": "inyección de combustible",
      "Capacidad de combustible:": "14L",
      "Encendido:": "TCI",
      "Capacidad batería": "12V, 6 Ah",
      "Batería": "XTZ7L",
      "Sistema de reducción primaria": "Engranaje recto",
      "Relación de reducción primaria": "74/24 (3.083)",
      "Sistema de reducción secundaria": "cadena",
      "Relación de reducción secundaria": "40/13 = 3.077",
      "Tipo de embrague": "Multidisco en aceite / resorte en espiral",
      "Tipo de transmisión": "Transmisión constante de 5 velocidades",
      "Relación de transmisión en 1ra": "2.571 (36/14)",
      "Relación de transmisión en 2da": "1.684 (32/19)",
      "Relación de transmisión en 3ra": "1.273 (28/22)",
      "Relación de transmisión en 4ta": "1.040 (26/25)",
      "Relación de transmisión en 5ta": "0.852 (23/27)",
      "Relación de transmisión en 6ta": "—",
      "Tipo de chasis": "Cuna semidoble",
      "Inclinación": "26° 30´",
      "Avance": "105mm",
      "Rueda delantera:": "80/90- 21 M/C 48S",
      "Rueda trasera:": "120/80- 18 M/C 62S",
      "Freno delantero:": "Disco (ABS)",
      "Freno trasero:": "Disco",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Basculante (Por bieletas)",
      "Luz principal": "LED"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha XTZ250. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "tenere-700",
    slug: "tenere-700",
    name: "Ténéré 700",
    category: "ADVENTURE TOURING",
    image: "/images/motorcycles/tenere-700.jpg",
    gallery: ["/images/motorcycles/tenere-700.jpg"],
    price: 73000000,
    priceLabel: "Desde",
    description: "La Ténéré 700 de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#1239ba",
            "image": "/images/motorcycles/colors/tenere-700-color-0.jpg"
          },
      {
            "name": "Color 2",
            "hex": "#0091d2",
            "image": "/images/motorcycles/colors/tenere-700-color-1.jpg"
          },
      {
            "name": "Color 3",
            "hex": "#6b6861",
            "image": "/images/motorcycles/colors/tenere-700-color-2.jpg"
          }
],    featureBanners: [
      {
            "title": "Completo tablero",
            "description": "Pantalla TFT de 6.3″ en color, cuenta con dos temas explorer con diseño moderno y dinámico y tema Street con apariencia más moderna y tradicional, este nuevo tablero cuenta con conexion YConnect.",
            "image": "/images/motorcycles/features/tenere-700-feature-0.jpg"
          },
      {
            "title": "Motor de alta tecnología",
            "description": "El confiable y conocido motor bicilíndrico CP2 de 689 cc entrega 72.4 Hp a 8.750 rpm, y lo más importante, un torque de 67.0Nm a 6.500 rpm. Esto le permitirán al piloto tener un motor con alto par con una respuesta lineal y controlada.",
            "image": "/images/motorcycles/features/tenere-700-feature-1.jpg"
          },
      {
            "title": "Chasis",
            "description": "Este chasis está diseñado para los terrenos más extremos. Se trata de un chasis tubular con acero de alta densidad, que le permite tener una gran rigidez y al mismo tiempo bajo peso. En su diseño, se logró una distancia entre ejes corta, así como un cuerpo delgado, para que el piloto tenga mejor control, logrando agilidad en situaciones técnicas de conducción. Adicionalmente cuenta con 240mm de distancia al suelo, lo que la hace perfecta para terrenos extremos.",
            "image": "/images/motorcycles/features/tenere-700-feature-2.jpg"
          },
      {
            "title": "Asiento y carrocería ergonómicos",
            "description": "Su cuerpo angosto, tanque de combustible delgado y asiento plano, le permiten al conductor pilotar de pie o sentado, para tener máxima agilidad y confianza en cualquier terreno. A esto se le suman el carenado protector y los guardamanos funcionan con el manillar cónico para garantizar la comodidad en los viajes más largos.",
            "image": "/images/motorcycles/features/tenere-700-feature-3.jpg"
          },
      {
            "title": "Frontal agresivo tipo Rally",
            "description": "El carenado superior, inspirado en los rallyes y los protectores de manos estándar, garantizan una protección contra el viento y la intemperie ideal para largos días de conducción. El manillar está posicionado para brindar una posición de conducción relajada cuando se está sentado o de pie sobre los estribos. La parte frontal también está diseñada para acomodar dispositivos de navegación adicionales, como un GPS o un libro de ruta de rally.",
            "image": "/images/motorcycles/features/tenere-700-feature-4.jpg"
          },
      {
            "title": "Iluminación LED",
            "description": "Parte de su llamativo diseño se destaca en los faros LED cuádruples. Este diseño de faros delanteros de dos más dos, apilados verticalmente, brinda una apariencia agresiva y una excelente visibilidad, mientras que los LED en sí son brillantes, duraderos y resistentes a golpes y vibraciones, además fácilmente ajustables.",
            "image": "/images/motorcycles/features/tenere-700-feature-5.jpg"
          },
      {
            "title": "Suspensión invertida",
            "description": "La Ténéré utiliza una horquilla delantera invertida de 43 mm de diámetro y 210 mm de recorrido. Es ajustable en compresión y extensión.",
            "image": "/images/motorcycles/features/tenere-700-feature-6.jpg"
          },
      {
            "title": "Completo tablero",
            "description": "Cada aspecto de la Ténéré 700 está diseñado para combinar la legendaria confiabilidad de Yamaha con un rendimiento impresionante, desde los faros LED compactos hasta el chasis de acero fuerte y estrecho, el motor contrabalanceado suave y los indicadores LCD nítidos.",
            "image": "/images/motorcycles/features/tenere-700-feature-7.jpg"
          },
      {
            "title": "Frenado para todo terreno",
            "description": "Para lograr un rendimiento excepcional en cualquier tipo de carretera, la Ténéré 700 cuenta con tres modos de ABS intercambiables.El modo 1activa el ABS en ambas ruedas, el cuál es ideal cuando se está conduciendo por carretera.El modo 2activa el ABS en la rueda delantera y desactiva la trasera para darte mas confianza en terrenos destapados.El modo 3desactiva por completo el ABS, lo que te da la máxima capacidad de control en las aventuras offroad.",
            "image": "/images/motorcycles/features/tenere-700-feature-8.jpg"
          }
],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "689 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "205 kg",
      "Potencia": "72.4 Hp  a 9000 rpm",
      "Torque": "67.0Nm a 6500 rpm",
      "Tipo de motor": "4 Tiempos DOHC, 4  válvulas, refrigerado por líquido",
      "Largo total": "2370 mm",
      "Ancho total": "905mm",
      "Altura total": "1455mm",
      "Altura al asiento": "875mm",
      "Distancia entre ejes": "1595 mm",
      "Distancia mínima del piso": "240mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "205 kg",
      "Disposición de los cilindros": "2 Cilindros en línea",
      "Cilindraje:": "689 cc",
      "Diámetro por carrera": "80.0 X 68.6 mm",
      "Relación de compresión:": "11.5:1",
      "Potencia Máxima:": "72.4 Hp  a 9000 rpm",
      "Torque máximo": "67.0Nm  a 6500 rpm",
      "Arranque:": "Eléctrico",
      "Tipo de lubricación": "Cárter húmedo",
      "Sistema de alimentación": "Inyección de combustible",
      "Capacidad de combustible:": "16L",
      "Encendido:": "TCI",
      "Capacidad batería": "12V, 8.6Ah (10HR)",
      "Batería": "YTZ10S",
      "Sistema de reducción primaria": "Engranaje",
      "Relación de reducción primaria": "1.925 (77/40)",
      "Sistema de reducción secundaria": "Cadena",
      "Relación de reducción secundaria": "3.066(46/15)",
      "Tipo de embrague": "Multidisco en aceite / Resorte en espiral",
      "Tipo de transmisión": "Transmisión constante de 6 velocidades",
      "Relación de transmisión en 1ra": "2.846 (37/13)",
      "Relación de transmisión en 2da": "2.125 (34/16)",
      "Relación de transmisión en 3ra": "1.632 (31/19)",
      "Relación de transmisión en 4ta": "1.300 (26/20)",
      "Relación de transmisión en 5ta": "1.091 (24/22)",
      "Relación de transmisión en 6ta": "0.964 (27/28)",
      "Tipo de chasis": "Doble Cuna",
      "Inclinación": "27°00´",
      "Avance": "105mm",
      "Rueda delantera:": "90/90-21 M/C 54V",
      "Rueda trasera:": "150/70 R18 M/C 70V",
      "Freno delantero:": "Doble disco (ABS)",
      "Freno trasero:": "Disco (ABS)",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Basculante (Por bieletas)",
      "Luz principal": "LED",
      "ABS": "Si",
      "AHO": "Si",
      "ASC": "No",
      "Blue Core": "No",
      "TCS": "No",
      "Euro": "3",
      "UBS": "No",
      "FI": "Si",
      "Smart Key": "No",
      "VVA": "No"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha Ténéré 700. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "tracer-9-gt",
    slug: "tracer-9-gt",
    name: "TRACER 9 GT",
    category: "SPORT TOURING",
    image: "/images/motorcycles/tracer-9-gt.png",
    gallery: ["/images/motorcycles/tracer-9-gt.png"],
    price: 79000000,
    priceLabel: "Desde",
    description: "La TRACER 9 GT de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#e8e8e8",
            "image": "/images/motorcycles/colors/tracer-9-gt-color-0.png"
          },
      {
            "name": "Color 2",
            "hex": "#3a3a3a",
            "image": "/images/motorcycles/colors/tracer-9-gt-color-1.png"
          }
],    featureBanners: [
      {
            "title": "Suspensión semiactiva KYB",
            "description": "La suspensión electrónica delantera y trasera totalmente ajustable está controlada por la IMU y la ECU de 6 ejes que activan la unidad hidráulica (HU) y la unidad de control de suspensión (SCU). Los ajustes de amortiguación se establecen instantáneamente a través de un solenoide para lograr una conducción suave y segura independientemente de la carga o de las condiciones de conducción. El modo se establece a través de la interfaz TFT.",
            "image": "/images/motorcycles/features/tracer-9-gt-feature-0.jpg"
          },
      {
            "title": "Sistema de cambio rápido para subir y bajar marchas (QSS)",
            "description": "Permite realizar cambios ascendentes y descendentes sin necesidad de accionar el embrague, al no estar vinculados pueden configurarse de forma independiente: Modo 1: Cambios ascendentes al acelerar. Cambios descendentes al desacelerar. Modo 2: Cambios ascendentes y descendentes al acelerar y desacelerar",
            "image": "/images/motorcycles/features/tracer-9-gt-feature-1.jpg"
          },
      {
            "title": "Luces de giro LED",
            "description": "Este sistema de iluminación de vanguardia, el primero de su tipo en el mundo de las motocicletas, ajusta automáticamente el haz de luz para ofrecer una visibilidad óptima en todo momento. Cuenta con una cámara integrada en el carenaje, que evalúa las condiciones del tráfico y adapta de forma automática la intensidad y dirección de los paneles LED.",
            "image": "/images/motorcycles/features/tracer-9-gt-feature-2.jpg"
          },
      {
            "title": "Colores y gráficos exclusivos",
            "description": "La TRACER 9 GT está disponible con colores y gráficos exclusivos de Yamaha Icon Performance que ofrecen un acabado premium que evocan a la R1M, lo que añade un nivel de sofisticación deportiva al conjunto.",
            "image": "/images/motorcycles/features/tracer-9-gt-feature-3.jpg"
          },
      {
            "title": "Motor CP3 de 890 cc que cumple la norma EURO3",
            "description": "La TRACER 9 GT está disponible con colores y gráficos exclusivos de Yamaha Icon Performance que ofrecen un acabado premium que evocan a la R1M, lo que añade un nivel de sofisticación deportiva al conjunto.",
            "image": "/images/motorcycles/features/tracer-9-gt-feature-4.jpg"
          },
      {
            "title": "Chasis ligero de aluminio fundido",
            "description": "La TRACER 9 GT de última generación está equipada con un chasis Deltabox de aluminio fundido CF de nuevo diseño que proporciona niveles más altos de rigidez, agilidad deportiva a la motocicleta y una estabilidad segura. El basculante de aluminio rediseñado es 64 mm más largo para garantizar una excelente estabilidad a alta velocidad sin comprometer el carácter ágil y deportivo de la motocicleta.",
            "image": "/images/motorcycles/features/tracer-9-gt-feature-5.jpg"
          },
      {
            "title": "Diseño y estilo de última generación",
            "description": "El nuevo diseño compacto y aerodinámico de la carrocería otorga a la TRACER 9 GT un aspecto moderno e innovador que transmite a la perfección el emocionante carácter deportivo de la motocicleta junto con sus versátiles capacidades de turismo. El ligero carenado mejora la comodidad de conducción en largas distancias, y el depósito de combustible de 19 litros ofrece una autonomía de 387,76 km (basada en el consumo durante pruebas de homologación con el ciclo WMTC).",
            "image": "/images/motorcycles/features/tracer-9-gt-feature-6.jpg"
          },
      {
            "title": "Pantalla *TFT de 7» a todo color",
            "description": "La pantalla TFT tiene un diseño más delgado y cuenta con temas: Touring, Sport y Brand, que se adaptan a las preferencias y a la situación de conducción. El tema deseado puede seleccionarse utilizando los nuevos botones del comando izquierdo. También permite vincular el celular a través de la aplicación gratuita Y-CONNECT.",
            "image": "/images/motorcycles/features/tracer-9-gt-feature-7.jpg"
          },
      {
            "title": "Control de tracción",
            "description": "Este modelo utiliza un sistema de control de tracción variable. Para cada nivel de ajuste, cuanto más se incline la motocicleta, mayor será el control de tracción. Hay tres niveles de ajuste disponible: Nivel 1: Adecuado para conducción deportiva. Nivel 2: Adecuado para circular por Carretera. Nivel 3: adecuado en superficies mojadas o resbaladizas.",
            "image": "/images/motorcycles/features/tracer-9-gt-feature-8.jpg"
          }
],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "890 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "227 kg",
      "Potencia": "117.3 Hp  a 10000 rpm",
      "Torque": "93.0Nm  a 7000 rpm",
      "Tipo de motor": "4 Tiempos DOHC, 4  válvulas, refrigerado por líquido",
      "Largo total": "2175 mm",
      "Ancho total": "900 mm",
      "Altura total": "1440 mm – 1530 mm",
      "Altura al asiento": "845 mm – 860 mm",
      "Distancia entre ejes": "1500mm",
      "Distancia mínima del piso": "135mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "227 kg",
      "Disposición de los cilindros": "3 Cilindros en línea",
      "Cilindraje:": "890 cc",
      "Diámetro por carrera": "78.0 X 62.1 mm",
      "Relación de compresión:": "11,5:1",
      "Potencia Máxima:": "117.3 Hp  a 10000 rpm",
      "Torque máximo": "93.0Nm  a 7000 rpm",
      "Arranque:": "Eléctrico",
      "Tipo de lubricación": "Cárter humedo",
      "Sistema de alimentación": "Inyección de combustible",
      "Capacidad de combustible:": "19L (Aprox. 5.02 gal)",
      "Encendido:": "TCI",
      "Capacidad batería": "12V, 8.6Ah (10HR)",
      "Batería": "YTZ10S",
      "Sistema de reducción primaria": "Engranaje",
      "Relación de reducción primaria": "1.681 (79/47)",
      "Sistema de reducción secundaria": "Cadena",
      "Relación de reducción secundaria": "2.813 (45/16)",
      "Tipo de embrague": "Multidisco en aceite / Resorte en espiral",
      "Tipo de transmisión": "Transmisión constante de 6 velocidades",
      "relación de engranajes": "–",
      "Relación de transmisión en 1ra": "2.571 (36/14)",
      "Relación de transmisión en 2da": "1.947 (37/19)",
      "Relación de transmisión en 3ra": "1.619 (34/21)",
      "Relación de transmisión en 4ta": "1.381 (29/21)",
      "Relación de transmisión en 5ta": "1.190 (25/21)",
      "Relación de transmisión en 6ta": "1.037 (28/27)",
      "Tipo de chasis": "Diamante",
      "Inclinación": "24° 25´",
      "Avance": "106 mm",
      "Rueda delantera:": "120/70ZR17 M/C 58W",
      "Rueda trasera:": "180/55ZR17 M/C 73W",
      "Freno delantero:": "Doble disco (ABS)",
      "Freno trasero:": "Disco (ABS)",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Basculante (Por bieletas)",
      "Luz principal": "LED"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha TRACER 9 GT. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "aerox-155",
    slug: "aerox-155",
    name: "Aerox 155",
    category: "SCOOTERS",
    image: "/images/motorcycles/aerox-155.jpg",
    gallery: ["/images/motorcycles/aerox-155.jpg"],
    price: 12800000,
    priceLabel: "Desde",
    description: "La Aerox 155 de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#f4f4f4",
            "image": "/images/motorcycles/colors/aerox-155-color-0.png"
          },
      {
            "name": "Color 2",
            "hex": "#353535",
            "image": "/images/motorcycles/colors/aerox-155-color-1.png"
          },
      {
            "name": "Color 3",
            "hex": "#686868",
            "image": "/images/motorcycles/colors/aerox-155-color-2.png"
          }
],    featureBanners: [
      {
            "title": "Válvula apertura Variable",
            "description": "El sistema VVA permite tener gran torque en baja velocidad y potencia a altas revoluciones del motor. Esto es posible gracias a un sistema electrónico y a un mecanismo que permite tener dos diferentes longitudes en la apertura de lasválvulas de admisión (una corta para las bajas y una más larga para las altas) permitiendo el ingreso de la mezcla de aire y combustible al cilindro, y que, en conjunto con una puesta a punto de la programación de la inyección electrónica, permite entregar una sensación lineal de aceleración y una buena economía de combustible.",
            "image": "/images/motorcycles/features/aerox-155-feature-0.jpg"
          },
      {
            "title": "Cumple con la norma EURO 3.",
            "description": "Estándar de prueba para determinar la concentración de emisiones contaminantes definido para Europa que controla las cantidades de gases contaminantes como óxidos de nitrógeno (NOX), Hidrocarburos (HC), Monóxido de carbono (CO) y partículas están reguladas para la mayoría de los vehículos.",
            "image": "/images/motorcycles/features/aerox-155-feature-1.jpg"
          },
      {
            "title": "Freno ABS Mono canal",
            "description": "ABS – Sistema de frenos antibloqueo, que evita el bloqueo de la rueda delantera al momento de una frenada súbita o de emergencia. En la Aerox el sistema de antibloqueo se encuentra solo en la rueda delantera.",
            "image": "/images/motorcycles/features/aerox-155-feature-2.jpg"
          },
      {
            "title": "Puerto de carga 12V",
            "description": "Su práctica toma de corriente de 12V te permite mantener el celular completamente cargado mientras conduces, y los bolsillos delanteros ofrecen un lugar resistente a la intemperie para guardar tus pertenencias personales.",
            "image": "/images/motorcycles/features/aerox-155-feature-3.jpg"
          },
      {
            "title": "Amplio baúl",
            "description": "Con 24,5 litros de capacidad, la Aerox dispone de un baúl práctico, que es lo suficientemente grande como para introducir un casco integral y otros objetos personales.",
            "image": "/images/motorcycles/features/aerox-155-feature-4.jpg"
          },
      {
            "title": "Smart Key",
            "description": "Puedes operar el interruptor principal sin necesidad de tener las llaves en la mano. Ayuda a no perder tiempo buscando las llaves en los bolsillos. La tecnología sin llave te permite arrancar el motor, desbloquear el asiento y abrir el tapón de combustible.",
            "image": "/images/motorcycles/features/aerox-155-feature-5.jpg"
          }
],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "155 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "124kg",
      "Potencia máxima": "15.15 HP a 8000 rpm",
      "Torque máximo": "13.9 Nm @ 6500 rpm",
      "Tipo de motor": "Refrigeración líquida,4-tiempos, SOHC, 4 válvulas",
      "Largo total": "1980mm",
      "Ancho total": "700mm",
      "Altura total": "1150mm",
      "Altura al asiento": "790mm",
      "Distancia entre ejes": "1350mm",
      "Distancia mínima del piso": "145mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "124kg",
      "Disposición de los cilindros": "1 Cilindro inclinado hacia adelante",
      "Cilindraje:": "155 cc",
      "Diámetro por carrera": "58.0X58.7 mm",
      "Relación de compresión:": "11.6 : 1",
      "Potencia Máxima:": "15.15 HP a 8000 rpm",
      "Arranque:": "Eléctrico",
      "Tipo de lubricación": "Cárter Húmedo",
      "Sistema de alimentación": "Inyección de combustible",
      "Capacidad de combustible:": "5.5L (Aprox. 1.45 gal)",
      "Encendido:": "TCI",
      "Capacidad batería": "12V, 6.0Ah (10HR)",
      "Batería": "YTZ7V",
      "Relación de transmisión CVT": "—",
      "Sistema de reducción primaria": "Engranaje",
      "Relación de reducción primaria": "1.000 (—)",
      "Sistema de reducción secundaria": "Correa en V",
      "Relación de reducción secundaria": "10.769 (56/16 x 40/13)",
      "Tipo de embrague": "Embrague centrifugo seco",
      "Tipo de transmisión": "CVT",
      "Relación de transmisión en 1ra": "2.300 – 0.724",
      "Relación de transmisión en 2da": "—",
      "Relación de transmisión en 3ra": "—",
      "Relación de transmisión en 4ta": "—",
      "Relación de transmisión en 5ta": "—",
      "Relación de transmisión en 6ta": "—",
      "Tipo de chasis": "Armazón inferior",
      "Inclinación": "26° 30′",
      "Avance": "100mm",
      "Rueda delantera:": "110/80-14M/C 53P Tubeless",
      "Rueda trasera:": "140/70-14M/C 62P Tubeless",
      "Freno delantero:": "Disco (ABS)",
      "Freno trasero:": "Tambor",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Unidad oscilante",
      "Luz principal": "LED"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha Aerox 155. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "nmax",
    slug: "nmax",
    name: "NMAX",
    category: "SCOOTERS",
    image: "/images/motorcycles/nmax.jpg",
    gallery: ["/images/motorcycles/nmax.jpg"],
    price: 16800000,
    priceLabel: "Desde",
    description: "La NMAX de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#757575",
            "image": "/images/motorcycles/colors/nmax-color-0.jpg"
          },
      {
            "name": "Color 2",
            "hex": "#c9c9c9",
            "image": "/images/motorcycles/colors/nmax-color-1.png"
          },
      {
            "name": "Color 3",
            "hex": "#dd3333",
            "image": "/images/motorcycles/colors/nmax-color-2.png"
          },
      {
            "name": "Color 4",
            "hex": "#ffffff",
            "image": "/images/motorcycles/colors/nmax-color-3.png"
          },
      {
            "name": "Color 5",
            "hex": "#0a0a0a",
            "image": "/images/motorcycles/colors/nmax-color-4.png"
          }
],    featureBanners: [
      {
            "title": "Innovación y Estilo Vanguardista",
            "description": "Su faro integra direccionales LED que complementan la nueva disposición de las luces altas y bajas, mientras que el stop también incluye direccionales LED integradas. Las luces LED no solo proporcionan mayor vida útil y reducen el consumo energético, sino que también generan una iluminación óptima, asegurando una conducción segura y placentera.",
            "image": "/images/motorcycles/features/nmax-feature-0.jpg"
          },
      {
            "title": "MOTOR BLUE CORE",
            "description": "Los motores Yamaha, diseñados bajo el concepto BLUE CORE, incorporan desarrollos tecnológicos avanzados que aseguran un mejor aprovechamiento de la energía. Como resultado, se obtiene una motocicleta que ofrece una experiencia de conducción placentera, con menor consumo de combustible y menores emisiones contaminantes. La tecnología BLUE CORE de Yamaha redefine la eficiencia y el rendimiento, proporcionando una solución sostenible y de alta calidad para el motociclista.",
            "image": "/images/motorcycles/features/nmax-feature-1.jpg"
          },
      {
            "title": "Variable Valve Actuation",
            "description": "El sistema VVA (Variable Valve Actuation) de Yamaha permite obtener gran torque a baja velocidad y potencia a altas revoluciones del motor. Esto es posible gracias a un sistema electrónico y a un mecanismo que ajusta la apertura de las válvulas de admisión en dos longitudes diferentes: una corta para bajas revoluciones y una más larga para altas revoluciones. Este diseño optimiza la mezcla de aire y combustible en el cilindro, y junto con una precisa programación de la inyección electrónica, proporciona una aceleración lineal y una excelente economía de combustible.",
            "image": "/images/motorcycles/features/nmax-feature-2.jpg"
          },
      {
            "title": "EURO 3",
            "description": "Las normas ambientales Euro son estándares internacionales que evalúan las emisiones de gases de los vehículos en movimiento, con el objetivo de limitar la contaminación del aire.",
            "image": "/images/motorcycles/features/nmax-feature-3.jpg"
          },
      {
            "title": "Sistema de Control de Tracción",
            "description": "El sistema de control de tracción de Yamaha ayuda a mantener la tracción al acelerar sobre superficies resbaladizas, como carreteras no pavimentadas o mojadas. Si los sensores detectan que la rueda trasera comienza a deslizar, el sistema regula la potencia del motor según sea necesario hasta detener el deslizamiento, garantizando una conducción segura y estable en cualquier condición.",
            "image": "/images/motorcycles/features/nmax-feature-4.jpg"
          },
      {
            "title": "FRENOS ABS",
            "description": "El sistema de frenos antibloqueo (ABS) de Yamaha evita el bloqueo de las ruedas delantera y trasera durante frenadas de emergencia, proporcionando mayor control y estabilidad al detenerse rápidamente. Con el ABS de doble canal, tanto la rueda delantera como la trasera están protegidas contra el bloqueo, asegurando una conducción segura y confiable en cualquier situación.",
            "image": "/images/motorcycles/features/nmax-feature-5.jpg"
          },
      {
            "title": "Conectividad y Almacenamiento",
            "description": "El toma de corriente tipo C de 12V permite mantener el celular completamente cargado mientras se conduce, asegurando que siempre estés conectado. Además, los compartimientos delanteros ofrecen un lugar resistente a la intemperie para guardar tus pertenencias personales de manera segura y accesible durante el viaje.",
            "image": "/images/motorcycles/features/nmax-feature-6.jpg"
          },
      {
            "title": "Amplio baúl",
            "description": "La Yamaha NMAX dispone de un baúl práctico que la convierte en la compañera ideal para el día a día. Bajo el asiento doble se encuentra un amplio compartimento de almacenamiento, lo suficientemente grande como para guardar el casco y otros objetos personales, asegurando que siempre tengas espacio para lo que necesites llevar contigo.",
            "image": "/images/motorcycles/features/nmax-feature-7.jpg"
          },
      {
            "title": "Smart Key",
            "description": "La tecnología SmartKey te permite arrancar el motor, desbloquear el asiento y abrir el tapón de combustible, ofreciendo una experiencia de conducción más cómoda y eficiente.",
            "image": "/images/motorcycles/features/nmax-feature-8.jpg"
          },
      {
            "title": "Start & Stop",
            "description": "La función Start & Stop apaga automáticamente el motor cuando la motocicleta se detiene en semáforos o situaciones similares. Para volver a encender el motor, el conductor solo necesita girar el acelerador. Gracias al Smart Motor Generator, el arranque del motor es extremadamente silencioso. Este sistema no solo contribuye al ahorro de combustible, sino que también reduce las emisiones, haciendo cada viaje más eficiente y ecológico.",
            "image": "/images/motorcycles/features/nmax-feature-9.jpg"
          }
],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "155 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "131kg",
      "Potencia máxima": "15.15 HP a 8000 rpm",
      "Torque máximo": "14.2 Nm @ 6500 rpm",
      "Tipo de motor": "Refrigeración líquida,4-tiempos, SOHC, 4 válvulas",
      "Largo total": "1935mm",
      "Ancho total": "740mm",
      "Altura total": "1200mm",
      "Altura al asiento": "770mm",
      "Distancia entre ejes": "1340mm",
      "Distancia mínima del piso": "125mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "131kg",
      "Disposición de los cilindros": "1 Cilindro",
      "Cilindraje:": "155 cc",
      "Diámetro por carrera": "58.0 X 58.7 mm",
      "Relación de compresión:": "11.6 : 1",
      "Potencia Máxima:": "15.15 HP a 8000 rpm",
      "Arranque:": "Eléctrico",
      "Tipo de lubricación": "Cárter Húmedo",
      "Sistema de alimentación": "Inyección de combustible",
      "Capacidad de combustible:": "7.1L",
      "Encendido:": "TCI",
      "Capacidad batería": "12V, 5.0Ah",
      "Batería": "YTZ6V",
      "Relación de transmisión CVT": "2.239 – 0.706",
      "Sistema de reducción primaria": "Engranaje",
      "Relación de reducción primaria": "1000",
      "Sistema de reducción secundaria": "Correa en V",
      "Relación de reducción secundaria": "10.208 (56/16 x 35/12)",
      "Tipo de embrague": "Embrague centrifugo seco",
      "Tipo de transmisión": "CVT",
      "Relación de transmisión en 1ra": "—",
      "Relación de transmisión en 2da": "—",
      "Relación de transmisión en 3ra": "—",
      "Relación de transmisión en 4ta": "—",
      "Relación de transmisión en 5ta": "—",
      "Relación de transmisión en 6ta": "—",
      "Tipo de chasis": "Armazón inferior",
      "Inclinación": "26° 00′",
      "Avance": "98 mm",
      "Rueda delantera:": "110/70-13M/C 48P Tubeless",
      "Rueda trasera:": "130/70-13M/C 63P Tubeless",
      "Freno delantero:": "Disco (ABS)",
      "Freno trasero:": "Disco (ABS)",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Unidad oscilante",
      "Luz principal": "LED"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha NMAX. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "xmax-300",
    slug: "xmax-300",
    name: "Xmax 300",
    category: "SCOOTERS",
    image: "/images/motorcycles/xmax-300.jpg",
    gallery: ["/images/motorcycles/xmax-300.jpg"],
    price: 34700000,
    priceLabel: "Desde",
    description: "La Xmax 300 de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#d6d6d6",
            "image": "/images/motorcycles/colors/xmax-300-color-0.png"
          },
      {
            "name": "Color 2",
            "hex": "#7a7a7a",
            "image": "/images/motorcycles/colors/xmax-300-color-1.jpg"
          },
      {
            "name": "Color 3",
            "hex": "#000000",
            "image": "/images/motorcycles/colors/xmax-300-color-2.png"
          }
],    featureBanners: [
      {
            "title": "Motor poderoso y eficiente:",
            "description": "El motor de 292 cc de la XMAX ha sido diseñado utilizando la tecnología Blue Core de Yamaha, cuyo objetivo fundamental es lograr un excelente desempeño, aprovechando al máximo cada gota de combustible y con unas bajas emisiones de gases. Posee un diseño de cilindro descentrado que ayuda a minimizar las pérdidas mecánicas y logar una mayor eficiencia de enfriamiento gracias a su cilindro en DiASil con un enfriador de pistón de chorro de aceite.",
            "image": "/images/motorcycles/features/xmax-300-feature-0.jpg"
          },
      {
            "title": "Luces el LED",
            "description": "La Xmax cuenta con faros principales, luz de stop y de posición en LED. Ofrecen ventajas como un mayor brillo, un bajo consumo eléctrico, y también proyectan un aspecto elegante y moderno que subraya la calidad superior y la tecnología de vanguardia de la Xmax 300. En la parte trasera, la luz trasera envolvente en LED y una luz de posición LED, hace que la XMAX 300 sea muy visible para otros usuarios de la carretera, de día y de noche.",
            "image": "/images/motorcycles/features/xmax-300-feature-1.jpg"
          },
      {
            "title": "Amplio espacio en el baúl",
            "description": "Los usuarios de Xmax 300 disfrutarán de los más altos niveles de funcionalidad diaria. Debajo del asiento doble hay uno de los compartimentos de almacenamiento más grandes de su clase, con capacidad para 2 cascos integrales y un poco más. Sus dimensiones extra anchas también pueden acomodar un computador portátil, lo que lo convierte en un vehículo ideal para los días de semana, así como en un vehículo de disfrute para un fin de semana emocionante.",
            "image": "/images/motorcycles/features/xmax-300-feature-2.jpg"
          },
      {
            "title": "Control de tracción",
            "description": "La instalación de un sistema de control de tracción de serie subraya las especificaciones avanzadas de esta scooter deportiva. Mediante el uso de sensores que reducen temporalmente la potencia de la rueda trasera cuando se detecta una pérdida de tracción, este sistema electrónico proporciona asistencia al conductor en condiciones resbaladizas.",
            "image": "/images/motorcycles/features/xmax-300-feature-3.jpg"
          },
      {
            "title": "Llave sin contacto",
            "description": "La última tecnología se está utilizando en la construcción de La Xmax 300, incluido un encendido con llave inteligente. No solo significa que no tiene que perder tiempo tratando de encontrar en qué bolsillo llevas las llaves, este conveniente sistema también muestra cómo los scooters deportivos de Yamaha están liderando el camino en términos de diseño y tecnología.",
            "image": "/images/motorcycles/features/xmax-300-feature-4.jpg"
          },
      {
            "title": "Nuevo Tablero",
            "description": "El nuevo panel de instrumentos multifunción cuenta con un velocímetro y tacómetro digital con información clara y fácil de entender e incorpora una gran pantalla multifunción LCD central. Hay un interruptor de control en el manillar que le permite cambiar entre las funciones mientras conduce, sin quitar la mano del manillar. La Xmax 300 también está equipada con una salida de 12V ubicada en la guantera izquierda con la cual podrás cargar o alimentar varios dispositivos.",
            "image": "/images/motorcycles/features/xmax-300-feature-5.jpg"
          },
      {
            "title": "Control de tracción",
            "description": "La XMAX300 incluye el sistema de control de tracción que te proporciona una conducción más estable en superficies irregulares o resbaladizas. Cuando el TCS detecta que la llanta trasera está perdiendo tracción, reduce momentáneamente la transmisión a la rueda trasera para que la llanta mantenga la tracción, lo que te permite conducir con confianza.",
            "image": "/images/motorcycles/features/xmax-300-feature-6.jpg"
          }
],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "292 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "181kg",
      "Potencia máxima": "27.6 Hp a 7250 rpm",
      "Torque máximo": "29.0 Nm a 5750 rpm",
      "Tipo de motor": "4 Tiempos DOHC, 4  válvulas, refrigerado por líquido",
      "Largo total": "2180mm",
      "Ancho total": "795mm",
      "Altura total": "1410mm, 1460mm",
      "Altura al asiento": "795mm",
      "Distancia entre ejes": "1540mm",
      "Distancia mínima del piso": "135mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "181kg",
      "Disposición de los cilindros": "1 Cilindro inclinado hacia adelante",
      "Cilindraje:": "292 cc",
      "Diámetro por carrera": "70.0 mm x 75.9 mm",
      "Relación de compresión:": "10.9 : 1",
      "Potencia Máxima:": "27.6 Hp a 7250 rpm",
      "Arranque:": "Eléctrico",
      "Tipo de lubricación": "Cárter humedo",
      "Sistema de alimentación": "Inyección de combustible",
      "Capacidad de combustible:": "13L (Aprox 3.4 gal)",
      "Encendido:": "TCI",
      "Capacidad batería": "12V,7.0Ah",
      "Batería": "GTZ8V",
      "Relación de transmisión CVT": "2.386-0.746",
      "Sistema de reducción primaria": "Engranaje",
      "Relación de reducción primaria": "1.000",
      "Sistema de reducción secundaria": "Correa en V",
      "Relación de reducción secundaria": "7.590 (48/18 x 37/13)",
      "Tipo de embrague": "Embrague centrifugo seco",
      "Tipo de transmisión": "CVT",
      "Relación de engranajes": "–",
      "Relación de transmisión en 1ra": "2.386-0.746",
      "Relación de transmisión en 2da": "—",
      "Relación de transmisión en 3ra": "—",
      "Relación de transmisión en 4ta": "—",
      "Relación de transmisión en 5ta": "—",
      "Relación de transmisión en 6ta": "—",
      "Tipo de chasis": "Armazón inferior",
      "Inclinación": "26° 30′",
      "Avance": "95 mm",
      "Rueda delantera:": "120/70-15 M/C 56P",
      "Rueda trasera:": "140/70-14 M/C 62P",
      "Freno delantero:": "Disco (ABS)",
      "Freno trasero:": "Disco (ABS)",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Unidad Basculante",
      "Luz principal": "LED X 2"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha Xmax 300. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "tmax",
    slug: "tmax",
    name: "Tmax",
    category: "SCOOTERS",
    image: "/images/motorcycles/tmax.jpg",
    gallery: ["/images/motorcycles/tmax.jpg"],
    price: 75000000,
    priceLabel: "Desde",
    description: "La Tmax de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#992121",
            "image": "/images/motorcycles/colors/tmax-color-0.jpg"
          }
],    featureBanners: [
      {
            "title": "Motor Potente",
            "description": "Equipada con un motor de 562 cc que cumple con la normativa EURO5, la TMAX Tech Max ofrece una experiencia de conducción deportiva y eficiente.",
            "image": "/images/motorcycles/features/tmax-feature-0.jpg"
          },
      {
            "title": "Pantalla TFT de 7 pulgadas",
            "description": "Incorpora una pantalla a color de 7 pulgadas que permite una visualización clara y conectividad con smartphones y navegación de mapa completo con la aplicación Garmin Connect™",
            "image": "/images/motorcycles/features/tmax-feature-1.jpg"
          },
      {
            "title": "Iluminación LED Avanzada",
            "description": "Cuenta con faros delanteros de doble óptica más esbeltos e intermitentes integrados, proporcionando una apariencia agresiva y una iluminación eficiente.",
            "image": "/images/motorcycles/features/tmax-feature-2.jpg"
          },
      {
            "title": "Amplio Espacio de Almacenamiento",
            "description": "Debajo del asiento, ofrece un espacio amplio capaz de albergar un casco integral o un maletín, con iluminación interna automática para mayor comodidad.",
            "image": "/images/motorcycles/features/tmax-feature-3.jpg"
          },
      {
            "title": "Sistema Smart Key",
            "description": "La tecnología sin llave permite arrancar el motor, desbloquear el asiento y liberar el caballete central de manera rápida y sencilla.",
            "image": "/images/motorcycles/features/tmax-feature-4.jpg"
          }
],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "CILINDRAJE": "562 cc",
      "PESO (CON ACEITE Y TANQUE DE GASOLINA LLENO)": "220kg",
      "POTENCIA MÁXIMA": "46.93 Hp  a 7000 rpm",
      "TORQUE MÁXIMO": "55.0Nm  a 5250 rpm",
      "TIPO DE MOTOR": "4 Tiempos DOHC, 4  válvulas, refrigerado por líquido",
      "LARGO TOTAL": "2195mm",
      "ANCHO TOTAL": "780mm",
      "ALTURA TOTAL": "1415mm, 1525mm",
      "ALTURA AL ASIENTO": "800mm",
      "DISTANCIA ENTRE EJES": "1575mm",
      "DISTANCIA MÍNIMA DEL PISO": "135mm",
      "DISPOSICIÓN DE LOS CILINDROS": "2 Cilindros en línea",
      "DIÁMETRO POR CARRERA": "70.0 X 73.0 mm",
      "RELACIÓN DE COMPRESIÓN:": "10.9:1",
      "ARRANQUE:": "Eléctrico",
      "TIPO DE LUBRICACIÓN": "Cárter seco",
      "SISTEMA DE ALIMENTACIÓN": "Inyección de combustible",
      "CAPACIDAD DE COMBUSTIBLE:": "15L",
      "ENCENDIDO:": "TCI",
      "CAPACIDAD BATERÍA": "12V, 11.0Ah (10HR)",
      "BATERÍA": "YTZ12S",
      "Relación de transmisión CVT": "2.041-0.758",
      "SISTEMA DE REDUCCIÓN PRIMARIA": "Engranaje",
      "RELACIÓN DE REDUCCIÓN PRIMARIA": "1.000 (—)",
      "SISTEMA DE REDUCCIÓN SECUNDARIA": "Correa en V",
      "RELACIÓN DE REDUCCIÓN SECUNDARIA": "5.772 (52/32 x 36/23 x 59/26)",
      "TIPO DE EMBRAGUE": "Embrague centrifugo seco",
      "TIPO DE TRANSMISIÓN": "CVT",
      "RELACIÓN DE TRANSMISIÓN EN 2DA": "–",
      "TIPO DE CHASIS": "Diamante",
      "INCLINACIÓN": "26° 00′",
      "AVANCE": "98mm",
      "RUEDA DELANTERA:": "120/70ZR15M/C (56H)",
      "RUEDA TRASERA:": "160/60R15M/C (67H)",
      "FRENO DELANTERO:": "Doble disco (ABS)",
      "FRENO TRASERO:": "Disco (ABS)",
      "TIPO DE SUSPENSIÓN DELANTERA": "Horquilla telescópica",
      "TIPO DE SUSPENSIÓN TRASERA": "Basculante (Por bieletas)",
      "LUZ PRINCIPAL": "LED x 2"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha Tmax. Quisiera conocer disponibilidad y opciones de compra."
  },
  {
    id: "xsr900",
    slug: "xsr900",
    name: "XSR900",
    category: "SPORT HERITAGE",
    image: "/images/motorcycles/xsr900.jpg",
    gallery: ["/images/motorcycles/xsr900.jpg"],
    price: 68000000,
    priceLabel: "Desde",
    description: "La XSR900 de Yamaha te ofrece el mejor rendimiento en su categoría. Descubre la tecnología y diseño que solo Yamaha puede brindar.",
    colors: [
      {
            "name": "Color 1",
            "hex": "#d8d8d8",
            "image": "/images/motorcycles/colors/xsr900-color-0.jpg"
          },
      {
            "name": "Color 2",
            "hex": "#000000",
            "image": "/images/motorcycles/colors/xsr900-color-1.jpg"
          }
],    featureBanners: [],

    highlights: ["Rendimiento Superior", "Diseño Aerodinámico", "Tecnología Yamaha", "Garantía Extendida"],
    specifications: {
      "Cilindraje": "890 cc",
      "Peso (con aceite y tanque de gasolina lleno)": "193kg",
      "Potencia": "117.3 Hp  a 10000 rpm",
      "Torque": "93.0Nm  a 7000 rpm",
      "Tipo de motor": "4 Tiempos DOHC, 4  válvulas, refrigerado por líquido",
      "Largo total": "2155mm",
      "Ancho total": "860mm",
      "Altura total": "1155mm",
      "Altura al asiento": "810mm",
      "Distancia entre ejes": "1495mm",
      "Distancia mínima del piso": "140mm",
      "Peso (Con aceite y tanque de gasolina lleno)": "193kg",
      "Disposición de los cilindros": "3 Cilindros en línea",
      "Cilindraje:": "890 cc",
      "Diámetro por carrera": "78.0 X 62.1 mm",
      "Relación de compresión:": "11.5:1",
      "Potencia Máxima:": "117.3 Hp  a 10000 rpm",
      "Torque máximo": "93.0Nm  a 7000 rpm",
      "Arranque:": "Eléctrico",
      "Tipo de lubricación": "Cárter humedo",
      "Sistema de alimentación": "Inyección de combustible",
      "Capacidad de combustible:": "14L",
      "Encendido:": "TCI",
      "Capacidad batería": "12V, 8.6 Ah",
      "Batería": "YTZ10S",
      "Sistema de reducción primaria": "Engranaje",
      "Relación de reducción primaria": "1.681 (79/47)",
      "Sistema de reducción secundaria": "Cadena",
      "Relación de reducción secundaria": "2.813 (45/16)",
      "Tipo de embrague": "Multidisco en aceite / Resorte en espiral",
      "Tipo de transmisión": "Transmisión constante de 6 velocidades",
      "Relación de transmisión en 1ra": "2.571 (36/14)",
      "Relación de transmisión en 2da": "1.947 (37/19)",
      "Relación de transmisión en 3ra": "1.619 (34/21)",
      "Relación de transmisión en 4ta": "1.381 (29/21)",
      "Relación de transmisión en 5ta": "1.190 (25/21)",
      "Relación de transmisión en 6ta": "1.037 (28/27)",
      "Tipo de chasis": "Diamante",
      "Inclinación": "25o   00´",
      "Avance": "108 mm",
      "Rueda delantera:": "120/70ZR17 M/C 58W",
      "Rueda trasera:": "180/55ZR17 M/C 73W",
      "Freno delantero:": "Doble disco (ABS)",
      "Freno trasero:": "Disco (ABS)",
      "Tipo de suspensión delantera": "Horquilla telescópica",
      "Tipo de suspensión trasera": "Basculante (Por bieletas)",
      "Luz principal": "LED"
},
    isNew: false,
    featured: true,
    available: true,
    whatsappMessage: "Hola, estoy interesado en la Yamaha XSR900. Quisiera conocer disponibilidad y opciones de compra."
  },
];
