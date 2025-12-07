<template>
  <div class="home">
    <h1>Головна сторінка</h1>
    <p>Ласкаво просимо до нашого застосунку 🚀</p>

    <nav class="links">
      <RouterLink to="/login">Увійти</RouterLink>
      <RouterLink to="/register">Реєстрація</RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}

.links {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

a {
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}

a.router-link-active {
  text-decoration: underline;
}
</style>
