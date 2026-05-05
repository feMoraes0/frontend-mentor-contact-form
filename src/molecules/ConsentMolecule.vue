<template>
  <div>
    <fieldset>
      <input
        type="checkbox"
        name="consent-input"
        id="consent-input"
        :checked="isChecked"
        :onchange="onClick"
      />
      <LabelAtom for="consent-input">
        I consent to being contacted by the team
      </LabelAtom>
    </fieldset>
    <ErrorMessageAtom v-if="hasError">
      To submit this form, please consent to being contacted
    </ErrorMessageAtom>
  </div>
</template>

<script setup lang="ts">
import ErrorMessageAtom from "../atoms/ErrorMessageAtom.vue";
import LabelAtom from "../atoms/LabelAtom.vue";
import { ref } from "vue";

defineProps<{ hasError?: boolean }>();
const isChecked = ref(false);
const emit = defineEmits<{
  (e: "click", value: boolean): void;
}>();
const onClick = () => {
  isChecked.value = !isChecked.value;
  emit("click", isChecked.value);
};
</script>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  gap: 8px;

  fieldset {
    align-items: center;
    border: none;
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: stretch;
    padding-right: 36px;
    user-select: none;
    width: fit-content;

    input {
      height: 24px;
      width: 24px;
      cursor: pointer;
    }
  }
}
</style>
