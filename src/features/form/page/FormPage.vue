<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { z } from 'zod'
import UiField from '@/shared/ui/ui-field/UiField.vue'
import UiInput from '@/shared/ui/ui-input/UiInput.vue'
import UiSelect from '@/shared/ui/ui-select/UiSelect.vue'
import UiTextarea from '@/shared/ui/ui-textarea/UiTextarea.vue'
import UiButton from '@/shared/ui/ui-button/UiButton.vue'
import UiToggle from '@/shared/ui/ui-toggle/UiToggle.vue'
import UiRating from '@/shared/ui/ui-rating/UiRating.vue'
import UiRange from '@/shared/ui/ui-range/UiRange.vue'
import UiRadio from '@/shared/ui/ui-radio/UiRadio.vue'
import UiRadioItem from '@/shared/ui/ui-radio/UiRadioItem.vue'
import UiCheckbox from '@/shared/ui/ui-checkbox/UiCheckbox.vue'
import UiCalendar from '@/shared/ui/ui-calendar/UiCalendar.vue'
import UiInputfile from '@/shared/ui/ui-inputfile/UiInputfile.vue'
import type { SelectOption } from '@/shared/ui/ui-select/ui-select-properties'
import type { CheckboxOption } from '@/shared/ui/ui-checkbox/UiCheckbox.vue'

// ── Zod schema ──────────────────────────────────────────────
const signup_schema = z
  .object({
    username: z
      .string()
      .min(1, 'Username is required')
      .min(3, 'Username must be at least 3 characters'),
    email: z.string().min(1, 'Email is required').email('Email is not valid'),
    phone_number: z
      .string()
      .min(1, 'Phone number is required')
      .regex(/^\+?[\d\s-]{7,15}$/, 'Phone number is not valid'),
    country: z.string().min(1, 'Country is required'),
    bio: z.string().max(500, 'Bio cannot exceed 500 characters').default(''),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(6, 'Password must be at least 6 characters'),
    repeat_password: z.string().min(1, 'Please repeat your password'),
    first_name: z
      .string()
      .min(1, 'First name is required')
      .max(255, 'First name cannot exceed 255 characters'),
    last_name: z
      .string()
      .min(1, 'Last name is required')
      .max(255, 'Last name cannot exceed 255 characters'),
    interests: z.array(z.any()).min(1, 'Select at least one interest'),
    birth_date: z.string().min(1, 'Birth date is required'),
    resume: z.string().nullable().refine((v) => v !== null && v !== '', 'Resume is required'),
    gender: z.string().min(1, 'Gender is required'),
    accept_terms: z.boolean().refine((v) => v === true, 'You must accept the terms and conditions'),
    rating: z.number().min(1, 'Rating is required'),
    age: z
      .number()
      .min(18, 'You must be at least 18 years old')
      .max(120, 'Age cannot exceed 120'),
  })
  .refine((data) => data.password === data.repeat_password, {
    message: 'Passwords do not match',
    path: ['repeat_password'],
  })

type SignupForm = z.infer<typeof signup_schema>

// ── Form model ──────────────────────────────────────────────
const form = reactive<SignupForm>({
  username: '',
  email: '',
  phone_number: '',
  country: '',
  bio: '',
  password: '',
  repeat_password: '',
  first_name: '',
  last_name: '',
  interests: [] as string[],
  birth_date: '',
  resume: null as string | null,
  gender: 'male',
  accept_terms: false,
  rating: 0,
  age: 25,
})

// ── Touched tracking ────────────────────────────────────────
const touched = reactive<Record<keyof SignupForm, boolean>>({
  username: false,
  email: false,
  phone_number: false,
  country: false,
  bio: false,
  password: false,
  repeat_password: false,
  first_name: false,
  last_name: false,
  interests: false,
  birth_date: false,
  resume: false,
  gender: false,
  accept_terms: false,
  rating: false,
  age: false,
})

function mark_touched(field: keyof SignupForm) {
  touched[field] = true
}

// ── Field errors (derived from Zod) ────────────────────────
const field_errors = computed(() => {
  const result = signup_schema.safeParse(form)
  const errors: Partial<Record<keyof SignupForm, string>> = {}
  if (!result.success) {
    for (const issue of result.error.issues) {
      const path = issue.path[0] as keyof SignupForm
      if (path && !errors[path]) {
        errors[path] = issue.message
      }
    }
  }
  return errors
})

function get_error(field: keyof SignupForm): string | null {
  return field_errors.value[field] ?? null
}

// ── Password visibility ─────────────────────────────────────
const password_visible = ref(false)

