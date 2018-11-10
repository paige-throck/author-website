<template>
<nav class="navbar" role="navigation" aria-label="main navigation">

  <div class="navbar-brand">
    <a class="navbar-item">
      <router-link to="/">Susan Throckmorton</router-link>
    </a>
    <a @click="makeBurger" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false" v-bind:class="{ 'is-active': activator }">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div class="navbar-menu" id="navMenu" v-bind:class="{ 'is-active': activator }">
    <div class="navbar-end">
      <div class="navbar-item">
        <router-link to="/">Home</router-link>
      </div>
      <div class="navbar-item ">
        <router-link to="/author">About the Author</router-link>
      </div>
      <div class="navbar-item">
        <router-link to="/books">Books</router-link>
      </div>

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
    makeBurger() {
      this.activator = !this.activator
      return this.activator
    }
  }
}
</script>
