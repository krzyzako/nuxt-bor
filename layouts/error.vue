<template>
    <div class="wrapper">
      <div class="content-wrapper">
        <section class="content">
          <component :is="errorPage" :error="error" />
        </section>
      </div>
    </div>
</template>
<script>
import error404 from '@/components/error/404.vue'
import error500 from '@/components/error/500.vue'

export default {
  name: 'ErrorPage',
  layout: 'login',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || 'Error'
    },
    errorPage() {
      if (this.statusCode === 404) return error404
      // catch everything else
      return error500
    },
  }
}
</script>