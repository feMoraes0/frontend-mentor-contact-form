<template>
  <div
    role="input-box"
    :class="['input-box', { 'input-box--active': checked }]"
    :onclick="onClick"
  >
    <div
      role="checkbox"
      :class="[
        'input-box__selector',
        { 'input-box__selector--active': checked },
      ]"
    />
    <label>{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  checked?: boolean;
}>();
const emit = defineEmits<{
  (e: "click"): void;
}>();

function onClick() {
  emit("click");
}
</script>

<style scoped lang="scss">
.input-box {
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

  &--active {
    background-color: var(--green-200);
    border-color: var(--green-600);
  }

  &:hover {
    border-color: var(--green-600);
  }

  &__selector {
    width: 19.5px;
    height: 19.5px;
    border-radius: 100%;
    border: 1px solid var(--grey-500);
    position: relative;

    &--active {
      border-color: var(--green-600);

      &::before {
        content: "";
        position: absolute;
        background-color: var(--green-600);
        width: 12.5px;
        height: 12.5px;
        border-radius: 100%;
        top: 2.5px;
        left: 2.5px;
      }
    }
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
