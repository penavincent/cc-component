<template>
  <div class="loader" />
</template>

<script>
export default {
  name: "BaseLoader"
};
</script>

<style scoped>
.loader {
  border: 1.2rem solid #f3f3f3;
  border-top: 1.2rem solid #72246c;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>