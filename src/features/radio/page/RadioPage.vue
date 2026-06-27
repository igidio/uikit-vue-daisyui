<script setup lang="ts">
import { ref } from 'vue'
import UiRadio from '@/shared/ui/ui-radio/UiRadio.vue'
import UiRadioItem from '@/shared/ui/ui-radio/UiRadioItem.vue'

const radio_value = ref('apple')
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Radio</h2>
      <p class="text-base-content/70 mb-6">A simple radio group.</p>
      <UiRadio v-model="radio_value" name="fruit">
        <UiRadioItem value="apple">Apple</UiRadioItem>
        <UiRadioItem value="banana">Banana</UiRadioItem>
        <UiRadioItem value="orange">Orange</UiRadioItem>
        <UiRadioItem value="mango">Mango</UiRadioItem>
      </UiRadio>
      <p class="mt-4 text-sm">Selected: {{ radio_value }}</p>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Sizes</h2>
      <p class="text-base-content/70 mb-6">Available sizes.</p>
      <div class="flex flex-col gap-4">
        <UiRadio v-for="size in ['xs','sm','md','lg','xl']" :key="size" :size="size" name="size-demo" :model-value="'md'">
          <UiRadioItem value="md">Size: {{ size }}</UiRadioItem>
        </UiRadio>
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Colors</h2>
      <p class="text-base-content/70 mb-6">Radio with different colors.</p>
      <div class="flex flex-col gap-4">
        <UiRadio v-for="color in ['primary','secondary','accent','info','success','warning','error']" :key="color" :color="color" name="color-demo" :model-value="'color'">
          <UiRadioItem value="color">Color: {{ color }}</UiRadioItem>
        </UiRadio>
      </div>
    </div>
  </section>
</template>
