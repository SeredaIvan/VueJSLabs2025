<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 VueNews. All rights reserved.</p>
      <nav class="footer-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: auto;
  padding: 2rem 0;
  border-top: 1px solid var(--color-border);
  background-color: var(--color-background);
  color: var(--color-secondary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-nav {
  display: flex;
  gap: 1rem;
}

.footer-nav a {
  color: var(--color-secondary);
  font-size: 0.9rem;
}

.footer-nav a:hover {
  color: var(--color-primary);
}
</style>
