<template>
  <div id="app">
    <dummy-header />
    <!-- Main container wrapping the whole page -->
    <div class="main-contain" role="main">
      <!-- Header Section -->
      <div class="main--top">
        <bread-crumbs />
      </div>
      <!-- Page Content section -->
      <div class="copy__main" id="main-copy">
        <DummySection text="Dummy Hero" />
        <credit-card-finder />
        <DummySection text="Dummy Secondary Section" />
      </div>
    </div>
    <!-- Disclosure section -->
    <div>
      <dummy-section
        text="We own shares and recommend Visa and Mastercard. We're firm believers in the Golden Rule, and we're really cool, too."
        disclosure
      />
    </div>
    <!-- Footer section -->
    <div role="contentinfo">
      <dummy-section text="Dummy Footer" footer />
    </div>
  </div>
</template>

<script>
import DummyHeader from "./components/DummyHeader.vue";
import CreditCardFinder from "./components/CreditCardFinder.vue";
import DummySection from "./components/DummySection.vue";
import BreadCrumbs from "./components/BreadCrumbs.vue";

export default {
  name: "App",
  components: {
    DummyHeader,
    CreditCardFinder,
    DummySection,
    BreadCrumbs
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700&display=swap");
@import url("./base.css");
</style>
