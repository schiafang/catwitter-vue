<template>
  <div class="container">
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

        <form method="POST" action="/tweets">
          <textarea
            name="description"
            class="tweet-textarea"
            id="description"
            cols="30"
            rows="10"
            placeholder="What's happening?"
          ></textarea>
        </form>
        <button class="tweet-post-button" type="submit">
          Tweet
        </button>
      </div>
      <!--首頁推文 -->
      <TweetItem />
    </div>

    <TopUsers />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import TopUsers from '../components/TopUsers'
import TweetItem from '../components/TweetItem'


export default {
  components: {
    Navbar, TopUsers, TweetItem
  }
}

</script>

<style lang="scss" scoped>
@import '../assets/scss/base';

.main-container {
  display: flex;
  flex-direction: column;
}

.main-container-title {
  height: 50px;
  border-bottom: 1px solid #dedede;

  span {
    padding-left: 20px;
    line-height: 50px;
    font-size: 1.2rem;
    font-weight: 500;
  }
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
    height: 90px;
    margin: 20px 10px;
    border: none;
    resize: none;
    overflow: scroll;
    background-color: transparent;
  }

  .tweet-post-button {
    grid-column: 3/4;
    @include tweetButton;
    align-self: flex-end;
    height: 40px;
    margin: 0 15px 10px 0px;
  }
}
</style>