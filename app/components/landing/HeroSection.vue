<template>
	<section id="hero" class="relative px-4 py-4 sm:p-24 md:h-screen flex items-center bg-[url('/images/bg-hero.png')] bg-center bg-no-repeat bg-cover">
		<div class="absolute inset-0 bg-gradient-to-br from-[#0f2f31]/60 via-[#1e7a80]/20 to-black/50"></div>
		<div class="relative grid gap-10 lg:grid-cols-2 md:items-center mx-auto max-w-5xl ">
			<div>
				<h1 class="text-4xl sm:text-5xl font-bold text-white mt-16 md:mt-0">{{ title }}</h1>
				<p class="mt-4 text-lg text-white/90">{{ subtitle }}</p>
				<div class="mt-8 flex gap-3">
						<NuxtLink to="/#proyectos" class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#26979f] to-[#3fb1b8] px-4 py-2 text-sm font-medium text-white shadow hover:from-[#20878e] hover:to-[#37a4ab] transition">Ver proyectos</NuxtLink>
						<a href="/pdf/cv.pdf" download class="inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 backdrop-blur-sm transition">Descargar CV</a>
					</div>
			</div>
			<div class="relative overflow-hidden rounded-xl ring-1 ring-white/30 bg-white/10 backdrop-blur-md p-8">
					<p class="text-sm text-white/80">Stack principal</p>
					<ul class="mt-4 flex flex-wrap gap-2">
						<li v-for="tech in primaryStack" :key="tech">
							<UiChip :name="tech" />
						</li>
					</ul>
					<p class="mt-4 text-sm text-white/80">Más sobre mí</p>
					<div class="mt-4 grid md:grid-cols-2 gap-3 text-sm text-white/80">
						<a class="rounded-lg ring-1 ring-white/10 bg-white/5 p-4 flex items-center justify-around cursor-pointer hover:bg-white/10" href="https://www.linkedin.com/in/rommel-alex-rojas-coaquira-17b3b5207" target="_blank" noopener noreferer>
							<div class="">
								<p class="font-medium text-white">LinkedIn</p>
								<p class="mt-1 text-white/70">Rommel Rojas</p>
							</div>
							<img
								src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
								width="50"
								height="50"
								alt="github-logo"
							>
						</a>
						<a class="rounded-lg ring-1 ring-white/10 bg-white/5 p-4 flex items-center justify-around cursor-pointer hover:bg-white/10" href="https://github.com/AlexRojasCoaquira" target="_blank" noopener noreferer>
							<div class="">
								<p class="font-medium text-white">Github</p>
								<p class="mt-1 text-white/60">AlexRojasCoaquira</p>
							</div>
							<img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" width="40" height="40" alt="github-logo">
						</a>
					</div>
				</div>

		</div>
	</section>
</template>

<script setup lang="ts">

const props = defineProps<{ title: string; subtitle: string; primaryStack: readonly string[] }>()
</script>

<style scoped></style>


