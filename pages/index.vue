<template>
  <div>
    <h1>Hello, {{ $auth.user.name }}</h1>
    <button type="button" @click="onLogOut">LogOut</button>
    <ol>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { User } from '~/types'

export default Vue.extend({
  data() {
    return {
      users: [] as Array<User>
    }
  },
  mounted(): void {
    this.$api.users.list().then(users => this.users = users.data)
  },
  methods: {
    onLogOut(): void {
      this.$auth.logout().then(() => this.$router.push('/login'))
    }
  }
})
</script>
