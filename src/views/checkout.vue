<template>
  <div class="container">
    <div class="main-container">
      <div class="form-panel">
        <CheckOutForm @after-submit="handleAfterSubmit"/>
      </div>
      <div class="cart-panel">
        <ShoppingCart :initial-products="initialProducts"/>
      </div>
    </div>
  </div>
</template>


<script>
import CheckOutForm from './../components/CheckOutForm'
import ShoppingCart from './../components/ShoppingCart'

const dummyData = {
  products: [
    {
      id: 1,
      img: require('./../assets/img/product1.jpeg'),
      name: '破壞補丁修身牛仔褲',
      price: 3999,
      totalPrice: 3999,
      amount: 1
    },
    {
      id: 2,
      img: require('./../assets/img/product2.jpeg'),
      name: '刷色直筒牛仔褲',
      price: 1299,
      totalPrice: 1299,
      amount: 1
    }
  ]
}


export default {
  data() {
    return{
      initialProducts:[]
    }
    
  },
  components:{
    CheckOutForm,
    ShoppingCart
  },
  created(){
    this.fetchProducts()
  },
  methods:{
    fetchProducts (){
      this.initialProducts = dummyData.products
    },
  
    handleAfterSubmit (input) {
      const inputData = {
        salutation: input.salutation,
        address: input.address,
        cardholderName: input.cardholderName,
        city: input.city,
        deliveryMethod: input.deliveryMethod,
        email: input.email,
        expirationDate: input.expirationDate,
        name: input.name,
        tel: input.tel
      }
      alert(
        `The order is successful submitted. Info: ${JSON.stringify(inputData)}`
      )
      location.reload()
  }
  }
}
</script>
