---
name: daisyui-ui-component
description: 'Create a new UI component in src/shared/ui/ and its corresponding feature page in src/features/ from a DaisyUI documentation URL. Use when the user wants to build a new Vue component (button, checkbox, radio, toggle, input, select, card, modal, etc.) based on a DaisyUI reference page.'
argument-hint: 'DaisyUI docs URL + component name'
---

# DaisyUI UI Component Generator (Vue)

Creates a reusable UI component in `src/shared/ui/ui-<name>/` and a feature page in `src/features/<name>/page/` showing all usage variants, following the project's Vue + daisyUI conventions.

## What This Skill Produces

1. A reusable UI component in `src/shared/ui/ui-<name>/`
   - `ui-<name>-properties.ts` — Types, maps, and lookup records for sizes/colors/variants
   - `Ui<Name>.vue` — Main component SFC
   - `Ui<Name>Item.vue` — Subcomponent (only if the component needs `-item` children)
2. A feature page in `src/features/<name>/page/<Name>Page.vue`
3. Route registration in `src/router/index.ts`
4. Navigation entry in `src/shared/data/navigation-options.ts`

---

### Step 1: Gather Requirements

Ask the user, or expect the user to provide:

| What                    | Required       | Notes                                                    |
| ----------------------- | -------------- | -------------------------------------------------------- |
| DaisyUI docs URL        | Yes            | e.g. `https://daisyui.com/components/toggle/`            |
| Component name          | Yes            | lowercase, kebab-case for folder, PascalCase for Vue SFC |
| Inputs list             | Yes            | name, type, default values                               |
| Is it a form component? | Ask if unclear | Determines if it goes into the form page                 |
| Does it need sub-items? | Ask if unclear | Determines if a `-item` subcomponent with `use_slot_children` is needed |

---

### Step 2: Fetch the DaisyUI Documentation

Use `fetch_webpage` to retrieve the DaisyUI docs page. Extract:

- Class names (component, part, style, color, size, modifier, etc.)
- HTML syntax examples
- Usage rules and constraints

---

### Step 3: Read the Reference Files

Read existing similar components in `src/shared/ui/` to follow the same patterns:
- **Simple component**: look at `ui-accordion/` for `defineProps` + `withDefaults`, `defineModel`, and class-building patterns
- **Subcomponent pattern**: `UiAccordion.vue` + `UiAccordionItem.vue` using `use_slot_children` from `@/shared/composables/useSlotChildren`
- **Properties file**: `ui-accordion-properties.ts` for interface and data structure conventions

---

### Step 4: Create the Properties File

Create `src/shared/ui/ui-<name>/ui-<name>-properties.ts`:

- Export interfaces with `Ui<Name>` prefix (e.g. `UiRadioVariants`, `UiRadioColors`)
- Export lookup records/maps for CSS classes (e.g. `radio_sizes`, `radio_colors`)
- Export the main component props interface (e.g. `UiRadioProps`)
- Use `snake_case` for variable names

```ts
// ui-<name>-properties.ts
export interface Ui<Name>Props {
  // props that the parent component will receive
}

export const <name>_sizes: Record<string, string> = {
  xs: '<name>-xs',
  sm: '<name>-sm',
  md: '<name>-md',
  lg: '<name>-lg',
  xl: '<name>-xl',
}

export const <name>_colors: Record<string, string> = {
  primary: '<name>-primary',
  secondary: '<name>-secondary',
  // ...
}
```

---

### Step 5: Create the Vue Component

Create `src/shared/ui/ui-<name>/Ui<Name>.vue` following these conventions:

#### 5a. Script conventions (`<script setup lang="ts">`)

- Use `defineProps` with `withDefaults` for props with default values
- Use `defineModel` for reactive data that should sync with parent (two-way binding)
- Use `snake_case` for variable and function names
- No comments in the `<script>` block
- Prefer non-reactive (`(()=>{...})()`) function over `computed()` for building CSS class strings **when the values don't change dynamically**. Use `computed()` only for classes that depend on reactive state that changes at runtime.

```vue
<script setup lang="ts">
import { type Component } from 'vue'

interface Props {
  size?: string
  color?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'primary',
  disabled: false,
})

const model_value = defineModel<string>({ default: '' })

const classes: string = (() => {
  const c: string[] = ['<name>']
  c.push(`<name>-${props.size}`)
  c.push(`<name>-${props.color}`)
  if (props.disabled) c.push('<name>-disabled')
  return c.join(' ')
})()
</script>
```

#### 5b. Template conventions

- Use the daisyUI HTML syntax from the docs as the base
- Bind classes with `:class`
- Use `<slot>` or `<slot name="...">` for content projection
- For form components, bind `v-model` directly on native input elements

