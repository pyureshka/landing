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
  padding: 16px 32px;
  /* width: fit-content; */
  border: none;
  background-color: var(--color-light-grey);

  font-family: "Sanva", sans-serif;
  font-size: 16px;
  color: var(--color-primary);

  cursor: pointer;

  display: flex;
  justify-content: center;
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
  padding: 0;
}

@media screen and (max-width: 768px) {
  .btn {
    width: 100%;
  }
}
</style>
