<template>
  <div class="component-tab">
    <h3>Overview</h3>
    <p>Mounted at {{ mountedAt }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mountedAt = ref('')

onMounted(() => {
  mountedAt.value = new Date().toISOString()
})
</script>

<style scoped>
.component-tab {
  font-family: Arial, sans-serif;
}
.component-tab h3 {
  color: #333;
}
.component-tab p {
  color: #666;
  font-size: 0.9rem;
}
</style>
