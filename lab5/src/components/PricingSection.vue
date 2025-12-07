<template>
  <section id="pricing" class="pricing">
    <div class="container">
      <div class="section-header">
        <h2>Прозорі тарифи</h2>
        <p>Оберіть план, який підходить саме вам</p>
      </div>

      <div class="pricing-grid">
        <Card v-for="(plan, idx) in plans" :key="idx" :class="['pricing-card', { popular: plan.popular }]">
          <template #header>
            <Chip v-if="plan.popular" label="Популярний" class="popular-chip" />
          </template>
          <template #title>
            <span class="pricing-title">{{ plan.name }}</span>
          </template>
          <template #subtitle>{{ plan.description }}</template>
          <template #content>
            <div class="card-content">
              <div>
                <div class="price">
                  <span class="price-amount">{{ plan.price }}</span>
                  <span class="price-period">грн/міс</span>
                </div>

                <ul class="plan-features">
                  <li v-for="(feature, i) in plan.features" :key="i">
                    <i class="pi pi-check"></i>
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <Button
                  label="Обрати план"
                  :severity="plan.popular ? 'contrast' : 'secondary'"
                  class="w-full"
              />
            </div>
          </template>
        </Card>
      </div>

      <Card class="calculator-card">
        <template #title>
          <div class="calculator-title">Калькулятор вартості</div>
        </template>
        <template #content>
          <div class="calculator">
            <label for="userCount" class="input-label">Кількість користувачів</label>
            <div class="calculator-wrapper">

              <div class="calculator-input-block">

              <InputNumber
                  inputId="userCount"
                  v-model="userCount"
                  :min="1"
                  :max="100"
                  showButtons
                  buttonLayout="horizontal"
                  decrementButtonIcon="pi pi-minus"
                  incrementButtonIcon="pi pi-plus"
              />
              </div>
            </div>
            <div class="calculator-result">
              <div class="result-label">Орієнтовна вартість</div>
              <div class="result-amount">
                {{ calculatedPrice.toLocaleString() }} грн<span>/міс</span>
              </div>
            </div>
          </div>
          <p class="calculator-note">
            * Розрахунок на базі тарифу Team. Для Enterprise плану зв'яжіться з нами.
          </p>
        </template>
      </Card>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Chip from 'primevue/chip'
import InputNumber from 'primevue/inputnumber'

const plans = [
  {
    name: 'Basic',
    description: 'Для індивідуальних користувачів',
    price: 99,
    features: [
      'До 10 проєктів',
      '50 задач на місяць',
      'Базова аналітика',
      'Email підтримка',
      'Мобільний додаток',
      '5 GB сховище'
    ]
  },
  {
    name: 'Team',
    description: 'Для малих команд',
    price: 299,
    popular: true,
    features: [
      'Необмежена кількість проєктів',
      'Необмежена кількість задач',
      'Розширена аналітика',
      'Пріоритетна підтримка 24/7',
      'Інтеграції (Slack, Jira)',
      '50 GB сховище',
      'Командна співпраця',
      'Кастомні звіти'
    ]
  },
  {
    name: 'Enterprise',
    description: 'Для великих компаній',
    price: 799,
    features: [
      'Все з плану Team',
      'Персональний менеджер',
      'SSO автентифікація',
      'Необмежене сховище',
      'API доступ',
      'Власний домен',
      'SLA гарантії',
      'Онбординг та навчання'
    ]
  }
]

const userCount = ref(5)
const calculatedPrice = computed(() => userCount.value * 299)
</script>
<style scoped>
.pricing {
  padding: 5rem 1.5rem;
}

.section-header h2 {
  color: #e0e7ff;
}

.section-header p {
  color: #c7d2fe;
}

.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.pricing-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid rgba(71, 85, 105, 1);
  transition: all 0.3s;
  background-color: #34235A;
  padding: 1.5rem;
  border-radius: 1rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.pricing-card.popular {
  border-color: #a855f7;
  transform: scale(1.05);
  box-shadow: 0 20px 25px -5px rgba(168, 85, 247, 0.2);
}

.popular-chip {
  background: linear-gradient(to right, #a855f7, #ec4899);
  margin: 1rem 0 1rem -1rem;
}

.price {
  margin: 1.5rem 0;
}

.price-amount {
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
}

.price-period {
  color: #c7d2fe;
  margin-left: 0.5rem;
}

.pricing-title {
  font-size: 1.75rem;
  font-weight: bold;
  color: #ffffff;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.plan-features li {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  color: #f3f4f6;
}

.plan-features i {
  color: #10b981;
  margin-top: 0.25rem;
}

.calculator-card {
  max-width: 800px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1));
  border: 1px solid rgba(168, 85, 247, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.calculator-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #e0e7ff;
  text-align: center;
}

.calculator {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}

.calculator-wrapper {
  margin-left: -200px;
  width: 120px;
  display: flex;
  gap: 0.5rem;
}

.input-label {
  font-size: 0.875rem;
  color: #9ca3af;
}

.calculator-wrapper :deep(.p-inputnumber) {
  width: 100%;
}

.calculator-wrapper :deep(.p-inputnumber-input) {
  text-align: center;
}

.calculator-result {
  flex: 1 1 150px;
  text-align: center;
}

.result-label {
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 0.5rem;
}

.result-amount {
  font-size: 2.5rem;
  font-weight: bold;
  color: #a855f7;
}

.result-amount span {
  font-size: 1.25rem;
  color: #9ca3af;
}

.calculator-note {
  text-align: center;
  color: #9ca3af;
  font-size: 0.875rem;
}
</style>
