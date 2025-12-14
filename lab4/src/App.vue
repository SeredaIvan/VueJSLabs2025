<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import ProductsView from './views/ProductsView.vue'
import CartView from './views/CartView.vue'
import ProfileView from './views/ProfileView.vue'
import { useCartStore } from './stores/cart'

const { t } = useI18n()
const cartStore = useCartStore()

const currentTab = ref('products')

const tabs = computed(() => ({
  products: t('titles.products'),
  cart: `${t('titles.cart')} (${cartStore.totalCount})`,
  profile: t('titles.profile')
}))
</script>

<template>
  <div class="container">
    <header>
      <div class="logo-area">
        <h1>Vue Shop</h1>
      </div>
      
      <nav>
        <button 
          v-for="(label, key) in tabs" 
          :key="key"
          :class="['nav-btn', { active: currentTab === key }]"
          @click="currentTab = key"
        >
          {{ label }}
        </button>
      </nav>
      
      <div class="actions">
        <LanguageSwitcher />
      </div>
    </header>

    <main>
      <KeepAlive>
        <component :is="currentTab === 'products' ? ProductsView : currentTab === 'cart' ? CartView : ProfileView" />
      </KeepAlive>
    </main>
  </div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--border-color);
  margin-bottom: 2rem;
}

h1 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--primary-color);
}

nav {
  display: flex;
  gap: 1rem;
}

.nav-btn {
  background: transparent;
  color: var(--text-light);
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
}

.nav-btn:hover {
  background-color: #f0fdf4;
  color: var(--primary-color);
}

.nav-btn.active {
  background-color: var(--primary-color);
  color: white;
}
</style>
