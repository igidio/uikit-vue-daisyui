<script setup lang="ts">
import UiTabs from '@/shared/ui/ui-tabs/UiTabs.vue'
import UiTabsItem from '@/shared/ui/ui-tabs/UiTabsItem.vue'
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Tabs</h2>
      <p class="text-base-content/70 mb-6">Simple tabs with content.</p>
      <UiTabs name="demo-tabs">
        <UiTabsItem label="Tab 1">
          <p>Content for Tab 1. Lorem ipsum dolor sit amet.</p>
        </UiTabsItem>
        <UiTabsItem label="Tab 2">
          <p>Content for Tab 2. Consectetur adipiscing elit.</p>
        </UiTabsItem>
        <UiTabsItem label="Tab 3">
          <p>Content for Tab 3. Sed do eiusmod tempor incididunt.</p>
        </UiTabsItem>
      </UiTabs>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Styles</h2>
      <p class="text-base-content/70 mb-6">
        Available styles: <code>default</code>, <code>border</code>, <code>lift</code>, <code>box</code>.
      </p>
      <div class="space-y-8">
        <UiTabs v-for="style in ['default','border','lift','box']" :key="style" :name="`style-${style}`" :type="style">
          <UiTabsItem label="Tab 1"><p>{{ style }} style tab 1</p></UiTabsItem>
          <UiTabsItem label="Tab 2"><p>{{ style }} style tab 2</p></UiTabsItem>
        </UiTabs>
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Sizes</h2>
      <p class="text-base-content/70 mb-6">Available sizes.</p>
      <UiTabs v-for="size in ['xs','sm','md','lg','xl']" :key="size" :name="`size-${size}`" :size="size" type="box">
        <UiTabsItem label="Tab 1"><p>Size {{ size }}</p></UiTabsItem>
        <UiTabsItem label="Tab 2"><p>Second tab</p></UiTabsItem>
      </UiTabs>
    </div>
  </section>
</template>
