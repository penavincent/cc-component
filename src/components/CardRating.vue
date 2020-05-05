<template>
  <div class="star-wrap">
    <div class="star-rating">
      <span aria-hidden="false" class="wag">Rating Image. {{rating}} out of 5 stars</span>
      <span class="star-rating__stars">
        <span class="star">
          <img
            src="https://g.foolcdn.com/static/affiliates/project/images/star_icon--gray.svg"
            alt
            height="22.5"
            width="20"
          />
        </span>
        <span class="star">
          <img
            src="https://g.foolcdn.com/static/affiliates/project/images/star_icon--gray.svg"
            alt
            height="22.5"
            width="20"
          />
        </span>
        <span class="star">
          <img
            src="https://g.foolcdn.com/static/affiliates/project/images/star_icon--gray.svg"
            alt
            height="22.5"
            width="20"
          />
        </span>
        <span class="star">
          <img
            src="https://g.foolcdn.com/static/affiliates/project/images/star_icon--gray.svg"
            alt
            height="22.5"
            width="20"
          />
        </span>
        <span class="star">
          <img
            src="https://g.foolcdn.com/static/affiliates/project/images/star_icon--gray.svg"
            alt
            height="22.5"
            width="20"
          />
        </span>
        <span class="stars-selected" :style="ratingToWidth">
          <span class="star">
            <img
              src="https://g.foolcdn.com/static/affiliates/project/images/star_icon.svg"
              alt
              height="22.5"
              width="20"
            />
          </span>
          <span class="star">
            <img
              src="https://g.foolcdn.com/static/affiliates/project/images/star_icon.svg"
              alt
              height="22.5"
              width="20"
            />
          </span>
          <span class="star">
            <img
              src="https://g.foolcdn.com/static/affiliates/project/images/star_icon.svg"
              alt
              height="22.5"
              width="20"
            />
          </span>
          <span class="star">
            <img
              src="https://g.foolcdn.com/static/affiliates/project/images/star_icon.svg"
              alt
              height="22.5"
              width="20"
            />
          </span>
          <span class="star">
            <img
              src="https://g.foolcdn.com/static/affiliates/project/images/star_icon.svg"
              alt
              height="22.5"
              width="20"
            />
          </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardRating",
  props: {
    rating: Number
  },
  computed: {
    ratingToWidth: function() {
      return `width:${this.rating * 20}%`;
    }
  }
};
</script>

<style scoped>
.star-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  width: 100%;
}

.star-rating {
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
}

.star-rating__stars {
  display: -webkit-flex;
  display: flex;
  position: relative;
  width: auto;
  text-align: center;
  margin: 5px auto;
}

.star {
  margin-right: 2px;
}

.stars-selected {
  position: absolute;
  display: -webkit-flex;
  display: flex;
  left: 0;
  top: 0;
  overflow: hidden;
}
</style>