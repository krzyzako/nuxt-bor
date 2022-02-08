<template>
  <section
    class="hero is-fullheight"
    style="
      background-image: url('https://bormech.pl/wp-content/uploads/2020/07/IMG_7039-2-1024x683.jpg');
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
    "
  >
    <div class="hero-body">
      <div class="container is-widescreen">
        <div class="columns is-centered">
          <div class="column is-8-tablet is-6-desktop is-6-widescreen">
            <header class="modal-card-head">
              <p class="modal-card-title is-centered"><b>Strona nie istnieje 404</b></p>
              <img
                width="150"
                height="500"
                src="~/assets/bormech-logo.svg"
                alt="Lightweight UI components for Vue.js based on Bulma"
              />
              <router-link to="/">ssd</router-link>
            </header>
            <header class="modal-card-head">
              <img
                width="150"
                height="500"
                src="~/assets/bormech-logo.svg"
                alt="Lightweight UI components for Vue.js based on Bulma"
              />
            </header>
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">Strona nie istnieje 404</p>
              </header>
              <div class="card-content is-center">
                <div class="content is-center">
                  <img
                    width="150"
                    height="500"
                    src="~/assets/bormech-logo.svg"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'T404',

  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>