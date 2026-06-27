<script setup lang="ts">
import { ref } from 'vue'
import UiRange from '@/shared/ui/ui-range/UiRange.vue'

const range_value = ref(50)
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Range</h2>
      <p class="text-base-content/70 mb-6">A simple range slider.</p>
      <UiRange v-model="range_value" />
      <p class="mt-2 text-sm">Value: {{ range_value }}</p>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Sizes</h2>
      <p class="text-base-content/70 mb-6">Available sizes.</p>
      <div class="flex flex-col gap-4">
        <UiRange v-for="size in ['xs','sm','md','lg','xl']" :key="size" :size="size" :model-value="50" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Colors</h2>
      <p class="text-base-content/70 mb-6">Range with different colors.</p>
      <div class="flex flex-col gap-4">
        <UiRange v-for="color in ['primary','secondary','accent','info','success','warning','error']" :key="color" :color="color" :model-value="50" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Steps</h2>
      <p class="text-base-content/70 mb-6">Range with step of 25.</p>
      <UiRange :step="25" :model-value="50" />
    </div>
  </section>
</template>
