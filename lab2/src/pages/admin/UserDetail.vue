<template>
  <div class="user-detail">
    <h2>User Detail</h2>

    <div v-if="loading">Завантаження...</div>
    <div v-else-if="user">
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>
    <div v-else>
      <p>Користувача не знайдено.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { apiGetUser } from '@/services/fakeApi'

const route = useRoute()
const user = ref(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const id = route.params.id
    if (!id) throw new Error('No user id')
    user.value = await apiGetUser(id)
  } catch (err) {
    user.value = null
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.user-detail {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.user-detail h2 {
  margin-bottom: 1rem;
  color: #42b983;
}

.user-detail p {
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}
</style>
