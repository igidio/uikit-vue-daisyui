<script setup lang="ts">
import { ref } from 'vue'
import UiSwap from '@/shared/ui/ui-swap/UiSwap.vue'
import UiSwapItem from '@/shared/ui/ui-swap/UiSwapItem.vue'
import UiIcon from '@/shared/ui/ui-icon/UiIcon.vue'

const selected_text = ref('on')
const selected_icon = ref('sun')
const selected_effect = ref('😈')
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Swap (Text)</h2>
      <p class="text-base-content/70 mb-6">
        Basic swap toggling between two text values: ON and OFF.
      </p>
      <UiSwap v-model="selected_text">
        <UiSwapItem value="on">ON</UiSwapItem>
        <UiSwapItem value="off">OFF</UiSwapItem>
      </UiSwap>
      <p class="mt-2 text-sm text-base-content/60">Selected: {{ selected_text }}</p>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Swap Icons</h2>
      <p class="text-base-content/70 mb-6">Swap between sun and moon icons.</p>
      <UiSwap v-model="selected_icon">
        <UiSwapItem value="sun">
          <UiIcon icon="sun" />
        </UiSwapItem>
        <UiSwapItem value="moon">
          <UiIcon icon="moon" />
        </UiSwapItem>
      </UiSwap>
      <p class="mt-2 text-sm text-base-content/60">Selected: {{ selected_icon }}</p>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Swap with Rotate Effect</h2>
      <p class="text-base-content/70 mb-6">Icons swap with a rotate animation.</p>
      <UiSwap v-model="selected_icon" :rotate="true">
        <UiSwapItem value="sun">
          <UiIcon icon="sun" />
        </UiSwapItem>
        <UiSwapItem value="moon">
          <UiIcon icon="moon" />
        </UiSwapItem>
      </UiSwap>
      <p class="mt-2 text-sm text-base-content/60">Selected: {{ selected_icon }}</p>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Hamburger Button</h2>
      <p class="text-base-content/70 mb-6">Classic hamburger menu icon with rotate effect.</p>
      <UiSwap v-model="selected_icon" :rotate="true">
        <UiSwapItem value="menu">
          <UiIcon icon="menu" />
        </UiSwapItem>
        <UiSwapItem value="close">
          <UiIcon icon="close" />
        </UiSwapItem>
      </UiSwap>
      <p class="mt-2 text-sm text-base-content/60">Selected: {{ selected_icon }}</p>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Swap with Flip Effect</h2>
      <p class="text-base-content/70 mb-6">Emoji swap with a flip animation.</p>
      
      <UiSwap v-model="selected_effect" :flip="true">
        <UiSwapItem value="😈">
          <span class="text-2xl">😈</span>
        </UiSwapItem>
        <UiSwapItem value="😇">
          <span class="text-2xl">😇</span>
        </UiSwapItem>
      </UiSwap>
      <p class="mt-2 text-sm text-base-content/60">Selected: {{ selected_effect }}</p>
    </div>
  </section>
</template>
