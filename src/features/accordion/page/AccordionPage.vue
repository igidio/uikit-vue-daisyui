<script setup lang="ts">
import { ref } from 'vue'
import UiAccordion from '@/shared/ui/ui-accordion/UiAccordion.vue'
import UiAccordionItem from '@/shared/ui/ui-accordion/UiAccordionItem.vue'

const selected_value = ref('item-1')
const selected_with_arrow = ref('item-a')
const selected_joined = ref('item-x')
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Basic Accordion</h2>
      <p class="text-base-content/70 mb-6">
        Default accordion using radio inputs. Only one item stays open at a time.
      </p>
      <UiAccordion v-model="selected_value" name="accordion-basic">
        <UiAccordionItem value="item-1" title="How do I create an account?">
          Click the "Sign Up" button in the top right corner and follow the registration process.
        </UiAccordionItem>
        <UiAccordionItem value="item-2" title="I forgot my password. What should I do?">
          Click on "Forgot Password" on the login page and follow the instructions sent to your email.
        </UiAccordionItem>
        <UiAccordionItem value="item-3" title="How do I update my profile information?">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </UiAccordionItem>
      </UiAccordion>
      <p class="mt-2 text-sm text-base-content/60">Selected: {{ selected_value }}</p>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Accordion with Arrow Icon</h2>
      <p class="text-base-content/70 mb-6">
        Each item shows an arrow icon indicating it can be expanded.
      </p>
      <UiAccordion v-model="selected_with_arrow" :arrow_icon="true" name="accordion-arrow">
        <UiAccordionItem value="item-a" title="How do I create an account?">
          Click the "Sign Up" button in the top right corner and follow the registration process.
        </UiAccordionItem>
        <UiAccordionItem value="item-b" title="I forgot my password. What should I do?">
          Click on "Forgot Password" on the login page and follow the instructions sent to your email.
        </UiAccordionItem>
        <UiAccordionItem value="item-c" title="How do I update my profile information?">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </UiAccordionItem>
      </UiAccordion>
      <p class="mt-2 text-sm text-base-content/60">Selected: {{ selected_with_arrow }}</p>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Accordion with Join</h2>
      <p class="text-base-content/70 mb-6">
        Items joined together with automatic border radius handling.
      </p>
      <UiAccordion
        v-model="selected_joined"
        :arrow_icon="true"
        :join="true"
        name="accordion-join"
      >
        <UiAccordionItem value="item-x" title="How do I create an account?">
          Click the "Sign Up" button in the top right corner and follow the registration process.
        </UiAccordionItem>
        <UiAccordionItem value="item-y" title="I forgot my password. What should I do?">
          Click on "Forgot Password" on the login page and follow the instructions sent to your email.
        </UiAccordionItem>
        <UiAccordionItem value="item-z" title="How do I update my profile information?">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </UiAccordionItem>
      </UiAccordion>
      <p class="mt-2 text-sm text-base-content/60">Selected: {{ selected_joined }}</p>
    </div>
  </section>
</template>
