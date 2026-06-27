<script setup lang="ts">
import { ref } from 'vue'
import UiInput from '@/shared/ui/ui-input/UiInput.vue'

const input_value = ref('')
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Input</h2>
      <p class="text-base-content/70 mb-6">A simple text input.</p>
      <div class="max-w-sm">
        <UiInput v-model="input_value" placeholder="Type here..." />
      </div>
      <p class="mt-2 text-sm">Value: {{ input_value || 'empty' }}</p>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Sizes</h2>
      <p class="text-base-content/70 mb-6">Available sizes.</p>
      <div class="flex flex-col gap-4 max-w-sm">
        <UiInput v-for="size in ['xs','sm','md','lg','xl']" :key="size" :size="size" :placeholder="`Size: ${size}`" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Colors</h2>
      <p class="text-base-content/70 mb-6">Input with different colors.</p>
      <div class="flex flex-col gap-4 max-w-sm">
        <UiInput v-for="color in ['primary','secondary','accent','info','success','warning','error']" :key="color" :color="color" :placeholder="`Color: ${color}`" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Types</h2>
      <p class="text-base-content/70 mb-6">Different input types.</p>
      <div class="flex flex-col gap-4 max-w-sm">
        <UiInput type="text" placeholder="Text" />
        <UiInput type="password" placeholder="Password" />
        <UiInput type="email" placeholder="Email" />
        <UiInput type="number" placeholder="Number" />
        <UiInput type="search" placeholder="Search" />
      </div>
    </div>
  </section>
</template>
