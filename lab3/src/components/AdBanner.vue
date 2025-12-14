<script setup>
defineProps({
  position: {
    type: String,
    default: 'header'
  }
})

const emit = defineEmits(['click'])
</script>

<template>
  <div class="ad-banner" @click="emit('click')">
    <div class="ad-content">
      <span class="ad-label">Advertisement</span>
      <h3>Special Offer!</h3>
      <p>Click here to learn more about Vue mastery.</p>
    </div>
  </div>
</template>

<style scoped>
.ad-banner {
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  padding: 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  margin: 2rem 0;
  text-align: center;
  transition: transform 0.2s;
  color: #333;
}

.ad-banner:hover {
  transform: scale(1.02);
}

.ad-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: rgba(255, 255, 255, 0.5);
  padding: 2px 6px;
  border-radius: 4px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1.5rem;
}
</style>
