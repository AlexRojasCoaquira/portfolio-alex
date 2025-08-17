<template>
    <header
        class="text-white fixed top-0 right-0 left-0 transition-all duration-300 z-50"
        :class="[
            isScrolled
                ? 'bg-[#1e7a80]/50 backdrop-blur-md shadow-md'
                : ''
        ]"
    >
        <div class="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
            <picture>
                <source srcset="/icons/alexdev.svg" media="(min-width: 768px)" type="image/svg+xml" />
                <img src="/icons/alexdev-mob.svg" alt="alexdev-logo" class="h-10 w-auto" />
            </picture>
            <nav class="flex gap-4 text-sm">
                <NuxtLink to="/" class="hover:underline">Inicio</NuxtLink>
                <NuxtLink to="/#proyectos" class="hover:underline">Proyectos</NuxtLink>
                <NuxtLink to="/#contacto" class="hover:underline">Contacto</NuxtLink>
            </nav>
        </div>
    </header>
</template>

<script setup>
const isScrolled = ref(false)

onMounted(() => {
    const handleScroll = () => {
        isScrolled.value = window.scrollY > 50
    }

    window.addEventListener('scroll', handleScroll)

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })
})
</script>

<style scoped></style>


