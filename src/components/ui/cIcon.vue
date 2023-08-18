<script setup>
defineProps({
  width: { default: "1rem" },
  color: { default: "var(--color-primary)" },
  name: { type: String },
});
</script>

<template>
  <component :is="name"></component>
</template>
