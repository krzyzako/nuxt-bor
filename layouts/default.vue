<template>
  <div id="app">
    <nav-bar />

    <section class="main-content columns">
      <!-- <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">Menu</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <NuxtLink :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside> -->

      <div class="container column is-8">
        <Nuxt />
      </div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >CC BY NC SA 4.0</a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"

export default {
  name: 'DefaultLayout',
  components: { NavBar, },

}
</script>

<style scoped>
html, body, #app {
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
#wrapper {
  flex: 1 0 auto;
}

.footer {
  flex-shrink: 0;  
}
</style>