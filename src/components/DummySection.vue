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
  -ms-grid-column: 1;
  grid-column: 1/-1;
  height: 40rem;
  color: #afafaf;
  font-size: 4rem;
}

.disclosure {
  height: 10rem;
  border-top: 1px solid lightgray;
  font-size: 1.4rem;
  max-width: 1000px;
  margin: 0 auto;
}

.footer {
  color: #fff;
  background-color: #3b3d42;
}

@media (max-width: 768px) {
  .dummy {
    font-size: 2.5rem;
  }

  .disclosure {
    font-size: 1rem;
    height: 8rem;
    padding: 0 2rem;
  }
}

@media (max-width: 425px) {
  .dummy {
    font-size: 2rem;
  }

  .disclosure {
    font-size: 0.8rem;
    height: 5rem;
    padding: 0 2rem;
  }
}
</style>