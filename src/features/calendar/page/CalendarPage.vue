<script setup lang="ts">
import { ref } from 'vue'
import UiCalendar from '@/shared/ui/ui-calendar/UiCalendar.vue'

const date_value = ref('')
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Calendar</h2>
      <p class="text-base-content/70 mb-6">A simple date input.</p>
      <div class="max-w-sm">
        <UiCalendar v-model="date_value" placeholder="Select a date" />
      </div>
      <p class="mt-2 text-sm">Date: {{ date_value || 'none' }}</p>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Sizes</h2>
      <p class="text-base-content/70 mb-6">Available sizes.</p>
      <div class="flex flex-col gap-4 max-w-sm">
        <UiCalendar v-for="size in ['xs','sm','md','lg','xl']" :key="size" :size="size" :placeholder="`Size: ${size}`" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Colors</h2>
      <p class="text-base-content/70 mb-6">Calendar with different colors.</p>
      <div class="flex flex-col gap-4 max-w-sm">
        <UiCalendar v-for="color in ['primary','secondary','accent','info','success','warning','error']" :key="color" :color="color" :placeholder="`Color: ${color}`" />
      </div>
    </div>
  </section>
</template>
