<script setup lang="ts">
import { ref } from 'vue'
import { useModal } from '@/shared/stores/modal.store'
import type { UiModalBackdrop, UiModalSize } from '@/shared/stores/modal.store'
import UiButton from '@/shared/ui/ui-button/UiButton.vue'
import ModalForm from '@/shared/components/modal-form/ModalForm.vue'
import type { ModalFormButton } from '@/shared/components/modal-form/ModalForm.vue'

const modal_service = useModal()
const active_modal = ref<string | null>(null)

const size_map: Record<string, string> = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-4xl',
  xl: 'max-w-7xl',
}

function open_modal(id: string, config?: {
  size?: UiModalSize
  backdrop?: UiModalBackdrop
  closable?: boolean
}) {
  if (config) {
    modal_service.configure(config)
  }
  active_modal.value = id
  modal_service.open()
}

function open_with_events(): void {
  modal_service.configure({
    on_show: () => console.log('Modal opened (onShow)'),
    on_hide: () => console.log('Modal closed (onHide)'),
    on_toggle: () => console.log('Modal toggled (onToggle)'),
  })
  active_modal.value = 'events'
  modal_service.open()
}

const buttons: ModalFormButton[] = [
  {
    label: 'Cancel',
    variant: 'secondary',
    size: 'sm',
    action: () => modal_service.close(),
  },
  {
    label: 'Save',
    variant: 'success',
    size: 'sm',
    icon: 'success',
  },
]

const async_buttons: ModalFormButton[] = [
  {
    label: 'Cancel',
    variant: 'secondary',
    size: 'sm',
    action: () => modal_service.close(),
  },
  {
    label: 'Saving...',
    icon: 'loading',
    variant: 'success',
    size: 'sm',
    spin: true,
    disabled: true,
  },
]
</script>

