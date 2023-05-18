<script>
import Jumbotron from './Jumbotron.vue';
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'


export default {
    components: {
        Jumbotron
    },
    data(){
        return {
            area: '',
            category: '',
        }
    },
    computed: {
        ...mapState(useCounterStore, ['meals', 'areas', 'categories']),
        ...mapWritableState(useCounterStore, ['query', 'cart'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchMenu', 'fetchArea', 'fetchCategory', 'addCart']),
        filterArea(event){ 
            if(event.target.value){
                this.query.a = this.area
                this.fetchMenu()
            }
        },
        filterCategory(event){ 
            if(event.target.value){
                this.query.c = this.category
                this.fetchMenu()
            }
        }
    },
    created() {
        this.fetchMenu()
        this.fetchArea()
        this.fetchCategory()
    }
}
</script>

<template>
    <Jumbotron />
    <h1>Menu Makanan</h1>
    <div style="display: flex; justify-content: center;">
        <select name="select" id="" @change="filterArea" v-model="area">
            <option value="" selected disabled>--Filter By Area--</option>
            <option v-for="a in areas" :key="a.strArea" :value="`${a.strArea}`">{{ a.strArea }}</option>
        </select>

        <select name="select" id="" @change="filterCategory" v-model="category">
            <option value="" selected disabled>--Filter By Category--</option>
            <option v-for="c in categories" :key="c.strCategory" :value="`${c.strCategory}`">{{ c.strCategory }}</option>
        </select>

        <form style="display: flex;">
            <input type="text" placeholder="search" v-model="query.s">
            <button type="submit" @click.prevent="fetchMenu">Search</button>
        </form>
    </div>

    <div class="container">
        <div class="card" v-for="meal in meals" :key="idMeal">
            <div class="card-image">
                <img :src="meal.strMealThumb" alt="makanan">
            </div>
            <h3>{{meal.strMeal}}</h3>
            <a  @click.prevent="addCart(meal)">Tambah ke Keranjang</a>
        </div>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
    text-decoration: underline;
    margin-top: 20px;
    font-size: 50px;
    margin-bottom: 30px;
}

.container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 100px;
}

form {
    padding: 0 20px;
    margin-left: 35px;
}

input {
    width: 280px;
    height: 30px;
    font-weight: 600;
    padding: 0 15px;
    border-radius: 5px;
    border: 1;
}

input:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

button{
    height: 30px;
    border: 0;
    background-color: rgb(70, 70, 240);
    cursor: pointer;
    color: white;
    border-radius: 5px;
}

button:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background-color: rgb(61, 61, 201);

}

.card {
    background-color: rgb(97, 235, 143);
    width: 350px;
    height: 420px;
    margin: 10px;
    border-radius: 15px;
}

.card:hover{
    background-color: #f56358;
    color: white;
    cursor: pointer;
    transition: 0.43s;
    transform: scale(1.03);
}

.card-image {
    background-size: cover;
    border-radius: 15px 15px 0 0 ;
}

img {
    width: 350px;
    height: 30vh; 
    border-radius: 15px 15px 0 0;
}

h3 {
    margin-top: 30px;
    padding: 0 15px;
    text-align: center;
    font-size: 25px;
}

a{
    background-color: black;
    color: white;
    padding: 15px 20px;
    display: block;
    text-align: center;
    text-decoration: none;
    margin: 20px 50px;
    border-radius: 20px;
}

select {
    cursor: pointer;
    width: 20%;
    padding: 0 20px;
    height: 30px;
    margin-left: 55px;
    border-radius: 10px;
    border: 1; 
}

select:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

a:hover {
    background-color: white;
    color: black;
    transition: 0.43s;
}
</style>