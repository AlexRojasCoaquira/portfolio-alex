<template>
  <HeroSection
    :title="'Alex Rojas'"
    subtitle="Bachiller en Ingeniería de Sistemas enfocado en el desarrollado web. Destaco mucho la proactividad y el trabajo en equipo."
    :primaryStack="primaryStack"
  />

  <ProjectsSection :projects="projects" />
</template>

<script setup lang="ts">
  useHead({
    title: "Portfolio de Alex",
    meta: [
      {
        name: "description",
        content: "Portfolio moderno de Alex: proyectos, habilidades y contacto.",
      },
    ],
  });

  import HeroSection from "~/components/landing/HeroSection.vue";
  import ProjectsSection from "~/components/landing/ProjectsSection.vue";
  import { usePortfolioData } from "~/composables/usePortfolioData";

  const { primaryStack, projects } = usePortfolioData();
</script>

<style scoped></style>
