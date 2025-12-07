<template>
  <AuthWrapper title="Реєстрація">
    <form @submit.prevent="handleSubmit" class="auth-form">
      <BaseInput
          id="name"
          label="Ім'я"
          placeholder="Введіть ім'я"
          v-model="name"
          required
      />
      <BaseInput
          id="email"
          label="Email"
          type="email"
          placeholder="Введіть email"
          v-model="email"
          required
      />
      <BaseInput
          id="password"
          label="Пароль"
          type="password"
          placeholder="Введіть пароль"
          v-model="password"
          required
      />

      <button type="submit">Зареєструватися</button>
    </form>

    <p class="links">
      Вже маєте акаунт? <RouterLink to="/login">Увійти</RouterLink>
    </p>
  </AuthWrapper>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import AuthWrapper from '@/components/AuthWrapper.vue'
import BaseInput from '@/components/BaseInput.vue'
import { register } from '@/services/auth.js'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  if (!name.value || !email.value || !password.value) {
    alert('Заповніть усі поля')
    return
  }

  try {
    await register({ name: name.value, email: email.value, password: password.value })
    alert('Реєстрація успішна!')
    router.push('/login')
  } catch (err) {
    alert(err.message)
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
