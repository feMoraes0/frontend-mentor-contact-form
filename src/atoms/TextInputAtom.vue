<template>
  <input
    :class="{ error: hasError }"
    :id="id"
    :name="name"
    type="text"
    :required="required"
    v-model="input"
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string;
    id?: string;
    required?: boolean;
    hasError?: boolean;
  }>(),
  {
    required: false,
    hasError: false,
  },
);

const input = defineModel({ required: true });
</script>

<style scoped lang="scss">
input {
  background-color: var(--white);
  border-color: var(--grey-500);
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  color: var(--grey-900);
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 150%;
  padding: 12px 24px;

  &.error {
    border-color: var(--error-red);

    &:hover {
      border-color: var(--error-red);
    }
  }

  &:hover {
    border-color: var(--green-600);
  }
}
</style>
