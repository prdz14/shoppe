<template>
    <section class="shop">
        <div class="container">
            <h1 class="shop_title">Shop The Latest</h1>
            <div class="shop_filters">
                <button class="shop_filters-btn" v-for="(btn, idx) in btns" :key="idx" @click="sort()">{{ btn.name
                }}</button>
            </div>
            <div class="shop_grid">
                <div class="shop_item" v-for="(product, idx) in getProducts" :key="idx">
                    <img :src="product.thumbnail" alt="" class="shop_item-img">
                    <h3 class="shop_item-title">{{ product.title }}</h3>
                    <span class="shop_item-price">$ {{ product.price }}, stock: {{ product.stock }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useShoppe } from "@/store/shoppe";

const products = useShoppe()

products.getProducts()

const getProducts = computed(() => products.products)

const btns = ref([
    { name: 'Name A-Z', type: 'title' },
    { name: 'Stock', type: 'stock' },
    { name: 'Price(low-high)', type: 'price' },
])

// productsSort = ref(() => {
//     if (products.products != null) {
//         return products.products.sort((prev, next) => {
//             if (prev[products.products.title] < next[products.products.title]) {
//                 return -1
//             }
//         })
//     }
// })
</script>

<style lang="scss" scoped></style>