<template>
  <div class="admin">
    <aside class="sidebar">
      <h2 class="logo">Admin</h2>
      <nav class="menu">
        <RouterLink to="/admin/dashboard">Dashboard</RouterLink>
        <RouterLink to="/admin/users">Users</RouterLink>
        <RouterLink to="/admin/reports">Reports</RouterLink>
      </nav>
    </aside>

    <div class="main">
      <header class="header">
        <span v-if="authState?.user">
          Welcome, <strong>{{ authState.user.name }}</strong>
        </span>
      </header>

      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { RouterLink } from 'vue-router'

const authState = inject('authState')
</script>

<style scoped>
.admin {
  display: flex;
  min-height: 100vh;
  background: #f3f4f6;
}

.sidebar {
  width: 220px;
  background: #1f2937;
  color: #fff;
  padding: 1.5rem 1rem;
}

.logo {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.menu a {
  padding: 0.6rem 1rem;
  border-radius: 6px;
  color: #e5e7eb;
  text-decoration: none;
  transition: background 0.2s;
}

.menu a:hover {
  background: #374151;
}

.menu a.router-link-active {
  background: #42b983;
  color: #fff;
  font-weight: bold;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header {
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  font-size: 0.95rem;
}

.content {
  padding: 2rem;
}
</style>
