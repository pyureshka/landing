import { createApp } from "vue";

import register from "./registerComponents";

import "./style.css";

import App from "./App.vue";

createApp(App).use(register).mount("#app");
