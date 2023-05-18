<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
    computed: {
        ...mapState(useCounterStore, ['incart'])
    },
    methods: {
        ...mapActions(useCounterStore, ["fecthCart"]),
        checkout(){
          Swal.fire({
          icon: 'success',
          title: 'Pesanan akan diproses',
          showConfirmButton: false,
          timer: 2000
        })
        }
    },
    created(){
        this.fecthCart()
    }
}
</script>

<template>
    <div class="container">
        <div class="card" v-for="item in incart" :key="item.idMeal">
            <div class="card-image">
                <img :src="item.strMealThumb" alt="makanan">
            </div>
            <h3>{{item.strMeal}}</h3>
        </div>
    </div>
    
    <a href="" v-if="incart.length > 0" @click.prevent="checkout">Checkout</a>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
}

.card {
    background-color: rgb(97, 235, 143);
    width: 350px;
    height: 350px;
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

a:hover {
    background-color: #f56358;
    color: black;
    transition: 0.43s;
    border-width: 2px;
    border-color: black;
}

</style>