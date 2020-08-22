<template>
  <div class="container">
    <Navbar />
    <div class="main-container">
      <div class="main-container-title">
        <a @click="$router.go(-1)" class="back"
          ><i class="fas fa-arrow-left"></i
        ></a>
        <div class="title">
          <span>Apple</span>
          <p>10.9k Tweets</p>
        </div>
      </div>
      <ProfileInfo />
    </div>
    <TopUsers />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import TopUsers from '../components/TopUsers'
import ProfileInfo from '../components/ProfileInfo'


export default {
  components: {
    Navbar, TopUsers, ProfileInfo
  }
}

</script>

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
</style>