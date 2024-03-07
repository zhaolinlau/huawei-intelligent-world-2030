import Oruga from "@oruga-ui/oruga-next";
import { bulmaConfig } from "@oruga-ui/theme-bulma";
import "assets/main.scss";
import "@mdi/font/css/materialdesignicons.min.css";
import "bulma-list/css/bulma-list.css";
import "animate.css/animate.css";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(Oruga, bulmaConfig);
});
