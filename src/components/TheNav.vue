<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
const links = [
  {
    id: 1,
    label: 'Форма',
    name: 'home'
  },
  {
    id: 2,
    label: 'Превью',
    name: 'preview'
  }
];
</script>

<template>
  <nav class="nav">
    <ul class="nav__list list-reset">
      <li class="nav__item" v-for="link in links" :key="link.id">
        <router-link :to="{ name: link.name }" :class="{'nav__link_active': link.name === route.name }" class="nav__link">{{
          link.label
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  &__link {
    opacity: 0.45;
    font-size: 14px;
    line-height: 24px;
    transition: color 0.3s ease;

    &_active {
      color: var(--color-btn);
    }
  }
}

@media (hover: hover) {
  .nav__link:hover {
    color: var(--color-btn);
  }
}
</style>
