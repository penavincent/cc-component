<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
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
  font-family: "PT Sans", Arial, Helvetica, sans-serif;
}
</style>
