<script setup lang="ts">
import { computed } from 'vue'
import { available_icons, type IconValue } from '@/shared/data/icons'
import { icon_sizes, type UiIconSize } from './ui-icon-properties'

interface Props {
  icon: IconValue
  size?: UiIconSize
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
})

const icon_class = computed(() => available_icons[props.icon])

const size_class = computed(() => icon_sizes[props.size])
</script>

<template>
  <span
    class="flex"
    :class="[icon_class, size_class]"
  ></span>
</template>
