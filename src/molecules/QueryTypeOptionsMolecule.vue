<template>
  <div class="query">
    <LabelAtom>Query Type</LabelAtom>
    <div class="query__options">
      <CheckboxAtom
        id="query-input-general"
        name="query-input-general"
        label="General Enquiry"
        :checked="isGeneralSelected"
        @click="() => handleCheckbox('general')"
      />
      <CheckboxAtom
        id="query-input-support"
        name="query-input-support"
        label="Support Request"
        :checked="isSupportSelected"
        @click="() => handleCheckbox('support')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import CheckboxAtom from "../atoms/CheckboxAtom.vue";
import LabelAtom from "../atoms/LabelAtom.vue";

type OptionsType = "general" | "support";

const typeSelected = ref<OptionsType | null>(null);
const isGeneralSelected = computed(() => typeSelected.value === "general");
const isSupportSelected = computed(() => typeSelected.value === "support");

const emit = defineEmits<{
  (e: "select", option: OptionsType): void;
}>();

function handleCheckbox(option: OptionsType) {
  if (typeSelected.value === option) return;
  typeSelected.value = option;
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

    &__input {
      flex: 1;
      &:first-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
