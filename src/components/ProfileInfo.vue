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
      hello
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/base';

.main-container-title {
  .back {
    line-height: 50px;
    margin: 0 20px;
    font-size: 1.2rem;
    color: $main-yellow;
  }
  .title {
    p {
      font-size: 0.9rem;
      color: $account-gray;
    }
  }
}
.profile-info-container {
  width: 100%;
  height: 400px;
  background: rgb(211, 209, 205);
}
</style>