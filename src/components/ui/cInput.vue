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
  padding: 16px 32px;
  border: none;
  align-self: stretch;
  flex: 1 0 0;

  font-family: "Sanva", sans-serif;
  font-size: 16px;
  color: var(--color-primary);

  display: flex;
  align-items: center;
}

.input:focus {
  outline: none;
}

.input::placeholder {
  opacity: 0.5;
  color: #fff;
}

.input_dark {
  background-color: #ffffff26;
}

@media screen and (max-width: 768px) {
  .input {
    width: 100%;
  }
}
</style>
