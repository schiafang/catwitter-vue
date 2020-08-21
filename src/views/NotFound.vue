<template>
  <div>
    <div class="content">
      <p>sorry, page not found</p>
      <a @click="$router.go(-1)">back</a>
    </div>
  </div>
</template>

<style scoped>
.content {
  text-align: center;
  font-size: 2rem;
  padding-top: 200px;
  font: 600;
}
a {
  background: rgb(186, 187, 186);
  padding: 0 10px;
  border-radius: 8px;
  cursor: pointer;
}
</style>