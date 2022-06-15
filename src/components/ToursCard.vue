<template>
  <div @click="onEmmit(link.id)">
    <div class="item-wrapper d-flex flex-column mb-4">
      <img
        :src="require(`@/assets/img/${link.image}`)"
        class="mb-3"
        :alt="link.image"
      />

      <h3 class="">{{ link.header }}</h3>
      <div class="description">
        {{ link.text | shortenText }}
        <br />
        <span v-if="link.text.length > 400">Читать далее ...</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onEmmit(id) {
      this.$emit("onNavigate", id);
    },
  },
};
</script>
