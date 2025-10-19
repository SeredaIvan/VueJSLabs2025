<script setup>
const emit = defineEmits(['defineAdd','defineDelete','defineEdit'])

function handleAddClick() {
  emit('defineAdd')
}
function handleToggleDelete() {
  emit('defineDelete')
}
function handleToggleEdit() {
  emit('defineEdit')
}
</script>

<template>
  <div class="nav-buttons">
    <button @click="handleAddClick">Додати</button>
    <button>Перемкнути статус</button>
    <button @click="handleToggleDelete">Видалити</button>
    <button>Редагувати</button>
  </div>
</template>

<style scoped>
.nav-buttons {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}
</style>
