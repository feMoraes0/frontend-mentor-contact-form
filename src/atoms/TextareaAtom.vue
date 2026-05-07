<template>
  <textarea
    :class="{ error: hasError }"
    :id="id"
    :name="name"
    v-model="input"
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    id: string;
    name: string;
    hasError?: boolean;
  }>(),
  {
    hasError: false,
  },
);

const input = defineModel<string>({ required: true });
</script>

<style scoped lang="scss">
textarea {
  border-width: 1px;
  border-style: solid;
  border-color: var(--grey-500);
  background-color: var(--white);
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0;
  font-weight: 400;
  color: var(--grey-900);
  cursor: pointer;
  resize: none;
  min-height: 295px;

  &.error {
    border-color: var(--error-red);
  }

  &:hover {
    border-color: var(--green-600);
  }
}
</style>
