<script setup lang="ts">
import UiHovergallery from '@/shared/ui/ui-hovergallery/UiHovergallery.vue'
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Hover Gallery</h2>
      <p class="text-base-content/70 mb-6">A gallery that reveals images on hover.</p>
      <div class="w-96 h-64">
        <UiHovergallery
          :images="[
            'https://img.daisyui.com/images/stock/daisyui-hat-1.webp',
            'https://img.daisyui.com/images/stock/daisyui-hat-2.webp',
            'https://img.daisyui.com/images/stock/daisyui-hat-3.webp',
            'https://img.daisyui.com/images/stock/daisyui-hat-4.webp',
          ]"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Another Gallery</h2>
      <p class="text-base-content/70 mb-6">Different images.</p>
      <div class="w-96 h-64">
        <UiHovergallery
          :images="[
            'https://img.daisyui.com/images/stock/card-1.webp',
            'https://img.daisyui.com/images/stock/card-2.webp',
            'https://img.daisyui.com/images/stock/card-3.webp',
          ]"
        />
      </div>
    </div>
  </section>
</template>
