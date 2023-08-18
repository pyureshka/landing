<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style>
.wrapper {
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
