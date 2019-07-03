<template>
  <div>
    <h1>Product List</h1>
    <img
      v-if="loading"
      src="https://media.tenor.com/images/d6cd5151c04765d1992edfde14483068/tenor.gif"
    />
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} - {{product.inventory}}
        <button
          :disabled="!productIsInStock(product)"
          @click="addProductToCart(product)"
        >Add Product To Cart</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      loading: false
      //productIndex = 23 //see  below
    };
  },
  methods: {
    ...mapActions({
      fetchProducts: "products/fetchProducts",
      addProductToCart: "cart/addProductToCart"
    })
    // addProductToCart(product) {
    //   this.$store.dispatch("addProductToCart", product);
    // }
  },
  // computed: mapState({
  //   //if using array mapState(['products]) the computed proptery and state property has to be the same name
  //   //use object for different computed and state name
  //   //could be allProducts: "products"
  //   //can also use functions
  //   products: state => state.products //state will be pass as first argument of the function
  //   //for example getting first product
  //   // firstProduct: state => state.products[0]
  //   // if using a variable with this then a full function has to be used
  //   // specificProduct(state) {
  //   //   return state.products[this.productIndex];
  //   // }
  // }),
  //use object spread operator to easily create new objs
  computed: {
    ...mapState({
      products: state => state.products.items
    }),
    ...mapGetters("products", {
      productIsInStock: "productIsInStock"
    })
  },

  // computed: {
  //   products() {
  //     return this.$store.state.products;
  //   },
  //   productIsInStock() {
  //     return this.$store.getters.productIsInStock;
  //   }
  // },
  created() {
    this.loading = true;
    // this.$store.dispatch("fetchProducts").then(() => (this.loading = false)); //similar to commit, but for actions. second argument is payload i.e.
    this.fetchProducts().then(() => (this.loading = false));
  }
};
</script>
<style scoped>
</style>
