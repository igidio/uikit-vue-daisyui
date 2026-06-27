<script setup lang="ts">
import UiHover3dcard from '@/shared/ui/ui-hover3dcard/UiHover3dcard.vue'
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Hover 3D Card</h2>
      <p class="text-base-content/70 mb-6">A card with 3D hover effect (soft shape).</p>
      <div class="w-64">
        <UiHover3dcard
          image_url="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
          alt="3D Card"
          shape="soft"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Hard Shape</h2>
      <p class="text-base-content/70 mb-6">3D card with hard edges.</p>
      <div class="w-64">
        <UiHover3dcard
          image_url="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
          alt="Hard 3D Card"
          shape="hard"
        />
      </div>
    </div>
  </section>
</template>
