<template>
  <a
    class="act-tile act-tile--land"
    :class="{chosen}"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div v-if="image && imageHover" class="tile__img-wrap">
      <img v-show="!hover && !chosen" class="tile__img" :src="image" :alt="text + ' icon'" />
      <img
        v-show="hover || chosen"
        class="tile__img--hover"
        :src="imageHover"
        :alt="text + ' icon'"
      />
    </div>
    <span :class="{'tile__title': true, 'textonly': !image && !imageHover}">{{text}}</span>
  </a>
</template>

<script>
export default {
  name: "ActTile",
  props: {
    text: String,
    image: String,
    imageHover: String,
    chosen: Boolean
  },
  data() {
    return {
      hover: false
    };
  }
};
</script>

<style scoped>
a {
  font-size: 1.6rem;
}

.act-tile {
  display: -webkit-flex;
  display: inline-block;
  display: flex;
  position: relative;
  min-width: 23%;
  min-height: 4rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 2rem;
  overflow: hidden;
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
  background: #006ba6;
  color: #204060;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
  z-index: 5;
  cursor: pointer;
}

.act-tile--land {
  background-color: #fff;
  transition: 0.2s ease all;
}

.act-tile--land:hover,
.chosen {
  background-color: #204060;
  color: #fff;
}

.tile__img-wrap {
  display: none;
  width: 100%;
  text-align: center;
}

.tile__img,
.tile__img--hover {
  height: 56px;
  width: 56px;
}

.tile__title {
  position: relative;
  font-size: 1.6rem;
  line-height: 1.8rem;
  text-align: center;
}

.textonly {
  font-size: 4rem;
  font-weight: bold;
}

@media (min-width: 600px) {
  .tile__img-wrap {
    display: block;
  }

  .act-tile {
    padding: 1rem;
    box-shadow: 0 18px 20px 0 rgba(0, 0, 0, 0.2);
  }

  .tile__title {
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 2.4rem;
    align-self: flex-start;
  }
}

@media (min-width: 1024px) {
  .tile__title {
    margin-top: 0;
  }

  .textonly {
    margin-top: 1rem;
  }
}

@media (max-width: 768px) {
  .textonly {
    font-size: 2rem;
  }
}
</style>