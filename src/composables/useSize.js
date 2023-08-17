import { ref } from "vue";

let isDesktop = ref(window.matchMedia("(min-width: 390px)").matches);

window.addEventListener(
  "resize",
  () => (isDesktop.value = window.matchMedia("(min-width: 390px)").matches)
);

export function useSize() {
  return { isDesktop };
}
