<template>
  <input
    :class="{ error: hasError }"
    :id="id"
    :name="name"
    :type="type"
    :required="required"
    :onchange="onChange"
  />
  <p role="error-message" v-if="hasError">
    {{ errorMessage }}
  </p>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string;
    id?: string;
    type?: "text" | "email";
    required?: boolean;
    hasError?: boolean;
    errorMessage?: string;
  }>(),
  {
    required: false,
    type: "text",
    hasError: false,
  },
);

const emit = defineEmits<{
  (e: "onChange", text: string): void;
}>();

function onChange(event: { target: { value: string } }) {
  const { value } = event.target;
  emit("onChange", value);
}
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

  & + p {
    color: var(--error-red);
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 150%;
  }
}
</style>
