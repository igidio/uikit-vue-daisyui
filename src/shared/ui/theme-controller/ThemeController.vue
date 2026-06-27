<script setup lang="ts">
import { useToggleTheme } from '@/shared/composables/useToggleTheme'
import type { UiThemeControllerType } from './theme-controller-properties'

const props = withDefaults(defineProps<{
  type?: UiThemeControllerType
  value?: string
}>(), {
  type: 'toggle',
  value: 'dark',
})

const { mode, toggle } = useToggleTheme()

const checked = mode.value === 'dark'
</script>

<template>
  <!-- Toggle switch -->
  <input
    v-if="type === 'toggle'"
    type="checkbox"
    class="toggle theme-controller"
    :value="value"
    :checked="checked"
    @change="toggle"
  />

  <!-- Checkbox -->
  <input
    v-else-if="type === 'checkbox'"
    type="checkbox"
    class="checkbox theme-controller"
    :value="value"
    :checked="checked"
    @change="toggle"
  />

  <!-- Swap with rotating sun/moon icons -->
  <label v-else-if="type === 'swap'" class="swap swap-rotate">
    <input
      type="checkbox"
      class="theme-controller"
      :value="value"
      :checked="checked"
      @change="toggle"
    />
    <div class="swap-off">
      <span class="icon-[ri--sun-fill]"></span>
    </div>
    <div class="swap-on">
      <span class="icon-[ri--moon-fill]"></span>
    </div>
  </label>

  <!-- Toggle with icons inside -->
  <label v-else-if="type === 'icon_inside'" class="toggle text-base-content text-xs">
    <input
      type="checkbox"
      class="theme-controller"
      :value="value"
      :checked="checked"
      @change="toggle"
    />
    <span class="icon-[ri--sun-fill]"></span>
    <span class="icon-[ri--moon-fill]"></span>
  </label>
</template>
