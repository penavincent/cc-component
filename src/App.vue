<template>
  <div id="app">
    <Header />
    <DummySection />
    <CreditCardFinder />
    <DummySection />
    <DummySection footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import CreditCardFinder from "./components/CreditCardFinder.vue";
import DummySection from "./components/DummySection.vue";

export default {
  name: "App",
  components: {
    Header,
    CreditCardFinder,
    DummySection
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
  max-width: 1440px;
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
