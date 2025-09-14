<template>
  <div class="message-field">
    <LabelAtom for="message-input">Message</LabelAtom>
    <TextareaAtom
      id="message-input"
      name="message-input"
      :has-error="hasError"
      @input="onInput"
    />
    <ErrorMessageAtom v-if="hasError">
      This field is required
    </ErrorMessageAtom>
  </div>
</template>

<script setup lang="ts">
import ErrorMessageAtom from "../atoms/ErrorMessageAtom.vue";
import TextareaAtom from "../atoms/TextareaAtom.vue";
import LabelAtom from "../atoms/LabelAtom.vue";

withDefaults(defineProps<{ hasError?: boolean }>(), { hasError: false });
const emit = defineEmits(["input"]);
function onInput(text: string) {
  emit("input", text);
}
</script>

<style scoped lang="scss">
.message-field {
  border: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
}
</style>
