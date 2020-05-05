<template>
  <div v-if="cardsSuggested.card1" class="card-container">
    <div class="card-overview">
      <img
        class="card-overview--img"
        :src="cardsSuggested.card1.offer_image"
        :alt="cardsSuggested.card1.offer_name"
      />
      <h2 class="card-overview--title">{{cardsSuggested.card1.offer_name}}</h2>
      <CardRating :rating="cardsSuggested.card1.star_rating" />
      <h3 class="card-overview--section-name">WHY APPLY</h3>
      {{cardsSuggested.card1.bottom_line}}
      <a
        class="review-link"
        :href="cardsSuggested.review_url"
      >Read Full Review</a>
    </div>
  </div>
</template>

<script>
import CardRating from "./CardRating";

export default {
  name: "CardInfo",
  components: { CardRating },
  props: {
    card: Object
  }
};
</script>

<style>
</style>