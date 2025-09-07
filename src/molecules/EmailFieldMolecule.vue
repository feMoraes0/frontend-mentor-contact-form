<template>
  <fieldset>
    <LabelAtom for="email-input">Email Address</LabelAtom>
    <TextInputAtom
      id="email-input"
      name="email-input"
      type="email"
      :has-error="hasError"
      error-message="Please enter a valid email address"
      @onChange="onChange"
      required
    />
  </fieldset>
</template>

<script setup lang="ts">
import TextInputAtom from "../atoms/TextInputAtom.vue";
import LabelAtom from "../atoms/LabelAtom.vue";
import { ref } from "vue";

const hasError = ref(false);

const emit = defineEmits<{
  (e: "onInput", value: string): void;
}>();

function onChange(value: string) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!value || !emailRegex.test(value)) {
    hasError.value = true;
    return;
  }
  hasError.value = false;
  emit("onInput", value);
}
</script>

<style scoped lang="scss">
fieldset {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  border: none;
}
</style>
