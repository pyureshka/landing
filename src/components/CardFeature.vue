<script setup>
defineProps(["icon"]);
</script>

<template>
  <article class="card-feature">
    <c-icon :name="icon" class="card-feature__icon"></c-icon>

    <h4 class="card-feature__title">
      <slot name="title" />
    </h4>

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
}

.card-feature__icon {
  height: 24px;
  width: 24px;
  fill: var(--color-primary);
}

.card-feature__title {
  font-size: var(--text-h4);
  margin-top: 16px;
}

.card-feature__content {
  margin: 8px 0 0 0;
}

@media screen and (max-width: 768px) {
  .card-feature {
    flex: auto;
  }

  .card-feature__content {
    margin-top: 12px;
  }

  .card-feature__title {
    font-size: 16px;
  }
}
</style>
