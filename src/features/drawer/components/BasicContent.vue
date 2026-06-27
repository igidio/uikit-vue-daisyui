<script setup lang="ts">
import { useDrawer } from '@/shared/stores/drawer.store'

const drawer_service = useDrawer()
</script>

<template>
  <ul class="menu">
    <li class="menu-title"><span>Menú</span></li>
    <li>
      <button class="btn btn-ghost justify-start" @click="drawer_service.close()">Inicio</button>
    </li>
    <li><button class="btn btn-ghost justify-start">Perfil</button></li>
    <li><button class="btn btn-ghost justify-start">Ajustes</button></li>
    <li><button class="btn btn-ghost justify-start">Ayuda</button></li>
  </ul>
</template>
