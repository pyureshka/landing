<script setup>
import Instagram from "../assets/icons/socialMedia/Instagram.svg";
import Facebook from "../assets/icons/socialMedia/Facebook.svg";
import Linkedin from "../assets/icons/socialMedia/Linkedin.svg";

import LinkList from "../components/LinkList.vue";

import { companyLinks, categoryLinks, menuLinks } from "../staticData/Links";
</script>
<template>
  <footer class="footer">
    <wrapper>
      <div class="content content_footer">
        <div class="footer__top">
          <link-list
            title="Menu"
            :list="menuLinks"
            light="true"
            class="link-list_light"
          />
          <link-list
            title="Categories"
            :list="categoryLinks"
            class="link-list_light"
          />
          <link-list
            title="Our company"
            :list="companyLinks"
            class="link-list_light"
          />

          <div class="form">
            <span class="form__title form__title_light">
              Join our mailing list
            </span>

            <form action="" class="form__single-input">
              <c-input type="email" class="input_dark"></c-input>
              <c-btn title="Sing up" type="submit" class="form__btn" />
            </form>
          </div>
        </div>

        <hr class="divider divider_footer" />

        <div class="footer__info">
          <span class="footer__text">Copyright 2022 Avion LTD</span>

          <div class="footer__media">
            <a href="/">
              <img :src="Instagram" alt="Instagram icon" class="icon-action" />
            </a>
            <a href="/">
              <img :src="Facebook" alt="Facebook icon" class="icon-action" />
            </a>
            <a href="/">
              <img :src="Linkedin" alt="Linkedin icon" class="icon-action" />
            </a>
          </div>
        </div>
      </div>
    </wrapper>
  </footer>
</template>
