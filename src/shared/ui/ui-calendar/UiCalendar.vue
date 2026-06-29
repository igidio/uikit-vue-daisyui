<script setup lang="ts">
import { inject } from "vue";
import { FIELD_STATE_KEY } from "../ui-field/ui-field-injection";
import type { UiColors } from "@/shared/ui/ui-types";
import { calendar_sizes, type CalendarSize } from "./ui-calendar-properties";

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

const color_class: string = (() => {
	switch (props.color) {
		case "primary":
			return "input-primary";
		case "secondary":
			return "input-secondary";
		case "accent":
			return "input-accent";
		case "neutral":
			return "input-neutral";
		case "info":
			return "input-info";
		case "success":
			return "input-success";
		case "warning":
			return "input-warning";
		case "error":
			return "input-error";
		case "ghost":
			return "input-ghost";
		default:
			return "";
	}
})();

const size_class: string =
	calendar_sizes[props.size as CalendarSize] ?? "input-md";

const input_classes: string = `input w-full ${color_class} ${size_class}`
	.trim()
	.replace(/\s+/g, " ");
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
