<script setup lang="ts">
import { watch, toRef } from "vue";
import UiButton from "@/shared/ui/ui-button/UiButton.vue";
import { useTableParams } from "./use-table-params";

interface Props {
	limits: number[];
	label?: string;
	use_params?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	label: "Show:",
	use_params: false,
});

const { set_param, route } = useTableParams(toRef(props, "use_params"));

const current = defineModel<number>("current", { default: 10 });

if (props.use_params) {
	const limit = route.query["limit"];
	if (limit) {
		current.value = Number(limit);
	}
}

watch(
	() => route.query["limit"],
	(limit) => {
		if (props.use_params && limit) {
			current.value = Number(limit);
		}
	},
);

function on_limit_changed(limit: number): void {
	set_param("limit", limit);
	current.value = limit;
}
</script>

<template>
	<div class="flex flex-row gap-2 items-center">
		<span class="text-base-content/70 text-sm">{{ label }}</span>
		<UiButton
			v-for="limit in limits"
			:key="limit"
			:variant="String(current) == String(limit) ? 'primary' : 'ghost'"
			:label="String(limit)"
			size="sm"
			@click="on_limit_changed(limit)"
		/>
	</div>
</template>
