<script setup lang="ts">
import { ref } from 'vue'
import UiCalendar from '@/shared/ui/ui-calendar/UiCalendar.vue'

const min_date = '2026-06-01'
const max_date = '2026-06-30'
const interactive_value = ref('2026-06-15')
</script>

<template>
  <div class="p-8 max-w-2xl mx-auto space-y-10">
    <h1 class="text-2xl font-bold">Calendar Component</h1>

    <!-- Basic demos -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Variants</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="form-control">
          <label class="label"><span class="label-text">Default</span></label>
          <UiCalendar model-value="2026-06-15" />
        </div>
        <div class="form-control">
          <label class="label"><span class="label-text">Disabled</span></label>
          <UiCalendar model-value="2026-06-15" disabled />
        </div>
      </div>
    </section>

    <hr class="border-base-300" />

    <!-- Colors showcase -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Colors</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="color in ['neutral','primary','secondary','accent','info','success','warning','error']" :key="color" class="form-control">
          <label class="label"><span class="label-text capitalize">Color: {{ color }}</span></label>
          <UiCalendar model-value="2026-06-15" :color="color" />
        </div>
      </div>
    </section>

    <hr class="border-base-300" />

    <!-- Sizes showcase -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Sizes</h2>
      <div class="flex flex-col gap-4">
        <div class="form-control">
          <label class="label"><span class="label-text">Extra Small</span></label>
          <UiCalendar model-value="2026-06-15" size="xs" />
        </div>
        <div class="form-control">
          <label class="label"><span class="label-text">Small</span></label>
          <UiCalendar model-value="2026-06-15" size="sm" />
        </div>
        <div class="form-control">
          <label class="label"><span class="label-text">Medium (default)</span></label>
          <UiCalendar model-value="2026-06-15" size="md" />
        </div>
        <div class="form-control">
          <label class="label"><span class="label-text">Large</span></label>
          <UiCalendar model-value="2026-06-15" size="lg" />
        </div>
        <div class="form-control">
          <label class="label"><span class="label-text">Extra Large</span></label>
          <UiCalendar model-value="2026-06-15" size="xl" />
        </div>
      </div>
    </section>

    <hr class="border-base-300" />

    <!-- Min / Max range -->
    <section>
      <h2 class="text-xl font-semibold mb-4">With Min / Max range</h2>
      <div class="form-control">
        <label class="label"><span class="label-text">Pick a date (Jun 1–30, 2026)</span></label>
        <UiCalendar model-value="2026-06-15" :min="min_date" :max="max_date" />
      </div>
    </section>

    <hr class="border-base-300" />

    <!-- Interactive example -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Interactive</h2>
      <div class="form-control">
        <label class="label"><span class="label-text">Selected date: {{ interactive_value }}</span></label>
        <UiCalendar v-model="interactive_value" />
      </div>
    </section>
  </div>
</template>
