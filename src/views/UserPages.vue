<template>
  <div class="container">
    <Navbar />
    <div class="main-container">
      <ProfileInfo />
      <div class="nav-tab">
        <el-menu
          :default-active="activeIndex"
          class="el-menu"
          mode="horizontal"
          @select="handleSelect"
          text-color="#37474F"
          active-text-color="#eec643"
        >
          <el-menu-item class="el-menu-item" index="1">Tweets</el-menu-item>
          <el-menu-item class="el-menu-item" index="2">Replies</el-menu-item>
          <el-menu-item class="el-menu-item" index="3">Likes</el-menu-item>
        </el-menu>
      </div>
      <template>
        <UserTweets v-if="activeIndex === '1'" />
        <userLikes v-if="activeIndex === '2'" />
        <UserReplies v-if="activeIndex === '3'" />
      </template>
    </div>
    <TopUsers />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import TopUsers from '../components/TopUsers'
import ProfileInfo from '../components/ProfileInfo'
import UserTweets from '../components/UserTweets'
import UserLikes from '../components/UserLikes'
import UserReplies from '../components/UserReplies'

export default {
  components: {
    Navbar, TopUsers, ProfileInfo, UserTweets, UserLikes, UserReplies
  },
  data() {
    return {
      activeIndex: '1',
      userTweets: [],
      userReplies: [],
      userLikes: [],
    }
  },
  methods: {
    handleSelect(key) {
      this.activeIndex = key
    }
  }
}
</script>
