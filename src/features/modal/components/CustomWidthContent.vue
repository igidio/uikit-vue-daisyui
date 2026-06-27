<template>
  <div>
    <h3 class="text-lg font-bold">Modal con ancho personalizado</h3>
    <p class="py-4">
      Este modal usa <code>size='xl'</code> que aplica <code>max-w-7xl</code>
      al modal-box. Puedes usar cualquier clase <code>max-w-*</code> de Tailwind
      para personalizar el ancho.
    </p>
    <p class="py-2 text-sm text-base-content/70">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus
      non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
      porttitor quam.
    </p>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn">Cerrar</button>
      </form>
    </div>
  </div>
</template>
