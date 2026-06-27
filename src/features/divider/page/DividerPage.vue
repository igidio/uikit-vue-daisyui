<script setup lang="ts">
import UiDivider from '@/shared/ui/ui-divider/UiDivider.vue'
</script>

<template>
  <section class="space-y-12">
    <!-- Default -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Divider</h2>
      <p class="text-base-content/70 mb-6">
        A simple divider without text separating two content blocks.
      </p>
      <div>
        <div class="bg-base-200 rounded-box p-4">Content section above</div>
        <UiDivider />
        <div class="bg-base-200 rounded-box p-4">Content section below</div>
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- With Text -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Divider with Text</h2>
      <p class="text-base-content/70 mb-6">
        Use the <code>text</code> prop to display a label in the middle.
      </p>
      <div>
        <div class="bg-base-200 rounded-box p-4">Content above</div>
        <UiDivider text="OR" />
        <div class="bg-base-200 rounded-box p-4">Content below</div>
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Colors -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Colors</h2>
      <p class="text-base-content/70 mb-6">Dividers in daisyUI semantic colors.</p>
      <div class="flex flex-col gap-4">
        <div>
          <div class="bg-base-200 rounded-box p-4">Content A</div>
          <UiDivider color="primary" text="Primary" />
          <div class="bg-base-200 rounded-box p-4">Content B</div>
        </div>
        <div>
          <div class="bg-base-200 rounded-box p-4">Content A</div>
          <UiDivider color="secondary" text="Secondary" />
          <div class="bg-base-200 rounded-box p-4">Content B</div>
        </div>
        <div>
          <div class="bg-base-200 rounded-box p-4">Content A</div>
          <UiDivider color="accent" text="Accent" />
          <div class="bg-base-200 rounded-box p-4">Content B</div>
        </div>
        <div>
          <div class="bg-base-200 rounded-box p-4">Content A</div>
          <UiDivider color="info" text="Info" />
          <div class="bg-base-200 rounded-box p-4">Content B</div>
        </div>
        <div>
          <div class="bg-base-200 rounded-box p-4">Content A</div>
          <UiDivider color="success" text="Success" />
          <div class="bg-base-200 rounded-box p-4">Content B</div>
        </div>
        <div>
          <div class="bg-base-200 rounded-box p-4">Content A</div>
          <UiDivider color="warning" text="Warning" />
          <div class="bg-base-200 rounded-box p-4">Content B</div>
        </div>
        <div>
          <div class="bg-base-200 rounded-box p-4">Content A</div>
          <UiDivider color="error" text="Error" />
          <div class="bg-base-200 rounded-box p-4">Content B</div>
        </div>
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Positions -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Positions</h2>
      <p class="text-base-content/70 mb-6">
        The <code>position</code> prop controls where the label appears: <code>start</code>,
        <code>center</code> (default), or <code>end</code>.
      </p>
      <div>
        <div class="bg-base-200 rounded-box p-4">Content above</div>
        <UiDivider text="Start" position="start" />
        <div class="bg-base-200 rounded-box p-4">Content below</div>
      </div>
      <div class="mt-4">
        <div class="bg-base-200 rounded-box p-4">Content above</div>
        <UiDivider text="Center" position="center" />
        <div class="bg-base-200 rounded-box p-4">Content below</div>
      </div>
      <div class="mt-4">
        <div class="bg-base-200 rounded-box p-4">Content above</div>
        <UiDivider text="End" position="end" />
        <div class="bg-base-200 rounded-box p-4">Content below</div>
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Vertical -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Vertical Divider</h2>
      <p class="text-base-content/70 mb-6">
        Vertical divider with or without text.
      </p>
      <div class="flex h-32 gap-4 items-center">
        <span>Left</span>
        <UiDivider orientation="vertical" />
        <span>Right</span>
      </div>
      <div class="flex h-32 gap-4 items-center mt-4">
        <span>Left</span>
        <UiDivider orientation="vertical" text="OR" />
        <span>Right</span>
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Responsive -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Responsive</h2>
      <p class="text-base-content/70 mb-6">
        Use the <code>responsive</code> prop to make the divider horizontal on small screens and
        vertical on larger screens.
      </p>
      <div class="flex flex-col lg:flex-row gap-4 items-center h-auto lg:h-32">
        <span>Left</span>
        <UiDivider orientation="vertical" :responsive="1024" />
        <span>Right</span>
      </div>
    </div>
  </section>
</template>
