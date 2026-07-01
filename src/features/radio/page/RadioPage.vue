<script setup lang="ts">
import { ref } from 'vue'
import UiRadio from '@/shared/ui/ui-radio/UiRadio.vue'
import UiRadioItem from '@/shared/ui/ui-radio/UiRadioItem.vue'
import type { UiColors } from '@/shared/ui/ui-types'
import type { SelectSize } from '@/shared/ui/ui-select/ui-select-properties'

interface RadioDemo {
  label: string
  color?: UiColors
  disabled?: boolean
}

const colors: UiColors[] = [
  'neutral', 'primary', 'secondary', 'accent',
  'info', 'success', 'warning', 'error',
]

const basic_demos: RadioDemo[] = [
  { label: 'Default' },
  { label: 'Disabled', disabled: true },
]

const color_demos: RadioDemo[] = colors.map((c) => ({
  label: `Color: ${c}`,
  color: c,
}))

const sizes: { label: string; size: SelectSize }[] = [
  { label: 'Extra Small', size: 'xs' },
  { label: 'Small', size: 'sm' },
  { label: 'Medium (default)', size: 'md' },
  { label: 'Large', size: 'lg' },
  { label: 'Extra Large', size: 'xl' },
]

const interactive_value = ref('option1')
</script>

<template>
  <div class="space-y-10">
    <h1 class="text-2xl font-bold">Radio Component</h1>

    <!-- Basic demos -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Variants</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(demo, index) in basic_demos" :key="index">
          <p class="text-sm font-medium mb-2">{{ demo.label }}</p>
          <UiRadio :name="demo.label" :disabled="demo.disabled ?? false">
            <UiRadioItem value="option1">Option 1</UiRadioItem>
            <UiRadioItem value="option2">Option 2</UiRadioItem>
            <UiRadioItem value="option3">Option 3</UiRadioItem>
          </UiRadio>
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
          <UiRadio :name="demo.label" :color="demo.color">
            <UiRadioItem value="option1">Option 1</UiRadioItem>
            <UiRadioItem value="option2">Option 2</UiRadioItem>
            <UiRadioItem value="option3">Option 3</UiRadioItem>
          </UiRadio>
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
          <UiRadio :name="`demo-${s.size}`" :size="s.size">
            <UiRadioItem value="a">A</UiRadioItem>
            <UiRadioItem value="b">B</UiRadioItem>
            <UiRadioItem value="c">C</UiRadioItem>
          </UiRadio>
        </div>
      </div>
    </section>

    <hr class="border-base-300" />

    <!-- Interactive example -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Interactive</h2>
      <div>
        <p class="text-sm font-medium mb-2">Selected value: {{ interactive_value }}</p>
        <UiRadio name="interactive" v-model="interactive_value">
          <UiRadioItem value="option1">Option 1</UiRadioItem>
          <UiRadioItem value="option2">Option 2</UiRadioItem>
          <UiRadioItem value="option3">Option 3</UiRadioItem>
        </UiRadio>
      </div>
    </section>
  </div>
</template>
