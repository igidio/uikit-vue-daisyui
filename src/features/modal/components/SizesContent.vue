<script setup lang="ts">
import { useModal } from '@/shared/stores/modal.store'

const modal_service = useModal()

const size_map: Record<string, string> = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-4xl',
  xl: 'max-w-7xl',
}
</script>

<template>
  <div>
    <h3 class="text-lg font-bold">Sizes</h3>
    <p class="py-4">
      Current size: <code>{{ modal_service.size.value }}</code>
      ({{ size_map[modal_service.size.value] ?? '' }})
    </p>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</template>
