<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img class="logo" alt="" src="./assets/build-a-bot-logo.png" />
          Build a bot
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RobotBuilder />
  </main>
</template>

<script>
import RobotBuilder from './components/builder/RobotBuilder.vue';

export default {
  name: 'App',
  components: {
    RobotBuilder,
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999 );
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024;
  min-height: 300px;
}

ul {
  padding: 3px;
  display: flex;
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
