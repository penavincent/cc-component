<template>
  <div id="app">
    <Header />
    <!-- Main container wrapping the whole page -->
    <div class="main-contain" role="main">
      <!-- Header Section -->
      <div class="main--top">
        <breadcrumbs />
      </div>
      <!-- Page Content section -->
      <div class="copy__main" id="main-copy">
        <DummySection text="Dummy Hero" />
        <CreditCardFinder />
        <DummySection text="Dummy Secondary Section" />
      </div>
    </div>
    <!-- Disclosure section -->
    <div class="disc disc__foot">
      <dummy-section
        text="We own shares and recommend Visa and Mastercard. We're firm believers in the Golden Rule, and we're really cool, too."
        disclosure
      />
    </div>
    <!-- Footer section -->
    <div class="foot" role="contentinfo">
      <DummySection text="Dummy Footer" footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import CreditCardFinder from "./components/CreditCardFinder.vue";
import DummySection from "./components/DummySection.vue";
import Breadcrumbs from "./components/Breadcrumbs.vue";

export default {
  name: "App",
  components: {
    Header,
    CreditCardFinder,
    DummySection,
    Breadcrumbs
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700&display=swap");

* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
  height: 100%;
  font-weight: 400;
}

body {
  box-sizing: border-box;
  min-height: 100%;
  color: #1c1d20;
  font-family: "PT Sans", sans-serif;
}

.copy__main {
  display: grid;
  grid-template-columns: 20px repeat(10, 1fr) 20px;
}

.grid {
  display: -ms-grid;
  display: grid;
}

.grid--int {
  -ms-grid-columns: minmax(100px, 1440px);
  grid-template-columns: minmax(100px, 1440px);
  justify-content: center;
}

.grid--mob {
  padding: 0 20px 0 20px;
}

.blk__copy {
  -ms-grid-columns-start: 2;
  -ms-grid-column-span: 10;
  grid-column: 2 / 12;
  clear: both;
}

.blk--int {
  display: -ms-grid;
  -ms-grid-columns-start: 2;
  -ms-grid-column-span: 10;
  display: grid;
  position: relative;
  grid-column: 2/12;
  max-width: 1000px;
  margin: 0 auto;
}

.blk-action_tile_list {
  -ms-grid-columns: 1fr 1fr;
  grid-column: 1 / -1;
  grid-template-columns: 1fr;
}

.wag {
  display: none;
}

@media (min-width: 768px) {
  .copy__main {
    grid-template-columns: repeat(12, 1fr);
  }

  .blk-action_tile_list {
    grid-column-gap: 3rem;
  }
}

@media (min-width: 1024) {
  .blk--int {
    -ms-grid-column-start: 3;
    -ms-grid-column-span: 9;
    grid-column: 3/11;
  }
}

@media (min-width: 1224px) {
  .blk-action_tile_list {
    width: 100%;
  }
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 10px;
  height: 12px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #e9e9e9;
}

::-webkit-scrollbar-thumb {
  background-color: #999999;
  border-radius: 8px;
  border: 2px solid #d8d8d8;
}
</style>
