import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      meals: [],
      areas: [],
      categories: [],
      cart: [],
      incart: [],
      query: {
        c: '',
        a: '',
        s: ''
      },
    }
  },
  getters: {},
  actions: {
    async fetchMenu(){
      try {
        let filter = this.query
        if (filter.s) {
          let {data} = await axios({
            method: 'get',
            url: `https://themealdb.com/api/json/v1/1/search.php?s=${filter.s}`
          }) 
          filter.s = ''
          this.meals = data.meals
        }
        if (filter.a){
          let {data} = await axios({
            method: 'get',
            url: `https://themealdb.com/api/json/v1/1/filter.php?a=${filter.a}`
          }) 
          filter.a = ''
          this.meals = data.meals
        }
        if (filter.c){
          let {data} = await axios({
            method: 'get',
            url: `https://themealdb.com/api/json/v1/1/filter.php?c=${filter.c}`
          }) 
          filter.c = ''
          this.meals = data.meals
        }

      } catch (error) {
        console.log(error);
      }
    },
    async fetchArea(){
      try {
        let {data} = await axios({
          method: 'get',
          url: 'https://themealdb.com/api/json/v1/1/list.php?a=list'
        })
        this.areas = data.meals
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCategory(){
      try {
        let {data} = await axios({
          method: 'get',
          url: 'https://themealdb.com/api/json/v1/1/list.php?c=list'
        })
        this.categories = data.meals
      } catch (error) {
        console.log(error);
      }
    },
    async addCart(meal){
      try {
        this.cart.push(meal)
        this.router.push('/cart')
        console.log(this.cart, "<<");
      } catch (error) {
        console.log(error);
      }
    },
    async fecthCart(){
      try {
        this.incart = this.cart
      } catch (error) {
        console.log(error);
      }
    }
  }
})
