<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import {
	navigationOptions,
	type NavigationOption,
} from "@/shared/data/navigation-options";
import Sidebar from "@/shared/components/sidebar/Sidebar.vue";
import UiThemeController from "@/shared/ui/ui-themecontroller/UiThemeController.vue";

const route = useRoute();

const currentOption = computed<NavigationOption | undefined>(() =>
	navigationOptions.find((opt) => "/" + opt.path === route.path),
);
</script>

<template>
	<div class="flex min-h-screen flex-col">
		<header
			class="flex items-center justify-between px-4 py-3 sticky top-0 z-10 left-0 navbar bg-base-300"
		>
			<h1 class="text-xl font-semibold">Ui Kit Vue DaisyUI</h1>
			<UiThemeController type="toggle" />
		</header>

		<div class="flex bg-neutral-primary w-full">
			<Sidebar class="sticky w-32 md:w-48 top-16 h-[calc(100vh-65px)]" />
			<main
				class="p-6 max-w-325 mx-auto h-full w-full gap-4 flex flex-col overflow-x-hidden"
			>
				<RouterView />
			</main>
		</div>
	</div>
</template>
