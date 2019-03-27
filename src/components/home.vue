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

- The Accord`
        },
        {
          id: 2,
          flip: false,
          image: require('../assets/saint-michel-2.jpg'),
          quote: `“Determined to complete his journey as quickly as possible, and blessed with
agreeable weather, Bernard pressed on through the deepening dusk until he
reached the shoreline abutting the bay in which the ‘wonder of the medieval
world’ awaited him, ...... he sat watching in awe as the moon rose
in the night sky, sending rays of light dancing across the water, and illuminating
the pale colored stone of the abbaye to a beautiful silvery glow.”

- The Accord`
        },
        {
          id: 3,
          flip: false,
          image: require('../assets/skellig-2.jpg'),
          quote: `“Despite their situation, both Jeff and Simône found themselves admiring the beauty of their surroundings, as they followed the limestone path circling the base of the island. After passing under a canopied area, no doubt erected to protect tourists from potential rock fall from above, and by a helicopter pad balanced precariously on a cliff above the water, they reached the bottom of the 661 steep stone stairs, which Jeff knew had been erected starting some 1500 years before by Augustinian monks who had chosen to live in the harshest of conditions on this remote island. The steps, in most areas about 4 feet wide but only a foot or less deep, stretched up above them before turning to the right and vanishing out of sight.”
          - The Accord`
        }
      ],
      postsTwo: [{ 
          id: 1,
          flip: false,
          image: require('../assets/mayan-2.jpg'),
          quote: `“Drops of blood splattered his face as the king’s twirling became more frenzied. Yet, the young Mayan warrior, clad only in a ceremonial loincloth below
a torso adorned with brightly-colored body-paint honoring the Lords of Death on this festival of the Rising Sun, stood motionless, ...... Soon, he knew, the Vision Serpent would come to his King, the Great Jaguar
Paw, insuring the success of the harvests for another year…”
- The Mayan Manifesto
`
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
  <div class="columns" style="margin-top:50px;">

    <div class="column">
      <div v-for="item in postsOne" class="flipper" v-bind:class="{'flip': item.flip}" v-on:click="flipOne(item)" style="text-align:center;">

        <figure class="front">
          <div class="tile">
            <figure class="image home">
              <img class="card-image" v-bind:src="item.image" alt="">
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
              <img class="card-image" v-bind:src="item.image" alt="">
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
              <img class="card-image" v-bind:src="item.image" alt="">
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
              <img class="card-image" v-bind:src="item.image" alt="">
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
