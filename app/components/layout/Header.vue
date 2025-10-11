<template>
  <header
    class="fixed top-0 right-0 left-0 z-50 text-white transition-all duration-300"
    :class="[isScrolled ? 'bg-[#11212D]/50 shadow-md backdrop-blur-md' : '']"
  >
    <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
      <picture>
        <source srcset="/icons/alexdev.svg" media="(min-width: 768px)" type="image/svg+xml" />
        <img src="/icons/alexdev-mob.svg" alt="alexdev-logo" class="h-10 w-auto" />
      </picture>
      <!-- <nav class="flex gap-4 text-sm">
        <NuxtLink to="/" class="hover:underline">Sobre mí</NuxtLink>
      </nav> -->
    </div>
  </header>
</template>

<script setup>
  const isScrolled = ref(false);

  onMounted(() => {
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    window.addEventListener("scroll", handleScroll);

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });
</script>

<style scoped></style>
