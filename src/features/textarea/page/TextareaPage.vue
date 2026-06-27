<script setup lang="ts">
import { ref } from 'vue'
import UiTextarea from '@/shared/ui/ui-textarea/UiTextarea.vue'

const textarea_value = ref('')
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Textarea</h2>
      <p class="text-base-content/70 mb-6">A simple textarea.</p>
      <UiTextarea v-model="textarea_value" placeholder="Type here..." />
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Sizes</h2>
      <p class="text-base-content/70 mb-6">Available sizes.</p>
      <div class="flex flex-col gap-4">
        <UiTextarea v-for="size in ['xs','sm','md','lg','xl']" :key="size" :size="size" :placeholder="`Size: ${size}`" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Colors</h2>
      <p class="text-base-content/70 mb-6">Textarea with different colors.</p>
      <div class="flex flex-col gap-4">
        <UiTextarea v-for="color in ['primary','secondary','accent','info','success','warning','error']" :key="color" :color="color" :placeholder="`Color: ${color}`" />
      </div>
    </div>
  </section>
</template>
