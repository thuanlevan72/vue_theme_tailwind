import Vue from "vue";
// import App from "./App";

// import the fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";

// import the fontawesome icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// import config so we can set a default style
import { config } from "@fortawesome/fontawesome-svg-core";

// import icon style(s)
import { fas } from "@fortawesome/free-solid-svg-icons";

// add the icon style(s) you have installed to the library
library.add(fas);

// add FontAwesomeIcon to the Vue component
Vue.component("font-awesome-icon", FontAwesomeIcon);

// set the default style
config.styleDefault = "duotone";
