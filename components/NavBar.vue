<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            width="150"
            height="500"
            src="~/assets/bormech-logo.svg"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item @click="homolog"> Homologacje </b-navbar-item>
        <b-navbar-item @click="badania"> Bsdadania </b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#"> About </b-navbar-item>
          <b-navbar-item href="#"> Contact </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <b-button
              label="Wyloguj"
              type="is-light"
              icon-left="logout"
              @click="logout"
            />
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' },
        },
      ],
    }
  },
  methods: {
    logout() {
      this.$buefy.snackbar.open({
        message: 'Log out clicked',
        queue: false,
        position: 'is-top',
        type: 'is-danger',
      })
      this.$auth.strategies.local.reset()
      // this.$router.go();
    },
    badania() {
      this.$router.push({ name: 'inspire' })
    },
    homolog() {
      this.$router.push({ name: 'inspire' })
    },
  },
}
</script>