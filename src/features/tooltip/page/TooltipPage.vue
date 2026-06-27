<script setup lang="ts">
import UiTooltip from '@/shared/ui/ui-tooltip/UiTooltip.vue'
import UiButton from '@/shared/ui/ui-button/UiButton.vue'
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Tooltip</h2>
      <p class="text-base-content/70 mb-6">A simple tooltip with default position (top).</p>
      <div class="flex flex-wrap gap-4 mt-8 mb-16">
        <UiTooltip tip="Hello world!">
          <UiButton variant="primary" label="Hover me" />
        </UiTooltip>
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Positions</h2>
      <p class="text-base-content/70 mb-6">
        Available positions: <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>.
      </p>
      <div class="flex flex-wrap gap-4 mt-8 mb-16">
        <UiTooltip tip="Top tooltip" position="top">
          <UiButton label="Top" />
        </UiTooltip>
        <UiTooltip tip="Bottom tooltip" position="bottom">
          <UiButton label="Bottom" />
        </UiTooltip>
        <UiTooltip tip="Left tooltip" position="left">
          <UiButton label="Left" />
        </UiTooltip>
        <UiTooltip tip="Right tooltip" position="right">
          <UiButton label="Right" />
        </UiTooltip>
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Colors</h2>
      <p class="text-base-content/70 mb-6">Tooltip with different colors.</p>
      <div class="flex flex-wrap gap-4 mt-8 mb-16">
        <UiTooltip v-for="color in ['primary','secondary','accent','info','success','warning','error']" :key="color" :color="color" :tip="`${color} tooltip`">
          <UiButton :variant="color" :label="color" />
        </UiTooltip>
      </div>
    </div>
  </section>
</template>
