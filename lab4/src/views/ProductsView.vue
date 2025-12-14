<script setup>
import { useProductsStore } from '../stores/products'
import { useCartStore } from '../stores/cart'
import { useI18n } from 'vue-i18n'

const productsStore = useProductsStore()
const cartStore = useCartStore()
const { t } = useI18n()

function addToCart(product) {
  cartStore.add(product)
}
</script>

<template>
  <div class="products-view">
    <h2>{{ t('titles.products') }}</h2>
    <div class="products-grid">
      <div 
        v-for="product in productsStore.products" 
        :key="product.id" 
        class="product-card"
      >
        <h3>{{ product.title }}</h3>
        <p class="price">${{ product.price }}</p>
        <button class="add-btn" @click="addToCart(product)">
          {{ t('buttons.add_to_cart') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.product-card {
  background: white;
  border: 1px solid var(--border-color);
  padding: 1.5rem;
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.product-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: var(--secondary-color);
}

.price {
  font-size: 1.1rem;
  color: var(--text-light);
  margin-bottom: 1.5rem;
}

.add-btn {
  background-color: var(--primary-color);
  color: white;
  width: 100%;
}

.add-btn:hover {
  background-color: var(--primary-hover);
}
</style>
