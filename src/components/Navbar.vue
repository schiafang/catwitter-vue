<template>
  <div class="navbar">
    <div class="hamburger"></div>
    <div class="logo">
      <img src="../assets/images/logo.svg" alt="" />
      <!-- <span>caTwitter</span> -->
    </div>
    <div class="nav-list">
      <div class="nav-item">
        <router-link to="/">
          <div class="icon-div">
            <i class="fas fa-igloo"></i>
          </div>
          <span>HOME</span>
        </router-link>
      </div>

      <!-- <div class="nav-item">
        <router-link to="null" class="disabled-link">
          <div class="icon-div">
            <i class="fas fa-bell"></i>
          </div>
          <span>通知</span>
        </router-link>
      </div>

      <div class="nav-item">
        <router-link to="/chat">
          <div class="icon-div">
            <i class="fas fa-comments"></i>
          </div>
          <span>
            公開聊天室
          </span>
        </router-link>
      </div>

      <div class="nav-item">
        <a href="/mailbox">
          <div class="icon-div">
            <i class="fab fa-telegram-plane"></i>
          </div>
          <span>
            私人訊息
          </span>
        </a>
      </div> -->

      <div class="nav-item">
        <router-link to="/users/:id/tweets">
          <div class="icon-div">
            <i class="fas fa-paw"></i>
          </div>
          <span>
            個人頁面
          </span>
        </router-link>
      </div>

      <div class="nav-item">
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
        class="tweet-button"
        data-toggle="modal"
        data-target="#tweetModal"
      >
        Tweet
      </button>

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

<style lang="scss" scoped>
@import '../assets/scss/navbar.scss';
</style>