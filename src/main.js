import { createApp } from "vue";
import Page from "./components/layout/Page.vue";
import Wrapper from "./components/layout/Wrapper.vue";
import SectionBlock from "./components/layout/SectionBlock.vue";
import cBtn from "./components/ui/cBtn.vue";
import cInput from "./components/ui/cInput.vue";

import "./style.css";

import App from "./App.vue";

createApp(App)
  .component("Page", Page)
  .component("Wrapper", Wrapper)
  .component("SectionBlock", SectionBlock)
  .component("cBtn", cBtn)
  .component("cInput", cInput)

  .mount("#app");
