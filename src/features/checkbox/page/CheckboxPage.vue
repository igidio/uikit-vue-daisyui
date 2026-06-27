<script setup lang="ts">
import { ref } from 'vue'
import UiCheckbox from '@/shared/ui/ui-checkbox/UiCheckbox.vue'
import type { CheckboxOption } from '@/shared/ui/ui-checkbox/UiCheckbox.vue'
import type { UiColors } from '@/shared/ui/ui-types'
import type { CheckboxSize } from '@/shared/ui/ui-checkbox/ui-checkbox-properties'

const selected_values = ref<any[]>(['option1'])

interface CheckboxDemo {
  label: string
  color?: UiColors
  size?: string
  disabled?: boolean
  data: CheckboxOption[]
}

const colors: UiColors[] = [
  'neutral', 'primary', 'secondary', 'accent',
  'info', 'success', 'warning', 'error',
]

const basic_demos: CheckboxDemo[] = [
  {
    label: 'Default',
    data: [
      { label: 'Option A', value: 'a' },
      { label: 'Option B', value: 'b' },
      { label: 'Option C', value: 'c' },
    ],
  },
  {
    label: 'Disabled',
    disabled: true,
    data: [
      { label: 'Option A', value: 'a' },
      { label: 'Option B', value: 'b' },
    ],
  },
]

const color_demos: CheckboxDemo[] = colors.map((c) => ({
  label: `Color: ${c}`,
  color: c,
  data: [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ],
}))

const sizes: { label: string; size: string }[] = [
  { label: 'Extra Small', size: 'xs' },
  { label: 'Small', size: 'sm' },
  { label: 'Medium (default)', size: 'md' },
  { label: 'Large', size: 'lg' },
  { label: 'Extra Large', size: 'xl' },
]

const size_data: CheckboxOption[] = [
  { label: 'A', value: 'a' },
  { label: 'B', value: 'b' },
]
</script>

<template>
  <div class="p-8 max-w-2xl mx-auto space-y-10">
    <h1 class="text-2xl font-bold">Checkbox Component</h1>

    <!-- Basic demos -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Variants</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(demo, index) in basic_demos" :key="index">
          <p class="text-sm font-medium mb-2">{{ demo.label }}</p>
          <UiCheckbox
            :name="demo.label"
            :data="demo.data"
            :disabled="demo.disabled ?? false"
          />
        </div>
      </div>
    </section>

    <hr class="border-base-300" />

    <!-- Colors showcase -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Colors</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(demo, index) in color_demos" :key="index">
          <p class="text-sm font-medium mb-2">{{ demo.label }}</p>
          <UiCheckbox
            :name="demo.label"
            :color="demo.color"
            :data="demo.data"
          />
        </div>
      </div>
    </section>

    <hr class="border-base-300" />

    <!-- Sizes showcase -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Sizes</h2>
      <div class="flex flex-col gap-4">
        <div v-for="s in sizes" :key="s.size">
          <p class="text-sm font-medium mb-2">{{ s.label }}</p>
          <UiCheckbox name="demo" :size="s.size as CheckboxSize" :data="size_data" />
        </div>
      </div>
    </section>

    <hr class="border-base-300" />

    <!-- Interactive example -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Interactive</h2>
      <div>
        <p class="text-sm font-medium mb-2">Selected: {{ selected_values }}</p>
        <UiCheckbox
          name="interactive"
          v-model="selected_values"
          :data="[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ]"
        />
      </div>
    </section>
  </div>
</template>
