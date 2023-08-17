<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
export default {
  name: "VueMain",
  components: {
    Header,
    RouterView,
    Footer,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
