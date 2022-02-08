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
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8-tablet is-6-desktop is-6-widescreen">
            <header class="modal-card-head">
              <p class="modal-card-title"><b>Coś poszło nie tak 500</b></p>
              <img
                width="150"
                height="500"
                src="~/assets/bormech-logo.svg"
                alt="Lightweight UI components for Vue.js based on Bulma"
              />
            </header>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: '500',
  
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>