<template>
  <section id="contact" class="contact">
    <div class="container contact-container">
      <Card class="contact-card">
        <template #title>
          <div class="contact-header">
            <h2>Напишіть нам</h2>
            <p>Залиште заявку і наш менеджер зв'яжеться з вами</p>
          </div>
        </template>

        <template #content>
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-field">
              <label for="name">Ім'я *</label>
              <InputText
                  id="name"
                  v-model="form.name"
                  placeholder="Ваше ім'я"
                  :invalid="!!errors.name"
              />
              <small v-if="errors.name" class="error">{{ errors.name }}</small>
            </div>

            <div class="form-field">
              <label for="email">Email *</label>
              <InputText
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="your@email.com"
                  :invalid="!!errors.email"
              />
              <small v-if="errors.email" class="error">{{ errors.email }}</small>
            </div>

            <div class="form-field">
              <label for="phone">Телефон</label>
              <InputMask
                  id="phone"
                  v-model="form.phone"
                  mask="+38 (099) 999-99-99"
                  placeholder="+38 (099) 999-99-99"
              />
            </div>

            <div class="form-field">
              <label for="message">Повідомлення *</label>
              <Textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  placeholder="Розкажіть про ваш проєкт..."
                  :invalid="!!errors.message"
              />
              <small v-if="errors.message" class="error">{{ errors.message }}</small>
            </div>

            <div class="form-field">
              <div class="checkbox-field">
                <Checkbox
                    inputId="policy"
                    v-model="form.agree"
                    binary
                    :invalid="!!errors.agree"
                />
                <label for="policy">
                  Я погоджуюсь з
                  <a href="#">політикою конфіденційності</a>
                  *
                </label>
              </div>
              <small v-if="errors.agree" class="error">{{ errors.agree }}</small>
            </div>

            <div class="form-field">
              <Button
                  label="Надіслати заявку"
                  type="submit"
                  size="large"
                  class="w-full primary-button"
              />
            </div>
          </form>

          <Divider />

          <div class="contact-info">
            <Button
                :label="supportEmail"
                icon="pi pi-envelope"
                severity="secondary"
                outlined
                @click="copyEmail"
            />
          </div>
        </template>
      </Card>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useToast } from 'primevue/usetoast'

import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import InputMask from 'primevue/inputmask'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

const toast = useToast()

const supportEmail = 'support@example.com'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
  agree: false
})

const errors = reactive({})

function validate() {
  errors.name = form.name ? '' : "Ім'я обовʼязкове"
  errors.email = form.email ? '' : 'Email обовʼязковий'
  errors.message = form.message ? '' : 'Повідомлення обовʼязкове'
  errors.agree = form.agree ? '' : 'Потрібно погодитись з політикою'
  return !Object.values(errors).some(Boolean)
}

function handleSubmit() {
  if (!validate()) return

  toast.add({
    severity: 'success',
    summary: 'Заявка надіслана',
    detail: 'Ми звʼяжемось з вами найближчим часом',
    life: 3000
  })

  Object.assign(form, { name: '', email: '', phone: '', message: '', agree: false })
}

function copyEmail() {
  navigator.clipboard.writeText(supportEmail)
  toast.add({
    severity: 'info',
    summary: 'Email скопійовано',
    detail: supportEmail,
    life: 2000
  })
}
</script>

<style scoped>
.contact {
  padding: 6rem 1.5rem;
  background-color: #35235C;
}

.contact-card {
  max-width: 900px;
  margin: 0 auto;
  padding: 2.5rem;
  background-color: #4E2779;
  color: #f3f4f6;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-header {
  text-align: center;
}

.contact-header h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #e0e7ff;
}

.contact-header p {
  color: #c7d2fe;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.form-field label {
  color: #e0e7ff;
}

.form-field :deep(input),
.form-field :deep(textarea),
.form-field :deep(.p-inputtext),
.form-field :deep(.p-inputtextarea),
.form-field :deep(.p-inputmask) {
  width: 100%;
  background-color: #5a3575;
  color: #e0e7ff;
  border: 1px solid #7c3aed;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.checkbox-field {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  flex-wrap: wrap;
  color: #e0e7ff;
}

.checkbox-field a {
  color: #a855f7;
}

.error {
  color: #fca5a5;
  font-size: 0.85rem;
}

.contact-info {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.primary-button {
  background-color: #a855f7;
  border-color: #a855f7;
  color: #ffffff;
}

@media (min-width: 768px) {
  .form-field {
    gap: 1rem;
  }
}
</style>
