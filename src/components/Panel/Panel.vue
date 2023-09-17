<template>
    <section class="panel">
        <div class="container">
            <swiper :space-between="0" :slides-per-view="1" :modules="modules" @swiper="onSwiper"
                @slideChange="onSlideChange" navigation :pagination="{ clickable: true }" :scrollbar="{ draggable: true }"
                :autoplay="true" :delay="swiperOptions.delay">

                <swiper-slide v-for=" ( img, idx ) in db " :key="idx" class=" panel_box">
                    <img :src="img.img" alt="" class="panel_img">
                    <h2 class="panel_box-title">Phone</h2>
                    <p class="panel_box-price">$ 100</p>
                    <router-link to="/shop" class="panel_box-btn">View Product</router-link>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script setup>
import db from '@/db.js'
import { ref, computed, } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useShoppe } from "@/store/shoppe";

const products = useShoppe()

products.getProducts()

const getProducts = computed(() => products.products)

const modules = ref([Navigation, Pagination, Scrollbar, Autoplay])
const swiperOptions = ref({
    delay: 2000,
})
</script>

<style lang="scss" scoped></style>