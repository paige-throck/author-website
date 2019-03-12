<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      postsOne: [{
          id: 1,
          flip: false,
          image: require('../assets/san-fran-2.jpg'),
          quote: `“She lived well in a beautifully renovated 1920’s Victorian on Nob Hill, she ate a
the best restaurants, she wore designer clothes, and she rode in a chauffeured
Bentley. Alex had grown up with everything she needed, and then some.”
-The Accord`
        },
        {
          id: 2,
          flip: false,
          image: require('../assets/saint-michel-2.jpg'),
          quote: `“Determined to complete his journey as quickly as possible, and blessed with
agreeable weather, Bernard pressed on through the deepening dusk until he
reached the shoreline abutting the bay in which the ‘wonder of the medieval
world’ awaited him, just as the first evening stars began to glisten in the night
sky. Squinting, he could just make out the abbaye’s outline against the ink
stained horizon. But a short while later, he sat watching in awe as the moon rose
in the night sky, sending rays of light dancing across the water, and illuminating
the pale colored stone of the abbaye to a beautiful silvery glow.”

-The Accord`
        },
        {
          id: 3,
          flip: false,
          image: require('../assets/skellig-2.jpg'),
          quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

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
          <div class="content">
            {{item.quote}}
          </div>
        </figure>
      </div>
    </div>

    <div class="column">
      <div v-for="item in postsTwo" class="flipper" v-bind:class="{'flip': item.flip}" v-on:click="flipTwo(item)">
        <figure class="front">
          <div class="tile">
            <figure class="image home">
              <img class="home" v-bind:src="item.image" alt="">
            </figure>
          </div>
        </figure>


        <figure class="back">
          <div class="content">
            {{item.quote}}
          </div>
        </figure>
      </div>
    </div>
    <div class="column">
      <div v-for="item in postsThree" class="flipper" v-bind:class="{'flip': item.flip}" v-on:click="flipThree(item)">
        <figure class="front">
          <div class="tile">
            <figure class="image home">
              <img class="home" v-bind:src="item.image" alt="">
            </figure>
          </div>
        </figure>


        <figure class="back">
          <div class="content">
            {{item.quote}}
          </div>
        </figure>
      </div>
    </div>
    <div class="column">
      <div v-for="item in postsFour" class="flipper" v-bind:class="{'flip': item.flip}" v-on:click="flipFour(item)">
        <figure class="front">
          <div class="tile">
            <figure class="image home">
              <img class="home" v-bind:src="item.image" alt="">
            </figure>
          </div>
        </figure>


        <figure class="back">
          <div class="content">
            {{item.quote}}
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
