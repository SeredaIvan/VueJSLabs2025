<template>
  <AuthWrapper title="Login">
    <form @submit.prevent="onSubmit" class="auth-form">
      <BaseInput
          id="email"
          label="Email"
          type="email"
          placeholder="Введіть email"
          v-model="form.email"
          required
      />
      <BaseInput
          id="password"
          label="Пароль"
          type="password"
          placeholder="Введіть пароль"
          v-model="form.password"
          required
      />

      <button type="submit">Увійти</button>
    </form>

    <p class="links">
      Ще немає акаунту? <RouterLink to="/register">Зареєструватися</RouterLink>
    </p>
  </AuthWrapper>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
import AuthWrapper from '@/components/AuthWrapper.vue'
import BaseInput from '@/components/BaseInput.vue'
import { login } from '@/services/auth.js'

const router = useRouter()
const route = useRoute()
const form = reactive({ email: '', password: '' })

async function onSubmit() {
  if (!form.email || !form.password) {
    alert('Заповніть усі поля')
    return
  }
  try {
    await login({ email: form.email, password: form.password })
    const redirect = route.query.redirect || '/admin/dashboard'
    router.push(redirect)
  } catch (e) {
    alert(e.message)
  }
}
</script>

<style scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

button {
  padding: 0.75rem;
  background-color: #42b983;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background-color: #369b6b;
}

.links {
  margin-top: 1rem;
  text-align: center;
}

.links a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}
</style>
