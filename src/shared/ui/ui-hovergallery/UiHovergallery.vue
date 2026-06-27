<script setup lang="ts">
interface Props {
  images: string[]
  alt?: string
}

withDefaults(defineProps<Props>(), {
  alt: 'Hover gallery image',
})
</script>

<template>
  <figure class="hover-gallery w-full h-full">
    <img
      v-for="img in images"
      :key="img"
      :src="img"
      :alt="alt"
      class="object-cover w-full h-full"
    />
  </figure>
</template>
