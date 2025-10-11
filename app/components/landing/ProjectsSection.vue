<template>
  <section id="proyectos" class="bg-cian-500">
    <div class="mx-auto max-w-5xl px-4 py-14">
      <div class="gap-4 text-center">
        <h2 class="text-2xl font-semibold">Proyectos destacados</h2>
      </div>
      <div class="mt-8 grid gap-8 sm:grid-cols-2">
        <article
          v-for="project in projects"
          :key="project.title"
          class="cursor-pointer overflow-hidden rounded-xl ring-1 ring-gray-200/50 transition hover:shadow-lg hover:ring-white/20"
        >
          <img class="aspect-[16/9]" :src="project.image" :alt="project.title" />
          <div class="p-3">
            <div class="item-center flex justify-between">
              <h3 class="text-lg font-medium">
                {{ project.title }}
              </h3>
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener"
                class="text-sm font-semibold hover:underline"
                >Ver proyecto</a
              >
            </div>
            <p class="mt-1 text-sm">{{ project.description }}</p>
            <ul class="mt-3 flex flex-wrap gap-2">
              <li
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full text-xs text-black ring-1 ring-gray-200/80 hover:bg-gray-200"
              >
                <UiChip :name="tag" background="transparent" color="black" />
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { Project } from "@/types";

  defineProps<{ projects: Project[] }>();
</script>

<style scoped></style>