#### 5c. Subcomponent pattern (when `-item` is needed)

When the component needs subcomponents (e.g., accordion items, dropdown items, menu items):

**Parent `Ui<Name>.vue`:**
```vue
<script setup lang="ts">
import { computed, useSlots, type VNode } from 'vue'
import Ui<Name>Item from './Ui<Name>Item.vue'
import { use_slot_children } from '@/shared/composables/useSlotChildren'

interface ExtractedItem {
  value: string
  title: string
  content_fn: (() => VNode[]) | null
}

const slots = useSlots()

const items = computed<ExtractedItem[]>(() =>
  use_slot_children(slots, Ui<Name>Item, (v) => {
    const p = v.props as Record<string, any> | undefined
    const child_slots = (v as any).children
    return {
      value: p?.value ?? '',
      title: p?.title ?? '',
      content_fn: child_slots?.default ?? null,
    }
  }).filter((item) => item.value !== ''),
)
</script>

<template>
  <div v-for="item in items" :key="item.value">
    <div>{{ item.title }}</div>
    <component v-if="item.content_fn" :is="item.content_fn" />
  </div>
</template>
```

**Child `Ui<Name>Item.vue`:**
```vue
<script setup lang="ts">
defineProps<{
  value: string
  title: string
}>()
</script>

<template>
</template>
```

The child has an empty template — content is projected via the default slot and extracted by the parent.

#### 5d. Form components

For form components, use `v-model` directly on the native input element. No special directive or base class is needed:

```vue
<script setup lang="ts">
const model_value = defineModel<string>({ default: '' })
</script>

<template>
  <input
    type="text"
    class="input"
    v-model="model_value"
  />
</template>
```

---

### Step 6: Create the Feature Page

Create `src/features/<name>/page/<Name>Page.vue`:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import Ui<Name> from '@/shared/ui/ui-<name>/Ui<Name>.vue'
// import Ui<Name>Item if subcomponent exists

const <name>_value = ref('default')
</script>

<template>
  <section class="space-y-12">
    <!-- Basic / Default -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Default <Name></h2>
      <p class="text-base-content/70 mb-6">Description of the default variant.</p>
      <Ui<Name> v-model="<name>_value" />
    </div>

    <hr class="border-base-300" />

    <!-- Sizes -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Sizes</h2>
      <p class="text-base-content/70 mb-6">
        Available sizes: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>.
      </p>
      <div class="flex flex-wrap items-end gap-4">
        <Ui<Name> v-for="size in ['xs','sm','md','lg','xl']" :key="size" :size="size" />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Colors / Variants -->
    <!-- Show all applicable variants following daisyUI docs -->
  </section>
</template>
```

Show all variants (sizes, colors, states) as separate demo sections with `<hr class="border-base-300" />` dividers.

---

### Step 7: Register Routes and Navigation

#### `src/router/index.ts`

Add a lazy-loaded child route under `MainLayout`:

```ts
{
  path: '<name>',
  name: '<name>',
  component: () => import('@/features/<name>/page/<Name>Page.vue'),
},
```

#### `src/shared/data/navigation-options.ts`

Add an entry to the `navigationOptions` array:

```ts
{ label: '<Label>', path: '<name>', documentation: 'https://daisyui.com/components/<name>/' },
```

---

### Step 8: Integrate into Form Page (Conditional)

Only if the component is a form control. Add the new component to the existing form page (`src/features/form/page/FormPage.vue` or similar) with usage examples.

---

### Step 9: Verify

Run the dev server or build:

```bash
npm run dev
# or
npm run build
```

Verify:
- No TypeScript errors
- All routes resolve correctly
- DaisyUI classes render correctly in the browser
- `v-model` two-way binding works correctly
- Subcomponent slot extraction works (if applicable)

---

## Vue Project Conventions Summary

| Convention              | Pattern                                          |
| ----------------------- | ------------------------------------------------ |
| File naming             | `snake_case` for files, `PascalCase` for SFCs    |
| Component folder        | `src/shared/ui/ui-<name>/`                       |
| Main component          | `Ui<Name>.vue`                                   |
| Subcomponent            | `Ui<Name>Item.vue`                               |
| Properties file         | `ui-<name>-properties.ts`                        |
| Feature page            | `src/features/<name>/page/<Name>Page.vue`        |
| Props declaration       | `defineProps<T>()` + `withDefaults()`            |
| Two-way reactive data   | `defineModel<T>({ default: ... })`               |
| Slot content extraction | `use_slot_children` composable                   |
| Class strings           | `(() => {...})()` non-reactive, only use `computed()` for dynamic values |
| Variable naming         | `snake_case`                                     |
| Route navigation        | Lazy-loaded via `() => import(...)`              |
| Page section dividers   | `<hr class="border-base-300" />`                 |
