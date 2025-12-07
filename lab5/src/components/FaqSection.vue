<template>
  <section class="faq">
    <div class="container faq-container">
      <div class="section-header">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>

      <Accordion v-model:activeIndex="activeIndex" class="faq-accordion" :multiple="false">
        <AccordionTab
            v-for="(faq, idx) in faqs"
            :key="idx"
        >
          <template #header>
            <span class="faq-header">{{ faq.question }}</span>
          </template>
          <p class="faq-content">{{ faq.answer }}</p>
        </AccordionTab>
      </Accordion>
    </div>
  </section>
</template>

<script setup>
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import { ref } from 'vue'

defineProps({
  faqs: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    default: 'Часті питання'
  },
  subtitle: {
    type: String,
    default: 'Знайдіть відповіді на популярні запитання'
  },
  activeIndex: {
    type: Number,
    default: 0
  }
})

const activeIndex = ref(0)
</script>

<style scoped>
.faq {
  padding: 5rem 1.5rem;
  background-color: #35235C;
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #e0e7ff;
}

.section-header p {
  font-size: 1.125rem;
  color: #c7d2fe;
}

.faq-accordion .p-accordion-header {
  font-weight: 600;
  font-size: 1.125rem;
  color: #e0e7ff;
  background-color: #4b235a;
  border-radius: 0.5rem;
}

.faq-accordion .p-accordion-header.p-highlight {
  background-color: #5a2a70;
  border-color: #a855f7;
}

.faq-accordion .p-accordion-content {
  font-size: 1rem;
  color: #d1d5db;
  padding: 1rem 1.5rem;
  background-color: #3d2950;
  border-radius: 0 0 0.5rem 0.5rem;
}

.p-accordioncontent-content p {
  margin: 0;
}
</style>
