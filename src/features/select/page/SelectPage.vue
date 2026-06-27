<script setup lang="ts">
import { ref } from 'vue'
import UiSelect from '@/shared/ui/ui-select/UiSelect.vue'
import type { SelectOption } from '@/shared/ui/ui-select/UiSelect.vue'

const select_value = ref('')

const options: SelectOption[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Mango', value: 'mango' },
]
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Select</h2>
      <p class="text-base-content/70 mb-6">A simple select dropdown.</p>
      <div class="max-w-xs">
        <UiSelect v-model="select_value" :options="options" placeholder="Pick a fruit" />
      </div>
      <p class="mt-2 text-sm">Selected: {{ select_value || 'none' }}</p>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Sizes</h2>
      <p class="text-base-content/70 mb-6">Available sizes.</p>
      <div class="flex flex-col gap-4 max-w-xs">
        <UiSelect v-for="size in ['xs','sm','md','lg','xl']" :key="size" :size="size" :options="options" :placeholder="`Size: ${size}`" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Colors</h2>
      <p class="text-base-content/70 mb-6">Select with different colors.</p>
      <div class="flex flex-col gap-4 max-w-xs">
        <UiSelect v-for="color in ['primary','secondary','accent','info','success','warning','error']" :key="color" :color="color" :options="options" :placeholder="`Color: ${color}`" />
      </div>
    </div>
  </section>
</template>
