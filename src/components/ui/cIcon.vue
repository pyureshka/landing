<script setup>
defineProps({
  name: { type: String },
});
</script>

<template>
  <component :is="name"></component>
</template>
