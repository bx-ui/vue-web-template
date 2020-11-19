 <!-- 创建人：邴鑫 -->
<template>
  <div>
      <HeaderTop />
      <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>