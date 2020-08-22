<template>
  <div class="container">
    <Navbar />

    <div class="main-container">
      <h1>誰在追蹤我</h1>
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