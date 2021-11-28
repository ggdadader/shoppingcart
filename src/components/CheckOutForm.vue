<template>
  <div>
    <div class="form-content">
      <div class="form-panel-title">結帳</div>

      <div class="stepper">
        <div class="step" :class="{ active: step === 1, checked: step === 2 }">
          <div class="circle-container"></div>
          <div class="step-desc">寄送地址</div>
          <span class="step-connect-line"></span>
        </div>
        <div class="step" :class="{ active: step === 2, checked: step === 3 }">
          <div class="circle-container"></div>
          <div class="step-desc">運送方式</div>
          <span class="step-connect-line connect-line-two"></span>
        </div>
        <div class="step" :class="{ active: step === 3 }">
          <div class="circle-container"></div>
          <div class="step-desc">付款資訊</div>
        </div>
      </div>

      <form @submit.stop.prevent="handleSubmit2" class="a-form" id="a-form">
        <div class="part address-part" v-if="step === 1" >
          <div class="part-title">寄送地址</div>
          <div class="form-row form-row-salutation">
            <label for="salutation-select" class="salutation-label">稱謂</label>
            <div class="salutation-select-wrapper">
              <select
                v-model="input.salutationId"
                name="salutation-select"
                id="salutation-select"
                
              >
                <option value="1" selected>先生</option>
                <option value="2">小姐</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <label for="name-input" class="name-label">姓名</label>
            <input
              v-model="input.name"
              type="text"
              id="name-input"
              class="name-input"
              placeholder="請輸入姓名"
            />
          </div>
          <div class="form-row">
            <label for="phone-number-input" class="phone-number-label"
              >電話</label
            >
            <input
              v-model="input.tel"
              type="text"
              id="phone-number-input"
              class="phone-number-input"
              placeholder="請輸入行動電話"
            />
          </div>
          <div class="form-row">
            <label for="email-input" class="email-label">Email</label>
            <input
              v-model="input.email"
              type="text"
              id="email-input"
              class="email-input"
              placeholder="請輸入電子郵件"
            />
          </div>
          <div class="form-row form-row-salutation">
            <label for="city-select" class="city-label">縣市</label>
            <div class="city-select-wrapper">
              <select v-model="input.city" name="city-select" id="city-select" placeholder="請選擇縣市">
                <option value="1" selected>請選擇縣市</option>
                <option value="16" >台北市</option>
                <option value="2" >台中市</option>
                <option value="3" >台南市</option>
                <option value="4" >高雄市</option>
                <option value="5" >桃園市</option>
                <option value="6" >新竹市</option>
                <option value="7" >苗栗縣</option>
                <option value="8" >彰化縣</option>
                <option value="9" >台東縣</option>
                <option value="10" >南投縣</option>
                <option value="11" >花蓮縣</option>
                <option value="12" >宜蘭縣</option>
                <option value="13" >屏東縣</option>
                <option value="14" >嘉義縣</option>
                <option value="15" >基隆市</option>

              </select>
            </div>
          </div>
          <div class="form-row">
            <label for="address-input" class="address-label">地址</label>
            <input
              v-model="input.address"
              type="text"
              id="address-input"
              class="address-input"
              placeholder="請輸入地址"
            />
          </div>
        </div>
        <div class="part delivery-part" v-else-if="step === 2" >
          <div class="part-title">運送方式</div>
          <div class="form-row">
            <div class="radio-container">
              <input
                v-model="input.deliveryMethod"
                type="radio"
                name="delivery"
                id="standard-delivery"
                value="1"
              />
              <label for="standard-delivery">
                <div class="delivery-desc">
                  <div class="method">標準運送</div>
                  <div class="price">免費</div>
                </div>
                <div class="delivery-length">約 3 - 7 個工作天</div>
              </label>
            </div>
          </div>
          <div class="form-row">
            <div class="radio-container">
              <input
                v-model="input.deliveryMethod"
                type="radio"
                name="delivery"
                id="DHL-delivery"
                value="2"
              />
              <label for="DHL-delivery">
                <div class="delivery-desc">
                  <div class="method">DHL 貨運</div>
                  <div class="price">$500</div>
                </div>
                <div class="delivery-length">48 小時內送達</div>
              </label>
            </div>
          </div>
        </div>
        <div class="part payment-part" v-else >
          <div class="part-title">付款資訊</div>
          <div class="form-row card-info">
            <label for="name-input" class="name-label">持卡人姓名</label>
            <input
              v-model="input.cardholderName"
              type="text"
              id="name-input"
              class="name-input"
              placeholder="John Doe"
            />
          </div>
          <div class="form-row card-info">
            <label for="card-number-input" class="card-number-label"
              >卡號</label
            >
            <input
              v-model="input.cardNumber"
              type="text"
              id="name-input"
              class="card-number-input"
              placeholder="1111 2222 3333 4444"
            />
          </div>
          <div class="form-row card-info">
            <label for="expiration-date-input" class="expiration-date-label"
              >有效期限</label
            >
            <input
              v-model="input.expirationDate"
              type="text"
              id="expiration-date-input"
              class="expiration-date-input"
              placeholder="MM / YY"
            />
          </div>
          <div class="form-row card-info">
            <label for="code-input" class="code-label">CVC / CCV</label>
            <input
              v-model="input.CVC"
              type="text"
              id="code-input"
              class="code-input"
              placeholder="123"
            />
          </div>
        </div>
        <div class="control-panel">
          <button
            @click.stop.prevent="minusStep"
            class="previous-button visibility-hidden"
            :class="{ 'visibility-unset': step >= 2 }"
          >
            <span class="arrow previous-arrow">&#8592;</span>
            <span>上一步</span>
          </button>
          <button
            v-if="step <= 2"
            type="submit"
            @click.stop.prevent="addStep"
            class="next-button"
          >
            <span>下一步</span>
            <span class="arrow next-arrow">&#8594;</span>
          </button>
          <button
            v-else
            type="submit"
            @click.stop.prevent="handleSubmit"
            class="complete-button"
          >
            <span>結帳</span>
            <span class="arrow next-arrow">&#8594;</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      step: 1,
      input:{
        salutationId: '1',
        name: '',
        tel: '',
        email: '',
        city: '1',
        address: '',
        deliveryMethod: '',
        cardholderName: '',
        cardNumber: '',
        expirationDate: '',
        CVC: ''
      }
      }
    },
  created () {
    this.fetchProducts()
  },
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
    },
    addStep () {
      if (this.step === 3) return
      this.step++
    },
    minusStep () {
      if (this.step === 1) return
      this.step--
    },
    handleSubmit () {
      this.$emit('after-submit', this.input)
    }}
  ,
   watch: {
    /** 把 deliveryMethod 的資料傳給 CheckoutDetail.vue**/
    'input.deliveryMethod': function () {
      this.$root.$emit('deliveryMethod', this.input.deliveryMethod)
      }
     }
}
</script>

