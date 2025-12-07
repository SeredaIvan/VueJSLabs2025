<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <Chip label="🚀 Новий спосіб керування задачами" class="hero-chip" />

        <h1 class="hero-title">
          Керуйте проєктами<br />легко та ефективно
        </h1>

        <p class="hero-subtitle">
          TaskFlow — це потужна платформа для управління задачами, яка допомагає
          командам працювати злагоджено та досягати цілей швидше
        </p>

        <div class="hero-buttons">
          <Button
              label="Почати безкоштовно"
              icon="pi pi-arrow-right"
              iconPos="right"
              size="large"
              class="primary-button"
          />
          <Button
              label="Копіювати API"
              icon="pi pi-copy"
              severity="secondary"
              outlined
              size="large"
              @click="copyApiEndpoint"
          />
        </div>

        <div class="hero-stats">
          <div class="stat">
            <div class="stat-number">50K+</div>
            <div class="stat-label">Активних користувачів</div>
          </div>
          <div class="stat">
            <div class="stat-number">1M+</div>
            <div class="stat-label">Виконаних задач</div>
          </div>
          <div class="stat">
            <div class="stat-number">99.9%</div>
            <div class="stat-label">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
import Button from 'primevue/button'
import Chip from 'primevue/chip'

const instance = getCurrentInstance()
const apiEndpoint = 'https://api.taskflow.com/v1'

const copyApiEndpoint = () => {
  instance.appContext.config.globalProperties.$copyToClipboard(apiEndpoint, 'API endpoint')
}
</script>

<style scoped>
.hero {
  padding: 10rem 1.5rem 6rem;
  text-align: center;
  background: transparent;
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
}

.hero-chip {
  margin-bottom: 2rem;
  background: rgba(168, 85, 247, 0.2);
  border: 1px solid rgba(168, 85, 247, 0.3);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 1.2;
  background: linear-gradient(to right, #fff, #e9d5ff, #fce7f3);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #d1d5db;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 5rem;
}

.primary-button {
  background-color: #a855f7;
  border-color: #a855f7;
  color: #ffffff;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2.75rem;
  font-weight: bold;
  color: #a855f7;
  margin-bottom: 0.75rem;
}

.stat-label {
  color: #9ca3af;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 4.5rem;
  }
}
</style>
