<script setup>
defineProps(["title", "type", "icon"]);
</script>

<template>
  <button :type="type" class="btn">
    <img v-if="icon" :src="`src/assets/icons/${icon}.svg`" alt="Button Icon" />

    {{ title }}
  </button>
</template>

<style>
.btn {
  padding: 1rem 2rem;
  width: fit-content;
  background-color: var(--color-light-grey);
  color: var(--color-primary);
  border: none;
  text-align: center;
  cursor: pointer;

  display: flex;
}
.btn:hover {
  background-color: #ebe8f4;
}

.btn_center {
  align-self: center;
}

.btn_flat {
  background-color: unset;
}

.btn_dense {
  padding: 0.5rem;
}
</style>
