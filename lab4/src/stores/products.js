import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
    const products = ref([
        { id: 1, title: 'iPhone 15', price: 999 },
        { id: 2, title: 'MacBook Pro', price: 1999 },
        { id: 3, title: 'AirPods Pro', price: 249 },
        { id: 4, title: 'iPad Air', price: 599 }
    ])

    return { products }
})
