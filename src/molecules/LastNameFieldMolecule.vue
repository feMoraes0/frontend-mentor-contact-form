<template>
  <div>
    <LabelAtom for="last-name-input">Last Name</LabelAtom>
    <TextInputAtom
      id="last-name-input"
      name="last-name-input"
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
