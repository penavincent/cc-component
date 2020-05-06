<template>
  <div class="card-container">
    <!-- Overview: Card image, Name, Rating, and Summary -->
    <div class="card-overview">
      <img class="card-overview--img" :src="card.offer_image" :alt="card.offer_name" />
      <h2 class="card-overview--title">{{card.offer_name}}</h2>
      <CardRating :rating="card.star_rating" />
      <h3 class="card-section-name">WHY APPLY</h3>
      <span v-html="card.bottom_line" class="card-overview--bottom-line"></span>
      <a class="review-link" :href="card.review_url">Read Full Review</a>
    </div>

    <!-- Application: Card Apply Button -->
    <div v-if="affiliateLink" class="card-apply">
      <a :href="card.affiliate_link" class="apply-btn-wrap" target="_blank">
        <span class="apply-btn">Apply Now</span>
      </a>
      <p class="apply-disclaim">On {{card.issuer.possessive_name}} Secure Website</p>
    </div>
    <div v-else class="card-apply">
      <a :href="card.review_url" class="apply-btn-wrap" target="_blank">
        <span class="apply-btn">Read Full Review</span>
      </a>
    </div>

    <!-- Details: Additional details like Rewards, Annual Fees, APR, and Bonuses -->
    <div class="card-details">
      <div class="card-details--section">
        <h3 class="card-section-name">REWARDS</h3>
        <p>{{card.rewards_program}}</p>
      </div>
      <div class="card-details--section">
        <h3 class="card-section-name">ANNUAL FEE</h3>
        <p>{{card.annual_fee}}</p>
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
        <p>{{card.bonus}}</p>
      </div>
    </div>

    <!-- Highlights: Marketing points for the card -->
    <div class="card-highlights">
      <h3 class="card-section-name">HIGHLIGHTS</h3>
      <div class="card-highlights--list" v-html="card.marketing_bullets" />
    </div>

    <!-- Link to card's terms and conditions -->
    <a :href="card.terms_and_conditions_link" class="card-tac" target="_blank">
      Rates and Fees
      <img
        src="https://g.foolcdn.com/static/affiliates/project/images/icon_external_link.svg"
        alt="External Link Icon"
        height="8px"
        width="8px"
      />
    </a>
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
  grid-template-rows:
    minmax(50rem, auto) 10rem minmax(55rem, auto) minmax(55rem, auto)
    2rem;
  color: #1c1d20;
  border: none;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
  padding: 1rem 2rem;
  width: 36rem;
}

/* Overview */
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

/* Apply Button */
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

/* Card Details */
.card-details {
  border-bottom: 1px solid lightgray;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
}

.card-details--section {
  background-color: #edeeee;
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  min-height: 10rem;
}

.card-highlights {
  font-size: 1.4rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #edeeee;
  margin-bottom: 1.5rem;
}

.card-highlights--list {
  margin-left: 2rem;
}

/* TOS link */
.card-tac {
  min-height: 2rem;
}
</style>