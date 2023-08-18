<script setup>
import User from "../../assets/icons/User.svg";
import Cart from "../../assets/icons/Cart.svg";
import Search from "../../assets/icons/Search.svg";

import { navLinks } from "../../staticData/Links";
</script>

<template>
  <div class="header__section">
    <div class="header__actions header__actions_right">
      <a href="/">
        <img :src="Search" alt="Search Icon" class="icon-action" />
      </a>
    </div>

    <span class="header__logo">Avion</span>

    <div class="header__actions header__actions_left">
      <a href="/">
        <img :src="Cart" alt="Cart Icon" class="icon-action" />
      </a>
      <a href="/">
        <img :src="User" alt="User Icon" class="icon-action" />
      </a>
    </div>
  </div>

  <hr class="divider divider_header" />

  <ul class="header__links-list">
    <li v-for="link in navLinks">
      <a :href="`${link.link}`"> {{ link.title }}</a>
    </li>
  </ul>
</template>
