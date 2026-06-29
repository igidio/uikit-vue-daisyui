<script setup lang="ts">
import { provide, toRef } from 'vue'
import { FIELD_STATE_KEY } from './ui-field-injection'

interface Props {
  label: string
  id?: string
  error?: string | null
  touched?: boolean
  required?: boolean
  isErrorFixed?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  id: 'field',
  error: null,
  touched: false,
  required: false,
  isErrorFixed: false,
})

provide(FIELD_STATE_KEY, {
  id: toRef(props, 'id'),
})
</script>

<template>
  <fieldset class="fieldset">
    <div class="flex items-center justify-between">
      <label class="label font-semibold" :for="id">
        {{ label }}
        <span v-if="required" class="text-error font-bold">*</span>
      </label>
      <slot name="right" />
    </div>
    <slot />

    {{  touched }}

    <div :class="isErrorFixed ? 'min-h-5' : ''">
      <p v-if="touched && error" class="text-error text-xs">
        {{ error }}
      </p>
    </div>
  </fieldset>
</template>
