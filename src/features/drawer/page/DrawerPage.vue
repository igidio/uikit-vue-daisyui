<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { useDrawer } from '@/shared/stores/drawer.store'
import UiButton from '@/shared/ui/ui-button/UiButton.vue'
import DrawerForm, { type DrawerFormButton } from '@/shared/components/drawer-form/DrawerForm.vue'

const drawer_service = useDrawer()

// ── Template components ──────────────────────────────────────────────

const BasicContent = defineComponent({
  setup() {
    const local_drawer = useDrawer()
    return () =>
      h('ul', { class: 'menu' }, [
        h('li', { class: 'menu-title' }, h('span', 'Menú')),
        h(
          'li',
          h(
            'button',
            { class: 'btn btn-ghost justify-start', onClick: () => local_drawer.close() },
            'Inicio',
          ),
        ),
        h('li', h('button', { class: 'btn btn-ghost justify-start' }, 'Perfil')),
        h('li', h('button', { class: 'btn btn-ghost justify-start' }, 'Ajustes')),
        h('li', h('button', { class: 'btn btn-ghost justify-start' }, 'Ayuda')),
      ])
  },
})

const FormTitleContent = defineComponent({
  setup() {
    return () =>
      h(
        DrawerForm,
        { title: 'Drawer con título', closable: true },
        {
          default: () =>
            h('div', { class: 'space-y-3 px-4 menu' }, [
              h('p', { class: 'text-sm text-base-content/70' }, [
                'Este drawer usa ',
                h('code', 'drawer-form'),
                ' con los inputs ',
                h('code', 'title'),
                ' y ',
                h('code', 'closable'),
                '.',
              ]),
              h('p', { class: 'text-sm text-base-content/70' }, [
                'El botón de cerrar (X) invoca a ',
                h('code', 'drawer_service.close()'),
                ' automáticamente.',
              ]),
            ]),
        },
      )
  },
})

const FormButtonsContent = defineComponent({
  setup() {
    const local_drawer = useDrawer()
    return () =>
      h(
        DrawerForm,
        {
          title: 'Drawer con botones de acción',
          buttons: [
            {
              label: 'Cancelar',
              variant: 'secondary' as const,
              size: 'sm' as const,
              action: () => local_drawer.close(),
            } satisfies DrawerFormButton,
            {
              label: 'Guardar',
              variant: 'primary' as const,
              size: 'sm' as const,
              icon: 'success' as const,
            } satisfies DrawerFormButton,
          ],
        },
        {
          default: () =>
            h('div', { class: 'space-y-3 px-4' }, [
              h('p', { class: 'text-sm text-base-content/70' }, [
                'Los botones del footer se definen mediante el input ',
                h('code', 'buttons'),
                ', que acepta un arreglo con las mismas propiedades de ',
                h('code', 'UiButton'),
                ' más un callback ',
                h('code', 'action'),
                ' opcional.',
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
        DrawerForm,
        {
          title: 'Guardar cambios',
          buttons: [
            {
              label: 'Cancelar',
              variant: 'secondary' as const,
              size: 'sm' as const,
              action: () => drawer_service.close(),
            } satisfies DrawerFormButton,
            {
              label: 'Guardando...',
              icon: 'loading' as const,
              variant: 'primary' as const,
              size: 'sm' as const,
              spin: true,
              disabled: true,
            } satisfies DrawerFormButton,
          ],
        },
        {
          default: () =>
            h('div', { class: 'space-y-3 px-4' }, [
              h('p', { class: 'text-sm text-base-content/70' },
                'Ejemplo con botón que muestra estado de carga (spin + disabled).',
              ),
            ]),
        },
      )
  },
})

const FormScrollableContent = defineComponent({
  setup() {
    return () =>
      h(
        DrawerForm,
        { title: 'Drawer con scroll', closable: true, show_footer: false },
        {
          default: () =>
            h(
              'div',
              { class: 'space-y-3 pb-4' },
              Array.from({ length: 5 }, (_, i) =>
                h(
                  'div',
                  {
                    class:
                      'h-[40vh] bg-base-200 rounded-box flex items-center justify-center',
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
</script>

<template>
  <section class="space-y-12">
    <!-- Drawer básico (start) -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Drawer básico</h2>
      <p class="text-base-content/70 mb-6">
        Drawer lateral con contenido cargado desde el servicio global
        <code>DrawerService</code>.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Abrir drawer izquierdo"
          variant="primary"
          @click="drawer_service.open_with_content({ component: BasicContent, side: 'start' })"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Drawer desde la derecha (end) -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Drawer desde la derecha (end)</h2>
      <p class="text-base-content/70 mb-6">
        Usando <code>side="end"</code> el drawer se abre desde el lado derecho.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Abrir drawer derecho"
          variant="primary"
          @click="drawer_service.open_with_content({ component: BasicContent, side: 'end' })"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- DrawerForm con título -->
    <div>
      <h2 class="text-2xl font-bold mb-2">DrawerForm con título</h2>
      <p class="text-base-content/70 mb-6">
        Usa <code>drawer-form</code> con los inputs <code>title</code> y <code>closable</code>. El
        botón de cerrar (X) invoca a <code>drawer_service.close()</code> automáticamente.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Abrir con título"
          variant="primary"
          @click="drawer_service.open_with_content({ component: FormTitleContent, side: 'start' })"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- DrawerForm con botones -->
    <div>
      <h2 class="text-2xl font-bold mb-2">DrawerForm con botones en footer</h2>
      <p class="text-base-content/70 mb-6">
        Usa <code>drawer-form</code> con <code>title</code> + <code>buttons</code>. Cada botón acepta
        todas las props de <code>ui-button</code>.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Abrir con botones"
          variant="primary"
          @click="drawer_service.open_with_content({ component: FormButtonsContent, side: 'start' })"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- DrawerForm con acción asíncrona -->
    <div>
      <h2 class="text-2xl font-bold mb-2">DrawerForm con acción asíncrona</h2>
      <p class="text-base-content/70 mb-6">
        Botón con <code>action</code> asíncrona. Los botones se deshabilitan mientras la acción está
        en curso.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Abrir con acción async"
          variant="primary"
          @click="drawer_service.open_with_content({ component: FormAsyncContent, side: 'start' })"
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- DrawerForm scrollable -->
    <div>
      <h2 class="text-2xl font-bold mb-2">DrawerForm scrollable</h2>
      <p class="text-base-content/70 mb-6">
        Si el contenido del drawer es muy largo, se muestra scroll automáticamente en el área del
        body.
      </p>
      <div class="flex gap-2">
        <UiButton
          label="Abrir drawer con scroll"
          variant="primary"
          @click="drawer_service.open_with_content({ component: FormScrollableContent, side: 'start' })"
        />
      </div>
    </div>
  </section>
</template>
