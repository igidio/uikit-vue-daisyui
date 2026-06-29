<script setup lang="ts">
import { type IconValue } from "@/shared/data/icons";
import UiIcon from "@/shared/ui/ui-icon/UiIcon.vue";
import {
	badge_sizes,
	badge_variants,
	badge_types,
	type UiBadgeSizes,
	type UiBadgeColors,
	type UiBadgeTypes,
} from "./ui-badge-properties";

interface Props {
	size?: UiBadgeSizes;
	variant?: UiBadgeColors;
	type?: UiBadgeTypes | null;
	icon?: IconValue | null;
	label?: string | null;
	on_dismiss?: () => void;
}

const props = withDefaults(defineProps<Props>(), {
	size: "md",
	variant: "primary",
	type: null,
	icon: null,
	label: null,
});

const badge_classes: string = (() => {
	const c: string[] = ["badge"];
	const size_class = badge_sizes[props.size as UiBadgeSizes];
	if (size_class) c.push(size_class);
	c.push(badge_variants[props.variant as UiBadgeColors]);
	if (props.type) {
		c.push(badge_types[props.type as UiBadgeTypes]);
	}
	return c.filter(Boolean).join(" ");
})();
</script>

<template>
	<span :class="badge_classes">
		<slot>
			<div class="flex items-center gap-2">
				<UiIcon v-if="icon" :icon="icon" />
				<span v-if="label">{{ label }}</span>        
				<button
          v-if="on_dismiss"
					type="button"
					class="inline-flex items-center p-0.5 -me-1 -my-1 rounded-full hover:opacity-70 transition-opacity"
          @click="on_dismiss"
          aria-label="Remove"
				>
        <UiIcon icon="close" class="text-xs" />
      </button>
			</div>
		</slot>
	</span>
</template>
