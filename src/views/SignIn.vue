<template>
  <div class="container">
    <div class="sign-container">
      <div class="sign-title">
        <img src="../assets/images/logo.svg" alt="" />
        <div class="title">caTwitter</div>
      </div>

      <div class="sign-form-container">
        <h2>SIGN IN</h2>

        <form @submit.stop.prevent="getSubmit">
          <div class="sign-form">
            <label for="account" class="sign-account">帳號</label>
            <input
              type="text"
              id="account"
              class="account"
              name="account"
              placeholder="請輸入帳號或電子信箱"
              v-model="account"
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
            <button class="sign-button" type="submit">登入</button>
          </div>
        </form>
        <router-link to="/admin/signin" class="signin-link"
          >管理員登入 <i class="fas fa-caret-right"></i
        ></router-link>
      </div>
      <router-link to="/signup">
        <div class="sign-footer">
          <h3>SIGN UP</h3>
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
      password: ''
    }
  },
  methods: {
    getSubmit() {
      const data = JSON.stringify({
        account: this.account,
        password: this.password
      })

      console.log('data', data)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/sign.scss';
</style>
