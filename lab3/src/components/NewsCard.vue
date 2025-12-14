<script setup>
defineProps({
  news: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div :class="$style.card">
    <img :src="news.image" :alt="news.title" :class="$style.image" />
    <div :class="$style.content">
      <span :class="$style.date">{{ news.date }}</span>
      <h3 :class="$style.title">{{ news.title }}</h3>
      <p :class="$style.description">{{ news.description }}</p>
      <router-link :to="{ name: 'article', params: { id: news.id } }" :class="$style.button">
        Read More
      </router-link>
    </div>
  </div>
</template>

<style module>
.card {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.date {
  font-size: 0.85rem;
  color: var(--color-secondary);
  margin-bottom: 0.5rem;
}

.title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--color-text);
}

.description {
  color: var(--color-text);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  flex-grow: 1;
}

.button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--color-primary);
  color: white;
  border-radius: 4px;
  text-align: center;
  font-weight: 500;
  width: fit-content;
}

.button:hover {
  background-color: #3aa876;
  opacity: 1;
  color: white;
}
</style>
