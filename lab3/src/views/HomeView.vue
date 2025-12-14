<script setup>
import { ref } from 'vue'
import { newsList } from '../data/news'
import NewsCard from '../components/NewsCard.vue'

const news = ref(newsList)
</script>

<template>
  <div class="home">
    <div class="hero">
      <h1>Latest News</h1>
      <p>Stay updated with the latest in tech.</p>
    </div>
    
    <div class="news-grid">
      <NewsCard 
        v-for="item in news" 
        :key="item.id" 
        :news="item" 
      />
    </div>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
</style>
