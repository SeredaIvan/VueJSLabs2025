<script setup>
import { useForm, useFieldArray } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const schema = computed(() => {
  return yup.object({
    name: yup.string().required(t('errors.required', { field: t('labels.name') })),
    email: yup.string().email(t('errors.email', { field: t('labels.email') })).required(t('errors.required', { field: t('labels.email') })),
    dob: yup.string().required(t('errors.required', { field: t('labels.dob') })),
    address: yup.string().min(2, t('errors.min', { field: t('labels.address') })).required(t('errors.required', { field: t('labels.address') })),
    phones: yup.array().of(
      yup.string().required(t('errors.required', { field: t('labels.phone') }))
    )
  })
})

const { handleSubmit, resetForm, setFieldError, values } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    email: '',
    dob: '',
    address: '',
    phones: ['']
  }
})

const { fields, push, remove } = useFieldArray('phones')

const onSubmit = handleSubmit((values) => {
  console.log('Submitted:', values)
  alert(t('messages.saved'))
  if (values.name.toLowerCase() === 'error') {
    setFieldError('name', 'Server Error: Invalid Name')
  }
})

function handleReset() {
  resetForm()
}
</script>

<template>
  <div class="profile-view">
    <h2>{{ t('titles.profile') }}</h2>
    
    <form @submit="onSubmit" class="profile-form">
      <div class="form-group">
        <label>{{ t('labels.name') }}</label>
        <Field name="name" type="text" v-slot="{ field, errorMessage }">
          <input v-bind="field" :class="{ error: errorMessage }" />
          <span class="error-msg" v-if="errorMessage">{{ errorMessage }}</span>
        </Field>
      </div>

      <div class="form-group">
        <label>{{ t('labels.email') }}</label>
        <Field name="email" type="email" v-slot="{ field, errorMessage }">
          <input v-bind="field" :class="{ error: errorMessage }" />
          <span class="error-msg" v-if="errorMessage">{{ errorMessage }}</span>
        </Field>
      </div>

      <div class="form-group">
        <label>{{ t('labels.dob') }}</label>
        <Field name="dob" type="date" v-slot="{ field, errorMessage }">
          <input v-bind="field" :class="{ error: errorMessage }" />
          <span class="error-msg" v-if="errorMessage">{{ errorMessage }}</span>
        </Field>
      </div>

      <div class="form-group">
        <label>{{ t('labels.address') }}</label>
        <Field name="address" as="textarea" v-slot="{ field, errorMessage }">
          <textarea v-bind="field" :class="{ error: errorMessage }" rows="3"></textarea>
          <span class="error-msg" v-if="errorMessage">{{ errorMessage }}</span>
        </Field>
      </div>

      <div class="form-section">
        <label class="section-label">{{ t('labels.phone') }}s</label>
        <div v-for="(field, idx) in fields" :key="field.key" class="phone-row">
          <Field :name="`phones[${idx}]`" v-slot="{ field, errorMessage }">
            <div class="input-wrapper">
               <input v-bind="field" :class="{ error: errorMessage }" placeholder="+380..." />
               <button type="button" @click="remove(idx)" v-if="fields.length > 1" class="remove-phone" title="Remove">&times;</button>
            </div>
             <span class="error-msg" v-if="errorMessage">{{ errorMessage }}</span>
          </Field>
        </div>
        <button type="button" @click="push('')" class="add-btn">{{ t('labels.add_phone') }}</button>
      </div>

      <div class="actions">
        <button type="submit" class="primary-btn">{{ t('buttons.submit') }}</button>
        <button type="button" @click="handleReset" class="secondary-btn">{{ t('buttons.reset') }}</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.profile-view {
  max-width: 600px;
  margin: 0 auto;
}

.profile-form {
  background: white;
  padding: 2rem;
  border-radius: var(--radius);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--secondary-color);
}

input, textarea {
  width: 100%;
  box-sizing: border-box; /* Fix width issues */
}

input.error, textarea.error {
  border-color: var(--danger-color);
}

.error-msg {
  display: block;
  color: var(--danger-color);
  font-size: 0.85em;
  margin-top: 0.25rem;
}

.form-section {
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-top: 1px solid var(--border-color);
  padding-top: 1.5rem;
}

.section-label {
  display: block;
  font-weight: 600;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.phone-row {
  margin-bottom: 0.75rem;
}

.input-wrapper {
  display: flex;
  gap: 0.5rem;
}

.remove-phone {
  background: #fee2e2;
  color: var(--danger-color);
  padding: 0 0.8em;
  font-weight: bold;
}

.remove-phone:hover {
  background: #fecaca;
}

.add-btn {
  background: transparent;
  border: 1px dashed var(--primary-color);
  color: var(--primary-color);
  width: 100%;
  padding: 0.5rem;
}

.add-btn:hover {
  background: #f0fdf4;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.primary-btn {
  background-color: var(--primary-color);
  color: white;
  flex: 2;
}

.primary-btn:hover {
  background-color: var(--primary-hover);
}

.secondary-btn {
  background-color: #e2e8f0;
  color: var(--text-main);
  flex: 1;
}

.secondary-btn:hover {
  background-color: #cbd5e1;
}

.debug {
  margin-top: 20px;
  background: #f1f5f9;
  padding: 10px;
  font-size: 0.8em;
  border-radius: 4px;
}
</style>
