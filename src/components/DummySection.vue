<template>
  <section :class="{'dummy': true,'disclosure': disclosure,'footer': footer}">
    <h1>{{text}}</h1>
  </section>
</template>

<script>
export default {
  name: "DummySection",
  props: {
    text: String,
    disclosure: Boolean,
    footer: Boolean
  }
};
</script>

<style scoped>
.dummy {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/-1;
  height: 40rem;
  color: #afafaf;
  font-size: 4rem;
  font-weight: bold;
}

.disclosure {
  height: 10rem;
  border-top: 1px solid lightgray;
  font-size: 1.4rem;
  font-weight: normal;
}

.footer {
  color: #fff;
  background-color: #3b3d42;
}
</style>