<template>
  <div class="container grid grid--int">
    <p class="breadcrumbs">The Ascent > Any Page</p>
    <p class="ad-disc">Advertiser Disclosure</p>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs"
};
</script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  font-size: 1.2rem;
}

.breadcrumbs {
  padding: 1rem 8rem 0;
  grid-row: 1;
}

.ad-disc {
  position: relative;
  text-align: right;
  padding: 1rem 8rem 0 0;
  grid-row: 1;
}
</style>