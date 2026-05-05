<template>
  <div>
    <LabelAtom :for="`${inputName}-input`">{{ label }}</LabelAtom>
    <TextInputAtom
      :id="`${inputName}-input`"
      :name="`${inputName}-input`"
      :hasError="hasError"
      :type="type"
      @input="onInput"
    />
    <ErrorMessageAtom v-if="hasError">
      {{ errorMessage }}
    </ErrorMessageAtom>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ErrorMessageAtom from "../atoms/ErrorMessageAtom.vue";
import LabelAtom from "../atoms/LabelAtom.vue";
import TextInputAtom from "../atoms/TextInputAtom.vue";

const props = defineProps<{
  errorMessage?: string | null;
  label: string;
  inputName: string;
  type?: "text" | "email";
}>();
const emit = defineEmits(["input"]);
const onInput = (text: string) => emit("input", text);

const hasError = computed(() => {
  return !!props.errorMessage?.length;
});
</script>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
</style>
