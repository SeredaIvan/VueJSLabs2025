<template>
  <table class="reports-table">
    <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <template v-for="item in items" :key="item.id">
      <slot name="row" :item="item">
        <tr>
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.summary }}</td>
        </tr>
      </slot>
    </template>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  items: { type: Array, default: () => [] }
})
</script>

<style scoped>
.reports-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  font-family: Arial, sans-serif;
}

.reports-table th,
.reports-table td {
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  text-align: left;
}

.reports-table th {
  background-color: #f3f4f6;
  color: #1f2937;
  font-weight: bold;
}

.reports-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.reports-table tr:hover {
  background-color: #e5f4ea;
}

.reports-table td strong {
  color: #42b983;
}
</style>
