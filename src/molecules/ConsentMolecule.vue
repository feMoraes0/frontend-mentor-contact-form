<template>
  <fieldset>
    <input
      type="checkbox"
      name="consent-input"
      id="consent-input"
      :checked="isChecked"
      :onchange="onClick"
      required
    />
    <LabelAtom for="consent-input">
      I consent to being contacted by the team
    </LabelAtom>
  </fieldset>
</template>

<script setup lang="ts">
import LabelAtom from "../atoms/LabelAtom.vue";
import { ref } from "vue";

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
</style>
