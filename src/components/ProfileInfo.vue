<template>
  <div>
    <div class="main-container-title">
      <a @click="$router.go(-1)" class="back"
        ><i class="fas fa-arrow-left"></i
      ></a>
      <div class="title">
        <span>Apple</span>
        <p>10.9k Tweets</p>
      </div>
    </div>
    <div class="profile-info-container">
      <div class="profile-cover">
        <img src="../assets/images/cover.png" alt="" />
      </div>
      <div class="profile-avatar">
        <img src="../assets/images/test.png" alt="" />
      </div>
      <div class="profile-info">
        <div class="name">Bob</div>
        <div class="account">@spongebob</div>
        <div class="decription">What's happening?</div>
        <div class="other-info">Joined Faburery 27</div>
        <div class="follow-count">
          <span>140 Followings</span>
          <span>140 Followers</span>
        </div>
        <div class="followed-by">followed by</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/profile-info';
</style>