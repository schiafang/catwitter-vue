<template>
  <div
    class="modal fade"
    id="tweetModal"
    aria-labelledby="tweetModal"
    aria-hidden="true"
    tabindex="-1"
    role="dialog"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="tweet-modal">
          <div class="tweet-modal-header">
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              class="close-button"
            >
              &times;
            </button>
          </div>
          <div class="tweet-modal-body">
            <div>
              <div class="avatar">
                <img src="../assets/images/test.png" alt="" />
              </div>
            </div>
            <form @submit.stop.prevent="getSubmit">
              <textarea
                v-model="description"
                class="modal-textarea modal-post-tweet"
                name="description"
                id="description"
                cols="30"
                rows="10"
                placeholder="What's happening?"
              ></textarea>
              <div class="buttons">
                <button
                  type="button"
                  class="tweet-button"
                  data-toggle="modal"
                  data-target="#postError"
                >
                  推文
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: ''
    }
  },
  methods: {
    getSubmit() {
      const data = JSON.stringify(this.description)

      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base';

@media screen and (min-width: 768px) {
  .modal-dialog {
    display: block;
    border: none;
  }

  .modal-content {
    border-radius: 15px;
    background: rgb(255, 255, 255);
  }

  .tweet-modal-header {
    height: 40px;

    .close-button {
      margin: 5px 15px 0 0;
      float: right;
      width: 40px;
      font-size: 2rem;
      color: $main-yellow;
    }
  }

  .tweet-modal-body {
    padding: 0 20px;
    display: flex;

    textarea {
      width: 380px;
      height: 180px;
      border: none;
      padding: 10px 0 0 20px;

      &::placeholder {
        font-size: 1.2rem;
      }
    }

    .tweet-button {
      float: right;
      width: 100px;
      margin-bottom: 15px;
      @include tweetButton;
    }
  }
}
</style>

