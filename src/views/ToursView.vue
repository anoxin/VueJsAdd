<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="grid d-flex justify-content-between flex-wrap">
        <tours-card
          @click="onEmmit(link.id)"
          v-for="link in links.tours"
          :key="link.id"
          :link="link"
          @onNavigate="navigate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ToursCard from "@/components/ToursCard.vue";

export default {
  components: { ToursCard },
  computed: {
    links() {
      return this.$store.getters["getToursLinks"];
    },
  },
  methods: {
    navigate(id) {
      console.log(id);
      this.$router.push({
        name: "tours",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>
