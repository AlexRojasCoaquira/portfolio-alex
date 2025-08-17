<template>
	<div class="scroll-smooth ">
		<HeroSection
			:title="'Hola, soy Alex'"
			:subtitle="'Desarrollador web enfocado en experiencias rápidas, accesibles y con buen diseño. Trabajo con Vue, Nuxt y TypeScript.'"
			:primaryStack="primaryStack"
		/>

		<ProjectsSection :projects="projects" />

		<AboutSection
			:paragraphOne="'Me gusta construir interfaces limpias y performantes. Disfruto del detalle visual, la arquitectura de componentes y las integraciones end-to-end.'"
			:paragraphTwo="'He trabajado con startups y equipos pequeños, priorizando la entrega rápida sin perder calidad técnica.'"
		/>

		<SkillsSection :skills="skills" />

		<ContactSection :contact="contact" :social="social" />
	</div>
</template>

<script setup lang="ts">
useHead({
	title: 'Portfolio de Alex',
	meta: [
		{ name: 'description', content: 'Portfolio moderno de Alex: proyectos, habilidades y contacto.' },
	],
})

import HeroSection from '~/components/landing/HeroSection.vue'
import ProjectsSection from '~/components/landing/ProjectsSection.vue'
import AboutSection from '~/components/landing/AboutSection.vue'
import SkillsSection from '~/components/landing/SkillsSection.vue'
import ContactSection from '~/components/landing/ContactSection.vue'
import { usePortfolioData } from '~/composables/usePortfolioData'

const { primaryStack, projects, skills, contact, social } = usePortfolioData()
</script>

<style scoped></style>