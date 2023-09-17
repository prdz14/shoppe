<template>
    <main class="main">
        <section class="blog">
            <div class="container">
                <h1 class="blog_title">Blog</h1>
                <div class="blog_items">
                    <div class="blog_item" v-for="(product, index) in getProducts" :key="index">
                        <img :src="product.thumbnail" alt="" class="blog_item-img">
                        <h3 class="blog_item-title">{{ product.title }}</h3>
                        <p class="blog_item-txt">{{ product.description }} Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Sequi excepturi labore aut est hic nisi minus sunt aliquam, veniam in. </p>
                        <router-link :to="/shop/ + product.id" class="blog_item-btn">Read More</router-link>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useShoppe } from "@/store/shoppe";

const products = useShoppe()

products.getProducts()

const getProducts = computed(() => products.products)
</script>

<style lang="scss" scoped></style>