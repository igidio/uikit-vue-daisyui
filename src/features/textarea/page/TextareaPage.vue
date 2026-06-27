<script setup lang="ts">
import UiTextarea from '@/shared/ui/ui-textarea/UiTextarea.vue'
import type { UiColors } from '@/shared/ui/ui-types'

interface TextareaDemo {
  label: string
  color?: UiColors
  placeholder: string
  disabled?: boolean
  readonly?: boolean
  resizable?: boolean
  rows?: number
  value?: string
}

const colors: UiColors[] = [
  'neutral', 'primary', 'secondary', 'accent',
  'info', 'success', 'warning', 'error', 'ghost',
]

const demos: TextareaDemo[] = [
  { label: 'Default Textarea', placeholder: 'Write something...' },
  { label: 'With Value', placeholder: 'Type here...', value: 'Hello\nWorld!' },
  { label: 'Disabled', color: 'primary', placeholder: 'Disabled textarea', disabled: true },
  { label: 'Read Only', color: 'info', placeholder: 'Read only', readonly: true, value: 'Cannot edit this' },
  { label: 'Not Resizable', placeholder: 'Cannot be resized', resizable: false },
  { label: 'Custom Rows (8)', placeholder: 'Tall textarea...', rows: 8 },
]

const colorDemos: TextareaDemo[] = colors.map((c) => ({
  label: `Color: ${c}`,
  color: c,
  placeholder: `textarea-${c}`,
}))
</script>

<template>
  <div class="p-8 max-w-2xl mx-auto space-y-10">
    <h1 class="text-2xl font-bold">Textarea Component</h1>

    <!-- Basic demos -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Variants</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(demo, index) in demos" :key="index">
          <p class="text-sm font-medium mb-2">{{ demo.label }}</p>
          <UiTextarea
            :placeholder="demo.placeholder"
            :color="demo.color"
            :disabled="demo.disabled ?? false"
            :readonly="demo.readonly ?? false"
            :resizable="demo.resizable ?? true"
            :rows="demo.rows ?? 4"
            :model-value="demo.value ?? ''"
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
          <UiTextarea
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
        <div>
          <p class="text-sm font-medium mb-2">Extra Small</p>
          <UiTextarea placeholder="textarea-xs" size="xs" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Small</p>
          <UiTextarea placeholder="textarea-sm" size="sm" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Medium (default)</p>
          <UiTextarea placeholder="textarea-md" size="md" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Large</p>
          <UiTextarea placeholder="textarea-lg" size="lg" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Extra Large</p>
          <UiTextarea placeholder="textarea-xl" size="xl" />
        </div>
      </div>
    </section>
  </div>
</template>
