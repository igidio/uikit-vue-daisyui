<script setup lang="ts">
import { use_theme_store } from '@/shared/stores/theme.store'
import UiDrawer from "@/shared/ui/ui-drawer/UiDrawer.vue";
import UiModal from "@/shared/ui/ui-modal/UiModal.vue";
import UiToast from "@/shared/ui/ui-toast/UiToast.vue";

const theme_store = use_theme_store()
theme_store.initialize()
</script>

<template>
	<UiDrawer>
		<RouterView />
	</UiDrawer>
	<UiModal />
	<UiToast />
</template>
