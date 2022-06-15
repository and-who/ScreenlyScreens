import { Employee } from "../components/employee-card/employee-card";

export const employees: Employee[] = [
  {id: "1", name: "Julia", image: new URL(
    '../assets/images/julia.jpg?as=webp&width=500',
    import.meta.url
  ),
  confetti: ["🐕", "🦴"],
  gender: 'female'
},
  {
    id: "2",
    name: "Andi",
    image: new URL('../assets/images/andi.jpg?as=webp&width=500', import.meta.url),
    confetti: ["🚀", "⭐", "🪐"],
    gender: 'male'
  },
  {
    id: "3",
    name: "Alex",
    image: new URL('../assets/images/alex.jpg?as=webp&width=500', import.meta.url),
    gender: 'male'
  },
  {
    id: "4",
    name: "Jan",
    image: new URL('../assets/images/jan.jpg?as=webp&width=500', import.meta.url),
    confetti: ["⚔️", "🛡️"],
    gender: 'male'
  },
  {
    id: "5",
    name: "Johanna",
    image: new URL('../assets/images/johanna.jpg?as=webp&width=500', import.meta.url),
    gender: 'female'
  },
  {
    id: "6",
    name: "Kim",
    image: new URL('../assets/images/kim.jpg?as=webp&width=500', import.meta.url),
    confetti: ["🍷"],
    gender: 'female'
  },
  {
    id: "7",
    name: "Kolja",
    image: new URL('../assets/images/kolja.jpg?as=webp&width=500', import.meta.url),
    gender: 'male'
  },
  {
    id: "8",
    name: "Lena",
    image: new URL('../assets/images/lena.jpg?as=webp&width=500', import.meta.url),
    gender: 'female'
  },
  {
    id: "9",
    name: "Michael",
    image: new URL('../assets/images/michael.jpg?as=webp&width=500', import.meta.url),
    gender: 'male'
  },
  {
    id: "10",
    name: "Norma",
    image: new URL('../assets/images/norma.jpg?as=webp&width=500', import.meta.url),
    confetti: ["🐴", "🐎"],
    gender: 'female'
  },
  {
    id: "11",
    name: "Oskar",
    image: new URL('../assets/images/oskar.jpg?as=webp&width=500', import.meta.url),
    gender: 'male'
  },
  {
    id: "12",
    name: "Pabu",
    image: new URL('../assets/images/pabu.jpg?as=webp&width=500', import.meta.url),
    confetti: ["🐕", "🦴"],
    gender: 'male'
  },
  {
    id: "13",
    name: "Raul",
    image: new URL('../assets/images/raul.jpg?as=webp&width=500', import.meta.url),
    confetti: ["🇲🇽", "Taco"],
    gender: 'male'
  },
  {
    id: "14",
    name: "Verena",
    image: new URL('../assets/images/verena.jpg?as=webp&width=500', import.meta.url),
    gender: 'female'
  },
  {
    id: "15",
    name: "Holger",
    image: new URL('../assets/images/holger.jpg?as=webp&width=500', import.meta.url),
    gender: 'male'
  },
  {
    id: "16",
    name: "Rene",
    image: new URL('../assets/images/rene.jpg?as=webp&width=500', import.meta.url),
    gender: 'male'
  },
  {
    id: "17",
    name: "Kristina",
    image: new URL('../assets/images/kristina.jpg?as=webp&width=500', import.meta.url),
    gender: 'female'
  },
  {
    id: "18",
    name: "Tanja",
    image: new URL('../assets/images/tanja.jpg?as=webp&width=500', import.meta.url),
    gender: 'female'
  },
  {
    id: "19",
    name: "Lisa",
    image: new URL('../assets/images/lisa.jpg?as=webp&width=500', import.meta.url),
    gender: 'female'
  }
];