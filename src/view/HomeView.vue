<script setup>
import CardFeature from "../components/CardFeature.vue";
import CardSale from "../components/CardSale.vue";

import { features } from "../staticData/CompanyInfo";
import { products } from "../staticData/ProductData";
</script>

<template>
  <page>
    <wrapper>
      <section class="content">
        <h1 class="content__title content__title_center">
          What makes our brand different
        </h1>

        <div class="content__main">
          <card-feature
            v-for="item in features"
            :key="item.title"
            :icon="item.icon"
          >
            <template #title>{{ item.title }}</template>
            <template #content>{{ item.content }}</template>
          </card-feature>
        </div>
      </section>

      <section class="content">
        <h1 class="content__title">New ceramics</h1>

        <div class="content__main">
          <card-sale
            v-for="item in products"
            :key="item.name"
            :product="item"
            prefix="£"
          />
        </div>

        <c-btn title="View collection" class="btn_center" />
      </section>
    </wrapper>
  </page>
</template>
