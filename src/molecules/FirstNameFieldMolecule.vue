<template>
  <div>
    <LabelAtom for="first-name-input">First Name</LabelAtom>
    <TextInputAtom
      id="first-name-input"
      name="first-name-input"
      :hasError="hasError"
      @input="onInput"
    />
    <ErrorMessageAtom v-if="hasError">
      This field is required
    </ErrorMessageAtom>
  </div>
</template>

<script setup lang="ts">
import ErrorMessageAtom from "../atoms/ErrorMessageAtom.vue";
import LabelAtom from "../atoms/LabelAtom.vue";
import TextInputAtom from "../atoms/TextInputAtom.vue";

withDefaults(defineProps<{ hasError?: boolean }>(), { hasError: false });
const emit = defineEmits(["input"]);
function onInput(text: string) {
  emit("input", text);
}
</script>
