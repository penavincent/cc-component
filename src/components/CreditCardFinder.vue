<template>
  <div class="container blk__copy">
    <div v-if="step === 1" class="container controls">
      <div class="text">
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
    <div v-if="step === 2" class="container controls">
      <div class="text">
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
              @click.native="submit(type.value)"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="cardsSuggested" class="container blk__copy card-list">
      <div class="text">
        <h1 class="card-intro-text">{{cardsSuggested.intro_text}}</h1>
        <CardInfo v-if="cardsSuggested.card1" :card="cardsSuggested.card1" />
        <CardInfo v-if="cardsSuggested.card2" :card="cardsSuggested.card2" />
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
          console.log(res.data);
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

.card-list {
  min-height: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid lightgray;
}

.text {
  color: #fff;
  grid-column: 2/12;
  grid-row: 1;
  padding: 4rem 0;
  max-width: 1000px;
  margin: 0 auto;
}

.title {
  font-size: 48px;
}

.description {
  font-size: 14px;
}

.card-intro-text {
  color: #1c1d20;
  font-size: 1.6rem;
  font-weight: normal;
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
}

@media (min-width: 1024px) {
  .text {
    grid-column: 3/11;
  }

  .tile-wrap {
    padding: 0 17.3%;
  }
}

@media (min-width: 1440px) {
  .text {
    -ms-grid-column-start: 4;
    -ms-grid-column-span: 7;
    grid-column: 4 / 10;
  }
}
</style>
