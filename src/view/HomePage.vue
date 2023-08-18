<script setup>
import CardFeature from "../components/ui/CardFeature.vue";
import CardSale from "../components/ui/CardSale.vue";

import { featureInfo } from "../staticData/HomePageData";
import { products } from "../staticData/ProductData";
</script>

<template>
  <page>
    <wrapper>
      <section-block>
        <div class="content">
          <h1 class="content__title content__title_center">
            What makes our brand different
          </h1>

          <div class="content__main">
            <card-feature
              v-for="item in featureInfo"
              :key="item.title"
              :icon="item.icon"
            >
              <template #title>{{ item.title }}</template>
              <template #content>{{ item.content }}</template>
            </card-feature>
          </div>
        </div>
      </section-block>

      <section-block>
        <div class="content">
          <h1 class="content__title">New ceramics</h1>

          <div class="content__main content__main_overflow">
            <card-sale
              v-for="item in products"
              :key="item.name"
              :product="item"
              prefix="£"
            />
          </div>

          <btn title="View collection" class="btn_center" />
        </div>
      </section-block>
    </wrapper>
  </page>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

.content__title {
  font-size: var(--text-h1);
  font-weight: 400;

  margin: 0;
}

.content__title_center {
  align-self: center;
}

.content__main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 2rem;
}

.content__main_overflow {
  max-height: 500px;

  overflow: hidden;
}
@media screen and (max-width: 700px) {
  .content__main_overflow {
    max-height: 1000px;
  }
}

.btn_center {
  align-self: center;
}
</style>
