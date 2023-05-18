<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <Navbar />
  <body>
    <RouterView></RouterView>
  </body>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

body {
  box-sizing: border-box;
  width: 100%;
}
</style>


