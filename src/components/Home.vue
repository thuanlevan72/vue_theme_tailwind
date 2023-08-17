<template>
  <div>
    <Header></Header>
    <Slider></Slider>
    <PricingTables></PricingTables>
    <TeamMenbres />
    <Contact></Contact>
    <Feature />
    <Footer />
  </div>
</template>

<script>
import Header from "./layout/Header.vue";
import Slider from "./layout/Slider.vue";
import Feature from "./Feature.vue";
import PricingTables from "./PricingTables.vue";
import TeamMenbres from "./TeamMenbres.vue";
import Contact from "./Contact.vue";
import Footer from "./layout/Footer.vue";
export default {
  name: "VueHome",
  components: {
    Header,
    Slider,
    Feature,
    PricingTables,
    TeamMenbres,
    Contact,
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
