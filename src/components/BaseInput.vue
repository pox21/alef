<script setup>
defineEmits(['update:modelValue']);
const props = defineProps({
  name: String,
  inputType: String,
  modelValue: Number | String,
  max: String,
  min: String
});
</script>

<template>
  <label class="input-control">
    <span class="input-control__text"> {{ name }} </span>
    <input
      class="input-control__input"
      :type="inputType"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value.trim())"
      :max="max"
      :min="min"
    />
  </label>
</template>

<style lang="scss">
.input-control {
  display: flex;
  flex-direction: column;
  padding: 8px 16px 6px;

  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  transition: border-color 0.3s ease;

  &__text {
    font-size: 13px;
    line-height: 16px;
    opacity: 0.45;
  }

  &__input {
    border: none;
    background-color: transparent;
    padding: 0;
    outline: none;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-text);
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
  }

  &:focus-within {
    border-color: #91e0e4;
  }
}
</style>
