<template>
  <div class="container-w">
    <div class="sign-container sign-up-container">
      <div class="sign-title sign-up-title">
        <h2 class="title">SIGN UP</h2>
      </div>

      <div class="sign-form-container sign-up-form">
        <form @submit.stop.prevent="getSubmit">
          <div class="sign-up-form">
            <label for="account" class="sign-account"
              >帳號
              <div class="sign-account-after"></div
            ></label>
            <input
              type="text"
              id="account"
              class="account sign-up-account"
              name="account"
              placeholder="請輸入帳號"
              v-model="account"
              required
            />
            <label for="account" class="sign-email">電子信箱</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="請輸入電子信箱"
              v-model="email"
              required
            />
            <label for="password" class="sign-password">密碼</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="請輸入 6-12 位英數字密碼"
              minlength="6"
              maxlength="12"
              v-model="password"
              required
            />
            <label for="passwordCheck" class="sign-password">確認密碼</label>
            <input
              type="password"
              id="passwordCheck"
              name="passwordCheck"
              placeholder="請再次輸入密碼"
              minlength="6"
              maxlength="12"
              v-model="passwordCheck"
              required
            />
            <button class="sign-button" type="submit">註冊</button>
          </div>
        </form>
      </div>

      <router-link to="/signin">
        <div class="sign-footer">
          <h3>SIGN IN</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      email: '',
      password: '',
      passwordCheck: '',
    }
  },
  methods: {
    getSubmit() {
      const data = JSON.stringify({
        account: this.account,
        email: this.email,
        password: this.password,
        passwordCheck: this.passwordCheck
      })

      console.log('data', data) //取得資料傳送到後端
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/sign.scss';
</style>
