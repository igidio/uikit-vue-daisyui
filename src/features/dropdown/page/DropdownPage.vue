<script setup lang="ts">
import UiDropdown from '@/shared/ui/ui-dropdown/UiDropdown.vue'
import UiDropdownItem from '@/shared/ui/ui-dropdown/UiDropdownItem.vue'
import UiButton from '@/shared/ui/ui-button/UiButton.vue'
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Dropdown</h2>
      <p class="text-base-content/70 mb-6">
        Dropdown with default position (bottom) and align (center).
      </p>
      <UiDropdown id="default-dropdown">
        <template #trigger>
          <UiButton label="Click" variant="primary" />
        </template>
        <UiDropdownItem>Item 1</UiDropdownItem>
        <UiDropdownItem>Item 2</UiDropdownItem>
        <UiDropdownItem>Item 3</UiDropdownItem>
      </UiDropdown>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Position: Top</h2>
      <p class="text-base-content/70 mb-6">Dropdown opens toward the top.</p>
      <UiDropdown id="top-dropdown" position="top">
        <template #trigger>
          <UiButton label="Click" variant="primary" />
        </template>
        <UiDropdownItem>Item 1</UiDropdownItem>
        <UiDropdownItem>Item 2</UiDropdownItem>
        <UiDropdownItem>Item 3</UiDropdownItem>
      </UiDropdown>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Position: Left</h2>
      <p class="text-base-content/70 mb-6">Dropdown opens toward the left.</p>
      <div class="flex justify-center">
        <UiDropdown id="left-dropdown" position="left">
          <template #trigger>
            <UiButton label="Click" variant="primary" />
          </template>
          <UiDropdownItem>Item 1</UiDropdownItem>
          <UiDropdownItem>Item 2</UiDropdownItem>
          <UiDropdownItem>Item 3</UiDropdownItem>
        </UiDropdown>
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Position: Right</h2>
      <p class="text-base-content/70 mb-6">Dropdown opens toward the right.</p>
      <div class="flex justify-center">
        <UiDropdown id="right-dropdown" position="right">
          <template #trigger>
            <UiButton label="Click" variant="primary" />
          </template>
          <UiDropdownItem>Item 1</UiDropdownItem>
          <UiDropdownItem>Item 2</UiDropdownItem>
          <UiDropdownItem>Item 3</UiDropdownItem>
        </UiDropdown>
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Align: Start</h2>
      <p class="text-base-content/70 mb-6">Dropdown aligns to the start of the trigger button.</p>
      <UiDropdown id="start-dropdown" align="start">
        <template #trigger>
          <UiButton label="Click" variant="primary" />
        </template>
        <UiDropdownItem>Item 1</UiDropdownItem>
        <UiDropdownItem>Item 2</UiDropdownItem>
        <UiDropdownItem>Item 3</UiDropdownItem>
      </UiDropdown>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Align: End</h2>
      <p class="text-base-content/70 mb-6">Dropdown aligns to the end of the trigger button.</p>
      <UiDropdown id="end-dropdown" align="end">
        <template #trigger>
          <UiButton label="Click" variant="primary" />
        </template>
        <UiDropdownItem>Item 1</UiDropdownItem>
        <UiDropdownItem>Item 2</UiDropdownItem>
        <UiDropdownItem>Item 3</UiDropdownItem>
      </UiDropdown>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">With Icons</h2>
      <p class="text-base-content/70 mb-6">Dropdown with icons inside items.</p>
      <UiDropdown id="icon-dropdown">
        <template #trigger>
          <UiButton label="Click" variant="primary" />
        </template>
        <UiDropdownItem>
          <span class="flex items-center gap-2">✏️ Edit</span>
        </UiDropdownItem>
        <UiDropdownItem>
          <span class="flex items-center gap-2">📋 Copy</span>
        </UiDropdownItem>
        <UiDropdownItem>
          <span class="flex items-center gap-2">🗑️ Delete</span>
        </UiDropdownItem>
      </UiDropdown>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Combined: Top + End</h2>
      <p class="text-base-content/70 mb-6">Dropdown opens top and aligns to the end.</p>
      <UiDropdown id="combined-dropdown" position="top" align="end">
        <template #trigger>
          <UiButton label="Click" variant="primary" />
        </template>
        <UiDropdownItem>Item 1</UiDropdownItem>
        <UiDropdownItem>Item 2</UiDropdownItem>
        <UiDropdownItem>Item 3</UiDropdownItem>
      </UiDropdown>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Complex Content</h2>
      <p class="text-base-content/70 mb-6">
        Dropdown items can contain any HTML content via the default slot.
      </p>
      <UiDropdown id="complex-dropdown">
        <template #trigger>
          <UiButton variant="primary" label="Actions" />
        </template>
        <UiDropdownItem>
          <a href="#">✏️ Edit</a>
        </UiDropdownItem>
        <UiDropdownItem>
          <a href="#">📋 Duplicate</a>
        </UiDropdownItem>
        <UiDropdownItem>
          <a href="#" class="text-error">🗑️ Delete</a>
        </UiDropdownItem>
      </UiDropdown>
    </div>
  </section>
</template>
