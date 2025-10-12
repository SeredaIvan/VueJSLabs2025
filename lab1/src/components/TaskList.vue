<script setup>
const props = defineProps({
  tasks: {
    type: Map,
    required: true,
  },
});
</script>
<template>
  <ul>
    <li v-for="task of Array.from(props.tasks.values())" :key="task.id">
      {{ task.title }} - {{ task.status }}
    </li>
  </ul>
</template>
<style scoped></style>
