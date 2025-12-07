<template>
  <section class="problem-solution">
    <div class="container">
      <div class="two-columns">
        <Card class="problem-card">
          <template #title>
            <span class="card-title problem">Проблема</span>
          </template>
          <template #content>
            <ul class="feature-list">
              <li v-for="(item, idx) in problems" :key="idx">
                <i class="pi pi-times-circle problem-icon"></i>
                <span>{{ item }}</span>
              </li>
            </ul>
          </template>
        </Card>

        <Card class="solution-card">
          <template #title>
            <span class="card-title solution">Рішення</span>
          </template>
          <template #content>
            <ul class="feature-list">
              <li v-for="(item, idx) in solutions" :key="idx">
                <i class="pi pi-check-circle solution-icon"></i>
                <span>{{ item }}</span>
              </li>
            </ul>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from 'primevue/card'

const problems = [
  'Хаотичне управління задачами в різних інструментах',
  'Відсутність прозорості в роботі команди',
  'Пропущені дедлайни та втрачені завдання',
  'Складна комунікація між членами команди'
]

const solutions = [
  'Єдина платформа для всіх задач і проєктів',
  'Реалтайм аналітика та візуалізація прогресу',
  'Автоматичні нагадування та трекінг дедлайнів',
  'Вбудовані інструменти для командної роботи'
]
</script>

<style scoped>
.problem-solution {
  padding: 6rem 1.5rem;
  background: rgba(30, 41, 59, 0.6);
}

.two-columns {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .two-columns {
    grid-template-columns: repeat(2, 1fr);
  }
}

.card-title {
  font-size: 2rem;
  font-weight: 700;
}

.card-title.problem {
  color: #ef4444;
}

.card-title.solution {
  color: #10b981;
}

.feature-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1rem;
}

.feature-list li {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  font-size: 1.1rem;
  color: #f3f4f6;
  line-height: 1.5;
}

.problem-icon {
  color: #ef4444;
  flex-shrink: 0;
  font-size: 1.5rem;
}

.solution-icon {
  color: #10b981;
  flex-shrink: 0;
  font-size: 1.5rem;
}

.problem-card,
.solution-card {
  background-color: #4E2779;
  color: #f3f4f6;
  padding: 2rem;
  border-radius: 1rem;
}
</style>
