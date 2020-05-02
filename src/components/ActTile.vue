<template>
  <a class="act-tile act-tile--land">
    <div class="img-wrap">
      <img
        class="img"
        src="https://g.foolcdn.com/static/affiliates/project/images/icons/travel.svg"
        alt="travel icon"
      />
      <img
        class="img--hover"
        src="https://g.foolcdn.com/static/affiliates/project/images/icons/travel-white.svg"
        alt="travel icon"
      />
    </div>
    <span class="title">Travel</span>
  </a>
</template>

<script>
export default {
  name: "ActTile"
};
</script>

<style scoped>
.act-tile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  background-color: #006ba6;
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
  min-width: 23%;
  padding: 1rem;
  box-shadow: 0 18px 20px 0 rgba(0, 0, 0, 0.2);
}

.act-tile--land {
  background-color: #fff;
  transition: 0.2s ease all;
}

.img-wrap {
  width: 100%;
  text-align: center;
}

.img {
  height: 56px;
  width: 56px;
}

.img--hover {
  display: none;
}

.title {
}

@media (min-width: 600px) {
  .img-wrap {
    display: block;
  }
}
</style>