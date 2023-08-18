<script setup>
import CardFeature from "../components/ui/CardFeature.vue";
import { featureInfo } from "../staticData/HomePageData";
</script>

<template>
  <page>
    <wrapper>
      <content>
        <div class="content-feature">
          <h1 class="content-feature__title">What makes our brand different</h1>

          <div class="content-feature__main">
            <card-feature v-for="item in featureInfo" :icon="item.icon">
              <template #title>{{ item.title }}</template>
              <template #content>{{ item.content }}</template>
            </card-feature>
          </div>
        </div>
      </content>
    </wrapper>
  </page>
</template>

<style>
.content-feature {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

.content-feature__title {
  font-size: var(--text-h1);
  font-weight: 400;

  align-self: center;
  margin: 0;
}

.content-feature__main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 2rem;
}
</style>
