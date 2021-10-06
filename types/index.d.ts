import Vue from 'vue'

interface ApiUsersInterface {
  list<T = any>(): Promise<T>
}

interface ApiInstance {
  users: ApiUsersInterface
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: ApiInstance
  }
}

export interface User {
  name: string,
  id: number
}
