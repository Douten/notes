import shop from '@/api/shop';

export default {
  namespaced: true,
  state: {
    //{id, quantity}
    items: [],
    cartItemCount: 0,
    checkoutStatus: null
  },
  getters: {
    //function to make an array with cart item info
    cartProducts(state, getters, rootState) {
      //new array with
      return state.items.map(cartItem => {
        const product = rootState.products.items.find(
          product => product.id === cartItem.id
        );
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        };
      });
      //each item where state.products matches cart.item.id
      //return new object with title, price, quantity
    },
    cartTotal(state, getters) {
      let total = 0;
      // getters.cartProducts.forEach(product => {
      //   total += product.quantity * product.price;
      // });
      // return total;
      // simpler way using reduce
      return getters.cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    }
  },
  mutations: {
    //put object if the object is more complex
    pushProductToCart(state, productId) {
      state.items.push({
        id: productId,
        quantity: 1
      });
      state.cartItemCount++;
    },
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
      state.cartItemCount++;
    },
    setCheckoutStatus(state, status) {
      state.checkoutStatus = status;
    },
    emptyCart(state) {
      state.items = [];
      state.cartItemCount = 0;
    }
  },
  actions: {
    addProductToCart({ state, getters, commit, rootGetters }, product) {
      if (rootGetters['products/productIsInStock'](product)) {
        const cartItem = state.items.find(item => item.id === product.id);
        if (!cartItem) {
          //pushProductToCart
          commit('pushProductToCart', product.id);
        } else {
          //increment item quantity
          commit('incrementItemQuantity', cartItem);
        }
        commit('products/decrementProductInventory', product, { root: true });
      }
      //find cartItem
    },

    checkout({ state, commit }) {
      shop.buyProducts(
        state.items,
        () => {
          commit('emptyCart');
          commit('setCheckoutStatus', 'success');
        },
        () => {
          commit('setCheckoutStatus', 'fail');
        }
      );
    }
  }
};