const password_field_status = computed(() =>
  password_visible.value
    ? ({ type: 'text' as const, placeholder: 'Your password' })
    : ({ type: 'password' as const, placeholder: 'Your password' }),
)

function toggle_password_visibility() {
  password_visible.value = !password_visible.value
}

// ── Country options ─────────────────────────────────────────
const country_options: SelectOption[] = [
  { label: 'Select your country', value: '' },
  { label: 'Spain', value: 'es' },
  { label: 'Mexico', value: 'mx' },
  { label: 'Argentina', value: 'ar' },
  { label: 'Colombia', value: 'co' },
  { label: 'Chile', value: 'cl' },
]

// ── Interests options ───────────────────────────────────────
const interests_options: CheckboxOption[] = [
  { label: 'Sports', value: 'sports' },
  { label: 'Music', value: 'music' },
  { label: 'Technology', value: 'tech' },
]

// ── Model entries for sidebar ───────────────────────────────
const model_entries = computed(() => {
  return Object.entries(form).map(([key, value]) => ({
    key,
    value: Array.isArray(value) ? (value.length ? value.join(', ') : null) : (value || null),
  }))
})

// ── Submit handler ──────────────────────────────────────────
const is_submitting = ref(false)

async function on_submit(event: Event) {
  event.preventDefault()

  // Mark all fields as touched on submit attempt
  for (const key of Object.keys(touched) as (keyof SignupForm)[]) {
    touched[key] = true
  }

  const result = signup_schema.safeParse(form)
  if (!result.success) {
    console.log('Validation errors:', result.error.issues)
    return
  }

  is_submitting.value = true
  // Simulate async submission
  await new Promise((resolve) => setTimeout(resolve, 800))
  console.log('Form submitted:', result.data)
  is_submitting.value = false
}
</script>

