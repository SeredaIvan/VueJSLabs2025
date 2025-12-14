<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { newsList } from '../data/news'
import AdBanner from '../components/AdBanner.vue'
import BaseModal from '../components/BaseModal.vue'

const route = useRoute()
const router = useRouter()
const isModalOpen = ref(false)

const article = computed(() => {
  const id = parseInt(route.params.id)
  return newsList.find(n => n.id === id)
})

const openAd = () => {
  isModalOpen.value = true
}

const closeAd = () => {
  isModalOpen.value = false
}

onMounted(() => {
  if (!article.value) {
    router.push('/404')
  }
})
</script>

<template>
  <div v-if="article" class="article-page">
    <div class="article-header">
      <router-link to="/" class="back-link">← Back to News</router-link>
      <h1>{{ article.title }}</h1>
      <div class="meta">
        <span>{{ article.date }}</span>
      </div>
    </div>

    <img :src="article.image" :alt="article.title" class="featured-image" />

    <div class="content">
      <p>{{ article.content }}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <AdBanner @click="openAd" />

    <BaseModal :isOpen="isModalOpen" @close="closeAd">
      <div class="modal-body">
        <h2>Special Promotion</h2>
        <img src="https://loremflickr.com/400/200/ad" alt="Ad" class="ad-image" />
        <p>Get 50% off on all Vue.js courses this week! Don't miss out on mastering the framework of the future.</p>
        <button class="cta-button" @click="closeAd">Shop Now</button>
      </div>
    </BaseModal>
  </div>
</template>

<style scoped>
.article-page {
  max-width: 800px;
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  margin-bottom: 1rem;
  font-weight: 500;
}

.article-header {
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
  line-height: 1.2;
}

.meta {
  color: var(--color-secondary);
  font-size: 0.9rem;
}

.featured-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 3rem;
}

.modal-body {
  text-align: center;
}

.ad-image {
  width: 100%;
  border-radius: 8px;
  margin: 1rem 0;
}

.cta-button {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}

.cta-button:hover {
  opacity: 0.9;
}
</style>
