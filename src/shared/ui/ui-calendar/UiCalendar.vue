<script setup lang="ts">
import { inject } from "vue";
import { FIELD_STATE_KEY } from "../ui-field/ui-field-injection";
import type { UiColors } from "@/shared/ui/ui-types";
import { calendar_sizes, calendar_colors, type CalendarSize } from "./ui-calendar-properties";

interface Props {
	placeholder?: string;
	color?: UiColors;
	size?: CalendarSize;
	min?: string;
	max?: string;
	disabled?: boolean;
	id?: string;
}

const props = withDefaults(defineProps<Props>(), {
	placeholder: "",
	color: undefined,
	size: "md",
	min: "",
	max: "",
	disabled: false,
	id: undefined,
});

const field_state = inject(FIELD_STATE_KEY, null);

const model_value = defineModel<string>({ default: "" });

const input_classes: string = (() => {
	const classes = ['input', 'w-full']
	if (props.color) classes.push(calendar_colors[props.color])
	classes.push(calendar_sizes[props.size as CalendarSize] ?? 'input-md')
	return classes.join(' ')
})()
</script>

<template>
	<input
		:id="id || field_state?.id.value"
		type="date"
		:placeholder="placeholder"
		:min="min"
		:max="max"
		:disabled="disabled"
		:class="input_classes"
		v-model="model_value"
	/>
</template>
