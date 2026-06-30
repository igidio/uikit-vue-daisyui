<script setup lang="ts">
import { ref } from 'vue'
import { useDrawer } from '@/shared/stores/drawer.store'
import type { DrawerSide } from '@/shared/stores/drawer.store'
import UiButton from '@/shared/ui/ui-button/UiButton.vue'
import DrawerForm from '@/shared/components/drawer-form/DrawerForm.vue'
import type { DrawerFormButton } from '@/shared/components/drawer-form/DrawerForm.vue'

const drawer_service = useDrawer()
const active_drawer = ref<string | null>(null)

function open_drawer(id: string, side: DrawerSide = 'start') {
  active_drawer.value = id
  drawer_service.side.value = side
  drawer_service.open()
}

const buttons: DrawerFormButton[] = [
  {
    label: 'Cancel',
    variant: 'secondary',
    size: 'sm',
    action: () => drawer_service.close(),
  },
  {
    label: 'Save',
    variant: 'primary',
    size: 'sm',
    icon: 'success',
  },
]

const async_buttons: DrawerFormButton[] = [
  {
    label: 'Cancel',
    variant: 'secondary',
    size: 'sm',
    action: () => drawer_service.close(),
  },
  {
    label: 'Saving...',
    icon: 'loading',
    variant: 'primary',
    size: 'sm',
    spin: true,
    disabled: true,
  },
]
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Basic Drawer</h2>
      <p class="text-base-content/70 mb-6">
        Side drawer with content loaded from the global
        <code>DrawerService</code>.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Open left drawer"
          variant="primary"
          @click="open_drawer('basic', 'start')"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Drawer from the right (end)</h2>
      <p class="text-base-content/70 mb-6">
        Using <code>side="end"</code> the drawer opens from the right side.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Open right drawer"
          variant="primary"
          @click="open_drawer('basic', 'end')"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">DrawerForm with title</h2>
      <p class="text-base-content/70 mb-6">
        Use <code>drawer-form</code> with the <code>title</code> and <code>closable</code> inputs. The
        close button (X) calls <code>drawer_service.close()</code> automatically.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Open with title"
          variant="primary"
          @click="open_drawer('form_title', 'start')"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">DrawerForm with buttons in footer</h2>
      <p class="text-base-content/70 mb-6">
        Use <code>drawer-form</code> with <code>title</code> + <code>buttons</code>. Each button accepts
        all props from <code>ui-button</code>.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Open with buttons"
          variant="primary"
          @click="open_drawer('form_buttons', 'start')"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">DrawerForm with async action</h2>
      <p class="text-base-content/70 mb-6">
        Button with async <code>action</code>. The buttons are disabled while the action is
        in progress.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Open with async action"
          variant="primary"
          @click="open_drawer('form_async', 'start')"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Scrollable DrawerForm</h2>
      <p class="text-base-content/70 mb-6">
        If the drawer content is too long, scroll is automatically shown in the body
        area.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Open drawer with scroll"
          variant="primary"
          @click="open_drawer('form_scrollable', 'start')"
        />
      </div>
    </div>
  </section>

  <Teleport to="#ui-drawer-panel">
    <template v-if="drawer_service.is_open.value">
      <!-- Basic drawer content -->
      <ul v-if="active_drawer === 'basic'" class="menu">
        <li class="menu-title"><span>Menu</span></li>
        <li>
          <button class="btn btn-ghost justify-start" @click="drawer_service.close()">Home</button>
        </li>
        <li><button class="btn btn-ghost justify-start">Profile</button></li>
        <li><button class="btn btn-ghost justify-start">Settings</button></li>
        <li><button class="btn btn-ghost justify-start">Help</button></li>
      </ul>

      <!-- DrawerForm with title -->
      <DrawerForm
        v-else-if="active_drawer === 'form_title'"
        title="Drawer with title"
        :closable="true"
      >
        <div class="space-y-3 px-4 menu">
          <p class="text-sm text-base-content/70">
            This drawer uses <code>drawer-form</code> with the <code>title</code> and
            <code>closable</code> inputs.
          </p>
          <p class="text-sm text-base-content/70">
            The close button (X) calls <code>drawer_service.close()</code> automatically.
          </p>
        </div>
      </DrawerForm>

      <!-- DrawerForm with buttons -->
      <DrawerForm
        v-else-if="active_drawer === 'form_buttons'"
        title="Drawer with action buttons"
        :buttons="buttons"
      >
        <div class="space-y-3 px-4">
          <p class="text-sm text-base-content/70">
            Footer buttons are defined through the <code>buttons</code> input, which accepts an array
            with the same props as <code>UiButton</code> plus an optional <code>action</code> callback.
          </p>
        </div>
      </DrawerForm>

      <!-- DrawerForm with async action -->
      <DrawerForm
        v-else-if="active_drawer === 'form_async'"
        title="Save changes"
        :buttons="async_buttons"
      >
        <div class="space-y-3 px-4">
          <p class="text-sm text-base-content/70">
            Example with a button showing loading state (<code>spin</code> + <code>disabled</code>).
          </p>
        </div>
      </DrawerForm>

      <!-- Scrollable DrawerForm -->
      <DrawerForm
        v-else-if="active_drawer === 'form_scrollable'"
        title="Scrollable drawer"
        :closable="true"
        :show_footer="false"
      >
        <div class="space-y-3 pb-4">
          <div
            v-for="i in 5"
            :key="i"
            class="h-[40vh] bg-base-200 rounded-box flex items-center justify-center"
          >
            <p class="text-sm text-base-content/70">
              Section {{ i }} — very long content for scrolling
            </p>
          </div>
        </div>
      </DrawerForm>
    </template>
  </Teleport>
</template>
