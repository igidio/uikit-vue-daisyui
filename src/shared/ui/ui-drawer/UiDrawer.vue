<script setup lang="ts">
import { useDrawer } from '@/shared/stores/drawer.store'
import type { UiDrawerSide } from './ui-drawer-properties'

const drawer_service = useDrawer()

const drawer_classes = () => {
  return drawer_service.side.value === 'end' ? 'drawer drawer-end' : 'drawer'
}

function side_class(side: UiDrawerSide): string {
  return side === 'end' ? 'drawer drawer-end' : 'drawer'
}

function on_toggle_change(event: Event): void {
  const checked = (event.target as HTMLInputElement).checked
  if (checked) {
    drawer_service.open()
  } else {
    drawer_service.close()
  }
}
</script>

<template>
  <div :class="drawer_classes()">
    <input
      type="checkbox"
      id="ui-drawer-toggle"
      class="drawer-toggle"
      :checked="drawer_service.is_open.value"
      @change="on_toggle_change($event)"
    />
    <div class="drawer-content">
      <slot />
    </div>
    <div class="drawer-side">
      <label for="ui-drawer-toggle" aria-label="close sidebar" class="drawer-overlay"></label>
      <div class="bg-base-200 w-60 md:w-80 h-screen">
        <component
          v-if="drawer_service.content_component.value"
          :is="drawer_service.content_component.value"
        />
      </div>
    </div>
  </div>
</template>
