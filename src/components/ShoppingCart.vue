<template>
  <div>
    <div class="products-container">
      <div class="cart-title">購物籃</div>
      <div v-for="product in products" :key="product.id" class="product">
        <img class="product-img" :src="product.img" />
        <div class="product-desc">
          <div class="inv-des">{{ product.name }}</div>
          <div class="inv-amt">
            <span
              class="sign minus-sign"
              @click.stop.prevent="minusAmount(product)"
            ></span>
            <span class="product-number">{{ product.amount }}</span>
            <span
              class="sign plus-sign"
              @click.stop.prevent="addAmount(product)"
            ></span>
          </div>
          <div class="desc-price">
            $<span class="product-price">{{ product.totalPrice }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="checkout-info-container">
      <div class="delivery-fee">
        <div class="fee-desc">運費</div>
        <div class="feel-total">
          {{ deliveryMethod === "1" ? "免費" : 500 }}
        </div>
      </div>

      <div class="cart-total">
        <div class="total">小計</div>
        <div class="total-fee">
          ＄
          <span>
            {{ deliveryMethod === "1" ? totalAmount : totalAmount + 500 }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialProducts: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      products: [],
      totalAmount: 5298,
      deliveryMethod: '1'
    }
  },
  created(){
    this.fetchProducts()
  }
  ,
  mounted () {
    this.$root.$on('deliveryMethod', (data) => {
      this.deliveryMethod = data
    })
  },
  
  
  methods: {
    addAmount (product) {
      this.totalAmount += product.price
      product.amount++
      product.totalPrice += product.price
    },
    minusAmount (product) {
      if (product.amount === 0) return
      this.totalAmount -= product.price
      product.amount--
      product.totalPrice -= product.price
    },
    
    fetchProducts () {
      this.products = this.initialProducts
    }
  }
};
</script>