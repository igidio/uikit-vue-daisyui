<script setup lang="ts">
import UiTextrotate from '@/shared/ui/ui-textrotate/UiTextrotate.vue'
import UiTextrotateItem from '@/shared/ui/ui-textrotate/UiTextrotateItem.vue'
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Text Rotate</h2>
      <p class="text-base-content/70 mb-6">Text that rotates between different values.</p>
      <p class="text-2xl">
        I love
        <UiTextrotate>
          <UiTextrotateItem>coding</UiTextrotateItem>
          <UiTextrotateItem>design</UiTextrotateItem>
          <UiTextrotateItem>music</UiTextrotateItem>
          <UiTextrotateItem>coffee</UiTextrotateItem>
        </UiTextrotate>
      </p>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">With Colors</h2>
      <p class="text-base-content/70 mb-6">Rotating text with different styles.</p>
      <p class="text-2xl">
        <UiTextrotate>
          <UiTextrotateItem><span class="text-primary">TypeScript</span></UiTextrotateItem>
          <UiTextrotateItem><span class="text-secondary">Vue</span></UiTextrotateItem>
          <UiTextrotateItem><span class="text-accent">React</span></UiTextrotateItem>
          <UiTextrotateItem><span class="text-info">Angular</span></UiTextrotateItem>
        </UiTextrotate>
        developer
      </p>
    </div>
  </section>
</template>
