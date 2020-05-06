<template>
  <div class="card-container">
    <div class="card-overview">
      <img class="card-overview--img" :src="card.offer_image" :alt="card.offer_name" />
      <h2 class="card-overview--title">{{card.offer_name}}</h2>
      <CardRating :rating="card.star_rating" />
      <h3 class="card-section-name">WHY APPLY</h3>
      <span v-html="card.bottom_line" class="card-overview--bottom-line"></span>
      <a class="review-link" :href="card.review_url">Read Full Review</a>
    </div>
    <div v-if="affiliateLink" class="card-apply">
      <a :href="card.affiliate_link" class="apply-btn-wrap">
        <span class="apply-btn">Apply Now</span>
      </a>
      <p class="apply-disclaim">On {{card.issuer.possessive_name}} Secure Website</p>
    </div>
    <div v-else class="card-apply">
      <a :href="card.review_url" class="apply-btn-wrap">
        <span class="apply-btn">Read Full Review</span>
      </a>
      <p class="apply-disclaim">On {{card.issuer.possesive_name}} Secure Website</p>
    </div>
    <div class="card-details">
      <div class="card-details--section">
        <h3 class="card-section-name">REWARDS</h3>
      </div>
      <div class="card-details--section">
        <h3 class="card-section-name">ANNUAL FEE</h3>
      </div>
      <div class="card-details--section">
        <h3 class="card-section-name">INTRO APR</h3>
        <strong>Purchases: &nbsp;</strong>
        <span>{{card.intro_purchase_apr}}</span>
        <br />
        <strong>Balance Transfers: &nbsp;</strong>
        <span>{{card.intro_transfer_apr}}</span>
        <br />
        <strong>Ongoing APR: &nbsp;</strong>
        <span>{{card.regular_apr}}</span>
      </div>
      <div class="card-details--section">
        <h3 class="card-section-name">BONUSES & PERKS</h3>
      </div>
    </div>
  </div>
</template>

<script>
import CardRating from "./CardRating";

export default {
  name: "CardInfo",
  components: { CardRating },
  computed: {
    affiliateLink() {
      return this.card.affiliate_link && !this.card.affiliate_link_deactivate;
    }
  },
  props: {
    card: Object
  }
};
</script>

<style scoped>
.card-container {
  display: -ms-grid;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(2rem, auto);
  color: #1c1d20;
  border: none;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
  padding: 2.4rem 2rem 2rem;
  width: 40rem;
}

.card-overview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.card-overview--img {
  width: 100%;
  max-width: 40rem;
  min-width: 10rem;
}

.card-overview--title {
  padding: 8px 0;
  font-size: 2.4rem;
  line-height: 26px;
}

.card-section-name,
.card-overview--bottom-line {
  font-size: 1.4rem;
}

.card-section-name {
  padding: 8px 0;
  font-weight: bold;
}

.review-link {
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: bold;
}

.card-apply {
  padding: 1.5rem 0;
}

.apply-btn {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  background: #007a33;
  color: #fff;
  line-height: 1;
  border-radius: 4px;
  border: 2px solid #007a33;
  padding: 1.5rem 0;
  justify-content: center;
  font-weight: 700;
  font-size: 1.6rem;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
}

.apply-btn:hover {
  background: transparent;
  color: #007a33;
}

.apply-disclaim {
  margin-top: 5px;
  font-size: 1.4rem 0.5rem;
  color: #1c1d20;
  text-align: center;
}

.card-details--section {
  background-color: #edeeee;
  padding: 1.2rem;
  border-radius: 4px;
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
}
</style>