import { createApp } from "vue";
import "./style.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import StyleClass from "primevue/styleclass";
import Galaxy from "./galaxy";

const app = createApp(App);
app.component("Button", Button);
app.directive("styleclass", StyleClass);
app.use(PrimeVue, { unstyled: true, pt: Galaxy });
app.mount("#app");
