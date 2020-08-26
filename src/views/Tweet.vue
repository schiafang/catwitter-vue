<template>
  <div class="container-w">
    <Navbar />

    <div class="main-container">
      <h1>推文頁</h1>
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