<script setup lang="ts">
import { ref } from 'vue'
import UiInput from '@/shared/ui/ui-input/UiInput.vue'
import UiSelect from '@/shared/ui/ui-select/UiSelect.vue'
import UiRadio from '@/shared/ui/ui-radio/UiRadio.vue'
import UiToggle from '@/shared/ui/ui-toggle/UiToggle.vue'
import UiTextarea from '@/shared/ui/ui-textarea/UiTextarea.vue'
import UiRange from '@/shared/ui/ui-range/UiRange.vue'
import UiInputfile from '@/shared/ui/ui-inputfile/UiInputfile.vue'
import UiButton from '@/shared/ui/ui-button/UiButton.vue'

const name = ref('')
const email = ref('')
const country = ref('')
const bio = ref('')
const agree = ref(false)
const newsletter = ref(false)
const gender = ref('')
const age = ref(25)

const country_options = [
  { label: 'Select country', value: '' },
  { label: 'United States', value: 'us' },
  { label: 'Spain', value: 'es' },
  { label: 'Mexico', value: 'mx' },
  { label: 'Argentina', value: 'ar' },
]

function handle_submit(): void {
  console.log('Form submitted:', {
    name: name.value,
    email: email.value,
    country: country.value,
    bio: bio.value,
    agree: agree.value,
    newsletter: newsletter.value,
    gender: gender.value,
    age: age.value,
  })
}
</script>

<template>
  <section class="space-y-12">
    <p class="text-base-content/70">
      A sample form showcasing multiple form components together.
    </p>

    <form class="max-w-lg flex flex-col gap-6" @submit.prevent="handle_submit">
      <!-- Text Input -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Name</span>
        </label>
        <UiInput v-model="name" placeholder="Your full name" />
      </div>

      <!-- Email Input -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <UiInput v-model="email" type="email" placeholder="email@example.com" />
      </div>

      <!-- Select -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Country</span>
        </label>
        <UiSelect v-model="country" :options="country_options" />
      </div>

      <!-- Textarea -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Bio</span>
        </label>
        <UiTextarea v-model="bio" placeholder="Tell us about yourself..." />
      </div>

      <!-- Radio Group -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Gender</span>
        </label>
        <div class="flex gap-4">
          <label class="flex items-center gap-2 cursor-pointer">
            <UiRadio v-model="gender" value="male" name="gender" />
            <span class="text-sm">Male</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <UiRadio v-model="gender" value="female" name="gender" />
            <span class="text-sm">Female</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <UiRadio v-model="gender" value="other" name="gender" />
            <span class="text-sm">Other</span>
          </label>
        </div>
      </div>

      <!-- Range Slider -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Age: {{ age }}</span>
        </label>
        <UiRange v-model="age" :min="0" :max="100" />
      </div>

      <!-- Checkbox -->
      <div class="form-control">
        <label class="flex items-center gap-2 cursor-pointer">
          <input v-model="agree" type="checkbox" class="checkbox" />
          <span class="text-sm">I agree to the terms and conditions</span>
        </label>
      </div>

      <!-- Toggle -->
      <div class="form-control">
        <label class="flex items-center gap-2 cursor-pointer">
          <UiToggle v-model="newsletter" />
          <span class="text-sm">Subscribe to newsletter</span>
        </label>
      </div>

      <!-- File Input -->
      <div class="form-control">
        <label class="label">
          <span class="label-text">Attachment</span>
        </label>
        <UiInputfile />
      </div>

      <!-- Submit -->
      <div>
        <UiButton type="submit" variant="primary">
          Submit Form
        </UiButton>
      </div>
    </form>
  </section>
</template>
