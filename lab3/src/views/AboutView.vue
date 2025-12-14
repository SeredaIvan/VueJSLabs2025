<script setup>
import { ref } from 'vue'
import AdBanner from '../components/AdBanner.vue'
import BaseModal from '../components/BaseModal.vue'

const isModalOpen = ref(false)
</script>

<template>
  <div class="about">
    <h1>About Us</h1>
    <div class="about-content">
      <p>
        Welcome to VueNews, your number one source for all things tech. We're dedicated to providing you the very best of news, with an emphasis on Vue.js, Web Development, and Innovation.
      </p>
      <p>
        Founded in 2025, VueNews has come a long way from its beginnings. When we first started out, our passion for "eco-friendly coding" drove us to start our own business.
      </p>
    </div>
    
    <div class="team-section">
      <h2>Our Team</h2>
      <p>We are a group of passionate developers.</p>
    </div>

    <AdBanner position="footer" @click="isModalOpen = true" />

    <BaseModal :isOpen="isModalOpen" @close="isModalOpen = false">
      <div style="text-align: center;">
        <h2>Subscribe to Newsletter</h2>
        <p>Stay in the loop with our weekly digest.</p>
        <input type="email" placeholder="Enter your email" style="padding: 0.5rem; margin: 1rem 0; width: 100%;">
        <button style="padding: 0.5rem 1rem; background: var(--color-primary); color: white; border: none; border-radius: 4px;">Subscribe</button>
      </div>
    </BaseModal>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-primary);
}

.about-content {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.team-section {
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

h2 {
  color: var(--color-text);
  margin-bottom: 1rem;
}
</style>
