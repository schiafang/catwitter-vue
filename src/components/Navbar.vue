<template>
  <div class="navbar">
    <!-- <div class="hamburger"></div> -->
    <div class="logo">
      <img src="../assets/images/logo.svg" alt="" />
      <!-- <span>caTwitter</span> -->
    </div>
    <div class="nav-list">
      <div class="nav-item home">
        <router-link to="/">
          <div class="icon-div">
            <i class="fas fa-igloo"></i>
          </div>
          <span>HOME</span>
        </router-link>
      </div>

      <div class="nav-item profile">
        <router-link to="/users/:id/tweets">
          <div class="icon-div">
            <i class="fas fa-paw"></i>
          </div>
          <span>
            個人頁面
          </span>
        </router-link>
      </div>

      <div class="nav-item setting">
        <router-link to="/users/:id/edit">
          <div class="icon-div">
            <i class="fas fa-cog"></i>
          </div>
          <span>
            設定
          </span>
        </router-link>
      </div>

      <button
        type="button"
        class="tweet-button btn"
        data-toggle="modal"
        data-target="#tweetModal"
      >
        Tweet
      </button>

      <TweetModal />

      <div class="nav-item logout">
        <router-link to="/logout">
          <div class="icon-div">
            <!-- <i class="fas fa-campground"></i> -->
            <i class="fas fa-sign-out-alt"></i>
          </div>
          <span>
            登出
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import TweetModal from '../components/TweetModal'

export default {
  components: {
    TweetModal,
  },
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {

  }
}
</script>


<style lang="scss" scoped>
@import '../assets/scss/navbar.scss';
</style>