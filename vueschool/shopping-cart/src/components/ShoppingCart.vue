<template>
  <div id="app">
    <h1>
      <span v-if="cartItemCount > 1">Items</span>
      <span v-else-if="cartItemCount == 1">Item</span>
      <span v-else>Nothing</span>
      in Cart
    </h1>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >{{ product.title }} - {{ product.price | currency }} - {{product.quantity}}</li>
    </ul>
    <p>Total: {{total | currency}}</p>
    <button :disabled="cartItemCount < 1" @click="checkout">Check Out</button>
    <p v-if="checkoutStatus">{{checkoutStatus}}</p>
  </div>
</template>

<script scoped>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  // computed: {
  //   products() {
  //     return this.$store.getters.cartProducts;
  //   },
  //   total() {
  //     return this.$store.getters.cartTotal;
  //   },
  //   cartItemCount() {
  //     return this.$store.getters.cartItemCount;
  //   }
  // }
  computed: {
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotal"
    }),
    ...mapState("cart", {
      checkoutStatus: state => state.checkoutStatus,
      cartItemCount: "cartItemCount"
    })
  },
  methods: {
    ...mapActions("cart", ["checkout"]) //if computed name and state action name is the same and won't change in forseeable future
  }
};
</script>

<style>
</style>
