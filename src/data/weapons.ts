export interface Weapon {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  caliber: string;
  weight: string;
  length: string;
  description: string;
}

export const weapons: Weapon[] = [
  {
    id: 1,
    name: "AK-47",
    category: "Автоматы",
    image: "https://cdn.poehali.dev/projects/71990237-0c22-486e-a19b-cd91de22a61a/files/d295f9da-67bc-4fd7-84f8-a80a5ec7b4df.jpg",
    price: "149 990 ₽",
    caliber: "7.62×39 мм",
    weight: "3.47 кг",
    length: "870 мм",
    description: "Легендарный автомат Калашникова. Надежность и простота в эксплуатации. Идеален для профессионального использования."
  },
  {
    id: 2,
    name: "СВД Драгунова",
    category: "Снайперские винтовки",
    image: "https://cdn.poehali.dev/projects/71990237-0c22-486e-a19b-cd91de22a61a/files/098f05e4-976d-453d-8d3c-e7a2aca5bc40.jpg",
    price: "289 990 ₽",
    caliber: "7.62×54 мм R",
    weight: "4.3 кг",
    length: "1225 мм",
    description: "Снайперская винтовка Драгунова. Высокая точность на дальних дистанциях. Проверенная временем конструкция."
  },
  {
    id: 3,
    name: "Glock 19",
    category: "Пистолеты",
    image: "https://cdn.poehali.dev/projects/71990237-0c22-486e-a19b-cd91de22a61a/files/e3e6ed25-6d5b-4d03-bb2d-9210f7b29133.jpg",
    price: "89 990 ₽",
    caliber: "9×19 мм",
    weight: "0.595 кг",
    length: "174 мм",
    description: "Компактный и надежный пистолет австрийского производства. Эргономичная рукоятка и высокая точность стрельбы."
  },
  {
    id: 4,
    name: "М4А1 Carbine",
    category: "Автоматы",
    image: "https://cdn.poehali.dev/projects/71990237-0c22-486e-a19b-cd91de22a61a/files/d295f9da-67bc-4fd7-84f8-a80a5ec7b4df.jpg",
    price: "199 990 ₽",
    caliber: "5.56×45 мм",
    weight: "2.88 кг",
    length: "838 мм",
    description: "Американская штурмовая винтовка. Модульная конструкция позволяет адаптировать под любые задачи."
  },
  {
    id: 5,
    name: "Barrett M82",
    category: "Снайперские винтовки",
    image: "https://cdn.poehali.dev/projects/71990237-0c22-486e-a19b-cd91de22a61a/files/098f05e4-976d-453d-8d3c-e7a2aca5bc40.jpg",
    price: "499 990 ₽",
    caliber: "12.7×99 мм",
    weight: "13.4 кг",
    length: "1448 мм",
    description: "Крупнокалиберная снайперская винтовка. Предназначена для поражения целей на сверхдальних дистанциях."
  },
  {
    id: 6,
    name: "Desert Eagle",
    category: "Пистолеты",
    image: "https://cdn.poehali.dev/projects/71990237-0c22-486e-a19b-cd91de22a61a/files/e3e6ed25-6d5b-4d03-bb2d-9210f7b29133.jpg",
    price: "129 990 ₽",
    caliber: ".50 AE",
    weight: "1.99 кг",
    length: "260 мм",
    description: "Мощный полуавтоматический пистолет. Узнаваемый дизайн и впечатляющая останавливающая сила."
  }
];

export const categories = [
  { id: 1, name: "Автоматы", count: 2 },
  { id: 2, name: "Снайперские винтовки", count: 2 },
  { id: 3, name: "Пистолеты", count: 2 }
];
