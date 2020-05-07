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
            <act-tile
              v-for="score in creditScores"
              :id="score.value"
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
            <act-tile
              v-for="type in cardTypes"
              :id="type.value"
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

    <!-- Loader -->
    <base-loader v-if="loading" class="loader" />

    <!-- Error with API -->
    <h1
      v-if="error"
      class="card-error-text"
    >Oops, seems like we are having issues on our end. Worry not though, as we're already working on it!</h1>

    <!-- Card suggestions based on choices -->
    <div v-if="cardsSuggested && !loading && !error" class="container blk__copy">
      <div
        v-if="cardsSuggested.error_text"
        class="card-error-text"
        v-html="cardsSuggested.error_text"
      />
      <div v-else class="card-list">
        <h1 class="card-intro-text">{{cardsSuggested.intro_text}}</h1>
        <div class="card-details-wrap" :class="{'card-details-wrap--alone': !cardsSuggested.card2}">
          <card-info
            v-if="cardsSuggested.card1 && !cardsSuggested.card1.hide_card"
            :expand="highlights"
            :card="cardsSuggested.card1"
            class="card-details1"
            :class="{'card-details1--alone': !cardsSuggested.card2}"
            :alone="!cardsSuggested.card2"
            @expand-highlights="highlights = !highlights"
          />
          <card-info
            v-if="cardsSuggested.card2 && !cardsSuggested.card2.hide_card"
            :expand="highlights"
            :card="cardsSuggested.card2"
            class="card-details2"
            @expand-highlights="highlights = !highlights"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import ActTile from "./ActTile";
import CardInfo from "./CardInfo";
import BaseLoader from "./BaseLoader";

import cardTypes from "../assets/cardTypes";
import creditScores from "../assets/creditScores";

export default {
  name: "CreditCardFinder",
  components: { ActTile, CardInfo, BaseLoader },
  methods: {
    next(selectedScore) {
      this.selectedScore = selectedScore;
      ++this.step;
    },
    async submit(selectedCardType) {
      this.loading = true;
      this.selectedCardType = selectedCardType;

      axios
        .get(
          `${process.env.VUE_APP_API_URL}/api/recommendations?score=${this.selectedScore}&usage=${this.selectedCardType}`
        )
        .then(res => {
          this.cardsSuggested = res.data[0];
        })
        .catch(err => {
          console.log(err);
          this.error = err;
        })
        .finally(() => (this.loading = false));
    }
  },
  data: () => ({
    creditScores,
    cardTypes,
    step: 1,
    selectedScore: null,
    selectedCardType: null,
    loading: false,
    error: false,
    cardsSuggested: null,
    highlights: false
  })
};
</script>

<style scoped>
.container {
  -ms-grid-column: 1;
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
  display: -ms-grid;
  -ms-grid-rows: minmax(5rem, 15rem) 1fr;
  -ms-grid-columns: 1fr;
  -ms-grid-column: 2;
  -ms-grid-column-span: 10;
  display: grid;
  grid-template-rows: minmax(5rem, 15rem) 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "Intro"
    "Cards";
  grid-column: 2/12;
  min-height: 1rem;
  margin-bottom: 1rem;
}

.loader {
  -ms-grid-column: 2;
  -ms-grid-column-span: 10;
  grid-column: 2/12;
  margin: 1.5rem auto;
}

.card-error-text {
  -ms-grid-column: 2;
  -ms-grid-column-span: 10;
  font-size: 1.6rem;
  max-width: 1000px;
  margin: 0 auto;
}

.card-intro-text {
  -ms-grid-row: 1;
  grid-area: Intro;
  color: #1c1d20;
  padding: 2rem 0;
  font-size: 1.6rem;
  font-weight: normal;
  max-width: 1000px;
  margin: 0 auto;
}

.card-error-text {
  -ms-grid-column: 3;
  -ms-grid-column-span: 8;
  grid-column: 3/11;
  padding: 2rem 0;
  font-size: 1.6rem;
  max-width: 1000px;
  margin: 0 auto;
}

.card-details-wrap {
  display: -ms-grid;
  -ms-grid-row: 2;
  -ms-grid-columns: 1fr 1fr;
  display: grid;
  grid-area: Cards;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "Card1"
    "Card2";
}

.card-details1 {
  -ms-grid-column: 1;
  grid-area: Card1;
  justify-self: center;
  margin: 0 auto;
}

.card-details2 {
  -ms-grid-column: 2;
  grid-area: Card2;
  justify-self: center;
  margin: 0 auto;
}

.tiles {
  -ms-grid-row: 2;
  grid-row: 2;
}

.tile-wrap {
  display: -ms-flexbox;
  -ms-flex-direction: row;
  -ms-flex-align: center;
  -ms-grid-column: 1;
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

  .card-list {
    -ms-grid-rows: minmax(5rem, 15rem) 1fr;
    -ms-grid-columns: 1fr;
    grid-template-rows: minmax(5rem, 15rem) 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "Intro"
      "Cards";
  }

  .card-details-wrap {
    -ms-grid-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    grid-template-areas: "Card1 Card2";
  }

  .card-details-wrap--alone {
    -ms-grid-columns: 1fr 1fr;
    grid-columns: 1fr;
    grid-template-areas: "Card1";
  }

  .card-details1--alone {
    width: 100%;
    margin: 0;
  }
}

@media (min-width: 1024px) {
  .container-text,
  .card-list,
  .card-error-text {
    -ms-grid-row: 3;
    -ms-grid-row-span: 8;
    grid-column: 3/11;
  }

  .tile-wrap {
    padding: 0 17.3%;
  }
}

@media (min-width: 2560px) {
  .container-text,
  .card-list,
  .card-error-text {
    -ms-grid-column: 4;
    -ms-grid-column-span: 6;
    grid-column: 4 / 10;
  }
}
</style>
