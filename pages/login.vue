<template>
  <form @submit.prevent="onLogin">
    <input type="text" v-model="login">
    <input type="password" v-model="password">
    <button type="submit" :disabled="disableSubmit">Submit</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      login: '' as string,
      password: '' as string,
    }
  },
  computed: {
    disableSubmit() : boolean {
      return this.login === '' || this.password === '';
    },
  },
  methods: {
    onLogin(): void {
      this.$auth.loginWith('local', { data: { login: this.login, password: this.password } })
      .then(() => this.$router.push('/'))
    }
  },
})
</script>
