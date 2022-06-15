<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="col-lg-10 offset-1">
        <img
          class="mb-4 w-100"
          :src="require(`@/assets/img/${link.image}`)"
          :alt="link.image"
        />
        <h2>{{ link.header }}</h2>
        <div class="description"></div>
        {{ link.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    link() {
      return this.$store.getters["getToursById"](this.$route.params.id);
    },
  },
  methods: {
    navigate(id) {
      console.log(id);
    },
  },
};
</script>
