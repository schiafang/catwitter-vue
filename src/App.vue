<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import 'assets/scss/main.scss';

.container {
  display: grid;
  grid-template-areas: 'right' 'main' 'navbar';
  grid-template-rows: auto auto 70px;
}
.navbar {
  grid-area: navbar;
  position: fixed;
}
.main-container {
  overflow-y: scroll;
  background: slategrey;
}
.right-container {
  grid-area: right;
}

@media screen and (min-width: 768px) {
  .container {
    height: 100vh;
    display: grid;
    grid-auto-columns: 320px 2fr minmax(300px, 1fr);
    grid-template-areas: 'navbar main right';
  }
  .main-container {
    grid-area: main;
  }
  .right-container {
    grid-area: right;
  }
}
</style>
