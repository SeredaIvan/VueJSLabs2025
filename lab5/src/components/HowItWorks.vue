<template>
  <section class="how-it-works">
    <div class="container">
      <div class="section-header">
        <h2>Як це працює</h2>
        <p>Почніть за 3 простих кроки</p>
      </div>

      <div class="steps-grid">
        <div class="step" v-for="(step, idx) in steps" :key="idx">
          <div class="step-number">{{ step.number }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    number: '01',
    title: 'Реєстрація',
    description: 'Створіть акаунт за 30 секунд. Email підтвердження не потрібне.'
  },
  {
    number: '02',
    title: 'Налаштування',
    description: 'Додайте команду, створіть перший проєкт та налаштуйте під себе.'
  },
  {
    number: '03',
    title: 'Старт роботи',
    description: 'Почніть створювати задачі, призначати виконавців та відстежувати прогрес.'
  }
]
</script>

<style scoped>
.how-it-works {
  padding: 5rem 1.5rem;
  background: rgba(30, 41, 59, 0.5);
}

.steps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 768px) {
  .steps-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.step {
  position: relative;
}

.step-number {
  font-size: 4rem;
  font-weight: bold;
  color: rgba(168, 85, 247, 0.2);
  margin-bottom: 1rem;
}

.step h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.step p {
  color: #d1d5db;
}
</style>