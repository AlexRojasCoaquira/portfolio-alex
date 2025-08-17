<template>
	<section id="sobre-mi" class="mx-auto max-w-5xl px-4 py-14">
		<div class="grid gap-8 md:grid-cols-[1fr,1.5fr] md:items-center">
			<div class="overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/5 aspect-square"></div>
			<div>
				<h2 class="text-2xl font-semibold text-white">Sobre mí</h2>
				<p class="mt-4 text-white/80">{{ paragraphOne }}</p>
				<p class="mt-3 text-white/80">{{ paragraphTwo }}</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps<{ paragraphOne: string; paragraphTwo: string }>()
</script>

<style scoped></style>


