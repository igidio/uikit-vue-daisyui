<script setup lang="ts">
import UiAura from '@/shared/ui/ui-aura/UiAura.vue'
</script>

<template>
  <section class="space-y-12">
    <!-- Basic Aura -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Basic Aura</h2>
      <p class="text-base-content/70 mb-6">A basic aura container with default settings.</p>
      <div class="flex flex-wrap items-center gap-8">
        <UiAura>
          <div class="p-8 rounded-box bg-base-100">
            <h3 class="text-xl font-bold">Content Inside Aura</h3>
            <p class="text-sm mt-2">This content is wrapped in an aura effect.</p>
          </div>
        </UiAura>
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Types -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Types</h2>
      <p class="text-base-content/70 mb-6">Different aura types: dual, rainbow, holo, glow, gold, and silver.</p>
      <div class="flex flex-wrap items-center gap-8">
        <div v-for="t in (['dual', 'rainbow', 'holo', 'glow', 'gold', 'silver'] as const)" :key="t" class="flex flex-col items-center gap-2">
          <UiAura :type="t">
            <div class="p-4 rounded-box bg-base-100 w-24 h-24 flex items-center justify-center">
              <span class="font-semibold capitalize">{{ t }}</span>
            </div>
          </UiAura>
        </div>
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Sizes -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Sizes</h2>
      <p class="text-base-content/70 mb-6">Different aura sizes from xs to xl.</p>
      <div class="flex flex-wrap items-end gap-8">
        <div v-for="s in (['xs', 'sm', 'md', 'lg', 'xl'] as const)" :key="s" class="flex flex-col items-center gap-2">
          <UiAura :size="s" type="dual">
            <div class="rounded-box bg-base-100 flex items-center justify-center" :class="s === 'xs' ? 'p-2 w-12 h-12' : s === 'sm' ? 'p-3 w-16 h-16' : s === 'lg' ? 'p-6 w-32 h-32' : s === 'xl' ? 'p-8 w-40 h-40' : 'p-4 w-24 h-24'">
              <span class="font-semibold text-sm">{{ s }}</span>
            </div>
          </UiAura>
        </div>
      </div>
    </div>
  </section>
</template>
