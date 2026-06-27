<script setup lang="ts">
import { useDrawer } from '@/shared/stores/drawer.store'
import UiButton from '@/shared/ui/ui-button/UiButton.vue'

import BasicContent from '../components/BasicContent.vue'
import FormTitleContent from '../components/FormTitleContent.vue'
import FormButtonsContent from '../components/FormButtonsContent.vue'
import FormAsyncContent from '../components/FormAsyncContent.vue'
import FormScrollableContent from '../components/FormScrollableContent.vue'

const drawer_service = useDrawer()
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
