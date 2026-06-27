<script setup lang="ts">
import { ref } from 'vue'
import UiRange from '@/shared/ui/ui-range/UiRange.vue'
import type { UiColors } from '@/shared/ui/ui-types'
import type { SelectSize } from '@/shared/ui/ui-select/UiSelect.vue'

interface RangeDemo {
  label: string
  color?: UiColors
  disabled?: boolean
  value?: number
}

const colors: UiColors[] = [
  'neutral', 'primary', 'secondary', 'accent',
  'info', 'success', 'warning', 'error',
]

const basic_demos: RangeDemo[] = [
  { label: 'Default Range', value: 40 },
  { label: 'Disabled', color: 'primary', value: 60, disabled: true },
]

const color_demos: RangeDemo[] = colors.map((c) => ({
  label: `Color: ${c}`,
  color: c,
  value: 50,
}))

const sizes: { label: string; size: SelectSize }[] = [
  { label: 'Extra Small', size: 'xs' },
  { label: 'Small', size: 'sm' },
  { label: 'Medium (default)', size: 'md' },
  { label: 'Large', size: 'lg' },
  { label: 'Extra Large', size: 'xl' },
]

const interactive_value = ref(50)
</script>

<template>
  <div class="p-8 max-w-2xl mx-auto space-y-10">
    <h1 class="text-2xl font-bold">Range Component</h1>

    <!-- Basic demos -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Variants</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(demo, index) in basic_demos" :key="index">
          <p class="text-sm font-medium mb-2">{{ demo.label }}</p>
          <UiRange
            :value="demo.value ?? 0"
            :color="demo.color"
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
          <UiRange :value="demo.value ?? 0" :color="demo.color" />
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
          <UiRange value="25" :size="s.size" />
        </div>
      </div>
    </section>

    <hr class="border-base-300" />

    <!-- Steps and measure -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Steps & Measure</h2>
      <div class="max-w-md">
        <div>
          <p class="text-sm font-medium mb-2">Steps of 25 (0-100)</p>
          <UiRange :value="50" :min="0" :max="100" :step="25" color="primary" />
        </div>
        <div class="flex justify-between text-xs px-1 mt-1">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
      </div>
    </section>

    <hr class="border-base-300" />

    <!-- Interactive demo -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Interactive</h2>
      <div class="max-w-md">
        <div>
          <p class="text-sm font-medium mb-2">Adjust value</p>
          <UiRange color="primary" v-model="interactive_value" />
        </div>
        <p class="text-sm mt-1">
          Value: <strong>{{ interactive_value }}</strong>
        </p>
      </div>
    </section>
  </div>
</template>
