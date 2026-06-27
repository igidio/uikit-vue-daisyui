<script setup lang="ts">
import UiButton from '@/shared/ui/ui-button/UiButton.vue'
</script>

<template>
  <section class="space-y-12">
    <!-- Default -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Button</h2>
      <p class="text-base-content/70 mb-6">A simple button with default neutral variant.</p>
      <div class="flex flex-wrap gap-4">
        <UiButton label="Button" variant="neutral" />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Sizes -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Sizes</h2>
      <p class="text-base-content/70 mb-6">
        Available sizes: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>.
      </p>
      <div class="flex flex-wrap items-end gap-4">
        <UiButton v-for="size in ['xs','sm','md','lg','xl']" :key="size" :size="size" :label="size" variant="primary" />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Variants -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Variants</h2>
      <p class="text-base-content/70 mb-6">All color variants.</p>
      <div class="flex flex-wrap gap-4">
        <UiButton v-for="color in ['neutral','primary','secondary','accent','info','success','warning','error','ghost']" :key="color" :variant="color" :label="color" />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Styles -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Styles</h2>
      <p class="text-base-content/70 mb-6">
        Available styles: <code>soft</code>, <code>outline</code>, <code>dash</code>.
      </p>
      <div class="flex flex-wrap gap-4">
        <UiButton variant="primary" label="Default" />
        <UiButton variant="primary" style_type="soft" label="Soft" />
        <UiButton variant="primary" style_type="outline" label="Outline" />
        <UiButton variant="primary" style_type="dash" label="Dash" />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Shapes -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Shapes</h2>
      <p class="text-base-content/70 mb-6">Square and circle shapes.</p>
      <div class="flex flex-wrap gap-4">
        <UiButton variant="primary" shape="square" icon="plus" />
        <UiButton variant="primary" shape="circle" icon="plus" />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Icon + Label -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Icon &amp; Label</h2>
      <p class="text-base-content/70 mb-6">Buttons with icon and label.</p>
      <div class="flex flex-wrap gap-4">
        <UiButton variant="primary" icon="home" label="Home" />
        <UiButton variant="secondary" icon="search" label="Search" />
        <UiButton variant="success" icon="send" label="Send" />
        <UiButton variant="error" icon="delete" label="Delete" />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- States -->
    <div>
      <h2 class="text-2xl font-bold mb-2">States</h2>
      <p class="text-base-content/70 mb-6">Disabled and block buttons.</p>
      <div class="flex flex-wrap gap-4">
        <UiButton variant="primary" label="Disabled" disabled />
        <UiButton variant="primary" label="Block" block class="w-full" />
      </div>
    </div>
  </section>
</template>
