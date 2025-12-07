<template>
  <div class="auth-wrap">
    <h2>{{ title }}</h2>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({ title: String });
</script>

<style scoped>
.auth-wrap {
  max-width: 400px;
  margin: 3rem auto;
  padding: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: center;
}
</style>
