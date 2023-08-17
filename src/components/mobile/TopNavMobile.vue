<script setup>
import Menu from "../../assets/icons/Menu.svg";
import Search from "../../assets/icons/Search.svg";
</script>

<template>
  <div class="header__section header__section_mobile">
    <span class="header__logo header__logo_mobile">Avion</span>

    <div class="header__actions header__actions_left">
      <a href="/">
        <img :src="Search" alt="Search Icon" class="icon-action" />
      </a>
      <a href="/">
        <img :src="Menu" alt="User Icon" class="icon-action" />
      </a>
    </div>
  </div>
</template>
