<script setup lang="ts">
import { avatar_sizes, avatar_variants, avatar_shapes, type UiAvatarSizes, type UiAvatarVariants, type UiAvatarShapes } from './ui-avatar-properties'

interface Props {
  src?: string | null
  alt?: string
  size?: UiAvatarSizes
  presence?: UiAvatarVariants
  shape?: UiAvatarShapes
  ring?: boolean
  placeholder?: string | null
  href?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  src: null,
  alt: 'avatar',
  size: 'md',
  presence: 'none',
  shape: 'circle',
  ring: false,
  placeholder: null,
  href: null,
})

const is_placeholder: boolean = !props.src && !!props.placeholder

const avatar_classes: string = (() => {
  const c: string[] = ['avatar']
  if (props.presence !== 'none') {
    c.push(avatar_variants[props.presence as UiAvatarVariants])
  }
  if (is_placeholder) {
    c.push('avatar-placeholder')
  }
  return c.join(' ')
})()

const inner_classes: string = (() => {
  const c: string[] = []
  c.push(avatar_sizes[props.size as UiAvatarSizes])
  c.push(avatar_shapes[props.shape as UiAvatarShapes])
  if (is_placeholder) {
    c.push('bg-neutral', 'text-neutral-content')
  } else {
    c.push('bg-base-300')
  }
  if (props.ring) {
    c.push('ring-2', 'ring-primary', 'ring-offset-base-100', 'ring-offset-2')
  }
  return c.join(' ')
})()

const placeholder_size_class: string = (() => {
  switch (props.size) {
    case 'xs': return 'text-xs'
    case 'sm': return 'text-sm'
    case 'md': return 'text-base'
    case 'lg': return 'text-3xl'
    case 'xl': return 'text-4xl'
    default: return 'text-base'
  }
})()
</script>

<template>
  <a v-if="href" :class="avatar_classes" :href="href">
    <div :class="inner_classes">
      <img v-if="src" :src="src" :alt="alt" />
      <span v-else :class="placeholder_size_class">{{ placeholder }}</span>
    </div>
  </a>
  <div v-else :class="avatar_classes">
    <div :class="inner_classes">
      <img v-if="src" :src="src" :alt="alt" />
      <span v-else :class="placeholder_size_class">{{ placeholder }}</span>
    </div>
  </div>
</template>
