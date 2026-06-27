<script setup lang="ts">
defineProps<{
  value: any
}>()
</script>

<template>
  <label class="flex items-center gap-2 cursor-pointer">
    <input
      type="radio"
      :value="value"
      class="radio"
    />
    <span class="label-text"><slot /></span>
  </label>
</template>
