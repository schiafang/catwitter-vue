<template>
  <div class="cards">
    <div v-for="tweet in tweets" :key="tweet.id" class="tweet-card">
      <div class="avatar">
        <router-link to="/users/:id/tweets"
          ><img :src="tweet.User.avatar" alt="avatar"
        /></router-link>
      </div>
      <div class="account-name">
        <router-link to="/users/:id/tweets">
          <span class="name">
            {{ tweet.User.name }}
          </span>
          <span class="account">@{{ tweet.User.account }}</span>
        </router-link>
      </div>
      <router-link to="/tweets/:id">
        <div class="text">
          {{ tweet.description }}
        </div>
      </router-link>

      <div class="tweet-card-footer">
        <div class="reply">
          <button>
            <i class="far fa-comment"></i>
          </button>
          <span>22</span>
        </div>

        <div class="like">
          <button>
            <i class="far fa-heart"></i>
          </button>
          <span>26</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tweets: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/tweet-card.scss';
</style>