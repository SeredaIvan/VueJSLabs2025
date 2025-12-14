<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>The page you are looking for does not exist or has been moved.</p>
    <router-link to="/" class="home-link">Go Home</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 4rem 0;
}

h1 {
  font-size: 6rem;
  color: var(--color-border);
  line-height: 1;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.home-link {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: white;
  border-radius: 4px;
  font-weight: 500;
}

.home-link:hover {
  opacity: 0.9;
  color: white;
}
</style>
