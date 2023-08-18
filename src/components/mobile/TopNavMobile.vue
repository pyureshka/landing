<script setup>
import Menu from "../../assets/icons/Menu.svg";
import Search from "../../assets/icons/Search.svg";
</script>

<template>
  <div class="header__section header__section_mobile">
    <span class="header__logo header__logo_mobile">Avion</span>

    <div class="header__actions header__actions_left">
      <c-btn icon="Search" class="btn_flat btn_dense" />
      <c-btn icon="Menu" class="btn_flat btn_dense" />
    </div>
  </div>
</template>
