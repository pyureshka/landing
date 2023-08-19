<script setup>
defineProps(["icon"]);
</script>

<template>
  <article class="card-feature">
    <c-icon :name="icon" class="card-feature__icon"></c-icon>

    <h2 class="card-feature__title">
      <slot name="title" />
    </h2>

    <p class="card-feature__content">
      <slot name="content" />
    </p>
  </article>
</template>

<style>
.card-feature {
  flex: 1 0 0;

  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.card-feature__icon {
  height: 2rem;
  width: 2rem;
  fill: var(--color-primary);
}

.card-feature__title {
  font-size: var(--text-h2);
  font-weight: 400;
  margin: 0;
}

.card-feature__content {
  margin: 0;
}

@media screen and (max-width: 768px) {
  .card-feature {
    flex: auto;
  }
}
</style>
