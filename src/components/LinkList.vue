<script setup>
defineProps(["list", "itemsRow", "light", "title"]);
</script>
<template>
  <div :class="{ 'link-list': true, 'link-list_light': light }">
    <span v-if="title" class="link-list__title">{{ title }}</span>

    <ul
      :class="{
        'link-list__link': true,
        'link-list__link_row': itemsRow,
      }"
    >
      <li v-for="item in list">
        <a :href="`${item.link}`"> {{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style>
.link-list {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}

.link-list * {
  color: var(--color-light-primary);
}

.link-list_light * {
  color: #fff;
}

.link-list__title {
  font-size: 16px;
}

.link-list__link {
  padding: 0;
  margin: 0;
  list-style: none;

  font-size: 14px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  column-gap: 44px;
  row-gap: 12px;
  flex-wrap: wrap;
}

.link-list__link_row {
  flex-direction: row;
}

.link-list__link a {
  text-decoration: none;
}
</style>
