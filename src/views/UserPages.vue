<template>
  <div class="container-w">
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
        <div v-if="activeIndex === '1'" class="user-tweets">
          <TweetCard :test-restaurants="testRestaurants" />
        </div>
        <div v-if="activeIndex === '2'" class="user-replies">
          <TweetCard :user-replies="userReplies" />
        </div>
        <div v-if="activeIndex === '3'" class="user-likes">
          <TweetCard :user-likes="userLikes" />
        </div>
      </template>
    </div>
    <TopUsers />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import TopUsers from '../components/TopUsers'
import ProfileInfo from '../components/ProfileInfo'
import TweetCard from '../components/TweetCard'

const dummyData = {
  'restaurants': [
    {
      'id': 49,
      'name': 'Russ Kertzmann',
      'tel': '087-274-1881',
      'address': '6601 Lura Lodge',
      'opening_hours': '08:00',
      'description': 'sed',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.98329738383367',
      'viewCounts': null,
      'createdAt': '2019-07-30T16:24:55.443Z',
      'updatedAt': '2019-07-30T16:24:55.443Z',
      'CategoryId': 4,
      'Category': {
        'id': 4,
        'name': '墨西哥料理',
        'createdAt': '2019-07-30T16:24:55.429Z',
        'updatedAt': '2019-07-30T16:24:55.429Z'
      }
    },
    {
      'id': 46,
      'name': 'Jasper Mueller',
      'tel': '254-159-2190',
      'address': '44890 Dominique Wall',
      'opening_hours': '08:00',
      'description': 'dolorem ratione et',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=67.08831513935154',
      'viewCounts': null,
      'createdAt': '2019-07-30T16:24:55.443Z',
      'updatedAt': '2019-07-30T16:24:55.443Z',
      'CategoryId': 2,
      'Category': {
        'id': 2,
        'name': '日本料理',
        'createdAt': '2019-07-30T16:24:55.429Z',
        'updatedAt': '2019-07-30T16:24:55.429Z'
      }
    }
  ],
  'replies': [
    {
      'id': 9,
      'name': 'commentssssn',
      'tel': '087-274-1881',
      'address': '6601 Lura Lodge',
      'opening_hours': '08:00',
      'description': 'sed',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.98329738383367',
      'viewCounts': null,
      'createdAt': '2019-07-30T16:24:55.443Z',
      'updatedAt': '2019-07-30T16:24:55.443Z',
      'CategoryId': 4,
      'Category': {
        'id': 4,
        'name': '墨西哥料理',
        'createdAt': '2019-07-30T16:24:55.429Z',
        'updatedAt': '2019-07-30T16:24:55.429Z'
      }
    },
    {
      'id': 6,
      'name': 'Jasper commentssssner',
      'tel': '254-159-2190',
      'address': '44890 Dominique Wall',
      'opening_hours': '08:00',
      'description': 'dolorem ratione et',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=67.08831513935154',
      'viewCounts': null,
      'createdAt': '2019-07-30T16:24:55.443Z',
      'updatedAt': '2019-07-30T16:24:55.443Z',
      'CategoryId': 2,
      'Category': {
        'id': 2,
        'name': '日本料理',
        'createdAt': '2019-07-30T16:24:55.429Z',
        'updatedAt': '2019-07-30T16:24:55.429Z'
      }
    }
  ]
}

export default {
  components: {
    Navbar, TopUsers, ProfileInfo, TweetCard
  },
  data() {
    return {
      activeIndex: '1',
      testRestaurants: [],
      userReplies: []
    }
  },
  methods: {
    handleSelect(key) {
      this.activeIndex = key
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json.title))
    },
    fetchFeeds() {
      this.testRestaurants = dummyData.restaurants
      this.userReplies = dummyData.replies

    }
  },
  created() {
    this.fetchFeeds()
  }
}
</script>
