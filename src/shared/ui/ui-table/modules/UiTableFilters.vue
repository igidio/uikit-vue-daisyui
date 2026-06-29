<script setup lang="ts">
import { toRef } from "vue";
import UiBadge from "@/shared/ui/ui-badge/UiBadge.vue";
import UiIcon from "@/shared/ui/ui-icon/UiIcon.vue";
import { useTableParams } from "./use-table-params";

export interface FilterBy {
	name: string;
	label: string;
	options: { label: string; value: unknown }[];
	only_cancellable?: boolean;
	show_value_on_badge?: boolean;
}

interface Props {
	filters: FilterBy[];
	label?: string;
	use_params?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	label: "Filtrar por:",
	use_params: false,
});

const { set_param, remove_param, reset_page, route } = useTableParams(
	toRef(props, "use_params"),
);

const active = defineModel<Record<string, unknown>>("active", {
	default: () => ({}),
});

if (props.use_params) {
	const active_filters: Record<string, unknown> = {};
	for (const filter of props.filters) {
		if (route.query[filter.name] !== undefined) {
			active_filters[filter.name] = route.query[filter.name];
		}
	}
	if (Object.keys(active_filters).length > 0) {
		active.value = active_filters;
	}
}

function is_active(filter_name: string): boolean {
	return filter_name in active.value;
}

function get_badge_label(filter: FilterBy): string {
	const val = active.value[filter.name];
	if (filter.show_value_on_badge && val !== undefined) {
		const option = filter.options.find((o) => o.value === val);
		return `${filter.label}: ${option?.label ?? val}`;
	}
	return filter.label;
}

function select_filter(filter_name: string, value: unknown): void {
	set_param(filter_name, value);
	active.value = { ...active.value, [filter_name]: value };
}

function clear_filter(filter_name: string): void {
	reset_page();
	remove_param(filter_name);
	const next = { ...active.value };
	delete next[filter_name];
	active.value = next;
}
</script>

<template>
	<div class="flex flex-wrap gap-2 items-center w-full">
		<span class="text-base-content/70 text-sm">{{ label }}</span>
		<template v-for="filter in filters" :key="filter.name">
			<div v-if="is_active(filter.name)" class="flex items-center gap-0">
				<UiBadge
					:label="get_badge_label(filter)"
					variant="primary"
					size="sm"
					:on_dismiss="() => clear_filter(filter.name)"
				/>
			</div>
			<details v-else class="dropdown">
				<summary class="btn btn-ghost btn-sm">
					{{ filter.label }}
					<UiIcon icon="chevron_down" class="h-4 w-4 ml-1" />
				</summary>
				<ul
					class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
				>
					<li v-for="option in filter.options" :key="option.label">
						<a @click="select_filter(filter.name, option.value)">
							{{ option.label }}
						</a>
					</li>
				</ul>
			</details>
		</template>
	</div>
</template>
