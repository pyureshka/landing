<script setup>
defineProps(["title", "type", "icon"]);
</script>

<template>
  <button :type="type" class="btn">
    <c-icon :name="icon"></c-icon>

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
