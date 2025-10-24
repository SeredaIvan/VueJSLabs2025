<script setup>
import { useTaskConsumer } from '../provider/useTaskConsumer';
const { total, active, completed } = useTaskConsumer();
</script>

<template>
  <div class="calculating">
    <div class="counter total">
      <span class="label">Всього:</span>
      <span class="value">{{ total }}</span>
    </div>
    <div class="counter active">
      <span class="label">Активні:</span>
      <span class="value">{{ active }}</span>
    </div>
    <div class="counter completed">
      <span class="label">Завершені:</span>
      <span class="value">{{ completed }}</span>
    </div>
  </div>
</template>

<style scoped>
.calculating {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1e1e1e;
  padding: 6px 10px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  min-width: 100px;
  transition: transform 0.2s;
}

.counter:hover {
  transform: translateY(-3px);
}

.label {
  font-size: 0.85rem;
  color: #aaa;
  margin-bottom: 4px;
}

.value {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
}

.counter.total {
  border-left: 5px solid #007bff;
}

.counter.active {
  border-left: 5px solid #ffb74d;
}

.counter.completed {
  border-left: 5px solid #4caf50;
}
</style>
