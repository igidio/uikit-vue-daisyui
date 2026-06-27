<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { useModal, ui_modal_sizes } from '@/shared/stores/modal.store'
import UiButton from '@/shared/ui/ui-button/UiButton.vue'
import ModalForm, { type ModalFormButton } from '@/shared/components/modal-form/ModalForm.vue'

const modal_service = useModal()

// ── Template components ──────────────────────────────────────────────

const DefaultContent = defineComponent({
  setup() {
    return () =>
      h('div', [
        h('h3', { class: 'text-lg font-bold' }, '¡Hola!'),
        h('p', { class: 'py-4' }, 'Presiona ESC o haz clic fuera para cerrar.'),
        h('div', { class: 'modal-action' }, [
          h('form', { method: 'dialog' }, [
            h('button', { class: 'btn' }, 'Cerrar'),
          ]),
        ]),
      ])
  },
})

const SizesContent = defineComponent({
  setup() {
    const size_map: Record<string, string> = {
      sm: 'max-w-md',
      md: 'max-w-lg',
      lg: 'max-w-4xl',
      xl: 'max-w-7xl',
    }
    return () =>
      h('div', [
        h('h3', { class: 'text-lg font-bold' }, 'Tamaños'),
        h('p', { class: 'py-4' }, [
          'Tamaño actual: ',
          h('code', modal_service.size.value),
          ' (',
          size_map[modal_service.size.value] ?? '',
          ')',
        ]),
        h('div', { class: 'modal-action' }, [
          h('form', { method: 'dialog' }, [
            h('button', { class: 'btn' }, 'Cerrar'),
          ]),
        ]),
      ])
  },
})

const DynamicBackdropContent = defineComponent({
  setup() {
    return () =>
      h('div', [
        h('h3', { class: 'text-lg font-bold' }, 'Backdrop dinámico'),
        h('p', { class: 'py-4' }, 'Puedes cerrar este modal haciendo clic fuera del contenido.'),
        h('div', { class: 'modal-action' }, [
          h('form', { method: 'dialog' }, [
            h('button', { class: 'btn' }, 'Cerrar'),
          ]),
        ]),
      ])
  },
})

const StaticBackdropContent = defineComponent({
  setup() {
    return () =>
      h('div', [
        h('h3', { class: 'text-lg font-bold' }, 'Backdrop estático'),
        h('p', { class: 'py-4' }, [
          'Este modal no tiene backdrop externo. Solo puedes cerrarlo con ESC o el botón ✕ de la esquina.',
        ]),
        h('div', { class: 'modal-action' }, [
          h('form', { method: 'dialog' }, [
            h('button', { class: 'btn' }, 'Cerrar'),
          ]),
        ]),
      ])
  },
})

const NotClosableContent = defineComponent({
  setup() {
    return () =>
      h('div', [
        h('h3', { class: 'text-lg font-bold' }, 'Modal no cerrable'),
        h('p', { class: 'py-4' }, [
          'Este modal no se puede cerrar con ESC ni con clic fuera. Usa el botón «Cerrar modal» de la página.',
        ]),
      ])
  },
})

const EventsContent = defineComponent({
  setup() {
    return () =>
      h('div', [
        h('h3', { class: 'text-lg font-bold' }, 'Eventos'),
        h('p', { class: 'py-4' }, [
          'Cada vez que se muestra, oculta o togglea el modal se ejecutan los callbacks registrados. Revisa la consola del navegador (F12) para ver los logs.',
        ]),
        h('div', { class: 'modal-action' }, [
          h('form', { method: 'dialog' }, [
            h('button', { class: 'btn' }, 'Cerrar'),
          ]),
        ]),
      ])
  },
})

const CustomWidthContent = defineComponent({
  setup() {
    return () =>
      h('div', [
        h('h3', { class: 'text-lg font-bold' }, 'Modal con ancho personalizado'),
        h('p', { class: 'py-4' }, [
          'Este modal usa ',
          h('code', "size='xl'"),
          ' que aplica ',
          h('code', 'max-w-7xl'),
          ' al modal-box. Puedes usar cualquier clase ',
          h('code', 'max-w-*'),
          ' de Tailwind para personalizar el ancho.',
        ]),
        h('p', { class: 'py-2 text-sm text-base-content/70' },
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
        ),
        h('div', { class: 'modal-action' }, [
          h('form', { method: 'dialog' }, [
            h('button', { class: 'btn' }, 'Cerrar'),
          ]),
        ]),
      ])
  },
})

