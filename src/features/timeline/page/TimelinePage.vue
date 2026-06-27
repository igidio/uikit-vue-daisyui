<script setup lang="ts">
import UiTimeline from '@/shared/ui/ui-timeline/UiTimeline.vue'
import type { UiTimelineItem } from '@/shared/ui/ui-timeline/ui-timeline-properties'

const timeline_data: UiTimelineItem[] = [
  { text: 'Started', subtitle: '2024', description: 'Project kickoff' },
  { text: 'Design', subtitle: '2025 Q1', description: 'UI/UX design phase' },
  { text: 'Development', subtitle: '2025 Q2', description: 'Core development' },
  { text: 'Launch', subtitle: '2025 Q3', description: 'Public release' },
]

const colorful_data: UiTimelineItem[] = [
  { text: 'Idea', subtitle: 'Step 1', color: 'info', icon: 'stock' },
  { text: 'Prototype', subtitle: 'Step 2', color: 'warning', icon: 'loader' },
  { text: 'Build', subtitle: 'Step 3', color: 'accent', icon: 'edit' },
  { text: 'Ship!', subtitle: 'Step 4', color: 'success', icon: 'success' },
]
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Timeline</h2>
      <p class="text-base-content/70 mb-6">A horizontal timeline with subtitles and descriptions.</p>
      <UiTimeline :data="timeline_data" />
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Vertical Timeline</h2>
      <p class="text-base-content/70 mb-6">A vertical timeline layout.</p>
      <UiTimeline :data="timeline_data" disposition="vertical" />
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">With Icons &amp; Colors</h2>
      <p class="text-base-content/70 mb-6">Timeline with icons and colors.</p>
      <UiTimeline :data="colorful_data" />
    </div>
  </section>
</template>
