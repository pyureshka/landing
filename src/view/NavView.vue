<script setup>
import TopNavDesktop from "../components/desktop/TopNavDesktop.vue";
import TopNavMobile from "../components/mobile/TopNavMobile.vue";

import { useSize } from "../composables/useSize";

let { isDesktop } = useSize();
</script>

<template>
  <header class="header">
    <top-nav-desktop v-if="isDesktop"></top-nav-desktop>
    <top-nav-mobile v-else></top-nav-mobile>
  </header>
</template>
