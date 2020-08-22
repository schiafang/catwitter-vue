<template>
  <div class="right-container">
    <div class="top-users-container">
      <div class="top-users-title">
        Who to follow
      </div>

      <div class="top-users-panel">
        <!-- top users list panel -->
        <div class="users-item">
          <router-link to="/users/:id/tweets">
            <div class="users-item-avatar">
              <img src="../assets/images/test.png" alt="" />
            </div>
          </router-link>
          <router-link to="/users/:id/tweets">
            <div class="users-item-name">
              AppleAppleAppleApple
            </div>
            <div class="users-item-account">@apple</div>
          </router-link>

          <div class="users-item-button">
            <!-- <form method="POST">
              <button class="unfollow-button">Unfollow</button>
            </form> -->
            <form action="/followships" method="POST">
              <button class="follow-button" name="id" value="">Follow</button>
            </form>
          </div>
        </div>
      </div>

      <button class="button more-users">
        Show more
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/top-users.scss';
</style>