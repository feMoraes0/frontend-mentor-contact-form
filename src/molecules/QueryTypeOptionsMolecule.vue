<template>
  <div class="query">
    <LabelAtom>Query Type</LabelAtom>
    <div class="query__options">
      <CheckboxAtom
        v-for="checkbox in checkboxes"
        :key="checkbox.option"
        :label="checkbox.label"
        :checked="checkbox.isChecked"
        @click="() => handleCheckbox(checkbox.option)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CheckboxAtom from "../atoms/CheckboxAtom.vue";
import LabelAtom from "../atoms/LabelAtom.vue";

type OptionsType = "general" | "support";

const checkboxes = ref<
  Array<{ label: string; option: OptionsType; isChecked: boolean }>
>([
  {
    label: "General Enquiry",
    option: "general",
    isChecked: false,
  },
  {
    label: "Support Request",
    option: "support",
    isChecked: false,
  },
]);

const emit = defineEmits<{
  (e: "select", option: OptionsType): void;
}>();

function handleCheckbox(option: OptionsType) {
  checkboxes.value.forEach((checkbox) => {
    checkbox.isChecked = checkbox.option === option;
  });
  emit("select", option);
}
</script>

<style scoped lang="scss">
$min-tablet-width: 768px;

.query {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__options {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

@media (width >= $min-tablet-width) {
  .query {
    &__options {
      flex-direction: row;
      align-items: center;
      justify-items: stretch;
    }
  }
}
</style>
