<template>
  <section :class="{'dummy': true, 'footer': footer}">
    <h1>This is a dummy section</h1>
  </section>
</template>

<script>
export default {
  name: "DummySection",
  props: { footer: Boolean }
};
</script>

<style scoped>
.dummy {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40rem;
  color: #afafaf;
}

h1 {
  font-size: 50px;
  font-weight: bold;
}

.footer {
  color: #fff;
  background-color: #3b3d42;
}
</style>