<script setup>
defineProps(["product", "prefix", "postfix"]);
</script>
<template>
  <div class="card-sale">
    <img :src="product.photo" alt="" class="card-sale__img" />

    <div class="card-sale__desc">
      <h2 class="card-sale__name">
        {{ product.name }}
      </h2>

      <span class="card-sale__price">
        {{ prefix }}
        {{ `${product.price}` }}
        {{ postfix }}
      </span>
    </div>
  </div>
</template>
<style>
.card-sale {
  cursor: pointer;

  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
}
.card-sale:hover {
  background-color: #ebe8f4;
}

.card-sale__img {
  height: auto;
  width: auto;
  max-width: 100%;

  flex-shrink: 0;
}

.card-sale__desc {
  display: flex;
  flex-direction: column;
}

.card-sale__name {
  font-size: var(--text-h2);
  font-weight: 400;
  margin: 0;
}
.card-sale__price {
}

@media screen and (max-width: 1024px) {
  .card-sale:hover {
    background-color: unset;
    color: unset;
  }

  .card-sale {
    flex: 1 0 40%;
  }
}
</style>
