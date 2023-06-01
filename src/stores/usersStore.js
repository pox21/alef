import { defineStore } from "pinia";

export const useUsersStore = defineStore('usersStore', {
  state: () => ({
    users: []
  }),
  actions: {
    setUser(user) {
      this.users = [...this.users, user];
    }
  }
});