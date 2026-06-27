<script setup lang="ts">
import UiDivider from '@/shared/ui/ui-divider/UiDivider.vue'
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Divider</h2>
      <p class="text-base-content/70 mb-6">A simple horizontal divider.</p>
      <UiDivider />
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">With Text</h2>
      <p class="text-base-content/70 mb-6">Divider with text labels.</p>
      <div class="flex flex-col gap-4">
        <UiDivider text="OR" />
        <UiDivider text="Center" position="center" />
        <UiDivider text="Start" position="start" />
        <UiDivider text="End" position="end" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Colors</h2>
      <p class="text-base-content/70 mb-6">Divider with different colors.</p>
      <div class="flex flex-col gap-4">
        <UiDivider v-for="color in ['primary','secondary','accent','neutral','info','success','warning','error']" :key="color" :color="color" text="Divider" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Vertical</h2>
      <p class="text-base-content/70 mb-6">Vertical divider (shown on wide screens).</p>
      <div class="flex h-32 gap-4 items-center">
        <span>Left</span>
        <UiDivider orientation="vertical" :responsive="768" />
        <span>Right</span>
      </div>
    </div>
  </section>
</template>
