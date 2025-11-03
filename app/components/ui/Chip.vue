<template>
  <div
    class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm"
    :style="[{ backgroundColor: background || 'rgba(255,255,255,0.1)' }]"
  >
    <svg width="16" height="16">
      <use :href="`#${iconId}`" />
    </svg>
    <span :style="[{ color: color || '#ffffff' }]">{{ name }}</span>
  </div>
  <Sprite />
</template>

<script setup lang="ts">
  import Sprite from "../icons/sprite.vue";

  interface Props {
    name: string;
    icon?: string;
    background?: string;
    color?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    icon: "icon-react",
  });

  const iconId = computed(() => {
    const techMap: Record<string, string> = {
      React: "icon-react",
      Vue: "icon-vue",
      Nuxt: "icon-nuxt",
      Next: "icon-nextjs",
      TailwindCSS: "icon-tailwind",
      JavaScript: "icon-js",
      TypeScript: "icon-ts",
      Supabase: "icon-supabase",
    };

    return techMap[props.name] || props.icon;
  });
</script>
