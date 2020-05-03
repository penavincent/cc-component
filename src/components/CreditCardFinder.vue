<template>
  <div class="container blk__copy">
    <div class="text">
      <h1 class="title">Looking for a new Credit Card? Let us help you out!</h1>
      <p
        class="description"
      >To help us find the best card for you, first tell us where you are at with your credit score. Pick one of the options below!</p>
    </div>
    <div class="tiles blk__copy blk-action_tile_list">
      <div class="grid grid--int grid--mob">
        <div class="tile-wrap">
          <ActTile text="Travel" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActTile from "./ActTile";

export default {
  name: "CreditCardFinder",
  components: { ActTile }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-column: 1/-1;
  padding-bottom: 1rem;
  background-color: #72246c;
  margin-bottom: 1rem;
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
