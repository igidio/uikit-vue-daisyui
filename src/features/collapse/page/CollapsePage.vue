<script setup lang="ts">
import UiCollapse from '@/shared/ui/ui-collapse/UiCollapse.vue'
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Collapse</h2>
      <p class="text-base-content/70 mb-6">A simple collapsible section with arrow icon.</p>
      <UiCollapse title="Click to open this collapse">
        <p>This content is hidden by default and shown when the collapse is opened.</p>
        <p class="mt-2">You can put any content here.</p>
      </UiCollapse>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Icons</h2>
      <p class="text-base-content/70 mb-6">
        Arrow and math signs (<code>+/-</code>) icons.
      </p>
      <div class="space-y-4">
        <UiCollapse title="Arrow icon" icons="arrow">
          <p>Content with arrow icon.</p>
        </UiCollapse>
        <UiCollapse title="Plus icon" icons="mathsigns">
          <p>Content with plus/minus icon.</p>
        </UiCollapse>
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">No border (Unwrap)</h2>
      <p class="text-base-content/70 mb-6">Collapse without background and border.</p>
      <UiCollapse title="Unwrapped collapse" :unwrap="true">
        <p>This collapse has no background or border.</p>
      </UiCollapse>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Icon Position</h2>
      <p class="text-base-content/70 mb-6">Icon at start or end.</p>
      <div class="space-y-4">
        <UiCollapse title="Icon at end (default)" icons="arrow" icon_position="end">
          <p>Arrow icon at the end.</p>
        </UiCollapse>
        <UiCollapse title="Icon at start" icons="arrow" icon_position="start">
          <p>Arrow icon at the start.</p>
        </UiCollapse>
      </div>
    </div>
  </section>
</template>
