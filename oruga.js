import Oruga from "@oruga-ui/oruga-next";
import { bulmaConfig } from "@oruga-ui/theme-bulma";
import "@/assets/css/bulma.css";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(Oruga, bulmaConfig);
});
