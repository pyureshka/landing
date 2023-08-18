import { createApp } from "vue";
import Page from "./components/layout/Page.vue";
import Wrapper from "./components/layout/Wrapper.vue";
import SectionBlock from "./components/layout/SectionBlock.vue";
import Content from "./components/layout/Content.vue";
import "./style.css";

import App from "./App.vue";

createApp(App)
  .component("Page", Page)
  .component("Wrapper", Wrapper)
  .component("SectionBlock", SectionBlock)
  .mount("#app");
