<template>
  <div class="container">
    <div class="content">
      <h1 class="title">Looking for a new Credit Card? Let us help you out!</h1>
      <p
        class="description"
      >To help us find the best card for you, first tell us where you are at with your credit score. Pick one of the options below!</p>
      <div class="tiles">
        <ActTile />
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
  display: flex;
  justify-content: center;
  background-color: #72246c;
  height: 30rem;
}

.content {
  color: #fff;
  max-width: 1000px;
}

.title {
  font-size: 48px;
}

.description {
  font-size: 14px;
}
</style>
