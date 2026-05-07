<template>
  <div>
    <LabelAtom :for="`${inputName}-input`">{{ label }}</LabelAtom>
    <component
      :is="getComponentByType"
      :id="`${inputName}-input`"
      :name="`${inputName}-input`"
      :hasError="hasError"
      :type="type"
      v-model="model"
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
import TextareaAtom from "../atoms/TextareaAtom.vue";

const props = defineProps<{
  errorMessage?: string | null;
  label: string;
  inputName: string;
  type?: "text" | "email" | "textarea";
}>();

const model = defineModel<string>({ required: true });

const hasError = computed(() => {
  return !!props.errorMessage?.length;
});

const getComponentByType = computed(() => {
  if (props.type === "textarea") return TextareaAtom;
  return TextInputAtom;
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
