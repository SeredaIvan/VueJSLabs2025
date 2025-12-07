<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <div class="section-header">
        <h2>Відгуки клієнтів</h2>
        <p>Нам довіряють компанії та стартапи з усього світу</p>
      </div>

      <div class="testimonials-grid">
        <Card
            v-for="item in testimonials"
            :key="item.id"
            class="testimonial-card"
        >
          <template #content>
            <p class="message">“{{ item.message }}”</p>

            <div class="author">
              <Avatar
                  :label="item.name.charAt(0)"
                  size="large"
                  shape="circle"
                  class="avatar"
              />
              <div>
                <strong>{{ item.name }}</strong>
                <span>{{ item.position }}</span>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'

const testimonials = [
  {
    id: 1,
    name: 'Олена К.',
    position: 'CEO, Startup UA',
    message:
        'Команда швидко зрозуміла наші потреби та реалізувала продукт на високому рівні.'
  },
  {
    id: 2,
    name: 'Андрій М.',
    position: 'CTO, Fintech Company',
    message:
        'Надійне рішення, сучасний стек та чудова комунікація протягом усього проєкту.'
  },
  {
    id: 3,
    name: 'Марія П.',
    position: 'Product Manager',
    message:
        'Дуже задоволені співпрацею. Рекомендуємо як професіоналів своєї справи.'
  }
]
</script>

<style scoped>
.testimonials {
  padding: 5rem 1.5rem;
  background-color: #35235C;
}

.section-header h2 {
  color: #e0e7ff;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  text-align: center;
}

.section-header p {
  color: #c7d2fe;
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 3rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.05);
  color: #e0e7ff;
  border-radius: 1rem;
  padding: 1.5rem;
}

.message {
  font-style: italic;
  color: #e0e7ff;
  margin-bottom: 1.5rem;
}

.author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author strong {
  color: #ffffff;
}

.author span {
  display: block;
  font-size: 0.85rem;
  color: #c7d2fe;
}

.avatar {
  background-color: #a855f7;
  color: #ffffff;
}
</style>
