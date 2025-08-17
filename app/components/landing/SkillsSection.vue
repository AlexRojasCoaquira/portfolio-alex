<template>
	<section id="habilidades" class="mx-auto max-w-5xl px-4 py-14">
		<h2 class="text-2xl font-semibold text-white">Habilidades</h2>
		<ul class="mt-5 flex flex-wrap gap-2">
			<li v-for="skill in skills" :key="skill" class="rounded-md ring-1 ring-white/15 px-3 py-1.5 text-sm bg-white/5 text-white/80 hover:bg-white/10 transition">{{ skill }}</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
defineProps<{ skills: string[] }>()
</script>

<style scoped></style>


