<script setup lang="ts">
import { ref } from 'vue'
import UiCheckbox from '@/shared/ui/ui-checkbox/UiCheckbox.vue'
import type { CheckboxOption } from '@/shared/ui/ui-checkbox/UiCheckbox.vue'

const checkbox_value = ref<string[]>(['apple'])

const fruit_options: CheckboxOption[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Mango', value: 'mango' },
]
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Checkbox</h2>
      <p class="text-base-content/70 mb-6">A simple checkbox group.</p>
      <UiCheckbox v-model="checkbox_value" :data="fruit_options" />
      <p class="mt-4 text-sm">Selected: {{ checkbox_value.join(', ') || 'none' }}</p>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Sizes</h2>
      <p class="text-base-content/70 mb-6">Available sizes.</p>
      <div class="flex flex-col gap-4">
        <UiCheckbox v-for="size in ['xs','sm','md','lg','xl']" :key="size" :size="size" :data="[{ label: `Size: ${size}`, value: size }]" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Colors</h2>
      <p class="text-base-content/70 mb-6">Checkbox with different colors.</p>
      <div class="flex flex-col gap-4">
        <UiCheckbox v-for="color in ['primary','secondary','accent','info','success','warning','error']" :key="color" :color="color" :data="[{ label: `Color: ${color}`, value: color }]" :model-value="[color]" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Disabled</h2>
      <p class="text-base-content/70 mb-6">Disabled checkbox group.</p>
      <UiCheckbox disabled :data="fruit_options" :model-value="['apple']" />
    </div>
  </section>
</template>
