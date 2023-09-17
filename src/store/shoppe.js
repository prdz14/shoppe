import { defineStore } from "pinia";
import axios from 'axios';

export const useShoppe = defineStore({
  id: 'shoppe',
  state: () => ({
    products: null,
    // limit: 12,
  }),
  actions: {
    async getProducts( limit = 12 ) {
      try {
        const res = await axios.get(`https://dummyjson.com/products?limit=${limit}`)
        this.products = res.data.products;
      } catch (error) {
        console.log('Ошибка', error);
      }
    }
  },
  getters: {

  }
})