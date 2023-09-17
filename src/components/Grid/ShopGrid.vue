<template>
    <section class="shop">
        <div class="container">
            <div class="shop_upper">
                <h1 class="shop_title">Shop The Latest</h1>
                <router-link to="/shop" class="shop_btn">View All</router-link>
            </div>
            <div class="shop_grid">
                <div class="shop_item" v-for="(product, idx) in getProducts" :key="idx">
                    <img :src="product.thumbnail" alt="" class="shop_item-img">
                    <router-link :to="/shop/ + product.id" class="shop_item-btn">Follow</router-link>
                    <h3 class="shop_item-title">{{ product.title }}</h3>
                    <span class="shop_item-price">$ {{ product.price }}</span>
                </div>
            </div>
            <div class="pagination">
                <button @click="changePage(currentPage - 1)" :disabled="currentPage == 12">back</button>
                <span class="span">Продуктов {{ currentPage }} / {{ totalPages }}</span>
                <button @click="changePage(currentPage + 1)" :disabled="currentPage == totalPages">next</button>

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

const currentPage = ref(12)
const totalPages = ref(100)

const changePage = async (newPage) => {
    currentPage.value = newPage
    await products.getProducts(limit = currentPage.value)
}
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 100px;
}

button {
    padding: 5px 15px;
    text-transform: uppercase;
    cursor: pointer;
}

.span {
    color: #000;
    font-size: 30px;
}
</style>