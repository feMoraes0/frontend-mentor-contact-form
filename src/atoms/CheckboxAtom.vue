<template>
  <div role="input-box" :class="{ isActive: isActive }" :onclick="onClick">
    <input
      type="checkbox"
      :id="id"
      :name="name"
      :required="required"
      :checked="isActive"
      :onchange="onClick"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

withDefaults(
  defineProps<{
    id: string;
    name: string;
    label: string;
    required?: boolean;
  }>(),
  {
    required: false,
  },
);
const emit = defineEmits<{
  (e: "onClick", isActive: boolean): void;
}>();

const isActive = ref(false);

function onClick() {
  isActive.value = !isActive.value;
  emit("onClick", isActive.value);
}
</script>

<style scoped lang="scss">
div {
  align-items: center;
  border-color: var(--grey-500);
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding: 12px 24px;
  width: 100%;

  &.isActive {
    background-color: var(--green-200);
    border-color: var(--green-600);
  }

  &:hover {
    border-color: var(--green-600);
  }

  label {
    color: var(--grey-900);
    cursor: inherit;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 150%;
    user-select: none;
  }
}
</style>
