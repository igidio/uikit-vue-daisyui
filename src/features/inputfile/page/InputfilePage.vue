<script setup lang="ts">
import UiInputfile from '@/shared/ui/ui-inputfile/UiInputfile.vue'
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default File Input</h2>
      <p class="text-base-content/70 mb-6">A simple file input.</p>
      <div class="max-w-sm">
        <UiInputfile />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Sizes</h2>
      <p class="text-base-content/70 mb-6">Available sizes.</p>
      <div class="flex flex-col gap-4 max-w-sm">
        <UiInputfile v-for="size in ['xs','sm','md','lg','xl']" :key="size" :size="size" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Colors</h2>
      <p class="text-base-content/70 mb-6">File input with different colors.</p>
      <div class="flex flex-col gap-4 max-w-sm">
        <UiInputfile v-for="color in ['neutral','primary','secondary','accent','info','success','warning','error','ghost']" :key="color" :color="color" />
      </div>
    </div>
  </section>
</template>
