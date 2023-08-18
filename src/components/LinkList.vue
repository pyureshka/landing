<script setup>
defineProps(["list", "itemsRow", "light"]);
</script>
<template>
  <div :class="{ 'link-list': true, 'link-list_light': light }">
    <span class="link-list__title"><slot /></span>

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
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;
}

.link-list * {
  color: var(--color-light-primary);
}

.link-list_light * {
  color: #fff;
}

.link-list__title {
  font-size: var(--text-h2);
  font-weight: 400;
}

.link-list__link {
  padding: 0;
  margin: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  column-gap: 4rem;
  row-gap: 1rem;
  flex-wrap: wrap;
}

.link-list__link_row {
  flex-direction: row;
}

.link-list__link a {
  text-decoration: none;
}
</style>
