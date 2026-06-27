<script setup lang="ts">
import UiCarousel from '@/shared/ui/ui-carousel/UiCarousel.vue'
import UiCarouselItem from '@/shared/ui/ui-carousel/UiCarouselItem.vue'
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Carousel</h2>
      <p class="text-base-content/70 mb-6">A simple image carousel with snap start.</p>
      <UiCarousel snap="start" class="w-96">
        <UiCarouselItem>
          <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Slide 1" class="w-full rounded-box" />
        </UiCarouselItem>
        <UiCarouselItem>
          <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Slide 2" class="w-full rounded-box" />
        </UiCarouselItem>
        <UiCarouselItem>
          <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Slide 3" class="w-full rounded-box" />
        </UiCarouselItem>
      </UiCarousel>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">With Indicators</h2>
      <p class="text-base-content/70 mb-6">Carousel with indicator buttons.</p>
      <UiCarousel indicator class="w-96">
        <UiCarouselItem>
          <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Slide 1" class="w-full rounded-box" />
        </UiCarouselItem>
        <UiCarouselItem>
          <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Slide 2" class="w-full rounded-box" />
        </UiCarouselItem>
        <UiCarouselItem>
          <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Slide 3" class="w-full rounded-box" />
        </UiCarouselItem>
      </UiCarousel>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">With Prev/Next</h2>
      <p class="text-base-content/70 mb-6">Carousel with previous and next buttons.</p>
      <UiCarousel prevnext class="w-96">
        <UiCarouselItem>
          <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Slide 1" class="w-full rounded-box" />
        </UiCarouselItem>
        <UiCarouselItem>
          <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Slide 2" class="w-full rounded-box" />
        </UiCarouselItem>
        <UiCarouselItem>
          <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Slide 3" class="w-full rounded-box" />
        </UiCarouselItem>
      </UiCarousel>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Snap Center</h2>
      <p class="text-base-content/70 mb-6">Carousel with center snap.</p>
      <UiCarousel snap="center" class="w-96">
        <UiCarouselItem>
          <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Slide 1" class="w-64 rounded-box" />
        </UiCarouselItem>
        <UiCarouselItem>
          <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Slide 2" class="w-64 rounded-box" />
        </UiCarouselItem>
        <UiCarouselItem>
          <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Slide 3" class="w-64 rounded-box" />
        </UiCarouselItem>
      </UiCarousel>
    </div>
  </section>
</template>
