import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    // dark: true,
    themes: {
      light: {
        primary: "#37b7c7",
        secondary: "#ccc",
        accent: "#8c9eff",
        error: "#E39A9A"
      }
    }
  }
});
