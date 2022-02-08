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
              <p class="modal-card-title"><b>LOGOWANIE</b></p>
              <img
                width="150"
                height="500"
                src="~/assets/bormech-logo.svg"
                alt="Lightweight UI components for Vue.js based on Bulma"
              />
            </header>
            <ValidationObserver v-slot="{ invalid }">
            <form action="" class="box">
              <div class="field">
                <label for="" class="label">Urzytkownik :</label>
                <b-field>
                  <ValidationProvider v-slot="{ errors }" name="Nazwa" rules="required|alpha">
                  <b-input v-model="username" placeholder="nazwa"  icon="account"></b-input>
                  <span class="has-text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </b-field>
              </div>
              <div class="field">
                <label for="" class="label">Hasło -> :</label>
                <b-field>
                  <ValidationProvider v-slot="{ errors }" name="Hasło" rules="required|min:4">
                  <b-input v-model="password"  placeholder="hasło" icon="key" type="password" password-reveal></b-input>
                  <span class="has-text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </b-field>
              </div>

              <div class="field is-half">
                <b-button class="button is-primary" :disabled="invalid" expanded @click="login"
                  >Logi;iuun</b-button
                >
              </div>
            </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ValidationProvider, ValidationObserver }  from "vee-validate";

export default {
  name: 'InspirePage',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  layout: 'login',
  data: () => ({
    password: "",
    username:""
  }),
  methods :{
    login() {
      this.error = null

      const form = new FormData()

      form.append("username", this.username)
      form.append("password", this.password)
      return this.$auth.loginWith('local', {
          data : form
        })
        .then(this.$router.push({ path: '/' }))
        .catch((err) => {
          // eslint-disable-next-line no-console
          const responseData = err.response?.data
          this.error = responseData?.error ?? responseData
        })
    },
  }

}
</script>