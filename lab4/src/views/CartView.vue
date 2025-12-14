<script setup>
import { useCartStore } from '../stores/cart'
import { useI18n } from 'vue-i18n'

const cartStore = useCartStore()
const { t } = useI18n()
</script>

<template>
  <div class="cart-view">
    <h2>{{ t('titles.cart') }}</h2>
    
    <div v-if="cartStore.items.length === 0" class="empty-state">
      {{ t('messages.cart_empty') }}
    </div>
    
    <div v-else>
      <ul class="cart-list">
        <li v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <div class="item-info">
            <span class="item-title">{{ item.title }}</span>
            <span class="item-qty">x{{ item.qty }}</span>
          </div>
          <div class="item-actions">
            <span class="item-price">${{ item.price * item.qty }}</span>
            <button class="remove-btn" @click="cartStore.remove(item.id)">
              {{ t('buttons.remove') }}
            </button>
          </div>
        </li>
      </ul>
      
      <div class="cart-summary">
        <div class="summary-row">
          <span>{{ t('messages.items_count') }}:</span>
          <strong>{{ cartStore.totalCount }}</strong>
        </div>
        <div class="summary-row total">
          <span>{{ t('messages.total') }}:</span>
          <strong>{{ t('messages.total') === 'Total' ? '$' : '' }}{{ cartStore.totalPrice }}{{ t('messages.total') !== 'Total' ? ' грн' : '' }}</strong>
        </div>
        
        <button class="clear-btn" @click="cartStore.clear">
          {{ t('buttons.clear_cart') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.empty-state {
  text-align: center;
  padding: 3rem;
  color: var(--text-light);
  font-style: italic;
}

.cart-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  background: white;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.cart-item:last-child {
  border-bottom: none;
}

.item-info {
  display: flex;
  gap: 1rem;
  align-items: baseline;
}

.item-title {
  font-weight: 500;
  color: var(--secondary-color);
}

.item-qty {
  color: var(--text-light);
  font-size: 0.9em;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.item-price {
  font-weight: 600;
  min-width: 60px;
  text-align: right;
}

.remove-btn {
  background-color: transparent;
  color: var(--danger-color);
  padding: 0.4em 0.8em;
  font-size: 0.9em;
  border: 1px solid var(--danger-color);
}

.remove-btn:hover {
  background-color: #fef2f2;
}

.cart-summary {
  background-color: #f8fafc;
  padding: 1.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--border-color);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.summary-row.total {
  font-size: 1.25rem;
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  color: var(--secondary-color);
}

.clear-btn {
  width: 100%;
  background-color: var(--danger-color);
  color: white;
}

.clear-btn:hover {
  background-color: var(--danger-hover);
}
</style>
