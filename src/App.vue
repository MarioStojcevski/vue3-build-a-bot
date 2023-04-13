<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Home'}">
            <img class="logo" alt="" src="./assets/build-a-bot-logo.png" />
            Build a bot
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style scoped>
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
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

<style>
body {
  background: linear-gradient(to bottom, #555, #999 );
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.nav-link {
  text-decoration: none;
  color: #fff;
}
</style>
