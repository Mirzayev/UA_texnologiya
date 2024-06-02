import { createApp } from "vue";
// import { createPinia } from "pinia";
import App from "./App.vue";
import "@/styles/index.css";

import i18n from "./plugins/i18";
import router from "./router";

// toast notification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// i18n

// maska;
import Maska from "maska";

// element plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// const pinia = createPinia();

const app = createApp(App);
app.use(router);
// app.use(pinia);
app.use(Toast);
app.use(Maska);
app.use(i18n);
app.use(ElementPlus);
app.mount("#app");
