import { type Project } from "./types";
export const projects: Project[] = [
  {
    title: "Simpsons",
    description: "Panel interactivo con gráficos, animaciones y filtro de los Simpsons",
    image: "https://cdn.forbes.com.mx/2022/04/Los-Simpson.jpg",
    tags: ["React", "TailwindCSS", "TypeScript"],
    link: "https://simpsons-psi.vercel.app/",
  },
  {
    title: "Joinnus",
    description: "Aplicación para la reserva y ventas de entradas de eventos.",
    image: "https://cdn.joinnus.com/files/share-twitter.jpg",
    tags: ["Nuxt", "Vue", "TailwindCSS", "TypeScript"],
    link: "https://www.joinnus.com/",
  },
  {
    title: "Traductor",
    description: "Aplicación para traducir lenguajes con integración de ChatGPT",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/67c1b830e28a08d5960ba904/Google-Translate-will-soon-become-much-more-powerful-/960x0.jpg?format=jpg&width=960",
    tags: ["React", "TailwindCSS"],
    link: "https://traslate-google.vercel.app/",
  },
  {
    title: "Puzzle",
    description: "Juego interactivo de rompecabezas",
    image: "https://lingokids.com/wp-content/uploads/2020/01/puzzles.jpg",
    tags: ["React", "TailwindCSS"],
    link: "https://puzzles-omega.vercel.app/",
  },
];
