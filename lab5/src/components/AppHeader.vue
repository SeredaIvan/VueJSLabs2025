<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <i class="pi pi-bolt"></i>
          <span>TaskFlow</span>
        </div>

        <nav class="desktop-nav">
          <a href="#features">Переваги</a>
          <a href="#pricing">Тарифи</a>
          <a href="#testimonials">Відгуки</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Контакти</a>
          <Button label="Спробувати безкоштовно" severity="contrast" />
        </nav>
        <div class="div-burger">
        <Button
            icon="pi pi-bars"
            text
            class="mobile-menu-btn"
            @click="visible = true"
        />
        </div>
      </div>
    </div>

    <Sidebar v-model:visible="visible" position="right">
      <h3>Меню</h3>
      <div class="mobile-menu">
        <a href="#features" @click="visible = false">Переваги</a>
        <a href="#pricing" @click="visible = false">Тарифи</a>
        <a href="#testimonials" @click="visible = false">Відгуки</a>
        <a href="#faq" @click="visible = false">FAQ</a>
        <a href="#contact" @click="visible = false">Контакти</a>
        <Button label="Спробувати безкоштовно" severity="contrast" class="w-full" @click="visible = false" />
      </div>
    </Sidebar>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'

const visible = ref(false)
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(168, 85, 247, 0.2);
  z-index: 1000;
  padding: 1rem 0;
  overflow-x: clip;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.logo i {
  font-size: 2rem;
  color: #a855f7;
}

.desktop-nav {
  display: none;
  gap: 2rem;
  align-items: center;
  min-width: 0;
  flex-wrap: nowrap;
}

.desktop-nav a {
  color: #f3f4f6;
  text-decoration: none;
  transition: color 0.3s;
}

.desktop-nav a:hover {
  color: #a855f7;
}

.mobile-menu-btn {
  display: block;
  color: #a855f7;
  padding: 25px 0 0;
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.mobile-menu a {
  color: #1f2937;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background 0.3s;
}

.mobile-menu a:hover {
  background: rgba(168, 85, 247, 0.1);
}

@media (min-width: 768px) {
  .desktop-nav {
    display: flex;
  }

  .mobile-menu-btn {
    display: none;
  }
}
.div-burger{
  display: flex;
  flex-direction: column;
  align-content: center;
}
</style>
