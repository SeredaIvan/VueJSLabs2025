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
    <button @click="handleAddClick" class="btn add">Додати</button>

    <button
      @click="handleToggleDelete"
      class="btn delete"
      :class="{ active: props.activeDelete }"
    >
      Видалити
    </button>

    <button
      @click="handleToggleEdit"
      class="btn edit"
      :class="{ active: props.activeEdit }"
    >
      Редагувати
    </button>
  </div>
</template>

<style scoped>
.nav-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.btn {
  padding: 10px 20px;
  border-radius: 12px;
  border: 1px solid #555;
  background: #1e1e1e;
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.25);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.35);
  background: #2a2a2a;
}

.btn.add {
  border-left: 5px solid #007bff;
}

.btn.delete {
  border-left: 5px solid #f44336;
}

.btn.edit {
  border-left: 5px solid #ffb74d;
}

.btn.active {
  transform: scale(0.97);
  box-shadow: 0 0 8px rgba(255,255,255,0.5);
  background: #333;
}
</style>
