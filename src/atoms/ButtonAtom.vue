<template>
  <button @click="onClick" :type="type">
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ type?: "button" | "submit" | "reset" }>(), {
  type: "button",
});
const emit = defineEmits<{ (e: "onClick"): void }>();

function onClick() {
  emit("onClick");
}
</script>

<style lang="scss" scoped>
button {
  background-color: var(--green-600);
  border-radius: 8px;
  border: 1px solid var(--green-600);
  color: var(--white);
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 150%;
  padding: 16px 0;
}
</style>
