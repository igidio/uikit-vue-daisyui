<script setup lang="ts">
import { ref } from 'vue'
import UiProgress from '@/shared/ui/ui-progress/UiProgress.vue'

const progress_value = ref(30)
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Progress</h2>
      <p class="text-base-content/70 mb-6">A simple progress bar at 30%.</p>
      <UiProgress :value="progress_value" />
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Indeterminate</h2>
      <p class="text-base-content/70 mb-6">An indeterminate progress bar.</p>
      <UiProgress indeterminate />
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Colors</h2>
      <p class="text-base-content/70 mb-6">Progress with different colors.</p>
      <div class="flex flex-col gap-4">
        <UiProgress v-for="color in ['primary','secondary','accent','info','success','warning','error']" :key="color" :color="color" :value="50 + Math.random() * 30" />
      </div>
    </div>
  </section>
</template>
