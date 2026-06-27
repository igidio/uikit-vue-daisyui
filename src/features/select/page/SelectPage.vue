<script setup lang="ts">
import UiSelect from '@/shared/ui/ui-select/UiSelect.vue'
import type { SelectOption, SelectSize } from '@/shared/ui/ui-select/UiSelect.vue'
import type { UiColors } from '@/shared/ui/ui-types'

interface SelectDemo {
  label: string
  color?: UiColors
  placeholder: string
  disabled?: boolean
  options: SelectOption[]
  value?: string
}

const colors: UiColors[] = [
  'neutral', 'primary', 'secondary', 'accent',
  'info', 'success', 'warning', 'error', 'ghost',
]

const defaultOptions: SelectOption[] = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
]

const demos: SelectDemo[] = [
  { label: 'Default Select', placeholder: 'Pick an option...', options: defaultOptions },
  { label: 'Disabled', color: 'primary', placeholder: 'Disabled select', options: defaultOptions, disabled: true },
  { label: 'With Preselected', color: 'secondary', placeholder: 'Choose...', options: defaultOptions, value: 'b' },
]

const colorDemos: SelectDemo[] = colors.map((c) => ({
  label: `Color: ${c}`,
  color: c,
  placeholder: `select-${c}`,
  options: defaultOptions,
}))

const sizes: { label: string; size: SelectSize }[] = [
  { label: 'Extra Small', size: 'xs' },
  { label: 'Small', size: 'sm' },
  { label: 'Medium (default)', size: 'md' },
  { label: 'Large', size: 'lg' },
  { label: 'Extra Large', size: 'xl' },
]
</script>

<template>
  <div class="p-8 w-full mx-auto space-y-10">
    <h1 class="text-2xl font-bold">Select Component</h1>

    <!-- Basic demos -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Variants</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(demo, index) in demos" :key="index">
          <p class="text-sm font-medium mb-2">{{ demo.label }}</p>
          <UiSelect
            :options="demo.options"
            :placeholder="demo.placeholder"
            :color="demo.color"
            :disabled="demo.disabled ?? false"
            :model-value="demo.value ?? undefined"
          />
        </div>
      </div>
    </section>

    <hr class="border-base-300" />

    <!-- Colors showcase -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Colors</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(demo, index) in colorDemos" :key="index">
          <p class="text-sm font-medium mb-2">{{ demo.label }}</p>
          <UiSelect
            :options="demo.options"
            :color="demo.color"
            :placeholder="demo.placeholder"
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
          <UiSelect :options="defaultOptions" :placeholder="`select-${s.size}`" :size="s.size" />
        </div>
      </div>
    </section>
  </div>
</template>
