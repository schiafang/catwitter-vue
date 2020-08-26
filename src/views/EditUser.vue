<template>
  <div class="container-w">
    <Navbar />

    <div class="main-container">
      <h1>個人帳戶設定</h1>
    </div>

    <TopUsers />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import TopUsers from '../components/TopUsers'

export default {
  components: {
    Navbar, TopUsers
  }
}

</script>

<style lang="scss" scoped>
</style>