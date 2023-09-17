<template>
  <nav class="nav">
    <div class="container">
      <router-link to="/">
        <img src="@/assets/img/Shoppe.svg" alt="" class="logo">
      </router-link>
      <ul class="nav_list" v-bind:class="{ active: active }">
        <router-link to="/shop" class="nav_link">
          Shop
        </router-link>
        <router-link to="/blog" class="nav_link">
          Blog
        </router-link>
      </ul>
      <div class="burger" @click="active = !active">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue';

const active = ref(false)

</script>

<style lang="scss" scoped>
.burger {
  position: relative;
  width: 40px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  display: none;
  z-index: 99;
}

.burger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: black;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.burger span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}
</style>