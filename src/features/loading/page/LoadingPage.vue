<script setup lang="ts">
import UiLoading from '@/shared/ui/ui-loading/UiLoading.vue'
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Loading</h2>
      <p class="text-base-content/70 mb-6">A simple loading spinner.</p>
      <UiLoading />
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Types</h2>
      <p class="text-base-content/70 mb-6">
        Available types: <code>spinner</code>, <code>dots</code>, <code>ring</code>, <code>ball</code>, <code>bars</code>, <code>infinity</code>.
      </p>
      <div class="flex flex-wrap items-center gap-6">
        <UiLoading v-for="type in ['spinner','dots','ring','ball','bars','infinity']" :key="type" :type="type" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Sizes</h2>
      <p class="text-base-content/70 mb-6">Available sizes.</p>
      <div class="flex flex-wrap items-center gap-6">
        <UiLoading v-for="size in ['xs','sm','md','lg','xl']" :key="size" :size="size" type="spinner" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Colors</h2>
      <p class="text-base-content/70 mb-6">Loading with colors.</p>
      <div class="flex flex-wrap items-center gap-6">
        <UiLoading v-for="color in ['primary','secondary','accent','info','success','warning','error']" :key="color" :color="color" type="spinner" />
      </div>
    </div>
  </section>
</template>
