<script setup>
import { useUsersStore } from '@/stores/usersStore';
import { reactive, ref } from 'vue';
import BaseInput from '../components/BaseInput.vue';
import { nanoid } from 'nanoid';

const form = ref(null);

const { setUser } = useUsersStore();
const isValid = ref(true);
const person = reactive({
  name: "",
  age: '',
  children: []
});

const addChild = () => {
  person.children.push({});
};

const removeChild = (index) => {
  person.children.splice(index, 1);
};

const isNotEmpty = (value) => {
  return value.trim().length > 0
}

const isValidate = (form) => {
  const result = []
  form.forEach(input => {
    if (input.tagName === 'INPUT') {
      result.push(isNotEmpty(input.value));
    }
  })
  return result.every(Boolean);
}

const addUser = () => {
  if (!isValidate(Array.from(form.value))) {
    isValid.value = false;
    return;
  };

  isValid.value = true;
  person.id = nanoid();
  setUser({...person});
  
  person.name = "";
  person.age = "";
  person.id = "";
  person.children = [];
};
</script>
<template>
  <section>
    <h1 class="visually-hidden">Форма добавления данных</h1>
    <div class="container">
      <form class="form" ref="form" @submit.prevent="addUser">
        <h2 class="section-title form__title">Персональные данные</h2>
        <div class="form__inputs form__inputs--margin">
          <base-input
            inputType="text"
            v-model="person.name"
            name="Имя"
          />
          <base-input
            inputType="number"
            min="18"
            max="99"
            v-model="person.age"
            name="Возраст"
          />
        </div>
        <div class="form__children">
          <h2 class="section-title">Дети (макс. 5)</h2>
          <button
            v-if="person.children.length < 5"
            @click="addChild"
            class="form__add-child"
            type="button"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.13332 7.85555C1.50125 7.85555 0.988866 8.36794 0.988867 9C0.988867 9.63206 1.50126 10.1445 2.13332 10.1445L7.85544 10.1445L7.85545 15.8668C7.85545 16.4989 8.36784 17.0113 8.9999 17.0113C9.63196 17.0113 10.1444 16.4989 10.1444 15.8668L10.1443 10.1445L15.8667 10.1445C16.4988 10.1445 17.0112 9.63207 17.0112 9.00001C17.0112 8.36795 16.4988 7.85556 15.8667 7.85556L10.1443 7.85556L10.1443 2.13338C10.1443 1.50132 9.63195 0.988927 8.99989 0.988927C8.36783 0.988927 7.85544 1.50131 7.85544 2.13338L7.85544 7.85555L2.13332 7.85555Z"
                fill="currentColor"
              />
            </svg>
            Добавить ребенка
          </button>
        </div>
        <div class="form__inputs">
          <div
            v-for="(child, i) in person.children"
            :key="(child.child_id = i + 1)"
            class="form__children-inputs"
          >
            <base-input
              inputType="text"
              v-model="child.child_name"
              name="Имя"
            />
            <base-input
              inputType="number"
              min="0"
              max="99"
              v-model="child.child_age"
              name="Возраст"
            />
            <button
              @click="removeChild(i)"
              type="button"
              class="form__children-del"
            >
              Удалить
            </button>
          </div>
        </div>
        <p v-if="!isValid" style="color: red">Заполните все поля</p>
        <button type="submit" class="form__submit">Сохранить</button>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.form {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  max-width: 616px;
  margin: 0 auto;

  &__title {
    margin-bottom: 20px;
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 10px 18px;
    margin-bottom: 32px;
  }

  &__add-child {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 10px 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    border: 2px solid var(--color-btn);
    color: var(--color-btn);
    border-radius: 100px;
    background-color: inherit;
  }

  &__children {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  &__children-inputs {
    width: 100%;
    display: grid;
    grid-template-columns: 5fr 5fr 1fr;
    gap: 18px;
  }

  &__children-del {
    padding: 0;
    background-color: inherit;
    color: #01a7fd;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  &__submit {
    align-self: flex-start;
    padding: 10px 20px;
    background-color: var(--color-btn);
    border-radius: 100px;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
}
</style>