<template>
  <div class="space-y-10">
    <div class="text-center pb-5 pt-5">
      <span class="text-2xl font-bold tracking-tight">Create account</span>
    </div>

    <div class="flex flex-col lg:flex-row gap-4">
      <!-- Form card -->
      <div class="card bg-base-200 flex-1">
        <div class="card-body">
          <form autocomplete="off" @submit="on_submit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mb-6">
              <!-- Left column -->
              <div class="flex flex-col gap-3">
                <UiField
                  label="Username"
                  id="username"
                  :error="get_error('username')"
                  :touched="touched.username"
                  is-error-fixed
                >
                  <UiInput
                    v-model="form.username"
                    placeholder="Username"
                    @blur="mark_touched('username')"
                  />
                </UiField>

                <UiField
                  label="Email"
                  id="email"
                  :error="get_error('email')"
                  :touched="touched.email"
                  is-error-fixed
                >
                  <UiInput
                    v-model="form.email"
                    placeholder="youremail@example.com"
                    @blur="mark_touched('email')"
                  />
                </UiField>

                <UiField
                  label="Phone number"
                  id="phone_number"
                  :error="get_error('phone_number')"
                  :touched="touched.phone_number"
                  is-error-fixed
                >
                  <UiInput
                    v-model="form.phone_number"
                    placeholder="Your phone number"
                    @blur="mark_touched('phone_number')"
                  />
                </UiField>

                <UiField
                  label="Country"
                  id="country"
                  :error="get_error('country')"
                  :touched="touched.country"
                  is-error-fixed
                >
                  <UiSelect
                    v-model="form.country"
                    :options="country_options"
                    placeholder="Select your country"
                    @blur="mark_touched('country')"
                  />
                </UiField>

                <UiField
                  label="Bio"
                  id="bio"
                  :error="get_error('bio')"
                  :touched="touched.bio"
                  is-error-fixed
                >
                  <UiTextarea
                    v-model="form.bio"
                    placeholder="Tell us about yourself..."
                    @blur="mark_touched('bio')"
                  />
                </UiField>

                <UiField
                  label="Password"
                  id="password"
                  :error="get_error('password')"
                  :touched="touched.password"
                  is-error-fixed
                >
                  <UiInput
                    v-model="form.password"
                    :type="password_field_status.type"
                    :placeholder="password_field_status.placeholder"
                    @blur="mark_touched('password')"
                  />
                  <template #right>
                    <div class="mt-2">
                      <UiButton
                        :icon="password_visible ? 'eye-off' : 'eye'"
                        size="xs"
                        variant="ghost"
                        type="button"
                        @click="toggle_password_visibility"
                      />
                    </div>
                  </template>
                </UiField>
              </div>

              <!-- Right column -->
              <div class="flex flex-col gap-3">
                <UiField
                  label="Repeat password"
                  id="repeat_password"
                  :error="get_error('repeat_password')"
                  :touched="touched.repeat_password"
                  is-error-fixed
                >
                  <UiInput
                    v-model="form.repeat_password"
                    type="password"
                    placeholder="Repeat your password"
                    @blur="mark_touched('repeat_password')"
                  />
                </UiField>

                <UiField
                  label="First name"
                  id="first_name"
                  :error="get_error('first_name')"
                  :touched="touched.first_name"
                  is-error-fixed
                >
                  <UiInput
                    v-model="form.first_name"
                    placeholder="Your first name"
                    @blur="mark_touched('first_name')"
                  />
                </UiField>

                <UiField
                  label="Last name"
                  id="last_name"
                  :error="get_error('last_name')"
                  :touched="touched.last_name"
                  is-error-fixed
                >
                  <UiInput
                    v-model="form.last_name"
                    placeholder="Your last name"
                    @blur="mark_touched('last_name')"
                  />
                </UiField>

                <UiField
                  label="Interests"
                  id="interests"
                  :error="get_error('interests')"
                  :touched="touched.interests"
                  is-error-fixed
                >
                  <UiCheckbox
                    v-model="form.interests"
                    name="signup-interests"
                    :data="interests_options"
                  />
                </UiField>

                <UiField
                  label="Birth date"
                  id="birth_date"
                  :error="get_error('birth_date')"
                  :touched="touched.birth_date"
                  is-error-fixed
                >
                  <UiCalendar
                    v-model="form.birth_date"
                    @blur="mark_touched('birth_date')"
                  />
                </UiField>

                <UiField
                  label="Resume (PDF)"
                  id="resume"
                  :error="get_error('resume')"
                  :touched="touched.resume"
                  is-error-fixed
                >
                  <UiInputfile
                    v-model="form.resume"
                    accept=".pdf"
                  />
                </UiField>

                <UiField
                  label="Gender"
                  id="gender"
                  :error="get_error('gender')"
                  :touched="touched.gender"
                  is-error-fixed
                >
                  <UiRadio
                    v-model="form.gender"
                    name="signup-gender"
                  >
                    <UiRadioItem value="male">Male</UiRadioItem>
                    <UiRadioItem value="female">Female</UiRadioItem>
                    <UiRadioItem value="other">Other</UiRadioItem>
                  </UiRadio>
                </UiField>
              </div>

              <!-- Full width fields -->
              <UiField
                label="Accept terms"
                id="accept_terms"
                :error="get_error('accept_terms')"
                :touched="touched.accept_terms"
                is-error-fixed
              >
                <UiToggle
                  v-model="form.accept_terms"
                  color="primary"
                />
              </UiField>

              <UiField
                label="Rating"
                id="rating"
                :error="get_error('rating')"
                :touched="touched.rating"
                is-error-fixed
              >
                <UiRating
                  v-model:value="form.rating"
                  name="signup-rating"
                />
              </UiField>

              <UiField
                label="Age"
                id="age"
                :error="get_error('age')"
                :touched="touched.age"
                is-error-fixed
              >
                <UiRange
                  v-model="form.age"
                  :min="18"
                  :max="120"
                />
              </UiField>
            </div>

            <UiButton
              variant="primary"
              type="submit"
              block
              :spin="is_submitting"
            >
              Register
            </UiButton>
          </form>
        </div>
      </div>

      <!-- Reactive values sidebar -->
      <div class="w-full lg:w-80 shrink-0">
        <div class="sticky card bg-base-200 top-22">
          <div class="card-body p-4">
            <h3 class="text-sm font-semibold mb-3 flex items-center gap-2">
              <span class="inline-block w-2 h-2 rounded-full bg-success animate-pulse"></span>
              Reactive values
            </h3>

            <div class="space-y-1.5 font-mono text-xs">
              <div
                v-for="entry in model_entries"
                :key="entry.key"
                class="flex justify-between items-start gap-2"
              >
                <span class="text-base-content/60 shrink-0">{{ entry.key }}:</span>
                <span
                  class="text-right truncate max-w-45"
                  :class="entry.value ? 'text-primary' : 'text-base-content/40'"
                >
                  {{ entry.value ?? '—' }}
                </span>
              </div>
            </div>

            <div class="mt-3 pt-3 border-t border-base-300">
              <div class="flex justify-between text-xs">
                <span class="text-base-content/60">touched</span>
                <span class="font-mono">{{
                  Object.values(touched).some(Boolean) ? 'true' : 'false'
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
