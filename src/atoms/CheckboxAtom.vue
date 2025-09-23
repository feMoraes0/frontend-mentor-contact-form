<template>
  <div role="input-box" :class="{ isActive: checked }" :onclick="onClick">
    <input
      type="checkbox"
      :id="id"
      :name="name"
      :required="required"
      :checked="checked"
      :onchange="onClick"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    id: string;
    name: string;
    label: string;
    required?: boolean;
    checked?: boolean;
  }>(),
  {
    required: false,
    checked: false,
  },
);
const emit = defineEmits<{
  (e: "click"): void;
}>();

function onClick(event: { preventDefault: () => {} }) {
  event.preventDefault();
  emit("click");
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
