<template>
	<section id="proyectos" class="bg-cian-500">
		<div class="mx-auto max-w-5xl px-4 py-14">
			<div class="gap-4 text-center">
				<h2 class="text-2xl font-semibold">Proyectos destacados</h2>
			</div>
			<div class="mt-8 grid gap-6 sm:grid-cols-2">
				<article v-for="project in projects" :key="project.id" class="group overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/5 backdrop-blur transition hover:shadow-lg hover:ring-white/20">
					<div class="aspect-[16/9] bg-gradient-to-br from-[#0f2f31]/40 to-[#1e7a80]/20"></div>
					<div class="p-4">
						<h3 class="text-lg font-medium group-hover:underline text-white">{{ project.title }}</h3>
						<p class="mt-1 text-white/70 text-sm">{{ project.description }}</p>
						<ul class="mt-3 flex flex-wrap gap-2">
							<li v-for="tag in project.tags" :key="tag" class="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80">{{ tag }}</li>
						</ul>
						<div class="mt-4 flex gap-3 text-sm">
							<a v-if="project.links.live" :href="project.links.live" target="_blank" rel="noopener" class="inline-flex items-center rounded-md border border-white/20 px-3 py-1.5 text-white hover:bg-white/10">Demo</a>
							<a v-if="project.links.github" :href="project.links.github" target="_blank" rel="noopener" class="inline-flex items-center rounded-md border border-white/20 px-3 py-1.5 text-white hover:bg-white/10">Código</a>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import type { Project } from '~/composables/usePortfolioData'

defineProps<{ projects: Project[] }>()
</script>

<style scoped></style>


