<script setup>
const props = defineProps({
  activeDelete: Boolean,
  activeEdit: Boolean,
});

const emit = defineEmits(["defineAdd", "defineDelete", "defineEdit"]);

function handleAddClick() {
  emit("defineAdd");
}
function handleToggleDelete() {
  emit("defineDelete");
}
function handleToggleEdit() {
  emit("defineEdit");
}
</script>

<template>
  <div class="nav-buttons">
    <button @click="handleAddClick" class="btn">Додати</button>

    <button
      @click="handleToggleDelete"
      class="btn"
      :class="{ active: props.activeDelete }"
    >
      Видалити
    </button>

    <button
      @click="handleToggleEdit"
      class="btn"
      :class="{ active: props.activeEdit }"
    >
      Редагувати
    </button>
  </div>
</template>

<style scoped>
.nav-buttons {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.btn {
  padding: 8px 16px;
  border: 1px solid #ccc;
  background: #242424;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}

.btn:hover {
  background: #f1f1f1;
  color:#242424;
}

.btn.active {
  background: #3b82f6; 
  color: white;
  border-color: #3b82f6;
  transform: scale(0.97);
  box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
}
</style>
