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
    on_show: () => console.log('Modal abierto (onShow)'),
    on_hide: () => console.log('Modal cerrado (onHide)'),
    on_toggle: () => console.log('Modal toggleado (onToggle)'),
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
        Modal básico centrado con tamaño sm. Se abre y cierra a través del
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
        El modal tiene cuatro tamaños: <code>sm</code> (max-w-md), <code>md</code> (max-w-lg),
        <code>lg</code> (max-w-4xl) y <code>xl</code> (max-w-7xl).
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
        Con <code>backdrop='dynamic'</code> (default) se puede cerrar el modal haciendo clic fuera
        del contenido.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Abrir con backdrop dinámico"
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
        Con <code>backdrop='static'</code> no se muestra el backdrop para cerrar haciendo clic
        fuera. Solo se puede cerrar con ESC o el botón ✕.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Abrir con backdrop estático"
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
        Con <code>closable=false</code> se impide cerrar el modal con ESC o clic en el backdrop, y
        no se muestra el botón ✕. Usa el botón externo para cerrar.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Abrir modal no closable"
          variant="warning"
          @click="
            modal_service.open_with_content({ component: NotClosableContent, closable: false })
          "
        />
        <UiButton label="Cerrar modal" variant="secondary" @click="modal_service.close()" />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Events -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Eventos</h2>
      <p class="text-base-content/70 mb-6">
        Los callbacks <code>on_show</code>, <code>on_hide</code> y <code>on_toggle</code> permiten
        ejecutar lógica al cambiar la visibilidad del modal. Mira la consola del navegador.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Abrir modal con eventos"
          variant="primary"
          @click="open_with_events()"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- ModalForm con título -->
    <div>
      <h2 class="text-2xl font-bold mb-2">ModalForm con título</h2>
      <p class="text-base-content/70 mb-6">
        Usa <code>modal-form</code> con los inputs <code>title</code> y <code>closable</code>
        (default true). Sin necesidad de proyectar contenido en header/footer.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Abrir con título"
          variant="primary"
          @click="modal_service.open_with_content({ component: FormTitleContent })"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- ModalForm con botones -->
    <div>
      <h2 class="text-2xl font-bold mb-2">ModalForm con botones en footer</h2>
      <p class="text-base-content/70 mb-6">
        Usa <code>modal-form</code> con <code>title</code> + <code>buttons</code>. Cada botón acepta
        todas las props de <code>ui-button</code>.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Abrir con botones"
          variant="primary"
          @click="modal_service.open_with_content({ component: FormButtonsContent })"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- ModalForm con acción asíncrona -->
    <div>
      <h2 class="text-2xl font-bold mb-2">ModalForm con acción asíncrona</h2>
      <p class="text-base-content/70 mb-6">
        Botón con <code>action</code> asíncrona que deshabilita todos los botones mientras la acción
        se ejecuta.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Abrir con acción async"
          variant="primary"
          @click="modal_service.open_with_content({ component: FormAsyncContent })"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- ModalForm scrollable -->
    <div>
      <h2 class="text-2xl font-bold mb-2">ModalForm scrollable</h2>
      <p class="text-base-content/70 mb-6">
        Si el contenido del modal es muy largo, se muestra scroll automáticamente en el área del
        body.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Abrir modal con scroll"
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
        Se puede usar cualquier clase <code>max-w-*</code> para personalizar el ancho. Este usa
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
