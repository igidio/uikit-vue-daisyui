<script setup lang="ts">
import { inject } from "vue";
import { FIELD_STATE_KEY } from "../ui-field/ui-field-injection";
import type { InputSize, InputType } from "./ui-input-properties";
import { input_sizes, input_color_classes } from "./ui-input-properties";

interface Props {
	placeholder?: string;
	type?: InputType;
	color?: keyof typeof input_color_classes;
	size?: InputSize;
	readonly?: boolean;
	disabled?: boolean;
	id?: string;
}

const props = withDefaults(defineProps<Props>(), {
	placeholder: "",
	type: "text",
	color: undefined,
	size: "md",
	readonly: false,
	disabled: false,
	id: undefined,
});

const model_value = defineModel<string | number>({ default: "" });

const input_classes: string = (() => {
	const c: string[] = ["input", "w-full"];
	if (props.color) {
		c.push(input_color_classes[props.color]);
	}
	c.push(input_sizes[props.size ?? "md"]);
	return c.filter(Boolean).join(" ");
})();

const field_state = inject(FIELD_STATE_KEY, null);
</script>

<template>
	<input
		:id="id || field_state?.id.value"
		:type="type"
		:placeholder="placeholder"
		:readonly="readonly"
		:disabled="disabled"
		:class="input_classes"
		v-model="model_value"
	/>
</template>
