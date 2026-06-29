<script setup lang="ts">

import { use_theme_store } from '@/shared/stores/theme.store'
import type { UiThemeControllerType } from './ui-themecontroller.properties'
import UiIcon from '@/shared/ui/ui-icon/UiIcon.vue'

const theme_store = use_theme_store()

const props = withDefaults(defineProps<{
  type?: UiThemeControllerType
}>(), {
  type: 'toggle',
})

const model = defineModel<boolean>({
  get: () => theme_store.mode === 'dark',
  set: () => theme_store.toggle(),
})
</script>

<template>
  <input
    v-if="type === 'toggle'"
    type="checkbox"
    class="toggle theme-controller"
    v-model="model"
  />

  <input
    v-else-if="type === 'checkbox'"
    type="checkbox"
    class="checkbox theme-controller"
    v-model="model"
  />

  <label v-else-if="type === 'swap'" class="swap swap-rotate">
    <input
      type="checkbox"
      class="theme-controller"
      v-model="model"
    />
    <div class="swap-off">
      <UiIcon icon="sun" />
    </div>
    <div class="swap-on">
      <UiIcon icon="moon" />
    </div>
  </label>

  <label v-else-if="type === 'icon_inside'" class="toggle text-base-content text-xs">
    <input
      type="checkbox"
      class="theme-controller"
      v-model="model"
    />
    <UiIcon icon="sun" />
    <UiIcon icon="moon" />
  </label>
</template>
