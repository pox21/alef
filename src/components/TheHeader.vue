<script setup>
import BaseLogo from './BaseLogo.vue';
import TheNav from './TheNav.vue';

</script>

<template>
  <header class="header">
    <div class="container header__container">
      <base-logo />
      <the-nav />

    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding: 22px 0;
  background-color: inherit;
  box-shadow: 0 1px 0 rgba(17, 17, 17, 0.1);

  &__container {
    display: flex; 
    align-items: center;
  }

  & .nav {
    margin: 0 auto;
  }
}
</style>


