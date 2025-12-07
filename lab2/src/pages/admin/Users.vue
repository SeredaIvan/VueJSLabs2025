<template>
  <div class="users">
    <h2>Users</h2>
    <ul class="users-list">
      <li v-for="u in users" :key="u.id">
        <router-link :to="`/admin/user/${u.id}`">{{ u.name }} ({{ u.email }})</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { apiGetUsers } from '../../services/fakeApi';

const users = ref([]);

onMounted(async () => {
  users.value = await apiGetUsers();
});
</script>

<style scoped>
.users {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #eee;
}

.users h2 {
  margin-bottom: 1rem;
  color: #42b983;
  text-align: center;
}

.users-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.users-list li {
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #fff;
  transition: background 0.2s;
}

.users-list li:hover {
  background-color: #e5f4ea;
}

.users-list a {
  color: #1f2937;
  text-decoration: none;
  font-weight: 500;
}

.users-list a.router-link-active {
  color: #42b983;
  font-weight: bold;
  text-decoration: underline;
}
</style>
