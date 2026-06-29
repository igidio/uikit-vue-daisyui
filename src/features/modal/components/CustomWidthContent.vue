<template>
  <div>
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