<template>
  <section class="space-y-12">
    <!-- Default -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Modal</h2>
      <p class="text-base-content/70 mb-6">
        Basic centered modal with sm size. Opens and closes through the
        <code>ModalService</code>.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Abrir modal"
          variant="primary"
          @click="open_modal('default')"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Sizes -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Sizes</h2>
      <p class="text-base-content/70 mb-6">
        The modal has four sizes: <code>sm</code> (max-w-md), <code>md</code> (max-w-lg),
        <code>lg</code> (max-w-4xl) and <code>xl</code> (max-w-7xl).
      </p>
      <div class="flex flex-wrap gap-2">
        <UiButton
          label="Small (sm)"
          variant="primary"
          @click="open_modal('sizes', { size: 'sm' })"
        />
        <UiButton
          label="Medium (md)"
          variant="primary"
          @click="open_modal('sizes', { size: 'md' })"
        />
        <UiButton
          label="Large (lg)"
          variant="primary"
          @click="open_modal('sizes', { size: 'lg' })"
        />
        <UiButton
          label="Extra Large (xl)"
          variant="primary"
          @click="open_modal('sizes', { size: 'xl' })"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Dynamic backdrop -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Dynamic Backdrop</h2>
      <p class="text-base-content/70 mb-6">
        With <code>backdrop='dynamic'</code> (default) the modal can be closed by clicking outside
        the content.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Open with dynamic backdrop"
          variant="primary"
          @click="open_modal('dynamic_backdrop', { backdrop: 'dynamic' })"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Static backdrop -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Static Backdrop</h2>
      <p class="text-base-content/70 mb-6">
        With <code>backdrop='static'</code> the backdrop is not shown for closing by clicking
        outside. It can only be closed with ESC or the ✕ button.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Open with static backdrop"
          variant="primary"
          @click="open_modal('static_backdrop', { backdrop: 'static' })"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- No closable -->
    <div>
      <h2 class="text-2xl font-bold mb-2">No Closable</h2>
      <p class="text-base-content/70 mb-6">
        With <code>closable=false</code> closing the modal with ESC or backdrop click is prevented, and
        the ✕ button is not shown. Use the external button to close.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Open non-closable modal"
          variant="warning"
          @click="open_modal('not_closable', { closable: false })"
        />
        <UiButton label="Close modal" variant="secondary" @click="modal_service.close()" />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Events -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Events</h2>
      <p class="text-base-content/70 mb-6">
        The <code>on_show</code>, <code>on_hide</code>, and <code>on_toggle</code> callbacks allow
        executing logic when the modal visibility changes. Check the browser console.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Open modal with events"
          variant="primary"
          @click="open_with_events()"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- ModalForm with title -->
    <div>
      <h2 class="text-2xl font-bold mb-2">ModalForm with title</h2>
      <p class="text-base-content/70 mb-6">
        Use <code>modal-form</code> with the <code>title</code> and <code>closable</code>
        (default true) inputs. No need to project content in header/footer.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Open with title"
          variant="primary"
          @click="open_modal('form_title')"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- ModalForm con botones -->
    <div>
      <h2 class="text-2xl font-bold mb-2">ModalForm with buttons in footer</h2>
      <p class="text-base-content/70 mb-6">
        Use <code>modal-form</code> with <code>title</code> + <code>buttons</code>. Each button accepts
        all props from <code>ui-button</code>.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Open with buttons"
          variant="primary"
          @click="open_modal('form_buttons')"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- ModalForm with async action -->
    <div>
      <h2 class="text-2xl font-bold mb-2">ModalForm with async action</h2>
      <p class="text-base-content/70 mb-6">
        Button with async <code>action</code> that disables all buttons while the action
        is executing.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Open with async action"
          variant="primary"
          @click="open_modal('form_async')"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- ModalForm scrollable -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Scrollable ModalForm</h2>
      <p class="text-base-content/70 mb-6">
        If the modal content is too long, scroll is automatically shown in the body
        area.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Open modal with scroll"
          variant="primary"
          @click="open_modal('form_scrollable', { size: 'lg' })"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Custom width -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Custom Width</h2>
      <p class="text-base-content/70 mb-6">
        Any <code>max-w-*</code> class can be used to customize the width. This one uses
        <code>size='xl'</code>.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Abrir modal ancho"
          variant="primary"
          @click="open_modal('custom_width', { size: 'xl' })"
        />
      </div>
    </div>
  </section>

  <Teleport to="#ui-modal-panel">
    <template v-if="modal_service.is_open.value">
      <!-- Default -->
      <div v-if="active_modal === 'default'">
        <h3 class="text-lg font-bold">Hello!</h3>
        <p class="py-4">Press ESC or click outside to close.</p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>

      <!-- Sizes -->
      <div v-else-if="active_modal === 'sizes'">
        <h3 class="text-lg font-bold">Sizes</h3>
        <p class="py-4">
          Current size: <code>{{ modal_service.size.value }}</code>
          ({{ size_map[modal_service.size.value] ?? '' }})
        </p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>

      <!-- Dynamic Backdrop -->
      <div v-else-if="active_modal === 'dynamic_backdrop'">
        <h3 class="text-lg font-bold">Dynamic Backdrop</h3>
        <p class="py-4">You can close this modal by clicking outside the content.</p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>

      <!-- Static Backdrop -->
      <div v-else-if="active_modal === 'static_backdrop'">
        <h3 class="text-lg font-bold">Static Backdrop</h3>
        <p class="py-4">
          This modal has no external backdrop. You can only close it with ESC or the ✕ button.
        </p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>

      <!-- Not Closable -->
      <div v-else-if="active_modal === 'not_closable'">
        <h3 class="text-lg font-bold">Non-Closable Modal</h3>
        <p class="py-4">
          This modal cannot be closed with ESC or by clicking outside. Use the «Close modal» button on
          the page.
        </p>
      </div>

      <!-- Events -->
      <div v-else-if="active_modal === 'events'">
        <h3 class="text-lg font-bold">Events</h3>
        <p class="py-4">
          Every time the modal is shown, hidden, or toggled, the registered callbacks are executed.
          Check the browser console (F12) to see the logs.
        </p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>

      <!-- ModalForm with title -->
      <ModalForm
        v-else-if="active_modal === 'form_title'"
        title="Modal with title"
        :closable="true"
      >
        <div class="space-y-3">
          <p class="text-sm text-base-content/70">
            This modal uses <code>modal-form</code> with the <code>title</code> and
            <code>closable</code> inputs. The default interface is rendered.
          </p>
          <p class="text-sm text-base-content/70">
            The close button (X) calls <code>modal_service.close()</code> automatically.
          </p>
        </div>
      </ModalForm>

      <!-- ModalForm with buttons -->
      <ModalForm
        v-else-if="active_modal === 'form_buttons'"
        title="Modal with action buttons"
        :buttons="buttons"
      >
        <div class="space-y-3">
          <p class="text-sm text-base-content/70">
            The footer buttons are defined using the <code>buttons</code> input, which accepts an
            array with the same props as <code>UiButton</code> plus an optional
            <code>action</code> callback.
          </p>
        </div>
      </ModalForm>

      <!-- ModalForm with async action -->
      <ModalForm
        v-else-if="active_modal === 'form_async'"
        title="Save changes"
        :buttons="async_buttons"
      >
        <div class="space-y-3">
          <p class="text-sm text-base-content/70">
            Example with a button showing loading state (<code>spin</code> + <code>disabled</code>).
          </p>
          <p class="text-sm text-base-content/70">
            When an action is async, all footer buttons are automatically disabled
            until the action completes.
          </p>
        </div>
      </ModalForm>

      <!-- ModalForm scrollable -->
      <ModalForm
        v-else-if="active_modal === 'form_scrollable'"
        title="Modal with scroll"
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
      </ModalForm>

      <!-- Custom width -->
      <div v-else-if="active_modal === 'custom_width'">
        <h3 class="text-lg font-bold">Modal with Custom Width</h3>
        <p class="py-4">
          This modal uses <code>size='xl'</code> which applies <code>max-w-7xl</code>
          to the modal-box. You can use any <code>max-w-*</code> Tailwind class
          to customize the width.
        </p>
        <p class="py-2 text-sm text-base-content/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus
          non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
          porttitor quam.
        </p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </template>
  </Teleport>
</template>
