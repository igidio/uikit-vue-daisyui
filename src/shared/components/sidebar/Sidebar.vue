<script setup lang="ts">
import { navigationOptions } from "@/shared/data/navigation-options";
</script>

<template>
	<aside
		class="bg-base-200 max-h-full w-full overflow-y-auto border-r border-base-300"
	>
		<ul class="menu menu-sm p-4 w-full">
			<li v-for="option in navigationOptions" :key="option.path">
				<RouterLink 
          :to="'/' + option.path" 
          :exact="option.path === ''"
        >
					{{ option.label }}
				</RouterLink>
			</li>
		</ul>
	</aside>
</template>

