<script setup lang="ts">
import { inject } from 'vue';
import { FIELD_STATE_KEY } from '../ui-field/ui-field-injection';

defineProps<{
	value: any;
}>();

const field_state = inject(FIELD_STATE_KEY, null);
</script>

<template>
	<label class="flex items-center gap-2 cursor-pointer">
		<input type="radio" :value="value" class="radio" />
		<span class="label-text"><slot /></span>
	</label>
</template>
