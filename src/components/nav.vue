<template>
<nav class="navbar is-fixed-top">
  <div class="navbar-brand">
    <router-link to="/" class="navbar-item main-nav-link">Susan Throckmorton</router-link>
    <div @click="openNav" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false" v-bind:class="{ 'is-active': activator }">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div class="navbar-menu" id="navMenu" v-bind:class="{ 'is-active': activator }">
    <div class="navbar-start">
    </div>
    <div class="navbar-end">
      <router-link class="navbar-item secondary-nav-link" to="/">Home</router-link>
      <router-link class="navbar-item secondary-nav-link" to="/author">Author</router-link>
      <router-link class="navbar-item secondary-nav-link" to="/books">Books</router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      activator: false
    }
  },
  methods: {
    openNav() {
      this.activator = !this.activator
      return this.activator
    }
  }
}
</script>
