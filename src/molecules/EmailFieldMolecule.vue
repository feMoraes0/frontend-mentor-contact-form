<template>
  <div class="email-field">
    <LabelAtom for="email-input">Email Address</LabelAtom>
    <TextInputAtom
      id="email-input"
      name="email-input"
      type="email"
      :hasError="hasError"
      @input="onInput"
    />
    <ErrorMessageAtom v-if="hasError">
      Please enter a valid email address
    </ErrorMessageAtom>
  </div>
</template>

<script setup lang="ts">
import TextInputAtom from "../atoms/TextInputAtom.vue";
import LabelAtom from "../atoms/LabelAtom.vue";
import ErrorMessageAtom from "../atoms/ErrorMessageAtom.vue";

withDefaults(defineProps<{ hasError?: boolean }>(), { hasError: false });
const emit = defineEmits(["input"]);
const onInput = (text: string) => {
  emit("input", text);
};
</script>

<style scoped lang="scss">
.email-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  border: none;
}
</style>
