<script setup lang="ts">
import { ref } from 'vue'
import UiToggle from '@/shared/ui/ui-toggle/UiToggle.vue'
import type { UiColors } from '@/shared/ui/ui-types'

interface ToggleDemo {
  label: string
  color?: UiColors
  disabled?: boolean
  checked?: boolean
}

const colors: UiColors[] = [
  'neutral', 'primary', 'secondary', 'accent',
  'info', 'success', 'warning', 'error',
]

const demos: ToggleDemo[] = [
  { label: 'Default Toggle' },
  { label: 'Checked', checked: true },
  { label: 'Disabled', disabled: true },
  { label: 'Disabled Checked', disabled: true, checked: true },
]

const colorDemos: ToggleDemo[] = colors.map((c) => ({
  label: `Color: ${c}`,
  color: c,
  checked: true,
}))

const active_value = ref(false)

function toggle_value() {
  active_value.value = !active_value.value
}
</script>

<template>
  <div class="p-8 w-full space-y-10">
    <h1 class="text-2xl font-bold">Toggle Component</h1>

    <!-- Basic demos -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Variants</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(demo, index) in demos" :key="index">
          <p class="text-sm font-medium mb-2">{{ demo.label }}</p>
          <UiToggle
            :color="demo.color"
            :disabled="demo.disabled ?? false"
            :model-value="demo.checked ?? false"
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
          <UiToggle
            :color="demo.color"
            :model-value="demo.checked ?? false"
          />
        </div>
      </div>
    </section>

    <hr class="border-base-300" />

    <!-- Sizes showcase -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Sizes</h2>
      <div class="flex flex-wrap items-center gap-6">
        <div>
          <p class="text-sm font-medium mb-2">Extra Small</p>
          <UiToggle :model-value="true" size="xs" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Small</p>
          <UiToggle :model-value="true" size="sm" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Medium (default)</p>
          <UiToggle :model-value="true" size="md" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Large</p>
          <UiToggle :model-value="true" size="lg" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Extra Large</p>
          <UiToggle :model-value="true" size="xl" />
        </div>
      </div>
    </section>

    <!-- Interactive demo -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Interactive</h2>
      <div class="flex items-center gap-4">
        <div>
          <p class="text-sm font-medium mb-2">Toggle me</p>
          <UiToggle color="primary" v-model="active_value" />
        </div>
        <span class="text-sm"
          >Value: <strong>{{ active_value ? 'ON' : 'OFF' }}</strong></span
        >
      </div>
    </section>
  </div>
</template>
