<script setup>
defineProps(["title"]);
</script>

<template>
  <button type="button" class="btn">{{ title }}</button>
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
}
.btn:hover {
  background-color: #ebe8f4;
}
</style>
