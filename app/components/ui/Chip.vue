<template>
    <div class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">
        <svg width="16" height="16">
            <use :href="`#${iconId}`" />
        </svg>
        <span>{{ name }}</span>
    </div>
    <Sprite />
</template>

<script setup lang="ts">
import Sprite from '../icons/sprite.vue';

interface Props {
    name: string;
    icon?: string;
}

const props = withDefaults(defineProps<Props>(), {
    icon: 'icon-react'
});

const iconId = computed(() => {
    const techMap: Record<string, string> = {
        'React': 'icon-react',
        'Vue': 'icon-vue',
        'Nuxt': 'icon-nuxt',
        'Next': 'icon-nextjs',
        'TailwindCSS': 'icon-tailwind',
        'JavaScript': 'icon-js',
        'TypeScript': 'icon-ts'
    };

    return techMap[props.name] || props.icon;
});
</script>