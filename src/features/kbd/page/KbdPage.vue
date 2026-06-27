<script setup lang="ts">
import UiKbd from '@/shared/ui/ui-kbd/UiKbd.vue'
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Kbd</h2>
      <p class="text-base-content/70 mb-6">A simple keyboard key indicator.</p>
      <div class="flex flex-wrap gap-2">
        <UiKbd value="Ctrl" /> + <UiKbd value="C" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Sizes</h2>
      <p class="text-base-content/70 mb-6">Available sizes.</p>
      <div class="flex flex-wrap items-center gap-2">
        <UiKbd v-for="size in ['xs','sm','md','lg','xl']" :key="size" :size="size" value="A" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Key Combinations</h2>
      <p class="text-base-content/70 mb-6">Common keyboard shortcuts.</p>
      <div class="space-y-2">
        <div class="flex items-center gap-1">
          <UiKbd value="Ctrl" /> + <UiKbd value="S" /> to save
        </div>
        <div class="flex items-center gap-1">
          <UiKbd value="Ctrl" /> + <UiKbd value="Z" /> to undo
        </div>
        <div class="flex items-center gap-1">
          <UiKbd value="⌘" /> + <UiKbd value="K" /> to search
        </div>
      </div>
    </div>
  </section>
</template>
