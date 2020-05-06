<template>
  <div class="container blk__copy">
    <!-- Step 1: Select Credit Score  -->
    <div v-if="step === 1" class="container controls">
      <div class="container-text">
        <h1 class="title">Looking for a new Credit Card? Let us help you out!</h1>
        <p
          class="description"
        >To help us find the best card for you, first tell us where you are at with your credit score. Pick one of the options below!</p>
      </div>
      <div class="tiles blk__copy blk-action_tile_list">
        <div class="grid grid--int grid--mob">
          <div class="tile-wrap">
            <ActTile
              v-for="score in creditScores"
              :key="score.value"
              :text="score.display"
              @click.native="next(score.value)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Step 2: Select card usage and compare -->
    <div v-if="step === 2" class="container controls">
      <div class="container-text">
        <h1 class="title">What perks are you looking for on your next card?</h1>
        <p
          class="description"
        >Whether it be traveling, getting some sweet cash back, or looking to build up your credit, we can find the card for you!</p>
      </div>
      <div class="tiles blk__copy blk-action_tile_list">
        <div class="grid grid--int grid--mob">
          <div class="tile-wrap">
            <ActTile
              v-for="type in cardTypes"
              :key="type.value"
              :text="type.display"
              :image="type.image"
              :imageHover="type.imageHover"
              :chosen="type === chosenCardType"
              @click.native="submit(type.value)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Card suggestions based on choices -->
    <div v-if="cardsSuggested" class="container blk__copy">
      <div
        v-if="cardsSuggested.error_text"
        class="card-error-text"
        v-html="cardsSuggested.error_text"
      />
      <div v-else class="card-list">
        <h1 class="card-intro-text">{{cardsSuggested.intro_text}}</h1>
        <CardInfo
          v-if="cardsSuggested.card1 && !cardsSuggested.card1.hide_card"
          :card="cardsSuggested.card1"
          class="card-details1"
        />
        <CardInfo
          v-if="cardsSuggested.card2 && !cardsSuggested.card2.hide_card"
          :card="cardsSuggested.card2"
          class="card-details2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import ActTile from "./ActTile";
import CardInfo from "./CardInfo";

import cardTypes from "../assets/cardTypes";
import creditScores from "../assets/creditScores";

export default {
  name: "CreditCardFinder",
  components: { ActTile, CardInfo },
  computed: {
    isChosenType(cardType) {
      if (this.chosenCardType) {
        return this.chosenCardType === cardType;
      }

      return false;
    }
  },
  methods: {
    prev() {
      --this.step;
    },
    next(chosenScore) {
      this.chosenScore = chosenScore;
      ++this.step;
    },
    async submit(chosenCardType) {
      this.loading = true;
      this.chosenCardType = chosenCardType;
      axios
        .get(
          `${process.env.VUE_APP_API_URL}/api/recommendations?score=${this.chosenScore}&usage=${this.chosenCardType}`
        )
        .then(res => {
          this.cardsSuggested = res.data[0];
        })
        .catch(err => {
          console.log(err);
          this.errored = err;
        })
        .finally(() => (this.loading = false));
    }
  },
  data: () => ({
    creditScores,
    cardTypes,
    step: 1,
    chosenScore: null,
    chosenCardType: null,
    loading: false,
    errored: false,
    cardsSuggested: null
  })
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-column: 1/-1;
}

.controls {
  background-color: #72246c;
  padding-bottom: 3rem;
}

.container-text {
  color: #fff;
  grid-column: 2/12;
  grid-row: 1;
  padding: 4rem 0;
  max-width: 1000px;
  margin: 0 auto;
}

.title {
  font-size: 3.4rem;
}

.description {
  font-size: 1.2rem;
}

.card-list {
  display: grid;
  grid-template-rows: minmax(5rem, 15rem) 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "Intro Intro"
    "Card1 Card2";
  grid-column: 3/11;
  min-height: 1rem;
  margin-bottom: 1rem;
}

.card-intro-text {
  grid-area: Intro;
  color: #1c1d20;
  padding: 2rem 0;
  font-size: 1.6rem;
  font-weight: normal;
}

.card-error-text {
  grid-column: 3/11;
  padding: 2rem 0;
  font-size: 1.6rem;
}

.card-details1 {
  grid-area: Card1;
}

.card-details2 {
  grid-area: Card2;
}

.tiles {
  grid-row: 2;
}

.tile-wrap {
  display: -ms-grid;
  -ms-grid-columns: 1fr 1fr;
  display: grid;
  grid-column: 1;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  padding-top: 20px;
  padding-bottom: 20px;
  clear: both;
}

@media (min-width: 768px) {
  .tile-wrap {
    -ms-grid-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    padding: 1rem 8% 2rem;
  }

  .title {
    font-size: 4.8rem;
  }

  .description {
    font-size: 1.4rem;
  }
}

@media (min-width: 1024px) {
  .container-text {
    grid-column: 3/11;
  }

  .tile-wrap {
    padding: 0 17.3%;
  }
}

@media (min-width: 1440px) {
  .container-text {
    -ms-grid-column-start: 4;
    -ms-grid-column-span: 7;
    grid-column: 4 / 10;
  }

  .blk-action_tile_list {
    grid-column: 3 / 11;
  }
}
</style>
