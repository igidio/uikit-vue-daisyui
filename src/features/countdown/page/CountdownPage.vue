<script setup lang="ts">
import UiCountdown from '@/shared/ui/ui-countdown/UiCountdown.vue'
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Countdown</h2>
      <p class="text-base-content/70 mb-6">A simple countdown timer display.</p>
      <UiCountdown
        :values="['15','24','37','42']"
        :labels="['days','hours','minutes','seconds']"
      />
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">With Colons</h2>
      <p class="text-base-content/70 mb-6">Countdown with colon separators.</p>
      <UiCountdown
        :values="['15','24','37','42']"
        :labels="['days','hours','minutes','seconds']"
        colons
        label_position="under"
      />
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Boxes</h2>
      <p class="text-base-content/70 mb-6">Countdown in boxes with background.</p>
      <UiCountdown
        :values="['15','24','37','42']"
        :labels="['Days','Hours','Minutes','Seconds']"
        boxes
      />
    </div>
  </section>
</template>
