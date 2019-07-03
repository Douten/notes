import shop from '@/api/shop';

export default {
  namespaced: true,
  state: {
    // = data
    items: []
  },
  getters: {
    // = computed properties
    availableProducts(state, getters) {
      return state.items.filter(product => product.inventory > 0);
      //as computed properties, track their own dependencies and updates when it changes
    },
    productIsInStock() {
      return product => {
        //can also pass id as an arguement and grab product from the state
        return product.inventory > 0;
      };
    },
    cartItemCount(state) {
      return state.cartItemCount;
    }
  },
  mutations: {
    setProducts(state, products) {
      //products is called a payload
      //update products array
      //just update a piece of state.
      state.items = products;
    },
    decrementProductInventory(state, product) {
      product.inventory--;
    }
  },
  actions: {
    // = methods
    fetchProducts({ commit }) {
      //ES6 Destructuring. only calling commit from context object. (context.commit)
      //context object exposes the same methods and properties as the store object
      //make the call
      //responsible for ajax call
      //never update state.

      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          //no need for context.commit(..)
          commit('setProducts', products);
          resolve();
        });
      });

      // responsible for logic of when a mutation should be fired.
      // never change state directly in action
      // addToCart(context, product) {
      //   if (product.inventory > 0) {
      //     context.commit('pushProductToCart', product)
      //   } else {
      //     // show out of stock
      //   }
      // }
    }
  }
};
