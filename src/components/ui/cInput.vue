<script setup>
defineProps(["type"]);

const typesPlaceholder = {
  email: "your@email.com",
};
</script>

<template>
  <input :type="type" :placeholder="typesPlaceholder[type]" class="input" />
</template>

<style>
.input {
  padding: 1rem 2rem;
  color: var(--color-primary);
  border: none;

  display: flex;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
}

.input:focus {
  outline: none;
}

.input::placeholder {
  opacity: 0.5;
  color: #fff;
}

.input_dark {
  background-color: var(--color-light-primary);
}
</style>
