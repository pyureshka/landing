<script setup>
defineProps(["icon"]);
</script>

<template>
  <div class="card-feature">
    <img
      :src="`src/assets/icons/${icon}.svg`"
      :alt="`${icon}`"
      class="card-feature__icon"
    />

    <h2 class="card-feature__title">
      <slot name="title" />
    </h2>

    <p class="card-feature__content">
      <slot name="content" />
    </p>
  </div>
</template>

<style>
.card-feature {
  max-width: 270px;

  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.card-feature__icon {
  height: 2rem;
  width: 2rem;
}

.card-feature__title {
  font-size: var(--text-h2);
  font-weight: 400;
  margin: 0;
}

.card-feature__content {
  margin: 0;
}

@media screen and (max-width: 500px) {
  .card-feature {
    max-width: fit-content;
  }
}
</style>
