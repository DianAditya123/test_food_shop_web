<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';


export default {
computed: {
    ...mapState(useCounterStore, ['meals'])
},
methods: {
    ...mapActions(useCounterStore, ['fetchMenu'])
},
created(){
    this.fetchMenu()
}
}
</script>

<template>
    <body>
        <div class="container">
            <img src="https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg" alt="meals">  
        </div>
        <div class="container">
            <img src="https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg" alt="meals">  
        </div>
        <div class="container">
            <img src="https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg" alt="meals">  
        </div>
    </body>
</template>

<style scoped>
* {
    box-sizing: border-box;
}

body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.container {
    padding: 100px 0 0;
}

img {
    margin: auto;
    width: 90%;
    height: 450px;
    border-radius: 10px;
}

img:hover {
    box-shadow: 5px 5px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: 0.43s;
    transform: scale(1.03);
}
</style>