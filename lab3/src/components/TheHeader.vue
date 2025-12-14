<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
    updateTheme()
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = true
    updateTheme()
  }
})
</script>

<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo">VueNews</router-link>
      <nav>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
      </nav>
      <button @click="toggleTheme" class="theme-toggle">
        {{ isDark ? '🌙' : '☀️' }}
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  height: var(--header-height);
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-primary);
}

nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: var(--color-text);
  font-weight: 500;
}

.nav-link:hover,
:global(.active-link) {
  color: var(--color-primary);
}

.theme-toggle {
  background: none;
  border: 1px solid var(--color-border);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 1.2rem;
  transition: background-color 0.3s;
}

.theme-toggle:hover {
  background-color: var(--color-border);
}
</style>
