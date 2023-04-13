<template>
  <div class="home">
    <div>
      <img class="robot" src="../../assets/robot-home.png" aria-hidden="true" alt="" />
      <div class="get-started">
        <router-link :to="{ name: 'RobotBuilder'}">
          Get started
        </router-link>
         building your first robot!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home {
  text-align: center;
}

.robot {
  height: 300px
}
</style>
