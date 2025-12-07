<template>
  <div class="dark-mode">
    <Toast position="top-right" />

    <AppHeader />
    <HeroSection />
    <ProblemSolution />
    <FeaturesSection />
    <HowItWorks />
    <PricingSection />
    <TestimonialsSection />
    <FaqSection :faqs="faqs" />
    <ContactForm />
    <AppFooter />
  </div>
</template>

<script setup>
import Toast from 'primevue/toast'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProblemSolution from './components/ProblemSolution.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import PricingSection from './components/PricingSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactForm from './components/ContactForm.vue'
import AppFooter from './components/AppFooter.vue'

const faqs = [
  {
    question: 'Чи можна змінити тарифний план?',
    answer: 'Так, ви можете змінити тариф у будь-який момент у налаштуваннях акаунту.'
  },
  {
    question: 'Чи є безкоштовний пробний період?',
    answer: 'Так, ми надаємо 14 днів безкоштовного тестування без привʼязки картки.'
  },
  {
    question: 'Які способи оплати підтримуються?',
    answer: 'Visa, MasterCard, Apple Pay, Google Pay.'
  },
  {
    question: 'Чи безпечні мої дані?',
    answer: 'Так, всі дані шифруються та відповідають стандартам GDPR.'
  }
]
</script>

<style>
/* Підключаємо шрифт Poppins для всього проекту */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  color: white;
}

.dark-mode {
  min-height: 100vh;
  background: linear-gradient(135deg, #1e1b4b 0%, #581c87 50%, #1e1b4b 100%);
  color: white;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #e0e7ff;
}

.section-header p {
  font-size: 1.25rem;
  color: #c7d2fe;
}

.w-full {
  width: 100%;
}

</style>
