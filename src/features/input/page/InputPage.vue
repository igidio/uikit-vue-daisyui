<script setup lang="ts">
import UiInput from '@/shared/ui/ui-input/UiInput.vue'
import type { SelectSize } from '@/shared/ui/ui-select/ui-select-properties'
import type { UiColors } from '@/shared/ui/ui-types'

interface InputDemo {
  label: string
  color?: UiColors
  type: 'text' | 'password' | 'email'
  placeholder: string
  disabled?: boolean
  readonly?: boolean
  value?: string
}

const colors: UiColors[] = [
  'neutral', 'primary', 'secondary', 'accent',
  'info', 'success', 'warning', 'error', 'ghost',
]

const demos: InputDemo[] = [
  { label: 'Text Input', type: 'text', placeholder: 'Type here...', value: 'Hello world' },
  { label: 'Password', color: 'primary', type: 'password', placeholder: 'Enter password...' },
  { label: 'Email', color: 'secondary', type: 'email', placeholder: 'you@example.com' },
  { label: 'Disabled', color: 'accent', type: 'text', placeholder: 'Disabled input', disabled: true },
  { label: 'Read Only', color: 'info', type: 'text', placeholder: 'Read only', readonly: true, value: 'Can\'t edit me' },
]

const color_demos: InputDemo[] = colors.map((c) => ({
  label: `Color: ${c}`,
  color: c,
  type: 'text' as const,
  placeholder: `input-${c}`,
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
  <div class="space-y-10">
    <h1 class="text-2xl font-bold">Input Component</h1>

    <!-- Basic demos -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Variants</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(demo, index) in demos" :key="index">
          <p class="text-sm font-medium mb-2">{{ demo.label }}</p>
          <UiInput
            :type="demo.type"
            :placeholder="demo.placeholder"
            :disabled="demo.disabled ?? false"
            :readonly="demo.readonly ?? false"
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
        <div v-for="(demo, index) in color_demos" :key="index">
          <p class="text-sm font-medium mb-2">{{ demo.label }}</p>
          <UiInput type="text" :color="demo.color" :placeholder="demo.placeholder" />
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
          <UiInput type="text" :placeholder="`input-${s.size}`" :size="s.size" />
        </div>
      </div>
    </section>
  </div>
</template>
