<script setup>
import LinkList from "../../components/LinkList.vue";

import { navLinks } from "../../staticData/Links";
</script>

<template>
  <div class="header__section">
    <div class="header__actions header__actions_right">
      <a href="/">
        <c-icon name="IconSearch" class="icon-action"></c-icon>
      </a>
    </div>

    <span class="header__logo">Avion</span>

    <div class="header__actions header__actions_left">
      <a href="/">
        <c-icon name="IconCart" class="icon-action"></c-icon>
      </a>
      <a href="/">
        <c-icon name="IconUser" class="icon-action"></c-icon>
      </a>
    </div>
  </div>

  <hr class="divider divider_header" />

  <nav class="nav">
    <link-list :list="navLinks" items-row="true"></link-list>
  </nav>
</template>