const FormTitleContent = defineComponent({
  setup() {
    return () =>
      h(
        ModalForm,
        { title: 'Modal con título', closable: true },
        {
          default: () =>
            h('div', { class: 'space-y-3' }, [
              h('p', { class: 'text-sm text-base-content/70' }, [
                'Este modal usa ',
                h('code', 'modal-form'),
                ' con los inputs ',
                h('code', 'title'),
                ' y ',
                h('code', 'closable'),
                '. Se renderiza la interfaz por defecto.',
              ]),
              h('p', { class: 'text-sm text-base-content/70' }, [
                'El botón de cerrar (X) invoca a ',
                h('code', 'modal_service.close()'),
                ' automáticamente.',
              ]),
            ]),
        },
      )
  },
})

const FormButtonsContent = defineComponent({
  setup() {
    return () =>
      h(
        ModalForm,
        {
          title: 'Modal con botones de acción',
          buttons: [
            {
              label: 'Cancelar',
              variant: 'secondary' as const,
              size: 'sm' as const,
              action: () => modal_service.close(),
            } satisfies ModalFormButton,
            {
              label: 'Guardar',
              variant: 'success' as const,
              size: 'sm' as const,
              icon: 'success' as const,
            } satisfies ModalFormButton,
          ],
        },
        {
          default: () =>
            h('div', { class: 'space-y-3' }, [
              h('p', { class: 'text-sm text-base-content/70' }, [
                'Los botones del footer se definen mediante el input ',
                h('code', 'buttons'),
                ', que acepta un arreglo con las mismas propiedades de ',
                h('code', 'UiButton'),
                ' más un callback ',
                h('code', 'action'),
                ' opcional.',
              ]),
              h('p', { class: 'text-sm text-base-content/70' }, [
                'TypeScript valida autocompletado gracias al helper ',
                h('code', 'ComponentInputs<UiButton>'),
                '.',
              ]),
            ]),
        },
      )
  },
})

const FormAsyncContent = defineComponent({
  setup() {
    return () =>
      h(
        ModalForm,
        {
          title: 'Guardar cambios',
          buttons: [
            {
              label: 'Cancelar',
              variant: 'secondary' as const,
              size: 'sm' as const,
              action: () => modal_service.close(),
            } satisfies ModalFormButton,
            {
              label: 'Guardando...',
              icon: 'loader' as const,
              variant: 'success' as const,
              size: 'sm' as const,
              spin: true,
              disabled: true,
            } satisfies ModalFormButton,
          ],
        },
        {
          default: () =>
            h('div', { class: 'space-y-3' }, [
              h('p', { class: 'text-sm text-base-content/70' },
                'Ejemplo con botón que muestra estado de carga (spin + disabled).',
              ),
              h('p', { class: 'text-sm text-base-content/70' }, [
                'Cuando una acción es asíncrona, todos los botones del footer se deshabilitan automáticamente hasta que la acción finalice.',
              ]),
            ]),
        },
      )
  },
})

const FormScrollableContent = defineComponent({
  setup() {
    return () =>
      h(
        ModalForm,
        { title: 'Modal con scroll', closable: true, show_footer: false },
        {
          default: () =>
            h(
              'div',
              { class: 'space-y-3 pb-4' },
              Array.from({ length: 5 }, (_, i) =>
                h(
                  'div',
                  {
                    class: 'h-[40vh] bg-base-200 rounded-box flex items-center justify-center',
                  },
                  [
                    h(
                      'p',
                      { class: 'text-sm text-base-content/70' },
                      `Sección ${i + 1} — contenido muy largo para scroll`,
                    ),
                  ],
                ),
              ),
            ),
        },
      )
  },
})

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
        Con <code>backdrop='dynamic'</code> (default) se puede cerrar el modal haciendo clic fuera del
        contenido.
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
        Con <code>backdrop='static'</code> no se muestra el backdrop para cerrar haciendo clic fuera.
        Solo se puede cerrar con ESC o el botón ✕.
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
        Con <code>closable=false</code> se impide cerrar el modal con ESC o clic en el backdrop, y no
        se muestra el botón ✕. Usa el botón externo para cerrar.
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
        <UiButton label="Abrir modal con eventos" variant="primary" @click="open_with_events()" />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- ModalForm con título -->
    <div>
      <h2 class="text-2xl font-bold mb-2">ModalForm con título</h2>
      <p class="text-base-content/70 mb-6">
        Usa <code>modal-form</code> con los inputs <code>title</code> y <code>closable</code> (default
        true). Sin necesidad de proyectar contenido en header/footer.
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
        Si el contenido del modal es muy largo, se muestra scroll automáticamente en el área del body.
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
