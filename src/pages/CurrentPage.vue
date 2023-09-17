<template>
    <div class="container">
        <div class="current">
            <div class="current_imgs">
                <div class="current_imgs-side">
                    <img :src="getCar.images[idx]" alt="" class="current_imgs-side-img"
                        v-for="(images, idx) in getCar.images" :key="idx">
                </div>
                <swiper :slides-per-view="1" @swiper="onSwiper" @slideChange="onSlideChange" :modules="modules" navigation
                    :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" :autoplay="true"
                    :delay="swiperOptions.delay" class="current_imgs-swiper">
                    <swiper-slide class="current_imgs-swiper-img" v-for="(images, idx) in getCar.images" :key="idx">
                        <img :src="getCar.images[idx]" alt="" class="current_imgs-swiper-img-img">
                    </swiper-slide>
                </swiper>
            </div>
            <div class="current_info">
                <div class="current_info-title">{{ getCar.title }}</div>
                <span class="current_info-price">${{ getCar.price }},00</span>
                <div class="current_info-rate">
                    <img src="@/assets/img/star.png" alt="" v-if="getCar.rating > 1">
                    <img src="@/assets/img/star.png" alt="" v-if="getCar.rating > 2">
                    <img src="@/assets/img/star.png" alt="" v-if="getCar.rating > 3">
                    <img src="@/assets/img/star.png" alt="" v-if="getCar.rating > 4">
                    <img src="@/assets/img/star.png" alt="" v-if="getCar.rating > 4.5">
                </div>
                <p class="current_info-txt">{{ getCar.description }} Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Architecto animi explicabo perspiciatis. Repudiandae corrupti voluptatem consectetur magnam,
                    veniam incidunt ad laudantium asperiores ipsam quis dicta sapiente impedit aspernatur illum officia esse
                    ipsum in, deleniti a. Repellendus, eum libero at eligendi deleniti maiores deserunt officiis assumenda,
                    magni corrupti consequuntur? Ab, est?</p>

                <div class="current_info-down">
                    <p class="current_info-down-subtitle">SKU: <span>{{ getCar.stock }}</span></p>
                    <p class="current_info-down-subtitle">Categories: <span>{{ getCar.category }}</span></p>
                </div>
                <router-link to="/" class="current_back">Back</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useShoppe } from "@/store/shoppe";
import { useRoute } from "vue-router";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const route = useRoute()
const products = useShoppe()
products.getProducts()
const getProducts = computed(() => products.products)

const currentId = route.params.id
const getCar = computed(() => {
    return getProducts.value.find((item) => item.id == currentId)
})

const modules = ref([Navigation, Pagination, Scrollbar, Autoplay])
const swiperOptions = ref({
    delay: 2000
})
</script>

<style lang="scss" scoped>
.current {
    display: flex;
    justify-content: center;
    gap: 65px;
    margin-top: 90px;
    align-items: center;
    margin-bottom: 20px;

    &_imgs {
        width: 60%;
        height: 600px;
        display: flex;
        justify-content: center;
        gap: 40px;

        &-swiper {
            display: flex;

            &-img {
                height: 600px;
                width: 540px;
                object-fit: cover;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 8px;

                &-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }

        &-side {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 20px;

            &-img {
                width: 120px;
                height: 120px;
                object-fit: cover;
                border-radius: 8px;
            }
        }
    }

    &_info {
        width: 500px;
        position: relative;
        height: 600px;

        &-title {
            color: #000;
            font-size: 26px;
            font-weight: 400;
            line-height: 35px;
            margin-bottom: 25px;
        }

        &-price {
            color: #A18A68;
            font-size: 20px;
            font-weight: 500;
            line-height: 26px;
            text-transform: capitalize;
        }

        &-rate {
            display: flex;
            gap: 5px;
            margin: 70px 0 25px;
        }

        &-txt {
            color: #707070;
            font-size: 16px;
            font-weight: 400;
            display: -moz-box;
            -moz-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            line-clamp: 3;
            box-orient: vertical;
            overflow: hidden;
            width: 70%;
        }

        &-down {
            display: flex;
            flex-direction: column;
            margin-top: 150px;

            &-subtitle {
                color: #000;
                font-size: 16px;
                font-weight: 400;
                line-height: 27px;

                & span {
                    color: #707070;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 27px;
                    text-transform: capitalize;
                }
            }
        }
    }

    &_back {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 6px 22px;
        background: #fff;
        border: 1px solid #A18A68;
        border-radius: 15px;
        font-size: 16px;
        font-weight: 400;
        line-height: 27px;
        color: #A18A68;
    }
}
</style>