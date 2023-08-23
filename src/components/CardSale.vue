<script setup>
defineProps(["product", "prefix", "postfix"]);
</script>
<template>
  <article class="card-sale">
    <img :src="product.photo" alt="Product photo" class="card-sale__img" />

    <div class="card-sale__desc">
      <h4 class="card-sale__title">
        {{ product.name }}
      </h4>

      <span class="card-sale__price">
        {{ prefix }}
        {{ `${product.price}` }}
        {{ postfix }}
      </span>
    </div>
  </article>
</template>
<style>
.card-sale {
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
}

.card-sale__img {
  height: 375px;
  width: auto;
  max-width: 305px;
  object-fit: contain;

  align-self: stretch;
  flex: 1 0 0;

  display: flex;
}

.card-sale__desc {
}

.card-sale__title {
  font-size: var(--text-h4);
  margin: 0;
}
.card-sale__price {
  margin-top: 8px;
  display: block;
}

@media screen and (max-width: 768px) {
  .card-sale {
    width: calc(100% / 12 * 6 - 8px);
  }

  .card-sale__img {
    width: 100%;
    align-self: stretch;
    min-height: 201px;
  }
}
</style>
