<script setup>
import { useUsersStore } from '@/stores/usersStore';

const { users } = useUsersStore();
</script>
<template>
  <h1 class="visually-hidden">Страница просмотра данных</h1>
  <section class="preview">
    <div class="container">
      <ul class="preview__user-list list-reset">
        <li class="preview__user user" v-for="item in users" :key="item.id">
          <h2 class="section-title">Персональные данные</h2>
          <p class="user__header">{{ item.name }}, {{ item.age }} лет</p>
          <h2 v-if="item.children.length" class="section-title preview__title">
            Дети
          </h2>
          <ul class="user__children-list list-reset">
            <li
              class="user__children-item"
              v-for="child in item.children"
              :key="child.id"
            >
              {{ child.child_name }}, {{ child.child_age }} лет
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.preview {
  padding-top: 30px;
  &__user-list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 616px;
    margin: 0 auto;
  }

  &__user {
    &:not(:last-child) {
      padding-bottom: 40px;
      border-bottom: 1px solid var(--color-border);
    }
  }

  &__title {
    margin-bottom: 20px;
  }
}

.user {
  &__header {
    margin-bottom: 60px;
  }

  &__children-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__children-item {
    max-width: fit-content;
    padding: 10px 20px;
    background-color: #f1f1f1;
    border-radius: 5px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #000;
  }
}
</style>
