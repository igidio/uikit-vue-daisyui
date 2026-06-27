<script setup lang="ts">
import UiDrawer from "@/shared/ui/ui-drawer/UiDrawer.vue";
import UiModal from "@/shared/ui/ui-modal/UiModal.vue";
import UiToast from "@/shared/ui/ui-toast/UiToast.vue";
</script>

<template>
	<UiDrawer>
		<RouterView />
	</UiDrawer>
	<UiModal />
	<UiToast />
</template>
