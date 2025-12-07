<template>
  <div class="reports">
    <h2>Reports</h2>
    <ReportsTable :items="items">
      <template #row="{ item }">
        <tr>
          <td>{{ item.id }}</td>
          <td><strong>{{ item.title }}</strong></td>
          <td>{{ item.summary }}</td>
        </tr>
      </template>
    </ReportsTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ReportsTable from './ReportsTable.vue'

const items = ref([])

onMounted(() => {
  items.value = [
    { id: 1, title: 'Sales', summary: 'Monthly sales overview' },
    { id: 2, title: 'Users', summary: 'Active users' },
    { id: 3, title: 'Revenue', summary: 'Quarterly revenue' },
  ]
})
</script>

<style scoped>
.reports {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  border: 1px solid #ddd;
}

.reports h2 {
  margin-bottom: 1.5rem;
  color: #42b983;
  text-align: center;
  font-size: 1.5rem;
}
</style>
