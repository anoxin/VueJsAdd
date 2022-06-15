import Vue from 'vue'

Vue.filter('shortenText', (value) => {
  if (value.length > 400) {
    value = value.slice(0, 400);
  }
  return value;
})