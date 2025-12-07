<template>
  <div class="dashboard">
    <h2 class="dashboard-title">Dashboard</h2>

    <div class="tabs">
      <button :class="{ active: tab === 'overview' }" @click="tab='overview'">
        Overview
      </button>
      <button :class="{ active: tab === 'activity' }" @click="tab='activity'">
        Activity
      </button>
    </div>

    <div class="tab-content">
      <KeepAlive :include="includeList" :exclude="excludeList" :max="2">
        <component :is="currentComponent" />
      </KeepAlive>
    </div>

    <div class="controls">
      <label>
        Include (comma-separated):
        <input v-model="includeStr" placeholder="OverviewTab,ActivityTab" />
      </label>
      <label>
        Exclude:
        <input v-model="excludeStr" placeholder="OverviewTab,ActivityTab" />
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import OverviewTab from '../../components/OverviewTab.vue'
import ActivityTab from '../../components/ActivityTab.vue'

const tab = ref('overview')
const includeStr = ref('OverviewTab')
const excludeStr = ref('')

const includeList = computed(() =>
    includeStr.value.split(',').map(s => s.trim()).filter(Boolean)
)
const excludeList = computed(() =>
    excludeStr.value.split(',').map(s => s.trim()).filter(Boolean)
)

const currentComponent = computed(() =>
    tab.value === 'overview' ? OverviewTab : ActivityTab
)
</script>

<style scoped>
.dashboard {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  font-family: Arial, sans-serif;
}

.dashboard-title {
  margin-bottom: 1rem;
  color: #42b983;
  text-align: center;
}

.tabs {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.tabs button {
  padding: 0.5rem 1.2rem;
  border: 1px solid #42b983;
  background-color: #fff;
  color: #42b983;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
}

.tabs button.active,
.tabs button:hover {
  background-color: #42b983;
  color: #fff;
}

.tab-content {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 6px;
  min-height: 120px;
  background-color: #f9f9f9;
}

.controls {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.controls label {
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  color: #555;
}

.controls input {
  margin-top: 0.25rem;
  padding: 0.4rem 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
