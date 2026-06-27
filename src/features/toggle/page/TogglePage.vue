<script setup lang="ts">
import UiToggle from '@/shared/ui/ui-toggle/UiToggle.vue'
import { ref } from 'vue'

const toggle_value = ref(false)
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Toggle</h2>
      <p class="text-base-content/70 mb-6">A simple toggle switch.</p>
      <div class="flex items-center gap-4">
        <UiToggle v-model="toggle_value" />
        <span>{{ toggle_value ? 'ON' : 'OFF' }}</span>
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Colors</h2>
      <p class="text-base-content/70 mb-6">Toggle with different colors.</p>
      <div class="flex flex-wrap items-center gap-4">
        <UiToggle v-for="color in ['primary','secondary','accent','info','success','warning','error']" :key="color" :color="color" :model-value="true" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Sizes</h2>
      <p class="text-base-content/70 mb-6">Available sizes.</p>
      <div class="flex flex-wrap items-center gap-4">
        <UiToggle v-for="size in ['xs','sm','md','lg','xl']" :key="size" :size="size" :model-value="true" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Disabled</h2>
      <p class="text-base-content/70 mb-6">Disabled toggle.</p>
      <UiToggle disabled :model-value="false" />
    </div>
  </section>
</template>
