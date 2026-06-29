<script setup lang="ts">
import { useModal } from '@/shared/stores/modal.store'
import UiButton from '@/shared/ui/ui-button/UiButton.vue'

import DefaultContent from '../components/DefaultContent.vue'
import SizesContent from '../components/SizesContent.vue'
import DynamicBackdropContent from '../components/DynamicBackdropContent.vue'
import StaticBackdropContent from '../components/StaticBackdropContent.vue'
import NotClosableContent from '../components/NotClosableContent.vue'
import EventsContent from '../components/EventsContent.vue'
import CustomWidthContent from '../components/CustomWidthContent.vue'
import FormTitleContent from '../components/FormTitleContent.vue'
import FormButtonsContent from '../components/FormButtonsContent.vue'
import FormAsyncContent from '../components/FormAsyncContent.vue'
import FormScrollableContent from '../components/FormScrollableContent.vue'

const modal_service = useModal()

function open_with_events(): void {
  modal_service.configure({
    on_show: () => console.log('Modal opened (onShow)'),
    on_hide: () => console.log('Modal closed (onHide)'),
    on_toggle: () => console.log('Modal toggled (onToggle)'),
  })
  modal_service.open_with_content({ component: EventsContent })
}
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
          @click="modal_service.open_with_content({ component: DefaultContent })"
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
          @click="modal_service.open_with_content({ component: SizesContent, size: 'sm' })"
        />
        <UiButton
          label="Medium (md)"
          variant="primary"
          @click="modal_service.open_with_content({ component: SizesContent, size: 'md' })"
        />
        <UiButton
          label="Large (lg)"
          variant="primary"
          @click="modal_service.open_with_content({ component: SizesContent, size: 'lg' })"
        />
        <UiButton
          label="Extra Large (xl)"
          variant="primary"
          @click="modal_service.open_with_content({ component: SizesContent, size: 'xl' })"
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
          @click="
            modal_service.open_with_content({
              component: DynamicBackdropContent,
              backdrop: 'dynamic',
            })
          "
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
          @click="
            modal_service.open_with_content({
              component: StaticBackdropContent,
              backdrop: 'static',
            })
          "
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
          @click="
            modal_service.open_with_content({ component: NotClosableContent, closable: false })
          "
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
          @click="modal_service.open_with_content({ component: FormTitleContent })"
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
          @click="modal_service.open_with_content({ component: FormButtonsContent })"
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
          @click="modal_service.open_with_content({ component: FormAsyncContent })"
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
          @click="
            modal_service.open_with_content({ component: FormScrollableContent, size: 'lg' })
          "
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
          @click="modal_service.open_with_content({ component: CustomWidthContent, size: 'xl' })"
        />
      </div>
    </div>
  </section>
</template>
