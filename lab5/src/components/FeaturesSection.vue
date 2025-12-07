<template>
  <section id="features" class="features">
    <div class="container">
      <div class="section-header">
        <h2>Чому обирають TaskFlow?</h2>
        <p>Потужні функції для максимальної продуктивності</p>
      </div>

      <div class="features-grid">
        <Card
            v-for="(feature, idx) in features"
            :key="idx"
            class="feature-card"
        >
          <template #header>
            <div class="feature-icon">
              <i :class="feature.icon"></i>
            </div>
          </template>
          <template #title>
            <span class="feature-title">{{ feature.title }}</span>
          </template>
          <template #content>
            <p class="feature-description">{{ feature.description }}</p>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from 'primevue/card'

const features = [
  {
    icon: 'pi pi-bolt',
    title: 'Швидкість',
    description: 'Блискавично швидкий інтерфейс, що не гальмує вашу роботу. Створюйте задачі за секунди.'
  },
  {
    icon: 'pi pi-users',
    title: 'Співпраця',
    description: 'Працюйте разом у реальному часі. Коментарі, згадки, файли — все в одному місці.'
  },
  {
    icon: 'pi pi-shield',
    title: 'Безпека',
    description: 'Надійне шифрування даних, двофакторна автентифікація та відповідність GDPR.'
  }
]
</script>

<style scoped>
.features {
  padding: 5rem 1.5rem;
  background: transparent;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  background-color: #4E2779;
  color: #f5f5f5;
}

.feature-icon {
  width: 3.5rem;
  height: 3.5rem;
  background: rgba(168, 85, 247, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
}

.feature-icon i {
  font-size: 1.75rem;
  color: #a855f7;
}

.feature-title,
.feature-description {
  color: #f5f5f5;
}
</style>
