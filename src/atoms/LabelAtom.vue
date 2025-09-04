<template>
  <label :for="for">
    <slot />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  for?: string;
}>();
</script>

<style scoped lang="scss">
label {
  color: var(--grey-900);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 150%;

  &::after {
    color: var(--green-600);
    content: " *";
  }
}
</style>
