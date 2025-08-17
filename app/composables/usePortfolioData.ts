export type ProjectLink = { live?: string; github?: string }
export type Project = { id: number; title: string; description: string; tags: string[]; links: ProjectLink }

export function usePortfolioData() {
	const primaryStack = ['React', 'Next', 'Vue', 'Nuxt', 'TailwindCSS', 'TypeScript'] as const

	const projects: Project[] = [
		{ id: 1, title: 'Dashboard Analytics', description: 'Panel interactivo con gráficos y filtros en tiempo real.', tags: ['Nuxt', 'D3.js', 'SSR'], links: { live: '#', github: '#' } },
		{ id: 2, title: 'E‑commerce minimal', description: 'Catálogo, carrito y checkout integrados.', tags: ['Vue', 'Pinia', 'Stripe'], links: { live: '#', github: '#' } },
		{ id: 3, title: 'Landing SaaS', description: 'Secciones dinámicas y CMS headless.', tags: ['Nuxt', 'Content', 'SEO'], links: { live: '#', github: '#' } },
		{ id: 4, title: 'Portfolio 3D', description: 'Animaciones y efectos WebGL ligeros.', tags: ['Three.js', 'GSAP'], links: { live: '#', github: '#' } },
	]

	const skills = [
		'Nuxt', 'Vue', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Pinia', 'Node.js', 'Express', 'REST', 'GraphQL', 'PostgreSQL', 'Prisma', 'Vite', 'Vitest', 'Playwright', 'CI/CD', 'Docker', 'AWS'
	]

	const contact = { email: 'alex@example.com' }
	const social = {
		github: 'https://github.com/',
		linkedin: 'https://www.linkedin.com/',
	}

	return { primaryStack: [...primaryStack], projects, skills, contact, social }
}


