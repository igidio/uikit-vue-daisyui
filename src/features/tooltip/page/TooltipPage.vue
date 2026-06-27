<script setup lang="ts">
import UiTooltip from '@/shared/ui/ui-tooltip/UiTooltip.vue'
</script>

<template>
  <div class="flex flex-col gap-4 overflow-hidden">
    <!-- Basic Tooltip -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Basic Tooltip</h2>
      <p class="text-base-content/70 mb-6">
        Simple tooltip that appears on hover using <code>data-tip</code>.
      </p>
      <div class="flex flex-wrap items-center gap-4">
        <UiTooltip tip="hello">
          <button class="btn">Hover me</button>
        </UiTooltip>
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- With Content -->
    <div>
      <h2 class="text-2xl font-bold mb-2">With Content</h2>
      <p class="text-base-content/70 mb-6">
        Using <code>:content="true"</code> with a <code>&lt;template #content&gt;</code> slot to
        customize the tooltip popup.
      </p>
      <div class="flex flex-wrap items-center gap-4">
        <UiTooltip tip="Wow!" :content="true">
          <button class="btn">Hover me</button>
          <template #content>
            <span class="text-sm"><b>Custom tooltip</b> content!</span>
          </template>
        </UiTooltip>
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Positions -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Positions</h2>
      <p class="text-base-content/70 mb-6">
        Tooltips can be positioned on top (default), bottom, left, or right.
      </p>
      <div class="flex flex-wrap items-center gap-4">
        <UiTooltip tip="Top" position="top">
          <button class="btn">Top</button>
        </UiTooltip>
        <UiTooltip tip="Bottom" position="bottom">
          <button class="btn">Bottom</button>
        </UiTooltip>
        <UiTooltip tip="Left" position="left">
          <button class="btn">Left</button>
        </UiTooltip>
        <UiTooltip tip="Right" position="right">
          <button class="btn">Right</button>
        </UiTooltip>
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Colors -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Colors</h2>
      <p class="text-base-content/70 mb-6">Tooltips in daisyUI semantic colors.</p>
      <div class="flex flex-wrap items-center gap-4">
        <UiTooltip tip="primary" color="primary">
          <button class="btn">Primary</button>
        </UiTooltip>
        <UiTooltip tip="secondary" color="secondary">
          <button class="btn">Secondary</button>
        </UiTooltip>
        <UiTooltip tip="accent" color="accent">
          <button class="btn">Accent</button>
        </UiTooltip>
        <UiTooltip tip="neutral" color="neutral">
          <button class="btn">Neutral</button>
        </UiTooltip>
        <UiTooltip tip="info" color="info">
          <button class="btn">Info</button>
        </UiTooltip>
        <UiTooltip tip="success" color="success">
          <button class="btn">Success</button>
        </UiTooltip>
        <UiTooltip tip="warning" color="warning">
          <button class="btn">Warning</button>
        </UiTooltip>
        <UiTooltip tip="error" color="error">
          <button class="btn">Error</button>
        </UiTooltip>
        <UiTooltip tip="ghost" color="ghost">
          <button class="btn">Ghost</button>
        </UiTooltip>
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Combined -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Combined</h2>
      <p class="text-base-content/70 mb-6">
        Tooltip with position, color, and slot content all together.
      </p>
      <div class="flex flex-wrap items-center gap-4">
        <UiTooltip tip="Bottom primary" position="bottom" color="primary" :content="true">
          <button class="btn btn-primary">Bottom + Primary</button>
          <template #content>
            <span>Primary tooltip</span>
          </template>
        </UiTooltip>
        <UiTooltip tip="Left success" position="left" color="success" :content="true">
          <button class="btn btn-success">Left + Success</button>
          <template #content>
            <span>Success tooltip</span>
          </template>
        </UiTooltip>
        <UiTooltip tip="Right warning" position="right" color="warning" :content="true">
          <button class="btn btn-warning">Right + Warning</button>
          <template #content>
            <span>Warning tooltip</span>
          </template>
        </UiTooltip>
        <UiTooltip tip="Top error" position="top" color="error" :content="true">
          <button class="btn btn-error">Top + Error</button>
          <template #content>
            <span>Error tooltip</span>
          </template>
        </UiTooltip>
      </div>
    </div>
  </div>
</template>
