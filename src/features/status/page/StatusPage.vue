<script setup lang="ts">
import UiStatus from '@/shared/ui/ui-status/UiStatus.vue'
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Status</h2>
      <p class="text-base-content/70 mb-6">A simple status indicator dot.</p>
      <UiStatus />
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Colors</h2>
      <p class="text-base-content/70 mb-6">Status indicator with different colors.</p>
      <div class="flex flex-wrap items-center gap-4">
        <UiStatus v-for="color in ['primary','secondary','accent','neutral','info','success','warning','error','ghost']" :key="color" :color="color" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Sizes</h2>
      <p class="text-base-content/70 mb-6">Available sizes.</p>
      <div class="flex flex-wrap items-center gap-4">
        <UiStatus v-for="size in ['xs','sm','md','lg','xl']" :key="size" :size="size" color="success" />
      </div>
    </div>
  </section>
</template>
