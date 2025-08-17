<template>
	<section id="contacto" class="mx-auto max-w-5xl px-4 py-14">
		<div class="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur p-6 md:p-8">
			<h2 class="text-2xl font-semibold text-white">Contacto</h2>
			<p class="mt-2 text-white/80">¿Tienes una idea o proyecto? Hablemos.</p>
			<div class="mt-6 flex flex-wrap items-center gap-3">
				<a :href="`mailto:${contact.email}?subject=${encodeURIComponent('Colaboración - Portfolio')}`" class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#26979f] to-[#3fb1b8] px-4 py-2 text-white text-sm font-medium shadow hover:from-[#20878e] hover:to-[#37a4ab] transition">Enviar email</a>
				<a :href="social.github" target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">GitHub</a>
				<a :href="social.linkedin" target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">LinkedIn</a>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const props = defineProps<{ contact: { email: string }; social: { github: string; linkedin: string } }>()
</script>

<style scoped></style>


