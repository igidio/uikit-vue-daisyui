<script setup lang="ts">
import { hover3dcard_shapes, type UiHover3dcardShapes } from './ui-hover3dcard-properties'

interface Props {
  image_url: string
  alt?: string
  shape?: UiHover3dcardShapes
}

const props = withDefaults(defineProps<Props>(), {
  alt: 'Hover 3D image',
  shape: 'soft',
})

const shape_class: string = (() => {
  return hover3dcard_shapes[props.shape as UiHover3dcardShapes]
})()
</script>

<template>
  <div class="hover-3d">
    <figure :class="shape_class">
      <img :src="image_url" :alt="alt" />
    </figure>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
