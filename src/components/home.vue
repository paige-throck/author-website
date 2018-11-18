<script>
import Modal from './Modal'
export default {
  name: 'Home',
  components: {
    Modal
  },
  data() {
    return {
      isModalVisible: false,
      images: [{
          url: require('../assets/san-fran-2.jpg')
        },
        {
          url: require('../assets/saint-michel-2.jpg')
        },
        {
          url: require('../assets/skellig-2.jpg')
        },

        {
          url: require('../assets/mayan-2.jpg')
        },
        {
          url: require('../assets/warrior.jpg')
        },
        {
          url: require('../assets/dorval.jpg')
        },
        {
          url: require('../assets/skelling-3.jpg')
        },
        {
          url: require('../assets/saint-michel.jpg')
        },
        {
          url: require('../assets/san-fran.jpg')
        },
        {
          url: require('../assets/merida.jpg')
        },
        {
          url: require('../assets/mayan.jpg')
        },
        {
          url: require('../assets/cenote.jpg')
        },
      ]
    }
  },
  methods: {
    showModal()
    {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    }
  },
}
</script>

<template>
<div id="home">
  <Modal v-show="isModalVisible" @close="closeModal" />
  <!-- <button type="button" class="btn btn-info" @click="showModal">Show modal</button> -->
  <div class="column"></div>
  <div class="column">
    <div class="tile">
      <div class="tile is-vertical is-parent">
        <div class="tile is-child box" @click="showModal">
          <figure class="image is-3by2">
            <img src="../assets/san-fran-2.jpg">
          </figure>
        </div>
        <div class="tile is-child box">
          <figure class="image is-3by2">
            <img src="../assets/saint-michel-2.jpg">
          </figure>
        </div>
        <div class="tile is-child box">
          <figure class="image is-3by2">
            <img src="../assets/skellig-2.jpg">
          </figure>
        </div>
      </div>
      <div class="tile is-vertical is-parent">
        <div class="tile is-child box">
          <figure class="image is-3by2">
            <img src="../assets/mayan-2.jpg">
          </figure>
        </div>
        <div class="tile is-child box">
          <figure class="image is-3by2">
            <img src="../assets/warrior.jpg">
          </figure>
        </div>
        <div class="tile is-child box">
          <figure class="image is-3by2">
            <img src="../assets/dorval.jpg">
          </figure>
        </div>
      </div>
      <div class="tile is-vertical is-parent">
        <div class="tile is-child box">
          <figure class="image is-3by2">
            <img src="../assets/skelling-3.jpg">
          </figure>
        </div>
        <div class="tile is-child box">
          <figure class="image is-3by2">
            <img src="../assets/saint-michel.jpg">
          </figure>
        </div>
        <div class="tile is-child box">
          <figure class="image is-3by2">
            <img src="../assets/san-fran.jpg">
          </figure>
        </div>
      </div>
      <div class="tile is-vertical is-parent">
        <div class="tile is-child box">
          <figure class="image is-3by2">
            <img src="../assets/merida.jpg">
          </figure>
        </div>
        <div class="tile is-child box">
          <figure class="image is-3by2">
            <img src="../assets/mayan.jpg">
          </figure>
        </div>
        <div class="tile is-child box">
          <figure class="image is-3by2">
            <img src="../assets/cenote.jpg">
          </figure>
        </div>
      </div>
    </div>
  </div>
  <div class="column"></div>
</div>
</template>
