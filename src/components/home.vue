<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      postsOne: [{
          id: 1,
          flip: false,
          image: require('../assets/san-fran-2.jpg')
        },
        {
          id: 2,
          flip: false,
          image: require('../assets/saint-michel-2.jpg')
        },
        {
          id: 3,
          flip: false,
          image: require('../assets/skellig-2.jpg')
        }
      ],
      postsTwo: [{
          id: 1,
          flip: false,
          image: require('../assets/mayan-2.jpg')
        },
        {
          id: 2,
          flip: false,
          image: require('../assets/warrior.jpg')
        },
        {
          id: 3,
          flip: false,
          image: require('../assets/dorval.jpg')
        }
      ],
      postsThree: [{
          id: 1,
          flip: false,
          image: require('../assets/skelling-3.jpg')
        },
        {
          id: 2,
          flip: false,
          image: require('../assets/saint-michel.jpg')
        },
        {
          id: 3,
          flip: false,
          image: require('../assets/san-fran.jpg')
        }
      ],
      postsFour: [{
          id: 1,
          flip: false,
          image: require('../assets/merida.jpg')
        },
        {
          id: 2,
          flip: false,
          image: require('../assets/mayan.jpg')
        },
        {
          id: 3,
          flip: false,
          image: require('../assets/cenote.jpg')
        }
      ]
    }
  },
  methods: {
    flipOne: function(item) {
      this.postsOne.filter(function(v, k) {
        return v.id != item.id;
      }).forEach(function(v, k) {
        v.flip = false;
      })
      window.setTimeout(function(v, k) {
        item.flip = !item.flip;
      }, 100)
    },
    flipTwo: function(item) {
      this.postsTwo.filter(function(v, k) {
        return v.id != item.id;
      }).forEach(function(v, k) {
        v.flip = false;
      })
      window.setTimeout(function(v, k) {
        item.flip = !item.flip;
      }, 100)
    },
    flipThree: function(item) {
      this.postsThree.filter(function(v, k) {
        return v.id != item.id;
      }).forEach(function(v, k) {
        v.flip = false;
      })
      window.setTimeout(function(v, k) {
        item.flip = !item.flip;
      }, 100)
    },
    flipFour: function(item) {
      this.postsFour.filter(function(v, k) {
        return v.id != item.id;
      }).forEach(function(v, k) {
        v.flip = false;
      })
      window.setTimeout(function(v, k) {
        item.flip = !item.flip;
      }, 100)
    },
  }
}
</script>

<template>
<div id="home">
  <div class="columns" style="margin-top:40px;">
    <div class="column">
      <div v-for="item in postsOne" class="flipper" v-bind:class="{'flip': item.flip}" v-on:click="flipOne(item)" style="text-align:center;">
        <figure class="front">
          <div class="tile">

            <figure class="image home">
              <img class="home" v-bind:src="item.image" alt="">
            </figure>

          </div>
        </figure>
        <figure class="back">
          <div class="tile">
            <div class="card-content">
              <div class="is-centered-ver-hor ">
                <div class="media">
                  <div class="media-left">
                  </div>
                  <div class="media-content">
                    <p class="title is-5">{{item.name}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </div>
    <div class="column">
      <div v-for="item in postsTwo" class="flipper" v-bind:class="{'flip': item.flip}" v-on:click="flipTwo(item)">
        <figure class="front">
          <div class="tile">

            <figure class="image home">
              <img v-bind:src="item.image" alt="">
            </figure>

          </div>
        </figure>
        <figure class="back">
          <div class="tile">
            <div class="card-content">
              <div class="is-centered-ver-hor ">
                <div class="media">
                  <div class="media-left">
                  </div>
                  <div class="media-content">
                    <p class="title is-5">{{item.name}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </div>
    <div class="column">
      <div v-for="item in postsThree" class="flipper" v-bind:class="{'flip': item.flip}" v-on:click="flipThree(item)">
        <figure class="front">
          <div class="tile">

            <figure class="image home">
              <img v-bind:src="item.image" alt="">
            </figure>

          </div>
        </figure>
        <figure class="back">
          <div class="tile">
            <div class="card-content">
              <div class="is-centered-ver-hor ">
                <div class="media">
                  <div class="media-left">
                  </div>
                  <div class="media-content">
                    <p class="title is-5">{{item.name}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </div>
    <div class="column">
      <div v-for="item in postsFour" class="flipper" v-bind:class="{'flip': item.flip}" v-on:click="flipFour(item)">
        <figure class="front">
          <div class="tile">

            <figure class="image home">
              <img v-bind:src="item.image" alt="">
            </figure>

          </div>
        </figure>
        <figure class="back">
          <div class="tile">
            <div class="card-content">
              <div class="is-centered-ver-hor ">
                <div class="media">
                  <div class="media-left">
                  </div>
                  <div class="media-content">
                    <p class="title is-5">{{item.name}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </div>
  </div>
  <section class="section">
      <div>Looking to Purchase?</div>
      <div><a href="https://www.amazon.com/Mayan-Manifesto-Susan-S-Throckmorton/dp/0615588050" target="_blank">The Mayan Manifesto</a></div>
      <div><a href="https://www.amazon.com/Accord-Susan-S-Throckmorton/dp/0997065818" target="_blank">The Accord</a></div>
  </section>
</div>
</template>
