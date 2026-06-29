<script setup lang="ts">
import { watch, toRef } from 'vue'
import UiPagination from "@/shared/ui/ui-pagination/UiPagination.vue";
import { useTableParams } from './use-table-params'

interface Props {
	total_items: number;
	items_per_page?: number;
	max_pages_to_show?: number;
	use_params?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	items_per_page: 10,
	max_pages_to_show: 5,
	use_params: false,
});

const { set_param, route } = useTableParams(toRef(props, 'use_params'))

const current_page = defineModel<number>("current_page", { default: 1 });

if (props.use_params) {
	const page = route.query["page"];
	if (page) {
		current_page.value = Number(page);
	}
}

watch(
	() => route.query["page"],
	(page) => {
		if (props.use_params && page) {
			current_page.value = Number(page);
		}
	},
);

function on_page_changed(page: number): void {
	set_param("page", page > 1 ? page : null);
}
</script>

<template>
	<UiPagination
		:total_items="total_items"
		:items_per_page="items_per_page"
		:max_pages_to_show="max_pages_to_show"
		v-model:page="current_page"
		@update:page="on_page_changed"
	/>
</template>
