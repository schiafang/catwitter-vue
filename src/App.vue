<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import 'assets/scss/main.scss';

@media screen and (min-width: 568px) {
  .container {
    display: grid;
    grid-auto-columns: 320px 1.5fr 1fr;
  }
  .main-container {
    grid-column: 2/3;
  }
  .right-container {
    grid-column: 3/4;
  }
}
</style>
