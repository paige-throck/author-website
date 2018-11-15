<template>
<div id="app">
  <Nav />
  <section class="hero is-black is-fullheight">
    <div class="hero-head">

    </div>
    <div class="hero-body">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import Nav from './components/Nav'
export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>
