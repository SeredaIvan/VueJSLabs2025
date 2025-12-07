<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Сторінку не знайдено</h2>
    <p>Схоже, ви перейшли за неправильним посиланням.</p>

    <RouterLink to="/" class="btn">
      Повернутися на головну
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  font-size: 6rem;
  margin: 0;
  color: #ff4d4f;
}

h2 {
  margin: 0.5rem 0;
}

p {
  color: #666;
  margin-bottom: 1.5rem;
}

.btn {
  padding: 0.6rem 1.2rem;
  background: #42b983;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
}

.btn:hover {
  background: #369870;
}
</style>
