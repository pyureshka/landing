<script setup>
defineProps(["title", "type"]);
</script>

<template>
  <button :type="type" class="btn">{{ title }}</button>
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
</style>
