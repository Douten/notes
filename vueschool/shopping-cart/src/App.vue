<template>
  <div id="app">
    <ProductList />
    <hr />
    <ShoppingCart />
    <!-- don't need to pass properties because of vuex -->
  </div>
</template>

<script>
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

import store from "@/store/index";

export default {
  name: "app",
  store, //store: store
  components: {
    ProductList,
    ShoppingCart
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
