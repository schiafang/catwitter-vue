<template>
  <div class="container-w">
    <Navbar />

    <div class="main-container">
      <div class="main-container-title">
        <span>HOME</span>
      </div>

      <!--新增推文 -->
      <div class="tweet-text-block">
        <div class="avatar">
          <img src="../assets/images/logo.svg" alt="" />
        </div>

        <form method="POST" action="/tweets" class="tweet-form">
          <textarea
            name="description"
            class="tweet-textarea"
            id="description"
            cols="30"
            rows="10"
            placeholder="What's happening?"
          ></textarea>
          <div class="other-fomat">
            <i class="far fa-images"></i>
            <i class="far fa-smile"></i>
          </div>
        </form>
        <button class="tweet-post-button" type="submit">
          Tweet
        </button>
      </div>

      <!--首頁推文 -->
      <TweetCard :tweets="tweets" />
    </div>
    <TopUsers />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import TopUsers from '../components/TopUsers'
import TweetCard from '../components/TweetCard'
import tweetsDummyData from '../assets/dummydatas/tweets.json'

export default {
  components: {
    Navbar, TopUsers, TweetCard
  },
  data() {
    return {
      tweets: []
    }
  },
  created() {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds() {
      this.tweets = tweetsDummyData
    }
  }
}

</script>

<style lang="scss" scoped>
@import '../assets/scss/base';

.main-container {
  display: flex;
  flex-direction: column;
}

.main-container-title span {
  padding-left: 20px;
  line-height: 50px;
}

.tweet-text-block {
  height: auto;
  display: grid;
  grid-template-columns: 70px auto 100px;
  border-bottom: 10px solid #dedede;

  .avatar {
    grid-column: 1/2;
    padding: 15px;
  }

  .tweet-textarea {
    grid-column: 2/3;
    width: 100%;
    height: 100px;
    margin: 15px 10px 35px 0px;
    padding-left: 10px;
    border: none;
    resize: none;
    overflow: scroll;
    background-color: transparent;

    &::placeholder {
      font-size: 1.2rem;
    }
  }

  .tweet-post-button {
    grid-column: 3/4;
    @include tweetButton;
    align-self: flex-end;
    height: 40px;
    margin: 0 15px 10px 0px;
  }

  .tweet-form {
    position: relative;

    .other-fomat {
      position: absolute;
      top: 115px;
      width: 100%;
      height: 35px;
      padding-left: 20px;

      i {
        width: 35px;
        font-size: 1.2rem;
        color: $dark-gray;
      }
    }
  }
}
</style>