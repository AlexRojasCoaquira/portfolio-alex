import { projects } from "../constant";
export function usePortfolioData() {
  const primaryStack = ["React", "Next", "Vue", "Nuxt", "TailwindCSS", "TypeScript"] as const;

  return {
    primaryStack,
    projects,
  };
}
