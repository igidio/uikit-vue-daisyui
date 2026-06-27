<script setup lang="ts">
import UiDropdown from '@/shared/ui/ui-dropdown/UiDropdown.vue'
import UiDropdownItem from '@/shared/ui/ui-dropdown/UiDropdownItem.vue'
import UiButton from '@/shared/ui/ui-button/UiButton.vue'
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Dropdown</h2>
      <p class="text-base-content/70 mb-6">A simple dropdown menu.</p>
      <UiDropdown id="demo-dropdown">
        <template #trigger>
          <UiButton label="Dropdown" variant="primary" />
        </template>
        <UiDropdownItem>Item 1</UiDropdownItem>
        <UiDropdownItem>Item 2</UiDropdownItem>
        <UiDropdownItem>Item 3</UiDropdownItem>
      </UiDropdown>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Positions</h2>
      <p class="text-base-content/70 mb-6">
        Available positions: <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>.
      </p>
      <div class="flex flex-wrap gap-8 mt-8 mb-32">
        <UiDropdown v-for="pos in ['top','bottom','left','right']" :key="pos" :id="`pos-${pos}`" :position="pos">
          <template #trigger>
            <UiButton :label="pos" variant="secondary" />
          </template>
          <UiDropdownItem>Item A</UiDropdownItem>
          <UiDropdownItem>Item B</UiDropdownItem>
        </UiDropdown>
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Alignments</h2>
      <p class="text-base-content/70 mb-6">Dropdown alignment.</p>
      <div class="flex flex-wrap gap-8 mt-8 mb-32">
        <UiDropdown id="align-start" align="start">
          <template #trigger>
            <UiButton label="Start" variant="accent" />
          </template>
          <UiDropdownItem>Item 1</UiDropdownItem>
          <UiDropdownItem>Item 2</UiDropdownItem>
        </UiDropdown>
        <UiDropdown id="align-center" align="center">
          <template #trigger>
            <UiButton label="Center" variant="accent" />
          </template>
          <UiDropdownItem>Item 1</UiDropdownItem>
          <UiDropdownItem>Item 2</UiDropdownItem>
        </UiDropdown>
        <UiDropdown id="align-end" align="end">
          <template #trigger>
            <UiButton label="End" variant="accent" />
          </template>
          <UiDropdownItem>Item 1</UiDropdownItem>
          <UiDropdownItem>Item 2</UiDropdownItem>
        </UiDropdown>
      </div>
    </div>
  </section>
</template>
