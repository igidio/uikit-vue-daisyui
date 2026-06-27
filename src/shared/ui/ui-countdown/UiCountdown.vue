<script setup lang="ts">
import { type UiCountdownLabelPosition } from './ui-countdown-properties'

interface Props {
  values: string[]
  labels: string[]
  colons?: boolean
  label_position?: UiCountdownLabelPosition
  boxes?: boolean
  digits?: number
}

const props = withDefaults(defineProps<Props>(), {
  colons: false,
  label_position: 'right',
  boxes: false,
  digits: 2,
})

const item_classes: string = (() => {
  if (props.label_position === 'under') {
    return 'flex flex-col items-center'
  }
  return 'flex items-baseline gap-1'
})()
</script>

<template>
  <template v-if="boxes">
    <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div
        v-for="(value, i) in values"
        :key="i"
        class="flex flex-col p-4 bg-neutral rounded-box text-neutral-content"
      >
        <span class="countdown font-mono text-5xl">
          <span :style="{ '--value': value, '--digits': digits }"></span>
        </span>
        <span v-if="labels[i]" class="text-sm">{{ labels[i] }}</span>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="flex gap-1">
      <template v-for="(value, i) in values" :key="i">
        <div :class="item_classes">
          <span class="countdown font-mono text-2xl">
            <span :style="{ '--value': value, '--digits': digits }"></span>
          </span>
          <span v-if="labels[i]" class="text-xs">{{ labels[i] }}</span>
        </div>
        <span v-if="colons && i < values.length - 1" class="text-2xl">:</span>
      </template>
    </div>
  </template>
</template>
